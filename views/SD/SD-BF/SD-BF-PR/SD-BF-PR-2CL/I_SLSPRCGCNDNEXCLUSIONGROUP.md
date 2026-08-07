---
name: I_SLSPRCGCNDNEXCLUSIONGROUP
description: "Slsprcgcndnexclusiongroup"
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
# I_SLSPRCGCNDNEXCLUSIONGROUP

**Slsprcgcndnexclusiongroup**

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
| `ConditionExclusionGroup` | ✓ | |  |  |  |  |
| `_SlsPrcgCndnTypeInExclsnGroup` | | ✓ | | | | |
| `_SlsCndnExclsnForPrcgProced` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SlsPrcgCndnTypeInExclsnGroup` | `I_SlsPrcgCndnTypeInExclsnGroup` | [0..*] |
| `_SlsCndnExclsnForPrcgProced` | `I_SlsCndnExclsnForPrcgProced` | [0..*] |
| `_Text` | `I_SlsPrcgCndnExclsnGroupText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNEXCLSN'
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
@EndUserText.label: 'Condition Exclusion Group for Pricing in Sales'
define view I_SlsPrcgCndnExclusionGroup
  as select from P_ConditionExclusionGroup
  association [0..*] to I_SlsPrcgCndnTypeInExclsnGroup as _SlsPrcgCndnTypeInExclsnGroup on  $projection.ConditionUsage          = _SlsPrcgCndnTypeInExclsnGroup.ConditionUsage
                                                                                        and $projection.ConditionApplication    = _SlsPrcgCndnTypeInExclsnGroup.ConditionApplication
                                                                                        and $projection.ConditionExclusionGroup = _SlsPrcgCndnTypeInExclsnGroup.ConditionExclusionGroup
  association [0..*] to I_SlsCndnExclsnForPrcgProced   as _SlsCndnExclsnForPrcgProced   on  $projection.ConditionUsage            = _SlsCndnExclsnForPrcgProced.ConditionUsage
                                                                                        and $projection.ConditionApplication      = _SlsCndnExclsnForPrcgProced.ConditionApplication
                                                                                        and (
                                                                                           $projection.ConditionExclusionGroup    = _SlsCndnExclsnForPrcgProced.ConditionExclusionGroup1
                                                                                           or $projection.ConditionExclusionGroup = _SlsCndnExclsnForPrcgProced.ConditionExclusionGroup2
                                                                                         )
  association [0..*] to I_SlsPrcgCndnExclsnGroupText   as _Text                         on  $projection.ConditionUsage          = _Text.ConditionUsage
                                                                                        and $projection.ConditionApplication    = _Text.ConditionApplication
                                                                                        and $projection.ConditionExclusionGroup = _Text.ConditionExclusionGroup

{
  key ConditionUsage,
  key ConditionApplication,
  key ConditionExclusionGroup,
      _SlsPrcgCndnTypeInExclsnGroup,
      _SlsCndnExclsnForPrcgProced,
      _Text
}
where
      ConditionUsage       = 'A'
  and ConditionApplication = 'V'
```
