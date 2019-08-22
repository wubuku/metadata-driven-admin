import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Optional, Output, QueryList, SimpleChanges, TemplateRef, ViewChild, ViewChildren} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {CdkDrag, CdkDragDrop, CdkDragMove, CdkDropList, CdkDropListContainer, CdkDropListGroup, moveItemInArray} from '@angular/cdk/drag-drop';
import {NzModalRef} from 'ng-zorro-antd';

import {ArrayField, Button, Cell, Component as UIComponent, FormItem, FormPanel, InputNumber, MapField, Text} from '../../model';
import {assembleObject, flatObject} from '../../util';
import {ViewMode} from '../../service/design.service';
import {MaFormControlComponent} from './form-control/ma-form-control.component';
import {ResizeEvent} from '../resize/ma-resize.directive';
import {ComponentManager} from '../../service/component-manager';
import {ComponentDefinition} from '../../bootstrap/component-registrar';
import {ViewportRuler} from '@angular/cdk/overlay';

declare type FormType = 'form' | 'confirm';

@Component({
  selector: 'ma-form-panel',
  templateUrl: './ma-form-panel.component.html',
  styleUrls: ['./ma-form-panel.component.less']
})
export class MaFormPanelComponent implements OnChanges, OnInit, AfterViewInit {


  @Input()
  formPanel: FormPanel;

  @Input()
  buttons: TemplateRef<void>;

  @Input()
  showTitle = false;

  @Input()
  buttonsPlacement: string; // none /line-end/ footer

  @Input()
  viewMode: ViewMode;

  formType: FormType = 'form'; // form / confirm

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  cancel: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  buttonClick: EventEmitter<Button> = new EventEmitter<Button>();

  @Output()
  setting: EventEmitter<any> = new EventEmitter<any>();

  formGroup: FormGroup;

  doCollapse = true;
  markCollapseIndex: number;
  offsetWidth = 0;

  @Input()
  formValue: any;


  // settings相关
  @ViewChildren(MaFormControlComponent)
  formControls: QueryList<MaFormControlComponent>;

  operators: string[];
  formItemDefinitions: ComponentDefinition[];

  visibleFormItemSettings: ElementRef;


  // 拖拽相关的处理逻辑
  @ViewChild(CdkDropListGroup, {static: false})
  listGroup: CdkDropListGroup<CdkDropList>;

  @ViewChild(CdkDropList, {static: false})
  placeholder: CdkDropList;  // 空白的可拖放容器，用于拖动时的判断和复制


  target: CdkDropList;
  targetIndex: number;
  source: CdkDropList;
  sourceIndex: number;
  dragIndex: number;
  activeContainer: CdkDropList;


  dragging = false;


  // resize 相关的处理逻辑
  startResizeCellWidth: number;
  startResizeLabelWidth: number;
  startResizeControlWidth: number;


  constructor(private viewportRuler: ViewportRuler, @Optional() public modalRef: NzModalRef, private componentManager: ComponentManager) {

  }


  ngOnChanges(changes: SimpleChanges): void {
    // 根据 buttonsPlacement 和 formPanel 计算出表单的类型
    if (changes.buttonsPlacement || changes.formPanel) {
      this.doMarkFormType();

      if (changes.formPanel) {
        this.createFormGroup();
        this.toggleCollapse();
      }
    }

    if (changes.formValue) {
      this.formGroup.patchValue(flatObject(this.formValue));
    }
  }

  ngOnInit(): void {
    this.operators = ['eq', 'ne', 'ge', 'gt', 'le', 'lt', 'in', 'like', 'between'];
    this.formItemDefinitions = this.componentManager.getComponentDefinitions('form-item');
  }

  ngAfterViewInit() {
    if (this.placeholder) {
      const phElement = this.placeholder.element.nativeElement;
      phElement.style.display = 'none';
      phElement.parentNode.removeChild(phElement);
    }
  }

  createFormGroup() {
    const formGroup = new FormGroup({});
    for (const cell of this.formPanel.body.children) {
      const item = cell.content;
      formGroup.addControl(item.field, this.formItemToControl(item));
    }
    this.formGroup = formGroup;
    this.formGroup.patchValue(flatObject(this.formValue));
  }

  formItemToControl(node: FormItem) {
    const validators = [];
    if (node.required) {
      validators.push(Validators.required);
    }

    if (node instanceof Text) {
      if (node.minLength) {
        validators.push(Validators.minLength(node.minLength));
      }
      if (node.maxLength) {
        validators.push(Validators.maxLength(node.maxLength));
      }

      if (node.pattern) {
        validators.push(Validators.pattern(node.pattern));
      }
    } else if (node instanceof InputNumber) {
      if (node.min) {
        validators.push(Validators.min(node.min));
      }
      if (node.max) {
        validators.push(Validators.max(node.max));
      }
    } else if (node instanceof MapField) {
      const key = this.formItemToControl(node.key);
      const val = this.formItemsToControlOrGroup(node.val);
      const entry = new FormGroup({key: key, val: val});
      return new FormArray([entry], [...validators, this.uniqueKeyValidator]);
      // return new FormControl(node.value, []);
    } else if (node instanceof ArrayField) {
      const items = this.formItemsToControlOrGroup(node.items);
      return new FormArray([items], validators);
    }

    return new FormControl(node.value, validators);
  }

  formItemsToControlOrGroup(items: FormItem[]) {
    if (items.length > 1) {
      const group = new FormGroup({});
      for (const item of items) {
        group.addControl(item.field, this.formItemToControl(item));
      }
      return group;
    }
    return this.formItemToControl(items[0]);
  }

  uniqueKeyValidator(formArray: FormArray): ValidationErrors | null {
    if (formArray.parent) {
      const array: {key: string, value: any}[] = formArray.value;
      if (array) {
        const errorMessages = [];
        for (let i = 0; i < array.length; i++) {
          const key = array[i].key;
          const index = array.findIndex(item => key === item.key);
          if (index !== -1) {
            errorMessages.push(`key不能重复，第${i + 1}行与第${index}行的key重复了`);
          }
        }
        return {uniqueKey: errorMessages.join('<br/>')};
      }
    }
    return null;
  }

  /**
   * 标记该form对象是否为一个confirm form
   */
  doMarkFormType() {
    if (this.buttonsPlacement === 'footer') {
      const cells = this.formPanel.body.children;
      if (!cells.find(cell => cell.width > 0)) {
        this.formType = 'confirm';
      }
      this.updateModalProperties();
    }
  }

  updateModalProperties() {
    if (this.modalRef) {
      const modalComponent = this.modalRef.getInstance();
      setTimeout(() => {
        modalComponent.nzBodyStyle = {padding: 0};
        if (this.formType === 'confirm') {
          modalComponent.nzWidth = 416;
          modalComponent.nzClosable = false;
          modalComponent.nzClassName = 'ant-modal-confirm-confirm';
        }
      }); // TODO ExpressionChangedAfterItHasBeenCheckedError
    }
  }

  toggleCollapse() {
    let sum = 0;
    const cells = this.formPanel.body.children;
    // 如果form可折叠，并且当前操作为折叠操作，则计算首行中按钮的宽度
    if (this.formPanel.collapsible && this.doCollapse) {
      for (let i = 0; i < cells.length; i++) {
        sum += cells[i].width;
        this.offsetWidth = 24 - sum - this.formPanel.buttonsWidth;
        if (cells.length > i + 1) {
          const nextCellWidth = cells[i + 1].width;
          if (this.offsetWidth < 0) {
            sum = 0;
            continue;
          }
          if (this.offsetWidth < nextCellWidth) {
            this.markCollapseIndex = i;
            break;
          }
        } else {
          break;
        }
      }
    } else {
      this.markCollapseIndex = cells.length;
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        sum += cell.width;
      }
      this.offsetWidth = 24 - (sum % 24) - this.formPanel.buttonsWidth;
    }
    this.doCollapse = !this.doCollapse;
  }

  getFormValue() {
    return assembleObject(this.formGroup.value);
  }

  emitSubmit() {
    this.submit.emit(this.getFormValue());
  }

  emitCancel() {
    if (this.formGroup) {
      this.formGroup.reset({});
    }

    this.cancel.emit();

    if (this.modalRef) {
      this.modalRef.triggerCancel();
    }
  }

  processClick(button: Button) {
    if (button.triggerType === 'cancel') {
      this.emitCancel();
    } else if (button.triggerType === 'submit') {
      this.emitSubmit();
    } else {
      this.buttonClick.emit(button);
    }
  }

  trackByIndex(index: number) {
    return index;
  }

  // 以下方法都是设计器模式对于视图元数据进行加工处理的方法

  addButton() {
    const button = new Button();
    button.classType = 'primary';
    button.label = '新按钮' + this.formPanel.buttons.length;
    this.formPanel.buttons.push(button);
  }

  deleteButton(button: Button) {
    const index = this.formPanel.buttons.indexOf(button);
    this.formPanel.buttons.splice(index, 1);
  }

  toggleVisibility(cell: Cell) {
    if (this.isInvisible(cell)) {
      cell.width = 8;
    } else {
      cell.width = 0;
    }
  }

  isInvisible(cell: Cell) {
    return cell.width === 0 || cell.width === null || cell.width === undefined;
  }

  /**
   * 设置表单元数据
   */
  settingForm() {
    this.setting.emit(); // 向外发送设置信号
  }

  /**
   * 打开表单项元数据设置
   * @param i 表单项数组下标位置
   */
  settingFormControl(i: number) {
    const control = this.formControls.find((c, index) => i === index);
    control.setting();
  }

  toggleFormItemSettingsVisibility(visible: boolean, ref: ElementRef) {
    this.visibleFormItemSettings = visible ? ref : null;
  }

  changeFormItemType(type: string, cell: Cell<FormItem>) {
    const options = {...cell.content, type};
    cell.content = <FormItem>UIComponent.create(options);
  }

  toggleDragging() {
    this.dragging = !this.dragging;
  }

  dragMoved(e: CdkDragMove) {
    const point = this.getPointerPositionOnPage(e.event);

    this.listGroup._items.forEach(dropList => {
      if (this.isInsideDropListClientRect(dropList, point.x, point.y)) {
        this.activeContainer = dropList;
        return;
      }
    });
  }

  getPointerPositionOnPage(event: MouseEvent | TouchEvent) {
    const point = this.isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
    const scrollPosition = this.viewportRuler.getViewportScrollPosition();

    return {
      x: point.pageX - scrollPosition.left,
      y: point.pageY - scrollPosition.top
    };
  }

  isInsideDropListClientRect(dropList: CdkDropList, x: number, y: number) {
    const {top, bottom, left, right} = dropList.element.nativeElement.getBoundingClientRect();
    return y >= top && y <= bottom && x >= left && x <= right;
  }

  isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
    return event.type.startsWith('touch');
  }


  dropListDropped() {

    if (!this.target) {
      return;
    }

    const phElement = this.placeholder.element.nativeElement;
    const parent = phElement.parentElement;

    phElement.style.display = 'none';

    parent.removeChild(phElement);
    parent.appendChild(phElement);
    parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);

    this.target = null;
    this.source = null;

    if (this.sourceIndex !== this.targetIndex) {
      moveItemInArray(this.formPanel.body.children, this.sourceIndex, this.targetIndex);
    }
  }


  /**
   * 变量说明
   * drag: 表示被拖动的元素
   * drop: 表示被拖动元素进入的容器
   * target：表示被拖动元素此刻进入的容器
   * source: 表示被拖动元素原本所在的容器
   * placeholder: 空白的容器模板对象，可用于复制替换其他容器
   *
   * 触发与执行流程
   * 触发与执行流程可以划分为三种
   * 一、 第一次被拖动的元素由drop触发调用，即：此刻被放入的容器不是placeholder。
   * 设置drop为target，取得drop的元素下标位置，取得drag所在容器的下标位置。
   * 此时source为null，将drag所在容器赋值给source，将source的元素属性复制给placeholder元素， 从dom节点中删除source元素。
   * 将placeholder元素插入到target所在的位置或target的下一个位置。
   * 此刻再次设置source进入拖动状态，然后手动触发placeholder进入enter状态，placeholder会再一次的触发调用该方法。(start、enter是一对完整的调用，调用placeholder的enter方法的前提就是source的start状态)
   *
   * 二、 此次调用由placeholder手动触发，因此在执行drop === this.placeholder判断时等于true，调用流程结束，直接返回true。
   * 本次调用结束之后，drag的dropContainer替换为placeholder元素。
   *
   * 三、 由下一个被拖动的元素由drop触发调用，因此drop === this.placeholder等于false
   * 设置drop为target，取得drop的元素下标位置，取得drag所在容器的下标位置。 drag所在容器的下标位置就是placeholder元素的下标位置，原本的容器由于经过了流程二，被替换为placeholder元素。
   * 此时source不为null（source的值在流程一种设置）
   * 将placeholder元素插入到target所在的位置或target的下一个位置，由于在步骤一中已经插入过placeholder节点了，因此本次执行并不会插入一个新的节点，而是调整一下位置。
   * 设置source进入拖动状态， 触发placeholder进入enter状态，由于drag的所在容器此刻也是placeholder， 因此触发placeholder进入enter状态之后不再会进入下一个循环
   * @param drag 被拖动的元素
   * @param drop 被拖动元素进入的容器
   */
  dropListEnteredPredicate = (drag: CdkDrag, drop: CdkDropList) => {
    if (drop === this.placeholder) {
      return true;
    }

    if (drop !== this.activeContainer) {
      return false;
    }

    const phElement = this.placeholder.element.nativeElement;
    const dropGroupElement = drop.element.nativeElement.parentNode;

    const dropElement = drop.element.nativeElement;
    const sourceContainerElement = drag.dropContainer.element.nativeElement;


    const dragIndex = this.indexOf(dropGroupElement.children,  (this.source ? phElement : sourceContainerElement));
    const dropIndex = this.indexOf(dropGroupElement.children, dropElement);

    this.target = drop;
    this.targetIndex = dropIndex;

    /**
     * 之所以要判断this.source是否有值，是由于拖动逻辑需要记录鼠标点击拖动时的container，并且将其赋值给source，source的值会在drop释放时再次用到。
     * 如果不做判断，那么source的值将会被placeholder替换，等drop释放时，就无法得到正确的container
     */
    if (!this.source) {
      this.sourceIndex = dragIndex;
      this.source = drag.dropContainer;

      phElement.style.width = sourceContainerElement.clientWidth + 'px';
      phElement.style.height = sourceContainerElement.clientHeight + 'px';

      sourceContainerElement.parentNode.removeChild(sourceContainerElement); // 删除被拖动的元素的容器
    }

    phElement.style.display = '';

    /**
     * 将placeholder元素插入到target所在的位置或target的下一个位置，由于在步骤一中已经插入过placeholder节点了，因此本次执行并不会插入一个新的节点，而是调整一下位置。
     * (如果被拖动元素的位置在被拖入元素的位置之前，就将placeholder.element放置在被拖入元素的下一个元素位置，否则就放置在拖入的位置)
     */
    dropGroupElement.insertBefore(phElement, (dropIndex > dragIndex ) ? dropElement.nextSibling : dropElement);

    this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);
    return false;
  }


  indexOf(collection: HTMLCollection, node) {
    return Array.prototype.indexOf.call(collection, node);
  }

  resizeCellWidth({moveX, hostElement, status}: ResizeEvent, cell: Cell<FormItem>) {
    if (status === 'start') {
      this.startResizeCellWidth = cell.width;
    }

    const unitWidth = hostElement.parentElement.parentElement.clientWidth / 24;
    const moveSpan = Math.round(moveX / unitWidth);

    if (this.startResizeCellWidth + moveSpan <= 24) {
      cell.width = this.startResizeCellWidth + moveSpan;
    }
  }

  resizeFormItemLabelWidth({moveX, hostElement, status}: ResizeEvent, item: FormItem) {
    if (status === 'start') {
      this.startResizeLabelWidth = item.labelWidth;
    }

    const unitWidth = hostElement.parentElement.clientWidth / 24;
    const moveSpan = Math.round(moveX / unitWidth);


    const labelWidth = this.startResizeLabelWidth + moveSpan;

    if (labelWidth > 1 && labelWidth < 24) {
      item.labelWidth = labelWidth;
    }
  }

  resizeFormItemControlWidth({moveX, hostElement, status}: ResizeEvent, item: FormItem) {
    if (status === 'start') {
      this.startResizeControlWidth = item.fieldWidth;
    }

    const unitWidth = hostElement.parentElement.clientWidth / 24;
    const moveSpan = Math.round(moveX / unitWidth);


    const controlWidth = this.startResizeControlWidth + moveSpan;

    if (controlWidth > 1 && controlWidth < 24) {
      item.fieldWidth = controlWidth;
    }
  }

}
