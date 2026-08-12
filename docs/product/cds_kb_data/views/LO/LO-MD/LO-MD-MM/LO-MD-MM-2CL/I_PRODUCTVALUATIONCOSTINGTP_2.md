---
name: I_PRODUCTVALUATIONCOSTINGTP_2
description: "Productvaluationcostingtp 2"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - transactional-processing
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTVALUATIONCOSTINGTP_2

**Productvaluationcostingtp 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  |  |  |
| `ValuationArea` | ✓ | |  |  |  |  |
| `ValuationType` | ✓ | |  |  |  |  |
| `ProductIsCostedWithQtyStruc` |  | |  |  |  |  |
| `IsMaterialRelatedOrigin` |  | |  |  |  |  |
| `CostOriginGroup` |  | |  |  |  |  |
| `CostingOverheadGroup` |  | |  |  |  |  |
| `PlannedPrice1InCoCodeCrcy` |  | |  |  |  |  |
| `PlannedPrice2InCoCodeCrcy` |  | |  |  |  |  |
| `PlannedPrice3InCoCodeCrcy` |  | |  |  |  |  |
| `FuturePlndPrice1ValdtyDate` |  | |  |  |  |  |
| `FuturePlndPrice2ValdtyDate` |  | |  |  |  |  |
| `FuturePlndPrice3ValdtyDate` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_ProductValuation` | | ✓ | | | | |
| `_CostOriginGroupText` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CurrencyText` | | ✓ | | | | |
| `_ProductDescription` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Valuation Costing - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    usageType.serviceQuality: #C,
    usageType.sizeCategory : #XL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProductValuationCostingTP_2
  as projection on R_ProductValuationCostingTP as ProductValuationCosting
{
      @ObjectModel.text.association: '_ProductDescription'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key ValuationArea,
  key ValuationType,
      @Semantics.booleanIndicator: true
      ProductIsCostedWithQtyStruc,
      @Semantics.booleanIndicator: true
      IsMaterialRelatedOrigin,
      @ObjectModel.text.association: '_CostOriginGroupText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_CostOriginGroupStdVH', element : 'CostOriginGroup'} , useAsTemplate: true }]
      CostOriginGroup,
//      @ObjectModel.text.association: '_CostingOverheadGroup._CostingOverheadGroupText'      
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_CostingOverheadGroup', element : 'CostingOverheadGroup'} , useAsTemplate: true }]
      CostingOverheadGroup,
      @Semantics.amount.currencyCode: 'Currency'
      PlannedPrice1InCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      PlannedPrice2InCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      PlannedPrice3InCoCodeCrcy,
      FuturePlndPrice1ValdtyDate,
      FuturePlndPrice2ValdtyDate,
      FuturePlndPrice3ValdtyDate,
      @ObjectModel.text.association: '_CurrencyText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_CurrencyStdVH', element : 'Currency'} , useAsTemplate: true }]
      Currency,
      /* Associations */
      _Product          : redirected to I_ProductTP_2,
      _ProductValuation : redirected to parent I_ProductValuationTP_2,
      _CostOriginGroupText,
      _Currency,
      _CurrencyText,
      _ProductDescription
//      _CostingOverheadGroup
}
```
