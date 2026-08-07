---
name: I_PURGINFORECDCNDNRECORDTP
description: "Purginforecdcndnrecordtp"
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
# I_PURGINFORECDCNDNRECORDTP

**Purginforecdcndnrecordtp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-VM-REC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingInfoRecord` | ✓ | |  |  |  |  |
| `PurchasingInfoRecordCategory` | ✓ | |  |  |  |  |
| `PurchasingOrganization` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `ConditionRecord` | ✓ | |  |  |  |  |
| `ConditionValidityEndDate` | ✓ | |  |  |  |  |
| `ConditionSequentialNumber` |  | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionValidityStartDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `ConditionTextID` |  | |  |  |  |  |
| `PricingScaleType` |  | |  |  |  |  |
| `PricingScaleBasis` |  | |  |  |  |  |
| `ConditionScaleQuantity` |  | |  |  |  |  |
| `ConditionScaleQuantityUnit` |  | |  |  |  |  |
| `ConditionScaleAmount` |  | |  |  |  |  |
| `ConditionScaleAmountCurrency` |  | |  |  |  |  |
| `ConditionCalculationType` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
| `ConditionRateValueUnit` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionToBaseQtyNmrtr` |  | |  |  |  |  |
| `ConditionToBaseQtyDnmntr` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `ConditionLowerLimit` |  | |  |  |  |  |
| `ConditionUpperLimit` |  | |  |  |  |  |
| `ConditionAlternativeCurrency` |  | |  |  |  |  |
| `ConditionExclusion` |  | |  |  |  |  |
| `ConditionIsDeleted` |  | |  |  |  |  |
| `AdditionalValueDays` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `CndnMaxNumberOfSalesOrders` |  | |  |  |  |  |
| `MinimumConditionBasisValue` |  | |  |  |  |  |
| `MaximumConditionBasisValue` |  | |  |  |  |  |
| `MaximumConditionAmount` |  | |  |  |  |  |
| `IncrementalScale` |  | |  |  |  |  |
| `PricingScaleLine` |  | |  |  |  |  |
| `ConditionReleaseStatus` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_PurgInfoRecdPrcgCndnValdty` | | ✓ | | | | |
| `_PurgInfoRecd` | | ✓ | | | | |
| `_PurgInfoRecdOrgPlntData` | | ✓ | | | | |
| `_PurgInfoRecdCndnSuplmnt` | | ✓ | | | | |
| `_AlternativeCurrency` | | ✓ | | | | |
| `_PurgPricingCndnRecdScale` | | ✓ | | | | |
| `_QuantityUnit` | | ✓ | | | | |
| `_RateValueUnit` | | ✓ | | | | |
| `_ScaleAmountCurrency` | | ✓ | | | | |
| `_ScaleQuantityUnit` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Purchase Info Recd Pricing Cndn - TP'
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true

define view entity I_PurgInfoRecdCndnRecordTP as projection on R_PurgInfoRecdCndnRecordTP {
key PurchasingInfoRecord,
  key PurchasingInfoRecordCategory,
  key PurchasingOrganization,
  key Plant,
  key ConditionRecord,
  key ConditionValidityEndDate, 
      ConditionSequentialNumber,
      //  ConditionTable,
      ConditionApplication,
      ConditionType,
      ConditionValidityStartDate,
      CreatedByUser,
      CreationDate,
      //item
      ConditionTextID,
      PricingScaleType,
      PricingScaleBasis,
      @Semantics.quantity.unitOfMeasure: 'ConditionScaleQuantityUnit'
      ConditionScaleQuantity,
      ConditionScaleQuantityUnit,
      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
      ConditionScaleAmount,
      ConditionScaleAmountCurrency,
      ConditionCalculationType,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionRateValue,
      ConditionRateValueUnit,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      ConditionQuantityUnit,
      ConditionToBaseQtyNmrtr,
      ConditionToBaseQtyDnmntr,
      BaseUnit,
      @Semantics.amount.currencyCode: 'ConditionAlternativeCurrency'
      ConditionLowerLimit,
      @Semantics.amount.currencyCode: 'ConditionAlternativeCurrency'
      ConditionUpperLimit,
      ConditionAlternativeCurrency,
      ConditionExclusion,
      ConditionIsDeleted,
      AdditionalValueDays,
      FixedValueDate,
      PaymentTerms,
      CndnMaxNumberOfSalesOrders,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      MinimumConditionBasisValue,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      MaximumConditionBasisValue,
      @Semantics.amount.currencyCode: 'ConditionAlternativeCurrency'
      MaximumConditionAmount,
      IncrementalScale,
      PricingScaleLine,
      ConditionReleaseStatus,
      LastChangeDateTime,

      // Composition Entities
      _PurgInfoRecdPrcgCndnValdty : redirected to parent I_PurgInfoRecdPrcgCndnValdtyTP,
      _PurgInfoRecd : redirected to I_PurchasingInfoRecordTP,
      _PurgInfoRecdOrgPlntData : redirected to I_PurgInfoRecdOrgPlntDataTP,
      _PurgInfoRecdCndnSuplmnt : redirected to composition child I_PurgInfoRecdCndnSuplmntTP,


      //Foreign Entities

      _AlternativeCurrency,
      _PurgPricingCndnRecdScale,
      _QuantityUnit,
      _RateValueUnit,
      _ScaleAmountCurrency,
      _ScaleQuantityUnit

}
```
