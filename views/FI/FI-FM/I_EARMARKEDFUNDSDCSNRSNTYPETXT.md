---
name: I_EARMARKEDFUNDSDCSNRSNTYPETXT
description: Earmarkedfundsdcsnrsntypetxt
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
# I_EARMARKEDFUNDSDCSNRSNTYPETXT

**Earmarkedfundsdcsnrsntypetxt**

| Property | Value |
|---|---|
| App Component | `FI-FM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |
| `EmrkdFndsDecisionReasonType` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as reasontyp preserving type )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `EmrkdFndsDecisionReasonTypeTxt` |  | |  | `cast ( ddtext as fmis_efd_decisionreasontypetxt preserving type )` |
| `_Language` | | ✓ | | |
| `_EarmarkedFundsDcsnRsnType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
    dataExtraction.enabled: true,
    technicalName: 'IEFDDCSNRSNTYPET'
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
    representativeKey: 'EmrkdFndsDecisionReasonType',
    dataCategory: #TEXT,
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT
  }
@Search.searchable: true  
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Decision Reason Type - Text'
define view entity I_EarmarkedFundsDcsnRsnTypeTxt
  as select from dd07t
  association        to parent I_EarmarkedFundsDcsnRsnType as _EarmarkedFundsDcsnRsnType on $projection.EmrkdFndsDecisionReasonType = _EarmarkedFundsDcsnRsnType.EmrkdFndsDecisionReasonType
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                                     as Language,
      @ObjectModel.foreignKey.association: '_EarmarkedFundsDcsnRsnType'
      @ObjectModel.text.element: ['EmrkdFndsDecisionReasonTypeTxt']
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as reasontyp preserving type ) as EmrkdFndsDecisionReasonType,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                               as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast ( ddtext as fmis_efd_decisionreasontypetxt preserving type )                              as EmrkdFndsDecisionReasonTypeTxt,

      _EarmarkedFundsDcsnRsnType,
      _Language
}

where
      domname       = 'REASONTYP'
  and as4local      = 'A'
  and dd07t.as4vers = '0000'
```
