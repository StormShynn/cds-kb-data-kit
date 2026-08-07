---
name: I_FLOCCATEGORYTEXT
description: Floccategorytext
app_component: PM-EQM-FL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-FL
  - interface-view
  - text-view
  - text
  - component:PM-EQM-FL-2CL
  - lob:Plant Maintenance
---
# I_FLOCCATEGORYTEXT

**Floccategorytext**

| Property | Value |
|---|---|
| App Component | `PM-EQM-FL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FunctionalLocationCategory` | ✓ | |  | `fltyp` |
| `Language` | ✓ | |  | `spras` |
| `FunctionalLocationCategoryDesc` |  | |  | `typtx` |
| `_FunctionalLocationCategory` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FunctionalLocationCategory` | `I_FunctionalLocationCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Functional Location Category - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@Analytics: { dataExtraction : { enabled: true , delta.changeDataCapture.automatic: true } }
@AbapCatalog.sqlViewName: 'IFLOCCATTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck:#CHECK
@ObjectModel.representativeKey: 'FunctionalLocationCategory'
@ObjectModel.semanticKey:  [ 'FunctionalLocationCategory' ]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #CUSTOMIZING 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true  // Optimize Type ahead for value helps - 2302
@Metadata.ignorePropagatedAnnotations
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]

define view I_FlocCategoryText as select from t370f_t // T370F_T = Language-Dependent Texts for T370F
association[0..1] to I_FunctionalLocationCategory as _FunctionalLocationCategory on _FunctionalLocationCategory.FunctionalLocationCategory = $projection.FunctionalLocationCategory
association[0..1] to I_Language as _Language on _Language.Language = $projection.Language{

  @ObjectModel.foreignKey.association: '_FunctionalLocationCategory'
  key t370f_t.fltyp as FunctionalLocationCategory, 
  
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key t370f_t.spras as Language, 
  @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}  // Optimize Type ahead for value helps - 2302
  @Semantics.text: true
  t370f_t.typtx as FunctionalLocationCategoryDesc,
  
  // Propagate association
  _FunctionalLocationCategory,
  _Language
}
```
