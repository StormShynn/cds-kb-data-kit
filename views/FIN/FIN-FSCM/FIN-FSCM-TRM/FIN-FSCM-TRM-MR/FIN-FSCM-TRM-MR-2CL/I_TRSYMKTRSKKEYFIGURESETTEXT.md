---
name: I_TRSYMKTRSKKEYFIGURESETTEXT
description: "Trsymktrskkeyfiguresettext"
app_component: FIN-FSCM-TRM-MR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-TRM-MR-2CL
  - lob:Other
---
# I_TRSYMKTRSKKEYFIGURESETTEXT

**Trsymktrskkeyfiguresettext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-MR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `MarketRiskKeyFigureSet` | ✓ | |  | `mra_kf_set` |  |  |
| `MarketRiskKeyFigureSetName` |  | |  | `text` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName:            'ITRSYKFSETTXT',
                compiler.compareFilter: true,
                preserveKey:            true,
                buffering: { status:     #ACTIVE,
                             type:       #FULL } }

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: { dataCategory:             #TEXT,
                representativeKey:        'MarketRiskKeyFigureSet',
                usageType.dataClass:      #CUSTOMIZING,
                usageType.serviceQuality: #D,
                usageType.sizeCategory:   #S,
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET  ],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT}

@VDM.viewType: #BASIC

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Treasury Market Risk Key Figure Set - Text'

define view I_TrsyMktRskKeyFigureSetText
  as select from afwgo_mrakfset_t as KeyFigureSetText
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      //KeyFigureSetText
      @Semantics.language: true
  key spras      as Language,
  key mra_kf_set as MarketRiskKeyFigureSet,
      @Semantics.text: true
      text       as MarketRiskKeyFigureSetName,

      /* Associations */
      _Language
}
```
