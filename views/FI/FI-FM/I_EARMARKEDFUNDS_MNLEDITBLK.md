---
name: I_EARMARKEDFUNDS_MNLEDITBLK
description: Earmarkedfunds Mnleditblk
app_component: FI-FM
software_component: SAPSCORE
release_state: released
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
# I_EARMARKEDFUNDS_MNLEDITBLK

**Earmarkedfunds Mnleditblk**

| Property | Value |
|---|---|
| App Component | `FI-FM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `EarmarkedFundsManualEditBlock` | `locktype` |
| `_Text` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL,
    technicalName: 'IEFDMNLEDITBLK'
  }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER,
                                     #EXTRACTION_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel: {
    usageType: {
        dataClass: #META,
        serviceQuality: #A,
        sizeCategory: #S
      },
    representativeKey: 'EarmarkedFundsManualEditBlock',
    sapObjectNodeType.name: 'EarmarkedFundsManualEditBlock',
    modelingPattern: #VALUE_HELP_PROVIDER
  }
@VDM.viewType: #BASIC
@EndUserText.label: 'Earmarked Funds Manual Editing Block'
define root view entity I_EarmarkedFunds_MnlEditBlk
  as select from fmreslocks
  composition [0..*] of I_EarmarkedFunds_MnlEditBlkTxt as _Text

{
      @ObjectModel.text.association: '_Text'
  key locktype as EarmarkedFundsManualEditBlock,

      _Text
}
```
