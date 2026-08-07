---
name: I_FXFIXINGREFERENCETEXT
description: Fxfixingreferencetext
app_component: FIN-FSCM-TRM-2CL
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
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FXFIXINGREFERENCETEXT

**Fxfixingreferencetext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `ForeignExchangeFixingReference` | ✓ | |  | `fix_id` |  |  |
| `FXFixingReferenceName` |  | |  | `fix_id_text` |  |  |
| `_Language` | | ✓ | | | | |
| `_FixingReference` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_FixingReference` | `I_FXFixingReference` | [0..1] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IFXFIXINGREFT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Foreign Exchange Fixing Reference - Text'
@ObjectModel.dataCategory: #TEXT 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,  #SQL_DATA_SOURCE,  #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern:  #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'ForeignExchangeFixingReference'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@Metadata.ignorePropagatedAnnotations: true 
@VDM.viewType: #BASIC
@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.sapObjectNodeType.name: 'FXFixingReferenceText'

define view I_FXFixingReferenceText 
  as select from ftrt_fix_def_t
  association [0..1] to I_Language          as _Language        on $projection.Language = _Language.Language
  association [0..1] to I_FXFixingReference as _FixingReference on $projection.ForeignExchangeFixingReference = _FixingReference.ForeignExchangeFixingReference
{
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language'
  key spras  as Language,
  @ObjectModel.foreignKey.association: '_FixingReference'
  key fix_id as ForeignExchangeFixingReference,
  @Semantics.text: true
  @Search.defaultSearchElement: true 
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.8
  fix_id_text as FXFixingReferenceName,
  
  _Language,
  _FixingReference 
}
```
