---
name: I_SLSPRCGCONDITIONRECORDTP_2
description: SLSPRCGCondition RecordTP 2
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - transactional-processing
  - pricing-condition
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_SLSPRCGCONDITIONRECORDTP_2

**SLSPRCGCondition RecordTP 2**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConditionRecord` | `ConditionRecord` |
| `ConditionSequentialNumber` | `ConditionSequentialNumber` |
| `ConditionTable` | `ConditionTable` |
| `ConditionApplication` | `ConditionApplication` |
| `ConditionType` | `ConditionType` |
| `ConditionValidityEndDate` | `ConditionValidityEndDate` |
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
| `ConditionRateRatio` | `ConditionRateRatio` |
| `ConditionRateRatioUnit` | `ConditionRateRatioUnit` |
| `ConditionRateAmount` | `ConditionRateAmount` |
| `ConditionCurrency` | `ConditionCurrency` |
| `ConditionQuantity` | `ConditionQuantity` |
| `ConditionQuantityUnit` | `ConditionQuantityUnit` |
| `ConditionToBaseQtyNmrtr` | `ConditionToBaseQtyNmrtr` |
| `ConditionToBaseQtyDnmntr` | `ConditionToBaseQtyDnmntr` |
| `BaseUnit` | `BaseUnit` |
| `ConditionLowerLimit` | `ConditionLowerLimit` |
| `ConditionLowerLimitAmount` | `ConditionLowerLimitAmount` |
| `ConditionLowerLimitRatio` | `ConditionLowerLimitRatio` |
| `ConditionUpperLimit` | `ConditionUpperLimit` |
| `ConditionUpperLimitAmount` | `ConditionUpperLimitAmount` |
| `ConditionUpperLimitRatio` | `ConditionUpperLimitRatio` |
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
| `SalesPriceApprovalRequest` | `SalesPriceApprovalRequest` |
| `PrevApprovedConditionRecord` | `PrevApprovedConditionRecord` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_Validity` | *Association* |
| `_Supplement` | *Association* |
| `_Scale` | *Association* |
| `_Text` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Condition Record for Pricing in Sales - TP'

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   sapObjectNodeType:{
      name: 'SalesPricingConditionRecord'},
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   }
 } 
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define root view entity I_SlsPrcgConditionRecordTP_2
provider contract transactional_interface
  as projection on R_SlsPrcgConditionRecordTP as SalesPricingConditionRecord
{
  key ConditionRecord,
      ConditionSequentialNumber,
      ConditionTable,     
      ConditionApplication,
      ConditionType,
      ConditionValidityEndDate,
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
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionRateRatio,
      ConditionRateRatioUnit,
      @Semantics.amount.currencyCode: 'ConditionCurrency' 
      @OData.v2.amount.noDecimalShift: true
      ConditionRateAmount,
      ConditionCurrency,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      ConditionQuantityUnit,
      ConditionToBaseQtyNmrtr,
      ConditionToBaseQtyDnmntr,
      BaseUnit,  
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionLowerLimit,   
      @Semantics.amount.currencyCode: 'ConditionCurrency' 
      @OData.v2.amount.noDecimalShift: true      
      ConditionLowerLimitAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionLowerLimitRatio,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionUpperLimit,
      @Semantics.amount.currencyCode: 'ConditionCurrency' 
      @OData.v2.amount.noDecimalShift: true     
      ConditionUpperLimitAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionUpperLimitRatio,
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
//      ConditionReleaseStatus,
      SalesPriceApprovalRequest,
//      ConditionChangeReason,
      PrevApprovedConditionRecord,
//      ConditionTaxCode,
//      ConditionWithholdingTaxCode,
//      TaxExemptionLicense,
//      LicenseGrantDate,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      
      //Compositions
      _Validity : redirected to composition child I_SlsPrcgCndnRecdValidityTP_2,
      _Supplement  : redirected to composition child I_SlsPrcgCndnRecdSuplmntTP_2,
      _Scale  : redirected to composition child I_SlsPrcgCndnRecordScaleTP_2,
      _Text   : redirected to composition child I_SlsPrcgCndnRecordTextTP_2      
}
```
