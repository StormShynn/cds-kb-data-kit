---
name: I_PURGINFORECDORGPLNTDATATP
description: Purginforecdorgplntdatatp
app_component: MM-PUR-VM-REC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-VM
  - interface-view
  - transactional-processing
  - component:MM-PUR-VM-REC-2CL
  - lob:Sourcing & Procurement
---
# I_PURGINFORECDORGPLNTDATATP

**Purginforecdorgplntdatatp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-VM-REC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchasingInfoRecord` | `PurchasingInfoRecord` |
| key `PurchasingInfoRecordCategory` | `PurchasingInfoRecordCategory` |
| key `PurchasingOrganization` | `PurchasingOrganization` |
| key `Plant` | `Plant` |
| `CreatedByUser` | `CreatedByUser` |
| `IsMarkedForDeletion` | `IsMarkedForDeletion` |
| `PurchasingGroup` | `PurchasingGroup` |
| `Currency` | `Currency` |
| `MinimumPurchaseOrderQuantity` | `MinimumPurchaseOrderQuantity` |
| `StandardPurchaseOrderQuantity` | `StandardPurchaseOrderQuantity` |
| `MaterialPlannedDeliveryDurn` | `MaterialPlannedDeliveryDurn` |
| `OverdelivTolrtdLmtRatioInPct` | `OverdelivTolrtdLmtRatioInPct` |
| `UnderdelivTolrtdLmtRatioInPct` | `UnderdelivTolrtdLmtRatioInPct` |
| `UnlimitedOverdeliveryIsAllowed` | `UnlimitedOverdeliveryIsAllowed` |
| `LastReferencingPurchaseOrder` | `LastReferencingPurchaseOrder` |
| `LastReferencingPurOrderItem` | `LastReferencingPurOrderItem` |
| `NetPriceAmount` | `NetPriceAmount` |
| `MaterialPriceUnitQty` | `MaterialPriceUnitQty` |
| `PurchaseOrderPriceUnit` | `PurchaseOrderPriceUnit` |
| `PriceValidityEndDate` | `PriceValidityEndDate` |
| `InvoiceIsGoodsReceiptBased` | `InvoiceIsGoodsReceiptBased` |
| `TaxCode` | `TaxCode` |
| `IncotermsClassification` | `IncotermsClassification` |
| `IncotermsTransferLocation` | `IncotermsTransferLocation` |
| `IncotermsLocation1` | `IncotermsLocation1` |
| `MaximumOrderQuantity` | `MaximumOrderQuantity` |
| `IsRelevantForAutomSrcg` | `IsRelevantForAutomSrcg` |
| `SupplierQuotation` | `SupplierQuotation` |
| `SupplierQuotationDate` | `SupplierQuotationDate` |
| `MinRemainingShelfLife` | `MinRemainingShelfLife` |
| `IsEvaluatedRcptSettlmtAllowed` | `IsEvaluatedRcptSettlmtAllowed` |
| `IsPurOrderAllwdForInbDeliv` | `IsPurOrderAllwdForInbDeliv` |
| `IsOrderAcknRqd` | `IsOrderAcknRqd` |
| `IsRetMatlAuthznRqdBySupplier` | `IsRetMatlAuthznRqdBySupplier` |
| `IsCashDiscountGranted` | `IsCashDiscountGranted` |
| `MaterialConditionGroup` | `MaterialConditionGroup` |
| `PurchasingDocumentDate` | `PurchasingDocumentDate` |
| `ShelfLifeExpirationDatePeriod` | `ShelfLifeExpirationDatePeriod` |
| `IsEndOfPurposeBlocked` | `IsEndOfPurposeBlocked` |
| `SupplierConfirmationControlKey` | `SupplierConfirmationControlKey` |
| `PricingDateControl` | `PricingDateControl` |
| `TimeDependentTaxValidFromDate` | `TimeDependentTaxValidFromDate` |
| `TaxCountry` | `TaxCountry` |
| `Material` | `Material` |
| `Supplier` | `Supplier` |
| `MaterialGroup` | `MaterialGroup` |
| `PurgDocOrderQuantityUnit` | `PurgDocOrderQuantityUnit` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_Country` | *Association* |
| `_CreatedByUser` | *Association* |
| `_Currency` | *Association* |
| `_IncotermsClassification` | *Association* |
| `_Plant` | *Association* |
| `_PurchaseOrderPriceUnit` | *Association* |
| `_PurchasingGroup` | *Association* |
| `_PurchasingOrganization` | *Association* |
| `_TaxCode` | *Association* |
| `_PurgInfoRecdPrcgCndnValdty` | *Association* |
| `_PurchasingInfoRecord` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Purchase Info Record Org Plnt Data - TP'
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

//@ObjectModel.semanticKey: ['PurchasingInfoRecord', 'PurgInfoRecdOrgPlntData']

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'PurgInfoRecdOrgPlantData'
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED


define view entity I_PurgInfoRecdOrgPlntDataTP 
    as projection on R_PurgInfoRecdOrgPlntDataTP as _PurgInfoRecdOrgPlntDataTP
{
key PurchasingInfoRecord,
key PurchasingInfoRecordCategory,
key PurchasingOrganization,
key Plant,
CreatedByUser,
IsMarkedForDeletion,
PurchasingGroup,
Currency,
@Semantics.quantity.unitOfMeasure: 'PurchaseOrderPriceUnit'
MinimumPurchaseOrderQuantity,
@Semantics.quantity.unitOfMeasure: 'PurchaseOrderPriceUnit'
StandardPurchaseOrderQuantity,
@Semantics.quantity.unitOfMeasure: 'PurchaseOrderPriceUnit'
MaterialPlannedDeliveryDurn,
OverdelivTolrtdLmtRatioInPct,
UnderdelivTolrtdLmtRatioInPct,
UnlimitedOverdeliveryIsAllowed,
LastReferencingPurchaseOrder,
LastReferencingPurOrderItem,
//cast (NetPriceAmount as abap.sstring(50)) as NetPriceQuantityUnit,
@Semantics.amount.currencyCode: 'Currency'
NetPriceAmount,
@Semantics.quantity.unitOfMeasure: 'PurchaseOrderPriceUnit'
MaterialPriceUnitQty,
PurchaseOrderPriceUnit,
PriceValidityEndDate,
InvoiceIsGoodsReceiptBased,
TaxCode,
IncotermsClassification,
IncotermsTransferLocation,
IncotermsLocation1,
@Semantics.quantity.unitOfMeasure: 'PurchaseOrderPriceUnit'
MaximumOrderQuantity,
@Semantics.booleanIndicator
IsRelevantForAutomSrcg,
SupplierQuotation,
SupplierQuotationDate,
MinRemainingShelfLife,
IsEvaluatedRcptSettlmtAllowed,
IsPurOrderAllwdForInbDeliv,
IsOrderAcknRqd,
IsRetMatlAuthznRqdBySupplier,   // can we use SuplrRetMatlAuthznRqmtSts..?
IsCashDiscountGranted,
MaterialConditionGroup,
PurchasingDocumentDate,
ShelfLifeExpirationDatePeriod,
@Semantics.booleanIndicator
IsEndOfPurposeBlocked,
SupplierConfirmationControlKey,
PricingDateControl,
TimeDependentTaxValidFromDate,
TaxCountry,
Material,
Supplier,
MaterialGroup,
PurgDocOrderQuantityUnit,
LastChangeDateTime,

//  //     Composition entities
//      _PurgInfoRecdPrcgCndnValdty,
//      _PurchasingInfoRecord,
      
   //     Foriegn Entities

      _Country,
      _CreatedByUser,
      _Currency,
      _IncotermsClassification,
      _Plant,
      _PurchaseOrderPriceUnit,
      _PurchasingGroup,
      _PurchasingOrganization,
      _TaxCode,

    _PurgInfoRecdPrcgCndnValdty   : redirected to composition child I_PurgInfoRecdPrcgCndnValdtyTP,
    _PurchasingInfoRecord        : redirected to parent I_PurchasingInfoRecordTP
   
}
```
