---
name: I_CNDNCONTRPROCVAR
description: Cndncontrprocvar
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-GT
  - LO-GT-CHB
  - interface-view
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CNDNCONTRPROCVAR

**Cndncontrprocvar**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrProcVar` | ✓ | |  | `process_variant` |  |  |
| `SettlmtDfltApplSts` |  | |  | `default_estatus` |  |  |
| `SettlmtApplStsGrp` |  | |  | `status_group` |  |  |
| `CndnContrApprvlProc` |  | |  | `approval_process` |  |  |
| `_Text` | | ✓ | | | | |
| `_CndnContrApprvlProc` | | ✓ | | | | |
| `_SettlmtApplStsGrp` | | ✓ | | | | |
| `_SettlmtApplSts` | | ✓ | | | | |
| `_SettlmtApplStsGrpStsAssgmt` | | ✓ | | | | |
| `_CndnContrProcVarTypeAssgmt` | | ✓ | | | | |
| `_CndnContrProcVarPurAssgmt` | | ✓ | | | | |
| `_CndnContrProcVarSlsAssgmt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CndnContrProcVarText` | [0..*] |
| `_CndnContrApprvlProc` | `I_CndnContrApprvlProc` | [0..1] |
| `_SettlmtApplStsGrp` | `I_SettlmtApplStsGrp` | [0..1] |
| `_SettlmtApplSts` | `I_SettlmtApplSts` | [0..1] |
| `_SettlmtApplStsGrpStsAssgmt` | `I_SettlmtApplStsGrpStsAssgmt` | [0..1] |
| `_CndnContrProcVarTypeAssgmt` | `I_CndnContrProcVarTypeAssgmt` | [0..*] |
| `_CndnContrProcVarPurAssgmt` | `I_CndnContrProcVarPurAssgmt` | [0..*] |
| `_CndnContrProcVarSlsAssgmt` | `I_CndnContrProcVarSlsAssgmt` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IWCBCCPROCVAR',
  compiler.compareFilter: true,
  buffering: {
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 001
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  representativeKey: 'CndnContrProcVar',
  sapObjectNodeType.name: 'CndnContrProcessVariant',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory:   #S
  }
}
@ClientHandling: {
     type: #INHERITED,
     algorithm: #SESSION_VARIABLE
}
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL
}
@EndUserText.label: 'Condition Contract Process Variant'
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CndnContrProcVar 
  as select from wcb_c_proc_var

  association [0..*] to I_CndnContrProcVarText       as _Text                       on  $projection.CndnContrProcVar = _Text.CndnContrProcVar
  association [0..1] to I_CndnContrApprvlProc        as _CndnContrApprvlProc        on  $projection.CndnContrApprvlProc = _CndnContrApprvlProc.CndnContrApprvlProc
  association [0..1] to I_SettlmtApplStsGrp          as _SettlmtApplStsGrp          on  $projection.SettlmtApplStsGrp = _SettlmtApplStsGrp.SettlmtApplStsGrp
  association [0..1] to I_SettlmtApplSts             as _SettlmtApplSts             on  $projection.SettlmtDfltApplSts = _SettlmtApplSts.SettlmtApplSts
  association [0..1] to I_SettlmtApplStsGrpStsAssgmt as _SettlmtApplStsGrpStsAssgmt on  $projection.SettlmtApplStsGrp  = _SettlmtApplStsGrpStsAssgmt.SettlmtApplStsGrp
                                                                                    and $projection.SettlmtDfltApplSts = _SettlmtApplStsGrpStsAssgmt.SettlmtApplSts
  association [0..*] to I_CndnContrProcVarTypeAssgmt as _CndnContrProcVarTypeAssgmt on  $projection.CndnContrProcVar = _CndnContrProcVarTypeAssgmt.CndnContrProcVar
  association [0..*] to I_CndnContrProcVarPurAssgmt  as _CndnContrProcVarPurAssgmt  on  $projection.CndnContrProcVar = _CndnContrProcVarPurAssgmt.CndnContrProcVar
  association [0..*] to I_CndnContrProcVarSlsAssgmt  as _CndnContrProcVarSlsAssgmt  on  $projection.CndnContrProcVar = _CndnContrProcVarSlsAssgmt.CndnContrProcVar
{
      @ObjectModel.text.association: '_Text'
  key process_variant  as CndnContrProcVar,

      @ObjectModel.foreignKey.association: '_SettlmtApplSts'
      default_estatus  as SettlmtDfltApplSts,
      @ObjectModel.foreignKey.association: '_SettlmtApplStsGrp'
      status_group     as SettlmtApplStsGrp,
      @ObjectModel.foreignKey.association: '_CndnContrApprvlProc'
      approval_process as CndnContrApprvlProc,

      /* Associations */
      _Text,
      _CndnContrApprvlProc,
      _SettlmtApplSts,
      _SettlmtApplStsGrp,
      _SettlmtApplStsGrpStsAssgmt,
      _CndnContrProcVarTypeAssgmt,
      _CndnContrProcVarPurAssgmt,
      _CndnContrProcVarSlsAssgmt
}
```
