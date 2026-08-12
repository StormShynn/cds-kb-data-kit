---
name: I_SERVICEDOCUMENTREFOBJECT
description: "Service DocumentUMENTREFOBJECT"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - service
  - document
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCUMENTREFOBJECT

**Service DocumentUMENTREFOBJECT**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceObjectType` | ✓ | |  | `objtype_h` |  |  |
| `ServiceDocument` | ✓ | |  | `object_id` |  |  |
| `ServiceDocumentItem` | ✓ | |  | `number_int` |  |  |
| `ServiceRefObjectSequenceNumber` | ✓ | |  | `counter` |  |  |
| `ServiceReferenceObjectType` |  | |  | `type_object` |  |  |
| `ServiceReferenceObjectUUID` |  | |  | `guid_object` |  |  |
| `ProductID` |  | |  | `product_id` |  |  |
| `SrvcRefObjIsMainObject` |  | |  | `main_object` |  |  |
| `ProductUUID` |  | |  | `product_guid` |  |  |
| `SerialNumber` |  | |  | `serial_number` |  |  |
| `Equipment` |  | |  | `equipment_id` |  |  |
| `FunctionalLocation` |  | |  | `functional_location_id` |  |  |
| `ReferenceProduct` |  | |  | `ref_product_id` |  |  |
| `_Equipment` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_SrvcReferenceObjectType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Equipment` | `I_Equipment` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_FunctionalLocation` | `I_FunctionalLocation` | [0..1] |
| `_SrvcReferenceObjectType` | `I_SrvcReferenceObjectType` | [1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Reference Object of Service Transaction'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
//                   filter: [{operator: #EQ, tableElement: 'objtype_a', value: 'BUS2000%'}],
                    table: 'crms4d_refobj', role: #MAIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument', 'ServiceDocumentItem', 'ServiceRefObjectSequenceNumber'],
                    tableElement: ['objtype_h', 'object_id', 'number_int', 'counter']
                }
            ]
        }
    }
 }

@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@AbapCatalog: {
  sqlViewName: 'ISERVDOCREFOBJ',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel: {
//   representativeKey: 'ServiceDocumentItem',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XL
   },
   supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
}
//@Analytics.dataCategory: #DIMENSION
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

//! Business Object SONT for the Service Document Reference Object
@ObjectModel.sapObjectNodeType.name: 'ServiceDocumentReferenceObject'

define view I_ServiceDocumentRefObject 
  as select from crms4d_refobj 
  association [0..1] to I_Equipment               as _Equipment               on $projection.Equipment = _Equipment.Equipment
  association [0..1] to I_Product                 as _Product                 on $projection.ProductID = _Product.Product
  association [0..1] to I_FunctionalLocation      as _FunctionalLocation      on $projection.FunctionalLocation = _FunctionalLocation.FunctionalLocation
  association [1]    to I_SrvcReferenceObjectType as _SrvcReferenceObjectType on $projection.ServiceReferenceObjectType = _SrvcReferenceObjectType.ServiceReferenceObjectType

{
  key objtype_h              as ServiceObjectType,
  key object_id              as ServiceDocument,
  key number_int             as ServiceDocumentItem,
  key counter                as ServiceRefObjectSequenceNumber,

      @ObjectModel.foreignKey.association: '_SrvcReferenceObjectType'
      type_object            as ServiceReferenceObjectType,
      guid_object            as ServiceReferenceObjectUUID,

      @ObjectModel.foreignKey.association: '_Product'
      product_id             as ProductID,

      main_object            as SrvcRefObjIsMainObject,
      product_guid           as ProductUUID,
      serial_number          as SerialNumber,

      @ObjectModel.foreignKey.association: '_Equipment'
      equipment_id           as Equipment,

      @ObjectModel.foreignKey.association: '_FunctionalLocation'
      functional_location_id as FunctionalLocation,
      
      ref_product_id         as ReferenceProduct,

      _SrvcReferenceObjectType,
      _Equipment,
      _Product,
      _FunctionalLocation
}
```
