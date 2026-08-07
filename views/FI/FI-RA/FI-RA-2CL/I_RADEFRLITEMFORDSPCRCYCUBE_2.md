---
name: I_RADEFRLITEMFORDSPCRCYCUBE_2
description: "This CDS view provides the prerequisites for answering the following business questions: How much revenue is recognized this year in the document currency and display currency? How much revenue is recognized for each period in the document currency and display currency? How much revenue catch-up is calculated this year from contract changes in the document currency and display currency? What is the growth for year-over-year? What is the top 5 best business partners? What is the proportion of revenue for business units, for example, by profit centre? What is the revenue or revenue catch-up for each performance obligation or contract?"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RADEFRLITEMFORDSPCRCYCUBE_2')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How much revenue is recognized this year in the document currency and display currency? How much revenue is recognized for each period in the document currency and display currency? How much revenue catch-up is calculated this year from contract changes in the document currency and display currency? What is the growth for year-over-year? What is the top 5 best business partners? What is the proportion of revenue for business units, for example, by profit centre? What is the revenue or revenue catch-up for each performance obligation or contract?"
keywords:
  - "Cube View: Disaggregation of Recognized Revenue"
  - "Cube View: Disaggregation of Recognized Revenue"
tags:
  - FI
  - bo:companycode
  - component:FI-RA-2CL
  - contract
  - document
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_RADEFRLITEMFORDSPCRCYCUBE_2

**This CDS view provides the prerequisites for answering the following business questions: How much revenue is recognized this year in the document currency and display currency? How much revenue is recognized for each period in the document currency and display currency? How much revenue catch-up is calculated this year from contract changes in the document currency and display currency? What is the growth for year-over-year? What is the top 5 best business partners? What is the proportion of revenue for business units, for example, by profit centre? What is the revenue or revenue catch-up for each performance obligation or contract?**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RADEFRLITEMFORDSPCRCYCUBE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PerformanceObligation` |  | |  |  | `CHAR(16)` | Performance Obligation |
| `RevnAcctgReconciliationKey` |  | |  |  | `CHAR(14)` | Reconciliation Key for a Contract in a Revenue Acctg. Period |
| `ConditionType` |  | |  |  | `CHAR(4)` | Condition Type |
| `RevnAcctgConditionCategory` |  | |  |  | `CHAR(1)` | Price or Cost Condition |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `RevenueAccountingContract` |  | |  |  | `CHAR(14)` | Revenue Contract |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AccountingPrinciple` |  | |  |  | `CHAR(4)` | Accounting Principle |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `PerfOblgnFulfillmentType` |  | |  |  | `CHAR(1)` | Fulfillment Type |
| `RAPerformanceObligationType` |  | |  |  | `CHAR(10)` | Revenue Accounting Performance Obligation Type |
| `PerformanceObligationClass` |  | |  |  | `CHAR(30)` | Performance Obligation Name |
| `RevnAcctgSalesOrganization` |  | |  |  | `CHAR(20)` | Sales Organization for Revenue Accounting |
| `RevnAcctgPerfOblgnStatus` |  | |  |  | `CHAR(1)` | Performance Obligation Status |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Account assignment Sales Order |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `RAContractIsUniversal` |  | |  |  | `CHAR(1)` | Universal Revenue Recognition Contract |
| `SalesDocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `ConditionIsForStatistics` |  | |  |  | `CHAR(1)` | Condition is used for statistics |
| `DeltaRecognizedAmtInSlsDocCrcy` |  | |  |  | `CURR(23)` | Amount for Posting |
| `RecgdCatchUpAmtInSlsDocCrcy` |  | |  |  | `CURR(23)` | Amount of Retrospective Revenue Catch-up |
