---
name: I_CABILLGDOCREVERSALREASONTEXT
description: Cabillgdocreversalreasontext
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
# I_CABILLGDOCREVERSALREASONTEXT

**Cabillgdocreversalreasontext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CABillgDocumentReversalReason` | `_tfk2646t.bill_revreason` |
| key `Language` | `_tfk2646t.langu` |
| `CABillgDocReversalReasonText` | `cast( _tfk2646t.text as bill_revreason_txt_gfn_kk preserving type )` |
| `_CABillgDocReversalReason` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgDocReversalReason` | `I_CABillgDocReversalReason` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.technicalName: 'ICA2646T'
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Storn.grund für Abr. belege (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgDocumentReversalReason',
  sapObjectNodeType.name: 'ContrAcctgBillgDocRvslRsnText',
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

define view entity I_CABillgDocReversalReasonText
  as select from tfk2646t as _tfk2646t
  association [0..1] to I_CABillgDocReversalReason as _CABillgDocReversalReason on $projection.CABillgDocumentReversalReason = _CABillgDocReversalReason.CABillgDocumentReversalReason
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABillgDocReversalReason'
  key _tfk2646t.bill_revreason                                            as CABillgDocumentReversalReason,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk2646t.langu                                                     as Language,
      @Semantics.text: true
      cast( _tfk2646t.text as bill_revreason_txt_gfn_kk preserving type ) as CABillgDocReversalReasonText,

      _CABillgDocReversalReason,
      _Language
}
```
