---
name: I_CASEINDIVSTATUSTEXT
description: Caseindivstatustext
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-DM
  - interface-view
  - text-view
  - text
  - status
  - component:FIN-FSCM-DM-2CL
  - lob:Other
---
# I_CASEINDIVSTATUSTEXT

**Caseindivstatustext**

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
| `Language` | ✓ | |  | `langu` |  |  |
| `CaseStatus` | ✓ | |  | `stat_orderno` |  |  |
| `CaseStatusName` |  | |  | `stat_ordno_descr` |  |  |
| `_Language` | | ✓ | | | | |
| `_CaseStatusProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CaseStatusProfile` | `I_CaseStatProfile` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICASEINDIVSTEXT'
@Analytics: { dataExtraction.enabled: true }
//@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Individual Status - Text'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CaseStatus'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_CaseIndivStatusText
  as select from scmgstatprofst

  association [0..1] to I_Language        as _Language          on $projection.Language = _Language.Language

  association [0..1] to I_CaseStatProfile as _CaseStatusProfile on $projection.CaseStatusProfile = _CaseStatusProfile.CaseStatusProfile

  //  association [0..1] to I_Caseindstatus        as _CaseIndividual    on  $projection.CaseStatus        = _CaseIndividual.CaseStatus
  //                                                                     and $projection.CaseStatusProfile = _CaseIndividual.CaseStatusProfile
{
       @ObjectModel.foreignKey.association: '_CaseStatusProfile'
  key  scmgstatprofst.profile_id       as CaseStatusProfile,

       @ObjectModel.foreignKey.association: '_Language'
       @Semantics.language: true
  key  langu                           as Language,

       //       @ObjectModel.foreignKey.association: '_CaseIndividual'
  key  scmgstatprofst.stat_orderno     as CaseStatus,

       @Semantics.text: true
       scmgstatprofst.stat_ordno_descr as CaseStatusName,


       _Language,
       _CaseStatusProfile
       //       _CaseIndividual
}
```
