---
name: I_SUPLREVALRSPLIFECYCLESTS
description: Suplrevalrsplifecyclests
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SuplrEvalRspLifecycleStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/srs_lifecycle_stat_cd preserving type )as SuplrEvalRspLifecycleStatus` |
| `_SuplrEvalRspLifecycleStsText` | | ✓ | | |

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
