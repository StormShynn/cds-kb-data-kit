---
name: I_SALESORDERITEMPRCGELMNTTP
description: Sales OrderITEMPRCGELMNTTP
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
  - item-level
  - component:SD-SLS-API-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERITEMPRCGELMNTTP

**Sales OrderITEMPRCGELMNTTP**

| Property | Value |
|---|---|
| App Component | `SD-SLS-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesOrder` | `SalesOrderItemPricingElement.SalesOrder` |
| key `SalesOrderItem` | `SalesOrderItemPricingElement.SalesOrderItem` |
| key `PricingProcedureStep` | `SalesOrderItemPricingElement.PricingProcedureStep` |
| key `PricingProcedureCounter` | `SalesOrderItemPricingElement.PricingProcedureCounter` |
| `ConditionApplication` | `SalesOrderItemPricingElement.ConditionApplication` |
| `ConditionType` | `SalesOrderItemPricingElement.ConditionType` |
| `ConditionTypeName` | `SalesOrderItemPricingElement.ConditionTypeName` |
| `ConditionCalculationType` | `SalesOrderItemPricingElement.ConditionCalculationType` |
| `ConditionRateAmount` | `SalesOrderItemPricingElement.ConditionRateAmount` |
| `ConditionCurrency` | `SalesOrderItemPricingElement.ConditionCurrency` |
| `ConditionRateRatio` | `SalesOrderItemPricingElement.ConditionRateRatio` |
| `ConditionRateRatioUnit` | `SalesOrderItemPricingElement.ConditionRateRatioUnit` |
| `ConditionBaseAmount` | `SalesOrderItemPricingElement.ConditionBaseAmount` |
| `ConditionAmount` | `SalesOrderItemPricingElement.ConditionAmount` |
| `TransactionCurrency` | `SalesOrderItemPricingElement.TransactionCurrency` |
| `ConditionBaseQuantity` | `SalesOrderItemPricingElement.ConditionBaseQuantity` |
| `ConditionQuantity` | `SalesOrderItemPricingElement.ConditionQuantity` |
| `ConditionQuantityUnit` | `SalesOrderItemPricingElement.ConditionQuantityUnit` |
| `ConditionIsForStatistics` | `SalesOrderItemPricingElement.ConditionIsForStatistics` |
| `ConditionIsManuallyChanged` | `SalesOrderItemPricingElement.ConditionIsManuallyChanged` |
| `ConditionInactiveReason` | `SalesOrderItemPricingElement.ConditionInactiveReason` |
| `ConditionOrigin` | `SalesOrderItemPricingElement.ConditionOrigin` |
| `ConditionRateValueIsAmount` | `SalesOrderItemPricingElement.ConditionRateValueIsAmount` |
| `ConditionRateValueIsRatio` | `SalesOrderItemPricingElement.ConditionRateValueIsRatio` |
| `ConditionBaseValueIsQuantity` | `SalesOrderItemPricingElement.ConditionBaseValueIsQuantity` |
| `ConditionBaseValueIsAmount` | `SalesOrderItemPricingElement.ConditionBaseValueIsAmount` |
| `ConditionQuantityIsNull` | `SalesOrderItemPricingElement.ConditionQuantityIsNull` |
| `ConditionAmountIsNull` | `SalesOrderItemPricingElement.ConditionAmountIsNull` |
| `PriceConditionDeterminationDte` | `SalesOrderItemPricingElement.PriceConditionDeterminationDte` |
| `ConditionClass` | `SalesOrderItemPricingElement.ConditionClass` |
| `ConditionRateValueIsNull` | `SalesOrderItemPricingElement.ConditionRateValueIsNull` |
| `SalesOrderType` | `SalesOrderItemPricingElement.SalesOrderType` |
| `SalesOrganization` | `SalesOrderItemPricingElement.SalesOrganization` |
| `DistributionChannel` | `SalesOrderItemPricingElement.DistributionChannel` |
| `OrganizationDivision` | `SalesOrderItemPricingElement.OrganizationDivision` |
| `_Item` | *Association* |
| `_SalesOrder` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Sales Order Item Pricing Element - TP'

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
   semanticKey: ['SalesOrder', 'SalesOrderItem', 'PricingProcedureStep', 'PricingProcedureCounter']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SalesOrderItemPrcgElmntTP 
  as projection on R_SalesOrderItemPrcgElmntTP as SalesOrderItemPricingElement 
{
  key SalesOrderItemPricingElement.SalesOrder,
  key SalesOrderItemPricingElement.SalesOrderItem,
  key SalesOrderItemPricingElement.PricingProcedureStep,
  key SalesOrderItemPricingElement.PricingProcedureCounter,
  
  SalesOrderItemPricingElement.ConditionApplication,
  SalesOrderItemPricingElement.ConditionType,
  SalesOrderItemPricingElement.ConditionTypeName,
  SalesOrderItemPricingElement.ConditionCalculationType, 
  
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  @OData.v2.amount.noDecimalShift: true
  SalesOrderItemPricingElement.ConditionRateAmount,
  SalesOrderItemPricingElement.ConditionCurrency,
    
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  SalesOrderItemPricingElement.ConditionRateRatio,
  SalesOrderItemPricingElement.ConditionRateRatioUnit,

  @Semantics.amount.currencyCode: 'TransactionCurrency'  
  @OData.v2.amount.noDecimalShift: true
  SalesOrderItemPricingElement.ConditionBaseAmount,
  @Semantics.amount.currencyCode: 'TransactionCurrency'  
  SalesOrderItemPricingElement.ConditionAmount,
  SalesOrderItemPricingElement.TransactionCurrency,
      
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
  SalesOrderItemPricingElement.ConditionBaseQuantity,
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'   
  SalesOrderItemPricingElement.ConditionQuantity,
  SalesOrderItemPricingElement.ConditionQuantityUnit,

  SalesOrderItemPricingElement.ConditionIsForStatistics,
  SalesOrderItemPricingElement.ConditionIsManuallyChanged,
  SalesOrderItemPricingElement.ConditionInactiveReason,
  SalesOrderItemPricingElement.ConditionOrigin,
  
  SalesOrderItemPricingElement.ConditionRateValueIsAmount,
  SalesOrderItemPricingElement.ConditionRateValueIsRatio,
  SalesOrderItemPricingElement.ConditionBaseValueIsQuantity,
  SalesOrderItemPricingElement.ConditionBaseValueIsAmount,
  SalesOrderItemPricingElement.ConditionQuantityIsNull,
  SalesOrderItemPricingElement.ConditionAmountIsNull,
  SalesOrderItemPricingElement.PriceConditionDeterminationDte,
  SalesOrderItemPricingElement.ConditionClass,
  SalesOrderItemPricingElement.ConditionRateValueIsNull,

  //for DCL
  @Consumption.hidden: true
  SalesOrderItemPricingElement.SalesOrderType,
  @Consumption.hidden: true
  SalesOrderItemPricingElement.SalesOrganization,
  @Consumption.hidden: true
  SalesOrderItemPricingElement.DistributionChannel,
  @Consumption.hidden: true
  SalesOrderItemPricingElement.OrganizationDivision,

  //Association
  _Item       : redirected to parent I_SalesOrderItemTP,
  _SalesOrder : redirected to I_SalesOrderTP   
}
```
