---
name: I_TECHOBJAUTHZNGRP
description: Techobjauthzngrp
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
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_TECHOBJAUTHZNGRP

**Techobjauthzngrp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TechObjAuthorizationGroup` | ✓ | |  | `cast(t370b.begru as eam_iautg)` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TechObjAuthznGrpText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Technical Object Authorization Group'
@Analytics: { dataCategory: #DIMENSION }
@Analytics.technicalName: 'ITECHOBJAUTHGRP'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@ObjectModel.representativeKey: 'TechObjAuthorizationGroup'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]


define view entity I_TechObjAuthznGrp
  as select from t370b
  association [0..*] to I_TechObjAuthznGrpText as _Text on _Text.TechObjAuthorizationGroup = $projection.TechObjAuthorizationGroup
{
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true, ranking: #HIGH }
  key cast(t370b.begru as eam_iautg) as TechObjAuthorizationGroup,

      // Propagate association
      _Text
}
```
