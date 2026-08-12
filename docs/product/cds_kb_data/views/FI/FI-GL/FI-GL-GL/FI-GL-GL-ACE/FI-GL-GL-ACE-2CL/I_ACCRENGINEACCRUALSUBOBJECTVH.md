---
name: I_ACCRENGINEACCRUALSUBOBJECTVH
description: "Accrengineaccrualsubobjectvh"
app_component: FI-GL-GL-ACE-2CL
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
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - value-help
  - component:FI-GL-GL-ACE-2CL
  - lob:Finance
---
# I_ACCRENGINEACCRUALSUBOBJECTVH

**Accrengineaccrualsubobjectvh**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-ACE-2CL` |
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
| `AccrualEngineAccrualObjectType` | ✓ | |  | `comp` |  |  |
| `AccrualObjectLogicalSystem` | ✓ | |  | `logsys` |  |  |
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `AccrualObject` | ✓ | |  | `ref_key` |  |  |
| `AccrualSubobject` | ✓ | |  | `ref_subkey` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'IFIACCRSUBOBJVH',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Accrual Engine Accruals Subobject'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  dataCategory:#VALUE_HELP,
  usageType: {
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #MASTER
  }
}
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities:[
  #CDS_MODELING_DATA_SOURCE,
  #VALUE_HELP_PROVIDER,
  #SEARCHABLE_ENTITY
]
@Search.searchable: true
define view I_AccrEngineAccrualSubobjectVH
  as select from acesobj
{
  key comp       as AccrualEngineAccrualObjectType,
  key logsys     as AccrualObjectLogicalSystem,
  key bukrs      as CompanyCode,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key ref_key    as AccrualObject,
  key ref_subkey as AccrualSubobject
}
```
