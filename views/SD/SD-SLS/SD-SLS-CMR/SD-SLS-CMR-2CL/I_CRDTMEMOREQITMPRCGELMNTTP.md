---
name: I_CRDTMEMOREQITMPRCGELMNTTP
description: "Crdtmemoreqitmprcgelmnttp"
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
# I_CRDTMEMOREQITMPRCGELMNTTP

**Crdtmemoreqitmprcgelmnttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditMemoRequest` | ✓ | |  |  |  |  |
| `CreditMemoRequestItem` | ✓ | |  |  |  |  |
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
| `CreditMemoRequestType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_CreditMemoRequest` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Crdt Memo Req Item Pricing Element - TP'

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
   semanticKey: ['CreditMemoRequest', 'CreditMemoRequestItem', 'PricingProcedureStep', 'PricingProcedureCounter']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_CrdtMemoReqItmPrcgElmntTP 
  as projection on R_CreditMemoReqItemPrcgElmntTP as CrdtMemoReqItemPricingElement
{
  key CrdtMemoReqItemPricingElement.CreditMemoRequest,
  key CrdtMemoReqItemPricingElement.CreditMemoRequestItem,
  key CrdtMemoReqItemPricingElement.PricingProcedureStep,
  key CrdtMemoReqItemPricingElement.PricingProcedureCounter,
  
  CrdtMemoReqItemPricingElement.ConditionApplication,
  CrdtMemoReqItemPricingElement.ConditionType,
  CrdtMemoReqItemPricingElement.ConditionCalculationType,
  
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  @OData.v2.amount.noDecimalShift: true
  CrdtMemoReqItemPricingElement.ConditionRateAmount,
  CrdtMemoReqItemPricingElement.ConditionCurrency,
  
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  CrdtMemoReqItemPricingElement.ConditionRateRatio,
  CrdtMemoReqItemPricingElement.ConditionRateRatioUnit,
  
  @Semantics.amount.currencyCode: 'TransactionCurrency'  
  @OData.v2.amount.noDecimalShift: true
  CrdtMemoReqItemPricingElement.ConditionBaseAmount,
  @Semantics.amount.currencyCode: 'TransactionCurrency'  
  CrdtMemoReqItemPricingElement.ConditionAmount,
  CrdtMemoReqItemPricingElement.TransactionCurrency,
  
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
  CrdtMemoReqItemPricingElement.ConditionBaseQuantity,
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
  CrdtMemoReqItemPricingElement.ConditionQuantity,
  CrdtMemoReqItemPricingElement.ConditionQuantityUnit,
  
  CrdtMemoReqItemPricingElement.ConditionIsForStatistics,
  CrdtMemoReqItemPricingElement.ConditionIsManuallyChanged,
  CrdtMemoReqItemPricingElement.ConditionInactiveReason,
  
  //for DCL
  @Consumption.hidden: true
  CrdtMemoReqItemPricingElement.CreditMemoRequestType,
  @Consumption.hidden: true
  CrdtMemoReqItemPricingElement.SalesOrganization,
  @Consumption.hidden: true
  CrdtMemoReqItemPricingElement.DistributionChannel,
  @Consumption.hidden: true
  CrdtMemoReqItemPricingElement.OrganizationDivision,
  
  //Association
  _Item              : redirected to parent I_CreditMemoRequestItemTP,
  _CreditMemoRequest : redirected to I_CreditMemoRequestTP  
}
```
