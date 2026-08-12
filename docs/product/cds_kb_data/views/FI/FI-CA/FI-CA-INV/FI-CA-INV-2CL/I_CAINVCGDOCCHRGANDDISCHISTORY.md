---
name: I_CAINVCGDOCCHRGANDDISCHISTORY
description: "Cainvcgdocchrganddischistory"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCCHRGANDDISCHISTORY

**Cainvcgdocchrganddischistory**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvoicingDocument` | ✓ | |  | `invdocno` |  |  |
| `CADocumentNumber` | ✓ | |  | `opbel` |  |  |
| `CABPItemNumber` | ✓ | |  | `opupk` |  |  |
| `CASequenceNumber` | ✓ | |  | `consno` |  |  |
| `CADocumentNumberSrce` |  | |  | `opbel_src` |  |  |
| `CARepetitionItemNumberSrce` |  | |  | `opupw_src` |  |  |
| `CABusinessPartnerItemNmbrSrce` |  | |  | `opupk_src` |  |  |
| `CASubstituteDocumentNumberSrce` |  | |  | `abwbl_src` |  |  |
| `CAAmountInTransactionCrcySrce` |  | |  | `betrw_src` |  |  |
| `TransactionCurrency` |  | |  | `waers` |  |  |
| `CAInvcgChrgAndDiscAmount` |  | |  | `chgamt` |  |  |
| `_CAInvcgDocHeader` | | ✓ | | | | |
| `_CADocument` | | ✓ | | | | |
| `_CADocumentSrce` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader` | [1..1] |
| `_CADocument` | `I_CADocument` | [0..1] |
| `_CADocumentSrce` | `I_CADocument` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Fakt.bel. Historie Zu-/Abschläge'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'CAInvcgDocChrgAndDiscHistory',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Analytics.technicalName: 'ICAInvcDChDstH'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_CAInvcgDocChrgAndDiscHistory
  as select from dfkkinvdoc_ch

  association [1..1] to I_CAInvcgDocHeader as _CAInvcgDocHeader    on $projection.CAInvoicingDocument = _CAInvcgDocHeader.CAInvoicingDocument
  association [0..1] to I_CADocument       as _CADocument          on $projection.CADocumentNumber = _CADocument.CADocumentNumber
  association [0..1] to I_CADocument       as _CADocumentSrce      on $projection.CADocumentNumberSrce = _CADocumentSrce.CADocumentNumber
  association [0..1] to I_Currency         as _TransactionCurrency on $projection.TransactionCurrency = _TransactionCurrency.Currency
{
      @ObjectModel.foreignKey.association: '_CAInvcgDocHeader'
  key invdocno  as CAInvoicingDocument,
      @ObjectModel.foreignKey.association: '_CADocument'
  key opbel     as CADocumentNumber,
  key opupk     as CABPItemNumber,
  key consno    as CASequenceNumber,
      @ObjectModel.foreignKey.association: '_CADocumentSrce'
      opbel_src as CADocumentNumberSrce,
      opupw_src as CARepetitionItemNumberSrce,
      opupk_src as CABusinessPartnerItemNmbrSrce,
      abwbl_src as CASubstituteDocumentNumberSrce,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      betrw_src as CAAmountInTransactionCrcySrce,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers     as TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      chgamt    as CAInvcgChrgAndDiscAmount,

      // associations
      _CAInvcgDocHeader,
      _CADocument,
      _CADocumentSrce,
      _TransactionCurrency
}
```
