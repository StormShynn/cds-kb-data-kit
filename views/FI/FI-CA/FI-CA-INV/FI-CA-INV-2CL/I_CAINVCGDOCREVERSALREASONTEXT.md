---
name: I_CAINVCGDOCREVERSALREASONTEXT
description: Cainvcgdocreversalreasontext
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - text-view
  - text
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCREVERSALREASONTEXT

**Cainvcgdocreversalreasontext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgDocumentReversalReason` | ✓ | | `_tfk2661t` | `revreason` |  |  |
| `Language` | ✓ | | `_tfk2661t` | `langu` |  |  |
| `CAInvcgDocReversalReasonText` |  | |  | `cast( _tfk2661t.text as revreason_txt_gfn_kk preserving type )` |  |  |
| `_CAInvcgDocReversalReason` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocReversalReason` | `I_CAInvcgDocReversalReason` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'ICA2661T'
@EndUserText.label: 'Storn.grund für Fakt.belege (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgDocumentReversalReason',
  sapObjectNodeType.name: 'ContrAcctgInvcgDocRvslRsnText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CAInvcgDocReversalReasonText
  as select from tfk2661t as _tfk2661t
  association [0..1] to I_CAInvcgDocReversalReason as _CAInvcgDocReversalReason on $projection.CAInvcgDocumentReversalReason = _CAInvcgDocReversalReason.CAInvcgDocumentReversalReason
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAInvcgDocReversalReason'
  key _tfk2661t.revreason                                            as CAInvcgDocumentReversalReason,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk2661t.langu                                                as Language,
      @Semantics.text: true
      cast( _tfk2661t.text as revreason_txt_gfn_kk preserving type ) as CAInvcgDocReversalReasonText,

      _CAInvcgDocReversalReason,
      _Language
}
```
