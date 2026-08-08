---
name: I_RAOPENREVENUEPERPERIODCUBE_3
description: "This CDS views provides an explanation of when the entity expects to recognize revenue of the remaining performance obligations. This CDS view provides the prerequisites for answering the following business questions: What is the to-be recognized revenue in document currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue for each account assignment, for example, by profit centre? What is the to-be recognized revenue for each performance obligation type?"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAOPENREVENUEPERPERIODCUBE_3')/$value
semantic_en: "This CDS views provides an explanation of when the entity expects to recognize revenue of the remaining performance obligations. This CDS view provides the prerequisites for answering the following business questions: What is the to-be recognized revenue in document currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue for each account assignment, for example, by profit centre? What is the to-be recognized revenue for each performance obligation type?"
keywords:
  - "Waterfall Report - Cube"
  - "Waterfall Report - Cube"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-RA-2CL
  - document
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
  - plan
  - metadata-only
---
# I_RAOPENREVENUEPERPERIODCUBE_3

**This CDS views provides an explanation of when the entity expects to recognize revenue of the remaining performance obligations. This CDS view provides the prerequisites for answering the following business questions: What is the to-be recognized revenue in document currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue for each account assignment, for example, by profit centre? What is the to-be recognized revenue for each performance obligation type?**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAOPENREVENUEPERPERIODCUBE_3')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PerformanceObligation` |  | |  |  | `CHAR(16)` | Performance Obligation |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `RevnAcctgConditionCategory` |  | |  |  | `CHAR(1)` | Price or Cost Condition |
| `BandFiscalYearPeriodText` |  | |  |  | `SSTR(15)` | FiscalYearPeriod for reporting Disclosure 120 |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AccountingPrinciple` |  | |  |  | `CHAR(4)` | Accounting Principle |
| `RARecognizedRevnInSlsDocCrcy` |  | |  |  | `CURR(23)` |  |
| `RecgdCatchUpAmtInSlsDocCrcy` |  | |  |  | `CURR(23)` |  |
| `SalesDocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `RevenueAccountingContract` |  | |  |  | `CHAR(14)` | Revenue Contract |
| `RevnAcctgContractCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `PerformanceObligationClass` |  | |  |  | `CHAR(30)` | Performance Obligation Name |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `PerfOblgnFulfillmentType` |  | |  |  | `CHAR(1)` | Fulfillment Type |
| `PerfOblgnEventType` |  | |  |  | `CHAR(2)` | Event Type |
| `RevnAcctgSalesOrganization` |  | |  |  | `CHAR(20)` | Sales Organization for Revenue Accounting |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Account assignment Sales Order |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `RevnAcctgPerfOblgnStatus` |  | |  |  | `CHAR(1)` | Performance Obligation Status |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `RAPerformanceObligationType` |  | |  |  | `CHAR(10)` | Revenue Accounting Performance Obligation Type |
| `RAInitialEffectiveDate` |  | |  |  | `DATS(8)` | Initial effect. date when POB is created & becomes effective |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Is Blocked |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order ID |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item ID |
| `RAContractIsUniversal` |  | |  |  | `CHAR(1)` | Universal Revenue Recognition Contract |
