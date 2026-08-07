---
name: I_INDEPENDENTREQUIREMENTTYPE
description: "Independentrequirementtype"
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
# I_INDEPENDENTREQUIREMENTTYPE

**Independentrequirementtype**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IndependentRequirementType` | ✓ | |  | `cast(typ.bedae as vdm_bedae preserving type)` |  |  |
| `IndependentRequirementClass` |  | |  | `cast(typ.bedar as vdm_bedar preserving type)` |  |  |
| `_Text` | | ✓ | | | | |
| `_RequirementClass` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_IndependentRqmtTypeText` | [0..*] |
| `_RequirementClass` | `I_IndependentRqmtClass` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
--@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'IndependentRequirementType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Independent Requirement Type'

define view entity I_IndependentRequirementType
  as select from t459a as typ
  association [0..*] to I_IndependentRqmtTypeText as _Text             on $projection.IndependentRequirementType  = _Text.IndependentRequirementType
  association [0..1] to I_IndependentRqmtClass    as _RequirementClass on $projection.IndependentRequirementClass = _RequirementClass.IndependentRequirementClass
{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(typ.bedae as vdm_bedae preserving type) as IndependentRequirementType,

      @ObjectModel.foreignKey.association: '_RequirementClass'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      cast(typ.bedar as vdm_bedar preserving type) as IndependentRequirementClass,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text,
      _RequirementClass
};
```
