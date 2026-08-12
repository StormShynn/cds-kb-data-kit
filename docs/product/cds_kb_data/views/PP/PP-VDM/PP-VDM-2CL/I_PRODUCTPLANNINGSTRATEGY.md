---
name: I_PRODUCTPLANNINGSTRATEGY
description: "Productplanningstrategy"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - product
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PRODUCTPLANNINGSTRATEGY

**Productplanningstrategy**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductPlanningStrategy` | ✓ | |  | `stra1` |  |  |
| `PlndIndepRqmtRqmtType` |  | |  | `bedvp` |  |  |
| `CustomerRequirementRqmtType` |  | |  | `bedku` |  |  |
| `_Text` | | ✓ | | | | |
| `_PlndIndepRqmtRqmtType` | | ✓ | | | | |
| `_CustomerRqmtRqmtType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProductPlanningStrategyText` | [0..*] |
| `_PlndIndepRqmtRqmtType` | `I_PlndIndepRqmtType` | [0..1] |
| `_CustomerRqmtRqmtType` | `I_PlndIndepRqmtType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPLANNINGSTRATEG'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ProductPlanningStrategy'
@ObjectModel.sapObjectNodeType.name: 'ProductPlanningStrategy'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Product Planning Strategy'

define view I_ProductPlanningStrategy
  as select from t461s as strat

  association [0..*] to I_ProductPlanningStrategyText as _Text                  on $projection.ProductPlanningStrategy = _Text.ProductPlanningStrategy
  association [0..1] to I_PlndIndepRqmtType           as _PlndIndepRqmtRqmtType on $projection.PlndIndepRqmtRqmtType = _PlndIndepRqmtRqmtType.PlndIndepRqmtType
  association [0..1] to I_PlndIndepRqmtType           as _CustomerRqmtRqmtType  on $projection.CustomerRequirementRqmtType = _CustomerRqmtRqmtType.PlndIndepRqmtType
{
      // Key
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @ObjectModel.text.association: '_Text'
  key strat.stra1 as ProductPlanningStrategy,

      @ObjectModel.foreignKey.association: '_PlndIndepRqmtRqmtType'  
      strat.bedvp as PlndIndepRqmtRqmtType,
      @ObjectModel.foreignKey.association: '_CustomerRqmtRqmtType'        
      strat.bedku as CustomerRequirementRqmtType,

      // Associations
      _CustomerRqmtRqmtType,
      _PlndIndepRqmtRqmtType,
      _Text
};
```
