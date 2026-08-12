---
name: I_PRODUCTCOSTESTIMATE
description: "Productcostestimate"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - product
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_PRODUCTCOSTESTIMATE

**Productcostestimate**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostingReferenceObject` | ✓ | |  |  |  |  |
| `CostEstimate` | ✓ | |  |  |  |  |
| `CostingType` | ✓ | |  |  |  |  |
| `CostingDate` | ✓ | |  |  |  |  |
| `CostingVersion` | ✓ | |  |  |  |  |
| `ValuationVariant` | ✓ | |  |  |  |  |
| `CostIsEnteredManually` | ✓ | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ValuationArea` |  | |  |  |  |  |
| `ValuationType` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CompanyCode` |  | | `_ValuationArea` | `CompanyCode` |  |  |
| `CostEstimateValidityStartDate` |  | |  |  |  |  |
| `CostEstimateValidityEndDate` |  | |  |  |  |  |
| `ValuationDate` |  | |  |  |  |  |
| `QuantityStructureDate` |  | |  |  |  |  |
| `ProductionVersion` |  | |  |  |  |  |
| `BillOfMaterial` |  | |  |  |  |  |
| `ProductBOMUsage` |  | |  |  |  |  |
| `AlternativeBillOfMaterial` |  | |  |  |  |  |
| `TaskListGroup` |  | |  |  |  |  |
| `TaskListType` |  | |  |  |  |  |
| `TaskListGroupCounter` |  | |  |  |  |  |
| `CostingItemIsProductComp` |  | |  |  |  |  |
| `CostEstIsMarkedForDeletion` |  | |  |  |  |  |
| `CostingLotSize` |  | |  |  |  |  |
| `ValuationQuantityUnit` |  | |  |  |  |  |
| `CostEstimateCreatedByUser` |  | |  |  |  |  |
| `AdditiveCostCreatedByUser` |  | |  |  |  |  |
| `CostEstimateCreationDate` |  | |  |  |  |  |
| `CostEstimateMarkingDate` |  | |  |  |  |  |
| `CostEstimateMarkingUser` |  | |  | `CostEstimateMarkedByUser` |  |  |
| `CostEstimateMarkedByUser` |  | |  |  |  |  |
| `CostEstimateReleaseDate` |  | |  |  |  |  |
| `CostEstimateReleaseUser` |  | |  | `CostEstimateReleasedByUser` |  |  |
| `CostEstimateReleasedByUser` |  | |  |  |  |  |
| `CostEstimateStatus` |  | |  |  |  |  |
| `CostingErrorMessageType` |  | |  |  |  |  |
| `CostEstimateIsReleased` |  | |  |  |  |  |
| `CostEstIsMixedCosting` |  | |  |  |  |  |
| `CostEstimateIsForProcmtAltv` |  | |  |  |  |  |
| `ProcmtAltvCostEstimate` |  | |  |  |  |  |
| `ProcessCategory` |  | |  |  |  |  |
| `CostgMixingRatioValue` |  | |  |  |  |  |
| `ProcmtAltvValuationVariant` |  | |  |  |  |  |
| `SpecialProcurementType` |  | |  |  |  |  |
| `ProductProcurementType` |  | |  |  |  |  |
| `SpecialProcurementPlant` |  | |  |  |  |  |
| `CostingSheet` |  | |  |  |  |  |
| `CostingOverheadType` |  | |  |  |  |  |
| `ProductValuationStrategy` |  | |  |  |  |  |
| `ProductValnPurgInfoRecdStrgy` |  | |  |  |  |  |
| `CostingVariant` |  | |  |  |  |  |
| `Ledger` |  | |  |  |  |  |
| `ReferenceLedger` |  | |  |  |  |  |
| `CostingOverheadGroup` |  | |  |  |  |  |
| `CostingOverhead` |  | |  |  |  |  |
| `PostingPeriod` |  | |  |  |  |  |
| `PostingFiscalYear` |  | |  |  |  |  |
| `CostingErrorLogID` |  | |  |  |  |  |
| `CostEstimateTransferControl` |  | |  |  |  |  |
| `LowLevelCode` |  | |  |  |  |  |
| `CostEstimateCostingLevel` |  | |  |  |  |  |
| `CostComponentStructure` |  | |  |  |  |  |
| `AuxiliaryCostCompStructure` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `ControllingAreaCurrency` |  | |  |  |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `ComponentBreakdown` |  | |  |  |  |  |
| `EstimatedCostCostingRun` |  | |  |  |  |  |
| `EstimatedCostCostingRunDate` |  | |  |  |  |  |
| `ConfiguredProduct` |  | |  |  |  |  |
| `ProductIsCostedWithQtyStruc` |  | |  |  |  |  |
| `_ProductCostEstimateItem` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_ProductPlant` | | ✓ | | | | |
| `_ProductValuation` | | ✓ | | | | |
| `_CostingType` | | ✓ | | | | |
| `_CostingTypeText` | | ✓ | | | | |
| `_CostingVersion` | | ✓ | | | | |
| `_CostingVersionText` | | ✓ | | | | |
| `_CostingVersionText_2` | | ✓ | | | | |
| `_CostingVariant` | | ✓ | | | | |
| `_CostingVariantText` | | ✓ | | | | |
| `_ValuationVariant` | | ✓ | | | | |
| `_CostingValuationVarText` | | ✓ | | | | |
| `_CostingOverheadGroupText` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ValuationArea` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ControllingAreaCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_LedgerText` | | ✓ | | | | |
| `_ProfitCenterText` | | ✓ | | | | |
| `_ProfitCenterText_2` | | ✓ | | | | |
| `_ControllingAreaText` | | ✓ | | | | |
| `_CompanyCodeText` | | ✓ | | | | |
| `_PlantText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductCostEstimateItem` | `I_ProductCostEstimateItem` | [0..*] |
| `_Product` | `I_Product` | [1..1] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_ProductPlant` | `I_ProductPlantBasic` | [1..1] |
| `_ProductValuation` | `I_ProductValuationBasic` | [0..1] |
| `_CostingType` | `I_CostingType` | [1..1] |
| `_CostingTypeText` | `I_CostingTypeText` | [0..*] |
| `_CostingVersion` | `I_CostingVersion` | [0..1] |
| `_CostingVersionText` | `I_CostingVersionText` | [0..*] |
| `_CostingVersionText_2` | `I_CostingVersionText` | [0..*] |
| `_CostingVariant` | `I_CostingVariant` | [1..1] |
| `_CostingVariantText` | `I_CostingVariantText` | [0..*] |
| `_ValuationVariant` | `I_CostingValuationVariant` | [1..1] |
| `_CostingValuationVarText` | `I_CostingValuationVarText` | [0..*] |
| `_CostingOverheadGroupText` | `I_CostingOverheadGroupText` | [0..*] |
| `_Plant` | `I_Plant` | [0..1] |
| `_ValuationArea` | `I_ValuationArea` | [1..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ControllingAreaCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_LedgerText` | `I_LedgerText` | [0..*] |
| `_ProfitCenterText` | `I_ProfitCenterText` | [0..*] |
| `_ProfitCenterText_2` | `I_ProfitCenterText` | [0..1] |
| `_ControllingAreaText` | `I_ControllingArea` | [1..1] |
| `_CompanyCodeText` | `I_CompanyCode` | [1..1] |
| `_PlantText` | `I_Plant` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IPRODCOSTEST',
  compiler.compareFilter: true
}

@AccessControl.authorizationCheck: #MANDATORY

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,#UI_PROVIDER_PROJECTION_SOURCE],
  modelingPattern: #ANALYTICAL_FACT,
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory: #L
  }
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Analytics: {
  dataCategory: #FACT,
  internalName: #LOCAL
}

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Product Cost Estimate'

define view I_ProductCostEstimate
  as select from P_KEKO
  association [0..*] to I_ProductCostEstimateItem  as _ProductCostEstimateItem  on  $projection.CostingReferenceObject = _ProductCostEstimateItem.CostingReferenceObject
                                                                                and $projection.CostEstimate           = _ProductCostEstimateItem.CostEstimate
                                                                                and $projection.CostingType            = _ProductCostEstimateItem.CostingType
                                                                                and $projection.CostingDate            = _ProductCostEstimateItem.CostingDate
                                                                                and $projection.CostingVersion         = _ProductCostEstimateItem.CostingVersion
                                                                                and $projection.ValuationVariant       = _ProductCostEstimateItem.ValuationVariant
                                                                                and $projection.CostIsEnteredManually  = _ProductCostEstimateItem.CostIsEnteredManually

  association [1..1] to I_Product                  as _Product                  on  $projection.Product = _Product.Product
  association [0..*] to I_ProductText              as _ProductText              on  $projection.Product = _ProductText.Product
  association [1..1] to I_ProductPlantBasic        as _ProductPlant             on  $projection.Product = _ProductPlant.Product
                                                                                and $projection.Plant   = _ProductPlant.Plant
  association [0..1] to I_ProductValuationBasic    as _ProductValuation         on  $projection.Plant         = _ProductValuation.ValuationArea
                                                                                and $projection.Product       = _ProductValuation.Product
                                                                                and $projection.ValuationType = _ProductValuation.ValuationType
  association [1..1] to I_CostingType              as _CostingType              on  $projection.CostingType = _CostingType.CostingType
  association [0..*] to I_CostingTypeText          as _CostingTypeText          on  $projection.CostingType = _CostingTypeText.CostingType

  association [0..1] to I_CostingVersion           as _CostingVersion           on  $projection.CostingVersion   = _CostingVersion.CostingVersion
                                                                                and $projection.CostingType      = _CostingVersion.CostingType
                                                                                and $projection.ValuationVariant = _CostingVersion.ValuationVariant
  association [0..*] to I_CostingVersionText       as _CostingVersionText       on  $projection.CostingVersion = _CostingVersionText.CostingVersion
  association [0..*] to I_CostingVersionText       as _CostingVersionText_2     on  $projection.CostingVersion   = _CostingVersionText_2.CostingVersion
                                                                                and $projection.CostingType      = _CostingVersionText_2.CostingType
                                                                                and $projection.ValuationVariant = _CostingVersionText_2.ValuationVariant

  association [1..1] to I_CostingVariant           as _CostingVariant           on  $projection.CostingVariant = _CostingVariant.CostingVariant
  association [0..*] to I_CostingVariantText       as _CostingVariantText       on  $projection.CostingVariant = _CostingVariantText.CostingVariant

  association [1..1] to I_CostingValuationVariant  as _ValuationVariant         on  $projection.ValuationVariant = _ValuationVariant.ValuationVariant
  association [0..*] to I_CostingValuationVarText  as _CostingValuationVarText  on  $projection.ValuationVariant = _CostingValuationVarText.ValuationVariant

  association [0..*] to I_CostingOverheadGroupText as _CostingOverheadGroupText on  $projection.CostingOverheadGroup = _CostingOverheadGroupText.CostingOverheadGroup

  association [0..1] to I_Plant                    as _Plant                    on  $projection.Plant = _Plant.Plant
  association [1..1] to I_ValuationArea            as _ValuationArea            on  $projection.ValuationArea = _ValuationArea.ValuationArea
  association [0..1] to I_ControllingArea          as _ControllingArea          on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_Currency                 as _ControllingAreaCurrency  on  $projection.ControllingAreaCurrency = _ControllingAreaCurrency.Currency
  association [0..1] to I_Currency                 as _CompanyCodeCurrency      on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_UnitOfMeasure            as _UnitOfMeasure            on  $projection.ValuationQuantityUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..*] to I_LedgerText               as _LedgerText               on  $projection.Ledger = _LedgerText.Ledger

  association [0..*] to I_ProfitCenterText         as _ProfitCenterText         on  $projection.ProfitCenter = _ProfitCenterText.ProfitCenter
  // must use language as on condition because <= validity condition, which disallows usage of "localized"
  association [0..1] to I_ProfitCenterText         as _ProfitCenterText_2       on  $projection.ProfitCenter     =  _ProfitCenterText_2.ProfitCenter
                                                                                and $projection.ControllingArea  =  _ProfitCenterText_2.ControllingArea
                                                                                and $projection.ValuationDate    <= _ProfitCenterText_2.ValidityEndDate
                                                                                and $projection.ValuationDate    >= _ProfitCenterText_2.ValidityStartDate
                                                                                and _ProfitCenterText_2.Language = $session.system_language

  // texts only available in separate view
  association [1..1] to I_ControllingArea          as _ControllingAreaText      on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  association [1..1] to I_CompanyCode              as _CompanyCodeText          on  $projection.CompanyCode = _CompanyCodeText.CompanyCode
  association [1..1] to I_Plant                    as _PlantText                on  $projection.Plant = _PlantText.Plant

{
  key  CostingReferenceObject,
  key  CostEstimate,
       @ObjectModel.text.association: '_CostingTypeText'
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingTypeStdVH' , element: 'CostingType' }, useAsTemplate: true }]
  key  CostingType,
       @Semantics.businessDate.at: true
  key  CostingDate,
       @ObjectModel.text.association: '_CostingVersionText_2'
  key  CostingVersion,
       @ObjectModel.text.association: '_CostingValuationVarText'
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingValuationVariantStdVH' , element: 'ValuationVariant' }, useAsTemplate: true }]
  key  ValuationVariant,
  key  CostIsEnteredManually,
       
       @ObjectModel.text.association: '_ProductText'
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_ProductStdVH' , element: 'Product' }, useAsTemplate: true }]
       Product,
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_PlantStdVH' , element: 'Plant' }, useAsTemplate: true }]
       Plant,
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_ProductValuationAreaVH' , element: 'ValuationArea' }, useAsTemplate: true }]
       @ObjectModel.foreignKey.association: '_ValuationArea'
       ValuationArea,
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_MaterialValuationTypeVH' , element: 'InventoryValuationType' }, useAsTemplate: true }]
       ValuationType,
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_ControllingAreaStdVH' , element: 'ControllingArea' }, useAsTemplate: true }]
       ControllingArea,
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_CompanyCodeStdVH' , element: 'CompanyCode' }, useAsTemplate: true }]
       _ValuationArea.CompanyCode as CompanyCode,
       @Semantics.businessDate.from: true
       CostEstimateValidityStartDate,
       @Semantics.businessDate.to: true
       CostEstimateValidityEndDate,
       ValuationDate,
       QuantityStructureDate,
       ProductionVersion,
       BillOfMaterial,
       ProductBOMUsage,
       AlternativeBillOfMaterial,
       TaskListGroup,
       TaskListType,
       TaskListGroupCounter,
       CostingItemIsProductComp,
       CostEstIsMarkedForDeletion,
       @Semantics.quantity.unitOfMeasure: 'ValuationQuantityUnit'
       CostingLotSize,
       @Semantics.unitOfMeasure: true
       @ObjectModel.foreignKey.association: '_UnitOfMeasure'
       ValuationQuantityUnit,
       
       @Semantics.user.createdBy: true
       CostEstimateCreatedByUser,
       AdditiveCostCreatedByUser,
       CostEstimateCreationDate,
       CostEstimateMarkingDate,
       @API.element: {
        releaseState: #DEPRECATED,
        successor: 'CostEstimateMarkedByUser'
       }
       CostEstimateMarkedByUser   as CostEstimateMarkingUser,
       CostEstimateMarkedByUser,
       CostEstimateReleaseDate,
       @API.element: {
        releaseState: #DEPRECATED,
        successor: 'CostEstimateReleasedByUser'
       }
       CostEstimateReleasedByUser as CostEstimateReleaseUser,
       CostEstimateReleasedByUser,

       CostEstimateStatus,
       CostingErrorMessageType,
       CostEstimateIsReleased,
       CostEstIsMixedCosting,
       CostEstimateIsForProcmtAltv,
       ProcmtAltvCostEstimate,
       ProcessCategory,
       CostgMixingRatioValue,
       ProcmtAltvValuationVariant,
       SpecialProcurementType,
       ProductProcurementType,
       SpecialProcurementPlant,
       CostingSheet,
       CostingOverheadType,
       ProductValuationStrategy,
       ProductValnPurgInfoRecdStrgy,
       @ObjectModel.text.association: '_CostingVariantText'
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingVariantStdVH' , element: 'CostingVariant' }, useAsTemplate: true }]
       CostingVariant,
       @ObjectModel.text.association: '_LedgerText'
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_LedgerStdVH' , element: 'Ledger' }, useAsTemplate: true }]
       Ledger,
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_LedgerStdVH' , element: 'Ledger' }, useAsTemplate: true }]
       ReferenceLedger,
       @ObjectModel.text.association: '_CostingOverheadGroupText'
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingOverheadGroupVH' , element: 'CostingOverheadGroup' }, useAsTemplate: true }]
       CostingOverheadGroup,
       CostingOverhead,
       PostingPeriod,
       PostingFiscalYear,
       CostingErrorLogID,

       CostEstimateTransferControl,
       LowLevelCode,
       CostEstimateCostingLevel,
       CostComponentStructure,
       AuxiliaryCostCompStructure,
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_BusinessAreaStdVH' , element: 'BusinessArea' }, useAsTemplate: true }]
       BusinessArea,
       @ObjectModel.text.association: '_ProfitCenterText_2'
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_ProfitCenterStdVH' , element: 'ProfitCenter' }, useAsTemplate: true }]
       ProfitCenter,
       @Semantics.currencyCode: true
       @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
       CompanyCodeCurrency,
       @Semantics.currencyCode: true
       @ObjectModel.foreignKey.association: '_ControllingAreaCurrency'
       ControllingAreaCurrency,
       ExchangeRateType,
       ComponentBreakdown,
       EstimatedCostCostingRun,
       EstimatedCostCostingRunDate,
       ConfiguredProduct,
       ProductIsCostedWithQtyStruc,

       _ProductCostEstimateItem,
       _Product,
       _ProductPlant,
       _ProductValuation,
       _CostingType,
       _CostingTypeText,
       _CostingVersion,
       @API.element.releaseState: #DEPRECATED
       @API.element.successor: '_CostingVersionText_2'
       _CostingVersionText,
       _CostingVersionText_2,
       _CostingVariant,
       _CostingVariantText,
       _ValuationVariant,
       _CostingValuationVarText,
       _CostingOverheadGroupText,
       _ValuationArea,
       _ValuationArea._CompanyCode,
       _ControllingArea,
       _ControllingAreaCurrency,
       _CompanyCodeCurrency,
       _UnitOfMeasure,
       _ProductText,
       _Plant,
       _LedgerText,
       @API.element.releaseState: #DEPRECATED
       @API.element.successor: '_ProfitCenterText_2'
       _ProfitCenterText,
       _ProfitCenterText_2,
       _ControllingAreaText,
       _CompanyCodeText,
       _PlantText
}
where
  CostingReferenceObject = '0'
```
