---
name: I_SLSCNDNEXCLSNFORPRCGPROCED
description: "Slscndnexclsnforprcgproced"
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
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_SLSCNDNEXCLSNFORPRCGPROCED

**Slscndnexclsnforprcgproced**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionUsage` | ✓ | |  |  |  |  |
| `ConditionApplication` | ✓ | |  |  |  |  |
| `PricingProcedure` | ✓ | |  |  |  |  |
| `CndnExclusionSequentialNumber` | ✓ | |  |  |  |  |
| `ConditionExclusionProcedure` |  | |  |  |  |  |
| `ConditionExclusionGroup1` |  | |  |  |  |  |
| `ConditionExclusionGroup2` |  | |  |  |  |  |
| `_SlsPrcgCndnExclusionGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SlsPrcgCndnExclusionGroup` | `I_SlsPrcgCndnExclusionGroup` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNEXFOPR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@EndUserText.label: 'Condition Exclusion for Pricing Procedure in Sales'
define view I_SlsCndnExclsnForPrcgProced
  as select from P_CndnExclsnForPrcgProcedure
  association [0..*] to I_SlsPrcgCndnExclusionGroup as _SlsPrcgCndnExclusionGroup on  $projection.ConditionUsage             = _SlsPrcgCndnExclusionGroup.ConditionUsage
                                                                                  and $projection.ConditionApplication       = _SlsPrcgCndnExclusionGroup.ConditionApplication
                                                                                  and (
                                                                                     $projection.ConditionExclusionGroup1    = _SlsPrcgCndnExclusionGroup.ConditionExclusionGroup
                                                                                     or $projection.ConditionExclusionGroup2 = _SlsPrcgCndnExclusionGroup.ConditionExclusionGroup
                                                                                   )

{
  key ConditionUsage,
  key ConditionApplication,
  key PricingProcedure,
  key CndnExclusionSequentialNumber,
      ConditionExclusionProcedure,
      ConditionExclusionGroup1,
      ConditionExclusionGroup2,
      _SlsPrcgCndnExclusionGroup
}
where
      ConditionUsage       = 'A'
  and ConditionApplication = 'V'
```
