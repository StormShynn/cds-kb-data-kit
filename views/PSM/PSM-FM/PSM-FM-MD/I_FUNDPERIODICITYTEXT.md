---
name: I_FUNDPERIODICITYTEXT
description: Fundperiodicitytext
app_component: PSM-FM-MD
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-FM
  - PSM-FM-MD
  - interface-view
  - text-view
  - text
  - component:PSM-FM-MD
  - lob:Other
---
# I_FUNDPERIODICITYTEXT

**Fundperiodicitytext**

| Property | Value |
|---|---|
| App Component | `PSM-FM-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FundPeriodicity` | ✓ | |  | `periodicity` |
| `Language` | ✓ | |  | `spras` |
| `FundPeriodicityText` |  | |  | `description` |
| `_Language` | | ✓ | | |
| `_FundPeriodicity` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_FundPeriodicity` | `I_FundPeriodicity` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Fund Frequency - Text'
@ObjectModel.representativeKey: 'FundPeriodicity'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@ObjectModel: { 
    usageType: {
        dataClass: #MASTER,
        serviceQuality: #A,
        sizeCategory: #L
    },
    supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE ]
}


@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering: { status: #ACTIVE, type: #FULL }
@AbapCatalog.sqlViewName: 'IFUNDPRIODICITYT'
@Search.searchable: true

define view I_FundPeriodicityText
  as select from psm_d_prdicityt
  association [1..1] to I_Language        as _Language        on $projection.Language = _Language.Language
  association [0..1] to I_FundPeriodicity as _FundPeriodicity on $projection.FundPeriodicity = _FundPeriodicity.FundPeriodicity

{
      @ObjectModel.foreignKey.association: '_FundPeriodicity'
  key periodicity as FundPeriodicity,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras       as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      description as FundPeriodicityText,

      _Language,
      _FundPeriodicity

}
```
