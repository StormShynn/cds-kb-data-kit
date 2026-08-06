---
name: I_CASESTATPROFILETEXT
description: Casestatprofiletext
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
  - component:FIN-FSCM-DM-2CL
  - lob:Other
---
# I_CASESTATPROFILETEXT

**Casestatprofiletext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CaseStatusProfile` | `scmgstatproft.profile_id` |
| key `Language` | `scmgstatproft.langu` |
| `CaseStatusProfileName` | `scmgstatproft.stat_prof_descr` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICASESPROFTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Status Profile - Text'
@Analytics: { dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
//@VDM.lifecycle.contract: #SAP_INTERNAL_API
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'CaseStatusProfile'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_CaseStatProfileText
  as select from scmgstatproft

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  //  association [0..1] to I_CaseStatusProfile as _CaseProfile on $projection.CaseStatusProfile = _CaseProfile.CaseStatusProfile
{

      //      @ObjectModel.foreignKey.association: '_CaseProfile'
  key scmgstatproft.profile_id      as CaseStatusProfile,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key scmgstatproft.langu           as Language,
      @Semantics.text: true
      scmgstatproft.stat_prof_descr as CaseStatusProfileName,

      _Language
      //      _CaseProfile
}
```
