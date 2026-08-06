---
name: I_SLSSCHEDGAGRMTITMPRCGELMNTTP
description: Slsschedgagrmtitmprcgelmnttp
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
# I_SLSSCHEDGAGRMTITMPRCGELMNTTP

**Slsschedgagrmtitmprcgelmnttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesSchedulingAgreement` | `SlsSchedgAgrmtItemPrcgElmnt.SalesSchedulingAgreement` |
| key `SalesSchedulingAgreementItem` | `SlsSchedgAgrmtItemPrcgElmnt.SalesSchedulingAgreementItem` |
| key `PricingProcedureStep` | `SlsSchedgAgrmtItemPrcgElmnt.PricingProcedureStep` |
| key `PricingProcedureCounter` | `SlsSchedgAgrmtItemPrcgElmnt.PricingProcedureCounter` |
| `ConditionApplication` | `SlsSchedgAgrmtItemPrcgElmnt.ConditionApplication` |
| `ConditionType` | `SlsSchedgAgrmtItemPrcgElmnt.ConditionType` |
| `ConditionCalculationType` | `SlsSchedgAgrmtItemPrcgElmnt.ConditionCalculationType` |
| `ConditionRateAmount` | `SlsSchedgAgrmtItemPrcgElmnt.ConditionRateAmount` |
| `ConditionCurrency` | `SlsSchedgAgrmtItemPrcgElmnt.ConditionCurrency` |
| `ConditionRateRatio` | `SlsSchedgAgrmtItemPrcgElmnt.ConditionRateRatio` |
| `ConditionRateRatioUnit` | `SlsSchedgAgrmtItemPrcgElmnt.ConditionRateRatioUnit` |
| `ConditionBaseAmount` | `SlsSchedgAgrmtItemPrcgElmnt.ConditionBaseAmount` |
| `ConditionAmount` | `SlsSchedgAgrmtItemPrcgElmnt.ConditionAmount` |
| `TransactionCurrency` | `SlsSchedgAgrmtItemPrcgElmnt.TransactionCurrency` |
| `ConditionBaseQuantity` | `SlsSchedgAgrmtItemPrcgElmnt.ConditionBaseQuantity` |
| `ConditionQuantity` | `SlsSchedgAgrmtItemPrcgElmnt.ConditionQuantity` |
| `ConditionQuantityUnit` | `SlsSchedgAgrmtItemPrcgElmnt.ConditionQuantityUnit` |
| `ConditionIsForStatistics` | `SlsSchedgAgrmtItemPrcgElmnt.ConditionIsForStatistics` |
| `ConditionIsManuallyChanged` | `SlsSchedgAgrmtItemPrcgElmnt.ConditionIsManuallyChanged` |
| `ConditionInactiveReason` | `SlsSchedgAgrmtItemPrcgElmnt.ConditionInactiveReason` |
| `SalesSchedgAgrmtType` | `SlsSchedgAgrmtItemPrcgElmnt.SalesSchedgAgrmtType` |
| `OrganizationDivision` | `SlsSchedgAgrmtItemPrcgElmnt.OrganizationDivision` |
| `SalesOrganization` | `SlsSchedgAgrmtItemPrcgElmnt.SalesOrganization` |
| `DistributionChannel` | `SlsSchedgAgrmtItemPrcgElmnt.DistributionChannel` |
| `_Item` | *Association* |
| `_SalesSchedulingAgreement` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Sales Scheduling Agreement Item Pricing Element - TP'

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
   semanticKey: ['SalesSchedulingAgreement', 'SalesSchedulingAgreementItem', 'PricingProcedureStep', 'PricingProcedureCounter']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SlsSchedgAgrmtItmPrcgElmntTP 
  as projection on R_SlsSchedgAgrmtItmPrcgElmntTP  as SlsSchedgAgrmtItemPrcgElmnt
{
  key SlsSchedgAgrmtItemPrcgElmnt.SalesSchedulingAgreement,
  key SlsSchedgAgrmtItemPrcgElmnt.SalesSchedulingAgreementItem,
  key SlsSchedgAgrmtItemPrcgElmnt.PricingProcedureStep,
  key SlsSchedgAgrmtItemPrcgElmnt.PricingProcedureCounter,
  
      SlsSchedgAgrmtItemPrcgElmnt.ConditionApplication,
      SlsSchedgAgrmtItemPrcgElmnt.ConditionType,
      SlsSchedgAgrmtItemPrcgElmnt.ConditionCalculationType,
      
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      @OData.v2.amount.noDecimalShift: true
      SlsSchedgAgrmtItemPrcgElmnt.ConditionRateAmount,
      SlsSchedgAgrmtItemPrcgElmnt.ConditionCurrency,
      
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      SlsSchedgAgrmtItemPrcgElmnt.ConditionRateRatio,
      SlsSchedgAgrmtItemPrcgElmnt.ConditionRateRatioUnit,
      
      @Semantics.amount.currencyCode: 'TransactionCurrency'  
      @OData.v2.amount.noDecimalShift: true  
      SlsSchedgAgrmtItemPrcgElmnt.ConditionBaseAmount,
      
      @Semantics.amount.currencyCode: 'TransactionCurrency'  
      SlsSchedgAgrmtItemPrcgElmnt.ConditionAmount,
      SlsSchedgAgrmtItemPrcgElmnt.TransactionCurrency,
      
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
      SlsSchedgAgrmtItemPrcgElmnt.ConditionBaseQuantity,
      
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'   
      SlsSchedgAgrmtItemPrcgElmnt.ConditionQuantity,
      SlsSchedgAgrmtItemPrcgElmnt.ConditionQuantityUnit,
      
      SlsSchedgAgrmtItemPrcgElmnt.ConditionIsForStatistics,
      SlsSchedgAgrmtItemPrcgElmnt.ConditionIsManuallyChanged,
      SlsSchedgAgrmtItemPrcgElmnt.ConditionInactiveReason,

      //DCL
      @Consumption.hidden: true
      SlsSchedgAgrmtItemPrcgElmnt.SalesSchedgAgrmtType,
      @Consumption.hidden: true
      SlsSchedgAgrmtItemPrcgElmnt.OrganizationDivision,
      @Consumption.hidden: true
      SlsSchedgAgrmtItemPrcgElmnt.SalesOrganization,
      @Consumption.hidden: true
      SlsSchedgAgrmtItemPrcgElmnt.DistributionChannel,
      
      //Composition 
      _Item                     : redirected to parent I_SlsSchedulingAgreementItemTP, 
      _SalesSchedulingAgreement : redirected to I_SalesSchedulingAgreementTP  
      
}
```
