---
name: I_EARMARKEDFUNDS_DCSNREASONTXT
description: "Earmarkedfunds Dcsnreasontxt"
app_component: FI-FM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_EARMARKEDFUNDS_DCSNREASONTXT

**Earmarkedfunds Dcsnreasontxt**

| Property | Value |
|---|---|
| App Component | `FI-FM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `EarmarkedFundsDecisionReason` | ✓ | |  | `fmreason` |  |  |
| `EmrkdFundsDecisionReasonText` |  | |  | `cast ( fmreasntxt as fmis_efd_decisionreasontext preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_EarmarkedFundsDcsnReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
    dataExtraction.enabled: true,
    technicalName: 'IEFDDCSNREASONT'
  }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
      },
    representativeKey: 'EarmarkedFundsDecisionReason',
    dataCategory: #TEXT,
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT 
  }
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Earmarked Funds Decision Reason - Text'
define view entity I_EarmarkedFunds_DcsnReasonTxt
  as select from treasonst
  association        to parent I_EarmarkedFunds_DcsnReason as _EarmarkedFundsDcsnReason on $projection.EarmarkedFundsDecisionReason = _EarmarkedFundsDcsnReason.EarmarkedFundsDecisionReason
  association [0..1] to I_Language                         as _Language                 on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras                                                              as Language,
      @ObjectModel.text.element: ['EmrkdFundsDecisionReasonText']
      @ObjectModel.foreignKey.association: '_EarmarkedFundsDcsnReason'
  key fmreason                                                           as EarmarkedFundsDecisionReason,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast ( fmreasntxt as fmis_efd_decisionreasontext preserving type ) as EmrkdFundsDecisionReasonText,

      _EarmarkedFundsDcsnReason,
      _Language
}
```
