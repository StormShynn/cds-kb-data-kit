---
name: I_US_TAXPARTNERTAXDOCUMENT
description: US Taxpartnertaxdocument
app_component: FI-TXL-EXT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-TXL
  - FI-TXL-EXT
  - interface-view
  - tax
  - document
  - partner
  - component:FI-TXL-EXT
  - lob:Finance
---
# I_US_TAXPARTNERTAXDOCUMENT

**US Taxpartnertaxdocument**

| Property | Value |
|---|---|
| App Component | `FI-TXL-EXT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `US_TaxPartnerTaxDocument` | ✓ | |  | `cast(etxdch.docnr as fis_externaltaxdocument preserving type)` |  |  |
| `ReferenceDocument` |  | |  | `awref` |  |  |
| `ReferenceDocumentContext` |  | |  | `cast(etxdch.aworg as fis_aworg preserving type)` |  |  |
| `US_TxPartnerTxDocumentSentDate` |  | |  | `cast(etxdch.docstatuschanged as fis_externaltaxdatesent preserving type)` |  |  |
| `US_TaxPartnerTaxTransaction` |  | |  | `cast(etxdch.tid as fis_etxdc_ukey preserving type)` |  |  |
| `ReferenceDocumentType` |  | |  | `cast(etxdch.awtyp as fis_awtyp preserving type)` |  |  |
| `CompanyCode` |  | |  | `cast(etxdch.comp_code as fis_bukrs preserving type)` |  |  |
| `AccountingDocument` |  | |  | `cast(etxdcf.belnr as farp_belnr_d preserving type)` |  |  |
| `FiscalYear` |  | |  | `cast(etxdcf.gjahr as fis_gjahr_no_conv preserving type)` |  |  |
| `TransactionCurrency` |  | |  | `cast(etxdch.currency as fis_rwcur preserving type)` |  |  |
| `CompanyCodeCurrency` |  | |  | `cast(etxdch.gl_currency as fis_hwaer preserving type)` |  |  |
| `DefaultTaxDate` |  | |  | `cast(etxdch.rep_date as fis_etxtaxdefaulttaxdate preserving type)` |  |  |
| `TaxCalculationProcedure` |  | |  | `cast(etxdch.tax_procedure as kalsm_d preserving type)` |  |  |
| `US_TaxPartTaxDocUpdateType` |  | |  | `cast(etxdch.uflag as fis_etxdc_upd_type preserving type)` |  |  |
| `US_TaxPartTaxDocUpdateStatus` |  | |  | `cast( '' as fis_etxdc_upd_status preserving type)` |  |  |
| `US_TxPartnerTxDocSentByUsr` |  | |  | `cast(etxdch.usnam as fis_update_user preserving type)` |  |  |
| `PostingDate` |  | | `_AccountingDocument` | `PostingDate` |  |  |
| `DocumentDate` |  | | `_AccountingDocument` | `DocumentDate` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_Type` | | ✓ | | | | |
| `_TaxDocItem` | | ✓ | | | | |
| `_AccountingDocument` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Type` | `I_US_TaxPartTaxDocUpdateType` | [0..1] |
| `_TaxDocItem` | `I_US_TaxPartnerTaxDocumentItem` | [1..*] |
| `_AccountingDocument` | `I_AccountingDocument` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUSTXPARTTXDOC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'US TaxPartnerTaxDocument'

@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel.representativeKey: 'US_TaxPartnerTaxDocument'
@ObjectModel.sapObjectNodeType.name: 'US_TaxPartnerTaxDocument'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:
   [ #CDS_MODELING_ASSOCIATION_TARGET ]


define view I_US_TaxPartnerTaxDocument
  as select from           etxdch
    left outer to one join etxdcf on etxdch.docnr = etxdcf.docnr

  association [0..1] to I_CompanyCode                  as _CompanyCode         on  $projection.CompanyCode = _CompanyCode.CompanyCode
  //  association [0..1] to I_US_TaxPartTaxDocUpdateStatus as _Status             on  $projection.US_TaxPartTaxDocUpdateStatus = _Status.US_TaxPartTaxDocUpdateStatus
  association [0..1] to I_US_TaxPartTaxDocUpdateType   as _Type                on  $projection.US_TaxPartTaxDocUpdateType = _Type.US_TaxPartTaxDocUpdateType
  association [1..*] to I_US_TaxPartnerTaxDocumentItem as _TaxDocItem          on  $projection.US_TaxPartnerTaxDocument = _TaxDocItem.US_TaxPartnerTaxDocument
  association [0..1] to I_AccountingDocument           as _AccountingDocument  on  $projection.AccountingDocument = _AccountingDocument.AccountingDocument
                                                                               and $projection.CompanyCode        = _AccountingDocument.CompanyCode
                                                                               and $projection.FiscalYear         = _AccountingDocument.FiscalYear
  association [0..1] to I_Currency                     as _TransactionCurrency on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_Currency                     as _CompanyCodeCurrency on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
{
  key cast(etxdch.docnr as fis_externaltaxdocument preserving type)            as US_TaxPartnerTaxDocument,
      etxdch.awref                                                             as ReferenceDocument,
      cast(etxdch.aworg as fis_aworg preserving type)                          as ReferenceDocumentContext,
      cast(etxdch.docstatuschanged as fis_externaltaxdatesent preserving type) as US_TxPartnerTxDocumentSentDate,
      cast(etxdch.tid     as fis_etxdc_ukey preserving type)                   as US_TaxPartnerTaxTransaction,
      cast(etxdch.awtyp as fis_awtyp preserving type)                          as ReferenceDocumentType,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      cast(etxdch.comp_code as fis_bukrs preserving type)                      as CompanyCode,
      cast(etxdcf.belnr as farp_belnr_d preserving type)                       as AccountingDocument,
      cast(etxdcf.gjahr as fis_gjahr_no_conv preserving type)                  as FiscalYear,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      cast(etxdch.currency as fis_rwcur preserving type)                       as TransactionCurrency,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      cast(etxdch.gl_currency as fis_hwaer preserving type)                    as CompanyCodeCurrency,
      cast(etxdch.rep_date as  fis_etxtaxdefaulttaxdate preserving type)       as DefaultTaxDate,
      cast(etxdch.tax_procedure as kalsm_d preserving type)                    as TaxCalculationProcedure,
      cast(etxdch.uflag            as fis_etxdc_upd_type preserving type)      as US_TaxPartTaxDocUpdateType,
      cast( '' as fis_etxdc_upd_status preserving type) as US_TaxPartTaxDocUpdateStatus,
      cast(etxdch.usnam  as fis_update_user preserving type)                   as US_TxPartnerTxDocSentByUsr,
      _AccountingDocument.PostingDate                                          as PostingDate,
      _AccountingDocument.DocumentDate                                         as DocumentDate,

      _AccountingDocument,
      _TaxDocItem,
      _CompanyCode,
      _Type,
      _TransactionCurrency,
      _CompanyCodeCurrency
      //      _Status
}
```
