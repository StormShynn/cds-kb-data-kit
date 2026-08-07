---
name: I_SALESORDERPRICINGELEMENTTP
description: "Sales OrderPRICINGELEMENTTP"
app_component: SD-SLS-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-API
  - interface-view
  - transactional-processing
  - sales-order
  - pricing
  - component:SD-SLS-API-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERPRICINGELEMENTTP

**Sales OrderPRICINGELEMENTTP**

| Property | Value |
|---|---|
| App Component | `SD-SLS-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` | ✓ | |  |  |  |  |
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
| `ConditionOrigin` |  | |  |  |  |  |
| `ConditionRateValueIsAmount` |  | |  |  |  |  |
| `ConditionRateValueIsRatio` |  | |  |  |  |  |
| `ConditionBaseValueIsQuantity` |  | |  |  |  |  |
| `ConditionBaseValueIsAmount` |  | |  |  |  |  |
| `ConditionQuantityIsNull` |  | |  |  |  |  |
| `ConditionAmountIsNull` |  | |  |  |  |  |
| `PriceConditionDeterminationDte` |  | |  |  |  |  |
| `ConditionClass` |  | |  |  |  |  |
| `ConditionRateValueIsNull` |  | |  |  |  |  |
| `SalesOrderType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_SalesOrder` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Order Pricing Element - TP'

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
   semanticKey: ['SalesOrder', 'PricingProcedureStep', 'PricingProcedureCounter']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SalesOrderPricingElementTP 
  as projection on R_SalesOrderPricingElementTP as SalesOrderPricingElement
{
  key SalesOrderPricingElement.SalesOrder,
  key SalesOrderPricingElement.PricingProcedureStep,
  key SalesOrderPricingElement.PricingProcedureCounter,
  
  SalesOrderPricingElement.ConditionApplication,
  SalesOrderPricingElement.ConditionType,
  SalesOrderPricingElement.ConditionTypeName,
  SalesOrderPricingElement.ConditionCalculationType,

  
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  @OData.v2.amount.noDecimalShift: true
  SalesOrderPricingElement.ConditionRateAmount,
  SalesOrderPricingElement.ConditionCurrency,
    
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  SalesOrderPricingElement.ConditionRateRatio,
  SalesOrderPricingElement.ConditionRateRatioUnit,

  @Semantics.amount.currencyCode: 'TransactionCurrency'  
  @OData.v2.amount.noDecimalShift: true  
  SalesOrderPricingElement.ConditionBaseAmount,
  @Semantics.amount.currencyCode: 'TransactionCurrency'  
  SalesOrderPricingElement.ConditionAmount,
  SalesOrderPricingElement.TransactionCurrency,
      
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
  SalesOrderPricingElement.ConditionBaseQuantity,
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'   
  SalesOrderPricingElement.ConditionQuantity,
  SalesOrderPricingElement.ConditionQuantityUnit,

  SalesOrderPricingElement.ConditionIsForStatistics,
  SalesOrderPricingElement.ConditionIsManuallyChanged,
  SalesOrderPricingElement.ConditionInactiveReason,
  SalesOrderPricingElement.ConditionOrigin,
  
  SalesOrderPricingElement.ConditionRateValueIsAmount,
  SalesOrderPricingElement.ConditionRateValueIsRatio,
  SalesOrderPricingElement.ConditionBaseValueIsQuantity,
  SalesOrderPricingElement.ConditionBaseValueIsAmount,
  SalesOrderPricingElement.ConditionQuantityIsNull,
  SalesOrderPricingElement.ConditionAmountIsNull,
  SalesOrderPricingElement.PriceConditionDeterminationDte,
  SalesOrderPricingElement.ConditionClass,
  SalesOrderPricingElement.ConditionRateValueIsNull,
    
  //for DCL
  @Consumption.hidden: true
  SalesOrderPricingElement.SalesOrderType,
  @Consumption.hidden: true
  SalesOrderPricingElement.SalesOrganization,
  @Consumption.hidden: true
  SalesOrderPricingElement.DistributionChannel,
  @Consumption.hidden: true
  SalesOrderPricingElement.OrganizationDivision,

  //Association
  _SalesOrder : redirected to parent I_SalesOrderTP         
  
}
```
