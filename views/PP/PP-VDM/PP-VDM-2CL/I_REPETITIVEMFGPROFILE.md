---
name: I_REPETITIVEMFGPROFILE
description: Repetitivemfgprofile
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_REPETITIVEMFGPROFILE

**Repetitivemfgprofile**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `RepetitiveManufacturingProfile` | ✓ | |  | `sfpro` |
| `RepetitiveMfgProductionType` |  | |  | `auart` |
| `ProductCostCtrlgOrderType` |  | |  | `cast(prof.ksart as pph_ksaar preserving type)` |
| `GoodsIssueMovementType` |  | |  | `cast(prof.bwawa as nsdm_gi_bwart preserving type)` |
| `GoodsReceiptMovementType` |  | |  | `cast(prof.bwawe as nsdm_gr_bwart preserving type)` |
| `_OrderType` | | ✓ | | |
| `_ProductionType` | | ✓ | | |
| `_GoodsIssueMovementType` | | ✓ | | |
| `_GoodsReceiptMovementType` | | ✓ | | |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OrderType` | `I_OrderType` | [0..1] |
| `_ProductionType` | `I_RepetitiveMfgProdnType` | [0..1] |
| `_GoodsIssueMovementType` | `I_GoodsMovementType` | [0..1] |
| `_GoodsReceiptMovementType` | `I_GoodsMovementType` | [0..1] |
| `_Text` | `I_RepetitiveMfgProfileText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IREMPROF'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'RepetitiveManufacturingProfile'
@ObjectModel.sapObjectNodeType.name: 'RepetitiveManufacturingProfile'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Repetitive Manufacturing Profile'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_RepetitiveMfgProfile
  as select from t437s as prof 

  association [0..1] to I_OrderType                as _OrderType                on  $projection.ProductCostCtrlgOrderType      = _OrderType.OrderType
  association [0..1] to I_RepetitiveMfgProdnType   as _ProductionType           on  $projection.RepetitiveMfgProductionType    = _ProductionType.RepetitiveMfgProductionType
  association [0..1] to I_GoodsMovementType        as _GoodsIssueMovementType   on  $projection.GoodsIssueMovementType = _GoodsIssueMovementType.GoodsMovementType
  association [0..1] to I_GoodsMovementType        as _GoodsReceiptMovementType on  $projection.GoodsReceiptMovementType = _GoodsReceiptMovementType.GoodsMovementType
  association [0..*] to I_RepetitiveMfgProfileText as _Text                     on  $projection.RepetitiveManufacturingProfile = _Text.RepetitiveManufacturingProfile
{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key prof.sfpro                                    as RepetitiveManufacturingProfile,
      @ObjectModel.foreignKey.association: '_ProductionType'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      prof.auart                                    as RepetitiveMfgProductionType,
      @ObjectModel.foreignKey.association: '_OrderType'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      cast(prof.ksart as pph_ksaar preserving type) as ProductCostCtrlgOrderType,

      // Movement types
      @ObjectModel.foreignKey.association: '_GoodsIssueMovementType'
      cast(prof.bwawa as nsdm_gi_bwart preserving type) as GoodsIssueMovementType,
      @ObjectModel.foreignKey.association: '_GoodsReceiptMovementType'
      cast(prof.bwawe as nsdm_gr_bwart preserving type) as GoodsReceiptMovementType,

      // Associations
      _OrderType,
      _ProductionType,
      _GoodsIssueMovementType,
      _GoodsReceiptMovementType,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
};
```
