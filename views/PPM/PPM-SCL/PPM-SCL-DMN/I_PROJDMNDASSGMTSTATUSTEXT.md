---
name: I_PROJDMNDASSGMTSTATUSTEXT
description: Projdmndassgmtstatustext
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - text-view
  - text
  - status
  - component:PPM-SCL-DMN
  - lob:Other
---
# I_PROJDMNDASSGMTSTATUSTEXT

**Projdmndassgmtstatustext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |
| `ProjDmndAssgmtStatus` | ✓ | |  | `cast( substring(domvalue_l, 1, 2 ) as tv_proj_dmnd_assgmt_status )` |
| `ProjDmndAssgmtStatusText` |  | |  | `ddtext` |
| `_Language` | | ✓ | | |
| `_AssignmentStatus` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{ representativeKey: 'ProjDmndAssgmtStatus',
               dataCategory: #TEXT,
               usageType: {
               serviceQuality: #A,
               sizeCategory:   #S,
               dataClass:      #CUSTOMIZING},
               supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]}
//               sapObjectNodeType.name: 'ProjectDemandAssignmentStatus' 
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Assignment Status for Proj Demands – Text'
@Search.searchable: true

define view entity I_ProjDmndAssgmtStatusText
  as select from dd07t
  association        to parent I_ProjDmndAssgmtStatus as _AssignmentStatus on $projection.ProjDmndAssgmtStatus = _AssignmentStatus.ProjDmndAssgmtStatus
  association [0..1] to I_Language                    as _Language         on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )                  as Language,
      @ObjectModel.foreignKey.association: '_AssignmentStatus'
  key cast( substring(domvalue_l, 1, 2 ) as tv_proj_dmnd_assgmt_status ) as ProjDmndAssgmtStatus,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking:#LOW
      @Semantics.text: true
      dd07t.ddtext                                                       as ProjDmndAssgmtStatusText,
      
      _Language,
      _AssignmentStatus
}
where
      domname  = 'PROJ_DMND_ASSGMT_STATUS'
  and as4local = 'A'
```
