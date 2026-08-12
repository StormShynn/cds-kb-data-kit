---
name: I_TREASURYREVERSALREASONTEXT
description: "Treasuryreversalreasontext"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYREVERSALREASONTEXT

**Treasuryreversalreasontext**

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
| `TreasuryReversalReason` | ✓ | |  | `sstogrd` |  |  |
| `TreasuryReversalReasonName` |  | |  | `xlangbez` |  |  |
| `_Language` | | ✓ | | | | |
| `_ReversalReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ReversalReason` | `I_TreasuryReversalReason` | [0..1] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ITRSYREVREAST'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Treasury Reversal Reason - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT 
@ObjectModel.representativeKey: 'TreasuryReversalReason'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@ObjectModel.sapObjectNodeType.name: 'TreasuryReversalReasonText'
@Metadata.ignorePropagatedAnnotations: true 
@VDM.viewType: #BASIC

define view I_TreasuryReversalReasonText 
  as select from tzst1
  association [0..1] to I_Language               as _Language       on $projection.Language               = _Language.Language
  association [0..1] to I_TreasuryReversalReason as _ReversalReason on $projection.TreasuryReversalReason = _ReversalReason.TreasuryReversalReason
{
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language'
  key spras   as Language,
  @ObjectModel.foreignKey.association: '_ReversalReason'
  key sstogrd as TreasuryReversalReason,

  @Semantics.text: true
  xlangbez    as TreasuryReversalReasonName,

  _Language,
  _ReversalReason
}
```
