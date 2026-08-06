---
name: I_PURGINFORECDCNDNRECORDTP
description: Purginforecdcndnrecordtp
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

| Field | Data Source |
|---|---|
| key `PurchasingInfoRecord` | `PurchasingInfoRecord` |
| key `PurchasingInfoRecordCategory` | `PurchasingInfoRecordCategory` |
| key `PurchasingOrganization` | `PurchasingOrganization` |
| key `Plant` | `Plant` |
| key `ConditionRecord` | `ConditionRecord` |
| key `ConditionValidityEndDate` | `ConditionValidityEndDate` |
| `ConditionSequentialNumber` | `ConditionSequentialNumber` |
| `ConditionApplication` | `ConditionApplication` |
| `ConditionType` | `ConditionType` |
| `ConditionValidityStartDate` | `ConditionValidityStartDate` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `ConditionTextID` | `ConditionTextID` |
| `PricingScaleType` | `PricingScaleType` |
| `PricingScaleBasis` | `PricingScaleBasis` |
| `ConditionScaleQuantity` | `ConditionScaleQuantity` |
| `ConditionScaleQuantityUnit` | `ConditionScaleQuantityUnit` |
| `ConditionScaleAmount` | `ConditionScaleAmount` |
| `ConditionScaleAmountCurrency` | `ConditionScaleAmountCurrency` |
| `ConditionCalculationType` | `ConditionCalculationType` |
| `ConditionRateValue` | `ConditionRateValue` |
| `ConditionRateValueUnit` | `ConditionRateValueUnit` |
| `ConditionQuantity` | `ConditionQuantity` |
| `ConditionQuantityUnit` | `ConditionQuantityUnit` |
| `ConditionToBaseQtyNmrtr` | `ConditionToBaseQtyNmrtr` |
| `ConditionToBaseQtyDnmntr` | `ConditionToBaseQtyDnmntr` |
| `BaseUnit` | `BaseUnit` |
| `ConditionLowerLimit` | `ConditionLowerLimit` |
| `ConditionUpperLimit` | `ConditionUpperLimit` |
| `ConditionAlternativeCurrency` | `ConditionAlternativeCurrency` |
| `ConditionExclusion` | `ConditionExclusion` |
| `ConditionIsDeleted` | `ConditionIsDeleted` |
| `AdditionalValueDays` | `AdditionalValueDays` |
| `FixedValueDate` | `FixedValueDate` |
| `PaymentTerms` | `PaymentTerms` |
| `CndnMaxNumberOfSalesOrders` | `CndnMaxNumberOfSalesOrders` |
| `MinimumConditionBasisValue` | `MinimumConditionBasisValue` |
| `MaximumConditionBasisValue` | `MaximumConditionBasisValue` |
| `MaximumConditionAmount` | `MaximumConditionAmount` |
| `IncrementalScale` | `IncrementalScale` |
| `PricingScaleLine` | `PricingScaleLine` |
| `ConditionReleaseStatus` | `ConditionReleaseStatus` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_PurgInfoRecdPrcgCndnValdty` | *Association* |
| `_PurgInfoRecd` | *Association* |
| `_PurgInfoRecdOrgPlntData` | *Association* |
| `_PurgInfoRecdCndnSuplmnt` | *Association* |
| `_AlternativeCurrency` | *Association* |
| `_PurgPricingCndnRecdScale` | *Association* |
| `_QuantityUnit` | *Association* |
| `_RateValueUnit` | *Association* |
| `_ScaleAmountCurrency` | *Association* |
| `_ScaleQuantityUnit` | *Association* |

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
