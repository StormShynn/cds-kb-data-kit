---
name: C_RAYRTODTERECGDREVNQUERY_2
description: This CDS view provides the prerequisites for answering the following business questions: How much revenue is recognized this year in the display currency? How much revenue is recognized in each period? How much revenue catch-up is calculated this year from contract changes in the display currency? What is the growth for year-over-year? What is the top 5 best business partners? What is the proportion of revenue for business units, for example, by profit centre? What is the revenue or revenue catch-up for each performance obligation or contract? This query can be used in the key user tool KPI Design or Create Reports.
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAYRTODTERECGDREVNQUERY_2')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: How much revenue is recognized this year in the display currency? How much revenue is recognized in each period? How much revenue catch-up is calculated this year from contract changes in the display currency? What is the growth for year-over-year? What is the top 5 best business partners? What is the proportion of revenue for business units, for example, by profit centre? What is the revenue or revenue catch-up for each performance obligation or contract? This query can be used in the key user tool KPI Design or Create Reports.
keywords:
  - Disaggregation of Recognizable Revenue
  - Disaggregation of Recognizable Revenue
tags:
  - FI
  - bo:companycode
  - component:FI-RA-2CL
  - consumption-view
  - contract
  - FI-RA
  - FI-RA-2CL
  - lob:finance
  - metadata-only
---
# C_RAYRTODTERECGDREVNQUERY_2

**This CDS view provides the prerequisites for answering the following business questions: How much revenue is recognized this year in the display currency? How much revenue is recognized in each period? How much revenue catch-up is calculated this year from contract changes in the display currency? What is the growth for year-over-year? What is the top 5 best business partners? What is the proportion of revenue for business units, for example, by profit centre? What is the revenue or revenue catch-up for each performance obligation or contract? This query can be used in the key user tool KPI Design or Create Reports.**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAYRTODTERECGDREVNQUERY_2')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PerformanceObligation` | `CHAR(16)` | Performance Obligation |
| `RevenueAccountingContract` | `CHAR(14)` | Revenue Contract |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `AccountingPrinciple` | `CHAR(4)` | Accounting Principle |
| `AccountingPrincipleName` | `CHAR(70)` | Name of Accounting Principle |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | `NUMC(3)` | Posting Period |
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` | `CHAR(81)` |  |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerName` | `CHAR(80)` | Name of Customer |
| `PerfOblgnFulfillmentType` | `CHAR(1)` | Fulfillment Type |
| `PerformanceObligationClass` | `CHAR(30)` | Performance Obligation Name |
| `RevnAcctgSalesOrganization` | `CHAR(20)` | Sales Organization for Revenue Accounting |
| `RevnAcctgPerfOblgnStatus` | `CHAR(1)` | Performance Obligation Status |
| `RAPerformanceObligationType` | `CHAR(10)` | Revenue Accounting Performance Obligation Type |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `FunctionalAreaName` | `CHAR(25)` | Name of the Functional Area |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `BusinessAreaName` | `CHAR(30)` | Business Area Name |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `SegmentName` | `CHAR(50)` | Segment Name |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `ProfitCenterName` | `CHAR(20)` | Description of Profit Center |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `CostCenterName` | `CHAR(20)` | Cost Center Name |
| `OrderID` | `CHAR(12)` | Order Number |
| `SalesOrder` | `CHAR(10)` | Account assignment Sales Order |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `RAContractIsUniversal` | `CHAR(1)` | Universal Revenue Recognition Contract |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `RARecognizedRevnInDspCrcy` | `CURR(23)` | Recognizable Revenue up to the Current Period |
| `DeltaRecognizedRevnInDspCrcy` | `CURR(23)` |  |
| `RecgdCatchUpAmtInDspCrcy` | `CURR(23)` |  |
| `RARecgdCostAmountInDspCrcy` | `CURR(23)` |  |
