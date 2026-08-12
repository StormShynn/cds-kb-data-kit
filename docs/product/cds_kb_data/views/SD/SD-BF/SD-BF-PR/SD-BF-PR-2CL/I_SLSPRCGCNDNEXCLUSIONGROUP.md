---
name: I_SLSPRCGCNDNEXCLUSIONGROUP
description: "Slsprcgcndnexclusiongroup"
app_component: SD-BF-PR-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
