---
name: I_EARMARKEDFUNDS_DCSNREASON
description: "Earmarkedfunds Dcsnreason"
app_component: FI-FM
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
  - FI-FM
  - interface-view
  - component:FI-FM
  - lob:Finance
---
# I_EARMARKEDFUNDS_DCSNREASON

**Earmarkedfunds Dcsnreason**

| Property | Value |
|---|---|
| App Component | `FI-FM` |
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
| `EarmarkedFundsDecisionReason` | ✓ | |  | `fmreason` |  |  |
| `EmrkdFndsDecisionReasonType` |  | |  | `reasontyp` |  |  |
| `EmrkdFndsDcsnRsnIsFinal` |  | |  | `wftrigger` |  |  |
| `_EarmarkedFundsDcsnRsnType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EarmarkedFundsDcsnRsnType` | `I_EarmarkedFundsDcsnRsnType` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL,
    technicalName: 'IEFDDCSNREASON'
  }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER,
                                     #EXTRACTION_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
      },
    representativeKey: 'EarmarkedFundsDecisionReason',
    sapObjectNodeType.name: 'EarmarkedFundsDecisionReason',
    modelingPattern: #VALUE_HELP_PROVIDER
  }
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Earmarked Funds Decision Reason'
define root view entity I_EarmarkedFunds_DcsnReason
  as select from treasons
  association [0..1] to I_EarmarkedFundsDcsnRsnType    as _EarmarkedFundsDcsnRsnType on $projection.EmrkdFndsDecisionReasonType = _EarmarkedFundsDcsnRsnType.EmrkdFndsDecisionReasonType
  composition [0..*] of I_EarmarkedFunds_DcsnReasonTxt as _Text

{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key fmreason  as EarmarkedFundsDecisionReason,
      @ObjectModel.foreignKey.association: '_EarmarkedFundsDcsnRsnType'
      reasontyp as EmrkdFndsDecisionReasonType,
      @Semantics.booleanIndicator
      wftrigger as EmrkdFndsDcsnRsnIsFinal,
      _EarmarkedFundsDcsnRsnType,

      _Text
}
```
