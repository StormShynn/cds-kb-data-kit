---
name: I_CAINVCGDOCCHARGEANDDISCOUNT
description: "Cainvcgdocchargeanddiscount"
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
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCCHARGEANDDISCOUNT

**Cainvcgdocchargeanddiscount**

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
| `CAInvcgChargeAndDiscountKey` |  | |  | `chgkey` |  |  |
| `CAInvcgIsChargeOrDiscount` |  | |  | `chgdisc` |  |  |
| `CACreditWorthiness` |  | |  | `bonit` |  |  |
| `CAItemPeriodStartDate` |  | |  | `date_from` |  |  |
| `CAItemPeriodEndDate` |  | |  | `date_to` |  |  |
| `TransactionCurrency` |  | |  | `waers` |  |  |
| `CAInvcgChrgAndDiscBaseAmount` |  | |  | `basamt` |  |  |
| `CAInvcgChrgAndDiscAmount` |  | |  | `chgamt` |  |  |
| `CAInvcgChrgAndDiscIsExisting` |  | |  | `chghist` |  |  |
| `_CAInvcgDocHeader` | | ✓ | | | | |
| `_CADocument` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader` | [1..1] |
| `_CADocument` | `I_CADocument` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Fakturierungsbeleg Zu- und Abschläge'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'ContrAcctgInvcgDocChrgAndDisc',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics.technicalName: 'ICAInvcgDChDst'
define view entity I_CAInvcgDocChargeAndDiscount
  as select from dfkkinvdoc_c

  association [1..1] to I_CAInvcgDocHeader as _CAInvcgDocHeader    on $projection.CAInvoicingDocument = _CAInvcgDocHeader.CAInvoicingDocument  
  association [0..1] to I_CADocument       as _CADocument          on $projection.CADocumentNumber = _CADocument.CADocumentNumber
  association [0..1] to I_Currency         as _TransactionCurrency on $projection.TransactionCurrency = _TransactionCurrency.Currency
{
      @ObjectModel.foreignKey.association: '_CAInvcgDocHeader'
  key invdocno  as CAInvoicingDocument,
      @ObjectModel.foreignKey.association: '_CADocument'
  key opbel     as CADocumentNumber,
  key opupk     as CABPItemNumber,
      chgkey    as CAInvcgChargeAndDiscountKey,
      chgdisc   as CAInvcgIsChargeOrDiscount,
      bonit     as CACreditWorthiness,
      date_from as CAItemPeriodStartDate,
      date_to   as CAItemPeriodEndDate,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers     as TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      basamt    as CAInvcgChrgAndDiscBaseAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      chgamt    as CAInvcgChrgAndDiscAmount,
      chghist   as CAInvcgChrgAndDiscIsExisting,

      // associations
      _CAInvcgDocHeader,
      _CADocument,
      _TransactionCurrency
}
```
