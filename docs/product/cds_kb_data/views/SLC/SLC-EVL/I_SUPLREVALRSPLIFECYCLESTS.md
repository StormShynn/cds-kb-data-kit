---
name: I_SUPLREVALRSPLIFECYCLESTS
description: "Suplrevalrsplifecyclests"
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
# I_SUPLREVALRSPLIFECYCLESTS

**Suplrevalrsplifecyclests**

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
| `SuplrEvalRspLifecycleStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/srs_lifecycle_stat_cd preserving type )as SuplrEvalRspLifecycleStatus` |  |  |
| `_SuplrEvalRspLifecycleStsText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrEvalRspLifecycleStsText` | `I_SuplrEvalRspLifecycleStsText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Lifecycle Status for Suplr Eval Response' //same as DDL description
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SuplrEvalRspLifecycleStatus'
@AbapCatalog.sqlViewName: 'ISUPEVLCSTS'
define view I_SuplrEvalRspLifecycleSts as select from dd07l
  association [0..*] to I_SuplrEvalRspLifecycleStsText as _SuplrEvalRspLifecycleStsText on $projection.SuplrEvalRspLifecycleStatus = _SuplrEvalRspLifecycleStsText.SuplrEvalRspLifecycleStatus 
{

  @ObjectModel.text.association: '_SuplrEvalRspLifecycleStsText'
  key cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/srs_lifecycle_stat_cd preserving type )as SuplrEvalRspLifecycleStatus, 
  _SuplrEvalRspLifecycleStsText
}
where domname  = '/SRMSMC/SRS_LIFECYCLE_STAT_CD' 
  and as4local = 'A'
```
