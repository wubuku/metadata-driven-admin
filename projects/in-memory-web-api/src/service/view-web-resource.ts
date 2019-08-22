import {WebResource} from './web-resource';
import {RequestInfo} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';
import {HttpRequest} from '@angular/common/http';

const VIEWS = [
  {
    'name': '新建Facility',
    'language': 'zh',
    'path': '/Facilities.post',
    'data': {
      'type': 'form',
      'path': '/api/Facilities',
      'method': 'post',
      'contentType': 'application/json',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '新建Facility',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '新建Facility',
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'body.facilityId',
                'label': 'Facility Id',
                'description': 'Facility Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.facilityTypeId',
                'label': 'Facility Type Id',
                'description': 'Facility Type Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.parentFacilityId',
                'label': 'Parent Facility Id',
                'description': 'Parent Facility Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.ownerPartyId',
                'label': 'Owner Party Id',
                'description': 'Owner Party Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.defaultInventoryItemTypeId',
                'label': 'Default Inventory Item Type Id',
                'description': 'Default Inventory Item Type Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.facilityName',
                'label': 'Facility Name',
                'description': 'Facility Name',
                'maxLength': 100,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.primaryFacilityGroupId',
                'label': 'Primary Facility Group Id',
                'description': 'Primary Facility Group Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.oldSquareFootage',
                'label': 'Old Square Footage',
                'description': 'Old Square Footage'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.facilitySize',
                'label': 'Facility Size',
                'description': 'Facility Size'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.facilitySizeUomId',
                'label': 'Facility Size Uom Id',
                'description': 'Facility Size Uom Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.productStoreId',
                'label': 'Product Store Id',
                'description': 'Product Store Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.defaultDaysToShip',
                'label': 'Default Days To Ship',
                'description': 'In the absence of a product specific days to ship in ProductFacility, this will be used'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.openedDate',
                'label': 'Opened Date',
                'description': 'Opened Date'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.closedDate',
                'label': 'Closed Date',
                'description': 'Closed Date'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 255,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.defaultDimensionUomId',
                'label': 'Default Dimension Uom Id',
                'description': 'This field store the unit of measurement of dimension (length, width and height)',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.defaultWeightUomId',
                'label': 'Default Weight Uom Id',
                'description': 'Default Weight Uom Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.geoPointId',
                'label': 'Geo Point Id',
                'description': 'Geo Point Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.deleted',
                'label': '是否被删除',
                'description': '是否被删除'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': '分页查询Facility',
    'language': 'zh',
    'path': '/Facilities',
    'data': {
      'type': 'table',
      'fixedHeader': false,
      'title': '分页查询Facility',
      'showPagination': true,
      'columns': [
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'facilityId',
          'label': 'Facility Id',
          'index': 0
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'facilityTypeId',
          'label': 'Facility Type Id',
          'index': 1
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'parentFacilityId',
          'label': 'Parent Facility Id',
          'index': 2
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'ownerPartyId',
          'label': 'Owner Party Id',
          'index': 3
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'defaultInventoryItemTypeId',
          'label': 'Default Inventory Item Type Id',
          'index': 4
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'facilityName',
          'label': 'Facility Name',
          'index': 5
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'primaryFacilityGroupId',
          'label': 'Primary Facility Group Id',
          'index': 6
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'oldSquareFootage',
          'label': 'Old Square Footage',
          'index': 7
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'facilitySize',
          'label': 'Facility Size',
          'index': 8
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'facilitySizeUomId',
          'label': 'Facility Size Uom Id',
          'index': 9
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'productStoreId',
          'label': 'Product Store Id',
          'index': 10
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'defaultDaysToShip',
          'label': 'Default Days To Ship',
          'index': 11
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'openedDate',
          'label': 'Opened Date',
          'index': 12
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'closedDate',
          'label': 'Closed Date',
          'index': 13
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'description',
          'label': 'Description',
          'index': 14
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'defaultDimensionUomId',
          'label': 'Default Dimension Uom Id',
          'index': 15
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'defaultWeightUomId',
          'label': 'Default Weight Uom Id',
          'index': 16
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'geoPointId',
          'label': 'Geo Point Id',
          'index': 17
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'active',
          'label': '是否激活',
          'index': 18
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'deleted',
          'label': '是否被删除',
          'index': 19
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'version',
          'label': '版本号',
          'index': 20
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'createdBy',
          'label': '创建者',
          'index': 21
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'createdAt',
          'label': '创建时间',
          'index': 22
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'updatedBy',
          'label': '最后修改人',
          'index': 23
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'updatedAt',
          'label': '最后修改时间',
          'index': 24
        }
      ],
      'buttons': [
        {
          'type': 'button',
          'label': '新建',
          'description': '新建Facility',
          'classType': 'primary',
          'triggerType': 'modal',
          'path': '/Facilities.post'
        }
      ],
      'rowButtons': [
        {
          'type': 'button',
          'label': '修改',
          'description': '修改Facility',
          'classType': 'primary',
          'triggerType': 'modal',
          'path': '/Facilities/{facilityId}.put'
        },
        {
          'type': 'button',
          'label': '删除',
          'description': '删除指定id的Facility',
          'classType': 'danger',
          'triggerType': 'modal',
          'path': '/Facilities/{facilityId}.delete'
        },
        {
          'type': 'button',
          'label': '查看',
          'description': 'Facility详情',
          'triggerType': 'link',
          'path': '/Facilities/{facilityId}'
        }
      ],
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/Facilities',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': {
          'type': 'form-panel',
          'buttons': [
            {
              'type': 'button',
              'classType': 'primary',
              'triggerType': 'submit',
              'description': '分页查询Facility',
              'label': '查询'
            },
            {
              'type': 'button',
              'classType': 'default',
              'triggerType': 'cancel',
              'label': '重置'
            }
          ],
          'collapsible': true,
          'buttonsWidth': 8,
          'title': '分页查询Facility',
          'body': {
            'children': [
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.facilityId',
                  'label': 'Facility Id',
                  'description': 'Facility Id',
                  'type': 'text',
                  'op': 'eq',
                  'value': 'hello'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.facilityTypeId',
                  'label': 'Facility Type Id',
                  'description': 'Facility Type Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.parentFacilityId',
                  'label': 'Parent Facility Id',
                  'description': 'Parent Facility Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.ownerPartyId',
                  'label': 'Owner Party Id',
                  'description': 'Owner Party Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.defaultInventoryItemTypeId',
                  'label': 'Default Inventory Item Type Id',
                  'description': 'Default Inventory Item Type Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.facilityName',
                  'label': 'Facility Name',
                  'description': 'Facility Name',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.primaryFacilityGroupId',
                  'label': 'Primary Facility Group Id',
                  'description': 'Primary Facility Group Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'number',
                  'stride': 1,
                  'field': 'queryParameters.oldSquareFootage',
                  'label': 'Old Square Footage',
                  'description': 'Old Square Footage',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'number',
                  'stride': 1,
                  'field': 'queryParameters.facilitySize',
                  'label': 'Facility Size',
                  'description': 'Facility Size',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.facilitySizeUomId',
                  'label': 'Facility Size Uom Id',
                  'description': 'Facility Size Uom Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.productStoreId',
                  'label': 'Product Store Id',
                  'description': 'Product Store Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'number',
                  'stride': 1,
                  'field': 'queryParameters.defaultDaysToShip',
                  'label': 'Default Days To Ship',
                  'description': 'In the absence of a product specific days to ship in ProductFacility, this will be used',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.openedDate',
                  'label': 'Opened Date',
                  'description': 'Opened Date',
                  'op': 'between'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.closedDate',
                  'label': 'Closed Date',
                  'description': 'Closed Date',
                  'op': 'between'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.description',
                  'label': 'Description',
                  'description': 'Description',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.defaultDimensionUomId',
                  'label': 'Default Dimension Uom Id',
                  'description': 'This field store the unit of measurement of dimension (length, width and height)',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.defaultWeightUomId',
                  'label': 'Default Weight Uom Id',
                  'description': 'Default Weight Uom Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.geoPointId',
                  'label': 'Geo Point Id',
                  'description': 'Geo Point Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'switch',
                  'mode': 'switch',
                  'field': 'queryParameters.active',
                  'label': '是否激活',
                  'description': '是否激活',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'switch',
                  'mode': 'switch',
                  'field': 'queryParameters.deleted',
                  'label': '是否被删除',
                  'description': '是否被删除',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'number',
                  'stride': 1,
                  'field': 'queryParameters.version',
                  'label': '版本号',
                  'description': '版本号',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.createdBy',
                  'label': '创建者',
                  'description': '创建者',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.createdAt',
                  'label': '创建时间',
                  'description': '创建时间',
                  'op': 'between'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.updatedBy',
                  'label': '最后修改人',
                  'description': '最后修改人',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.updatedAt',
                  'label': '最后修改时间',
                  'description': '最后修改时间',
                  'op': 'between'
                }
              }
            ],
            'type': 'row',
            'horizontal': 6,
            'vertical': 6
          }
        }
      }
    }
  },
  {
    'name': '修改Facility',
    'language': 'zh',
    'path': '/Facilities/{facilityId}.put',
    'data': {
      'type': 'form',
      'path': '/api/Facilities/{facilityId}',
      'method': 'put',
      'contentType': 'application/json',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '修改Facility',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '修改Facility',
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.facilityTypeId',
                'label': 'Facility Type Id',
                'description': 'Facility Type Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.parentFacilityId',
                'label': 'Parent Facility Id',
                'description': 'Parent Facility Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.ownerPartyId',
                'label': 'Owner Party Id',
                'description': 'Owner Party Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.defaultInventoryItemTypeId',
                'label': 'Default Inventory Item Type Id',
                'description': 'Default Inventory Item Type Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.facilityName',
                'label': 'Facility Name',
                'description': 'Facility Name',
                'maxLength': 100,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.primaryFacilityGroupId',
                'label': 'Primary Facility Group Id',
                'description': 'Primary Facility Group Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.oldSquareFootage',
                'label': 'Old Square Footage',
                'description': 'Old Square Footage'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.facilitySize',
                'label': 'Facility Size',
                'description': 'Facility Size'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.facilitySizeUomId',
                'label': 'Facility Size Uom Id',
                'description': 'Facility Size Uom Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.productStoreId',
                'label': 'Product Store Id',
                'description': 'Product Store Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.defaultDaysToShip',
                'label': 'Default Days To Ship',
                'description': 'In the absence of a product specific days to ship in ProductFacility, this will be used'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.openedDate',
                'label': 'Opened Date',
                'description': 'Opened Date'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.closedDate',
                'label': 'Closed Date',
                'description': 'Closed Date'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 255,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.defaultDimensionUomId',
                'label': 'Default Dimension Uom Id',
                'description': 'This field store the unit of measurement of dimension (length, width and height)',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.defaultWeightUomId',
                'label': 'Default Weight Uom Id',
                'description': 'Default Weight Uom Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.geoPointId',
                'label': 'Geo Point Id',
                'description': 'Geo Point Id',
                'maxLength': 20,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.deleted',
                'label': '是否被删除',
                'description': '是否被删除'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      },
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/Facilities/{facilityId}',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      }
    }
  },
  {
    'name': '删除指定id的Facility',
    'language': 'zh',
    'path': '/Facilities/{facilityId}.delete',
    'data': {
      'type': 'form',
      'path': '/api/Facilities/{facilityId}',
      'method': 'delete',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '删除指定id的Facility',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '删除指定id的Facility',
        'body': {
          'children': [ ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': 'Facility详情',
    'language': 'zh',
    'path': '/Facilities/{facilityId}',
    'data': {
      'type': 'detail-panel',
      'title': 'Facility详情',
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/Facilities/{facilityId}',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      },
      'formPanel': {
        'type': 'form-panel',
        'buttons': [ ],
        'collapsible': false,
        'buttonsWidth': 8,
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'display.facilityId',
                'label': 'Facility Id',
                'description': 'Facility Id',
                'maxLength': 20,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.facilityTypeId',
                'label': 'Facility Type Id',
                'description': 'Facility Type Id',
                'maxLength': 20,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.parentFacilityId',
                'label': 'Parent Facility Id',
                'description': 'Parent Facility Id',
                'maxLength': 20,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.ownerPartyId',
                'label': 'Owner Party Id',
                'description': 'Owner Party Id',
                'maxLength': 20,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.defaultInventoryItemTypeId',
                'label': 'Default Inventory Item Type Id',
                'description': 'Default Inventory Item Type Id',
                'maxLength': 20,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.facilityName',
                'label': 'Facility Name',
                'description': 'Facility Name',
                'maxLength': 100,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.primaryFacilityGroupId',
                'label': 'Primary Facility Group Id',
                'description': 'Primary Facility Group Id',
                'maxLength': 20,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'stride': 1,
                'field': 'display.oldSquareFootage',
                'label': 'Old Square Footage',
                'description': 'Old Square Footage'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'stride': 1,
                'field': 'display.facilitySize',
                'label': 'Facility Size',
                'description': 'Facility Size'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.facilitySizeUomId',
                'label': 'Facility Size Uom Id',
                'description': 'Facility Size Uom Id',
                'maxLength': 20,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.productStoreId',
                'label': 'Product Store Id',
                'description': 'Product Store Id',
                'maxLength': 20,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'stride': 1,
                'field': 'display.defaultDaysToShip',
                'label': 'Default Days To Ship',
                'description': 'In the absence of a product specific days to ship in ProductFacility, this will be used'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.openedDate',
                'label': 'Opened Date',
                'description': 'Opened Date'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.closedDate',
                'label': 'Closed Date',
                'description': 'Closed Date'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 255,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.defaultDimensionUomId',
                'label': 'Default Dimension Uom Id',
                'description': 'This field store the unit of measurement of dimension (length, width and height)',
                'maxLength': 20,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.defaultWeightUomId',
                'label': 'Default Weight Uom Id',
                'description': 'Default Weight Uom Id',
                'maxLength': 20,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.geoPointId',
                'label': 'Geo Point Id',
                'description': 'Geo Point Id',
                'maxLength': 20,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.deleted',
                'label': '是否被删除',
                'description': '是否被删除'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'stride': 1,
                'field': 'display.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      },
      'tabset': {
        'children': [
          {
            'type': 'tab',
            'viewPath': '/Facilities/{facilityId}/revisions',
            'title': '变更历史'
          }
        ],
        'type': 'tabset'
      }
    }
  },
  {
    'name': '变更历史',
    'language': 'zh',
    'path': '/Facilities/{facilityId}/revisions',
    'data': {
      'type': 'table',
      'fixedHeader': false,
      'title': '变更历史',
      'showPagination': false,
      'bordered': true,
      'columns': [
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'metadata',
          'label': 'metadata',
          'index': 0,
          'columns': [
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'revisionNumber',
              'label': 'revisionNumber',
              'index': 0
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'revisionDate',
              'label': 'revisionDate',
              'index': 1
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'revisionType',
              'label': 'revisionType',
              'index': 2
            }
          ]
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'entity',
          'label': 'entity',
          'index': 1,
          'columns': [
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'facilityId',
              'label': 'Facility Id',
              'index': 0
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'facilityTypeId',
              'label': 'Facility Type Id',
              'index': 1
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'parentFacilityId',
              'label': 'Parent Facility Id',
              'index': 2
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'ownerPartyId',
              'label': 'Owner Party Id',
              'index': 3
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'defaultInventoryItemTypeId',
              'label': 'Default Inventory Item Type Id',
              'index': 4
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'facilityName',
              'label': 'Facility Name',
              'index': 5
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'primaryFacilityGroupId',
              'label': 'Primary Facility Group Id',
              'index': 6
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'oldSquareFootage',
              'label': 'Old Square Footage',
              'index': 7
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'facilitySize',
              'label': 'Facility Size',
              'index': 8
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'facilitySizeUomId',
              'label': 'Facility Size Uom Id',
              'index': 9
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'productStoreId',
              'label': 'Product Store Id',
              'index': 10
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'defaultDaysToShip',
              'label': 'Default Days To Ship',
              'index': 11
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'openedDate',
              'label': 'Opened Date',
              'index': 12
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'closedDate',
              'label': 'Closed Date',
              'index': 13
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'description',
              'label': 'Description',
              'index': 14
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'defaultDimensionUomId',
              'label': 'Default Dimension Uom Id',
              'index': 15
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'defaultWeightUomId',
              'label': 'Default Weight Uom Id',
              'index': 16
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'geoPointId',
              'label': 'Geo Point Id',
              'index': 17
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'active',
              'label': '是否激活',
              'index': 18
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'deleted',
              'label': '是否被删除',
              'index': 19
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'version',
              'label': '版本号',
              'index': 20
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'createdBy',
              'label': '创建者',
              'index': 21
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'createdAt',
              'label': '创建时间',
              'index': 22
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'updatedBy',
              'label': '最后修改人',
              'index': 23
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'updatedAt',
              'label': '最后修改时间',
              'index': 24
            }
          ]
        }
      ],
      'buttons': [ ],
      'rowButtons': [ ],
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/Facilities/{facilityId}/revisions',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      }
    }
  },
  {
    'name': '新建In Out',
    'language': 'zh',
    'path': '/InOuts.post',
    'data': {
      'type': 'form',
      'path': '/api/InOuts',
      'method': 'post',
      'contentType': 'application/json',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '新建In Out',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '新建In Out',
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'body.documentNumber',
                'label': 'Document Number',
                'description': 'Document Number',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.documentStatusId',
                'label': 'Document Status Id',
                'description': 'Document Status Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.posted',
                'label': 'Posted',
                'description': 'Posted'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.processed',
                'label': 'Processed',
                'description': 'Processed'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.processing',
                'label': 'Processing',
                'description': 'Processing',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.documentTypeId',
                'label': 'Document Type Id',
                'description': 'Document Type Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.orderId',
                'label': 'Order Id',
                'description': 'Order Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.dateOrdered',
                'label': 'Date Ordered',
                'description': 'Date Ordered'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.isPrinted',
                'label': 'Is Printed',
                'description': 'Is Printed'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.movementTypeId',
                'label': 'Movement Type Id',
                'description': 'Movement Type Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.movementDate',
                'label': 'Movement Date',
                'description': 'Movement Date'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.businessPartnerId',
                'label': 'Business Partner Id',
                'description': 'Business Partner Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.warehouseId',
                'label': 'Warehouse Id',
                'description': 'Warehouse Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.freightAmount',
                'label': 'Freight Amount',
                'description': 'Freight Amount'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.shipperId',
                'label': 'Shipper Id',
                'description': 'Shipper Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.chargeAmount',
                'label': 'Charge Amount',
                'description': 'Charge Amount'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.datePrinted',
                'label': 'Date Printed',
                'description': 'Date Printed'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.createdFrom',
                'label': 'Created From',
                'description': 'Created From',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.salesRepresentativeId',
                'label': 'Sales Representative Id',
                'description': 'Sales Representative Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.numberOfPackages',
                'label': 'Number Of Packages',
                'description': 'Number Of Packages'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.pickDate',
                'label': 'Pick Date',
                'description': 'Pick Date'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.shipDate',
                'label': 'Ship Date',
                'description': 'Ship Date'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.trackingNumber',
                'label': 'Tracking Number',
                'description': 'Tracking Number',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.dateReceived',
                'label': 'Date Received',
                'description': 'Date Received'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.isInTransit',
                'label': 'Is In Transit',
                'description': 'Is In Transit'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.isApproved',
                'label': 'Is Approved',
                'description': 'Is Approved'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.isInDispute',
                'label': 'Is In Dispute',
                'description': 'Is In Dispute'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.rmaDocumentNumber',
                'label': 'Rma Document Number',
                'description': 'Rma Document Number',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.reversalDocumentNumber',
                'label': 'Reversal Document Number',
                'description': 'Reversal Document Number',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.POReference',
                'label': 'POReference',
                'description': 'POReference',
                'type': 'text'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': '分页查询In Out',
    'language': 'zh',
    'path': '/InOuts',
    'data': {
      'type': 'table',
      'fixedHeader': false,
      'title': '分页查询In Out',
      'showPagination': true,
      'columns': [
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'documentNumber',
          'label': 'Document Number',
          'index': 0
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'documentStatusId',
          'label': 'Document Status Id',
          'index': 1
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'posted',
          'label': 'Posted',
          'index': 2
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'processed',
          'label': 'Processed',
          'index': 3
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'processing',
          'label': 'Processing',
          'index': 4
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'documentTypeId',
          'label': 'Document Type Id',
          'index': 5
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'description',
          'label': 'Description',
          'index': 6
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'orderId',
          'label': 'Order Id',
          'index': 7
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'dateOrdered',
          'label': 'Date Ordered',
          'index': 8
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'isPrinted',
          'label': 'Is Printed',
          'index': 9
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'movementTypeId',
          'label': 'Movement Type Id',
          'index': 10
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'movementDate',
          'label': 'Movement Date',
          'index': 11
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'businessPartnerId',
          'label': 'Business Partner Id',
          'index': 12
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'warehouseId',
          'label': 'Warehouse Id',
          'index': 13
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'freightAmount',
          'label': 'Freight Amount',
          'index': 14
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'shipperId',
          'label': 'Shipper Id',
          'index': 15
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'chargeAmount',
          'label': 'Charge Amount',
          'index': 16
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'datePrinted',
          'label': 'Date Printed',
          'index': 17
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'createdFrom',
          'label': 'Created From',
          'index': 18
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'salesRepresentativeId',
          'label': 'Sales Representative Id',
          'index': 19
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'numberOfPackages',
          'label': 'Number Of Packages',
          'index': 20
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'pickDate',
          'label': 'Pick Date',
          'index': 21
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'shipDate',
          'label': 'Ship Date',
          'index': 22
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'trackingNumber',
          'label': 'Tracking Number',
          'index': 23
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'dateReceived',
          'label': 'Date Received',
          'index': 24
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'isInTransit',
          'label': 'Is In Transit',
          'index': 25
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'isApproved',
          'label': 'Is Approved',
          'index': 26
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'isInDispute',
          'label': 'Is In Dispute',
          'index': 27
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'rmaDocumentNumber',
          'label': 'Rma Document Number',
          'index': 28
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'reversalDocumentNumber',
          'label': 'Reversal Document Number',
          'index': 29
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'inOutLines',
          'label': 'In Out Lines',
          'index': 30
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'active',
          'label': '是否激活',
          'index': 31
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'version',
          'label': '版本号',
          'index': 32
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'createdBy',
          'label': '创建者',
          'index': 33
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'createdAt',
          'label': '创建时间',
          'index': 34
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'updatedBy',
          'label': '最后修改人',
          'index': 35
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'updatedAt',
          'label': '最后修改时间',
          'index': 36
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'POReference',
          'label': 'POReference',
          'index': 37
        }
      ],
      'buttons': [
        {
          'type': 'button',
          'label': '新建',
          'description': '新建In Out',
          'classType': 'primary',
          'triggerType': 'modal',
          'path': '/InOuts.post'
        }
      ],
      'rowButtons': [
        {
          'type': 'button',
          'label': '修改',
          'description': '修改In Out',
          'classType': 'primary',
          'triggerType': 'modal',
          'path': '/InOuts/{documentNumber}.put'
        },
        {
          'type': 'button',
          'label': '删除',
          'description': '删除指定id的In Out',
          'classType': 'danger',
          'triggerType': 'modal',
          'path': '/InOuts/{documentNumber}.delete'
        },
        {
          'type': 'button',
          'label': '查看',
          'description': 'In Out详情',
          'triggerType': 'link',
          'path': '/InOuts/{documentNumber}'
        }
      ],
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/InOuts',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': {
          'type': 'form-panel',
          'buttons': [
            {
              'type': 'button',
              'classType': 'primary',
              'triggerType': 'submit',
              'description': '分页查询In Out',
              'label': '查询'
            },
            {
              'type': 'button',
              'classType': 'default',
              'triggerType': 'cancel',
              'label': '重置'
            }
          ],
          'collapsible': true,
          'buttonsWidth': 8,
          'title': '分页查询In Out',
          'body': {
            'children': [
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.documentNumber',
                  'label': 'Document Number',
                  'description': 'Document Number',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.documentStatusId',
                  'label': 'Document Status Id',
                  'description': 'Document Status Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'switch',
                  'mode': 'switch',
                  'field': 'queryParameters.posted',
                  'label': 'Posted',
                  'description': 'Posted',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'switch',
                  'mode': 'switch',
                  'field': 'queryParameters.processed',
                  'label': 'Processed',
                  'description': 'Processed',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.processing',
                  'label': 'Processing',
                  'description': 'Processing',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.documentTypeId',
                  'label': 'Document Type Id',
                  'description': 'Document Type Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.description',
                  'label': 'Description',
                  'description': 'Description',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.orderId',
                  'label': 'Order Id',
                  'description': 'Order Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.dateOrdered',
                  'label': 'Date Ordered',
                  'description': 'Date Ordered',
                  'op': 'between'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'switch',
                  'mode': 'switch',
                  'field': 'queryParameters.isPrinted',
                  'label': 'Is Printed',
                  'description': 'Is Printed',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.movementTypeId',
                  'label': 'Movement Type Id',
                  'description': 'Movement Type Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.movementDate',
                  'label': 'Movement Date',
                  'description': 'Movement Date',
                  'op': 'between'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.businessPartnerId',
                  'label': 'Business Partner Id',
                  'description': 'Business Partner Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.warehouseId',
                  'label': 'Warehouse Id',
                  'description': 'Warehouse Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'number',
                  'stride': 1,
                  'field': 'queryParameters.freightAmount',
                  'label': 'Freight Amount',
                  'description': 'Freight Amount',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.shipperId',
                  'label': 'Shipper Id',
                  'description': 'Shipper Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'number',
                  'stride': 1,
                  'field': 'queryParameters.chargeAmount',
                  'label': 'Charge Amount',
                  'description': 'Charge Amount',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.datePrinted',
                  'label': 'Date Printed',
                  'description': 'Date Printed',
                  'op': 'between'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.createdFrom',
                  'label': 'Created From',
                  'description': 'Created From',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.salesRepresentativeId',
                  'label': 'Sales Representative Id',
                  'description': 'Sales Representative Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'number',
                  'stride': 1,
                  'field': 'queryParameters.numberOfPackages',
                  'label': 'Number Of Packages',
                  'description': 'Number Of Packages',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.pickDate',
                  'label': 'Pick Date',
                  'description': 'Pick Date',
                  'op': 'between'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.shipDate',
                  'label': 'Ship Date',
                  'description': 'Ship Date',
                  'op': 'between'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.trackingNumber',
                  'label': 'Tracking Number',
                  'description': 'Tracking Number',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.dateReceived',
                  'label': 'Date Received',
                  'description': 'Date Received',
                  'op': 'between'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'switch',
                  'mode': 'switch',
                  'field': 'queryParameters.isInTransit',
                  'label': 'Is In Transit',
                  'description': 'Is In Transit',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'switch',
                  'mode': 'switch',
                  'field': 'queryParameters.isApproved',
                  'label': 'Is Approved',
                  'description': 'Is Approved',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'switch',
                  'mode': 'switch',
                  'field': 'queryParameters.isInDispute',
                  'label': 'Is In Dispute',
                  'description': 'Is In Dispute',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.rmaDocumentNumber',
                  'label': 'Rma Document Number',
                  'description': 'Rma Document Number',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.reversalDocumentNumber',
                  'label': 'Reversal Document Number',
                  'description': 'Reversal Document Number',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'switch',
                  'mode': 'switch',
                  'field': 'queryParameters.active',
                  'label': '是否激活',
                  'description': '是否激活',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'number',
                  'stride': 1,
                  'field': 'queryParameters.version',
                  'label': '版本号',
                  'description': '版本号',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.createdBy',
                  'label': '创建者',
                  'description': '创建者',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.createdAt',
                  'label': '创建时间',
                  'description': '创建时间',
                  'op': 'between'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.updatedBy',
                  'label': '最后修改人',
                  'description': '最后修改人',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.updatedAt',
                  'label': '最后修改时间',
                  'description': '最后修改时间',
                  'op': 'between'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.POReference',
                  'label': 'POReference',
                  'description': 'POReference',
                  'type': 'text',
                  'op': 'eq'
                }
              }
            ],
            'type': 'row',
            'horizontal': 6,
            'vertical': 6
          }
        }
      }
    }
  },
  {
    'name': '修改In Out',
    'language': 'zh',
    'path': '/InOuts/{documentNumber}.put',
    'data': {
      'type': 'form',
      'path': '/api/InOuts/{documentNumber}',
      'method': 'put',
      'contentType': 'application/json',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '修改In Out',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '修改In Out',
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.documentStatusId',
                'label': 'Document Status Id',
                'description': 'Document Status Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.posted',
                'label': 'Posted',
                'description': 'Posted'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.processed',
                'label': 'Processed',
                'description': 'Processed'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.processing',
                'label': 'Processing',
                'description': 'Processing',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.documentTypeId',
                'label': 'Document Type Id',
                'description': 'Document Type Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.orderId',
                'label': 'Order Id',
                'description': 'Order Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.dateOrdered',
                'label': 'Date Ordered',
                'description': 'Date Ordered'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.isPrinted',
                'label': 'Is Printed',
                'description': 'Is Printed'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.movementTypeId',
                'label': 'Movement Type Id',
                'description': 'Movement Type Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.movementDate',
                'label': 'Movement Date',
                'description': 'Movement Date'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.businessPartnerId',
                'label': 'Business Partner Id',
                'description': 'Business Partner Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.warehouseId',
                'label': 'Warehouse Id',
                'description': 'Warehouse Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.freightAmount',
                'label': 'Freight Amount',
                'description': 'Freight Amount'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.shipperId',
                'label': 'Shipper Id',
                'description': 'Shipper Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.chargeAmount',
                'label': 'Charge Amount',
                'description': 'Charge Amount'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.datePrinted',
                'label': 'Date Printed',
                'description': 'Date Printed'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.createdFrom',
                'label': 'Created From',
                'description': 'Created From',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.salesRepresentativeId',
                'label': 'Sales Representative Id',
                'description': 'Sales Representative Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.numberOfPackages',
                'label': 'Number Of Packages',
                'description': 'Number Of Packages'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.pickDate',
                'label': 'Pick Date',
                'description': 'Pick Date'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.shipDate',
                'label': 'Ship Date',
                'description': 'Ship Date'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.trackingNumber',
                'label': 'Tracking Number',
                'description': 'Tracking Number',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.dateReceived',
                'label': 'Date Received',
                'description': 'Date Received'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.isInTransit',
                'label': 'Is In Transit',
                'description': 'Is In Transit'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.isApproved',
                'label': 'Is Approved',
                'description': 'Is Approved'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.isInDispute',
                'label': 'Is In Dispute',
                'description': 'Is In Dispute'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.rmaDocumentNumber',
                'label': 'Rma Document Number',
                'description': 'Rma Document Number',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.reversalDocumentNumber',
                'label': 'Reversal Document Number',
                'description': 'Reversal Document Number',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.POReference',
                'label': 'POReference',
                'description': 'POReference',
                'type': 'text'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      },
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/InOuts/{documentNumber}',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      }
    }
  },
  {
    'name': '删除指定id的In Out',
    'language': 'zh',
    'path': '/InOuts/{documentNumber}.delete',
    'data': {
      'type': 'form',
      'path': '/api/InOuts/{documentNumber}',
      'method': 'delete',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '删除指定id的In Out',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '删除指定id的In Out',
        'body': {
          'children': [ ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': 'In Out详情',
    'language': 'zh',
    'path': '/InOuts/{documentNumber}',
    'data': {
      'type': 'detail-panel',
      'title': 'In Out详情',
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/InOuts/{documentNumber}',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      },
      'formPanel': {
        'type': 'form-panel',
        'buttons': [ ],
        'collapsible': false,
        'buttonsWidth': 8,
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'display.documentNumber',
                'label': 'Document Number',
                'description': 'Document Number',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.documentStatusId',
                'label': 'Document Status Id',
                'description': 'Document Status Id',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.posted',
                'label': 'Posted',
                'description': 'Posted'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.processed',
                'label': 'Processed',
                'description': 'Processed'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.processing',
                'label': 'Processing',
                'description': 'Processing',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.documentTypeId',
                'label': 'Document Type Id',
                'description': 'Document Type Id',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.orderId',
                'label': 'Order Id',
                'description': 'Order Id',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.dateOrdered',
                'label': 'Date Ordered',
                'description': 'Date Ordered'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.isPrinted',
                'label': 'Is Printed',
                'description': 'Is Printed'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.movementTypeId',
                'label': 'Movement Type Id',
                'description': 'Movement Type Id',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.movementDate',
                'label': 'Movement Date',
                'description': 'Movement Date'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.businessPartnerId',
                'label': 'Business Partner Id',
                'description': 'Business Partner Id',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.warehouseId',
                'label': 'Warehouse Id',
                'description': 'Warehouse Id',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'stride': 1,
                'field': 'display.freightAmount',
                'label': 'Freight Amount',
                'description': 'Freight Amount'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.shipperId',
                'label': 'Shipper Id',
                'description': 'Shipper Id',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'stride': 1,
                'field': 'display.chargeAmount',
                'label': 'Charge Amount',
                'description': 'Charge Amount'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.datePrinted',
                'label': 'Date Printed',
                'description': 'Date Printed'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.createdFrom',
                'label': 'Created From',
                'description': 'Created From',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.salesRepresentativeId',
                'label': 'Sales Representative Id',
                'description': 'Sales Representative Id',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'stride': 1,
                'field': 'display.numberOfPackages',
                'label': 'Number Of Packages',
                'description': 'Number Of Packages'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.pickDate',
                'label': 'Pick Date',
                'description': 'Pick Date'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.shipDate',
                'label': 'Ship Date',
                'description': 'Ship Date'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.trackingNumber',
                'label': 'Tracking Number',
                'description': 'Tracking Number',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.dateReceived',
                'label': 'Date Received',
                'description': 'Date Received'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.isInTransit',
                'label': 'Is In Transit',
                'description': 'Is In Transit'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.isApproved',
                'label': 'Is Approved',
                'description': 'Is Approved'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.isInDispute',
                'label': 'Is In Dispute',
                'description': 'Is In Dispute'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.rmaDocumentNumber',
                'label': 'Rma Document Number',
                'description': 'Rma Document Number',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.reversalDocumentNumber',
                'label': 'Reversal Document Number',
                'description': 'Reversal Document Number',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'stride': 1,
                'field': 'display.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.POReference',
                'label': 'POReference',
                'description': 'POReference',
                'type': 'display-text'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      },
      'tabset': {
        'children': [
          {
            'type': 'tab',
            'viewPath': '/InOuts/{documentNumber}/revisions',
            'title': '变更历史'
          },
          {
            'type': 'tab',
            'viewPath': '/InOuts/{documentNumber}/InOutLines',
            'title': 'In Out Lines'
          }
        ],
        'type': 'tabset'
      }
    }
  },
  {
    'name': '变更历史',
    'language': 'zh',
    'path': '/InOuts/{documentNumber}/revisions',
    'data': {
      'type': 'table',
      'fixedHeader': false,
      'title': '变更历史',
      'showPagination': false,
      'bordered': true,
      'columns': [
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'metadata',
          'label': 'metadata',
          'index': 0,
          'columns': [
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'revisionNumber',
              'label': 'revisionNumber',
              'index': 0
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'revisionDate',
              'label': 'revisionDate',
              'index': 1
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'revisionType',
              'label': 'revisionType',
              'index': 2
            }
          ]
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'entity',
          'label': 'entity',
          'index': 1,
          'columns': [
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'documentNumber',
              'label': 'Document Number',
              'index': 0
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'documentStatusId',
              'label': 'Document Status Id',
              'index': 1
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'posted',
              'label': 'Posted',
              'index': 2
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'processed',
              'label': 'Processed',
              'index': 3
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'processing',
              'label': 'Processing',
              'index': 4
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'documentTypeId',
              'label': 'Document Type Id',
              'index': 5
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'description',
              'label': 'Description',
              'index': 6
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'orderId',
              'label': 'Order Id',
              'index': 7
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'dateOrdered',
              'label': 'Date Ordered',
              'index': 8
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'isPrinted',
              'label': 'Is Printed',
              'index': 9
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'movementTypeId',
              'label': 'Movement Type Id',
              'index': 10
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'movementDate',
              'label': 'Movement Date',
              'index': 11
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'businessPartnerId',
              'label': 'Business Partner Id',
              'index': 12
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'warehouseId',
              'label': 'Warehouse Id',
              'index': 13
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'freightAmount',
              'label': 'Freight Amount',
              'index': 14
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'shipperId',
              'label': 'Shipper Id',
              'index': 15
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'chargeAmount',
              'label': 'Charge Amount',
              'index': 16
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'datePrinted',
              'label': 'Date Printed',
              'index': 17
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'createdFrom',
              'label': 'Created From',
              'index': 18
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'salesRepresentativeId',
              'label': 'Sales Representative Id',
              'index': 19
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'numberOfPackages',
              'label': 'Number Of Packages',
              'index': 20
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'pickDate',
              'label': 'Pick Date',
              'index': 21
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'shipDate',
              'label': 'Ship Date',
              'index': 22
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'trackingNumber',
              'label': 'Tracking Number',
              'index': 23
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'dateReceived',
              'label': 'Date Received',
              'index': 24
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'isInTransit',
              'label': 'Is In Transit',
              'index': 25
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'isApproved',
              'label': 'Is Approved',
              'index': 26
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'isInDispute',
              'label': 'Is In Dispute',
              'index': 27
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'rmaDocumentNumber',
              'label': 'Rma Document Number',
              'index': 28
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'reversalDocumentNumber',
              'label': 'Reversal Document Number',
              'index': 29
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'inOutLines',
              'label': 'In Out Lines',
              'index': 30
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'active',
              'label': '是否激活',
              'index': 31
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'version',
              'label': '版本号',
              'index': 32
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'createdBy',
              'label': '创建者',
              'index': 33
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'createdAt',
              'label': '创建时间',
              'index': 34
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'updatedBy',
              'label': '最后修改人',
              'index': 35
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'updatedAt',
              'label': '最后修改时间',
              'index': 36
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'POReference',
              'label': 'POReference',
              'index': 37
            }
          ]
        }
      ],
      'buttons': [ ],
      'rowButtons': [ ],
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/InOuts/{documentNumber}/revisions',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      }
    }
  },
  {
    'name': 'Close',
    'language': 'zh',
    'path': '/InOuts/{documentNumber}/commands_/Close.post',
    'data': {
      'type': 'form',
      'path': '/api/InOuts/{documentNumber}/commands_/Close',
      'method': 'post',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': 'Close',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': 'Close',
        'body': {
          'children': [ ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': 'Reverse',
    'language': 'zh',
    'path': '/InOuts/{documentNumber}/commands_/Reverse.post',
    'data': {
      'type': 'form',
      'path': '/api/InOuts/{documentNumber}/commands_/Reverse',
      'method': 'post',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': 'Reverse',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': 'Reverse',
        'body': {
          'children': [ ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': 'Complete',
    'language': 'zh',
    'path': '/InOuts/{documentNumber}/commands_/Complete.post',
    'data': {
      'type': 'form',
      'path': '/api/InOuts/{documentNumber}/commands_/Complete',
      'method': 'post',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': 'Complete',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': 'Complete',
        'body': {
          'children': [ ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': 'Void_',
    'language': 'zh',
    'path': '/InOuts/{documentNumber}/commands_/Void_.post',
    'data': {
      'type': 'form',
      'path': '/api/InOuts/{documentNumber}/commands_/Void_',
      'method': 'post',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': 'Void_',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': 'Void_',
        'body': {
          'children': [ ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': 'Add Line',
    'language': 'zh',
    'path': '/InOuts/{documentNumber}/commands_/AddLine.post',
    'data': {
      'type': 'form',
      'path': '/api/InOuts/{documentNumber}/commands_/AddLine',
      'method': 'post',
      'contentType': 'application/json',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': 'Add Line',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': 'Add Line',
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.lineNumber',
                'label': 'Line Number',
                'description': 'Line Number',
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.locatorId',
                'label': 'Locator Id',
                'description': 'Locator Id',
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.productId',
                'label': 'Product Id',
                'description': 'Product Id',
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 24,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'map',
                'description': 'Attribute Set Instance',
                'label': 'Attribute Set Instance',
                'field': 'body.attributeSetInstance',
                'key': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': true,
                  'hide': false,
                  'type': 'text',
                  'field': 'body.attributeSetInstance.key',
                  'label': 'Key',
                  'description': 'Key',
                  'pattern': '/[a-zA-Z_$]+[a-zA-Z_$0-9]*/',
                  'maxLength': 100
                },
                'val': [
                  {
                    'labelWidth': 8,
                    'fieldWidth': 16,
                    'hide': false,
                    'field': 'body.attributeSetInstance./[a-zA-Z_$]+[a-zA-Z_$0-9]*/',
                    'label': '/[a-zA-Z_$]+[a-zA-Z_$0-9]*/',
                    'description': '/[a-zA-Z_$]+[a-zA-Z_$0-9]*/',
                    'type': 'text'
                  }
                ]
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.description',
                'label': 'Description',
                'description': 'Description',
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.quantityUomId',
                'label': 'Quantity Uom Id',
                'description': 'Quantity Uom Id',
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.movementQuantity',
                'label': 'Movement Quantity',
                'description': 'Movement Quantity'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': 'In Out Lines',
    'language': 'zh',
    'path': '/InOuts/{documentNumber}/InOutLines',
    'data': {
      'type': 'table',
      'fixedHeader': false,
      'title': 'In Out Lines',
      'showPagination': false,
      'bordered': true,
      'columns': [
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'inOutLineId',
          'label': 'In Out Line Id',
          'index': 0,
          'columns': [
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'lineNumber',
              'label': 'Line Number',
              'index': 0
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'documentNumber',
              'label': 'Document Number',
              'index': 1
            }
          ]
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'locatorId',
          'label': 'Locator Id',
          'index': 1
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'productId',
          'label': 'Product Id',
          'index': 2
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'attributeSetInstanceId',
          'label': 'Attribute Set Instance Id',
          'index': 3
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'description',
          'label': 'Description',
          'index': 4
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'quantityUomId',
          'label': 'Quantity Uom Id',
          'index': 5
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'movementQuantity',
          'label': 'Movement Quantity',
          'index': 6
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'pickedQuantity',
          'label': 'Picked Quantity',
          'index': 7
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'isInvoiced',
          'label': 'Is Invoiced',
          'index': 8
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'processed',
          'label': 'Processed',
          'index': 9
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'rmaLineNumber',
          'label': 'Rma Line Number',
          'index': 10
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'reversalLineNumber',
          'label': 'Reversal Line Number',
          'index': 11
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'active',
          'label': '是否激活',
          'index': 12
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'deleted',
          'label': '是否被删除',
          'index': 13
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'version',
          'label': '版本号',
          'index': 14
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'createdBy',
          'label': '创建者',
          'index': 15
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'createdAt',
          'label': '创建时间',
          'index': 16
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'updatedBy',
          'label': '最后修改人',
          'index': 17
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'updatedAt',
          'label': '最后修改时间',
          'index': 18
        }
      ],
      'buttons': [
        {
          'type': 'button',
          'label': '新建',
          'description': '新建In Out Line',
          'classType': 'primary',
          'triggerType': 'modal',
          'path': '/InOuts/{documentNumber}/InOutLines.post'
        }
      ],
      'rowButtons': [
        {
          'type': 'button',
          'label': '查看',
          'description': 'In Out Line详情',
          'triggerType': 'link',
          'path': '/InOuts/{documentNumber}/InOutLines/{lineNumber}'
        },
        {
          'type': 'button',
          'label': '修改',
          'description': '修改In Out Line',
          'classType': 'primary',
          'triggerType': 'modal',
          'path': '/InOuts/{documentNumber}/InOutLines/{lineNumber}.put'
        },
        {
          'type': 'button',
          'label': '删除',
          'description': '删除指定id的In Out Line',
          'classType': 'danger',
          'triggerType': 'modal',
          'path': '/InOuts/{documentNumber}/InOutLines/{lineNumber}.delete'
        }
      ],
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/InOuts/{documentNumber}/InOutLines',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      }
    }
  },
  {
    'name': '新建In Out Line',
    'language': 'zh',
    'path': '/InOuts/{documentNumber}/InOutLines.post',
    'data': {
      'type': 'form',
      'path': '/api/InOuts/{documentNumber}/InOutLines',
      'method': 'post',
      'contentType': 'application/json',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '新建In Out Line',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '新建In Out Line',
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'body.inOutLineId.lineNumber',
                'label': 'Line Number',
                'description': 'Line Number',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.locatorId',
                'label': 'Locator Id',
                'description': 'Locator Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.productId',
                'label': 'Product Id',
                'description': 'Product Id',
                'maxLength': 60,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.attributeSetInstanceId',
                'label': 'Attribute Set Instance Id',
                'description': 'Attribute Set Instance Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.quantityUomId',
                'label': 'Quantity Uom Id',
                'description': 'Quantity Uom Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.movementQuantity',
                'label': 'Movement Quantity',
                'description': 'Movement Quantity'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.pickedQuantity',
                'label': 'Picked Quantity',
                'description': 'Picked Quantity'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.isInvoiced',
                'label': 'Is Invoiced',
                'description': 'Is Invoiced'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.processed',
                'label': 'Processed',
                'description': 'Processed'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.rmaLineNumber',
                'label': 'Rma Line Number',
                'description': 'Rma Line Number',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.reversalLineNumber',
                'label': 'Reversal Line Number',
                'description': 'Reversal Line Number',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.deleted',
                'label': '是否被删除',
                'description': '是否被删除'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': 'In Out Line详情',
    'language': 'zh',
    'path': '/InOuts/{documentNumber}/InOutLines/{lineNumber}',
    'data': {
      'type': 'detail-panel',
      'title': 'In Out Line详情',
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/InOuts/{documentNumber}/InOutLines/{lineNumber}',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      },
      'formPanel': {
        'type': 'form-panel',
        'buttons': [ ],
        'collapsible': false,
        'buttonsWidth': 8,
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'display.inOutLineId.lineNumber',
                'label': 'Line Number',
                'description': 'Line Number',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'display.inOutLineId.documentNumber',
                'label': 'Document Number',
                'description': 'Document Number',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.locatorId',
                'label': 'Locator Id',
                'description': 'Locator Id',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.productId',
                'label': 'Product Id',
                'description': 'Product Id',
                'maxLength': 60,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.attributeSetInstanceId',
                'label': 'Attribute Set Instance Id',
                'description': 'Attribute Set Instance Id',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.quantityUomId',
                'label': 'Quantity Uom Id',
                'description': 'Quantity Uom Id',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'stride': 1,
                'field': 'display.movementQuantity',
                'label': 'Movement Quantity',
                'description': 'Movement Quantity'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'stride': 1,
                'field': 'display.pickedQuantity',
                'label': 'Picked Quantity',
                'description': 'Picked Quantity'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.isInvoiced',
                'label': 'Is Invoiced',
                'description': 'Is Invoiced'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.processed',
                'label': 'Processed',
                'description': 'Processed'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.rmaLineNumber',
                'label': 'Rma Line Number',
                'description': 'Rma Line Number',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.reversalLineNumber',
                'label': 'Reversal Line Number',
                'description': 'Reversal Line Number',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.deleted',
                'label': '是否被删除',
                'description': '是否被删除'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'stride': 1,
                'field': 'display.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': '修改In Out Line',
    'language': 'zh',
    'path': '/InOuts/{documentNumber}/InOutLines/{lineNumber}.put',
    'data': {
      'type': 'form',
      'path': '/api/InOuts/{documentNumber}/InOutLines/{lineNumber}',
      'method': 'put',
      'contentType': 'application/json',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '修改In Out Line',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '修改In Out Line',
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'body.inOutLineId.lineNumber',
                'label': 'Line Number',
                'description': 'Line Number',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'body.inOutLineId.documentNumber',
                'label': 'Document Number',
                'description': 'Document Number',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.locatorId',
                'label': 'Locator Id',
                'description': 'Locator Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.productId',
                'label': 'Product Id',
                'description': 'Product Id',
                'maxLength': 60,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.attributeSetInstanceId',
                'label': 'Attribute Set Instance Id',
                'description': 'Attribute Set Instance Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.quantityUomId',
                'label': 'Quantity Uom Id',
                'description': 'Quantity Uom Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.movementQuantity',
                'label': 'Movement Quantity',
                'description': 'Movement Quantity'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.pickedQuantity',
                'label': 'Picked Quantity',
                'description': 'Picked Quantity'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.isInvoiced',
                'label': 'Is Invoiced',
                'description': 'Is Invoiced'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.processed',
                'label': 'Processed',
                'description': 'Processed'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.rmaLineNumber',
                'label': 'Rma Line Number',
                'description': 'Rma Line Number',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.reversalLineNumber',
                'label': 'Reversal Line Number',
                'description': 'Reversal Line Number',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.deleted',
                'label': '是否被删除',
                'description': '是否被删除'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      },
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/InOuts/{documentNumber}/InOutLines/{lineNumber}',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      }
    }
  },
  {
    'name': '删除指定id的In Out Line',
    'language': 'zh',
    'path': '/InOuts/{documentNumber}/InOutLines/{lineNumber}.delete',
    'data': {
      'type': 'form',
      'path': '/api/InOuts/{documentNumber}/InOutLines/{lineNumber}',
      'method': 'delete',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '删除指定id的In Out Line',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '删除指定id的In Out Line',
        'body': {
          'children': [ ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': '新建Locator Type',
    'language': 'zh',
    'path': '/LocatorTypes.post',
    'data': {
      'type': 'form',
      'path': '/api/LocatorTypes',
      'method': 'post',
      'contentType': 'application/json',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '新建Locator Type',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '新建Locator Type',
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'body.locatorTypeId',
                'label': 'Locator Type Id',
                'description': 'Locator Type Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.deleted',
                'label': '是否被删除',
                'description': '是否被删除'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': '分页查询Locator Type',
    'language': 'zh',
    'path': '/LocatorTypes',
    'data': {
      'type': 'table',
      'fixedHeader': false,
      'title': '分页查询Locator Type',
      'showPagination': true,
      'columns': [
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'locatorTypeId',
          'label': 'Locator Type Id',
          'index': 0
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'description',
          'label': 'Description',
          'index': 1
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'active',
          'label': '是否激活',
          'index': 2
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'deleted',
          'label': '是否被删除',
          'index': 3
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'version',
          'label': '版本号',
          'index': 4
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'createdBy',
          'label': '创建者',
          'index': 5
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'createdAt',
          'label': '创建时间',
          'index': 6
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'updatedBy',
          'label': '最后修改人',
          'index': 7
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'updatedAt',
          'label': '最后修改时间',
          'index': 8
        }
      ],
      'buttons': [
        {
          'type': 'button',
          'label': '新建',
          'description': '新建Locator Type',
          'classType': 'primary',
          'triggerType': 'modal',
          'path': '/LocatorTypes.post'
        }
      ],
      'rowButtons': [
        {
          'type': 'button',
          'label': '修改',
          'description': '修改Locator Type',
          'classType': 'primary',
          'triggerType': 'modal',
          'path': '/LocatorTypes/{locatorTypeId}.put'
        },
        {
          'type': 'button',
          'label': '删除',
          'description': '删除指定id的Locator Type',
          'classType': 'danger',
          'triggerType': 'modal',
          'path': '/LocatorTypes/{locatorTypeId}.delete'
        },
        {
          'type': 'button',
          'label': '查看',
          'description': 'Locator Type详情',
          'triggerType': 'link',
          'path': '/LocatorTypes/{locatorTypeId}'
        }
      ],
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/LocatorTypes',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': {
          'type': 'form-panel',
          'buttons': [
            {
              'type': 'button',
              'classType': 'primary',
              'triggerType': 'submit',
              'description': '分页查询Locator Type',
              'label': '查询'
            },
            {
              'type': 'button',
              'classType': 'default',
              'triggerType': 'cancel',
              'label': '重置'
            }
          ],
          'collapsible': true,
          'buttonsWidth': 8,
          'title': '分页查询Locator Type',
          'body': {
            'children': [
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.locatorTypeId',
                  'label': 'Locator Type Id',
                  'description': 'Locator Type Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.description',
                  'label': 'Description',
                  'description': 'Description',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'switch',
                  'mode': 'switch',
                  'field': 'queryParameters.active',
                  'label': '是否激活',
                  'description': '是否激活',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'switch',
                  'mode': 'switch',
                  'field': 'queryParameters.deleted',
                  'label': '是否被删除',
                  'description': '是否被删除',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'number',
                  'stride': 1,
                  'field': 'queryParameters.version',
                  'label': '版本号',
                  'description': '版本号',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.createdBy',
                  'label': '创建者',
                  'description': '创建者',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.createdAt',
                  'label': '创建时间',
                  'description': '创建时间',
                  'op': 'between'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.updatedBy',
                  'label': '最后修改人',
                  'description': '最后修改人',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.updatedAt',
                  'label': '最后修改时间',
                  'description': '最后修改时间',
                  'op': 'between'
                }
              }
            ],
            'type': 'row',
            'horizontal': 6,
            'vertical': 6
          }
        }
      }
    }
  },
  {
    'name': '修改Locator Type',
    'language': 'zh',
    'path': '/LocatorTypes/{locatorTypeId}.put',
    'data': {
      'type': 'form',
      'path': '/api/LocatorTypes/{locatorTypeId}',
      'method': 'put',
      'contentType': 'application/json',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '修改Locator Type',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '修改Locator Type',
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.deleted',
                'label': '是否被删除',
                'description': '是否被删除'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      },
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/LocatorTypes/{locatorTypeId}',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      }
    }
  },
  {
    'name': '删除指定id的Locator Type',
    'language': 'zh',
    'path': '/LocatorTypes/{locatorTypeId}.delete',
    'data': {
      'type': 'form',
      'path': '/api/LocatorTypes/{locatorTypeId}',
      'method': 'delete',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '删除指定id的Locator Type',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '删除指定id的Locator Type',
        'body': {
          'children': [ ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': 'Locator Type详情',
    'language': 'zh',
    'path': '/LocatorTypes/{locatorTypeId}',
    'data': {
      'type': 'detail-panel',
      'title': 'Locator Type详情',
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/LocatorTypes/{locatorTypeId}',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      },
      'formPanel': {
        'type': 'form-panel',
        'buttons': [ ],
        'collapsible': false,
        'buttonsWidth': 8,
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'display.locatorTypeId',
                'label': 'Locator Type Id',
                'description': 'Locator Type Id',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.deleted',
                'label': '是否被删除',
                'description': '是否被删除'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'stride': 1,
                'field': 'display.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      },
      'tabset': {
        'children': [
          {
            'type': 'tab',
            'viewPath': '/LocatorTypes/{locatorTypeId}/revisions',
            'title': '变更历史'
          }
        ],
        'type': 'tabset'
      }
    }
  },
  {
    'name': '变更历史',
    'language': 'zh',
    'path': '/LocatorTypes/{locatorTypeId}/revisions',
    'data': {
      'type': 'table',
      'fixedHeader': false,
      'title': '变更历史',
      'showPagination': false,
      'bordered': true,
      'columns': [
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'metadata',
          'label': 'metadata',
          'index': 0,
          'columns': [
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'revisionNumber',
              'label': 'revisionNumber',
              'index': 0
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'revisionDate',
              'label': 'revisionDate',
              'index': 1
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'revisionType',
              'label': 'revisionType',
              'index': 2
            }
          ]
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'entity',
          'label': 'entity',
          'index': 1,
          'columns': [
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'locatorTypeId',
              'label': 'Locator Type Id',
              'index': 0
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'description',
              'label': 'Description',
              'index': 1
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'active',
              'label': '是否激活',
              'index': 2
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'deleted',
              'label': '是否被删除',
              'index': 3
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'version',
              'label': '版本号',
              'index': 4
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'createdBy',
              'label': '创建者',
              'index': 5
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'createdAt',
              'label': '创建时间',
              'index': 6
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'updatedBy',
              'label': '最后修改人',
              'index': 7
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'updatedAt',
              'label': '最后修改时间',
              'index': 8
            }
          ]
        }
      ],
      'buttons': [ ],
      'rowButtons': [ ],
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/LocatorTypes/{locatorTypeId}/revisions',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      }
    }
  },
  {
    'name': '新建Locator',
    'language': 'zh',
    'path': '/Locators.post',
    'data': {
      'type': 'form',
      'path': '/api/Locators',
      'method': 'post',
      'contentType': 'application/json',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '新建Locator',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '新建Locator',
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'body.locatorId',
                'label': 'Locator Id',
                'description': 'Locator Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'body.warehouseId',
                'label': 'Warehouse Id',
                'description': 'Warehouse Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.parentLocatorId',
                'label': 'Parent Locator Id',
                'description': 'Parent Locator Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.locatorType',
                'label': 'Locator Type',
                'description': 'Locator Type',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.priorityNumber',
                'label': 'Priority Number',
                'description': 'Priority Number',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.isDefault',
                'label': 'Is Default',
                'description': 'Is Default'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.x',
                'label': 'X',
                'description': 'X',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.y',
                'label': 'Y',
                'description': 'Y',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.z',
                'label': 'Z',
                'description': 'Z',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.locatorTypeId',
                'label': 'Locator Type Id',
                'description': 'Locator Type Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.deleted',
                'label': '是否被删除',
                'description': '是否被删除'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': '分页查询Locator',
    'language': 'zh',
    'path': '/Locators',
    'data': {
      'type': 'table',
      'fixedHeader': false,
      'title': '分页查询Locator',
      'showPagination': true,
      'columns': [
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'locatorId',
          'label': 'Locator Id',
          'index': 0
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'warehouseId',
          'label': 'Warehouse Id',
          'index': 1
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'parentLocatorId',
          'label': 'Parent Locator Id',
          'index': 2
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'locatorType',
          'label': 'Locator Type',
          'index': 3
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'priorityNumber',
          'label': 'Priority Number',
          'index': 4
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'isDefault',
          'label': 'Is Default',
          'index': 5
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'x',
          'label': 'X',
          'index': 6
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'y',
          'label': 'Y',
          'index': 7
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'z',
          'label': 'Z',
          'index': 8
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'description',
          'label': 'Description',
          'index': 9
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'locatorTypeId',
          'label': 'Locator Type Id',
          'index': 10
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'active',
          'label': '是否激活',
          'index': 11
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'deleted',
          'label': '是否被删除',
          'index': 12
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'version',
          'label': '版本号',
          'index': 13
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'createdBy',
          'label': '创建者',
          'index': 14
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'createdAt',
          'label': '创建时间',
          'index': 15
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'updatedBy',
          'label': '最后修改人',
          'index': 16
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'updatedAt',
          'label': '最后修改时间',
          'index': 17
        }
      ],
      'buttons': [
        {
          'type': 'button',
          'label': '新建',
          'description': '新建Locator',
          'classType': 'primary',
          'triggerType': 'modal',
          'path': '/Locators.post'
        }
      ],
      'rowButtons': [
        {
          'type': 'button',
          'label': '修改',
          'description': '修改Locator',
          'classType': 'primary',
          'triggerType': 'modal',
          'path': '/Locators/{locatorId}.put'
        },
        {
          'type': 'button',
          'label': '删除',
          'description': '删除指定id的Locator',
          'classType': 'danger',
          'triggerType': 'modal',
          'path': '/Locators/{locatorId}.delete'
        },
        {
          'type': 'button',
          'label': '查看',
          'description': 'Locator详情',
          'triggerType': 'link',
          'path': '/Locators/{locatorId}'
        }
      ],
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/Locators',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': {
          'type': 'form-panel',
          'buttons': [
            {
              'type': 'button',
              'classType': 'primary',
              'triggerType': 'submit',
              'description': '分页查询Locator',
              'label': '查询'
            },
            {
              'type': 'button',
              'classType': 'default',
              'triggerType': 'cancel',
              'label': '重置'
            }
          ],
          'collapsible': true,
          'buttonsWidth': 8,
          'title': '分页查询Locator',
          'body': {
            'children': [
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.locatorId',
                  'label': 'Locator Id',
                  'description': 'Locator Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.warehouseId',
                  'label': 'Warehouse Id',
                  'description': 'Warehouse Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.parentLocatorId',
                  'label': 'Parent Locator Id',
                  'description': 'Parent Locator Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.locatorType',
                  'label': 'Locator Type',
                  'description': 'Locator Type',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.priorityNumber',
                  'label': 'Priority Number',
                  'description': 'Priority Number',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'switch',
                  'mode': 'switch',
                  'field': 'queryParameters.isDefault',
                  'label': 'Is Default',
                  'description': 'Is Default',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.x',
                  'label': 'X',
                  'description': 'X',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.y',
                  'label': 'Y',
                  'description': 'Y',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.z',
                  'label': 'Z',
                  'description': 'Z',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.description',
                  'label': 'Description',
                  'description': 'Description',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.locatorTypeId',
                  'label': 'Locator Type Id',
                  'description': 'Locator Type Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'switch',
                  'mode': 'switch',
                  'field': 'queryParameters.active',
                  'label': '是否激活',
                  'description': '是否激活',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'switch',
                  'mode': 'switch',
                  'field': 'queryParameters.deleted',
                  'label': '是否被删除',
                  'description': '是否被删除',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'number',
                  'stride': 1,
                  'field': 'queryParameters.version',
                  'label': '版本号',
                  'description': '版本号',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.createdBy',
                  'label': '创建者',
                  'description': '创建者',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.createdAt',
                  'label': '创建时间',
                  'description': '创建时间',
                  'op': 'between'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.updatedBy',
                  'label': '最后修改人',
                  'description': '最后修改人',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.updatedAt',
                  'label': '最后修改时间',
                  'description': '最后修改时间',
                  'op': 'between'
                }
              }
            ],
            'type': 'row',
            'horizontal': 6,
            'vertical': 6
          }
        }
      }
    }
  },
  {
    'name': '修改Locator',
    'language': 'zh',
    'path': '/Locators/{locatorId}.put',
    'data': {
      'type': 'form',
      'path': '/api/Locators/{locatorId}',
      'method': 'put',
      'contentType': 'application/json',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '修改Locator',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '修改Locator',
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'body.warehouseId',
                'label': 'Warehouse Id',
                'description': 'Warehouse Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.parentLocatorId',
                'label': 'Parent Locator Id',
                'description': 'Parent Locator Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.locatorType',
                'label': 'Locator Type',
                'description': 'Locator Type',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.priorityNumber',
                'label': 'Priority Number',
                'description': 'Priority Number',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.isDefault',
                'label': 'Is Default',
                'description': 'Is Default'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.x',
                'label': 'X',
                'description': 'X',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.y',
                'label': 'Y',
                'description': 'Y',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.z',
                'label': 'Z',
                'description': 'Z',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.locatorTypeId',
                'label': 'Locator Type Id',
                'description': 'Locator Type Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.deleted',
                'label': '是否被删除',
                'description': '是否被删除'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      },
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/Locators/{locatorId}',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      }
    }
  },
  {
    'name': '删除指定id的Locator',
    'language': 'zh',
    'path': '/Locators/{locatorId}.delete',
    'data': {
      'type': 'form',
      'path': '/api/Locators/{locatorId}',
      'method': 'delete',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '删除指定id的Locator',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '删除指定id的Locator',
        'body': {
          'children': [ ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': 'Locator详情',
    'language': 'zh',
    'path': '/Locators/{locatorId}',
    'data': {
      'type': 'detail-panel',
      'title': 'Locator详情',
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/Locators/{locatorId}',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      },
      'formPanel': {
        'type': 'form-panel',
        'buttons': [ ],
        'collapsible': false,
        'buttonsWidth': 8,
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'display.locatorId',
                'label': 'Locator Id',
                'description': 'Locator Id',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'display.warehouseId',
                'label': 'Warehouse Id',
                'description': 'Warehouse Id',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.parentLocatorId',
                'label': 'Parent Locator Id',
                'description': 'Parent Locator Id',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.locatorType',
                'label': 'Locator Type',
                'description': 'Locator Type',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.priorityNumber',
                'label': 'Priority Number',
                'description': 'Priority Number',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.isDefault',
                'label': 'Is Default',
                'description': 'Is Default'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.x',
                'label': 'X',
                'description': 'X',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.y',
                'label': 'Y',
                'description': 'Y',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.z',
                'label': 'Z',
                'description': 'Z',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.locatorTypeId',
                'label': 'Locator Type Id',
                'description': 'Locator Type Id',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.deleted',
                'label': '是否被删除',
                'description': '是否被删除'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'stride': 1,
                'field': 'display.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      },
      'tabset': {
        'children': [
          {
            'type': 'tab',
            'viewPath': '/Locators/{locatorId}/revisions',
            'title': '变更历史'
          }
        ],
        'type': 'tabset'
      }
    }
  },
  {
    'name': '变更历史',
    'language': 'zh',
    'path': '/Locators/{locatorId}/revisions',
    'data': {
      'type': 'table',
      'fixedHeader': false,
      'title': '变更历史',
      'showPagination': false,
      'bordered': true,
      'columns': [
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'metadata',
          'label': 'metadata',
          'index': 0,
          'columns': [
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'revisionNumber',
              'label': 'revisionNumber',
              'index': 0
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'revisionDate',
              'label': 'revisionDate',
              'index': 1
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'revisionType',
              'label': 'revisionType',
              'index': 2
            }
          ]
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'entity',
          'label': 'entity',
          'index': 1,
          'columns': [
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'locatorId',
              'label': 'Locator Id',
              'index': 0
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'warehouseId',
              'label': 'Warehouse Id',
              'index': 1
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'parentLocatorId',
              'label': 'Parent Locator Id',
              'index': 2
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'locatorType',
              'label': 'Locator Type',
              'index': 3
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'priorityNumber',
              'label': 'Priority Number',
              'index': 4
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'isDefault',
              'label': 'Is Default',
              'index': 5
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'x',
              'label': 'X',
              'index': 6
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'y',
              'label': 'Y',
              'index': 7
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'z',
              'label': 'Z',
              'index': 8
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'description',
              'label': 'Description',
              'index': 9
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'locatorTypeId',
              'label': 'Locator Type Id',
              'index': 10
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'active',
              'label': '是否激活',
              'index': 11
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'deleted',
              'label': '是否被删除',
              'index': 12
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'version',
              'label': '版本号',
              'index': 13
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'createdBy',
              'label': '创建者',
              'index': 14
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'createdAt',
              'label': '创建时间',
              'index': 15
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'updatedBy',
              'label': '最后修改人',
              'index': 16
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'updatedAt',
              'label': '最后修改时间',
              'index': 17
            }
          ]
        }
      ],
      'buttons': [ ],
      'rowButtons': [ ],
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/Locators/{locatorId}/revisions',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      }
    }
  },
  {
    'name': '新建Warehouse',
    'language': 'zh',
    'path': '/Warehouses.post',
    'data': {
      'type': 'form',
      'path': '/api/Warehouses',
      'method': 'post',
      'contentType': 'application/json',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '新建Warehouse',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '新建Warehouse',
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'body.warehouseId',
                'label': 'Warehouse Id',
                'description': 'Warehouse Id',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.warehouseName',
                'label': 'Warehouse Name',
                'description': 'Warehouse Name',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.isInTransit',
                'label': 'Is In Transit',
                'description': 'Is In Transit'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.deleted',
                'label': '是否被删除',
                'description': '是否被删除'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': '分页查询Warehouse',
    'language': 'zh',
    'path': '/Warehouses',
    'data': {
      'type': 'table',
      'fixedHeader': false,
      'title': '分页查询Warehouse',
      'showPagination': true,
      'columns': [
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'warehouseId',
          'label': 'Warehouse Id',
          'index': 0
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'warehouseName',
          'label': 'Warehouse Name',
          'index': 1
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'description',
          'label': 'Description',
          'index': 2
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'isInTransit',
          'label': 'Is In Transit',
          'index': 3
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'active',
          'label': '是否激活',
          'index': 4
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'deleted',
          'label': '是否被删除',
          'index': 5
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'version',
          'label': '版本号',
          'index': 6
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'createdBy',
          'label': '创建者',
          'index': 7
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'createdAt',
          'label': '创建时间',
          'index': 8
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'updatedBy',
          'label': '最后修改人',
          'index': 9
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'updatedAt',
          'label': '最后修改时间',
          'index': 10
        }
      ],
      'buttons': [
        {
          'type': 'button',
          'label': '新建',
          'description': '新建Warehouse',
          'classType': 'primary',
          'triggerType': 'modal',
          'path': '/Warehouses.post'
        }
      ],
      'rowButtons': [
        {
          'type': 'button',
          'label': '修改',
          'description': '修改Warehouse',
          'classType': 'primary',
          'triggerType': 'modal',
          'path': '/Warehouses/{warehouseId}.put'
        },
        {
          'type': 'button',
          'label': '删除',
          'description': '删除指定id的Warehouse',
          'classType': 'danger',
          'triggerType': 'modal',
          'path': '/Warehouses/{warehouseId}.delete'
        },
        {
          'type': 'button',
          'label': '查看',
          'description': 'Warehouse详情',
          'triggerType': 'link',
          'path': '/Warehouses/{warehouseId}'
        }
      ],
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/Warehouses',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': {
          'type': 'form-panel',
          'buttons': [
            {
              'type': 'button',
              'classType': 'primary',
              'triggerType': 'submit',
              'description': '分页查询Warehouse',
              'label': '查询'
            },
            {
              'type': 'button',
              'classType': 'default',
              'triggerType': 'cancel',
              'label': '重置'
            }
          ],
          'collapsible': true,
          'buttonsWidth': 8,
          'title': '分页查询Warehouse',
          'body': {
            'children': [
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.warehouseId',
                  'label': 'Warehouse Id',
                  'description': 'Warehouse Id',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.warehouseName',
                  'label': 'Warehouse Name',
                  'description': 'Warehouse Name',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.description',
                  'label': 'Description',
                  'description': 'Description',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'switch',
                  'mode': 'switch',
                  'field': 'queryParameters.isInTransit',
                  'label': 'Is In Transit',
                  'description': 'Is In Transit',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'switch',
                  'mode': 'switch',
                  'field': 'queryParameters.active',
                  'label': '是否激活',
                  'description': '是否激活',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'switch',
                  'mode': 'switch',
                  'field': 'queryParameters.deleted',
                  'label': '是否被删除',
                  'description': '是否被删除',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'number',
                  'stride': 1,
                  'field': 'queryParameters.version',
                  'label': '版本号',
                  'description': '版本号',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.createdBy',
                  'label': '创建者',
                  'description': '创建者',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.createdAt',
                  'label': '创建时间',
                  'description': '创建时间',
                  'op': 'between'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'field': 'queryParameters.updatedBy',
                  'label': '最后修改人',
                  'description': '最后修改人',
                  'type': 'text',
                  'op': 'eq'
                }
              },
              {
                'type': 'cell',
                'width': 8,
                'content': {
                  'labelWidth': 8,
                  'fieldWidth': 16,
                  'required': false,
                  'hide': false,
                  'type': 'date-range',
                  'format': 'yyyy-MM-dd HH:mm:ss',
                  'showTime': true,
                  'field': 'queryParameters.updatedAt',
                  'label': '最后修改时间',
                  'description': '最后修改时间',
                  'op': 'between'
                }
              }
            ],
            'type': 'row',
            'horizontal': 6,
            'vertical': 6
          }
        }
      }
    }
  },
  {
    'name': '修改Warehouse',
    'language': 'zh',
    'path': '/Warehouses/{warehouseId}.put',
    'data': {
      'type': 'form',
      'path': '/api/Warehouses/{warehouseId}',
      'method': 'put',
      'contentType': 'application/json',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '修改Warehouse',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '修改Warehouse',
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.warehouseName',
                'label': 'Warehouse Name',
                'description': 'Warehouse Name',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.isInTransit',
                'label': 'Is In Transit',
                'description': 'Is In Transit'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'switch',
                'mode': 'switch',
                'field': 'body.deleted',
                'label': '是否被删除',
                'description': '是否被删除'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'number',
                'stride': 1,
                'field': 'body.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'body.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'date',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'body.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      },
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/Warehouses/{warehouseId}',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      }
    }
  },
  {
    'name': '删除指定id的Warehouse',
    'language': 'zh',
    'path': '/Warehouses/{warehouseId}.delete',
    'data': {
      'type': 'form',
      'path': '/api/Warehouses/{warehouseId}',
      'method': 'delete',
      'formPanel': {
        'type': 'form-panel',
        'buttons': [
          {
            'type': 'button',
            'classType': 'primary',
            'triggerType': 'submit',
            'description': '删除指定id的Warehouse',
            'label': '提交'
          },
          {
            'type': 'button',
            'classType': 'default',
            'triggerType': 'cancel',
            'label': '取消'
          }
        ],
        'collapsible': false,
        'buttonsWidth': 8,
        'title': '删除指定id的Warehouse',
        'body': {
          'children': [ ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      }
    }
  },
  {
    'name': 'Warehouse详情',
    'language': 'zh',
    'path': '/Warehouses/{warehouseId}',
    'data': {
      'type': 'detail-panel',
      'title': 'Warehouse详情',
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/Warehouses/{warehouseId}',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      },
      'formPanel': {
        'type': 'form-panel',
        'buttons': [ ],
        'collapsible': false,
        'buttonsWidth': 8,
        'body': {
          'children': [
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': true,
                'hide': false,
                'field': 'display.warehouseId',
                'label': 'Warehouse Id',
                'description': 'Warehouse Id',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.warehouseName',
                'label': 'Warehouse Name',
                'description': 'Warehouse Name',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.description',
                'label': 'Description',
                'description': 'Description',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.isInTransit',
                'label': 'Is In Transit',
                'description': 'Is In Transit'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.active',
                'label': '是否激活',
                'description': '是否激活'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'mode': 'switch',
                'field': 'display.deleted',
                'label': '是否被删除',
                'description': '是否被删除'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'stride': 1,
                'field': 'display.version',
                'label': '版本号',
                'description': '版本号'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.createdBy',
                'label': '创建者',
                'description': '创建者',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.createdAt',
                'label': '创建时间',
                'description': '创建时间'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'field': 'display.updatedBy',
                'label': '最后修改人',
                'description': '最后修改人',
                'maxLength': 50,
                'type': 'display-text'
              }
            },
            {
              'type': 'cell',
              'width': 8,
              'content': {
                'labelWidth': 8,
                'fieldWidth': 16,
                'required': false,
                'hide': false,
                'type': 'display-text',
                'format': 'yyyy-MM-dd HH:mm:ss',
                'showTime': true,
                'field': 'display.updatedAt',
                'label': '最后修改时间',
                'description': '最后修改时间'
              }
            }
          ],
          'type': 'row',
          'horizontal': 6,
          'vertical': 6
        }
      },
      'tabset': {
        'children': [
          {
            'type': 'tab',
            'viewPath': '/Warehouses/{warehouseId}/revisions',
            'title': '变更历史'
          }
        ],
        'type': 'tabset'
      }
    }
  },
  {
    'name': '变更历史',
    'language': 'zh',
    'path': '/Warehouses/{warehouseId}/revisions',
    'data': {
      'type': 'table',
      'fixedHeader': false,
      'title': '变更历史',
      'showPagination': false,
      'bordered': true,
      'columns': [
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'metadata',
          'label': 'metadata',
          'index': 0,
          'columns': [
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'revisionNumber',
              'label': 'revisionNumber',
              'index': 0
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'revisionDate',
              'label': 'revisionDate',
              'index': 1
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'revisionType',
              'label': 'revisionType',
              'index': 2
            }
          ]
        },
        {
          'type': 'column',
          'hide': false,
          'sortable': false,
          'field': 'entity',
          'label': 'entity',
          'index': 1,
          'columns': [
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'warehouseId',
              'label': 'Warehouse Id',
              'index': 0
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'warehouseName',
              'label': 'Warehouse Name',
              'index': 1
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'description',
              'label': 'Description',
              'index': 2
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'isInTransit',
              'label': 'Is In Transit',
              'index': 3
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'active',
              'label': '是否激活',
              'index': 4
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'deleted',
              'label': '是否被删除',
              'index': 5
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'version',
              'label': '版本号',
              'index': 6
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'createdBy',
              'label': '创建者',
              'index': 7
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'createdAt',
              'label': '创建时间',
              'index': 8
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'updatedBy',
              'label': '最后修改人',
              'index': 9
            },
            {
              'type': 'column',
              'hide': false,
              'sortable': false,
              'field': 'updatedAt',
              'label': '最后修改时间',
              'index': 10
            }
          ]
        }
      ],
      'buttons': [ ],
      'rowButtons': [ ],
      'dataLoader': {
        'type': 'data-loader',
        'path': '/api/Warehouses/{warehouseId}/revisions',
        'method': 'get',
        'accept': 'application/json',
        'formPanel': null
      }
    }
  }
];

@Injectable()
export class ViewWebResource extends WebResource {
  constructor() {
    super('views', VIEWS);
  }

  post(requestInfo: RequestInfo) {
    const {collection, req} = requestInfo;
    const {views, forceUpdate} = (<HttpRequest<any>>req).body;
    for (const view of views) {
      this.saveOrUpdate(collection, view, forceUpdate);
    }
    return this.createResponse(requestInfo);
  }

  private saveOrUpdate(views: any[], view: any, forceUpdate: boolean) {
    const index = views.findIndex(item => item.language === view.language && item.path === view.path);
    if (index === -1) {
      views.push(view);
    } else if (forceUpdate) {
      views[index] = view;
    }
  }

  delete(requestInfo: RequestInfo) {
    const {collection, req} = requestInfo;
    const params = (<HttpRequest<any>>req).params;
    const paths = params.getAll('paths');
    const language = params.get('language');
    for (const path of paths) {
      this.deleteByPathAndLanguage(collection, path, language);
    }
    return super.createResponse(requestInfo);
  }

  private deleteByPathAndLanguage(views: any[], path: string, language: string) {
    for (let i = 0; i < views.length; i++) {
      const item = views[i];
      if (item.language === language && item.path === path) {
        views.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}
