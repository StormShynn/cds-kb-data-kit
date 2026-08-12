---
name: I_SLSPRCGCNDNEXCLSNGROUPTEXT
description: "Slsprcgcndnexclsngrouptext"
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  |  |  |
| `ConditionUsage` | ✓ | |  |  |  |  |
| `ConditionApplication` | ✓ | |  |  |  |  |
| `ConditionExclusionGroup` | ✓ | |  |  |  |  |
| `ConditionExclusionGroupText` |  | |  |  |  |  |
| `_SlsPrcgCndnExclusionGroup` | | ✓ | | | | |

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
