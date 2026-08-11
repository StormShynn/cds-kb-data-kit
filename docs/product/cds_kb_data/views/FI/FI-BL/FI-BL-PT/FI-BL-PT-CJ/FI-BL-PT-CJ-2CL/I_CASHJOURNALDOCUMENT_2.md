---
name: I_CASHJOURNALDOCUMENT_2
description: "Cash Journal Document"
app_component: FI-BL-PT-CJ-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASHJOURNALDOCUMENT_2')/$value
semantic_en: "Cash Journal Document"
semantic_vi: "Cash Journal Document — CDS view giao diện dựa trên I_CashJournalDocument."
keywords:
  - "cash"
  - "journal"
  - "document"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "internal"
  - "language"
tags:
  - FI
  - component:FI-BL-PT-CJ-2CL
  - document
  - FI-BL
  - FI-BL-PT
  - FI-BL-PT-CJ
  - FI-BL-PT-CJ-2CL
  - interface-view
  - lob:finance
---
# I_CASHJOURNALDOCUMENT_2

**Cash Journal Document**

| Property | Value |
|---|---|
| App Component | `FI-BL-PT-CJ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASHJOURNALDOCUMENT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast( CompanyCode as bukrs preserving type )` | `CHAR(4)` | Company Code |
| `CashJournal` | ✓ | |  | `cast( CashJournal as cjnr preserving type )` | `CHAR(4)` | Cash Journal Number |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `CashJournalDocumentInternalID` | ✓ | |  |  | `CHAR(10)` | Cash Journal Document Number |
| `Language` | ✓ | |  | `cast( Language as langu preserving type )` | `LANG(1)` | Language Key |
| `Currency` |  | |  | `cast( Currency as waers preserving type )` | `CUKY(5)` | Currency Key |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Document |
| `TaxAmountInTransCrcy` |  | |  |  | `CURR(23)` | Tax Amount in Document Currency |
| `CashJournalDocumentNetAmount` |  | |  |  | `CURR(23)` | Cash Journal Document Net Amount - Document Currency |
| `WhldgTaxDeductedNetPaymentAmt` |  | |  |  | `CURR(23)` | Net Payment Amount (Withholding Tax Deducted) |
| `CashJournalReceiptAmount` |  | |  |  | `CURR(23)` | Cash Journal Amount Field with +/- Sign |
| `CashJournalPaymentAmount` |  | |  |  | `CURR(23)` | Cash Journal Amount Field with +/- Sign |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(24)` |  |
| `ReceiptRecipientName` |  | |  |  | `CHAR(35)` | Name of Receipt Recipient |
| `AuthorizationGroup` |  | | `_CashJournal` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `CashJournalDocument` |  | |  |  | `CHAR(10)` | Cash Journal Document Number for Display |
| `AccountingDocExternalReference` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `CashJournalDocumentStatus` |  | |  |  | `CHAR(2)` | Cash Journal Entry Document Status |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `CashJournalIsPrinted` |  | |  |  | `CHAR(1)` | Cash Journal Print Indicator |
| `TaxRate` |  | |  |  | `DEC(7)` | Tax rate |
| `CashJournalDocumentText1` |  | |  |  | `CHAR(100)` | Additional Field 1 for Cash Journal Document Header |
| `CashJournalDocumentText2` |  | |  |  | `CHAR(30)` | Additional Field 2 for Cash Journal Document Header |
| `Cheque` |  | |  | `cast( Cheque as chect )` | `CHAR(13)` | Check number |
| `CashJournalChequeIssuer` |  | |  |  | `CHAR(14)` | Check Issuer (Cash Journal) |
| `BankKey` |  | |  |  | `CHAR(15)` | Bank Keys |
| `BankAccount` |  | |  |  | `CHAR(18)` | Bank Account Number |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `CashJournalChequeLot` |  | |  |  | `CHAR(8)` | Number of Check Lot in Cash Journal |
| `CashJournalChequePostingSts` |  | |  |  | `CHAR(1)` | Posting Status for Checks in Cash Journal |
| `CashJournalReversalDocument` |  | |  |  | `CHAR(10)` | Reversal Document Number for Cash Journal Document |
| `ExchangeRate` |  | |  | `cast( ExchangeRate as fis_exchange_rate preserving type)` | `DEC(9)` | Exchange Rate |
| `BusinessPlace` |  | |  |  | `CHAR(4)` | Business Place |
| `BusinessSectionCode` |  | |  |  | `CHAR(4)` | Section Code |
| `CashJournalDocumentIsSplit` |  | |  | `cast( CashJournalDocumentIsSplit as cjdocsplit preserving type)` | `CHAR(1)` | Split Information for Cash Journal Document |
| `StateCentralBankPaymentReason` |  | |  | `cast( StateCentralBankPaymentReason as lzbkz preserving type )` | `CHAR(3)` | State Central Bank Indicator |
| `SupplyingCountry` |  | |  | `cast( SupplyingCountry as fac_landl preserving type )` | `CHAR(3)` | Supplying Country/Region |
| `ChequeLotFiscalYear` |  | |  | `cast( ChequeLotFiscalYear as fins_chequelotfiscalyear preserving type )` | `NUMC(4)` | Check Lot Fiscal Year |
| `ValueDate` |  | |  |  | `DATS(8)` | Value Date |
| `TaxReportingDate` |  | |  |  | `DATS(8)` | Tax Reporting Date |
| `_CompanyCode` | | ✓ | | | | |
| `_CashJournal` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_CashJournal` | `I_CashJournal` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASHJOURNALDOCUMENT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASHJOURNALDOCUMENT_2')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Cash Journal Document'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType:{
      serviceQuality: #C,
      sizeCategory: #S,
      dataClass: #MIXED
    },
    modelingPattern: #NONE,
    sapObjectNodeType.name: 'CashJournal',
    supportedCapabilities:[#EXTRACTION_DATA_SOURCE]
}
@Analytics:{
    dataExtraction: {
      enabled: true,
      delta.changeDataCapture:{
          automatic : true
       }
   }
}

define view entity I_CashJournalDocument_2 as select from I_CashJournalDocument
  association [0..1] to I_CompanyCode              as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode
  //and $projection.Language     = _CompanyCode.Language
  association [0..1] to I_CashJournal              as _CashJournal on  $projection.CompanyCode = _CashJournal.CompanyCode
                                                                   and $projection.CashJournal = _CashJournal.CashJournal
                                                                   and $projection.Language    = _CashJournal.Language
  association [0..1] to I_FiscalYearForCompanyCode as _FiscalYear  on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                   and $projection.CompanyCode = _FiscalYear.CompanyCode
  association [0..1] to I_Currency                 as _Currency    on  $projection.Currency = _Currency.Currency
  
{
  key cast( CompanyCode as bukrs preserving type ) as CompanyCode,
  key cast( CashJournal as cjnr preserving type ) as CashJournal,
  key FiscalYear,
  key CashJournalDocumentInternalID,
  key cast( Language as langu preserving type ) as Language,
      cast( Currency as waers preserving type ) as Currency,
      DocumentDate,
      @Semantics.amount.currencyCode: 'Currency'
      TaxAmountInTransCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      CashJournalDocumentNetAmount,
      @Semantics.amount.currencyCode: 'Currency'
      WhldgTaxDeductedNetPaymentAmt,
      @Semantics.amount.currencyCode: 'Currency'
      CashJournalReceiptAmount,
      @Semantics.amount.currencyCode: 'Currency'
      CashJournalPaymentAmount,
      @Semantics.amount.currencyCode: 'Currency'
      @EndUserText.label: 'AmountInTransactionCurrency'
      AmountInTransactionCurrency,
      ReceiptRecipientName,
      _CashJournal.AuthorizationGroup,
      CashJournalDocument,
      /*Start Cash Journal Common CDS View*/
      AccountingDocExternalReference,
      PostingDate,
      CashJournalDocumentStatus,
      CreatedByUser,
      CashJournalIsPrinted,
      TaxRate,
      CashJournalDocumentText1,
      CashJournalDocumentText2,
      cast( Cheque as chect ) as Cheque,
      CashJournalChequeIssuer,
      BankKey,
      BankAccount,
      BankCountry,
      CashJournalChequeLot,
      CashJournalChequePostingSts,
      CashJournalReversalDocument,
      cast( ExchangeRate as fis_exchange_rate preserving type) as ExchangeRate,
      BusinessPlace,
      BusinessSectionCode,
      @Semantics.booleanIndicator: true
      cast( CashJournalDocumentIsSplit as cjdocsplit preserving type) as CashJournalDocumentIsSplit,
      cast( StateCentralBankPaymentReason as lzbkz preserving type ) as StateCentralBankPaymentReason,
      cast( SupplyingCountry as fac_landl preserving type ) as SupplyingCountry,
      cast( ChequeLotFiscalYear as fins_chequelotfiscalyear preserving type ) as ChequeLotFiscalYear,
      ValueDate,
      TaxReportingDate,
      /*End Cash Journal Common CDS View*/

      _CompanyCode,
      _CashJournal,
      _FiscalYear,
      _Currency
}
```
