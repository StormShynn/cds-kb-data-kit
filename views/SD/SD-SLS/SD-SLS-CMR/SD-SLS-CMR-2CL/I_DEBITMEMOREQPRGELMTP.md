---
name: I_DEBITMEMOREQPRGELMTP
description: Debitmemoreqprgelmtp
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - interface-view
  - transactional-processing
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_DEBITMEMOREQPRGELMTP

**Debitmemoreqprgelmtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `DebitMemoRequest` | `DebitMemoRequestPricingElement.DebitMemoRequest` |
| key `PricingProcedureStep` | `DebitMemoRequestPricingElement.PricingProcedureStep` |
| key `PricingProcedureCounter` | `DebitMemoRequestPricingElement.PricingProcedureCounter` |
| `ConditionApplication` | `DebitMemoRequestPricingElement.ConditionApplication` |
| `ConditionType` | `DebitMemoRequestPricingElement.ConditionType` |
| `ConditionTypeName` | `DebitMemoRequestPricingElement.ConditionTypeName` |
| `ConditionCalculationType` | `DebitMemoRequestPricingElement.ConditionCalculationType` |
| `ConditionRateAmount` | `DebitMemoRequestPricingElement.ConditionRateAmount` |
| `ConditionCurrency` | `DebitMemoRequestPricingElement.ConditionCurrency` |
| `ConditionRateRatio` | `DebitMemoRequestPricingElement.ConditionRateRatio` |
| `ConditionRateRatioUnit` | `DebitMemoRequestPricingElement.ConditionRateRatioUnit` |
| `ConditionBaseAmount` | `DebitMemoRequestPricingElement.ConditionBaseAmount` |
| `ConditionAmount` | `DebitMemoRequestPricingElement.ConditionAmount` |
| `TransactionCurrency` | `DebitMemoRequestPricingElement.TransactionCurrency` |
| `ConditionBaseQuantity` | `DebitMemoRequestPricingElement.ConditionBaseQuantity` |
| `ConditionQuantity` | `DebitMemoRequestPricingElement.ConditionQuantity` |
| `ConditionQuantityUnit` | `DebitMemoRequestPricingElement.ConditionQuantityUnit` |
| `ConditionIsForStatistics` | `DebitMemoRequestPricingElement.ConditionIsForStatistics` |
| `ConditionIsManuallyChanged` | `DebitMemoRequestPricingElement.ConditionIsManuallyChanged` |
| `ConditionInactiveReason` | `DebitMemoRequestPricingElement.ConditionInactiveReason` |
| `ConditionRateValueIsAmount` | `DebitMemoRequestPricingElement.ConditionRateValueIsAmount` |
| `ConditionRateValueIsRatio` | `DebitMemoRequestPricingElement.ConditionRateValueIsRatio` |
| `ConditionRateValueIsNull` | `DebitMemoRequestPricingElement.ConditionRateValueIsNull` |
| `ConditionQuantityIsNull` | `DebitMemoRequestPricingElement.ConditionQuantityIsNull` |
| `ConditionAmountIsNull` | `DebitMemoRequestPricingElement.ConditionAmountIsNull` |
| `DebitMemoRequestType` | `DebitMemoRequestPricingElement.DebitMemoRequestType` |
| `SalesOrganization` | `DebitMemoRequestPricingElement.SalesOrganization` |
| `DistributionChannel` | `DebitMemoRequestPricingElement.DistributionChannel` |
| `OrganizationDivision` | `DebitMemoRequestPricingElement.OrganizationDivision` |
| `_DebitMemoRequest` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Debit Memo Request Pricing Element - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['DebitMemoRequest', 'PricingProcedureStep', 'PricingProcedureCounter']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_DebitMemoReqPrgElmTP 
  as projection on R_DebitMemoRequestPrcgElmntTP as DebitMemoRequestPricingElement
{
  key DebitMemoRequestPricingElement.DebitMemoRequest,
  key DebitMemoRequestPricingElement.PricingProcedureStep,
  key DebitMemoRequestPricingElement.PricingProcedureCounter,
    
  DebitMemoRequestPricingElement.ConditionApplication,
  DebitMemoRequestPricingElement.ConditionType,
  DebitMemoRequestPricingElement.ConditionTypeName,
  DebitMemoRequestPricingElement.ConditionCalculationType,
  
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  @OData.v2.amount.noDecimalShift: true
  DebitMemoRequestPricingElement.ConditionRateAmount,
  DebitMemoRequestPricingElement.ConditionCurrency,
  
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  DebitMemoRequestPricingElement.ConditionRateRatio,
  DebitMemoRequestPricingElement.ConditionRateRatioUnit,
  
  @Semantics.amount.currencyCode: 'TransactionCurrency'  
  @OData.v2.amount.noDecimalShift: true  
  DebitMemoRequestPricingElement.ConditionBaseAmount,
  @Semantics.amount.currencyCode: 'TransactionCurrency' 
  DebitMemoRequestPricingElement.ConditionAmount,
  DebitMemoRequestPricingElement.TransactionCurrency,
  
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
  DebitMemoRequestPricingElement.ConditionBaseQuantity,
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
  DebitMemoRequestPricingElement.ConditionQuantity,
  DebitMemoRequestPricingElement.ConditionQuantityUnit,
  
  DebitMemoRequestPricingElement.ConditionIsForStatistics,
  DebitMemoRequestPricingElement.ConditionIsManuallyChanged,
  DebitMemoRequestPricingElement.ConditionInactiveReason,
  DebitMemoRequestPricingElement.ConditionRateValueIsAmount,
  DebitMemoRequestPricingElement.ConditionRateValueIsRatio,
  DebitMemoRequestPricingElement.ConditionRateValueIsNull,
  DebitMemoRequestPricingElement.ConditionQuantityIsNull,
  DebitMemoRequestPricingElement.ConditionAmountIsNull,
  
  //for DCL
  @Consumption.hidden: true
  DebitMemoRequestPricingElement.DebitMemoRequestType,
  @Consumption.hidden: true
  DebitMemoRequestPricingElement.SalesOrganization,
  @Consumption.hidden: true
  DebitMemoRequestPricingElement.DistributionChannel,
  @Consumption.hidden: true
  DebitMemoRequestPricingElement.OrganizationDivision,
    
  /* Associations */
  _DebitMemoRequest : redirected to parent I_DebitMemoRequestTP
}
```
