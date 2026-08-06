---
name: I_CONDITIONEXCLUSIONPROCEDURE
description: Conditionexclusionprocedure
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-PR
  - interface-view
  - pricing-condition
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_CONDITIONEXCLUSIONPROCEDURE

**Conditionexclusionprocedure**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConditionExclusionProcedure` | `cast( dd07l.domvalue_l as kauvf )` |
| `_Text` | *Association* |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNEXCLSNPROC'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@EndUserText.label: 'Condition Exclusion Procedure'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'ConditionExclusionProcedure'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'PriceCndnExclusionProcedure'
@ObjectModel.supportedCapabilities: 
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define root view I_ConditionExclusionProcedure
  as select from dd07l 
   composition [0..*] of I_CndnExclusionProcedureText as _Text 
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as kauvf ) as ConditionExclusionProcedure,

      _Text
} 
where dd07l.domname  = 'KAUVF'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
