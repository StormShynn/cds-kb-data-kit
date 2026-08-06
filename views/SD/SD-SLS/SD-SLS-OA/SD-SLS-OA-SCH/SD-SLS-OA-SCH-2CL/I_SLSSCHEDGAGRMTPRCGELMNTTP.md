---
name: I_SLSSCHEDGAGRMTPRCGELMNTTP
description: Slsschedgagrmtprcgelmnttp
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - transactional-processing
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SLSSCHEDGAGRMTPRCGELMNTTP

**Slsschedgagrmtprcgelmnttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesSchedulingAgreement` | `SalesSchedgAgrmtPricingElement.SalesSchedulingAgreement` |
| key `PricingProcedureStep` | `SalesSchedgAgrmtPricingElement.PricingProcedureStep` |
| key `PricingProcedureCounter` | `SalesSchedgAgrmtPricingElement.PricingProcedureCounter` |
| `ConditionApplication` | `SalesSchedgAgrmtPricingElement.ConditionApplication` |
| `ConditionType` | `SalesSchedgAgrmtPricingElement.ConditionType` |
| `ConditionCalculationType` | `SalesSchedgAgrmtPricingElement.ConditionCalculationType` |
| `ConditionRateAmount` | `SalesSchedgAgrmtPricingElement.ConditionRateAmount` |
| `ConditionCurrency` | `SalesSchedgAgrmtPricingElement.ConditionCurrency` |
| `ConditionRateRatio` | `SalesSchedgAgrmtPricingElement.ConditionRateRatio` |
| `ConditionRateRatioUnit` | `SalesSchedgAgrmtPricingElement.ConditionRateRatioUnit` |
| `ConditionBaseAmount` | `SalesSchedgAgrmtPricingElement.ConditionBaseAmount` |
| `ConditionAmount` | `SalesSchedgAgrmtPricingElement.ConditionAmount` |
| `TransactionCurrency` | `SalesSchedgAgrmtPricingElement.TransactionCurrency` |
| `ConditionBaseQuantity` | `SalesSchedgAgrmtPricingElement.ConditionBaseQuantity` |
| `ConditionQuantity` | `SalesSchedgAgrmtPricingElement.ConditionQuantity` |
| `ConditionQuantityUnit` | `SalesSchedgAgrmtPricingElement.ConditionQuantityUnit` |
| `ConditionIsForStatistics` | `SalesSchedgAgrmtPricingElement.ConditionIsForStatistics` |
| `ConditionIsManuallyChanged` | `SalesSchedgAgrmtPricingElement.ConditionIsManuallyChanged` |
| `ConditionInactiveReason` | `SalesSchedgAgrmtPricingElement.ConditionInactiveReason` |
| `SalesSchedgAgrmtType` | `SalesSchedgAgrmtPricingElement.SalesSchedgAgrmtType` |
| `OrganizationDivision` | `SalesSchedgAgrmtPricingElement.OrganizationDivision` |
| `SalesOrganization` | `SalesSchedgAgrmtPricingElement.SalesOrganization` |
| `DistributionChannel` | `SalesSchedgAgrmtPricingElement.DistributionChannel` |
| `_SalesSchedulingAgreement` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Sales Scheduling Agreement Pricing Element - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesSchedulingAgreement', 'PricingProcedureStep', 'PricingProcedureCounter']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SlsSchedgAgrmtPrcgElmntTP 
  as projection on R_SlsSchedgAgrmtPrcgElmntTP as SalesSchedgAgrmtPricingElement
{
  key SalesSchedgAgrmtPricingElement.SalesSchedulingAgreement,
  key SalesSchedgAgrmtPricingElement.PricingProcedureStep,
  key SalesSchedgAgrmtPricingElement.PricingProcedureCounter,
  
      SalesSchedgAgrmtPricingElement.ConditionApplication,
      SalesSchedgAgrmtPricingElement.ConditionType,
      SalesSchedgAgrmtPricingElement.ConditionCalculationType,
      
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      @OData.v2.amount.noDecimalShift: true
      SalesSchedgAgrmtPricingElement.ConditionRateAmount,
      SalesSchedgAgrmtPricingElement.ConditionCurrency,
      
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      SalesSchedgAgrmtPricingElement.ConditionRateRatio,
      SalesSchedgAgrmtPricingElement.ConditionRateRatioUnit,
      
      @Semantics.amount.currencyCode: 'TransactionCurrency'  
      @OData.v2.amount.noDecimalShift: true  
      SalesSchedgAgrmtPricingElement.ConditionBaseAmount,
      
      @Semantics.amount.currencyCode: 'TransactionCurrency'  
      SalesSchedgAgrmtPricingElement.ConditionAmount,
      SalesSchedgAgrmtPricingElement.TransactionCurrency,
      
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
      SalesSchedgAgrmtPricingElement.ConditionBaseQuantity,
      
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
      SalesSchedgAgrmtPricingElement.ConditionQuantity,
      SalesSchedgAgrmtPricingElement.ConditionQuantityUnit,
      
      SalesSchedgAgrmtPricingElement.ConditionIsForStatistics,
      SalesSchedgAgrmtPricingElement.ConditionIsManuallyChanged,
      SalesSchedgAgrmtPricingElement.ConditionInactiveReason,
      
      //DCL
      @Consumption.hidden: true
      SalesSchedgAgrmtPricingElement.SalesSchedgAgrmtType,
      @Consumption.hidden: true
      SalesSchedgAgrmtPricingElement.OrganizationDivision,
      @Consumption.hidden: true
      SalesSchedgAgrmtPricingElement.SalesOrganization,
      @Consumption.hidden: true
      SalesSchedgAgrmtPricingElement.DistributionChannel,
      
      //Composition
      _SalesSchedulingAgreement : redirected to parent I_SalesSchedulingAgreementTP      
}
```
