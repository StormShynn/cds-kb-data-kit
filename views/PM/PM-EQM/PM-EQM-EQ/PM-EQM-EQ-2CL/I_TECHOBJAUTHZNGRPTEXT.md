---
name: I_TECHOBJAUTHZNGRPTEXT
description: Techobjauthzngrptext
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
# I_TECHOBJAUTHZNGRPTEXT

**Techobjauthzngrptext**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TechObjAuthorizationGroup` | ✓ | |  | `begru` |
| `Language` | ✓ | |  | `spras` |
| `TechObjAuthorizationGroupDesc` |  | |  | `cast (t370b_t.begtx as eam_tech_obj_authzn_grp_desc)` |
| `_TechObjAuthznGrp` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TechObjAuthznGrp` | `I_TechObjAuthznGrp` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Technical Object Authorization Group - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ITECHOBJAUTHGRPT'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@ObjectModel.representativeKey: 'TechObjAuthorizationGroup'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]

define view entity I_TechObjAuthznGrpText
  as select from t370b_t
  association [0..1] to I_TechObjAuthznGrp as _TechObjAuthznGrp on _TechObjAuthznGrp.TechObjAuthorizationGroup = $projection.TechObjAuthorizationGroup
  association [0..1] to I_Language         as _Language         on _Language.Language = $projection.Language
{
      @ObjectModel.foreignKey.association: '_TechObjAuthznGrp'
  key t370b_t.begru                                        as TechObjAuthorizationGroup,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key t370b_t.spras                                        as Language,
      @EndUserText.label: 'Authorization Group Text'
      @EndUserText.quickInfo: 'Authorization Group Text'
      @Semantics.text: true
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      cast (t370b_t.begtx as eam_tech_obj_authzn_grp_desc) as TechObjAuthorizationGroupDesc,

      // Propagate association
      _TechObjAuthznGrp,
      _Language
}
```
