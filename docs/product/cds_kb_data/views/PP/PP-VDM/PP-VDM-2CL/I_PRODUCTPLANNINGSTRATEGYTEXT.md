---
name: I_PRODUCTPLANNINGSTRATEGYTEXT
description: "Productplanningstrategytext"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - product
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PRODUCTPLANNINGSTRATEGYTEXT

**Productplanningstrategytext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductPlanningStrategy` | ✓ | |  | `stra1` |  |  |
| `Language` | ✓ | |  | `cast(txt.spras as spras preserving type)` |  |  |
| `ProductPlanningStrategyName` |  | |  | `cast(txt.text40 as planningstrategyname preserving type)` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPLANNIGSTRATTXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ProductPlanningStrategy'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Product Planning Strategy - Text'

define view I_ProductPlanningStrategyText
  as select from t461t as txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: ['ProductPlanningStrategyName']
  key txt.stra1                                                as ProductPlanningStrategy,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(txt.spras as spras preserving type)                 as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.text40 as planningstrategyname preserving type) as ProductPlanningStrategyName,

      // Associations
      _Language
};
```
