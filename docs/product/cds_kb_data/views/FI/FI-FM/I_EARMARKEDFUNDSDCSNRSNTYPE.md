---
name: I_EARMARKEDFUNDSDCSNRSNTYPE
description: "Earmarkedfundsdcsnrsntype"
app_component: FI-FM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_EARMARKEDFUNDSDCSNRSNTYPE

**Earmarkedfundsdcsnrsntype**

| Property | Value |
|---|---|
| App Component | `FI-FM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EmrkdFndsDecisionReasonType` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as reasontyp preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL,
    technicalName: 'IEFDDCSNRSNTYPE'
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
    representativeKey: 'EmrkdFndsDecisionReasonType',
    sapObjectNodeType.name: 'EmrkdFndsDecisionReasonType',
    dataCategory: #VALUE_HELP,
    resultSet.sizeCategory: #XS,
    modelingPattern: #VALUE_HELP_PROVIDER
  }
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Earmarked Funds Decision Reason Type'
define root view entity I_EarmarkedFundsDcsnRsnType
  as select from dd07l
  composition [0..*] of I_EarmarkedFundsDcsnRsnTypeTxt as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as reasontyp preserving type ) as EmrkdFndsDecisionReasonType,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                               as DomainValue,

      _Text
}

where
      domname       = 'REASONTYP'
  and as4local      = 'A'
  and dd07l.as4vers = '0000'
```
