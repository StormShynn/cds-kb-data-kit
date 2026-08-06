---
name: I_ACCRENGINEACCRUALSUBOBJECTVH
description: Accrengineaccrualsubobjectvh
app_component: FI-GL-GL-ACE-2CL
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `AccrualEngineAccrualObjectType` | `comp` |
| key `AccrualObjectLogicalSystem` | `logsys` |
| key `CompanyCode` | `bukrs` |
| key `AccrualObject` | `ref_key` |
| key `AccrualSubobject` | `ref_subkey` |

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
