---
name: I_PLNDINDEPRQMTTYPE
description: Plndindeprqmttype
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
# I_PLNDINDEPRQMTTYPE

**Plndindeprqmttype**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PlndIndepRqmtType` | ✓ | |  | `cast(typ.bedae as pph_bedae preserving type)` |
| `RequirementsClass` |  | |  | `cast(typ.bedar as vdm_bedar preserving type)` |
| `_Text` | | ✓ | | |
| `_RequirementClass` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PlndIndepRqmtTypeText` | [0..*] |
| `_RequirementClass` | `I_IndependentRqmtClass` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPLNDINDRQMTTYP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'PlndIndepRqmtType'
@ObjectModel.sapObjectNodeType.name: 'PlannedIndepRequirementType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Planned Independent Requirement Type'

define view I_PlndIndepRqmtType
  as select from t459a as typ
    inner join   t459k as cls on cls.bedar = typ.bedar

  association [0..*] to I_PlndIndepRqmtTypeText as _Text             on $projection.PlndIndepRqmtType = _Text.PlndIndepRqmtType
  association [1..1] to I_IndependentRqmtClass  as _RequirementClass on $projection.RequirementsClass = _RequirementClass.IndependentRequirementClass
{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(typ.bedae as pph_bedae preserving type) as PlndIndepRqmtType,

      @ObjectModel.foreignKey.association: '_RequirementClass'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      cast(typ.bedar as vdm_bedar preserving type) as RequirementsClass,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text,
      _RequirementClass
}
where cls.bdtyp = '1';  // only planned independent requirement types
```
