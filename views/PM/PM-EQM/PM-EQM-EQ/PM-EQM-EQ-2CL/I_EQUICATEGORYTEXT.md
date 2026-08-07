---
name: I_EQUICATEGORYTEXT
description: "Equicategorytext"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - text-view
  - text
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_EQUICATEGORYTEXT

**Equicategorytext**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EquipmentCategory` | ✓ | |  | `eqtyp` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `EquipmentCategoryDesc` |  | |  | `typtx` |  |  |
| `_EquipmentCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EquipmentCategory` | `I_EquipmentCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Equipment Category - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics: { dataExtraction : { enabled: true , delta.changeDataCapture.automatic: true } }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IEQUICATTEXT'
@AccessControl.authorizationCheck:#CHECK
@ObjectModel.representativeKey: 'EquipmentCategory'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search: {
  searchable: true
}                           // Optimize Type ahead for value helps - 2302
@Metadata.ignorePropagatedAnnotations
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]

define view I_EquiCategoryText as select from t370u
association[0..1] to I_EquipmentCategory as _EquipmentCategory on _EquipmentCategory.EquipmentCategory = $projection.EquipmentCategory
association[0..1] to I_Language as _Language on _Language.Language = $projection.Language
{

  @ObjectModel.foreignKey.association: '_EquipmentCategory'
  key t370u.eqtyp as EquipmentCategory, 
  
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key t370u.spras as Language, 
  // Optimize Type ahead for value helps - 2302
  @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  @Semantics.text: true
  t370u.typtx as EquipmentCategoryDesc,
  
  // Propagate association
  _EquipmentCategory,
  _Language
}
```
