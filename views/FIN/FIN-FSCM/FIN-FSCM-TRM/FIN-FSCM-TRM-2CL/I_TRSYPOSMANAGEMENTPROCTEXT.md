---
name: I_TRSYPOSMANAGEMENTPROCTEXT
description: "Trsyposmanagementproctext"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TRSYPOSMANAGEMENTPROCTEXT

**Trsyposmanagementproctext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrsyPosManagementProcedure` | ✓ | |  | `cast(TrsyPosManagementProcedureText.pos_man_proc as ftr_gen_pos_man_proc preserving type)` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `TrsyPosManagementProcedureName` |  | |  | `cast(TrsyPosManagementProcedureText.pos_man_proc_t as ftr_gen_pos_man_proc_name preserving type)` |  |  |
| `_TrsyPosManagementProcedure` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TrsyPosManagementProcedure` | `I_TrsyPosManagementProcedure` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Treasury Position Management Proc - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ITRPOSMANPROCTXT'
@ObjectModel.representativeKey: 'TrsyPosManagementProcedure'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory:  #M
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC


define view entity I_TrsyPosManagementProcText
  as select from trgc_pm_proc_t as TrsyPosManagementProcedureText
  association [0..1] to I_TrsyPosManagementProcedure as _TrsyPosManagementProcedure on $projection.TrsyPosManagementProcedure = _TrsyPosManagementProcedure.TrsyPosManagementProcedure
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{
         @ObjectModel.foreignKey.association: '_TrsyPosManagementProcedure'
  key    cast(TrsyPosManagementProcedureText.pos_man_proc as ftr_gen_pos_man_proc preserving type)        as TrsyPosManagementProcedure,
         @Semantics.language: true
         @ObjectModel.foreignKey.association: '_Language'
  key    TrsyPosManagementProcedureText.spras                                             as Language,
         @Semantics.text: true
         cast(TrsyPosManagementProcedureText.pos_man_proc_t as ftr_gen_pos_man_proc_name preserving type) as TrsyPosManagementProcedureName,

         _TrsyPosManagementProcedure,
         _Language
}
```
