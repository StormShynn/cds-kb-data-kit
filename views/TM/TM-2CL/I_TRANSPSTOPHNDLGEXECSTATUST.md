---
name: I_TRANSPSTOPHNDLGEXECSTATUST
description: Transpstophndlgexecstatust
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - status
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPSTOPHNDLGEXECSTATUST

**Transpstophndlgexecstatust**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TranspOrdStopHndlgExecStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_s_hdl_exec_status preserving type)` |
| `Language` | ✓ | |  | `ddlanguage` |
| `TranspOrdStopHndlgExecStsDesc` |  | |  | `ddtext` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Language` | | ✓ | | |
| `_TranspStopHndlgExecStatus` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transp Ord Stop Hndlg Exec Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TranspOrdStopHndlgExecStatus'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_TranspStopHndlgExecStatusT
  as select from dd07t
  association        to parent I_TranspStopHndlgExecStatus as _TranspStopHndlgExecStatus on $projection.TranspOrdStopHndlgExecStatus = _TranspStopHndlgExecStatus.TranspOrdStopHndlgExecStatus
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspStopHndlgExecStatus'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_s_hdl_exec_status preserving type) as TranspOrdStopHndlgExecStatus,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                         as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      ddtext                                                                             as TranspOrdStopHndlgExecStsDesc,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                   as DomainValue,

      /* Associations */
      _TranspStopHndlgExecStatus,
      _Language
}
where
      domname                     =  '/SCMTMS/TOR_S_HDL_EXEC_STATUS'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 2) <> '22' //Load Plan Up-to-Date
  and substring(domvalue_l, 1, 2) <> '24' //Load Plan Partially Up-to-Date
```
