---
name: I_CASEINDIVIDUALSTATUS
description: "Case Individual Status"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEINDIVIDUALSTATUS')/$value
semantic_en: "Case Individual Status"
semantic_vi: "Case Individual Status — CDS view giao diện dựa trên scmgstatprofs."
keywords:
  - "case"
  - "individual"
  - "status"
  - "profile"
  - "system"
  - "lowest"
  - "highest"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASEINDIVIDUALSTATUS

**Case Individual Status**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEINDIVIDUALSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseStatusProfile` | ✓ | |  | `profile_id` | `CHAR(8)` | Case: Status Profile |
| `CaseStatus` | ✓ | |  | `stat_orderno` | `NUMC(2)` | Case: Status |
| `CaseSystemStatus` |  | |  | `stat_para` | `CHAR(3)` | Case: System Status |
| `CaseLowestStatus` |  | |  | `stat_orderno_l` | `NUMC(2)` | Case: Lowest Status |
| `CaseHighestStatus` |  | |  | `stat_orderno_h` | `NUMC(2)` | Case: Highest Status |
| `CaseEvent` |  | |  | `wf_event` | `CHAR(32)` | Case: Event |
| `_StatProf` | | ✓ | | | | |
| `_SystemStatus` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_StatProf` | `I_CaseStatusProfile` | [0..1] |
| `_SystemStatus` | `I_CaseSystemStatus` | [0..1] |
| `_Text` | `I_CaseIndividualStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEINDIVIDUALSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEINDIVIDUALSTATUS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASEISTATUS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Individual Status'
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseStatus'
define view I_Caseindividualstatus
  as select from scmgstatprofs


  association [0..1] to I_CaseStatusProfile   as _StatProf     on  $projection.CaseStatusProfile = _StatProf.CaseStatusProfile

  association [0..1] to I_CaseSystemStatus   as _SystemStatus on  $projection.CaseSystemStatus = _SystemStatus.CaseSystemStatus

  association [0..*] to I_CaseIndividualStatusText as _Text   on  $projection.CaseStatusProfile = _Text.CaseStatusProfile
                                                        and $projection.CaseStatus        = _Text.CaseStatus
{

          @ObjectModel.foreignKey.association: '_StatProf'
  key    scmgstatprofs.profile_id          as CaseStatusProfile,
          @ObjectModel.text.association: '_Text'
  key    scmgstatprofs.stat_orderno        as CaseStatus,
          @ObjectModel.foreignKey.association: '_SystemStatus'
         scmgstatprofs.stat_para           as CaseSystemStatus,
         scmgstatprofs.stat_orderno_l      as CaseLowestStatus,
         scmgstatprofs.stat_orderno_h      as CaseHighestStatus,
         scmgstatprofs.wf_event            as CaseEvent,

         _Text,
         _StatProf,
         _SystemStatus

}
```
