import {WebResource} from './web-resource';
import {Injectable} from '@angular/core';

// tslint:disable:max-line-length
const raml = {
  'types': [
    {
      'name': 'org.dddml.wms.warehouse.Locator',
      'displayName': 'Locator',
      'type': 'object',
      'description': 'Locator',
      'id': false,
      'properties': [
        {
          'name': 'locatorId',
          'displayName': 'Locator Id',
          'type': 'string',
          'required': true,
          'description': 'Locator Id',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'warehouseId',
          'displayName': 'Warehouse Id',
          'type': 'string',
          'required': true,
          'description': 'Warehouse Id',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'parentLocatorId',
          'displayName': 'Parent Locator Id',
          'type': 'string',
          'required': false,
          'description': 'Parent Locator Id',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'locatorType',
          'displayName': 'Locator Type',
          'type': 'string',
          'required': false,
          'description': 'Locator Type',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'priorityNumber',
          'displayName': 'Priority Number',
          'type': 'string',
          'required': false,
          'description': 'Priority Number',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'isDefault',
          'displayName': 'Is Default',
          'type': 'boolean',
          'required': false,
          'description': 'Is Default',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'x',
          'displayName': 'X',
          'type': 'string',
          'required': false,
          'description': 'X',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'y',
          'displayName': 'Y',
          'type': 'string',
          'required': false,
          'description': 'Y',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'z',
          'displayName': 'Z',
          'type': 'string',
          'required': false,
          'description': 'Z',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'description',
          'displayName': 'Description',
          'type': 'string',
          'required': false,
          'description': 'Description',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'locatorTypeId',
          'displayName': 'Locator Type Id',
          'type': 'string',
          'required': false,
          'description': 'Locator Type Id',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'active',
          'displayName': '是否激活',
          'type': 'boolean',
          'required': false,
          'description': '是否激活',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'deleted',
          'displayName': '是否被删除',
          'type': 'boolean',
          'required': false,
          'description': '是否被删除',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'version',
          'displayName': '版本号',
          'type': 'number',
          'required': false,
          'description': '版本号',
          'id': false
        },
        {
          'name': 'createdBy',
          'displayName': '创建者',
          'type': 'string',
          'required': false,
          'description': '创建者',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'createdAt',
          'displayName': '创建时间',
          'type': 'datetime',
          'required': false,
          'description': '创建时间',
          'id': false
        },
        {
          'name': 'updatedBy',
          'displayName': '最后修改人',
          'type': 'string',
          'required': false,
          'description': '最后修改人',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'updatedAt',
          'displayName': '最后修改时间',
          'type': 'datetime',
          'required': false,
          'description': '最后修改时间',
          'id': false
        }
      ]
    },
    {
      'name': 'org.dddml.wms.inout.AddLineParameter',
      'displayName': 'AddLineParameter',
      'type': 'object',
      'description': 'AddLineParameter',
      'id': false,
      'properties': [
        {
          'name': 'lineNumber',
          'displayName': 'Line Number',
          'type': 'string',
          'required': false,
          'description': 'Line Number',
          'id': false
        },
        {
          'name': 'locatorId',
          'displayName': 'Locator Id',
          'type': 'string',
          'required': false,
          'description': 'Locator Id',
          'id': false
        },
        {
          'name': 'productId',
          'displayName': 'Product Id',
          'type': 'string',
          'required': false,
          'description': 'Product Id',
          'id': false
        },
        {
          'name': 'attributeSetInstance',
          'displayName': 'Attribute Set Instance',
          'type': 'object',
          'required': false,
          'description': 'Attribute Set Instance',
          'id': false,
          'properties': [
            {
              'name': '/[a-zA-Z_$]+[a-zA-Z_$0-9]*/',
              'type': 'any',
              'id': false
            }
          ],
          'additionalProperties': true
        },
        {
          'name': 'description',
          'displayName': 'Description',
          'type': 'string',
          'required': false,
          'description': 'Description',
          'id': false
        },
        {
          'name': 'quantityUomId',
          'displayName': 'Quantity Uom Id',
          'type': 'string',
          'required': false,
          'description': 'Quantity Uom Id',
          'id': false
        },
        {
          'name': 'movementQuantity',
          'displayName': 'Movement Quantity',
          'type': 'number',
          'required': false,
          'description': 'Movement Quantity',
          'id': false
        }
      ]
    },
    {
      'name': 'org.springframework.data.domain.Sort.Order',
      'type': 'object',
      'id': false,
      'properties': [
        {
          'name': 'direction',
          'type': 'org.springframework.data.domain.Sort.Direction',
          'required': false,
          'id': false
        },
        {
          'name': 'property',
          'type': 'string',
          'required': false,
          'id': false
        },
        {
          'name': 'ignoreCase',
          'type': 'boolean',
          'required': false,
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'nullHandling',
          'type': 'org.springframework.data.domain.Sort.NullHandling',
          'required': false,
          'id': false
        },
        {
          'name': 'ascending',
          'type': 'boolean',
          'required': false,
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'descending',
          'type': 'boolean',
          'required': false,
          'id': false,
          'enumValues': [
            true,
            false
          ]
        }
      ]
    },
    {
      'name': 'org.springframework.data.domain.Sort.NullHandling',
      'type': 'string',
      'id': false,
      'enumValues': [
        'NATIVE',
        'NULLS_FIRST',
        'NULLS_LAST'
      ]
    },
    {
      'name': 'org.dddml.wms.inout.InOutLineId',
      'displayName': 'InOutLineId',
      'type': 'object',
      'description': 'InOutLineId',
      'id': false,
      'properties': [
        {
          'name': 'lineNumber',
          'displayName': 'Line Number',
          'type': 'string',
          'required': true,
          'description': 'Line Number',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'documentNumber',
          'displayName': 'Document Number',
          'type': 'string',
          'required': true,
          'description': 'Document Number',
          'id': false,
          'maxLength': 50
        }
      ]
    },
    {
      'name': 'org.springframework.data.domain.Page',
      'type': 'object',
      'id': false,
      'properties': [
        {
          'name': 'totalElements',
          'type': 'number',
          'id': false
        },
        {
          'name': 'totalPages',
          'type': 'number',
          'id': false
        },
        {
          'name': 'numberOfElements',
          'type': 'number',
          'id': false
        },
        {
          'name': 'number',
          'type': 'number',
          'id': false
        },
        {
          'name': 'size',
          'type': 'number',
          'id': false
        },
        {
          'name': 'first',
          'type': 'boolean',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'last',
          'type': 'boolean',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'sort',
          'type': 'array',
          'id': false,
          'items': {
            'name': 'items',
            'type': 'org.springframework.data.domain.Sort.Order',
            'id': false
          }
        }
      ]
    },
    {
      'name': 'org.dddml.wms.inout.InOut',
      'displayName': 'InOut',
      'type': 'object',
      'description': 'InOut',
      'id': false,
      'properties': [
        {
          'name': 'documentNumber',
          'displayName': 'Document Number',
          'type': 'string',
          'required': true,
          'description': 'Document Number',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'documentStatusId',
          'displayName': 'Document Status Id',
          'type': 'string',
          'required': false,
          'description': 'Document Status Id',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'posted',
          'displayName': 'Posted',
          'type': 'boolean',
          'required': false,
          'description': 'Posted',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'processed',
          'displayName': 'Processed',
          'type': 'boolean',
          'required': false,
          'description': 'Processed',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'processing',
          'displayName': 'Processing',
          'type': 'string',
          'required': false,
          'description': 'Processing',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'documentTypeId',
          'displayName': 'Document Type Id',
          'type': 'string',
          'required': false,
          'description': 'Document Type Id',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'description',
          'displayName': 'Description',
          'type': 'string',
          'required': false,
          'description': 'Description',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'orderId',
          'displayName': 'Order Id',
          'type': 'string',
          'required': false,
          'description': 'Order Id',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'dateOrdered',
          'displayName': 'Date Ordered',
          'type': 'datetime',
          'required': false,
          'description': 'Date Ordered',
          'id': false
        },
        {
          'name': 'isPrinted',
          'displayName': 'Is Printed',
          'type': 'boolean',
          'required': false,
          'description': 'Is Printed',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'movementTypeId',
          'displayName': 'Movement Type Id',
          'type': 'string',
          'required': false,
          'description': 'Movement Type Id',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'movementDate',
          'displayName': 'Movement Date',
          'type': 'datetime',
          'required': false,
          'description': 'Movement Date',
          'id': false
        },
        {
          'name': 'businessPartnerId',
          'displayName': 'Business Partner Id',
          'type': 'string',
          'required': false,
          'description': 'Business Partner Id',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'warehouseId',
          'displayName': 'Warehouse Id',
          'type': 'string',
          'required': false,
          'description': 'Warehouse Id',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'freightAmount',
          'displayName': 'Freight Amount',
          'type': 'number',
          'required': false,
          'description': 'Freight Amount',
          'id': false
        },
        {
          'name': 'shipperId',
          'displayName': 'Shipper Id',
          'type': 'string',
          'required': false,
          'description': 'Shipper Id',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'chargeAmount',
          'displayName': 'Charge Amount',
          'type': 'number',
          'required': false,
          'description': 'Charge Amount',
          'id': false
        },
        {
          'name': 'datePrinted',
          'displayName': 'Date Printed',
          'type': 'datetime',
          'required': false,
          'description': 'Date Printed',
          'id': false
        },
        {
          'name': 'createdFrom',
          'displayName': 'Created From',
          'type': 'string',
          'required': false,
          'description': 'Created From',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'salesRepresentativeId',
          'displayName': 'Sales Representative Id',
          'type': 'string',
          'required': false,
          'description': 'Sales Representative Id',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'numberOfPackages',
          'displayName': 'Number Of Packages',
          'type': 'number',
          'required': false,
          'description': 'Number Of Packages',
          'id': false
        },
        {
          'name': 'pickDate',
          'displayName': 'Pick Date',
          'type': 'datetime',
          'required': false,
          'description': 'Pick Date',
          'id': false
        },
        {
          'name': 'shipDate',
          'displayName': 'Ship Date',
          'type': 'datetime',
          'required': false,
          'description': 'Ship Date',
          'id': false
        },
        {
          'name': 'trackingNumber',
          'displayName': 'Tracking Number',
          'type': 'string',
          'required': false,
          'description': 'Tracking Number',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'dateReceived',
          'displayName': 'Date Received',
          'type': 'datetime',
          'required': false,
          'description': 'Date Received',
          'id': false
        },
        {
          'name': 'isInTransit',
          'displayName': 'Is In Transit',
          'type': 'boolean',
          'required': false,
          'description': 'Is In Transit',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'isApproved',
          'displayName': 'Is Approved',
          'type': 'boolean',
          'required': false,
          'description': 'Is Approved',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'isInDispute',
          'displayName': 'Is In Dispute',
          'type': 'boolean',
          'required': false,
          'description': 'Is In Dispute',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'rmaDocumentNumber',
          'displayName': 'Rma Document Number',
          'type': 'string',
          'required': false,
          'description': 'Rma Document Number',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'reversalDocumentNumber',
          'displayName': 'Reversal Document Number',
          'type': 'string',
          'required': false,
          'description': 'Reversal Document Number',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'inOutLines',
          'displayName': 'In Out Lines',
          'type': 'array',
          'required': false,
          'description': 'In Out Lines',
          'id': false,
          'items': {
            'name': 'items',
            'type': 'org.dddml.wms.inout.InOutLine',
            'id': false
          }
        },
        {
          'name': 'active',
          'displayName': '是否激活',
          'type': 'boolean',
          'required': false,
          'description': '是否激活',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'version',
          'displayName': '版本号',
          'type': 'number',
          'required': false,
          'description': '版本号',
          'id': false
        },
        {
          'name': 'createdBy',
          'displayName': '创建者',
          'type': 'string',
          'required': false,
          'description': '创建者',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'createdAt',
          'displayName': '创建时间',
          'type': 'datetime',
          'required': false,
          'description': '创建时间',
          'id': false
        },
        {
          'name': 'updatedBy',
          'displayName': '最后修改人',
          'type': 'string',
          'required': false,
          'description': '最后修改人',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'updatedAt',
          'displayName': '最后修改时间',
          'type': 'datetime',
          'required': false,
          'description': '最后修改时间',
          'id': false
        },
        {
          'name': 'POReference',
          'type': 'string',
          'required': false,
          'id': false
        }
      ]
    },
    {
      'name': 'org.dddml.wms.inout.InOutLine',
      'displayName': 'InOutLine',
      'type': 'object',
      'description': 'InOutLine',
      'id': false,
      'properties': [
        {
          'name': 'inOutLineId',
          'displayName': 'In Out Line Id',
          'type': 'org.dddml.wms.inout.InOutLineId',
          'required': false,
          'description': 'In Out Line Id',
          'id': false
        },
        {
          'name': 'locatorId',
          'displayName': 'Locator Id',
          'type': 'string',
          'required': false,
          'description': 'Locator Id',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'productId',
          'displayName': 'Product Id',
          'type': 'string',
          'required': false,
          'description': 'Product Id',
          'id': false,
          'maxLength': 60
        },
        {
          'name': 'attributeSetInstanceId',
          'displayName': 'Attribute Set Instance Id',
          'type': 'string',
          'required': false,
          'description': 'Attribute Set Instance Id',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'description',
          'displayName': 'Description',
          'type': 'string',
          'required': false,
          'description': 'Description',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'quantityUomId',
          'displayName': 'Quantity Uom Id',
          'type': 'string',
          'required': false,
          'description': 'Quantity Uom Id',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'movementQuantity',
          'displayName': 'Movement Quantity',
          'type': 'number',
          'required': false,
          'description': 'Movement Quantity',
          'id': false
        },
        {
          'name': 'pickedQuantity',
          'displayName': 'Picked Quantity',
          'type': 'number',
          'required': false,
          'description': 'Picked Quantity',
          'id': false
        },
        {
          'name': 'isInvoiced',
          'displayName': 'Is Invoiced',
          'type': 'boolean',
          'required': false,
          'description': 'Is Invoiced',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'processed',
          'displayName': 'Processed',
          'type': 'boolean',
          'required': false,
          'description': 'Processed',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'rmaLineNumber',
          'displayName': 'Rma Line Number',
          'type': 'string',
          'required': false,
          'description': 'Rma Line Number',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'reversalLineNumber',
          'displayName': 'Reversal Line Number',
          'type': 'string',
          'required': false,
          'description': 'Reversal Line Number',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'active',
          'displayName': '是否激活',
          'type': 'boolean',
          'required': false,
          'description': '是否激活',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'deleted',
          'displayName': '是否被删除',
          'type': 'boolean',
          'required': false,
          'description': '是否被删除',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'version',
          'displayName': '版本号',
          'type': 'number',
          'required': false,
          'description': '版本号',
          'id': false
        },
        {
          'name': 'createdBy',
          'displayName': '创建者',
          'type': 'string',
          'required': false,
          'description': '创建者',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'createdAt',
          'displayName': '创建时间',
          'type': 'datetime',
          'required': false,
          'description': '创建时间',
          'id': false
        },
        {
          'name': 'updatedBy',
          'displayName': '最后修改人',
          'type': 'string',
          'required': false,
          'description': '最后修改人',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'updatedAt',
          'displayName': '最后修改时间',
          'type': 'datetime',
          'required': false,
          'description': '最后修改时间',
          'id': false
        }
      ]
    },
    {
      'name': 'org.dddml.wms.warehouse.Facility',
      'displayName': 'Facility',
      'type': 'object',
      'description': 'Facility',
      'id': false,
      'properties': [
        {
          'name': 'facilityId',
          'displayName': 'Facility Id',
          'type': 'string',
          'required': true,
          'description': 'Facility Id',
          'id': false,
          'maxLength': 20
        },
        {
          'name': 'facilityTypeId',
          'displayName': 'Facility Type Id',
          'type': 'string',
          'required': false,
          'description': 'Facility Type Id',
          'id': false,
          'maxLength': 20
        },
        {
          'name': 'parentFacilityId',
          'displayName': 'Parent Facility Id',
          'type': 'string',
          'required': false,
          'description': 'Parent Facility Id',
          'id': false,
          'maxLength': 20
        },
        {
          'name': 'ownerPartyId',
          'displayName': 'Owner Party Id',
          'type': 'string',
          'required': false,
          'description': 'Owner Party Id',
          'id': false,
          'maxLength': 20
        },
        {
          'name': 'defaultInventoryItemTypeId',
          'displayName': 'Default Inventory Item Type Id',
          'type': 'string',
          'required': false,
          'description': 'Default Inventory Item Type Id',
          'id': false,
          'maxLength': 20
        },
        {
          'name': 'facilityName',
          'displayName': 'Facility Name',
          'type': 'string',
          'required': false,
          'description': 'Facility Name',
          'id': false,
          'maxLength': 100
        },
        {
          'name': 'primaryFacilityGroupId',
          'displayName': 'Primary Facility Group Id',
          'type': 'string',
          'required': false,
          'description': 'Primary Facility Group Id',
          'id': false,
          'maxLength': 20
        },
        {
          'name': 'oldSquareFootage',
          'displayName': 'Old Square Footage',
          'type': 'number',
          'required': false,
          'description': 'Old Square Footage',
          'id': false
        },
        {
          'name': 'facilitySize',
          'displayName': 'Facility Size',
          'type': 'number',
          'required': false,
          'description': 'Facility Size',
          'id': false
        },
        {
          'name': 'facilitySizeUomId',
          'displayName': 'Facility Size Uom Id',
          'type': 'string',
          'required': false,
          'description': 'Facility Size Uom Id',
          'id': false,
          'maxLength': 20
        },
        {
          'name': 'productStoreId',
          'displayName': 'Product Store Id',
          'type': 'string',
          'required': false,
          'description': 'Product Store Id',
          'id': false,
          'maxLength': 20
        },
        {
          'name': 'defaultDaysToShip',
          'displayName': 'Default Days To Ship',
          'type': 'number',
          'required': false,
          'description': 'In the absence of a product specific days to ship in ProductFacility, this will be used',
          'id': false
        },
        {
          'name': 'openedDate',
          'displayName': 'Opened Date',
          'type': 'datetime',
          'required': false,
          'description': 'Opened Date',
          'id': false
        },
        {
          'name': 'closedDate',
          'displayName': 'Closed Date',
          'type': 'datetime',
          'required': false,
          'description': 'Closed Date',
          'id': false
        },
        {
          'name': 'description',
          'displayName': 'Description',
          'type': 'string',
          'required': false,
          'description': 'Description',
          'id': false,
          'maxLength': 255
        },
        {
          'name': 'defaultDimensionUomId',
          'displayName': 'Default Dimension Uom Id',
          'type': 'string',
          'required': false,
          'description': 'This field store the unit of measurement of dimension (length, width and height)',
          'id': false,
          'maxLength': 20
        },
        {
          'name': 'defaultWeightUomId',
          'displayName': 'Default Weight Uom Id',
          'type': 'string',
          'required': false,
          'description': 'Default Weight Uom Id',
          'id': false,
          'maxLength': 20
        },
        {
          'name': 'geoPointId',
          'displayName': 'Geo Point Id',
          'type': 'string',
          'required': false,
          'description': 'Geo Point Id',
          'id': false,
          'maxLength': 20
        },
        {
          'name': 'active',
          'displayName': '是否激活',
          'type': 'boolean',
          'required': false,
          'description': '是否激活',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'deleted',
          'displayName': '是否被删除',
          'type': 'boolean',
          'required': false,
          'description': '是否被删除',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'version',
          'displayName': '版本号',
          'type': 'number',
          'required': false,
          'description': '版本号',
          'id': false
        },
        {
          'name': 'createdBy',
          'displayName': '创建者',
          'type': 'string',
          'required': false,
          'description': '创建者',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'createdAt',
          'displayName': '创建时间',
          'type': 'datetime',
          'required': false,
          'description': '创建时间',
          'id': false
        },
        {
          'name': 'updatedBy',
          'displayName': '最后修改人',
          'type': 'string',
          'required': false,
          'description': '最后修改人',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'updatedAt',
          'displayName': '最后修改时间',
          'type': 'datetime',
          'required': false,
          'description': '最后修改时间',
          'id': false
        }
      ]
    },
    {
      'name': 'org.dddml.wms.warehouse.LocatorType',
      'displayName': 'LocatorType',
      'type': 'object',
      'description': 'LocatorType',
      'id': false,
      'properties': [
        {
          'name': 'locatorTypeId',
          'displayName': 'Locator Type Id',
          'type': 'string',
          'required': true,
          'description': 'Locator Type Id',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'description',
          'displayName': 'Description',
          'type': 'string',
          'required': false,
          'description': 'Description',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'active',
          'displayName': '是否激活',
          'type': 'boolean',
          'required': false,
          'description': '是否激活',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'deleted',
          'displayName': '是否被删除',
          'type': 'boolean',
          'required': false,
          'description': '是否被删除',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'version',
          'displayName': '版本号',
          'type': 'number',
          'required': false,
          'description': '版本号',
          'id': false
        },
        {
          'name': 'createdBy',
          'displayName': '创建者',
          'type': 'string',
          'required': false,
          'description': '创建者',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'createdAt',
          'displayName': '创建时间',
          'type': 'datetime',
          'required': false,
          'description': '创建时间',
          'id': false
        },
        {
          'name': 'updatedBy',
          'displayName': '最后修改人',
          'type': 'string',
          'required': false,
          'description': '最后修改人',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'updatedAt',
          'displayName': '最后修改时间',
          'type': 'datetime',
          'required': false,
          'description': '最后修改时间',
          'id': false
        }
      ]
    },
    {
      'name': 'org.springframework.data.domain.Sort.Direction',
      'type': 'string',
      'id': false,
      'enumValues': [
        'ASC',
        'DESC'
      ]
    },
    {
      'name': 'org.springframework.data.history.Revision',
      'type': 'object',
      'id': false,
      'properties': [
        {
          'name': 'metadata',
          'type': 'object',
          'id': false,
          'properties': [
            {
              'name': 'revisionNumber',
              'type': 'number',
              'id': false
            },
            {
              'name': 'revisionDate',
              'type': 'datetime',
              'id': false
            },
            {
              'name': 'revisionType',
              'type': 'string',
              'id': false
            }
          ]
        }
      ]
    },
    {
      'name': 'org.dddml.wms.warehouse.Warehouse',
      'displayName': 'Warehouse',
      'type': 'object',
      'description': 'Warehouse',
      'id': false,
      'properties': [
        {
          'name': 'warehouseId',
          'displayName': 'Warehouse Id',
          'type': 'string',
          'required': true,
          'description': 'Warehouse Id',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'warehouseName',
          'displayName': 'Warehouse Name',
          'type': 'string',
          'required': false,
          'description': 'Warehouse Name',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'description',
          'displayName': 'Description',
          'type': 'string',
          'required': false,
          'description': 'Description',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'isInTransit',
          'displayName': 'Is In Transit',
          'type': 'boolean',
          'required': false,
          'description': 'Is In Transit',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'active',
          'displayName': '是否激活',
          'type': 'boolean',
          'required': false,
          'description': '是否激活',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'deleted',
          'displayName': '是否被删除',
          'type': 'boolean',
          'required': false,
          'description': '是否被删除',
          'id': false,
          'enumValues': [
            true,
            false
          ]
        },
        {
          'name': 'version',
          'displayName': '版本号',
          'type': 'number',
          'required': false,
          'description': '版本号',
          'id': false
        },
        {
          'name': 'createdBy',
          'displayName': '创建者',
          'type': 'string',
          'required': false,
          'description': '创建者',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'createdAt',
          'displayName': '创建时间',
          'type': 'datetime',
          'required': false,
          'description': '创建时间',
          'id': false
        },
        {
          'name': 'updatedBy',
          'displayName': '最后修改人',
          'type': 'string',
          'required': false,
          'description': '最后修改人',
          'id': false,
          'maxLength': 50
        },
        {
          'name': 'updatedAt',
          'displayName': '最后修改时间',
          'type': 'datetime',
          'required': false,
          'description': '最后修改时间',
          'id': false
        }
      ]
    }
  ],
  'ramlVersion': '#%RAML 1.0',
  'title': 'wms',
  'description': '仓库管理系统(Warehouse Management System)',
  'version': '0.0.1-SNAPSHOT',
  'baseUri': 'api/',
  'protocols': [
    'HTTP'
  ],
  'mediaType': [
    'application/json'
  ],
  'resources': [
    {
      'relativeUri': '/Facilities',
      'displayName': 'Facility',
      'description': 'Facility',
      'methods': [
        {
          'method': 'post',
          'displayName': '新建',
          'description': '新建Facility',
          'body': [
            {
              'name': 'application/json',
              'displayName': 'Facility',
              'type': 'org.dddml.wms.warehouse.Facility',
              'required': true,
              'description': 'Facility',
              'id': false
            }
          ],
          'responses': [
            {
              'code': '200',
              'description': '新建出来的Facility',
              'body': [
                {
                  'name': 'application/json',
                  'type': 'org.dddml.wms.warehouse.Facility',
                  'id': false
                }
              ]
            }
          ]
        },
        {
          'method': 'get',
          'displayName': '查询',
          'description': '分页查询Facility',
          'queryParameters': [
            {
              'name': 'facilityId',
              'displayName': 'Facility Id',
              'type': 'string',
              'required': false,
              'description': 'Facility Id',
              'id': false
            },
            {
              'name': 'facilityTypeId',
              'displayName': 'Facility Type Id',
              'type': 'string',
              'required': false,
              'description': 'Facility Type Id',
              'id': false
            },
            {
              'name': 'parentFacilityId',
              'displayName': 'Parent Facility Id',
              'type': 'string',
              'required': false,
              'description': 'Parent Facility Id',
              'id': false
            },
            {
              'name': 'ownerPartyId',
              'displayName': 'Owner Party Id',
              'type': 'string',
              'required': false,
              'description': 'Owner Party Id',
              'id': false
            },
            {
              'name': 'defaultInventoryItemTypeId',
              'displayName': 'Default Inventory Item Type Id',
              'type': 'string',
              'required': false,
              'description': 'Default Inventory Item Type Id',
              'id': false
            },
            {
              'name': 'facilityName',
              'displayName': 'Facility Name',
              'type': 'string',
              'required': false,
              'description': 'Facility Name',
              'id': false
            },
            {
              'name': 'primaryFacilityGroupId',
              'displayName': 'Primary Facility Group Id',
              'type': 'string',
              'required': false,
              'description': 'Primary Facility Group Id',
              'id': false
            },
            {
              'name': 'oldSquareFootage',
              'displayName': 'Old Square Footage',
              'type': 'number',
              'required': false,
              'description': 'Old Square Footage',
              'id': false
            },
            {
              'name': 'facilitySize',
              'displayName': 'Facility Size',
              'type': 'number',
              'required': false,
              'description': 'Facility Size',
              'id': false
            },
            {
              'name': 'facilitySizeUomId',
              'displayName': 'Facility Size Uom Id',
              'type': 'string',
              'required': false,
              'description': 'Facility Size Uom Id',
              'id': false
            },
            {
              'name': 'productStoreId',
              'displayName': 'Product Store Id',
              'type': 'string',
              'required': false,
              'description': 'Product Store Id',
              'id': false
            },
            {
              'name': 'defaultDaysToShip',
              'displayName': 'Default Days To Ship',
              'type': 'number',
              'required': false,
              'description': 'In the absence of a product specific days to ship in ProductFacility, this will be used',
              'id': false
            },
            {
              'name': 'openedDate',
              'displayName': 'Opened Date',
              'type': 'datetime',
              'required': false,
              'description': 'Opened Date',
              'id': false
            },
            {
              'name': 'closedDate',
              'displayName': 'Closed Date',
              'type': 'datetime',
              'required': false,
              'description': 'Closed Date',
              'id': false
            },
            {
              'name': 'description',
              'displayName': 'Description',
              'type': 'string',
              'required': false,
              'description': 'Description',
              'id': false
            },
            {
              'name': 'defaultDimensionUomId',
              'displayName': 'Default Dimension Uom Id',
              'type': 'string',
              'required': false,
              'description': 'This field store the unit of measurement of dimension (length, width and height)',
              'id': false
            },
            {
              'name': 'defaultWeightUomId',
              'displayName': 'Default Weight Uom Id',
              'type': 'string',
              'required': false,
              'description': 'Default Weight Uom Id',
              'id': false
            },
            {
              'name': 'geoPointId',
              'displayName': 'Geo Point Id',
              'type': 'string',
              'required': false,
              'description': 'Geo Point Id',
              'id': false
            },
            {
              'name': 'active',
              'displayName': '是否激活',
              'type': 'boolean',
              'required': false,
              'description': '是否激活',
              'id': false,
              'enumValues': [
                true,
                false
              ]
            },
            {
              'name': 'deleted',
              'displayName': '是否被删除',
              'type': 'boolean',
              'required': false,
              'description': '是否被删除',
              'id': false,
              'enumValues': [
                true,
                false
              ]
            },
            {
              'name': 'version',
              'displayName': '版本号',
              'type': 'number',
              'required': false,
              'description': '版本号',
              'id': false
            },
            {
              'name': 'createdBy',
              'displayName': '创建者',
              'type': 'string',
              'required': false,
              'description': '创建者',
              'id': false
            },
            {
              'name': 'createdAt',
              'displayName': '创建时间',
              'type': 'datetime',
              'required': false,
              'description': '创建时间',
              'id': false
            },
            {
              'name': 'updatedBy',
              'displayName': '最后修改人',
              'type': 'string',
              'required': false,
              'description': '最后修改人',
              'id': false
            },
            {
              'name': 'updatedAt',
              'displayName': '最后修改时间',
              'type': 'datetime',
              'required': false,
              'description': '最后修改时间',
              'id': false
            },
            {
              'name': 'sort',
              'type': 'string',
              'required': false,
              'description': 'a collection of sort directives in the format <code>($propertyName,)+[asc|desc]?</code>.',
              'id': false
            },
            {
              'name': 'page',
              'type': 'number',
              'required': false,
              'description': 'the page number to access (0 indexed, defaults to 0).',
              'id': false
            },
            {
              'name': 'size',
              'type': 'number',
              'required': false,
              'description': 'the page size requested (defaults to 20).',
              'id': false
            }
          ],
          'responses': [
            {
              'code': '200',
              'description': '指定分页范围的Facility的集合',
              'body': [
                {
                  'name': 'application/json',
                  'type': 'org.springframework.data.domain.Page',
                  'id': false,
                  'properties': [
                    {
                      'name': 'content',
                      'type': 'array',
                      'id': false,
                      'items': {
                        'name': 'items',
                        'type': 'org.dddml.wms.warehouse.Facility',
                        'id': false
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      'resources': [
        {
          'relativeUri': '/{facilityId}',
          'uriParameters': [
            {
              'name': 'facilityId',
              'displayName': 'Facility id',
              'type': 'string',
              'required': true,
              'description': 'Facility id',
              'id': false
            }
          ],
          'methods': [
            {
              'method': 'put',
              'displayName': '修改',
              'description': '修改Facility',
              'body': [
                {
                  'name': 'application/json',
                  'displayName': 'Facility',
                  'type': 'org.dddml.wms.warehouse.Facility',
                  'required': true,
                  'description': 'Facility',
                  'id': false
                }
              ],
              'responses': [
                {
                  'code': '200',
                  'description': '修改之后的Facility',
                  'body': [
                    {
                      'name': 'application/json',
                      'type': 'org.dddml.wms.warehouse.Facility',
                      'id': false
                    }
                  ]
                }
              ]
            },
            {
              'method': 'delete',
              'displayName': '删除',
              'description': '删除指定id的Facility',
              'responses': [
                {
                  'code': '200'
                }
              ]
            },
            {
              'method': 'patch',
              'displayName': '修改',
              'description': '通过json-patch或者merge-patch的方式局部修改Facility',
              'body': [
                {
                  'name': 'application/json-patch+json',
                  'type': 'array',
                  'required': true,
                  'id': false,
                  'items': {
                    'name': 'items',
                    'type': 'object',
                    'id': false,
                    'properties': [
                      {
                        'name': 'op',
                        'type': 'string',
                        'required': true,
                        'id': false,
                        'enumValues': [
                          'remove',
                          'add',
                          'test',
                          'replace',
                          'copy',
                          'move'
                        ]
                      },
                      {
                        'name': 'path',
                        'type': 'string',
                        'required': true,
                        'id': false,
                        'enumValues': [
                          'facilityId',
                          'facilityTypeId',
                          'parentFacilityId',
                          'ownerPartyId',
                          'defaultInventoryItemTypeId',
                          'facilityName',
                          'primaryFacilityGroupId',
                          'oldSquareFootage',
                          'facilitySize',
                          'facilitySizeUomId',
                          'productStoreId',
                          'defaultDaysToShip',
                          'openedDate',
                          'closedDate',
                          'description',
                          'defaultDimensionUomId',
                          'defaultWeightUomId',
                          'geoPointId',
                          'active',
                          'deleted',
                          'version',
                          'createdBy',
                          'createdAt',
                          'updatedBy',
                          'updatedAt'
                        ]
                      },
                      {
                        'name': 'from',
                        'type': 'string',
                        'required': true,
                        'id': false,
                        'enumValues': [
                          'facilityId',
                          'facilityTypeId',
                          'parentFacilityId',
                          'ownerPartyId',
                          'defaultInventoryItemTypeId',
                          'facilityName',
                          'primaryFacilityGroupId',
                          'oldSquareFootage',
                          'facilitySize',
                          'facilitySizeUomId',
                          'productStoreId',
                          'defaultDaysToShip',
                          'openedDate',
                          'closedDate',
                          'description',
                          'defaultDimensionUomId',
                          'defaultWeightUomId',
                          'geoPointId',
                          'active',
                          'deleted',
                          'version',
                          'createdBy',
                          'createdAt',
                          'updatedBy',
                          'updatedAt'
                        ]
                      },
                      {
                        'name': 'value',
                        'type': 'any',
                        'id': false
                      }
                    ]
                  }
                },
                {
                  'name': 'application/merge-patch+json',
                  'type': 'org.dddml.wms.warehouse.Facility',
                  'required': true,
                  'id': false
                }
              ],
              'responses': [
                {
                  'code': '200',
                  'description': '修改之后的Facility',
                  'body': [
                    {
                      'name': 'application/json',
                      'type': 'org.dddml.wms.warehouse.Facility',
                      'id': false
                    }
                  ]
                }
              ]
            },
            {
              'method': 'get',
              'displayName': '查看',
              'description': 'Facility详情',
              'responses': [
                {
                  'code': '200',
                  'description': '指定id的Facility',
                  'body': [
                    {
                      'name': 'application/json',
                      'type': 'org.dddml.wms.warehouse.Facility',
                      'id': false
                    }
                  ]
                }
              ]
            }
          ],
          'resources': [
            {
              'relativeUri': '/revisions',
              'methods': [
                {
                  'method': 'get',
                  'displayName': '变更历史',
                  'description': '变更历史',
                  'responses': [
                    {
                      'code': '200',
                      'description': '返回Facility的变更历史列表',
                      'body': [
                        {
                          'name': 'application/json',
                          'type': 'array',
                          'id': false,
                          'items': {
                            'name': 'items',
                            'type': 'org.springframework.data.history.Revision',
                            'id': false,
                            'properties': [
                              {
                                'name': 'entity',
                                'type': 'org.dddml.wms.warehouse.Facility',
                                'id': false
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'relativeUri': '/InOuts',
      'displayName': 'In Out',
      'description': 'In Out',
      'methods': [
        {
          'method': 'post',
          'displayName': '新建',
          'description': '新建In Out',
          'body': [
            {
              'name': 'application/json',
              'displayName': 'In Out',
              'type': 'org.dddml.wms.inout.InOut',
              'required': true,
              'description': 'In Out',
              'id': false
            }
          ],
          'responses': [
            {
              'code': '200',
              'description': '新建出来的In Out',
              'body': [
                {
                  'name': 'application/json',
                  'type': 'org.dddml.wms.inout.InOut',
                  'id': false
                }
              ]
            }
          ]
        },
        {
          'method': 'get',
          'displayName': '查询',
          'description': '分页查询In Out',
          'queryParameters': [
            {
              'name': 'documentNumber',
              'displayName': 'Document Number',
              'type': 'string',
              'required': false,
              'description': 'Document Number',
              'id': false
            },
            {
              'name': 'documentStatusId',
              'displayName': 'Document Status Id',
              'type': 'string',
              'required': false,
              'description': 'Document Status Id',
              'id': false
            },
            {
              'name': 'posted',
              'displayName': 'Posted',
              'type': 'boolean',
              'required': false,
              'description': 'Posted',
              'id': false,
              'enumValues': [
                true,
                false
              ]
            },
            {
              'name': 'processed',
              'displayName': 'Processed',
              'type': 'boolean',
              'required': false,
              'description': 'Processed',
              'id': false,
              'enumValues': [
                true,
                false
              ]
            },
            {
              'name': 'processing',
              'displayName': 'Processing',
              'type': 'string',
              'required': false,
              'description': 'Processing',
              'id': false
            },
            {
              'name': 'documentTypeId',
              'displayName': 'Document Type Id',
              'type': 'string',
              'required': false,
              'description': 'Document Type Id',
              'id': false
            },
            {
              'name': 'description',
              'displayName': 'Description',
              'type': 'string',
              'required': false,
              'description': 'Description',
              'id': false
            },
            {
              'name': 'orderId',
              'displayName': 'Order Id',
              'type': 'string',
              'required': false,
              'description': 'Order Id',
              'id': false
            },
            {
              'name': 'dateOrdered',
              'displayName': 'Date Ordered',
              'type': 'datetime',
              'required': false,
              'description': 'Date Ordered',
              'id': false
            },
            {
              'name': 'isPrinted',
              'displayName': 'Is Printed',
              'type': 'boolean',
              'required': false,
              'description': 'Is Printed',
              'id': false,
              'enumValues': [
                true,
                false
              ]
            },
            {
              'name': 'movementTypeId',
              'displayName': 'Movement Type Id',
              'type': 'string',
              'required': false,
              'description': 'Movement Type Id',
              'id': false
            },
            {
              'name': 'movementDate',
              'displayName': 'Movement Date',
              'type': 'datetime',
              'required': false,
              'description': 'Movement Date',
              'id': false
            },
            {
              'name': 'businessPartnerId',
              'displayName': 'Business Partner Id',
              'type': 'string',
              'required': false,
              'description': 'Business Partner Id',
              'id': false
            },
            {
              'name': 'warehouseId',
              'displayName': 'Warehouse Id',
              'type': 'string',
              'required': false,
              'description': 'Warehouse Id',
              'id': false
            },
            {
              'name': 'freightAmount',
              'displayName': 'Freight Amount',
              'type': 'number',
              'required': false,
              'description': 'Freight Amount',
              'id': false
            },
            {
              'name': 'shipperId',
              'displayName': 'Shipper Id',
              'type': 'string',
              'required': false,
              'description': 'Shipper Id',
              'id': false
            },
            {
              'name': 'chargeAmount',
              'displayName': 'Charge Amount',
              'type': 'number',
              'required': false,
              'description': 'Charge Amount',
              'id': false
            },
            {
              'name': 'datePrinted',
              'displayName': 'Date Printed',
              'type': 'datetime',
              'required': false,
              'description': 'Date Printed',
              'id': false
            },
            {
              'name': 'createdFrom',
              'displayName': 'Created From',
              'type': 'string',
              'required': false,
              'description': 'Created From',
              'id': false
            },
            {
              'name': 'salesRepresentativeId',
              'displayName': 'Sales Representative Id',
              'type': 'string',
              'required': false,
              'description': 'Sales Representative Id',
              'id': false
            },
            {
              'name': 'numberOfPackages',
              'displayName': 'Number Of Packages',
              'type': 'number',
              'required': false,
              'description': 'Number Of Packages',
              'id': false
            },
            {
              'name': 'pickDate',
              'displayName': 'Pick Date',
              'type': 'datetime',
              'required': false,
              'description': 'Pick Date',
              'id': false
            },
            {
              'name': 'shipDate',
              'displayName': 'Ship Date',
              'type': 'datetime',
              'required': false,
              'description': 'Ship Date',
              'id': false
            },
            {
              'name': 'trackingNumber',
              'displayName': 'Tracking Number',
              'type': 'string',
              'required': false,
              'description': 'Tracking Number',
              'id': false
            },
            {
              'name': 'dateReceived',
              'displayName': 'Date Received',
              'type': 'datetime',
              'required': false,
              'description': 'Date Received',
              'id': false
            },
            {
              'name': 'isInTransit',
              'displayName': 'Is In Transit',
              'type': 'boolean',
              'required': false,
              'description': 'Is In Transit',
              'id': false,
              'enumValues': [
                true,
                false
              ]
            },
            {
              'name': 'isApproved',
              'displayName': 'Is Approved',
              'type': 'boolean',
              'required': false,
              'description': 'Is Approved',
              'id': false,
              'enumValues': [
                true,
                false
              ]
            },
            {
              'name': 'isInDispute',
              'displayName': 'Is In Dispute',
              'type': 'boolean',
              'required': false,
              'description': 'Is In Dispute',
              'id': false,
              'enumValues': [
                true,
                false
              ]
            },
            {
              'name': 'rmaDocumentNumber',
              'displayName': 'Rma Document Number',
              'type': 'string',
              'required': false,
              'description': 'Rma Document Number',
              'id': false
            },
            {
              'name': 'reversalDocumentNumber',
              'displayName': 'Reversal Document Number',
              'type': 'string',
              'required': false,
              'description': 'Reversal Document Number',
              'id': false
            },
            {
              'name': 'active',
              'displayName': '是否激活',
              'type': 'boolean',
              'required': false,
              'description': '是否激活',
              'id': false,
              'enumValues': [
                true,
                false
              ]
            },
            {
              'name': 'version',
              'displayName': '版本号',
              'type': 'number',
              'required': false,
              'description': '版本号',
              'id': false
            },
            {
              'name': 'createdBy',
              'displayName': '创建者',
              'type': 'string',
              'required': false,
              'description': '创建者',
              'id': false
            },
            {
              'name': 'createdAt',
              'displayName': '创建时间',
              'type': 'datetime',
              'required': false,
              'description': '创建时间',
              'id': false
            },
            {
              'name': 'updatedBy',
              'displayName': '最后修改人',
              'type': 'string',
              'required': false,
              'description': '最后修改人',
              'id': false
            },
            {
              'name': 'updatedAt',
              'displayName': '最后修改时间',
              'type': 'datetime',
              'required': false,
              'description': '最后修改时间',
              'id': false
            },
            {
              'name': 'POReference',
              'type': 'string',
              'required': false,
              'id': false
            },
            {
              'name': 'sort',
              'type': 'string',
              'required': false,
              'description': 'a collection of sort directives in the format <code>($propertyName,)+[asc|desc]?</code>.',
              'id': false
            },
            {
              'name': 'page',
              'type': 'number',
              'required': false,
              'description': 'the page number to access (0 indexed, defaults to 0).',
              'id': false
            },
            {
              'name': 'size',
              'type': 'number',
              'required': false,
              'description': 'the page size requested (defaults to 20).',
              'id': false
            }
          ],
          'responses': [
            {
              'code': '200',
              'description': '指定分页范围的In Out的集合',
              'body': [
                {
                  'name': 'application/json',
                  'type': 'org.springframework.data.domain.Page',
                  'id': false,
                  'properties': [
                    {
                      'name': 'content',
                      'type': 'array',
                      'id': false,
                      'items': {
                        'name': 'items',
                        'type': 'org.dddml.wms.inout.InOut',
                        'id': false
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      'resources': [
        {
          'relativeUri': '/{documentNumber}',
          'uriParameters': [
            {
              'name': 'documentNumber',
              'displayName': 'In Out id',
              'type': 'string',
              'required': true,
              'description': 'In Out id',
              'id': false
            }
          ],
          'methods': [
            {
              'method': 'put',
              'displayName': '修改',
              'description': '修改In Out',
              'body': [
                {
                  'name': 'application/json',
                  'displayName': 'In Out',
                  'type': 'org.dddml.wms.inout.InOut',
                  'required': true,
                  'description': 'In Out',
                  'id': false
                }
              ],
              'responses': [
                {
                  'code': '200',
                  'description': '修改之后的In Out',
                  'body': [
                    {
                      'name': 'application/json',
                      'type': 'org.dddml.wms.inout.InOut',
                      'id': false
                    }
                  ]
                }
              ]
            },
            {
              'method': 'delete',
              'displayName': '删除',
              'description': '删除指定id的In Out',
              'responses': [
                {
                  'code': '200'
                }
              ]
            },
            {
              'method': 'patch',
              'displayName': '修改',
              'description': '通过json-patch或者merge-patch的方式局部修改In Out',
              'body': [
                {
                  'name': 'application/json-patch+json',
                  'type': 'array',
                  'required': true,
                  'id': false,
                  'items': {
                    'name': 'items',
                    'type': 'object',
                    'id': false,
                    'properties': [
                      {
                        'name': 'op',
                        'type': 'string',
                        'required': true,
                        'id': false,
                        'enumValues': [
                          'remove',
                          'add',
                          'test',
                          'replace',
                          'copy',
                          'move'
                        ]
                      },
                      {
                        'name': 'path',
                        'type': 'string',
                        'required': true,
                        'id': false,
                        'enumValues': [
                          'documentNumber',
                          'documentStatusId',
                          'posted',
                          'processed',
                          'processing',
                          'documentTypeId',
                          'description',
                          'orderId',
                          'dateOrdered',
                          'isPrinted',
                          'movementTypeId',
                          'movementDate',
                          'businessPartnerId',
                          'warehouseId',
                          'freightAmount',
                          'shipperId',
                          'chargeAmount',
                          'datePrinted',
                          'createdFrom',
                          'salesRepresentativeId',
                          'numberOfPackages',
                          'pickDate',
                          'shipDate',
                          'trackingNumber',
                          'dateReceived',
                          'isInTransit',
                          'isApproved',
                          'isInDispute',
                          'rmaDocumentNumber',
                          'reversalDocumentNumber',
                          'inOutLines',
                          'active',
                          'version',
                          'createdBy',
                          'createdAt',
                          'updatedBy',
                          'updatedAt',
                          'POReference'
                        ]
                      },
                      {
                        'name': 'from',
                        'type': 'string',
                        'required': true,
                        'id': false,
                        'enumValues': [
                          'documentNumber',
                          'documentStatusId',
                          'posted',
                          'processed',
                          'processing',
                          'documentTypeId',
                          'description',
                          'orderId',
                          'dateOrdered',
                          'isPrinted',
                          'movementTypeId',
                          'movementDate',
                          'businessPartnerId',
                          'warehouseId',
                          'freightAmount',
                          'shipperId',
                          'chargeAmount',
                          'datePrinted',
                          'createdFrom',
                          'salesRepresentativeId',
                          'numberOfPackages',
                          'pickDate',
                          'shipDate',
                          'trackingNumber',
                          'dateReceived',
                          'isInTransit',
                          'isApproved',
                          'isInDispute',
                          'rmaDocumentNumber',
                          'reversalDocumentNumber',
                          'inOutLines',
                          'active',
                          'version',
                          'createdBy',
                          'createdAt',
                          'updatedBy',
                          'updatedAt',
                          'POReference'
                        ]
                      },
                      {
                        'name': 'value',
                        'type': 'any',
                        'id': false
                      }
                    ]
                  }
                },
                {
                  'name': 'application/merge-patch+json',
                  'type': 'org.dddml.wms.inout.InOut',
                  'required': true,
                  'id': false
                }
              ],
              'responses': [
                {
                  'code': '200',
                  'description': '修改之后的In Out',
                  'body': [
                    {
                      'name': 'application/json',
                      'type': 'org.dddml.wms.inout.InOut',
                      'id': false
                    }
                  ]
                }
              ]
            },
            {
              'method': 'get',
              'displayName': '查看',
              'description': 'In Out详情',
              'responses': [
                {
                  'code': '200',
                  'description': '指定id的In Out',
                  'body': [
                    {
                      'name': 'application/json',
                      'type': 'org.dddml.wms.inout.InOut',
                      'id': false
                    }
                  ]
                }
              ]
            }
          ],
          'resources': [
            {
              'relativeUri': '/commands_',
              'resources': [
                {
                  'relativeUri': '/Close',
                  'methods': [
                    {
                      'method': 'post',
                      'displayName': 'Close',
                      'description': 'Close',
                      'responses': [
                        {
                          'code': '200'
                        }
                      ]
                    }
                  ]
                },
                {
                  'relativeUri': '/Reverse',
                  'methods': [
                    {
                      'method': 'post',
                      'displayName': 'Reverse',
                      'description': 'Reverse',
                      'responses': [
                        {
                          'code': '200'
                        }
                      ]
                    }
                  ]
                },
                {
                  'relativeUri': '/Complete',
                  'methods': [
                    {
                      'method': 'post',
                      'displayName': 'Complete',
                      'description': 'Complete',
                      'responses': [
                        {
                          'code': '200'
                        }
                      ]
                    }
                  ]
                },
                {
                  'relativeUri': '/Void_',
                  'methods': [
                    {
                      'method': 'post',
                      'displayName': 'Void_',
                      'description': 'Void_',
                      'responses': [
                        {
                          'code': '200'
                        }
                      ]
                    }
                  ]
                },
                {
                  'relativeUri': '/AddLine',
                  'methods': [
                    {
                      'method': 'post',
                      'displayName': 'Add Line',
                      'description': 'Add Line',
                      'body': [
                        {
                          'name': 'application/json',
                          'displayName': 'parameter',
                          'type': 'org.dddml.wms.inout.AddLineParameter',
                          'required': true,
                          'description': 'parameter',
                          'id': false
                        }
                      ],
                      'responses': [
                        {
                          'code': '200'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'relativeUri': '/InOutLines',
              'methods': [
                {
                  'method': 'get',
                  'displayName': 'In Out Lines',
                  'description': 'In Out Lines',
                  'responses': [
                    {
                      'code': '200',
                      'description': '指定id的In Out的In Out Lines',
                      'body': [
                        {
                          'name': 'application/json',
                          'type': 'array',
                          'id': false,
                          'items': {
                            'name': 'items',
                            'type': 'org.dddml.wms.inout.InOutLine',
                            'id': false
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  'method': 'post',
                  'displayName': '新建',
                  'description': '新建In Out Line',
                  'body': [
                    {
                      'name': 'application/json',
                      'displayName': 'In Out Line',
                      'type': 'org.dddml.wms.inout.InOutLine',
                      'required': true,
                      'description': 'In Out Line',
                      'id': false
                    }
                  ],
                  'responses': [
                    {
                      'code': '200',
                      'description': '新建出来的In Out Line',
                      'body': [
                        {
                          'name': 'application/json',
                          'type': 'org.dddml.wms.inout.InOutLine',
                          'id': false
                        }
                      ]
                    }
                  ]
                }
              ],
              'resources': [
                {
                  'relativeUri': '/{lineNumber}',
                  'uriParameters': [
                    {
                      'name': 'lineNumber',
                      'displayName': 'In Out Line id',
                      'type': 'string',
                      'required': true,
                      'description': 'In Out Line id',
                      'id': false
                    }
                  ],
                  'methods': [
                    {
                      'method': 'get',
                      'displayName': '查看',
                      'description': 'In Out Line详情',
                      'responses': [
                        {
                          'code': '200',
                          'description': '指定id的In Out下某一条特定的In Out Line',
                          'body': [
                            {
                              'name': 'application/json',
                              'type': 'org.dddml.wms.inout.InOutLine',
                              'id': false
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'method': 'put',
                      'displayName': '修改',
                      'description': '修改In Out Line',
                      'body': [
                        {
                          'name': 'application/json',
                          'displayName': 'In Out Line',
                          'type': 'org.dddml.wms.inout.InOutLine',
                          'required': true,
                          'description': 'In Out Line',
                          'id': false
                        }
                      ],
                      'responses': [
                        {
                          'code': '200',
                          'description': '修改之后的In Out Line',
                          'body': [
                            {
                              'name': 'application/json',
                              'type': 'org.dddml.wms.inout.InOutLine',
                              'id': false
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'method': 'delete',
                      'displayName': '删除',
                      'description': '删除指定id的In Out Line',
                      'responses': [
                        {
                          'code': '200'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'relativeUri': '/revisions',
              'methods': [
                {
                  'method': 'get',
                  'displayName': '变更历史',
                  'description': '变更历史',
                  'responses': [
                    {
                      'code': '200',
                      'description': '返回In Out的变更历史列表',
                      'body': [
                        {
                          'name': 'application/json',
                          'type': 'array',
                          'id': false,
                          'items': {
                            'name': 'items',
                            'type': 'org.springframework.data.history.Revision',
                            'id': false,
                            'properties': [
                              {
                                'name': 'entity',
                                'type': 'org.dddml.wms.inout.InOut',
                                'id': false
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'relativeUri': '/LocatorTypes',
      'displayName': 'Locator Type',
      'description': 'Locator Type',
      'methods': [
        {
          'method': 'post',
          'displayName': '新建',
          'description': '新建Locator Type',
          'body': [
            {
              'name': 'application/json',
              'displayName': 'Locator Type',
              'type': 'org.dddml.wms.warehouse.LocatorType',
              'required': true,
              'description': 'Locator Type',
              'id': false
            }
          ],
          'responses': [
            {
              'code': '200',
              'description': '新建出来的Locator Type',
              'body': [
                {
                  'name': 'application/json',
                  'type': 'org.dddml.wms.warehouse.LocatorType',
                  'id': false
                }
              ]
            }
          ]
        },
        {
          'method': 'get',
          'displayName': '查询',
          'description': '分页查询Locator Type',
          'queryParameters': [
            {
              'name': 'locatorTypeId',
              'displayName': 'Locator Type Id',
              'type': 'string',
              'required': false,
              'description': 'Locator Type Id',
              'id': false
            },
            {
              'name': 'description',
              'displayName': 'Description',
              'type': 'string',
              'required': false,
              'description': 'Description',
              'id': false
            },
            {
              'name': 'active',
              'displayName': '是否激活',
              'type': 'boolean',
              'required': false,
              'description': '是否激活',
              'id': false,
              'enumValues': [
                true,
                false
              ]
            },
            {
              'name': 'deleted',
              'displayName': '是否被删除',
              'type': 'boolean',
              'required': false,
              'description': '是否被删除',
              'id': false,
              'enumValues': [
                true,
                false
              ]
            },
            {
              'name': 'version',
              'displayName': '版本号',
              'type': 'number',
              'required': false,
              'description': '版本号',
              'id': false
            },
            {
              'name': 'createdBy',
              'displayName': '创建者',
              'type': 'string',
              'required': false,
              'description': '创建者',
              'id': false
            },
            {
              'name': 'createdAt',
              'displayName': '创建时间',
              'type': 'datetime',
              'required': false,
              'description': '创建时间',
              'id': false
            },
            {
              'name': 'updatedBy',
              'displayName': '最后修改人',
              'type': 'string',
              'required': false,
              'description': '最后修改人',
              'id': false
            },
            {
              'name': 'updatedAt',
              'displayName': '最后修改时间',
              'type': 'datetime',
              'required': false,
              'description': '最后修改时间',
              'id': false
            },
            {
              'name': 'sort',
              'type': 'string',
              'required': false,
              'description': 'a collection of sort directives in the format <code>($propertyName,)+[asc|desc]?</code>.',
              'id': false
            },
            {
              'name': 'page',
              'type': 'number',
              'required': false,
              'description': 'the page number to access (0 indexed, defaults to 0).',
              'id': false
            },
            {
              'name': 'size',
              'type': 'number',
              'required': false,
              'description': 'the page size requested (defaults to 20).',
              'id': false
            }
          ],
          'responses': [
            {
              'code': '200',
              'description': '指定分页范围的Locator Type的集合',
              'body': [
                {
                  'name': 'application/json',
                  'type': 'org.springframework.data.domain.Page',
                  'id': false,
                  'properties': [
                    {
                      'name': 'content',
                      'type': 'array',
                      'id': false,
                      'items': {
                        'name': 'items',
                        'type': 'org.dddml.wms.warehouse.LocatorType',
                        'id': false
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      'resources': [
        {
          'relativeUri': '/{locatorTypeId}',
          'uriParameters': [
            {
              'name': 'locatorTypeId',
              'displayName': 'Locator Type id',
              'type': 'string',
              'required': true,
              'description': 'Locator Type id',
              'id': false
            }
          ],
          'methods': [
            {
              'method': 'put',
              'displayName': '修改',
              'description': '修改Locator Type',
              'body': [
                {
                  'name': 'application/json',
                  'displayName': 'Locator Type',
                  'type': 'org.dddml.wms.warehouse.LocatorType',
                  'required': true,
                  'description': 'Locator Type',
                  'id': false
                }
              ],
              'responses': [
                {
                  'code': '200',
                  'description': '修改之后的Locator Type',
                  'body': [
                    {
                      'name': 'application/json',
                      'type': 'org.dddml.wms.warehouse.LocatorType',
                      'id': false
                    }
                  ]
                }
              ]
            },
            {
              'method': 'delete',
              'displayName': '删除',
              'description': '删除指定id的Locator Type',
              'responses': [
                {
                  'code': '200'
                }
              ]
            },
            {
              'method': 'patch',
              'displayName': '修改',
              'description': '通过json-patch或者merge-patch的方式局部修改Locator Type',
              'body': [
                {
                  'name': 'application/json-patch+json',
                  'type': 'array',
                  'required': true,
                  'id': false,
                  'items': {
                    'name': 'items',
                    'type': 'object',
                    'id': false,
                    'properties': [
                      {
                        'name': 'op',
                        'type': 'string',
                        'required': true,
                        'id': false,
                        'enumValues': [
                          'remove',
                          'add',
                          'test',
                          'replace',
                          'copy',
                          'move'
                        ]
                      },
                      {
                        'name': 'path',
                        'type': 'string',
                        'required': true,
                        'id': false,
                        'enumValues': [
                          'locatorTypeId',
                          'description',
                          'active',
                          'deleted',
                          'version',
                          'createdBy',
                          'createdAt',
                          'updatedBy',
                          'updatedAt'
                        ]
                      },
                      {
                        'name': 'from',
                        'type': 'string',
                        'required': true,
                        'id': false,
                        'enumValues': [
                          'locatorTypeId',
                          'description',
                          'active',
                          'deleted',
                          'version',
                          'createdBy',
                          'createdAt',
                          'updatedBy',
                          'updatedAt'
                        ]
                      },
                      {
                        'name': 'value',
                        'type': 'any',
                        'id': false
                      }
                    ]
                  }
                },
                {
                  'name': 'application/merge-patch+json',
                  'type': 'org.dddml.wms.warehouse.LocatorType',
                  'required': true,
                  'id': false
                }
              ],
              'responses': [
                {
                  'code': '200',
                  'description': '修改之后的Locator Type',
                  'body': [
                    {
                      'name': 'application/json',
                      'type': 'org.dddml.wms.warehouse.LocatorType',
                      'id': false
                    }
                  ]
                }
              ]
            },
            {
              'method': 'get',
              'displayName': '查看',
              'description': 'Locator Type详情',
              'responses': [
                {
                  'code': '200',
                  'description': '指定id的Locator Type',
                  'body': [
                    {
                      'name': 'application/json',
                      'type': 'org.dddml.wms.warehouse.LocatorType',
                      'id': false
                    }
                  ]
                }
              ]
            }
          ],
          'resources': [
            {
              'relativeUri': '/revisions',
              'methods': [
                {
                  'method': 'get',
                  'displayName': '变更历史',
                  'description': '变更历史',
                  'responses': [
                    {
                      'code': '200',
                      'description': '返回Locator Type的变更历史列表',
                      'body': [
                        {
                          'name': 'application/json',
                          'type': 'array',
                          'id': false,
                          'items': {
                            'name': 'items',
                            'type': 'org.springframework.data.history.Revision',
                            'id': false,
                            'properties': [
                              {
                                'name': 'entity',
                                'type': 'org.dddml.wms.warehouse.LocatorType',
                                'id': false
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'relativeUri': '/Locators',
      'displayName': 'Locator',
      'description': 'Locator',
      'methods': [
        {
          'method': 'post',
          'displayName': '新建',
          'description': '新建Locator',
          'body': [
            {
              'name': 'application/json',
              'displayName': 'Locator',
              'type': 'org.dddml.wms.warehouse.Locator',
              'required': true,
              'description': 'Locator',
              'id': false
            }
          ],
          'responses': [
            {
              'code': '200',
              'description': '新建出来的Locator',
              'body': [
                {
                  'name': 'application/json',
                  'type': 'org.dddml.wms.warehouse.Locator',
                  'id': false
                }
              ]
            }
          ]
        },
        {
          'method': 'get',
          'displayName': '查询',
          'description': '分页查询Locator',
          'queryParameters': [
            {
              'name': 'locatorId',
              'displayName': 'Locator Id',
              'type': 'string',
              'required': false,
              'description': 'Locator Id',
              'id': false
            },
            {
              'name': 'warehouseId',
              'displayName': 'Warehouse Id',
              'type': 'string',
              'required': false,
              'description': 'Warehouse Id',
              'id': false
            },
            {
              'name': 'parentLocatorId',
              'displayName': 'Parent Locator Id',
              'type': 'string',
              'required': false,
              'description': 'Parent Locator Id',
              'id': false
            },
            {
              'name': 'locatorType',
              'displayName': 'Locator Type',
              'type': 'string',
              'required': false,
              'description': 'Locator Type',
              'id': false
            },
            {
              'name': 'priorityNumber',
              'displayName': 'Priority Number',
              'type': 'string',
              'required': false,
              'description': 'Priority Number',
              'id': false
            },
            {
              'name': 'isDefault',
              'displayName': 'Is Default',
              'type': 'boolean',
              'required': false,
              'description': 'Is Default',
              'id': false,
              'enumValues': [
                true,
                false
              ]
            },
            {
              'name': 'x',
              'displayName': 'X',
              'type': 'string',
              'required': false,
              'description': 'X',
              'id': false
            },
            {
              'name': 'y',
              'displayName': 'Y',
              'type': 'string',
              'required': false,
              'description': 'Y',
              'id': false
            },
            {
              'name': 'z',
              'displayName': 'Z',
              'type': 'string',
              'required': false,
              'description': 'Z',
              'id': false
            },
            {
              'name': 'description',
              'displayName': 'Description',
              'type': 'string',
              'required': false,
              'description': 'Description',
              'id': false
            },
            {
              'name': 'locatorTypeId',
              'displayName': 'Locator Type Id',
              'type': 'string',
              'required': false,
              'description': 'Locator Type Id',
              'id': false
            },
            {
              'name': 'active',
              'displayName': '是否激活',
              'type': 'boolean',
              'required': false,
              'description': '是否激活',
              'id': false,
              'enumValues': [
                true,
                false
              ]
            },
            {
              'name': 'deleted',
              'displayName': '是否被删除',
              'type': 'boolean',
              'required': false,
              'description': '是否被删除',
              'id': false,
              'enumValues': [
                true,
                false
              ]
            },
            {
              'name': 'version',
              'displayName': '版本号',
              'type': 'number',
              'required': false,
              'description': '版本号',
              'id': false
            },
            {
              'name': 'createdBy',
              'displayName': '创建者',
              'type': 'string',
              'required': false,
              'description': '创建者',
              'id': false
            },
            {
              'name': 'createdAt',
              'displayName': '创建时间',
              'type': 'datetime',
              'required': false,
              'description': '创建时间',
              'id': false
            },
            {
              'name': 'updatedBy',
              'displayName': '最后修改人',
              'type': 'string',
              'required': false,
              'description': '最后修改人',
              'id': false
            },
            {
              'name': 'updatedAt',
              'displayName': '最后修改时间',
              'type': 'datetime',
              'required': false,
              'description': '最后修改时间',
              'id': false
            },
            {
              'name': 'sort',
              'type': 'string',
              'required': false,
              'description': 'a collection of sort directives in the format <code>($propertyName,)+[asc|desc]?</code>.',
              'id': false
            },
            {
              'name': 'page',
              'type': 'number',
              'required': false,
              'description': 'the page number to access (0 indexed, defaults to 0).',
              'id': false
            },
            {
              'name': 'size',
              'type': 'number',
              'required': false,
              'description': 'the page size requested (defaults to 20).',
              'id': false
            }
          ],
          'responses': [
            {
              'code': '200',
              'description': '指定分页范围的Locator的集合',
              'body': [
                {
                  'name': 'application/json',
                  'type': 'org.springframework.data.domain.Page',
                  'id': false,
                  'properties': [
                    {
                      'name': 'content',
                      'type': 'array',
                      'id': false,
                      'items': {
                        'name': 'items',
                        'type': 'org.dddml.wms.warehouse.Locator',
                        'id': false
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      'resources': [
        {
          'relativeUri': '/{locatorId}',
          'uriParameters': [
            {
              'name': 'locatorId',
              'displayName': 'Locator id',
              'type': 'string',
              'required': true,
              'description': 'Locator id',
              'id': false
            }
          ],
          'methods': [
            {
              'method': 'put',
              'displayName': '修改',
              'description': '修改Locator',
              'body': [
                {
                  'name': 'application/json',
                  'displayName': 'Locator',
                  'type': 'org.dddml.wms.warehouse.Locator',
                  'required': true,
                  'description': 'Locator',
                  'id': false
                }
              ],
              'responses': [
                {
                  'code': '200',
                  'description': '修改之后的Locator',
                  'body': [
                    {
                      'name': 'application/json',
                      'type': 'org.dddml.wms.warehouse.Locator',
                      'id': false
                    }
                  ]
                }
              ]
            },
            {
              'method': 'delete',
              'displayName': '删除',
              'description': '删除指定id的Locator',
              'responses': [
                {
                  'code': '200'
                }
              ]
            },
            {
              'method': 'patch',
              'displayName': '修改',
              'description': '通过json-patch或者merge-patch的方式局部修改Locator',
              'body': [
                {
                  'name': 'application/json-patch+json',
                  'type': 'array',
                  'required': true,
                  'id': false,
                  'items': {
                    'name': 'items',
                    'type': 'object',
                    'id': false,
                    'properties': [
                      {
                        'name': 'op',
                        'type': 'string',
                        'required': true,
                        'id': false,
                        'enumValues': [
                          'remove',
                          'add',
                          'test',
                          'replace',
                          'copy',
                          'move'
                        ]
                      },
                      {
                        'name': 'path',
                        'type': 'string',
                        'required': true,
                        'id': false,
                        'enumValues': [
                          'locatorId',
                          'warehouseId',
                          'parentLocatorId',
                          'locatorType',
                          'priorityNumber',
                          'isDefault',
                          'x',
                          'y',
                          'z',
                          'description',
                          'locatorTypeId',
                          'active',
                          'deleted',
                          'version',
                          'createdBy',
                          'createdAt',
                          'updatedBy',
                          'updatedAt'
                        ]
                      },
                      {
                        'name': 'from',
                        'type': 'string',
                        'required': true,
                        'id': false,
                        'enumValues': [
                          'locatorId',
                          'warehouseId',
                          'parentLocatorId',
                          'locatorType',
                          'priorityNumber',
                          'isDefault',
                          'x',
                          'y',
                          'z',
                          'description',
                          'locatorTypeId',
                          'active',
                          'deleted',
                          'version',
                          'createdBy',
                          'createdAt',
                          'updatedBy',
                          'updatedAt'
                        ]
                      },
                      {
                        'name': 'value',
                        'type': 'any',
                        'id': false
                      }
                    ]
                  }
                },
                {
                  'name': 'application/merge-patch+json',
                  'type': 'org.dddml.wms.warehouse.Locator',
                  'required': true,
                  'id': false
                }
              ],
              'responses': [
                {
                  'code': '200',
                  'description': '修改之后的Locator',
                  'body': [
                    {
                      'name': 'application/json',
                      'type': 'org.dddml.wms.warehouse.Locator',
                      'id': false
                    }
                  ]
                }
              ]
            },
            {
              'method': 'get',
              'displayName': '查看',
              'description': 'Locator详情',
              'responses': [
                {
                  'code': '200',
                  'description': '指定id的Locator',
                  'body': [
                    {
                      'name': 'application/json',
                      'type': 'org.dddml.wms.warehouse.Locator',
                      'id': false
                    }
                  ]
                }
              ]
            }
          ],
          'resources': [
            {
              'relativeUri': '/revisions',
              'methods': [
                {
                  'method': 'get',
                  'displayName': '变更历史',
                  'description': '变更历史',
                  'responses': [
                    {
                      'code': '200',
                      'description': '返回Locator的变更历史列表',
                      'body': [
                        {
                          'name': 'application/json',
                          'type': 'array',
                          'id': false,
                          'items': {
                            'name': 'items',
                            'type': 'org.springframework.data.history.Revision',
                            'id': false,
                            'properties': [
                              {
                                'name': 'entity',
                                'type': 'org.dddml.wms.warehouse.Locator',
                                'id': false
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'relativeUri': '/Warehouses',
      'displayName': 'Warehouse',
      'description': 'Warehouse',
      'methods': [
        {
          'method': 'post',
          'displayName': '新建',
          'description': '新建Warehouse',
          'body': [
            {
              'name': 'application/json',
              'displayName': 'Warehouse',
              'type': 'org.dddml.wms.warehouse.Warehouse',
              'required': true,
              'description': 'Warehouse',
              'id': false
            }
          ],
          'responses': [
            {
              'code': '200',
              'description': '新建出来的Warehouse',
              'body': [
                {
                  'name': 'application/json',
                  'type': 'org.dddml.wms.warehouse.Warehouse',
                  'id': false
                }
              ]
            }
          ]
        },
        {
          'method': 'get',
          'displayName': '查询',
          'description': '分页查询Warehouse',
          'queryParameters': [
            {
              'name': 'warehouseId',
              'displayName': 'Warehouse Id',
              'type': 'string',
              'required': false,
              'description': 'Warehouse Id',
              'id': false
            },
            {
              'name': 'warehouseName',
              'displayName': 'Warehouse Name',
              'type': 'string',
              'required': false,
              'description': 'Warehouse Name',
              'id': false
            },
            {
              'name': 'description',
              'displayName': 'Description',
              'type': 'string',
              'required': false,
              'description': 'Description',
              'id': false
            },
            {
              'name': 'isInTransit',
              'displayName': 'Is In Transit',
              'type': 'boolean',
              'required': false,
              'description': 'Is In Transit',
              'id': false,
              'enumValues': [
                true,
                false
              ]
            },
            {
              'name': 'active',
              'displayName': '是否激活',
              'type': 'boolean',
              'required': false,
              'description': '是否激活',
              'id': false,
              'enumValues': [
                true,
                false
              ]
            },
            {
              'name': 'deleted',
              'displayName': '是否被删除',
              'type': 'boolean',
              'required': false,
              'description': '是否被删除',
              'id': false,
              'enumValues': [
                true,
                false
              ]
            },
            {
              'name': 'version',
              'displayName': '版本号',
              'type': 'number',
              'required': false,
              'description': '版本号',
              'id': false
            },
            {
              'name': 'createdBy',
              'displayName': '创建者',
              'type': 'string',
              'required': false,
              'description': '创建者',
              'id': false
            },
            {
              'name': 'createdAt',
              'displayName': '创建时间',
              'type': 'datetime',
              'required': false,
              'description': '创建时间',
              'id': false
            },
            {
              'name': 'updatedBy',
              'displayName': '最后修改人',
              'type': 'string',
              'required': false,
              'description': '最后修改人',
              'id': false
            },
            {
              'name': 'updatedAt',
              'displayName': '最后修改时间',
              'type': 'datetime',
              'required': false,
              'description': '最后修改时间',
              'id': false
            },
            {
              'name': 'sort',
              'type': 'string',
              'required': false,
              'description': 'a collection of sort directives in the format <code>($propertyName,)+[asc|desc]?</code>.',
              'id': false
            },
            {
              'name': 'page',
              'type': 'number',
              'required': false,
              'description': 'the page number to access (0 indexed, defaults to 0).',
              'id': false
            },
            {
              'name': 'size',
              'type': 'number',
              'required': false,
              'description': 'the page size requested (defaults to 20).',
              'id': false
            }
          ],
          'responses': [
            {
              'code': '200',
              'description': '指定分页范围的Warehouse的集合',
              'body': [
                {
                  'name': 'application/json',
                  'type': 'org.springframework.data.domain.Page',
                  'id': false,
                  'properties': [
                    {
                      'name': 'content',
                      'type': 'array',
                      'id': false,
                      'items': {
                        'name': 'items',
                        'type': 'org.dddml.wms.warehouse.Warehouse',
                        'id': false
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      'resources': [
        {
          'relativeUri': '/{warehouseId}',
          'uriParameters': [
            {
              'name': 'warehouseId',
              'displayName': 'Warehouse id',
              'type': 'string',
              'required': true,
              'description': 'Warehouse id',
              'id': false
            }
          ],
          'methods': [
            {
              'method': 'put',
              'displayName': '修改',
              'description': '修改Warehouse',
              'body': [
                {
                  'name': 'application/json',
                  'displayName': 'Warehouse',
                  'type': 'org.dddml.wms.warehouse.Warehouse',
                  'required': true,
                  'description': 'Warehouse',
                  'id': false
                }
              ],
              'responses': [
                {
                  'code': '200',
                  'description': '修改之后的Warehouse',
                  'body': [
                    {
                      'name': 'application/json',
                      'type': 'org.dddml.wms.warehouse.Warehouse',
                      'id': false
                    }
                  ]
                }
              ]
            },
            {
              'method': 'delete',
              'displayName': '删除',
              'description': '删除指定id的Warehouse',
              'responses': [
                {
                  'code': '200'
                }
              ]
            },
            {
              'method': 'patch',
              'displayName': '修改',
              'description': '通过json-patch或者merge-patch的方式局部修改Warehouse',
              'body': [
                {
                  'name': 'application/json-patch+json',
                  'type': 'array',
                  'required': true,
                  'id': false,
                  'items': {
                    'name': 'items',
                    'type': 'object',
                    'id': false,
                    'properties': [
                      {
                        'name': 'op',
                        'type': 'string',
                        'required': true,
                        'id': false,
                        'enumValues': [
                          'remove',
                          'add',
                          'test',
                          'replace',
                          'copy',
                          'move'
                        ]
                      },
                      {
                        'name': 'path',
                        'type': 'string',
                        'required': true,
                        'id': false,
                        'enumValues': [
                          'warehouseId',
                          'warehouseName',
                          'description',
                          'isInTransit',
                          'active',
                          'deleted',
                          'version',
                          'createdBy',
                          'createdAt',
                          'updatedBy',
                          'updatedAt'
                        ]
                      },
                      {
                        'name': 'from',
                        'type': 'string',
                        'required': true,
                        'id': false,
                        'enumValues': [
                          'warehouseId',
                          'warehouseName',
                          'description',
                          'isInTransit',
                          'active',
                          'deleted',
                          'version',
                          'createdBy',
                          'createdAt',
                          'updatedBy',
                          'updatedAt'
                        ]
                      },
                      {
                        'name': 'value',
                        'type': 'any',
                        'id': false
                      }
                    ]
                  }
                },
                {
                  'name': 'application/merge-patch+json',
                  'type': 'org.dddml.wms.warehouse.Warehouse',
                  'required': true,
                  'id': false
                }
              ],
              'responses': [
                {
                  'code': '200',
                  'description': '修改之后的Warehouse',
                  'body': [
                    {
                      'name': 'application/json',
                      'type': 'org.dddml.wms.warehouse.Warehouse',
                      'id': false
                    }
                  ]
                }
              ]
            },
            {
              'method': 'get',
              'displayName': '查看',
              'description': 'Warehouse详情',
              'responses': [
                {
                  'code': '200',
                  'description': '指定id的Warehouse',
                  'body': [
                    {
                      'name': 'application/json',
                      'type': 'org.dddml.wms.warehouse.Warehouse',
                      'id': false
                    }
                  ]
                }
              ]
            }
          ],
          'resources': [
            {
              'relativeUri': '/revisions',
              'methods': [
                {
                  'method': 'get',
                  'displayName': '变更历史',
                  'description': '变更历史',
                  'responses': [
                    {
                      'code': '200',
                      'description': '返回Warehouse的变更历史列表',
                      'body': [
                        {
                          'name': 'application/json',
                          'type': 'array',
                          'id': false,
                          'items': {
                            'name': 'items',
                            'type': 'org.springframework.data.history.Revision',
                            'id': false,
                            'properties': [
                              {
                                'name': 'entity',
                                'type': 'org.dddml.wms.warehouse.Warehouse',
                                'id': false
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

@Injectable()
export class ApiWebResource extends WebResource {
  constructor() {
    super('api', raml);
  }
}
