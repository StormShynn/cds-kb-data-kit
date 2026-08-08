---
name: I_CUSTRETPRICINGELEMENTTP
description: "Custretpricingelementtp"
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - interface-view
  - transactional-processing
  - pricing
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
---
# I_CUSTRETPRICINGELEMENTTP

**Custretpricingelementtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerReturn` | ✓ | |  |  |  |  |
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionTypeName` |  | |  |  |  |  |
| `ConditionCalculationType` |  | |  |  |  |  |
| `ConditionRateAmount` |  | |  |  |  |  |
| `ConditionCurrency` |  | |  |  |  |  |
| `ConditionRateRatio` |  | |  |  |  |  |
| `ConditionRateRatioUnit` |  | |  |  |  |  |
| `ConditionBaseAmount` |  | |  |  |  |  |
| `ConditionAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ConditionBaseQuantity` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionIsForStatistics` |  | |  |  |  |  |
| `ConditionIsManuallyChanged` |  | |  |  |  |  |
| `ConditionInactiveReason` |  | |  |  |  |  |
| `ConditionRateValueIsAmount` |  | |  |  |  |  |
| `ConditionRateValueIsRatio` |  | |  |  |  |  |
| `ConditionRateValueIsNull` |  | |  |  |  |  |
| `ConditionQuantityIsNull` |  | |  |  |  |  |
| `ConditionAmountIsNull` |  | |  |  |  |  |
| `CustomerReturnType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_CustomerReturn` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Returns Order Pricing Element - TP'

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
   semanticKey: ['CustomerReturn', 'PricingProcedureStep', 'PricingProcedureCounter']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_CustRetPricingElementTP 
  as projection on R_CustomerReturnPrgElmTP as CustomerReturnPricingElement
{
  key CustomerReturnPricingElement.CustomerReturn,
  key CustomerReturnPricingElement.PricingProcedureStep,
  key CustomerReturnPricingElement.PricingProcedureCounter,
  
  CustomerReturnPricingElement.ConditionApplication,
  CustomerReturnPricingElement.ConditionType,
  CustomerReturnPricingElement.ConditionTypeName,
  CustomerReturnPricingElement.ConditionCalculationType,
  
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  @OData.v2.amount.noDecimalShift: true
  CustomerReturnPricingElement.ConditionRateAmount,
  CustomerReturnPricingElement.ConditionCurrency,
  
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  CustomerReturnPricingElement.ConditionRateRatio,
  CustomerReturnPricingElement.ConditionRateRatioUnit,
  
  @Semantics.amount.currencyCode: 'TransactionCurrency'  
  @OData.v2.amount.noDecimalShift: true  
  CustomerReturnPricingElement.ConditionBaseAmount,
  @Semantics.amount.currencyCode: 'TransactionCurrency' 
  CustomerReturnPricingElement.ConditionAmount,
  CustomerReturnPricingElement.TransactionCurrency,
  
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
  CustomerReturnPricingElement.ConditionBaseQuantity,
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
  CustomerReturnPricingElement.ConditionQuantity,
  CustomerReturnPricingElement.ConditionQuantityUnit,
  
  CustomerReturnPricingElement.ConditionIsForStatistics,
  CustomerReturnPricingElement.ConditionIsManuallyChanged,
  CustomerReturnPricingElement.ConditionInactiveReason,
  CustomerReturnPricingElement.ConditionRateValueIsAmount,
  CustomerReturnPricingElement.ConditionRateValueIsRatio,
  CustomerReturnPricingElement.ConditionRateValueIsNull,
  CustomerReturnPricingElement.ConditionQuantityIsNull,
  CustomerReturnPricingElement.ConditionAmountIsNull,
  
  //for DCL
  @Consumption.hidden: true
  CustomerReturnPricingElement.CustomerReturnType,
  @Consumption.hidden: true
  CustomerReturnPricingElement.SalesOrganization,
  @Consumption.hidden: true
  CustomerReturnPricingElement.DistributionChannel,
  @Consumption.hidden: true
  CustomerReturnPricingElement.OrganizationDivision,
    
  /* Associations */
  _CustomerReturn : redirected to parent I_CustomerReturnTP
}
```
