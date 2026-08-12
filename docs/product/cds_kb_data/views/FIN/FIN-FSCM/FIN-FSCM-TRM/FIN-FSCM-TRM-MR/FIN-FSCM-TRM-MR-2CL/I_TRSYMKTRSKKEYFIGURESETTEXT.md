---
name: I_TRSYMKTRSKKEYFIGURESETTEXT
description: "Trsymktrskkeyfiguresettext"
app_component: FIN-FSCM-TRM-MR-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
