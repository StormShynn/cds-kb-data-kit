---
name: I_EARMARKEDFUNDS_MNLEDITBLKTXT
description: "Earmarkedfunds Mnleditblktxt"
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
# I_EARMARKEDFUNDS_MNLEDITBLKTXT

**Earmarkedfunds Mnleditblktxt**

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
| `EarmarkedFundsManualEditBlock` | ✓ | |  | `locktype` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `EmrkdFundsManualEditBlockText` |  | |  | `text` |  |  |
| `_Language` | | ✓ | | | | |
| `_EarmarkedFundsMnlEditBlk` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
    dataExtraction.enabled: true,
    technicalName: 'IEFDMNLEDITBLKT'
  }
@Metadata.ignorePropagatedAnnotations: true  
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel: {
    usageType: {
        dataClass: #META,
        serviceQuality: #A,
        sizeCategory: #S
      },
    representativeKey: 'EarmarkedFundsManualEditBlock',
    dataCategory: #TEXT,
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT 
  }
@VDM.viewType: #BASIC
@EndUserText.label: 'Manual Editing Block - Text'
define view entity I_EarmarkedFunds_MnlEditBlkTxt
  as select from fmreslockst
  
  association        to parent I_EarmarkedFunds_MnlEditBlk as _EarmarkedFundsMnlEditBlk on $projection.EarmarkedFundsManualEditBlock = _EarmarkedFundsMnlEditBlk.EarmarkedFundsManualEditBlock
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_EarmarkedFundsMnlEditBlk'
  key locktype                        as EarmarkedFundsManualEditBlock,
      @Semantics.language: true
  key spras                           as Language,      
      @Semantics.text: true
      text                            as EmrkdFundsManualEditBlockText,

      _EarmarkedFundsMnlEditBlk,
      _Language
}
```
