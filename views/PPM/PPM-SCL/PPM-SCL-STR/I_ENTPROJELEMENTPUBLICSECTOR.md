---
name: I_ENTPROJELEMENTPUBLICSECTOR
description: Entprojelementpublicsector
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJELEMENTPUBLICSECTOR

**Entprojelementpublicsector**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProjectElementUUID` | `task.guid` |
| `ProjectUUID` | `task.project_guid` |
| `WBSElementInternalID` | `cast( prps.pspnr as ps_s4_pspnr preserving type )` |
| `Fund` | `prps.rfund` |
| `FundIsFixAssigned` | `prps.fund_fix_assign` |
| `FunctionalAreaIsFixAssigned` | `prps.func_area_fix_assigned` |
| `GrantID` | `prps.rgrant_nbr` |
| `GrantIsFixAssigned` | `prps.grant_fix_assigned` |
| `SponsoredProgram` | `prps.sponsoredprog` |
| `WBSIsAvailyControlControlObj` | `prps.is_avc_check_level` |
| `_EnterpriseProject` | *Association* |
| `_EnterpriseProjectElement` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EnterpriseProject` | `I_EnterpriseProject` | [1..1] |
| `_EnterpriseProjectElement` | `I_EnterpriseProjectElement` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Public Sector Management for Proj Elmnt'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  sapObjectNodeType.name: 'EntProjectElementPublicSector'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [
        {
            table: '/s4ppm/task', role: #MAIN,
            viewElement: ['ProjectElementUUID'],
            tableElement: ['guid']
        },
        {
            table: 'prps', role: #LEFT_OUTER_TO_ONE_JOIN,
            viewElement: ['WBSElementInternalID'],
            tableElement: ['pspnr']
        }
      ]
    }
  }
}
define view entity I_EntProjElementPublicSector
  as select from /s4ppm/task as task
    inner join   prps        as prps on prps.pspnr = task.pspnr
  association [1..1] to I_EnterpriseProject        as _EnterpriseProject        on $projection.ProjectUUID = _EnterpriseProject.ProjectUUID
  association [1..1] to I_EnterpriseProjectElement as _EnterpriseProjectElement on $projection.ProjectElementUUID = _EnterpriseProjectElement.ProjectElementUUID
{
  key task.guid                                         as ProjectElementUUID,
      task.project_guid                                 as ProjectUUID,
      cast( prps.pspnr as ps_s4_pspnr preserving type ) as WBSElementInternalID,

      prps.rfund                                        as Fund,
      prps.fund_fix_assign                              as FundIsFixAssigned,
      prps.func_area_fix_assigned                       as FunctionalAreaIsFixAssigned,
      prps.rgrant_nbr                                   as GrantID,
      prps.grant_fix_assigned                           as GrantIsFixAssigned,
      prps.sponsoredprog                                as SponsoredProgram,
      prps.is_avc_check_level                           as WBSIsAvailyControlControlObj,

      _EnterpriseProject,
      _EnterpriseProjectElement
}
```
