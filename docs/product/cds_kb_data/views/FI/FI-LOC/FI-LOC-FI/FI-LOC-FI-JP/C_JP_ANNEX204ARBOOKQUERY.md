---
name: C_JP_ANNEX204ARBOOKQUERY
description: "This CDS view retrieves the books of accounts receivable for section (4) in Annex 21 of Order for Enforcement of the Corporation Tax Act. This CDS view provides the data to answer the following business question: How should accounts receivable details be shown and listed as an electronic book for claiming corporate tax as \"blue return\"? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-LOC-FI-JP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JP_ANNEX204ARBOOKQUERY')/$value
semantic_en: "This CDS view retrieves the books of accounts receivable for section (4) in Annex 21 of Order for Enforcement of the Corporation Tax Act. This CDS view provides the data to answer the following business question: How should accounts receivable details be shown and listed as an electronic book for claiming corporate tax as \"blue return\"? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Japan AR Book for Corporate Tax - Query — CDS view tiêu dùng dựa trên I_JP_Annex204ARBookCube."
keywords:
  - "japan"
  - "book"
  - "for"
  - "corporate"
  - "tax"
  - "query"
  - "customer"
  - "source"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - FI
  - account
  - bo:companycode
  - claim
  - component:FI-LOC-FI-JP
  - consumption-view
  - FI-LOC
  - FI-LOC-FI
  - FI-LOC-FI-JP
  - lob:finance
  - lob:logistics general
  - order
  - bo:purchaseorder
---
# C_JP_ANNEX204ARBOOKQUERY

**This CDS view retrieves the books of accounts receivable for section (4) in Annex 21 of Order for Enforcement of the Corporation Tax Act. This CDS view provides the data to answer the following business question: How should accounts receivable details be shown and listed as an electronic book for claiming corporate tax as "blue return"? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-JP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JP_ANNEX204ARBOOKQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer Number |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AcctsRblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Accounts Receivable (Net) |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(13)` | Quantity |
| `NetPriceQuantityUnit` |  | |  |  | `UNIT(3)` | Condition Unit |
| `NetPriceQuantity` |  | |  |  | `QUAN(5)` | Net price quantity |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JP_ANNEX204ARBOOKQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JP_ANNEX204ARBOOKQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CJPANNEX204BOOKQ'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
//@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
@VDM.viewType: #CONSUMPTION
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@Analytics.query: true
@ObjectModel.supportedCapabilities:
   [ #ANALYTICAL_QUERY]
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Japan AR Book for Corporate Tax - Query'
define view C_JP_Annex204ARBookQuery
  as select from I_JP_Annex204ARBookCube
{
      @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false}
      @AnalyticsDetails.query.variableSequence: 05
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.totals: #SHOW
      @AnalyticsDetails.query.display: #KEY_TEXT
  key Customer,

      @AnalyticsDetails.query.hidden
  key SourceLedger,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true}
      @AnalyticsDetails.query.variableSequence: 20
      @AnalyticsDetails.query.totals: #SHOW
      @AnalyticsDetails.query.display: #KEY_TEXT
  key CompanyCode,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true}
      @AnalyticsDetails.query.variableSequence: 30
      @AnalyticsDetails.query.totals: #HIDE
      @AnalyticsDetails.query.display: #KEY_TEXT
  key FiscalYear,

      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.totals: #SHOW
      @AnalyticsDetails.query.display: #KEY_TEXT
  key AccountingDocument,

      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.totals: #HIDE
      @AnalyticsDetails.query.display: #KEY_TEXT
  key LedgerGLLineItem,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true, defaultValue: '0L'}
      @AnalyticsDetails.query.variableSequence: 10
      @AnalyticsDetails.query.totals: #HIDE
      @AnalyticsDetails.query.display: #KEY_TEXT
  key Ledger,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: true
                             , defaultValue: '01',defaultValueHigh: '12' }
      @AnalyticsDetails.query.variableSequence: 40
      @AnalyticsDetails.query.totals: #SHOW
      @AnalyticsDetails.query.display: #KEY_TEXT
      FiscalPeriod,
      @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false}
      @AnalyticsDetails.query.variableSequence: 60
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.totals: #HIDE
      @AnalyticsDetails.query.display: #KEY_TEXT
      PostingDate,
      @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true}
      @AnalyticsDetails.query.variableSequence: 50
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.totals: #HIDE
      @AnalyticsDetails.query.display: #KEY_TEXT
      AccountingDocumentType,
      @AnalyticsDetails.query.axis: #FREE
      DocumentDate,
      @AnalyticsDetails.query.axis: #FREE
      ClearingDate,
      //      @AnalyticsDetails.query.axis: #ROWS
      //      @AnalyticsDetails.query.totals: #HIDE
      //      @AnalyticsDetails.query.display: #KEY_TEXT
      //      GLAccount,
      //      @AnalyticsDetails.query.hidden
      //      ChartOfAccounts,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.totals: #HIDE
      @AnalyticsDetails.query.display: #KEY_TEXT
      ChartOfAccounts,

      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.totals: #HIDE
      @AnalyticsDetails.query.display: #KEY_TEXT
      GLAccount,

      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.totals: #HIDE
      DocumentItemText,

      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.totals: #HIDE
      @AnalyticsDetails.query.display: #KEY_TEXT
      DebitCreditCode,

      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.totals: #HIDE
      @AnalyticsDetails.query.display: #KEY_TEXT
      Product,

      //Amount Information(Transacntion)
      @AnalyticsDetails.query.hidden
      TransactionCurrency,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #HIDE
      AmountInTransactionCurrency,

      //Amount Information(Company Code)
      @AnalyticsDetails.query.hidden
      CompanyCodeCurrency,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #HIDE
      AmountInCompanyCodeCurrency,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #SHOW
      @EndUserText.label: 'Account Receivable Amount'
      AcctsRblAmtInCCCrcy,

      //Quantity Information
      @AnalyticsDetails.query.hidden
      BaseUnit,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #HIDE
      Quantity,

      // Pricing information for Billing
      @AnalyticsDetails.query.hidden
      NetPriceQuantityUnit,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #HIDE
      NetPriceQuantity,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.totals: #HIDE
      NetPriceAmount
}
```
