---
name: I_SLSPRCGCNDNEXCLSNGROUPTEXT
description: Slsprcgcndnexclsngrouptext
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
  - text-view
  - text
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_SLSPRCGCNDNEXCLSNGROUPTEXT

**Slsprcgcndnexclsngrouptext**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  |  |
| `ConditionUsage` | ✓ | |  |  |
| `ConditionApplication` | ✓ | |  |  |
| `ConditionExclusionGroup` | ✓ | |  |  |
| `ConditionExclusionGroupText` |  | |  |  |
| `_SlsPrcgCndnExclusionGroup` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SlsPrcgCndnExclusionGroup` | `I_SlsPrcgCndnExclusionGroup` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNEXCLSNT'
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
@ObjectModel.dataCategory: #TEXT
@EndUserText.label: 'Condition Exclusion Group for Pricing in Sales - Text'
define view I_SlsPrcgCndnExclsnGroupText
  as select from P_ConditionExclusionGroupText
  association [1..1] to I_SlsPrcgCndnExclusionGroup as _SlsPrcgCndnExclusionGroup on  $projection.ConditionUsage          = _SlsPrcgCndnExclusionGroup.ConditionUsage
                                                                                  and $projection.ConditionApplication    = _SlsPrcgCndnExclusionGroup.ConditionApplication
                                                                                  and $projection.ConditionExclusionGroup = _SlsPrcgCndnExclusionGroup.ConditionExclusionGroup

{
      @Semantics.language: true
  key Language,
  key ConditionUsage,
  key ConditionApplication,
  key ConditionExclusionGroup,
      @Semantics.text: true
      ConditionExclusionGroupText,
      _SlsPrcgCndnExclusionGroup
}
where
      ConditionUsage       = 'A'
  and ConditionApplication = 'V'
```
