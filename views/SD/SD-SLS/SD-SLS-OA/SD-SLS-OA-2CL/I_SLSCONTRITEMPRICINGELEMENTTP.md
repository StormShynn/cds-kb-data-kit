---
name: I_SLSCONTRITEMPRICINGELEMENTTP
description: Slscontritempricingelementtp
app_component: SD-SLS-OA-2CL
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
  - pricing
  - item-level
  - component:SD-SLS-OA-2CL
  - lob:Sales & Distribution
---
# I_SLSCONTRITEMPRICINGELEMENTTP

**Slscontritempricingelementtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesContract` | ✓ | |  |  |  |  |
| `SalesContractItem` | ✓ | |  |  |  |  |
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
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
| `SalesContractType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_SalesContract` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Contract Item Pricing Element - TP'

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
   semanticKey: ['SalesContract', 'SalesContractItem', 'PricingProcedureStep', 'PricingProcedureCounter']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SlsContrItemPricingElementTP
  as projection on R_SlsContrItemPricingElementTP as SalesContractItemPrcgElmnt
{
  key SalesContractItemPrcgElmnt.SalesContract,
  key SalesContractItemPrcgElmnt.SalesContractItem,
  key SalesContractItemPrcgElmnt.PricingProcedureStep,
  key SalesContractItemPrcgElmnt.PricingProcedureCounter,

      SalesContractItemPrcgElmnt.ConditionApplication,
      SalesContractItemPrcgElmnt.ConditionType,
      SalesContractItemPrcgElmnt.ConditionCalculationType,

      @Semantics.amount.currencyCode: 'ConditionCurrency'
      @OData.v2.amount.noDecimalShift: true
      SalesContractItemPrcgElmnt.ConditionRateAmount,
      SalesContractItemPrcgElmnt.ConditionCurrency,

      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      SalesContractItemPrcgElmnt.ConditionRateRatio,
      SalesContractItemPrcgElmnt.ConditionRateRatioUnit,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @OData.v2.amount.noDecimalShift: true
      SalesContractItemPrcgElmnt.ConditionBaseAmount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesContractItemPrcgElmnt.ConditionAmount,
      SalesContractItemPrcgElmnt.TransactionCurrency,

      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      SalesContractItemPrcgElmnt.ConditionBaseQuantity,

      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      SalesContractItemPrcgElmnt.ConditionQuantity,
      SalesContractItemPrcgElmnt.ConditionQuantityUnit,

      SalesContractItemPrcgElmnt.ConditionIsForStatistics,
      SalesContractItemPrcgElmnt.ConditionIsManuallyChanged,
      SalesContractItemPrcgElmnt.ConditionInactiveReason,

      //for DCL
      @Consumption.hidden: true
      SalesContractItemPrcgElmnt.SalesContractType,
      @Consumption.hidden: true
      SalesContractItemPrcgElmnt.SalesOrganization,
      @Consumption.hidden: true
      SalesContractItemPrcgElmnt.DistributionChannel,
      @Consumption.hidden: true
      SalesContractItemPrcgElmnt.OrganizationDivision,

      //Association
      _Item          : redirected to parent I_SalesContractItemTP,
      _SalesContract : redirected to I_SalesContractTP

}
```
