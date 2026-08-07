---
name: I_PURGINFORECDORGPLNTDATAAPI01
description: Purginforecdorgplntdataapi 01
app_component: MM-PUR-SQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SQ
  - interface-view
  - component:MM-PUR-SQ-2CL
  - lob:Sourcing & Procurement
---
# I_PURGINFORECDORGPLNTDATAAPI01

**Purginforecdorgplntdataapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PurchasingInfoRecord` | ✓ | |  |  |
| `PurchasingOrganization` | ✓ | |  |  |
| `PurchasingInfoRecordCategory` | ✓ | |  |  |
| `Plant` | ✓ | |  |  |
| `CreatedByUser` |  | |  |  |
| `IsMarkedForDeletion` |  | |  |  |
| `PurchasingGroup` |  | |  |  |
| `Currency` |  | |  |  |
| `MinimumPurchaseOrderQuantity` |  | |  |  |
| `StandardPurchaseOrderQuantity` |  | |  |  |
| `MaterialPlannedDeliveryDurn` |  | |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  |
| `LastReferencingPurchaseOrder` |  | |  |  |
| `LastReferencingPurOrderItem` |  | |  |  |
| `NetPriceAmount` |  | |  |  |
| `PurgInfoRecdEffctvPrc` |  | |  |  |
| `MaterialPriceUnitQty` |  | |  |  |
| `PurchaseOrderPriceUnit` |  | |  |  |
| `PriceValidityEndDate` |  | |  |  |
| `OrderPriceUnitToOrderUnitNmrtr` |  | |  |  |
| `OrdPriceUnitToOrderUnitDnmntr` |  | |  |  |
| `InvoiceIsGoodsReceiptBased` |  | |  |  |
| `TaxCode` |  | |  |  |
| `IncotermsClassification` |  | |  |  |
| `IncotermsTransferLocation` |  | |  |  |
| `IncotermsLocation1` |  | |  |  |
| `IncotermsLocation2` |  | |  |  |
| `MaximumOrderQuantity` |  | |  |  |
| `IsRelevantForAutomSrcg` |  | |  |  |
| `IncotermsVersion` |  | |  |  |
| `SupplierQuotation` |  | |  |  |
| `SupplierQuotationDate` |  | |  |  |
| `MinRemainingShelfLife` |  | |  |  |
| `ShippingInstruction` |  | |  |  |
| `IsEvaluatedRcptSettlmtAllowed` |  | |  |  |
| `IsPurOrderAllwdForInbDeliv` |  | |  |  |
| `IsOrderAcknRqd` |  | |  |  |
| `SupplierConfirmationControlKey` |  | |  |  |
| `MaterialRoundingProfile` |  | |  |  |
| `MaterialStagingTime` |  | |  |  |
| `ProductUnitGroup` |  | |  |  |
| `IsRetMatlAuthznRqdBySupplier` |  | |  |  |
| `SuplrRetMatlAuthznRqmtSts` |  | |  | `IsRetMatlAuthznRqdBySupplier` |
| `IsCashDiscountGranted` |  | |  |  |
| `MaterialConditionGroup` |  | |  |  |
| `PricingDateControl` |  | |  |  |
| `PurchasingDocumentDate` |  | |  |  |
| `ShelfLifeExpirationDatePeriod` |  | |  |  |
| `ProductionVersion` |  | |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_PurgInfoRecdOrgPlantData` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINFORECORGAPI01'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Org Plant Data for Purch Info Record'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_PurgInfoRecdOrgPlntDataApi01 as select from I_PurgInfoRecdOrgPlantData
  association to E_PurgInfoRecdOrgPlantData as _Extension on
    $projection.PurchasingInfoRecord = _Extension.PurchasingInfoRecord and
    $projection.PurchasingOrganization = _Extension.PurchasingOrganization and
    $projection.PurchasingInfoRecordCategory = _Extension.PurchasingInfoRecordCategory and
    $projection.Plant = _Extension.Plant
 
{
  key I_PurgInfoRecdOrgPlantData.PurchasingInfoRecord,
  key I_PurgInfoRecdOrgPlantData.PurchasingOrganization,
  key I_PurgInfoRecdOrgPlantData.PurchasingInfoRecordCategory,
  key I_PurgInfoRecdOrgPlantData.Plant,
  I_PurgInfoRecdOrgPlantData.CreatedByUser,
  I_PurgInfoRecdOrgPlantData.IsMarkedForDeletion,
  I_PurgInfoRecdOrgPlantData.PurchasingGroup,
  I_PurgInfoRecdOrgPlantData.Currency,
  @Semantics.quantity.unitOfMeasure: 'PurchaseOrderPriceUnit'
  I_PurgInfoRecdOrgPlantData.MinimumPurchaseOrderQuantity,
  @Semantics.quantity.unitOfMeasure: 'PurchaseOrderPriceUnit'
  I_PurgInfoRecdOrgPlantData.StandardPurchaseOrderQuantity,
  I_PurgInfoRecdOrgPlantData.MaterialPlannedDeliveryDurn,
  I_PurgInfoRecdOrgPlantData.OverdelivTolrtdLmtRatioInPct,
  I_PurgInfoRecdOrgPlantData.UnderdelivTolrtdLmtRatioInPct,
  I_PurgInfoRecdOrgPlantData.UnlimitedOverdeliveryIsAllowed,
  I_PurgInfoRecdOrgPlantData.LastReferencingPurchaseOrder,
  I_PurgInfoRecdOrgPlantData.LastReferencingPurOrderItem,
  @Semantics.amount.currencyCode: 'Currency'
  I_PurgInfoRecdOrgPlantData.NetPriceAmount,
  @Feature: 'FT_IR_EFFECTIVE_PRICE'
  @Semantics.amount.currencyCode: 'Currency'
  I_PurgInfoRecdOrgPlantData.PurgInfoRecdEffctvPrc,
  @Semantics.quantity.unitOfMeasure: 'PurchaseOrderPriceUnit'
  I_PurgInfoRecdOrgPlantData.MaterialPriceUnitQty,
  I_PurgInfoRecdOrgPlantData.PurchaseOrderPriceUnit,
  I_PurgInfoRecdOrgPlantData.PriceValidityEndDate,
  I_PurgInfoRecdOrgPlantData.OrderPriceUnitToOrderUnitNmrtr,
  I_PurgInfoRecdOrgPlantData.OrdPriceUnitToOrderUnitDnmntr,
  I_PurgInfoRecdOrgPlantData.InvoiceIsGoodsReceiptBased,
  I_PurgInfoRecdOrgPlantData.TaxCode,
  I_PurgInfoRecdOrgPlantData.IncotermsClassification,
  I_PurgInfoRecdOrgPlantData.IncotermsTransferLocation,
  I_PurgInfoRecdOrgPlantData.IncotermsLocation1,
  I_PurgInfoRecdOrgPlantData.IncotermsLocation2,
  @Semantics.quantity.unitOfMeasure: 'PurchaseOrderPriceUnit'
  I_PurgInfoRecdOrgPlantData.MaximumOrderQuantity,
  @Semantics.booleanIndicator
  I_PurgInfoRecdOrgPlantData.IsRelevantForAutomSrcg,
  I_PurgInfoRecdOrgPlantData.IncotermsVersion,
  I_PurgInfoRecdOrgPlantData.SupplierQuotation,
  I_PurgInfoRecdOrgPlantData.SupplierQuotationDate,
  I_PurgInfoRecdOrgPlantData.MinRemainingShelfLife,
  I_PurgInfoRecdOrgPlantData.ShippingInstruction,
  I_PurgInfoRecdOrgPlantData.IsEvaluatedRcptSettlmtAllowed,
  I_PurgInfoRecdOrgPlantData.IsPurOrderAllwdForInbDeliv,
  I_PurgInfoRecdOrgPlantData.IsOrderAcknRqd,
  I_PurgInfoRecdOrgPlantData.SupplierConfirmationControlKey,
  I_PurgInfoRecdOrgPlantData.MaterialRoundingProfile,
  I_PurgInfoRecdOrgPlantData.MaterialStagingTime,
  I_PurgInfoRecdOrgPlantData.ProductUnitGroup,
  @VDM.lifecycle.status: #DEPRECATED
  @VDM.lifecycle.successor: 'SuplrRetMatlAuthznRqmtSts'
  I_PurgInfoRecdOrgPlantData.IsRetMatlAuthznRqdBySupplier,
  //introducing new successor GFN
  I_PurgInfoRecdOrgPlantData.IsRetMatlAuthznRqdBySupplier as SuplrRetMatlAuthznRqmtSts,
  I_PurgInfoRecdOrgPlantData.IsCashDiscountGranted,
  I_PurgInfoRecdOrgPlantData.MaterialConditionGroup,
  I_PurgInfoRecdOrgPlantData.PricingDateControl,
  I_PurgInfoRecdOrgPlantData.PurchasingDocumentDate,
  I_PurgInfoRecdOrgPlantData.ShelfLifeExpirationDatePeriod,
  I_PurgInfoRecdOrgPlantData.ProductionVersion
}
```
