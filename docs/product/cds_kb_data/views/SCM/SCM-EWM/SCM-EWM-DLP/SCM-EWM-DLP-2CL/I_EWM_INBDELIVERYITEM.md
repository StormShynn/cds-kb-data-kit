---
name: I_EWM_INBDELIVERYITEM
description: "Ewm Inbdeliveryitem"
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
  - delivery
  - item-level
  - component:SCM-EWM-DLP-2CL
  - lob:Other
---
# I_EWM_INBDELIVERYITEM

**Ewm Inbdeliveryitem**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMInboundDelivery` | ✓ | |  |  |  |  |
| `EWMInboundDeliveryItem` | ✓ | |  |  |  |  |
| `EWMWarehouse` |  | |  |  |  |  |
| `WarehouseTimeZone` |  | | `_Header` | `WarehouseTimeZone` |  |  |
| `EWMDeliveryDocumentCategory` |  | |  | `DeliveryDocumentCategory` |  |  |
| `EWMInboundDeliveryItemCategory` |  | |  | `DeliveryItemCategory` |  |  |
| `EWMInboundDeliveryItemType` |  | |  | `InboundDeliveryItemType` |  |  |
| `Product` |  | |  | `cast(Product as char40 preserving type)` |  |  |
| `ProductUUID` |  | |  |  |  |  |
| `ProductExternalID` |  | |  | `cast(ProductExternalID as char40 preserving type)` |  |  |
| `Batch` |  | |  | `cast(Batch as charg_d)` |  |  |
| `EWMBatchBySupplierPlanned` |  | | `_ExtProdBatch` | `EWMBatchBySupplierPlanned` |  |  |
| `EWMProductBySupplier` |  | | `_ExtProdBatch` | `EWMProductBySupplier` |  |  |
| `CountryOfOrigin` |  | |  |  |  |  |
| `ProductQuantity` |  | |  |  |  |  |
| `EWMWhseReqItmProductUIQuantity` |  | |  | `cast(ProductQuantity as ewm_de_whsereqitmproductuiquan)` |  |  |
| `QuantityUnit` |  | |  | `cast(QuantityUnit as /scwm/de_base_uom preserving type)` |  |  |
| `SerialNumberRequiredLevel` |  | |  |  |  |  |
| `EWMWhseReqItmBBDSLEDUTCDteTme` |  | |  |  |  |  |
| `EWMWhseReqItmProdnDteTme` |  | |  |  |  |  |
| `EWMInbDelivItmQuantitySAPCode` |  | | `_UnitOfMeasure` | `UnitOfMeasureSAPCode` |  |  |
| `EWMInbDelivItmQuantityISOCode` |  | | `_UnitOfMeasure` | `UnitOfMeasureISOCode` |  |  |
| `EWMWhseReqItmBatSpltParentItem` |  | |  | `cast(case when _BatchSplitDetail.InboundDeliveryUUID is not null and _BatchSplitDetail.EWMWhseReqItmBatSpltParentItem is null then EWMInboundDeliveryItem else _BatchSplitDetail.EWMWhseReqItmBatSpltParentItem end as ewm_de_whsereqitmbatspltparitm preserving type)` |  |  |
| `EWMWhseReqItmHierParentItem` |  | |  | `cast(case when _BatchSplitDetail.EWMWhseReqItmBatSpltParentItem is not null then _BatchSplitDetail.EWMWhseReqItmBatSpltParentItem else EWMInboundDeliveryItem end as ewm_de_whsereqitmhierparitm preserving type)` |  |  |
| `StagingAreaGroup` |  | |  |  |  |  |
| `StagingArea` |  | |  |  |  |  |
| `StagingBay` |  | |  |  |  |  |
| `GoodsReceiptStatus` |  | |  |  |  |  |
| `EWMGoodsReceiptAndDistrStatus` |  | |  | `_ItemStatus[1: DeliveryStatusType = 'DDD'].Status` |  |  |
| `PlanningPutawayStatus` |  | |  | `_ItemStatus[1: DeliveryStatusType = 'DEU'].Status` |  |  |
| `EWMPlndPutawayAndDistrStatus` |  | |  | `_ItemStatus[1: DeliveryStatusType = 'DAD'].Status` |  |  |
| `PutawayStatus` |  | |  | `_ItemStatus[1: DeliveryStatusType = 'DPT'].Status` |  |  |
| `EWMPutawayAndDistrStatus` |  | |  | `_ItemStatus[1: DeliveryStatusType = 'DYD'].Status` |  |  |
| `OverallBlockStatus` |  | |  | `_ItemStatus[1: DeliveryStatusType = 'DBO'].Status` |  |  |
| `CompletionStatus` |  | |  |  |  |  |
| `FldLogsStatus` |  | |  |  |  |  |
| `WarehouseProcessType` |  | |  |  |  |  |
| `GoodsMovementBin` |  | |  |  |  |  |
| `EWMProductionSupplyArea` |  | |  |  |  |  |
| `EWMDelivLastChangeUTCDateTime` |  | |  | `case when EWMDelivLastChangeUTCDateTime is initial then cast(InbDelivItemCrtnUTCDateTime as tzntstmps preserving type) else cast(EWMDelivLastChangeUTCDateTime as tzntstmps preserving type) end` |  |  |
| `EntitledToDisposeParty` |  | |  |  |  |  |
| `EntitledToDisposePartyName` |  | |  | `case when (_EWMEntitledToDisposeDetails.IsBusinessPurposeCompleted <> 'X' or _EWMEntitledToDisposeDetails.IsBusinessPurposeCompleted is null) then _EWMEntitledToDisposeDetails.BusinessPartnerName else cast('' as bu_nameor1) end` |  |  |
| `EWMStockUsage` |  | |  | `StockUsage` |  |  |
| `EWMStockType` |  | |  | `StockType` |  |  |
| `EWMStockOwner` |  | |  | `cast(StockOwner as char10 preserving type)` |  |  |
| `DeliveryItemStockTypeDetnCode` |  | |  |  |  |  |
| `EWMStockOwnerName` |  | |  | `case when (_EWMStockOwnerDetails.IsBusinessPurposeCompleted <> 'X' or _EWMStockOwnerDetails.IsBusinessPurposeCompleted is null) then _EWMStockOwnerDetails.BusinessPartnerName else cast('' as bu_nameor1) end` |  |  |
| `EWMGoodsRecipient` |  | |  |  |  |  |
| `EWMRecipientLocationName` |  | |  |  |  |  |
| `QualityInspectionDocument` |  | |  | `cast(_QualityInspectionLot.QualityInspectionDocument as /scwm/de_qentity_extid preserving type)` |  |  |
| `ExternalStockDocumentNumber` |  | |  | `cast(case StockDocumentCategory when 'PJS' then _ProjectStockEmbedded.WBSElementExternalID else StockDocumentNumber end as ewm_de_stockdocumentnumber)` |  |  |
| `StockDocumentCategory` |  | |  | `cast(StockDocumentCategory as ewm_de_stockdocumentcat preserving type)` |  |  |
| `StockDocumentNumber` |  | |  |  |  |  |
| `StockItemNumber` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  | `case StockDocumentCategory when 'PJS' then _ProjectStockEmbedded.WBSElementInternalID else cast('00000000' as ps_s4_pspnr preserving type) end` |  |  |
| `WBSElementExternalID` |  | |  | `case StockDocumentCategory when 'PJS' then _ProjectStockEmbedded.WBSElementExternalID else cast(' ' as ps_posid_edit preserving type) end` |  |  |
| `SpecialStockIdfgSalesOrder` |  | |  | `cast(SpecialStockIdfgSalesOrder as ewm_de_special_stock_idfg_hdr)` |  |  |
| `SpecialStockIdfgSalesOrderItem` |  | |  | `cast(SpecialStockIdfgSalesOrderItem as ewm_de_special_stock_idfg_item)` |  |  |
| `PurchasingDocument` |  | |  | `cast(PurchasingDocument as fis_ebeln)` |  |  |
| `PurchasingDocumentItem` |  | |  | `cast(PurchasingDocumentItem as ewm_de_purchase_order_item)` |  |  |
| `PurchaseOrder` |  | |  |  |  |  |
| `PurchaseOrderItem` |  | |  |  |  |  |
| `ManufacturingOrder` |  | |  | `cast(_ManufacturingOrder.EWMRefDeliveryDocumentNumber as manufacturingorder)` |  |  |
| `MaintenanceOrder` |  | |  | `cast(_ReferenceDocuments[1: EWMReferenceDocumentCategory = 'PMO'].EWMRefDeliveryDocumentNumber as ewm_de_maintenance_order)` |  |  |
| `MaintenanceOrderOperation` |  | |  | `cast(_ReferenceDocuments[1: EWMReferenceDocumentCategory = 'POO'].EWMRefDeliveryDocumentItem as ewm_de_maintenance_order_op)` |  |  |
| `Reservation` |  | |  | `cast(_ReferenceDocuments[1: EWMReferenceDocumentCategory = 'RES'].EWMRefDeliveryDocumentNumber as rsnum)` |  |  |
| `InboundDelivery` |  | |  | `cast(_ReferenceDocuments[1: EWMReferenceDocumentCategory = 'ERP'].EWMRefDeliveryDocumentNumber as /scwm/sp_docno_erp)` |  |  |
| `InboundDeliveryItem` |  | |  | `cast(substring(cast(_ReferenceDocuments[1: EWMReferenceDocumentCategory = 'ERP'].EWMRefDeliveryDocumentItem as abap.numc(10)), 5, 6) as ewm_de_inb_deliv_item_aconv)` |  |  |
| `InboundDeliveryUUID` |  | |  |  |  |  |
| `InboundDeliveryItemUUID` |  | |  |  |  |  |
| `_WarehouseText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_CountryText` | | ✓ | | | | |
| `_WhseProcTypeText` | | ✓ | | | | |
| `_StockTypeText` | | ✓ | | | | |
| `_EWMStockUsageText` | | ✓ | | | | |
| `_StockDocCategoryText` | | ✓ | | | | |
| `_PutawayStatusText` | | ✓ | | | | |
| `_GoodsReceiptStatusText` | | ✓ | | | | |
| `_OverallBlockStatusText` | | ✓ | | | | |
| `_CompletionStatusText` | | ✓ | | | | |
| `_PlanningPutawayStatusText` | | ✓ | | | | |
| `_ItemCatText` | | ✓ | | | | |
| `_ItemTypeText` | | ✓ | | | | |
| `_SerialNumberLevelText` | | ✓ | | | | |
| `_FldLogsStatusTxt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ManufacturingOrder` | `I_EWM_DeliveryReferenceDoc_2` | [0..1] |
| `_ReferenceDocuments` | `I_EWM_DeliveryReferenceDoc_2` | [0..*] |
| `_QualityInspectionLot` | `P_EWM_InbDlvDocFlwQltyInspLot` | [1] |
| `_ProjectStockEmbedded` | `I_WBSElementBasicData` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_EWMStockOwnerDetails` | `I_BusinessPartner` | [0..1] |
| `_EWMEntitledToDisposeDetails` | `I_BusinessPartner` | [0..1] |
| `_BatchSplitDetail` | `P_EWM_IDLItmBatSpltChildItm` | [1..1] |
| `_Header` | `I_EWM_InbDeliveryHeader` | [1] |
| `_WarehouseText` | `I_EWM_WarehouseNumberText_2` | [0..*] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_CountryText` | `I_CountryText` | [0..*] |
| `_WhseProcTypeText` | `I_EWM_WrhsProcTypeText_2` | [0..*] |
| `_StockTypeText` | `I_EWM_StockTypeText_2` | [0..*] |
| `_EWMStockUsageText` | `I_EWM_StockUsageText_2` | [0..*] |
| `_StockDocCategoryText` | `I_EWM_StockDocCategoryText` | [0..*] |
| `_PutawayStatusText` | `I_EWM_WhseReqStatusValueText` | [0..*] |
| `_GoodsReceiptStatusText` | `I_EWM_WhseReqStatusValueText` | [0..*] |
| `_OverallBlockStatusText` | `I_EWM_WhseReqStatusValueText` | [0..*] |
| `_CompletionStatusText` | `I_EWM_WhseReqStatusValueText` | [0..*] |
| `_PlanningPutawayStatusText` | `I_EWM_WhseReqStatusValueText` | [0..*] |
| `_ItemCatText` | `I_EWM_DeliveryItemCatText_2` | [0..*] |
| `_ItemTypeText` | `I_EWM_DeliveryItemTypeText_2` | [0..*] |
| `_SerialNumberLevelText` | `I_EWM_SerialNoRequiredLevelT` | [0..*] |
| `_FldLogsStatusTxt` | `I_FldLogsStatusVH` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@EndUserText.label: 'Warehouse Inbound Delivery Item'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.sapObjectNodeType.name: 'WarehouseInboundDeliveryItem'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType: { serviceQuality: #D, dataClass: #MIXED, sizeCategory: #XL }

@VDM.viewType: #COMPOSITE

define view entity I_EWM_InbDeliveryItem
  as select from I_EWM_InbDeliveryItemBasic as pdi_i

  // Manufacturing Order always related to header and 0:1 relationship
  association [0..1] to I_EWM_DeliveryReferenceDoc_2  as _ManufacturingOrder
    on  pdi_i.InboundDeliveryUUID = _ManufacturingOrder.DeliveryUUID
    and pdi_i.InboundDeliveryItemUUID                    = _ManufacturingOrder.DeliveryItemUUID
    and $projection.EWMDeliveryDocumentCategory          = _ManufacturingOrder.EWMDeliveryDocumentCategory
    and _ManufacturingOrder.EWMReferenceDocumentCategory = 'PPO'

  /* Reference to Reference Documents */
  association [0..*] to I_EWM_DeliveryReferenceDoc_2  as _ReferenceDocuments
    on  $projection.InboundDeliveryUUID         = _ReferenceDocuments.DeliveryUUID
    and $projection.InboundDeliveryItemUUID     = _ReferenceDocuments.DeliveryItemUUID
    and $projection.EWMDeliveryDocumentCategory = _ReferenceDocuments.EWMDeliveryDocumentCategory

  /* Quality Insepction Lot */
  association [1] to    P_EWM_InbDlvDocFlwQltyInspLot as _QualityInspectionLot
    on  $projection.InboundDeliveryUUID     = _QualityInspectionLot.InboundDeliveryUUID
    and $projection.InboundDeliveryItemUUID = _QualityInspectionLot.InboundDeliveryItemUUID

  // Project Stock
  association [0..1] to I_WBSElementBasicData         as _ProjectStockEmbedded
    on  $projection.StockDocumentNumber   = _ProjectStockEmbedded.WBSElementInternalID
    and $projection.StockDocumentCategory = 'PJS'

  association [0..1] to I_UnitOfMeasure               as _UnitOfMeasure
    on $projection.QuantityUnit = _UnitOfMeasure.UnitOfMeasureSAPCode

  association [0..1] to I_BusinessPartner             as _EWMStockOwnerDetails
    on $projection.EWMStockOwner = _EWMStockOwnerDetails.BusinessPartner

  association [0..1] to I_BusinessPartner             as _EWMEntitledToDisposeDetails
    on $projection.EntitledToDisposeParty = _EWMEntitledToDisposeDetails.BusinessPartner

  /* Hierarchy Information: Batch Split */
  association [1..1] to P_EWM_IDLItmBatSpltChildItm   as _BatchSplitDetail
    on  $projection.InboundDeliveryUUID     = _BatchSplitDetail.InboundDeliveryUUID
    and $projection.InboundDeliveryItemUUID = _BatchSplitDetail.InboundDeliveryItemUUID

  /* Warehouse Time Zone */
  association [1] to    I_EWM_InbDeliveryHeader       as _Header
    on $projection.InboundDeliveryUUID = _Header.InboundDeliveryUUID

  /*Texts*/
  association [0..*] to I_EWM_WarehouseNumberText_2   as _WarehouseText
    on $projection.EWMWarehouse = _WarehouseText.EWMWarehouse

  association [0..*] to I_ProductText                 as _ProductText
    on $projection.Product = _ProductText.Product

  association [0..*] to I_CountryText                 as _CountryText
    on $projection.CountryOfOrigin = _CountryText.Country

  association [0..*] to I_EWM_WrhsProcTypeText_2      as _WhseProcTypeText
    on  $projection.EWMWarehouse         = _WhseProcTypeText.EWMWarehouse
    and $projection.WarehouseProcessType = _WhseProcTypeText.WarehouseProcessType

  association [0..*] to I_EWM_StockTypeText_2         as _StockTypeText
    on  $projection.EWMWarehouse = _StockTypeText.EWMWarehouse
    and $projection.EWMStockType = _StockTypeText.EWMStockType

  association [0..*] to I_EWM_StockUsageText_2        as _EWMStockUsageText
    on $projection.EWMStockUsage = _EWMStockUsageText.EWMStockUsage

  association [0..*] to I_EWM_StockDocCategoryText    as _StockDocCategoryText
    on $projection.StockDocumentCategory = _StockDocCategoryText.StockDocumentCategory

  association [0..*] to I_EWM_WhseReqStatusValueText  as _PutawayStatusText
    on  $projection.PutawayStatus = _PutawayStatusText.EWMWarehouseRequestStatus
    and _PutawayStatusText.EWMWarehouseRequestStatusType = 'DPT'

  association [0..*] to I_EWM_WhseReqStatusValueText  as _GoodsReceiptStatusText
    on  $projection.GoodsReceiptStatus = _GoodsReceiptStatusText.EWMWarehouseRequestStatus
    and _GoodsReceiptStatusText.EWMWarehouseRequestStatusType = 'DGR'

  association [0..*] to I_EWM_WhseReqStatusValueText  as _OverallBlockStatusText
    on  $projection.OverallBlockStatus = _OverallBlockStatusText.EWMWarehouseRequestStatus
    and _OverallBlockStatusText.EWMWarehouseRequestStatusType = 'DBO'

  association [0..*] to I_EWM_WhseReqStatusValueText  as _CompletionStatusText
    on  $projection.CompletionStatus = _CompletionStatusText.EWMWarehouseRequestStatus
    and _CompletionStatusText.EWMWarehouseRequestStatusType = 'DCO'

  association [0..*] to I_EWM_WhseReqStatusValueText  as _PlanningPutawayStatusText
    on  $projection.PlanningPutawayStatus = _PlanningPutawayStatusText.EWMWarehouseRequestStatus
    and _PlanningPutawayStatusText.EWMWarehouseRequestStatusType = 'DEU'

  association [0..*] to I_EWM_DeliveryItemCatText_2   as _ItemCatText
    on $projection.EWMInboundDeliveryItemCategory = _ItemCatText.EWMInboundDeliveryItemCategory

  association [0..*] to I_EWM_DeliveryItemTypeText_2  as _ItemTypeText
    on  $projection.EWMDeliveryDocumentCategory = _ItemTypeText.EWMDeliveryDocumentCategory
    and $projection.EWMInboundDeliveryItemType  = _ItemTypeText.DeliveryItemType

  association [0..*] to I_EWM_SerialNoRequiredLevelT  as _SerialNumberLevelText
    on $projection.SerialNumberRequiredLevel = _SerialNumberLevelText.SerialNumberRequiredLevel

  association [0..*] to I_FldLogsStatusVH             as _FldLogsStatusTxt
    on $projection.FldLogsStatus = _FldLogsStatusTxt.FldLogsStatus

{
  key EWMInboundDelivery, // A2X- Service only readable keys
  key EWMInboundDeliveryItem,

      EWMWarehouse,
      _Header.WarehouseTimeZone                                                                                         as WarehouseTimeZone,
      DeliveryDocumentCategory                                                                                          as EWMDeliveryDocumentCategory,
      DeliveryItemCategory                                                                                              as EWMInboundDeliveryItemCategory,
//      _Header.EWMDeliveryDocumentType                                                                                                                                      as EWMDeliveryDocumentType,
      InboundDeliveryItemType                                                                                           as EWMInboundDeliveryItemType,

      /* Product */
      cast(Product as char40 preserving type)                                                                           as Product,
      ProductUUID,
      cast(ProductExternalID as char40 preserving type)                                                                 as ProductExternalID,
      cast(Batch as charg_d)                                                                                            as Batch, // Batch is always char10 even if it is defined as char20.
      _ExtProdBatch.EWMBatchBySupplierPlanned                                                                           as EWMBatchBySupplierPlanned,
      _ExtProdBatch.EWMProductBySupplier                                                                                as EWMProductBySupplier,
      CountryOfOrigin,

      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ProductQuantity,

      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      cast(ProductQuantity as ewm_de_whsereqitmproductuiquan)                                                           as EWMWhseReqItmProductUIQuantity,

      cast(QuantityUnit as /scwm/de_base_uom preserving type)                                                           as QuantityUnit,
      SerialNumberRequiredLevel,
      EWMWhseReqItmBBDSLEDUTCDteTme,
      EWMWhseReqItmProdnDteTme,
      _UnitOfMeasure.UnitOfMeasureSAPCode                                                                               as EWMInbDelivItmQuantitySAPCode,
      _UnitOfMeasure.UnitOfMeasureISOCode                                                                               as EWMInbDelivItmQuantityISOCode,

      /*Batch Split Main Item: In case of hierarchies this is filled with the parent item or 
      in case of highest item in the hierarchy, the itemno itself will be used, if no hierarchy, field is empty*/
      cast(case when _BatchSplitDetail.InboundDeliveryUUID is not null and _BatchSplitDetail.EWMWhseReqItmBatSpltParentItem is null
      then EWMInboundDeliveryItem
      else _BatchSplitDetail.EWMWhseReqItmBatSpltParentItem end as ewm_de_whsereqitmbatspltparitm preserving type)      as EWMWhseReqItmBatSpltParentItem,

      /*Batch Split Main Item for UI sorting: Will always be filled whether hierarchy is present or not, 
      either with the item itself, or with the real parent item*/
      cast(case when _BatchSplitDetail.EWMWhseReqItmBatSpltParentItem is not null
      then _BatchSplitDetail.EWMWhseReqItmBatSpltParentItem
      else EWMInboundDeliveryItem end as ewm_de_whsereqitmhierparitm preserving type)                                   as EWMWhseReqItmHierParentItem,

      /* Staging Information */
      StagingAreaGroup,
      StagingArea,
      StagingBay,

      /* Status */
      GoodsReceiptStatus,
      _ItemStatus[1: DeliveryStatusType = 'DDD'].Status                                                                 as EWMGoodsReceiptAndDistrStatus,
      _ItemStatus[1: DeliveryStatusType = 'DEU'].Status                                                                 as PlanningPutawayStatus,
      _ItemStatus[1: DeliveryStatusType = 'DAD'].Status                                                                 as EWMPlndPutawayAndDistrStatus,
      _ItemStatus[1: DeliveryStatusType = 'DPT'].Status                                                                 as PutawayStatus,
      _ItemStatus[1: DeliveryStatusType = 'DYD'].Status                                                                 as EWMPutawayAndDistrStatus,
      _ItemStatus[1: DeliveryStatusType = 'DBO'].Status                                                                 as OverallBlockStatus,
      CompletionStatus,
      FldLogsStatus,

      WarehouseProcessType,
      GoodsMovementBin,
      EWMProductionSupplyArea,

      case
        when EWMDelivLastChangeUTCDateTime is initial then cast(InbDelivItemCrtnUTCDateTime as tzntstmps preserving type)
        else cast(EWMDelivLastChangeUTCDateTime as tzntstmps preserving type) end                                       as EWMDelivLastChangeUTCDateTime,


      /* Stock Information */
      EntitledToDisposeParty,

      case
          when (_EWMEntitledToDisposeDetails.IsBusinessPurposeCompleted <> 'X' or _EWMEntitledToDisposeDetails.IsBusinessPurposeCompleted is null)
          then _EWMEntitledToDisposeDetails.BusinessPartnerName
          else cast('' as bu_nameor1) end                                                                               as EntitledToDisposePartyName,

      StockUsage                                                                                                        as EWMStockUsage,
      StockType                                                                                                         as EWMStockType,
      cast(StockOwner as char10 preserving type)                                                                        as EWMStockOwner,
      DeliveryItemStockTypeDetnCode,

      case when (_EWMStockOwnerDetails.IsBusinessPurposeCompleted <> 'X' or _EWMStockOwnerDetails.IsBusinessPurposeCompleted is null)
          then _EWMStockOwnerDetails.BusinessPartnerName
          else cast('' as bu_nameor1) end                                                                               as EWMStockOwnerName,

      EWMGoodsRecipient,
      EWMRecipientLocationName,
      cast(_QualityInspectionLot.QualityInspectionDocument as /scwm/de_qentity_extid preserving type)                   as QualityInspectionDocument,

      /* Special Stock - Project Stock */
      /*Merge Project and Sales Order Stock Reference for UI consumption*/
      cast(case StockDocumentCategory
       when 'PJS'
         then _ProjectStockEmbedded.WBSElementExternalID
       else StockDocumentNumber end  as ewm_de_stockdocumentnumber)                                                     as ExternalStockDocumentNumber, // Added for UI consumption

      cast(StockDocumentCategory as ewm_de_stockdocumentcat preserving type)                                            as StockDocumentCategory,
      StockDocumentNumber,
      StockItemNumber,

      /* Move from Basic I-View, please check */
      /* Project Stock - WBS Internal */
      case StockDocumentCategory
        when 'PJS'
          then  _ProjectStockEmbedded.WBSElementInternalID // Embedded EWM
          else cast('00000000' as ps_s4_pspnr preserving type) end                                                      as WBSElementInternalID,

      /* Project Stock- WBS External */
      case StockDocumentCategory
        when 'PJS'
          then  _ProjectStockEmbedded.WBSElementExternalID  // Embedded EWM
          else cast('                        ' as ps_posid_edit preserving type) end                                    as WBSElementExternalID,


      cast(SpecialStockIdfgSalesOrder as ewm_de_special_stock_idfg_hdr)                                                 as SpecialStockIdfgSalesOrder,
      cast(SpecialStockIdfgSalesOrderItem as ewm_de_special_stock_idfg_item)                                            as SpecialStockIdfgSalesOrderItem,

      /* Reference Documents */
      cast(PurchasingDocument as fis_ebeln)                                                                             as PurchasingDocument,
      cast(PurchasingDocumentItem as ewm_de_purchase_order_item)                                                        as PurchasingDocumentItem,
      PurchaseOrder,
      PurchaseOrderItem,
      cast(_ManufacturingOrder.EWMRefDeliveryDocumentNumber as manufacturingorder)                                      as ManufacturingOrder,

      /* Reference Documents */
      cast(_ReferenceDocuments[1: EWMReferenceDocumentCategory = 'PMO'].EWMRefDeliveryDocumentNumber         as ewm_de_maintenance_order)
                                                                                                                        as MaintenanceOrder,

      cast(_ReferenceDocuments[1: EWMReferenceDocumentCategory = 'POO'].EWMRefDeliveryDocumentItem           as ewm_de_maintenance_order_op)
                                                                                                                        as MaintenanceOrderOperation,

      cast(_ReferenceDocuments[1: EWMReferenceDocumentCategory = 'RES'].EWMRefDeliveryDocumentNumber         as rsnum)  as Reservation,

      cast(_ReferenceDocuments[1: EWMReferenceDocumentCategory = 'ERP'].EWMRefDeliveryDocumentNumber         as /scwm/sp_docno_erp)
                                                                                                                        as InboundDelivery,

      cast(substring(cast(_ReferenceDocuments[1: EWMReferenceDocumentCategory = 'ERP'].EWMRefDeliveryDocumentItem as abap.numc(10)), 5, 6) as ewm_de_inb_deliv_item_aconv)
                                                                                                                        as InboundDeliveryItem,

      InboundDeliveryUUID,
      InboundDeliveryItemUUID,

      _WarehouseText,
      _ProductText,
      _CountryText,
      _SerialNumberLevelText,
      _WhseProcTypeText,
      _StockTypeText,
      _GoodsReceiptStatusText,
      _PlanningPutawayStatusText,
      _PutawayStatusText,
      _CompletionStatusText,
      _OverallBlockStatusText,
      _ItemCatText,
      _ItemTypeText,
      _StockDocCategoryText,
      _EWMStockUsageText,
      _FldLogsStatusTxt
}

where DeliveryItemCategory  <> 'CGO' // Filter to remove tranist warehouse deliveries
  and StockDocumentCategory <> 'WIP'
```
