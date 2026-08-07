---
name: C_GLJRNLENTRYITEMTOBEVERIFIED
description: This CDS view retrieves line items of journal entries that to be verified. This CDS view provides the data to answer the following business questions: What are the attributes in the line item of journal entries to be verified, such as company code, profit center, and amount in currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-FIO-GL-TRA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRYITEMTOBEVERIFIED')/$value
semantic_en: This CDS view retrieves line items of journal entries that to be verified. This CDS view provides the data to answer the following business questions: What are the attributes in the line item of journal entries to be verified, such as company code, profit center, and amount in currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: LI in Inbox View of GL JE to be verified — CDS view tiêu dùng dựa trên I_GLJrnlEntryItemToBeVerified.
keywords:
  - inbox
  - verified
  - accounting
  - document
  - item
  - source
  - company
  - code
  - fiscal
  - year
  - category
tags:
  - FI
  - bo:companycode
  - component:FI-FIO-GL-TRA-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-TRA
  - FI-FIO-GL-TRA-2CL
  - lob:finance
---
# C_GLJRNLENTRYITEMTOBEVERIFIED

**This CDS view retrieves line items of journal entries that to be verified. This CDS view provides the data to answer the following business questions: What are the attributes in the line item of journal entries to be verified, such as company code, profit center, and amount in currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-TRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRYITEMTOBEVERIFIED')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingDocumentItem` | ✓ | |  |  | `NUMC(6)` | Six-figure number of line item |
| `SourceCompanyCode` | ✓ | |  |  | `CHAR(4)` | Source Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Document Status |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountName` |  | |  | `cast( _cocd._Text[1:Language = $session.system_language].GLAccountName as fac_skat_txt20 )` | `CHAR(20)` | G/L Account Short Text |
| `DocumentItemText` |  | |  | `cast(I_GLJrnlEntryItemToBeVerified.DocumentItemText as fac_item_txt50)` | `CHAR(50)` | Item Text |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `DebitCreditCodeName` |  | |  | `_DebitCreditCode._Text[1:Language = $session.system_language].DebitCreditCodeName` | `CHAR(60)` | Debit/Credit Code Name |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(28)` |  |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(28)` |  |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Additional Currency 1 |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(28)` |  |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(28)` |  |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Additional Currency 2 |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(28)` |  |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `GLAccountGroup` |  | | `_coa` | `GLAccountGroup` | `CHAR(4)` | G/L Account Group |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | | `_WBSElement` | `WBSElement` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `LedgerGroup` |  | | `_header` | `LedgerGroup` | `CHAR(4)` | Ledger Group |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_WBSElement` | `I_WBSElement` | [1..1] |
| `_header` | `I_JournalEntry` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRYITEMTOBEVERIFIED')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRYITEMTOBEVERIFIED')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CGLJEIVER'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #C
@VDM.viewType: #CONSUMPTION
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'LI in Inbox View of GL JE to be verified'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]
define view C_GLJrnlEntryItemToBeVerified
  as select from    I_GLJrnlEntryItemToBeVerified
    left outer join I_GLAcctInCoCode             as _cocd on  I_GLJrnlEntryItemToBeVerified.CompanyCode = _cocd.CompanyCode
                                                          and I_GLJrnlEntryItemToBeVerified.GLAccount   = _cocd.GLAccount
    left outer join I_GLAccountInChartOfAccounts as _coa  on  I_GLJrnlEntryItemToBeVerified.GLAccount = _coa.GLAccount
                                                          and _cocd.ChartOfAccounts                   = _coa.ChartOfAccounts
  association [0..1] to I_DebitCreditCode as _DebitCreditCode on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode
  association [1..1] to I_CompanyCode     as _CompanyCode     on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_WBSElement      as _WBSElement      on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID
  association [1..1] to I_JournalEntry    as _header          on  I_GLJrnlEntryItemToBeVerified.CompanyCode        = _header.CompanyCode
                                                              and I_GLJrnlEntryItemToBeVerified.FiscalYear         = _header.FiscalYear
                                                              and I_GLJrnlEntryItemToBeVerified.AccountingDocument = _header.AccountingDocument
{
      @UI.lineItem: {
        position:10,
        importance:#HIGH}
  key I_GLJrnlEntryItemToBeVerified.AccountingDocumentItem,
      @UI.hidden: true
  key I_GLJrnlEntryItemToBeVerified.SourceCompanyCode,
      @UI.hidden: true
  key I_GLJrnlEntryItemToBeVerified.FiscalYear,
      @UI.hidden: true
  key I_GLJrnlEntryItemToBeVerified.AccountingDocument,

      @UI.hidden: true
      I_GLJrnlEntryItemToBeVerified.AccountingDocumentCategory,

      @UI.lineItem:{
          position:20,
        importance:#HIGH }
      I_GLJrnlEntryItemToBeVerified.CompanyCode,

      @UI.lineItem: {
        position:30,
        importance:#HIGH}
      I_GLJrnlEntryItemToBeVerified.GLAccount,

      @UI.lineItem: {
        position:40,
        importance:#HIGH}
      cast( _cocd._Text[1:Language = $session.system_language].GLAccountName as fac_skat_txt20 ) as GLAccountName,

      @UI.lineItem: {
        position:50,
        importance:#HIGH}
      cast(I_GLJrnlEntryItemToBeVerified.DocumentItemText as fac_item_txt50)                     as DocumentItemText,



      @UI.hidden: true
      I_GLJrnlEntryItemToBeVerified.DebitCreditCode,

      @UI.lineItem: {
        position:60,
        importance:#HIGH}
      _DebitCreditCode._Text[1:Language = $session.system_language].DebitCreditCodeName          as DebitCreditCodeName,

      @Semantics.currencyCode: true
      I_GLJrnlEntryItemToBeVerified.TransactionCurrency,
      @UI.lineItem: {
        position:70,
        importance:#HIGH}
      @Semantics.amount.currencyCode:  'TransactionCurrency'
      I_GLJrnlEntryItemToBeVerified.AmountInTransactionCurrency,

      @Semantics.currencyCode: true
      _CompanyCode.Currency                                                                      as CompanyCodeCurrency,

      @UI.lineItem: {
        position:80,
        importance:#HIGH}
      @Semantics.amount.currencyCode:  'CompanyCodeCurrency'
      I_GLJrnlEntryItemToBeVerified.AmountInCompanyCodeCurrency,

      @Semantics.currencyCode: true
      I_GLJrnlEntryItemToBeVerified.GlobalCurrency,

      @UI.lineItem: {
        position:85,
        importance:#HIGH}
      @Semantics.amount.currencyCode:  'GlobalCurrency'
      I_GLJrnlEntryItemToBeVerified.AmountInGlobalCurrency,

      @Semantics.currencyCode: true
      I_GLJrnlEntryItemToBeVerified.FunctionalCurrency                                           as FunctionalCurrency, //FunctionalCurrency

      @UI.lineItem: {
        position:90,
        importance:#HIGH,
        label: 'Amount in Functional Currency'}
      @Semantics.amount.currencyCode:  'FunctionalCurrency'
      I_GLJrnlEntryItemToBeVerified.AmountInFunctionalCurrency, //Amount in functional currency

      @Semantics.currencyCode: true
      I_GLJrnlEntryItemToBeVerified.FreeDefinedCurrency1                                         as FreeDefinedCurrency1, //3rd FI currency

      @UI.lineItem: {
        position:95,
        importance:#HIGH}
      @Semantics.amount.currencyCode:  'FreeDefinedCurrency1'
      I_GLJrnlEntryItemToBeVerified.AmountInFreeDefinedCurrency1, //Amount in 3rd FI currency

      @UI.lineItem: {
        position:100,
        importance:#HIGH}
      I_GLJrnlEntryItemToBeVerified.ProfitCenter,
      @UI.lineItem: {
        position:110,
        importance:#HIGH}
      I_GLJrnlEntryItemToBeVerified.CostCenter,

      _coa.GLAccountGroup,

      I_GLJrnlEntryItemToBeVerified.WBSElementInternalID,

      @UI.lineItem: {
        position:120,
        importance:#HIGH}
      _WBSElement.WBSElement                                                                     as WBSElementExternalID,

      @UI.hidden: true
      _header.LedgerGroup
}
```
