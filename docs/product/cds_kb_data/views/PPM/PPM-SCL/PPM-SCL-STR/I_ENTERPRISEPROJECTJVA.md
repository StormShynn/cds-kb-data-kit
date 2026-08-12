---
name: I_ENTERPRISEPROJECTJVA
description: "Enterpriseprojectjva"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - project
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_ENTERPRISEPROJECTJVA

**Enterpriseprojectjva**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectUUID` | ✓ | |  | `guid` |  |  |
| `ProjectSummaryTaskUUID` |  | |  | `guid` |  |  |
| `WBSElementInternalID` |  | |  | `cast( prps.pspnr as ps_s4_pspnr preserving type )` |  |  |
| `JointVenture` |  | |  | `vname` |  |  |
| `JointVentureCostRecoveryCode` |  | |  | `recid` |  |  |
| `JointVentureEquityType` |  | |  | `etype` |  |  |
| `JntVntrProjectType` |  | |  | `otype` |  |  |
| `JntIntrstBillgClass` |  | |  | `jibcl` |  |  |
| `JntIntrstBillgSubClass` |  | |  | `jibsa` |  |  |
| `_EnterpriseProject` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EnterpriseProject` | `I_EnterpriseProject` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Joint Venture Accounting for Ent Project'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  sapObjectNodeType.name: 'EntProjJntVntrAccounting'
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
            table: '/s4ppm/project', role: #MAIN,
            viewElement: ['ProjectUUID'],
            tableElement: ['guid']
        },
        {
            table: '/s4ppm/task', role: #LEFT_OUTER_TO_ONE_JOIN,
            viewElement: ['ProjectSummaryTaskUUID'],
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
define view entity I_EnterpriseProjectJVA
  as select from /s4ppm/project as project
    inner join   /s4ppm/task    as task on task.guid = project.projectsummarytaskuuid
    inner join   prps           as prps on prps.pspnr = task.pspnr
  association [1..1] to I_EnterpriseProject as _EnterpriseProject on $projection.ProjectUUID = _EnterpriseProject.ProjectUUID
{
  key project.guid                                      as ProjectUUID,
      task.guid                                         as ProjectSummaryTaskUUID,
      cast( prps.pspnr as ps_s4_pspnr preserving type ) as WBSElementInternalID,

      prps.vname                                        as JointVenture,
      prps.recid                                        as JointVentureCostRecoveryCode,
      prps.etype                                        as JointVentureEquityType,
      prps.otype                                        as JntVntrProjectType,
      prps.jibcl                                        as JntIntrstBillgClass,
      prps.jibsa                                        as JntIntrstBillgSubClass,

      _EnterpriseProject
}
```
