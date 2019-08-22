import {Directive, ElementRef, EventEmitter, Input, Output, Renderer2} from '@angular/core';
import {ViewMode} from '../../service/design.service';

export interface ResizeEvent {
  hostElement: Element;
  moveX: number;
  status: 'start' | 'moving' | 'done';
}

@Directive({
  selector: '[ma-resize]',
})
export class MaResizeDirective {

  private readonly el: HTMLElement;

  private readonly resizeHook: HTMLDivElement;

  @Output()
  resize: EventEmitter<ResizeEvent> = new EventEmitter<ResizeEvent>();


  startX: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.el = this.elementRef.nativeElement;
    this.resizeHook = this.createResizeHook();
  }


  createResizeHook() {
    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'ma-resize-hook');
    this.renderer.listen(div, 'mousedown', this.initResize);
    return div;
  }

  @Input()
  set viewMode(viewMode: ViewMode) {
    if (viewMode === ViewMode.DESIGN) {
      this.renderer.appendChild(this.el, this.resizeHook);
    } else {
      this.renderer.removeChild(this.el, this.resizeHook);
    }
  }

  initResize = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    this.startX = event.pageX;
    this.resize.emit({hostElement: this.el, moveX: 0, status: 'start'});

    document.documentElement.addEventListener('mouseup', this.emitResize, false);
    document.documentElement.addEventListener('mousemove', this.emitResize, false);
  }

  emitResize = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    const moveX = event.pageX - this.startX;

    const resizeEvent: ResizeEvent = {hostElement: this.el, moveX, status: 'moving'};
    if (event.type === 'mouseup') {
      document.documentElement.removeEventListener('mouseup', this.emitResize, false);
      document.documentElement.removeEventListener('mousemove', this.emitResize, false);
      resizeEvent.status = 'done';
    }

    this.resize.emit(resizeEvent);
  }

}
