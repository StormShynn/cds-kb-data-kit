---
name: I_SLSQUOTATIONPRICINGELEMENTTP
description: Slsquotationpricingelementtp
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
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SLSQUOTATIONPRICINGELEMENTTP

**Slsquotationpricingelementtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesQuotation` | ✓ | |  |  |  |  |
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
| `SalesQuotationType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_SalesQuotation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Quotation Pricing Element - TP'

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
   semanticKey: ['SalesQuotation', 'PricingProcedureStep', 'PricingProcedureCounter']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SlsQuotationPricingElementTP 
  as projection on R_SlsQuotationPricingElementTP as SalesQuotationPricingElement {
  key SalesQuotationPricingElement.SalesQuotation,
  key SalesQuotationPricingElement.PricingProcedureStep,
  key SalesQuotationPricingElement.PricingProcedureCounter,
  
  SalesQuotationPricingElement.ConditionApplication,
  SalesQuotationPricingElement.ConditionType,
  SalesQuotationPricingElement.ConditionTypeName,
  SalesQuotationPricingElement.ConditionCalculationType,

  
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  @OData.v2.amount.noDecimalShift: true
  SalesQuotationPricingElement.ConditionRateAmount,
  SalesQuotationPricingElement.ConditionCurrency,
    
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  SalesQuotationPricingElement.ConditionRateRatio,
  SalesQuotationPricingElement.ConditionRateRatioUnit,

  @Semantics.amount.currencyCode: 'TransactionCurrency'  
  @OData.v2.amount.noDecimalShift: true  
  SalesQuotationPricingElement.ConditionBaseAmount,
  @Semantics.amount.currencyCode: 'TransactionCurrency'  
  SalesQuotationPricingElement.ConditionAmount,
  SalesQuotationPricingElement.TransactionCurrency,
      
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
  SalesQuotationPricingElement.ConditionBaseQuantity,
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'   
  SalesQuotationPricingElement.ConditionQuantity,
  SalesQuotationPricingElement.ConditionQuantityUnit,

  SalesQuotationPricingElement.ConditionIsForStatistics,
  SalesQuotationPricingElement.ConditionIsManuallyChanged,
  SalesQuotationPricingElement.ConditionInactiveReason,
  SalesQuotationPricingElement.ConditionOrigin,
    
  //for DCL
  @Consumption.hidden: true
  SalesQuotationPricingElement.SalesQuotationType,
  @Consumption.hidden: true
  SalesQuotationPricingElement.SalesOrganization,
  @Consumption.hidden: true
  SalesQuotationPricingElement.DistributionChannel,
  @Consumption.hidden: true
  SalesQuotationPricingElement.OrganizationDivision,

  //Association
  _SalesQuotation : redirected to parent I_SalesQuotationTP      
}
```
