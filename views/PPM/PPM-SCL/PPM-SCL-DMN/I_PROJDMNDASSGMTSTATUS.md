---
name: I_PROJDMNDASSGMTSTATUS
description: Projdmndassgmtstatus
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
  - status
  - component:PPM-SCL-DMN
  - lob:Other
---
# I_PROJDMNDASSGMTSTATUS

**Projdmndassgmtstatus**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProjDmndAssgmtStatus` | ✓ | |  | `cast( substring(domvalue_l, 1, 2 ) as tv_proj_dmnd_assgmt_status )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_AssignmentStatusText` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{ representativeKey: 'ProjDmndAssgmtStatus',
               resultSet.sizeCategory: #XS,
               usageType.dataClass: #CUSTOMIZING,
               usageType.serviceQuality: #A,
               usageType.sizeCategory: #S,
               supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
               sapObjectNodeType.name: 'ProjectDemandAssignmentStatus' }
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #BASIC
@EndUserText.label: 'Assignment Status for Project Demands'
@Search.searchable: true

define root view entity I_ProjDmndAssgmtStatus
  as select from dd07l 
  composition [0..*] of I_ProjDmndAssgmtStatusText as _AssignmentStatusText
{
      @ObjectModel.text.association: '_AssignmentStatusText'
      @UI.textArrangement: #TEXT_ONLY
  key cast( substring(domvalue_l, 1, 2 ) as tv_proj_dmnd_assgmt_status ) as ProjDmndAssgmtStatus,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Consumption.valueHelpDefault.display:false
      dd07l.domvalue_l                                                   as DomainValue,

      _AssignmentStatusText
}
where
      domname  = 'PROJ_DMND_ASSGMT_STATUS'
  and as4local = 'A';
```
