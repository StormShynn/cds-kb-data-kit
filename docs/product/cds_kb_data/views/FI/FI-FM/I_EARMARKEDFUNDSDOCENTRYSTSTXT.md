---
name: I_EARMARKEDFUNDSDOCENTRYSTSTXT
description: "Earmarkedfundsdocentryststxt"
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
# I_EARMARKEDFUNDSDOCENTRYSTSTXT

**Earmarkedfundsdocentryststxt**

| Property | Value |
|---|---|
| App Component | `FI-FM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `EarmarkedFundsDocEntryStatus` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as fmr_mvstat preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `EarmarkedFundsDocEntryStsText` |  | |  | `cast ( ddtext as fmis_efd_entrystatustext preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_EarmarkedFundsDocEntryStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
    dataExtraction.enabled: true,
    technicalName: 'IEFDENTRYSTSTEXT'
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
    representativeKey: 'EarmarkedFundsDocEntryStatus',
    dataCategory: #TEXT,
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT
  }
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Earmarked Funds Doc Entry Status - Text'
define view entity I_EarmarkedFundsDocEntryStsTxt
  as select from dd07t
  association        to parent I_EarmarkedFundsDocEntryStatus as _EarmarkedFundsDocEntryStatus on $projection.EarmarkedFundsDocEntryStatus = _EarmarkedFundsDocEntryStatus.EarmarkedFundsDocEntryStatus
  association [0..1] to I_Language                            as _Language                     on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                                      as Language,
      @ObjectModel.foreignKey.association: '_EarmarkedFundsDocEntryStatus'
      @ObjectModel.text.element: ['EarmarkedFundsDocEntryStsText']
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as fmr_mvstat preserving type ) as EarmarkedFundsDocEntryStatus,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                                as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast ( ddtext as fmis_efd_entrystatustext preserving type )                                     as EarmarkedFundsDocEntryStsText,

      _EarmarkedFundsDocEntryStatus,
      _Language
}

where
      domname       = 'FMR_MVSTAT'
  and as4local      = 'A'
  and dd07t.as4vers = '0000'
```
