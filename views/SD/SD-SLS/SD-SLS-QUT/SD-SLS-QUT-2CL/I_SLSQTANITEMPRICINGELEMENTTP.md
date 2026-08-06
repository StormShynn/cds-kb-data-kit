---
name: I_SLSQTANITEMPRICINGELEMENTTP
description: Slsqtanitempricingelementtp
app_component: SD-SLS-QUT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-QUT
  - interface-view
  - transactional-processing
  - pricing
  - item-level
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SLSQTANITEMPRICINGELEMENTTP

**Slsqtanitempricingelementtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesQuotation` | `SlsQtanItemPricingElement.SalesQuotation` |
| key `SalesQuotationItem` | `SlsQtanItemPricingElement.SalesQuotationItem` |
| key `PricingProcedureStep` | `SlsQtanItemPricingElement.PricingProcedureStep` |
| key `PricingProcedureCounter` | `SlsQtanItemPricingElement.PricingProcedureCounter` |
| `ConditionApplication` | `SlsQtanItemPricingElement.ConditionApplication` |
| `ConditionType` | `SlsQtanItemPricingElement.ConditionType` |
| `ConditionTypeName` | `SlsQtanItemPricingElement.ConditionTypeName` |
| `ConditionCalculationType` | `SlsQtanItemPricingElement.ConditionCalculationType` |
| `ConditionRateAmount` | `SlsQtanItemPricingElement.ConditionRateAmount` |
| `ConditionCurrency` | `SlsQtanItemPricingElement.ConditionCurrency` |
| `ConditionRateRatio` | `SlsQtanItemPricingElement.ConditionRateRatio` |
| `ConditionRateRatioUnit` | `SlsQtanItemPricingElement.ConditionRateRatioUnit` |
| `ConditionBaseAmount` | `SlsQtanItemPricingElement.ConditionBaseAmount` |
| `ConditionAmount` | `SlsQtanItemPricingElement.ConditionAmount` |
| `TransactionCurrency` | `SlsQtanItemPricingElement.TransactionCurrency` |
| `ConditionBaseQuantity` | `SlsQtanItemPricingElement.ConditionBaseQuantity` |
| `ConditionQuantity` | `SlsQtanItemPricingElement.ConditionQuantity` |
| `ConditionQuantityUnit` | `SlsQtanItemPricingElement.ConditionQuantityUnit` |
| `ConditionIsForStatistics` | `SlsQtanItemPricingElement.ConditionIsForStatistics` |
| `ConditionIsManuallyChanged` | `SlsQtanItemPricingElement.ConditionIsManuallyChanged` |
| `ConditionInactiveReason` | `SlsQtanItemPricingElement.ConditionInactiveReason` |
| `ConditionOrigin` | `SlsQtanItemPricingElement.ConditionOrigin` |
| `SalesQuotationType` | `SlsQtanItemPricingElement.SalesQuotationType` |
| `SalesOrganization` | `SlsQtanItemPricingElement.SalesOrganization` |
| `DistributionChannel` | `SlsQtanItemPricingElement.DistributionChannel` |
| `OrganizationDivision` | `SlsQtanItemPricingElement.OrganizationDivision` |
| `_Item` | *Association* |
| `_SalesQuotation` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Sales Quotation Item Pricing Element - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:#TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesQuotation', 'SalesQuotationItem', 'PricingProcedureStep', 'PricingProcedureCounter']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SlsQtanItemPricingElementTP
  as projection on R_SlsQtanItemPricingElementTP as SlsQtanItemPricingElement
{
  key SlsQtanItemPricingElement.SalesQuotation,
  key SlsQtanItemPricingElement.SalesQuotationItem,
  key SlsQtanItemPricingElement.PricingProcedureStep,
  key SlsQtanItemPricingElement.PricingProcedureCounter,

      SlsQtanItemPricingElement.ConditionApplication,
      SlsQtanItemPricingElement.ConditionType,
      SlsQtanItemPricingElement.ConditionTypeName,
      SlsQtanItemPricingElement.ConditionCalculationType,

      @Semantics.amount.currencyCode: 'ConditionCurrency'
      @OData.v2.amount.noDecimalShift: true
      SlsQtanItemPricingElement.ConditionRateAmount,
      SlsQtanItemPricingElement.ConditionCurrency,

      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      SlsQtanItemPricingElement.ConditionRateRatio,
      SlsQtanItemPricingElement.ConditionRateRatioUnit,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @OData.v2.amount.noDecimalShift: true
      SlsQtanItemPricingElement.ConditionBaseAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SlsQtanItemPricingElement.ConditionAmount,
      SlsQtanItemPricingElement.TransactionCurrency,

      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      SlsQtanItemPricingElement.ConditionBaseQuantity,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      SlsQtanItemPricingElement.ConditionQuantity,
      SlsQtanItemPricingElement.ConditionQuantityUnit,

      SlsQtanItemPricingElement.ConditionIsForStatistics,
      SlsQtanItemPricingElement.ConditionIsManuallyChanged,
      SlsQtanItemPricingElement.ConditionInactiveReason,
      SlsQtanItemPricingElement.ConditionOrigin,

      //for DCL
      @Consumption.hidden: true
      SlsQtanItemPricingElement.SalesQuotationType,
      @Consumption.hidden: true
      SlsQtanItemPricingElement.SalesOrganization,
      @Consumption.hidden: true
      SlsQtanItemPricingElement.DistributionChannel,
      @Consumption.hidden: true
      SlsQtanItemPricingElement.OrganizationDivision,

      //Association
      _Item           : redirected to parent I_SalesQuotationItemTP,
      _SalesQuotation : redirected to I_SalesQuotationTP
}
```
