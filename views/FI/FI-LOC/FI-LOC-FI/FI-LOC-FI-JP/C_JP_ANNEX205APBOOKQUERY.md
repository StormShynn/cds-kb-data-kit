---
name: C_JP_ANNEX205APBOOKQUERY
description: This CDS view retrieves the books of accounts payable for section (5) in Annex 21 of Order for Enforcement of the Corporation Tax Act. This CDS view provides the data to answer the following business question: How should accounts payable details be shown and listed as an electronic book for claiming corporate tax as "blue return"? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-LOC-FI-JP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JP_ANNEX205APBOOKQUERY')/$value
semantic_en: This CDS view retrieves the books of accounts payable for section (5) in Annex 21 of Order for Enforcement of the Corporation Tax Act. This CDS view provides the data to answer the following business question: How should accounts payable details be shown and listed as an electronic book for claiming corporate tax as "blue return"? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: Japan AP Book for Corporate Tax - Query — CDS view tiêu dùng dựa trên I_JP_Annex205APBookCube.
keywords:
  - japan
  - book
  - for
  - corporate
  - tax
  - query
  - supplier
  - source
  - ledger
  - company
  - code
  - fiscal
  - year
  - annex205
  - leading
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
# C_JP_ANNEX205APBOOKQUERY

**This CDS view retrieves the books of accounts payable for section (5) in Annex 21 of Order for Enforcement of the Corporation Tax Act. This CDS view provides the data to answer the following business question: How should accounts payable details be shown and listed as an electronic book for claiming corporate tax as "blue return"? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-JP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JP_ANNEX205APBOOKQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  |  | `CHAR(10)` | Supplier |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `JP_Annex205APLeadingAcctgDoc` | ✓ | |  |  | `CHAR(10)` | Japan Annex21(5) Leading Accounting Document Number |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `AccountingDocumentHeaderText` |  | |  |  | `CHAR(25)` | Document Header Text |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Purchasing Document Item |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Reference Document Item |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AcctsPyblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Accounts Payable (Net) |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity of Japan Annex21 |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `OrderPriceUnit` |  | |  |  | `UNIT(3)` | Order Price Unit (Purchasing) |
| `NetPriceQuantity` |  | |  |  | `QUAN(5)` | Net price quantity |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price in Purchasing Document (in Document Currency) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JP_ANNEX205APBOOKQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JP_ANNEX205APBOOKQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CJPANX205QUERY'
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
@EndUserText.label: 'Japan AP Book for Corporate Tax - Query'
define view C_JP_Annex205APBookQuery
  as select from I_JP_Annex205APBookCube
{
           @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false}
           @AnalyticsDetails.query.variableSequence: 05
           @AnalyticsDetails.query.axis: #ROWS
           @AnalyticsDetails.query.totals: #SHOW
           @AnalyticsDetails.query.display: #KEY_TEXT
  key      Supplier,

           @AnalyticsDetails.query.hidden
  key      SourceLedger,

           @AnalyticsDetails.query.axis: #FREE
           @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true}
           @AnalyticsDetails.query.variableSequence: 20
           @AnalyticsDetails.query.totals: #SHOW
           @AnalyticsDetails.query.display: #KEY_TEXT
  key      CompanyCode,

           @AnalyticsDetails.query.axis: #FREE
           @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true}
           @AnalyticsDetails.query.variableSequence: 30
           @AnalyticsDetails.query.totals: #HIDE
           @AnalyticsDetails.query.display: #KEY_TEXT
  key      FiscalYear,

           @AnalyticsDetails.query.totals: #SHOW
           @AnalyticsDetails.query.axis: #ROWS
  key      JP_Annex205APLeadingAcctgDoc,
           @AnalyticsDetails.query.axis: #ROWS
           @AnalyticsDetails.query.totals: #HIDE
           @AnalyticsDetails.query.display: #KEY_TEXT
  key      AccountingDocument,

           @AnalyticsDetails.query.axis: #ROWS
           @AnalyticsDetails.query.totals: #HIDE
           @AnalyticsDetails.query.display: #KEY_TEXT
  key      LedgerGLLineItem,

           @AnalyticsDetails.query.axis: #FREE
           @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true, defaultValue: '0L'}
           @AnalyticsDetails.query.variableSequence: 10
           @AnalyticsDetails.query.totals: #HIDE
           @AnalyticsDetails.query.display: #KEY_TEXT
  key      Ledger,

           @AnalyticsDetails.query.axis: #FREE
           @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: true
                                 , defaultValue: '01',defaultValueHigh: '12' }
           @AnalyticsDetails.query.variableSequence: 40
           @AnalyticsDetails.query.totals: #SHOW
           @AnalyticsDetails.query.display: #KEY_TEXT
           FiscalPeriod,
           @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false}
           @AnalyticsDetails.query.variableSequence: 50
           @AnalyticsDetails.query.axis: #ROWS
           @AnalyticsDetails.query.totals: #HIDE
           @AnalyticsDetails.query.display: #KEY_TEXT
           PostingDate,
           @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true}
           @AnalyticsDetails.query.variableSequence: 60
           @AnalyticsDetails.query.axis: #ROWS
           @AnalyticsDetails.query.totals: #HIDE
           @AnalyticsDetails.query.display: #KEY_TEXT
           AccountingDocumentType,
           @AnalyticsDetails.query.axis: #FREE
           DocumentDate,
           @AnalyticsDetails.query.axis: #FREE
           ClearingDate,
           @AnalyticsDetails.query.hidden
           AccountingDocumentHeaderText,
           @AnalyticsDetails.query.axis: #ROWS
           @AnalyticsDetails.query.totals: #HIDE
           DocumentItemText,

           @AnalyticsDetails.query.axis: #ROWS
           @AnalyticsDetails.query.totals: #HIDE
           @AnalyticsDetails.query.display: #KEY_TEXT
           ChartOfAccounts,

           @AnalyticsDetails.query.axis: #ROWS
           @AnalyticsDetails.query.totals: #HIDE
           @AnalyticsDetails.query.display: #KEY_TEXT
           GLAccount,
           @AnalyticsDetails.query.axis: #ROWS
           PurchasingDocument,
           @AnalyticsDetails.query.axis: #ROWS
           PurchasingDocumentItem,

           @AnalyticsDetails.query.axis: #ROWS
           @AnalyticsDetails.query.totals: #HIDE
           @AnalyticsDetails.query.display: #KEY_TEXT
           DebitCreditCode,

           @AnalyticsDetails.query.axis: #ROWS
           ReferenceDocument,
           @AnalyticsDetails.query.axis: #ROWS
           ReferenceDocumentItem,

           @AnalyticsDetails.query.hidden
           TransactionCurrency,
           @AnalyticsDetails.query.axis: #FREE
           @AnalyticsDetails.query.totals: #HIDE
           AmountInTransactionCurrency,
           @AnalyticsDetails.query.hidden
           CompanyCodeCurrency,
           @AnalyticsDetails.query.axis: #FREE
           @AnalyticsDetails.query.totals: #HIDE
           AmountInCompanyCodeCurrency,

           @AnalyticsDetails.query.axis: #FREE
           @AnalyticsDetails.query.totals: #SHOW
           @EndUserText.label: 'Account Payable Amount'
           AcctsPyblAmtInCCCrcy,


           @AnalyticsDetails.query.variableSequence: 80
           @AnalyticsDetails.query.axis: #ROWS
           @AnalyticsDetails.query.display: #KEY_TEXT
           Product,

           //Quantity Information
           @AnalyticsDetails.query.hidden
           BaseUnit,
           @AnalyticsDetails.query.axis: #FREE
           @AnalyticsDetails.query.totals: #HIDE
           Quantity,
           @AnalyticsDetails.query.hidden
           DocumentCurrency,

           @AnalyticsDetails.query.hidden
           OrderPriceUnit,

           @AnalyticsDetails.query.axis: #FREE
           NetPriceQuantity,

           @AnalyticsDetails.query.axis: #FREE
           @AnalyticsDetails.query.totals: #HIDE
           NetPriceAmount

}
```
