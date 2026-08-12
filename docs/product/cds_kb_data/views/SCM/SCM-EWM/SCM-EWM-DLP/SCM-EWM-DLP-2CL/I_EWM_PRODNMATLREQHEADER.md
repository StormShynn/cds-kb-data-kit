---
name: I_EWM_PRODNMATLREQHEADER
description: "Ewm Prodnmatlreqheader"
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-DLP
  - interface-view
  - header-level
  - component:SCM-EWM-DLP-2CL
  - lob:Other
---
# I_EWM_PRODNMATLREQHEADER

**Ewm Prodnmatlreqheader**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMProductionMaterialRequest` | ✓ | |  |  |  |  |
| `EWMWarehouse` |  | |  |  |  |  |
| `EWMProdnMatlReqDocCategory` |  | |  |  |  |  |
| `EWMProdnMatlReqDocumentType` |  | |  |  |  |  |
| `ManufacturingOrder` |  | |  | `cast( _ManufacturingOrder.EWMWhseReqRefDocumentNumber as manufacturingorder )` |  |  |
| `EWMProductionInformation` |  | |  |  |  |  |
| `EWMProdnMatlReqPriority` |  | |  |  |  |  |
| `EWMManufacturingOrderStatus` |  | |  |  |  |  |
| `EWMInconsistencyBlockStatus` |  | |  |  |  |  |
| `EWMArchivingStatus` |  | |  |  |  |  |
| `EWMProdnMatlReqCrtnUTCDateTime` |  | |  |  |  |  |
| `EWMProdnMatlReqCreatedByUser` |  | |  |  |  |  |
| `EWMProdnMatlReqLstChgUTCDteTme` |  | |  |  |  |  |
| `EWMProdnMatlReqLastChgdByUser` |  | |  |  |  |  |
| `EWMPlndProdnStartUTCDateTime` |  | | `_EWMPlndProdnStartUTCDateTime` | `DeliveryRelatedStartDateTime` |  |  |
| `EWMPlndProdnEndUTCDateTime` |  | | `_EWMPlndProdnEndUTCDateTime` | `DeliveryRelatedEndDateTime` |  |  |
| `EWMProductionMaterialReqUUID` |  | |  |  |  |  |
| `_ManufacturingOrder` | | ✓ | | | | |
| `_EWMProdnMatlReqDocumentType` | | ✓ | | | | |
| `_EWMManufacturingOrdStatusTxt` | | ✓ | | | | |
| `_EWMInconstcyBlockStatusTxt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ManufacturingOrder` | `I_EWM_WarehouseRequestRefDoc` | [0..1] |
| `_EWMProdnMatlReqDocumentType` | `I_EWM_DeliveryType_2` | [0..1] |
| `_EWMPlndProdnStartUTCDateTime` | `I_EWM_DeliveryDateAndTime` | [0..1] |
| `_EWMPlndProdnEndUTCDateTime` | `I_EWM_DeliveryDateAndTime` | [0..1] |
| `_EWMManufacturingOrdStatusTxt` | `I_EWM_WhseReqStatusValueText` | [0..*] |
| `_EWMInconstcyBlockStatusTxt` | `I_EWM_WhseReqStatusValueText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Production Material Request Header'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@ObjectModel.sapObjectNodeType.name: 'WarehouseProductionMaterialReq'
@VDM.viewType: #COMPOSITE
define view entity I_EWM_ProdnMatlReqHeader
  as select from I_EWM_ProdnMatlReqHdrBasic
  association [0..1] to I_EWM_WarehouseRequestRefDoc as _ManufacturingOrder           on  $projection.EWMProductionMaterialReqUUID         = _ManufacturingOrder.EWMWarehouseRequestUUID
                                                                                      and $projection.EWMProdnMatlReqDocCategory           = _ManufacturingOrder.EWMWhseRequestDocumentCategory
                                                                                      and _ManufacturingOrder.EWMReferenceDocumentCategory = 'PPO'

  /* PMR Delivery Type */
  association [0..1] to I_EWM_DeliveryType_2         as _EWMProdnMatlReqDocumentType  on  $projection.EWMProdnMatlReqDocumentType = _EWMProdnMatlReqDocumentType.EWMDeliveryDocumentType
                                                                                      and $projection.EWMProdnMatlReqDocCategory  = _EWMProdnMatlReqDocumentType.EWMDeliveryDocumentCategory

  /* Association to DateTime */
  association [0..1] to I_EWM_DeliveryDateAndTime    as _EWMPlndProdnStartUTCDateTime on  $projection.EWMProductionMaterialReqUUID               = _EWMPlndProdnStartUTCDateTime.DeliveryOrderUUID
                                                                                      and $projection.EWMProdnMatlReqDocCategory                 = _EWMPlndProdnStartUTCDateTime.EWMDeliveryDocumentCategory
                                                                                      and _EWMPlndProdnStartUTCDateTime.DeliveryDateTimeType     = 'SPRODUCTION'
                                                                                      and _EWMPlndProdnStartUTCDateTime.DeliveryDateTimeCategory = 'PLAN'

  association [0..1] to I_EWM_DeliveryDateAndTime    as _EWMPlndProdnEndUTCDateTime   on  $projection.EWMProductionMaterialReqUUID             = _EWMPlndProdnEndUTCDateTime.DeliveryOrderUUID
                                                                                      and $projection.EWMProdnMatlReqDocCategory               = _EWMPlndProdnEndUTCDateTime.EWMDeliveryDocumentCategory
                                                                                      and _EWMPlndProdnEndUTCDateTime.DeliveryDateTimeType     = 'EPRODUCTION'
                                                                                      and _EWMPlndProdnEndUTCDateTime.DeliveryDateTimeCategory = 'PLAN'

  /* status text fields */
  association [0..*] to I_EWM_WhseReqStatusValueText as _EWMManufacturingOrdStatusTxt on  $projection.EWMManufacturingOrderStatus                     = _EWMManufacturingOrdStatusTxt.EWMWarehouseRequestStatus
                                                                                      and _EWMManufacturingOrdStatusTxt.EWMWarehouseRequestStatusType = 'DMC'

  association [0..*] to I_EWM_WhseReqStatusValueText as _EWMInconstcyBlockStatusTxt   on  $projection.EWMInconsistencyBlockStatus                   = _EWMInconstcyBlockStatusTxt.EWMWarehouseRequestStatus
                                                                                      and _EWMInconstcyBlockStatusTxt.EWMWarehouseRequestStatusType = 'DBC'
{

  key EWMProductionMaterialRequest,
      EWMWarehouse,

      EWMProdnMatlReqDocCategory,
      EWMProdnMatlReqDocumentType,

      cast( _ManufacturingOrder.EWMWhseReqRefDocumentNumber as manufacturingorder ) as ManufacturingOrder,

      EWMProductionInformation,
      EWMProdnMatlReqPriority,

      /*  Status */
      EWMManufacturingOrderStatus,
      EWMInconsistencyBlockStatus,
      EWMArchivingStatus,

      /* Administrative Fields  */
      EWMProdnMatlReqCrtnUTCDateTime,
      EWMProdnMatlReqCreatedByUser,
      EWMProdnMatlReqLstChgUTCDteTme,
      EWMProdnMatlReqLastChgdByUser,


      /* Production related date time */
      _EWMPlndProdnStartUTCDateTime.DeliveryRelatedStartDateTime                    as EWMPlndProdnStartUTCDateTime,
      _EWMPlndProdnEndUTCDateTime.DeliveryRelatedEndDateTime                        as EWMPlndProdnEndUTCDateTime,


      EWMProductionMaterialReqUUID,

      /* Associations */
      _ManufacturingOrder,


      _EWMManufacturingOrdStatusTxt,
      _EWMInconstcyBlockStatusTxt,
      _EWMProdnMatlReqDocumentType

}
```
