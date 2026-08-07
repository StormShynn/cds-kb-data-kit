---
name: I_SCHEDGAGRMTITMAPI01
description: Schedgagrmtitmapi 01
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTITMAPI01

**Schedgagrmtitmapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SchedulingAgreement` | ✓ | |  |  |
| `SchedulingAgreementItem` | ✓ | |  |  |
| `CompanyCode` |  | |  |  |
| `PurchasingDocumentCategory` |  | |  |  |
| `PurchasingDocumentItemText` |  | |  |  |
| `Material` |  | |  |  |
| `ManufacturerMaterial` |  | |  |  |
| `SupplierMaterialNumber` |  | |  |  |
| `MaterialGroup` |  | |  |  |
| `Plant` |  | |  |  |
| `ManualDeliveryAddressID` |  | |  |  |
| `ReferenceDeliveryAddressID` |  | |  |  |
| `IncotermsClassification` |  | |  |  |
| `IncotermsTransferLocation` |  | |  |  |
| `OrderQuantityUnit` |  | |  |  |
| `ItemNetWeight` |  | |  |  |
| `WeightUnit` |  | |  |  |
| `TargetQuantity` |  | |  |  |
| `PurchaseRequisition` |  | |  |  |
| `PurchaseRequisitionItem` |  | |  |  |
| `SchedAgrmtAgreedCumQty` |  | |  |  |
| `SchedAgrmtCumQtyReconcileDate` |  | |  |  |
| `ItemLastTransmissionDate` |  | |  |  |
| `NoDaysReminder1` |  | |  |  |
| `NoDaysReminder2` |  | |  |  |
| `NoDaysReminder3` |  | |  |  |
| `SupplierConfirmationControlKey` |  | |  | `ConfirmationControl` |
| `PurgDocOrderAcknNumber` |  | |  |  |
| `RequirementTracking` |  | |  |  |
| `IsOrderAcknRqd` |  | |  |  |
| `PurgDocEstimatedPrice` |  | |  |  |
| `PriceIsToBePrinted` |  | |  |  |
| `AccountAssignmentCategory` |  | |  |  |
| `DocumentCurrency` |  | |  |  |
| `NetPriceAmount` |  | |  |  |
| `NetPriceQuantity` |  | |  |  |
| `OrderPriceUnit` |  | |  |  |
| `ProductType` |  | |  |  |
| `MaterialType` |  | |  |  |
| `StorageLocation` |  | |  |  |
| `IsInfoRecordUpdated` |  | |  |  |
| `PurchasingInfoRecord` |  | |  |  |
| `OrdPriceUnitToOrderUnitDnmntr` |  | |  |  |
| `OrderPriceUnitToOrderUnitNmrtr` |  | |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  |
| `StockType` |  | |  | `InventoryUsabilityCode` |
| `TaxCode` |  | |  |  |
| `ShippingInstruction` |  | |  |  |
| `IsInfoAtRegistration` |  | |  |  |
| `GoodsReceiptIsExpected` |  | |  |  |
| `GoodsReceiptIsNonValuated` |  | |  |  |
| `InvoiceIsExpected` |  | |  |  |
| `InvoiceIsGoodsReceiptBased` |  | |  |  |
| `EvaldRcptSettlmtIsAllowed` |  | |  |  |
| `MinRemainingShelfLife` |  | |  |  |
| `QualityMgmtCtrlKey` |  | |  |  |
| `QualityCertificateType` |  | |  |  |
| `SchedAgrmtCumulativeQtyControl` |  | |  |  |
| `CumulativeQuantityIsNotSent` |  | |  |  |
| `SchedgAgrmtRelCreationProfile` |  | |  |  |
| `IsRelevantForJITDelivSchedule` |  | |  |  |
| `NextFcstDelivSchedSendingDate` |  | |  |  |
| `NextJITDelivSchedSendingDate` |  | |  |  |
| `ScheduleLineFirmOrderInDays` |  | |  |  |
| `SchedLineSemiFirmOrderInDays` |  | |  |  |
| `FirmTradeOffZoneBindMRP` |  | |  |  |
| `_SchedgAgrmtHdrAPI01` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SchedgAgrmtHdrAPI01` | `I_SchedgagrmthdrApi01` | [1..1] |
| `_SchAgreementItemExtension` | `E_PurchasingDocumentItem` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISCHAGMTITMAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@VDM.viewType : #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Item of Purchase Scheduling Agreement'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_SchedgAgrmtItmApi01
//  as select from I_SchedgAgrmtItm
  as select from R_PurgSchedulingAgreementItem as I_SchedgAgrmtItm
  
  association[1..1] to I_SchedgagrmthdrApi01     as  _SchedgAgrmtHdrAPI01        on  $projection.SchedulingAgreement     = _SchedgAgrmtHdrAPI01.SchedulingAgreement
  
  association[0..1] to E_PurchasingDocumentItem  as  _SchAgreementItemExtension  on  $projection.SchedulingAgreement     = _SchAgreementItemExtension.PurchasingDocument
                                                                                and  $projection.SchedulingAgreementItem = _SchAgreementItemExtension.PurchasingDocumentItem
 
{
    key I_SchedgAgrmtItm.SchedulingAgreement, 
    key I_SchedgAgrmtItm.SchedulingAgreementItem, 
    I_SchedgAgrmtItm.CompanyCode, 
    I_SchedgAgrmtItm.PurchasingDocumentCategory, 
    I_SchedgAgrmtItm.PurchasingDocumentItemText, 
    I_SchedgAgrmtItm.Material, 
    I_SchedgAgrmtItm.ManufacturerMaterial, 
    I_SchedgAgrmtItm.SupplierMaterialNumber, 
    I_SchedgAgrmtItm.MaterialGroup, 
    I_SchedgAgrmtItm.Plant, 
    I_SchedgAgrmtItm.ManualDeliveryAddressID, 
    I_SchedgAgrmtItm.ReferenceDeliveryAddressID, 
    I_SchedgAgrmtItm.IncotermsClassification, 
    I_SchedgAgrmtItm.IncotermsTransferLocation, 
    I_SchedgAgrmtItm.OrderQuantityUnit, 
    @Semantics.quantity.unitOfMeasure: 'WeightUnit'
    I_SchedgAgrmtItm.ItemNetWeight, 
    I_SchedgAgrmtItm.WeightUnit, 
    @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
    I_SchedgAgrmtItm.TargetQuantity, 
    I_SchedgAgrmtItm.PurchaseRequisition, 
    I_SchedgAgrmtItm.PurchaseRequisitionItem, 
    @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
    I_SchedgAgrmtItm.SchedAgrmtAgreedCumQty, 
    I_SchedgAgrmtItm.SchedAgrmtCumQtyReconcileDate, 
    I_SchedgAgrmtItm.ItemLastTransmissionDate, 
    I_SchedgAgrmtItm.NoDaysReminder1, 
    I_SchedgAgrmtItm.NoDaysReminder2, 
    I_SchedgAgrmtItm.NoDaysReminder3, 
    I_SchedgAgrmtItm.ConfirmationControl as  SupplierConfirmationControlKey, 
    I_SchedgAgrmtItm.PurgDocOrderAcknNumber, 
    I_SchedgAgrmtItm.RequirementTracking, 
    I_SchedgAgrmtItm.IsOrderAcknRqd, 
    I_SchedgAgrmtItm.PurgDocEstimatedPrice, 
    I_SchedgAgrmtItm.PriceIsToBePrinted, 
    I_SchedgAgrmtItm.AccountAssignmentCategory, 
    I_SchedgAgrmtItm.DocumentCurrency,
    @Semantics.amount.currencyCode: 'DocumentCurrency'
    I_SchedgAgrmtItm.NetPriceAmount, 
    @Semantics.quantity.unitOfMeasure: 'OrderPriceUnit'
    I_SchedgAgrmtItm.NetPriceQuantity, 
    I_SchedgAgrmtItm.OrderPriceUnit, 
    I_SchedgAgrmtItm.ProductType, 
    I_SchedgAgrmtItm.MaterialType, 
    I_SchedgAgrmtItm.StorageLocation, 
    I_SchedgAgrmtItm.IsInfoRecordUpdated, 
    I_SchedgAgrmtItm.PurchasingInfoRecord, 
    I_SchedgAgrmtItm.OrdPriceUnitToOrderUnitDnmntr, 
    I_SchedgAgrmtItm.OrderPriceUnitToOrderUnitNmrtr, 
    I_SchedgAgrmtItm.PurchasingDocumentDeletionCode, 
    I_SchedgAgrmtItm.UnderdelivTolrtdLmtRatioInPct, 
    I_SchedgAgrmtItm.OverdelivTolrtdLmtRatioInPct, 
    I_SchedgAgrmtItm.UnlimitedOverdeliveryIsAllowed,
//    I_SchedgAgrmtItm.StockType,
    I_SchedgAgrmtItm.InventoryUsabilityCode as StockType, 
    I_SchedgAgrmtItm.TaxCode, 
    I_SchedgAgrmtItm.ShippingInstruction, 
    I_SchedgAgrmtItm.IsInfoAtRegistration, 
    I_SchedgAgrmtItm.GoodsReceiptIsExpected, 
    I_SchedgAgrmtItm.GoodsReceiptIsNonValuated, 
    I_SchedgAgrmtItm.InvoiceIsExpected, 
    I_SchedgAgrmtItm.InvoiceIsGoodsReceiptBased, 
    I_SchedgAgrmtItm.EvaldRcptSettlmtIsAllowed, 
    I_SchedgAgrmtItm.MinRemainingShelfLife, 
    I_SchedgAgrmtItm.QualityMgmtCtrlKey, 
    I_SchedgAgrmtItm.QualityCertificateType, 
    I_SchedgAgrmtItm.SchedAgrmtCumulativeQtyControl, 
    I_SchedgAgrmtItm.CumulativeQuantityIsNotSent, 
    I_SchedgAgrmtItm.SchedgAgrmtRelCreationProfile, 
    I_SchedgAgrmtItm.IsRelevantForJITDelivSchedule, 
    I_SchedgAgrmtItm.NextFcstDelivSchedSendingDate, 
    I_SchedgAgrmtItm.NextJITDelivSchedSendingDate, 
    I_SchedgAgrmtItm.ScheduleLineFirmOrderInDays, 
    I_SchedgAgrmtItm.SchedLineSemiFirmOrderInDays, 
    I_SchedgAgrmtItm.FirmTradeOffZoneBindMRP,

    /* Associations */
    _SchedgAgrmtHdrAPI01   
}
```
