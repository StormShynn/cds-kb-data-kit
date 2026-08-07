---
name: I_INDEPENDENTRQMTTYPETEXT
description: Independentrqmttypetext
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
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_INDEPENDENTRQMTTYPETEXT

**Independentrqmttypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `IndependentRequirementType` | ✓ | |  | `cast(txt.bedae as vdm_bedae preserving type)` |
| `Language` | ✓ | |  | `cast(txt.spras as spras preserving type)` |
| `IndependentRequirementTypeName` |  | |  | `cast(txt.bdtxt as pph_bdtxt preserving type)` |
| `_RequirementType` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RequirementType` | `I_IndependentRequirementType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
--@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'IndependentRequirementType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Independent Requirement Type - Text'

define view entity I_IndependentRqmtTypeText
  as select from t459w as txt
  association [1..1] to I_IndependentRequirementType as _RequirementType on $projection.IndependentRequirementType = _RequirementType.IndependentRequirementType
  association [0..1] to I_Language                   as _Language        on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_RequirementType'
      @ObjectModel.text.element: ['IndependentRequirementTypeName']
  key cast(txt.bedae as vdm_bedae preserving type) as IndependentRequirementType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(txt.spras as spras preserving type)     as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.bdtxt as pph_bdtxt preserving type) as IndependentRequirementTypeName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _RequirementType,
      _Language
};
```
