---
name: I_TRSYHDGGCLASSFCTNTEXT
description: "Trsyhdggclassfctntext"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TRSYHDGGCLASSFCTNTEXT

**Trsyhdggclassfctntext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `lang` |  |  |
| `HedgingClassification` | ✓ | |  | `hedging_classification` |  |  |
| `HedgingClassificationName` |  | |  | `text` |  |  |
| `_TreasuryHedgingClassfctn` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TreasuryHedgingClassfctn` | `I_TreasuryHedgingClassfctn` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL
@EndUserText.label: 'Treasury Hedging Classification - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.dataCategory:#TEXT
@Analytics.technicalName: 'IHDGCLASSTEXT' //marks view as text view
@ObjectModel.representativeKey: 'HedgingClassification'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType:#BASIC
@Search.searchable: true
@Consumption.ranked: true

define view entity I_TrsyHdggClassfctnText
  as select from toec_class_t as hclasst

  association [0..1] to I_TreasuryHedgingClassfctn as _TreasuryHedgingClassfctn on $projection.HedgingClassification = _TreasuryHedgingClassfctn.HedgingClassification
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language

{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key hclasst.lang                       as Language,
  key hclasst.hedging_classification     as HedgingClassification,
      @Semantics.text: true //text field
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      hclasst.text                       as HedgingClassificationName,

      _TreasuryHedgingClassfctn,
      _Language

}
```
