---
name: I_RAPOSTINGITEMCUBE_2
description: This CDS view provides the prerequisites for answering the following business questions: What amount is transferred for a different posting category in the document currency and company code currency? For example, recognized revenue, contract asset, and contract liability What amount is transferred for each condition type of each performance obligation in both the document currency and the company code currency? What amount is posted for each G/L account? What proportion of the transferred amount is for each business unit?
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPOSTINGITEMCUBE_2')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What amount is transferred for a different posting category in the document currency and company code currency? For example, recognized revenue, contract asset, and contract liability What amount is transferred for each condition type of each performance obligation in both the document currency and the company code currency? What amount is posted for each G/L account? What proportion of the transferred amount is for each business unit?
keywords:
  - Cube View: Disaggregation of Revenue
  - Cube View: Disaggregation of Revenue
tags:
  - FI
  - account
  - bo:plant
  - component:FI-RA-2CL
  - contract
  - document
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_RAPOSTINGITEMCUBE_2

**This CDS view provides the prerequisites for answering the following business questions: What amount is transferred for a different posting category in the document currency and company code currency? For example, recognized revenue, contract asset, and contract liability What amount is transferred for each condition type of each performance obligation in both the document currency and the company code currency? What amount is posted for each G/L account? What proportion of the transferred amount is for each business unit?**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPOSTINGITEMCUBE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AccountingPrinciple` |  | |  |  | `CHAR(4)` | Accounting Principle |
| `RevnAcctgReconciliationKey` |  | |  |  | `CHAR(14)` | Reconciliation Key for a Contract in a Revenue Acctg. Period |
| `PerformanceObligation` |  | |  |  | `CHAR(16)` | Performance Obligation |
| `ConditionType` |  | |  |  | `CHAR(4)` | Condition Type |
| `RevnAcctgPostingCategory` |  | |  |  | `CHAR(2)` | Category for Posting Document |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `RevenueAccountingContract` |  | |  |  | `CHAR(14)` | Revenue Contract |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order Number |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `RevnAcctgContractCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `PerfOblgnFulfillmentType` |  | |  |  | `CHAR(1)` | Fulfillment Type |
| `RAPerformanceObligationType` |  | |  |  | `CHAR(10)` | Revenue Accounting Performance Obligation Type |
| `RevnAcctgSalesOrganization` |  | |  |  | `CHAR(20)` | Sales Organization for Revenue Accounting |
| `RevnAcctgPostgAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Posting Revenue in Company Code Currency |
| `RAPostedCostAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Posting Cost in Company Code Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Local Currency |
| `RevnAcctgPostgAmtInSlsDocCrcy` |  | |  |  | `CURR(23)` | Posting Revenue in Document Currency |
| `RAPostedCostInSlsDocCrcy` |  | |  |  | `CURR(23)` | Posting Cost in Document Currency |
| `SalesDocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `RevnAcctgPostgAmtInAddlCrcy1` |  | |  |  | `CURR(23)` | Posting Revenue in Local Currency 2 |
| `RAPostedCostAmountInAddlCrcy1` |  | |  |  | `CURR(23)` | Posting Cost in Local Currency 2 |
| `AdditionalCurrency1` |  | |  |  | `CUKY(5)` | Currency Key of Second Local Currency |
| `RevnAcctgPostgAmtInAddlCrcy2` |  | |  |  | `CURR(23)` | Posting Revenue in Local Currency 3 |
| `RAPostedCostAmountInAddlCrcy2` |  | |  |  | `CURR(23)` | Posting Cost in Local Currency 3 |
| `AdditionalCurrency2` |  | |  |  | `CUKY(5)` | Currency Key of Third Local Currency |
| `ConditionIsForStatistics` |  | |  |  | `CHAR(1)` | Condition is used for statistics |
| `RevnAcctgRecnclnKeyStatus` |  | |  |  | `CHAR(1)` | Status of Revenue Reconciliation Key |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `RAContractIsUniversal` |  | |  |  | `CHAR(1)` | Universal Revenue Recognition Contract |
