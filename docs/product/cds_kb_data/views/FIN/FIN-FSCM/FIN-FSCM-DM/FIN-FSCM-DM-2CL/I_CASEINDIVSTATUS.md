---
name: I_CASEINDIVSTATUS
description: "Caseindivstatus"
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-DM
  - interface-view
  - status
  - component:FIN-FSCM-DM-2CL
  - lob:Other
---
# I_CASEINDIVSTATUS

**Caseindivstatus**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseStatusProfile` | ✓ | |  | `profile_id` |  |  |
| `CaseStatus` | ✓ | |  | `stat_orderno` |  |  |
| `CaseSystemStatus` |  | |  | `stat_para` |  |  |
| `CaseLowestStatus` |  | |  | `stat_orderno_l` |  |  |
| `CaseHighestStatus` |  | |  | `stat_orderno_h` |  |  |
| `CaseEvent` |  | |  | `wf_event` |  |  |
| `_StatProf` | | ✓ | | | | |
| `_SystemStatus` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_StatProf` | `I_CaseStatProfile` | [0..1] |
| `_SystemStatus` | `I_CaseSystStatus` | [0..1] |
| `_Text` | `I_CaseIndivStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICASEINDIVSTATUS'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
//@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Individual Status'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CaseStatus'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'DisputeCaseIndividualStatus'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE
                                      ]
//@VDM.lifecycle.contract: #SAP_INTERNAL_API
@Metadata.ignorePropagatedAnnotations:true
define view I_CaseIndivStatus
  as select from scmgstatprofs 


  association [0..1] to I_CaseStatProfile        as _StatProf     on  $projection.CaseStatusProfile = _StatProf.CaseStatusProfile

  association [0..1] to I_CaseSystStatus         as _SystemStatus on  $projection.CaseSystemStatus = _SystemStatus.CaseSystemStatus

  association [0..*] to I_CaseIndivStatusText     as _Text         on  $projection.CaseStatusProfile = _Text.CaseStatusProfile
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
