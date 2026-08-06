---
name: I_CRDTMEMOREQPRCGELMNTTP
description: Crdtmemoreqprcgelmnttp
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
# I_CRDTMEMOREQPRCGELMNTTP

**Crdtmemoreqprcgelmnttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CreditMemoRequest` | `CreditMemoReqPricingElement.CreditMemoRequest` |
| key `PricingProcedureStep` | `CreditMemoReqPricingElement.PricingProcedureStep` |
| key `PricingProcedureCounter` | `CreditMemoReqPricingElement.PricingProcedureCounter` |
| `ConditionApplication` | `CreditMemoReqPricingElement.ConditionApplication` |
| `ConditionType` | `CreditMemoReqPricingElement.ConditionType` |
| `ConditionTypeName` | `CreditMemoReqPricingElement.ConditionTypeName` |
| `ConditionCalculationType` | `CreditMemoReqPricingElement.ConditionCalculationType` |
| `ConditionRateAmount` | `CreditMemoReqPricingElement.ConditionRateAmount` |
| `ConditionCurrency` | `CreditMemoReqPricingElement.ConditionCurrency` |
| `ConditionRateRatio` | `CreditMemoReqPricingElement.ConditionRateRatio` |
| `ConditionRateRatioUnit` | `CreditMemoReqPricingElement.ConditionRateRatioUnit` |
| `ConditionBaseAmount` | `CreditMemoReqPricingElement.ConditionBaseAmount` |
| `ConditionAmount` | `CreditMemoReqPricingElement.ConditionAmount` |
| `TransactionCurrency` | `CreditMemoReqPricingElement.TransactionCurrency` |
| `ConditionBaseQuantity` | `CreditMemoReqPricingElement.ConditionBaseQuantity` |
| `ConditionQuantity` | `CreditMemoReqPricingElement.ConditionQuantity` |
| `ConditionQuantityUnit` | `CreditMemoReqPricingElement.ConditionQuantityUnit` |
| `ConditionIsForStatistics` | `CreditMemoReqPricingElement.ConditionIsForStatistics` |
| `ConditionIsManuallyChanged` | `CreditMemoReqPricingElement.ConditionIsManuallyChanged` |
| `ConditionInactiveReason` | `CreditMemoReqPricingElement.ConditionInactiveReason` |
| `ConditionRateValueIsAmount` | `CreditMemoReqPricingElement.ConditionRateValueIsAmount` |
| `ConditionRateValueIsRatio` | `CreditMemoReqPricingElement.ConditionRateValueIsRatio` |
| `ConditionRateValueIsNull` | `CreditMemoReqPricingElement.ConditionRateValueIsNull` |
| `ConditionQuantityIsNull` | `CreditMemoReqPricingElement.ConditionQuantityIsNull` |
| `ConditionAmountIsNull` | `CreditMemoReqPricingElement.ConditionAmountIsNull` |
| `CreditMemoRequestType` | `CreditMemoReqPricingElement.CreditMemoRequestType` |
| `SalesOrganization` | `CreditMemoReqPricingElement.SalesOrganization` |
| `DistributionChannel` | `CreditMemoReqPricingElement.DistributionChannel` |
| `OrganizationDivision` | `CreditMemoReqPricingElement.OrganizationDivision` |
| `_CreditMemoRequest` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Credit Memo Request Pricing Element - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_PROJECTED_ENTITY,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['CreditMemoRequest', 'PricingProcedureStep', 'PricingProcedureCounter']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_CrdtMemoReqPrcgElmntTP 
  as projection on R_CreditMemoReqPricingElmntTP as CreditMemoReqPricingElement
{
  key CreditMemoReqPricingElement.CreditMemoRequest,
  key CreditMemoReqPricingElement.PricingProcedureStep,
  key CreditMemoReqPricingElement.PricingProcedureCounter,
    
  CreditMemoReqPricingElement.ConditionApplication,
  CreditMemoReqPricingElement.ConditionType,
  CreditMemoReqPricingElement.ConditionTypeName,
  CreditMemoReqPricingElement.ConditionCalculationType,
  
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  @OData.v2.amount.noDecimalShift: true
  CreditMemoReqPricingElement.ConditionRateAmount,
  CreditMemoReqPricingElement.ConditionCurrency,
  
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  CreditMemoReqPricingElement.ConditionRateRatio,
  CreditMemoReqPricingElement.ConditionRateRatioUnit,
  
  @Semantics.amount.currencyCode: 'TransactionCurrency'  
  @OData.v2.amount.noDecimalShift: true  
  CreditMemoReqPricingElement.ConditionBaseAmount,
  @Semantics.amount.currencyCode: 'TransactionCurrency' 
  CreditMemoReqPricingElement.ConditionAmount,
  CreditMemoReqPricingElement.TransactionCurrency,
  
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
  CreditMemoReqPricingElement.ConditionBaseQuantity,
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
  CreditMemoReqPricingElement.ConditionQuantity,
  CreditMemoReqPricingElement.ConditionQuantityUnit,
  
  CreditMemoReqPricingElement.ConditionIsForStatistics,
  CreditMemoReqPricingElement.ConditionIsManuallyChanged,
  CreditMemoReqPricingElement.ConditionInactiveReason,
  CreditMemoReqPricingElement.ConditionRateValueIsAmount,
  CreditMemoReqPricingElement.ConditionRateValueIsRatio,
  CreditMemoReqPricingElement.ConditionRateValueIsNull,
  CreditMemoReqPricingElement.ConditionQuantityIsNull,
  CreditMemoReqPricingElement.ConditionAmountIsNull,
  
  //for DCL
  @Consumption.hidden: true
  CreditMemoReqPricingElement.CreditMemoRequestType,
  @Consumption.hidden: true
  CreditMemoReqPricingElement.SalesOrganization,
  @Consumption.hidden: true
  CreditMemoReqPricingElement.DistributionChannel,
  @Consumption.hidden: true
  CreditMemoReqPricingElement.OrganizationDivision,
    
  /* Associations */
  _CreditMemoRequest : redirected to parent I_CreditMemoRequestTP
}
```
