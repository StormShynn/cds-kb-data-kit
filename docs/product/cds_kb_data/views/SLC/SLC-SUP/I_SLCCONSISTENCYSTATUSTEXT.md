---
name: I_SLCCONSISTENCYSTATUSTEXT
description: "Slcconsistencystatustext"
app_component: SLC-SUP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-SUP
  - interface-view
  - text-view
  - text
  - status
  - component:SLC-SUP
  - lob:Other
---
# I_SLCCONSISTENCYSTATUSTEXT

**Slcconsistencystatustext**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SLCConsistencyStatus` | ✓ | |  | `cast( domvalue_l as /srmsmc/consistency_stcd )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SLCConsistencyStatusName` |  | |  | `cast(ddtext as /srmsmc/status_descr preserving type)` |  |  |
| `_Language` | | ✓ | | | | |
| `_SLCConsistencyStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SLCConsistencyStatus` | `I_SLCConsistencyStatus` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Consistency Status - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'SLCConsistencyStatus'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISLCCONSSTSTEXT'
define view I_SLCConsistencyStatusText
  as select from dd07t
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
  association [1..1]    to I_SLCConsistencyStatus as _SLCConsistencyStatus on $projection.SLCConsistencyStatus = _SLCConsistencyStatus.SLCConsistencyStatus
{
      @ObjectModel.text.element:  [ 'SLCConsistencyStatus' ]
  key cast( domvalue_l as /srmsmc/consistency_stcd )                       as SLCConsistencyStatus,
      @Semantics.language: true
  key ddlanguage                                                          as Language,

      @Semantics.text: true
      cast(ddtext as /srmsmc/status_descr preserving type)                                as SLCConsistencyStatusName,


      _SLCConsistencyStatus,
      _Language
}
where
      domname  = '/SRMSMC/3VAL_CONSISTENCY_STCD'
  and as4local = 'A'
```
