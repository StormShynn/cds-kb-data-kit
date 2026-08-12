---
name: I_SLCQNAIRELIFECYCLESTS
description: "Slcqnairelifecyclests"
app_component: SLC-EVL
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
  - SLC-EVL
  - interface-view
  - component:SLC-EVL
  - lob:Other
---
# I_SLCQNAIRELIFECYCLESTS

**Slcqnairelifecyclests**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
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
| `SLCQnaireLifecycleStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/qnr_lifecycle_stat_cd preserving type)` |  |  |
| `_SLCQnaireLifecycleStsText` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SLCQnaireLifecycleStsText` | `I_SLCQnaireLifecycleStsText` | [0..*] |
| `_Text` | `I_SLCQnaireLifecycleStsText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Lifecycle Status of Questionnaire'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'SLCQnaireLifecycleStatus'
@AbapCatalog.sqlViewName: 'ISLCQNAIRLFS'

define view I_SLCQnaireLifecycleSts
  as select from dd07l
  association [0..*] to I_SLCQnaireLifecycleStsText as _SLCQnaireLifecycleStsText on $projection.SLCQnaireLifecycleStatus = _SLCQnaireLifecycleStsText.SLCQnaireLifecycleStatus
  association [0..*] to I_SLCQnaireLifecycleStsText as _Text on $projection.SLCQnaireLifecycleStatus = _Text.SLCQnaireLifecycleStatus

{
      @ObjectModel.text.association: '_SLCQnaireLifecycleStsText'
  key cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/qnr_lifecycle_stat_cd preserving type) as SLCQnaireLifecycleStatus,

      // Association
      _SLCQnaireLifecycleStsText,
      _Text

}
where
      domname  = '/SRMSMC/QNR_LIFECYCLE_STAT_CD'
  and as4local = 'A'
```
