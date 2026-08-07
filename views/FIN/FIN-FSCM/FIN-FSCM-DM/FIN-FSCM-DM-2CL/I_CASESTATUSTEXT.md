---
name: I_CASESTATUSTEXT
description: Casestatustext
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
# I_CASESTATUSTEXT

**Casestatustext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Status` | ✓ | |  | `cast( stat_para as scmgstatpara preserving type )` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `StatusName` |  | |  | `stat_para_descr` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Case Status - Text'
@Analytics: { dataExtraction.enabled: true }
@AbapCatalog.sqlViewName: 'ICASESTATUSTEXT'
@VDM.viewType: #BASIC
//@VDM.private: false
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'Status'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_CaseStatusText
  as select from scmgstatt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cast( stat_para as scmgstatpara preserving type ) as Status,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                             as Language,
      @Semantics.text: true
      stat_para_descr                                   as StatusName,
      _Language
};
```
