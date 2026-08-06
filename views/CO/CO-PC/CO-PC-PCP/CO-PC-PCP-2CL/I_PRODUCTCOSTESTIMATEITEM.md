---
name: I_PRODUCTCOSTESTIMATEITEM
description: Productcostestimateitem
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - product
  - item-level
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_PRODUCTCOSTESTIMATEITEM

**Productcostestimateitem**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CostingReferenceObject` | `CostingReferenceObject` |
| key `CostEstimate` | `CostEstimate` |
| key `CostingType` | `CostingType` |
| key `CostingDate` | `CostingDate` |
| key `CostingVersion` | `CostingVersion` |
| key `ValuationVariant` | `ValuationVariant` |
| key `CostIsEnteredManually` | `CostIsEnteredManually` |
| key `CostingItem` | `CostingItem` |
| `CostingItemCategory` | `CostingItemCategory` |
| `Plant` | `Plant` |
| `Product` | `Product` |
| `ValuationType` | `ValuationType` |
| `ControllingAreaCurrency` | `ControllingAreaCurrency` |
| `TotalPriceInInCtrlgAreaCrcy` | `TotalPriceInInCtrlgAreaCrcy` |
| `FixedPriceInCtrlgAreaCrcy` | `FixedPriceInCtrlgAreaCrcy` |
| `TotalAmountInCtrlgAreaCrcy` | `TotalAmountInCtrlgAreaCrcy` |
| `FixedAmountInCtrlgAreaCrcy` | `FixedAmountInCtrlgAreaCrcy` |
| `CompanyCodeCurrency` | `CompanyCodeCurrency` |
| `TotalPriceInCompanyCodeCrcy` | `TotalPriceInCompanyCodeCrcy` |
| `FixedPriceInCompanyCodeCrcy` | `FixedPriceInCompanyCodeCrcy` |
| `TotalAmountInCoCodeCrcy` | `TotalAmountInCoCodeCrcy` |
| `FixedAmountInCoCodeCrcy` | `FixedAmountInCoCodeCrcy` |
| `BaseUnit` | `BaseUnit` |
| `QuantityInBaseUnit` | `QuantityInBaseUnit` |
| `AssyScrapQuantityInValnQtyUnit` | `AssyScrapQuantityInValnQtyUnit` |
| `CompScrapQuantityInValnQtyUnit` | `CompScrapQuantityInValnQtyUnit` |
| `CostingPriceUnitQty` | `CostingPriceUnitQty` |
| `CostingPriceQtyUnit` | `CostingPriceQtyUnit` |
| `CostElement` | `CostElement` |
| `CostOriginGroup` | `CostOriginGroup` |
| `CostComponent` | `CostComponent` |
| `AuxiliaryCostComponent` | `AuxiliaryCostComponent` |
| `Creditor` | `Creditor` |
| `TransferCostEstimate` | `TransferCostEstimate` |
| `TransferCostingType` | `TransferCostingType` |
| `TransferCostingDate` | `TransferCostingDate` |
| `TransferCostingVersion` | `TransferCostingVersion` |
| `TransferValuationVariant` | `TransferValuationVariant` |
| `CostCenter` | `CostCenter` |
| `ProfitCenter` | `ProfitCenter` |
| `BusinessArea` | `BusinessArea` |
| `CostCtrActivityType` | `CostCtrActivityType` |
| `CostingObject` | `CostingObject` |
| `Operation` | `Operation` |
| `PurchasingInfoRecord` | `PurchasingInfoRecord` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PurchasingInfoRecordCategory` | `PurchasingInfoRecordCategory` |
| `PurchasingDocument` | `PurchasingDocument` |
| `PurchasingDocumentItem` | `PurchasingDocumentItem` |
| `CostingValuationStrategy` | `CostingValuationStrategy` |
| `ProductValnPurgInfoRecdStrgy` | `ProductValnPurgInfoRecdStrgy` |
| `BillOfMaterialItemNumber` | `BillOfMaterialItemNumber` |
| `CostEstIsMixedCosting` | `CostEstIsMixedCosting` |
| `CostgMixingRatioValue` | `CostgMixingRatioValue` |
| `ProcmtAltvCostEstimate` | `ProcmtAltvCostEstimate` |
| `CostingItemIsAssembly` | `CostingItemIsAssembly` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `CostCompSplitIsExisting` | `CostCompSplitIsExisting` |
| `HasError` | `HasError` |
| `_CostEstimate` | *Association* |
| `_Product` | *Association* |
| `_ProductText` | *Association* |
| `_CostingType` | *Association* |
| `_CostingTypeText` | *Association* |
| `_TransferCostingTypeText` | *Association* |
| `_CostingVersion` | *Association* |
| `_CostingVersionText` | *Association* |
| `_CostingVersionText_2` | *Association* |
| `_TransferCostingVersionText` | *Association* |
| `_ValuationVariant` | *Association* |
| `_CostingValuationVarText` | *Association* |
| `_TransferValuationVarText` | *Association* |
| `_CompanyCodeCurrency` | *Association* |
| `_ControllingAreaCurrency` | *Association* |
| `_BaseUnitOfMeasure` | *Association* |
| `_CostingUnitOfMeasure` | *Association* |
| `_WBSElement` | *Association* |
| `_CostOriginGroupText` | *Association* |
| `_CostComponentText` | *Association* |
| `_CostCenterText` | *Association* |
| `_ProfitCenterText` | *Association* |
| `_BusinessAreaText` | *Association* |
| `_PlantText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostEstimate` | `I_ProductCostEstimate` | [1..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_CostingType` | `I_CostingType` | [0..1] |
| `_CostingTypeText` | `I_CostingTypeText` | [0..*] |
| `_TransferCostingTypeText` | `I_CostingTypeText` | [0..*] |
| `_CostingVersion` | `I_CostingVersion` | [0..1] |
| `_CostingVersionText` | `I_CostingVersionText` | [0..*] |
| `_CostingVersionText_2` | `I_CostingVersionText` | [0..*] |
| `_TransferCostingVersionText` | `I_CostingVersionText` | [0..*] |
| `_ValuationVariant` | `I_CostingValuationVariant` | [1..1] |
| `_CostingValuationVarText` | `I_CostingValuationVarText` | [0..*] |
| `_TransferValuationVarText` | `I_CostingValuationVarText` | [0..*] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |
| `_ControllingAreaCurrency` | `I_Currency` | [1..1] |
| `_BaseUnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_CostingUnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_CostOriginGroupText` | `I_CostOriginGroupText` | [0..*] |
| `_CostComponentText` | `I_CostComponentText` | [0..*] |
| `_CostCenterText` | `I_CostCenterText` | [0..*] |
| `_ProfitCenterText` | `I_ProfitCenterText` | [0..*] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_PlantText` | `I_Plant` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IPRODCOSTESI',
  compiler.compareFilter: true
}

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #NOT_REQUIRED
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@Analytics: {
  dataCategory: #FACT,
  internalName: #LOCAL
}

@ObjectModel: {
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE],
  modelingPattern: #ANALYTICAL_FACT,
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory: #XL
  }
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Product Cost Estimate Item'
@Metadata.ignorePropagatedAnnotations: true

define view I_ProductCostEstimateItem
  as select from P_CKIS
  association [1..1] to I_ProductCostEstimate     as _CostEstimate               on  $projection.CostingReferenceObject = _CostEstimate.CostingReferenceObject
                                                                                 and $projection.CostEstimate           = _CostEstimate.CostEstimate
                                                                                 and $projection.CostingType            = _CostEstimate.CostingType
                                                                                 and $projection.CostingDate            = _CostEstimate.CostingDate
                                                                                 and $projection.CostingVersion         = _CostEstimate.CostingVersion
                                                                                 and $projection.ValuationVariant       = _CostEstimate.ValuationVariant
                                                                                 and $projection.CostIsEnteredManually  = _CostEstimate.CostIsEnteredManually
  association [0..1] to I_Product                 as _Product                    on  $projection.Product = _Product.Product
  association [0..*] to I_ProductText             as _ProductText                on  $projection.Product = _ProductText.Product

  association [0..1] to I_CostingType             as _CostingType                on  $projection.CostingType = _CostingType.CostingType
  association [0..*] to I_CostingTypeText         as _CostingTypeText            on  $projection.CostingType = _CostingTypeText.CostingType
  association [0..*] to I_CostingTypeText         as _TransferCostingTypeText    on  $projection.TransferCostingType = _TransferCostingTypeText.CostingType

  association [0..1] to I_CostingVersion          as _CostingVersion             on  $projection.CostingVersion   = _CostingVersion.CostingVersion
                                                                                 and $projection.CostingType      = _CostingVersion.CostingType
                                                                                 and $projection.ValuationVariant = _CostingVersion.ValuationVariant
  association [0..*] to I_CostingVersionText      as _CostingVersionText         on  $projection.CostingVersion = _CostingVersionText.CostingVersion
  association [0..*] to I_CostingVersionText      as _CostingVersionText_2       on  $projection.CostingVersion   = _CostingVersionText_2.CostingVersion
                                                                                 and $projection.CostingType      = _CostingVersionText_2.CostingType
                                                                                 and $projection.ValuationVariant = _CostingVersionText_2.ValuationVariant
  association [0..*] to I_CostingVersionText      as _TransferCostingVersionText on  $projection.TransferCostingVersion   = _TransferCostingVersionText.CostingVersion
                                                                                 and $projection.TransferCostingType      = _TransferCostingVersionText.CostingType
                                                                                 and $projection.TransferValuationVariant = _TransferCostingVersionText.ValuationVariant

  association [1..1] to I_CostingValuationVariant as _ValuationVariant           on  $projection.ValuationVariant = _ValuationVariant.ValuationVariant
  association [0..*] to I_CostingValuationVarText as _CostingValuationVarText    on  $projection.ValuationVariant = _CostingValuationVarText.ValuationVariant
  association [0..*] to I_CostingValuationVarText as _TransferValuationVarText   on  $projection.TransferValuationVariant = _TransferValuationVarText.ValuationVariant

  association [1..1] to I_Currency                as _CompanyCodeCurrency        on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [1..1] to I_Currency                as _ControllingAreaCurrency    on  $projection.ControllingAreaCurrency = _ControllingAreaCurrency.Currency
  association [0..1] to I_UnitOfMeasure           as _BaseUnitOfMeasure          on  $projection.BaseUnit = _BaseUnitOfMeasure.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure           as _CostingUnitOfMeasure       on  $projection.CostingPriceQtyUnit = _CostingUnitOfMeasure.UnitOfMeasure
  association [0..1] to I_WBSElementBasicData     as _WBSElement                 on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID
  association [0..*] to I_CostOriginGroupText     as _CostOriginGroupText        on  $projection.CostOriginGroup = _CostOriginGroupText.CostOriginGroup
  association [0..*] to I_CostComponentText       as _CostComponentText          on  $projection.CostComponent = _CostComponentText.CostComponent
  association [0..*] to I_CostCenterText          as _CostCenterText             on  $projection.CostCenter = _CostCenterText.CostCenter
  association [0..*] to I_ProfitCenterText        as _ProfitCenterText           on  $projection.ProfitCenter = _ProfitCenterText.ProfitCenter
  association [0..*] to I_BusinessAreaText        as _BusinessAreaText           on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [1..1] to I_Plant                   as _PlantText                  on  $projection.Plant = _PlantText.Plant

{
  key   CostingReferenceObject,
  key   CostEstimate,
        @ObjectModel.text.association: '_CostingTypeText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingTypeStdVH' , element: 'CostingType' }, useAsTemplate: true }]
  key   CostingType,
        @Semantics.businessDate.at: true
  key   CostingDate,
        @ObjectModel.text.association: '_CostingVersionText'
  key   CostingVersion,
        @ObjectModel.text.association: '_CostingValuationVarText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingValuationVariantStdVH' , element: 'ValuationVariant' }, useAsTemplate: true }]
  key   ValuationVariant,
  key   CostIsEnteredManually,
  key   CostingItem,

        CostingItemCategory,
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_PlantStdVH' , element: 'Plant' }, useAsTemplate: true }]
        Plant,
        @ObjectModel.text.association: '_ProductText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_ProductStdVH' , element: 'Product' }, useAsTemplate: true }]
        Product,
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_MaterialValuationTypeVH' , element: 'InventoryValuationType' }, useAsTemplate: true }]
        ValuationType,

        @Semantics.currencyCode: true
        @ObjectModel.foreignKey.association: '_ControllingAreaCurrency'
        ControllingAreaCurrency,
        @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
        TotalPriceInInCtrlgAreaCrcy,
        @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
        FixedPriceInCtrlgAreaCrcy,
        @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
        TotalAmountInCtrlgAreaCrcy,
        @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
        FixedAmountInCtrlgAreaCrcy,

        @Semantics.currencyCode: true
        @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
        CompanyCodeCurrency,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        TotalPriceInCompanyCodeCrcy,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        FixedPriceInCompanyCodeCrcy,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        TotalAmountInCoCodeCrcy,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        FixedAmountInCoCodeCrcy,

        @Semantics.unitOfMeasure: true
        @ObjectModel.foreignKey.association: '_BaseUnitOfMeasure'
        BaseUnit,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        QuantityInBaseUnit,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        AssyScrapQuantityInValnQtyUnit,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        CompScrapQuantityInValnQtyUnit,
        @Semantics.quantity.unitOfMeasure: 'CostingPriceQtyUnit'
        CostingPriceUnitQty,
        @Semantics.unitOfMeasure: true
        @ObjectModel.foreignKey.association: '_CostingUnitOfMeasure'
        CostingPriceQtyUnit,

        CostElement,
        @ObjectModel.text.association: '_CostOriginGroupText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostOriginGroupStdVH' , element: 'CostOriginGroup' }, useAsTemplate: true }]
        CostOriginGroup,
        @ObjectModel.text.association: '_CostComponentText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostComponentStdVH' , element: 'CostComponent' }, useAsTemplate: true }]
        CostComponent,
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostComponentStdVH' , element: 'CostComponent' }, useAsTemplate: true }]
        AuxiliaryCostComponent,
        Creditor,

        TransferCostEstimate,
        @ObjectModel.text.association: '_TransferCostingTypeText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingTypeStdVH' , element: 'CostingType' }, useAsTemplate: true }]
        TransferCostingType,
        TransferCostingDate,
        @ObjectModel.text.association: '_TransferCostingVersionText'
        TransferCostingVersion,
        @ObjectModel.text.association: '_TransferValuationVarText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingValuationVariantStdVH' , element: 'ValuationVariant' }, useAsTemplate: true }]
        TransferValuationVariant,

        @ObjectModel.text.association: '_CostCenterText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostCenterStdVH' , element: 'CostCenter' }, useAsTemplate: true }]
        CostCenter,
        @ObjectModel.text.association: '_ProfitCenterText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_ProfitCenterStdVH' , element: 'ProfitCenter' }, useAsTemplate: true }]
        ProfitCenter,
        @ObjectModel.text.association: '_BusinessAreaText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_BusinessAreaStdVH' , element: 'BusinessArea' }, useAsTemplate: true }]
        BusinessArea,
        CostCtrActivityType,
        CostingObject,
        Operation,
        PurchasingInfoRecord,
        PurchasingOrganization,
        PurchasingInfoRecordCategory,
        PurchasingDocument,
        PurchasingDocumentItem,
        CostingValuationStrategy,
        ProductValnPurgInfoRecdStrgy,
        BillOfMaterialItemNumber,
        CostEstIsMixedCosting,
        CostgMixingRatioValue,
        ProcmtAltvCostEstimate,
        CostingItemIsAssembly,

        @ObjectModel.foreignKey.association: '_WBSElement'
        WBSElementInternalID,
        CostCompSplitIsExisting,
        HasError,

        // associations
        _CostEstimate,
        _Product,
        _CostingType,
        _CostingVersion,
        _ValuationVariant,
        _CompanyCodeCurrency,
        _ControllingAreaCurrency,
        _BaseUnitOfMeasure,
        _CostingUnitOfMeasure,
        _WBSElement,
        _CostingTypeText,
        @API.element.releaseState: #DEPRECATED
        @API.element.successor: '_CostingVersionText_2'
        _CostingVersionText,
        _CostingVersionText_2,
        _CostingValuationVarText,
        _CostOriginGroupText,
        _CostComponentText,
        _CostCenterText,
        _ProfitCenterText,
        _BusinessAreaText,
        _ProductText,
        _PlantText,
        _TransferCostingTypeText,
        _TransferCostingVersionText,
        _TransferValuationVarText
}

where
      ControllingLedger      = '00'
  and CostingReferenceObject = '0'
```
