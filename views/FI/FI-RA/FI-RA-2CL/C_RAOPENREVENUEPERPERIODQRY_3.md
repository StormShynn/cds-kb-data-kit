---
name: C_RAOPENREVENUEPERPERIODQRY_3
description: This CDS views provides an explanation of when the entity expects to recognize revenue of the remaining performance obligations. This CDS view provides the prerequisites for answering the following business questions: What is the to-be recognized revenue in document currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue in display currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue for each account assignment, for example, by profit centre? What is the total open revenue for each account assignment, for example, by profit centre?
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAOPENREVENUEPERPERIODQRY_3')/$value
semantic_en: This CDS views provides an explanation of when the entity expects to recognize revenue of the remaining performance obligations. This CDS view provides the prerequisites for answering the following business questions: What is the to-be recognized revenue in document currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue in display currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue for each account assignment, for example, by profit centre? What is the total open revenue for each account assignment, for example, by profit centre?
keywords:
  - Waterfall Report - Query
  - Waterfall Report - Query
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-RA-2CL
  - consumption-view
  - document
  - FI-RA
  - FI-RA-2CL
  - lob:finance
  - plan
  - metadata-only
---
# C_RAOPENREVENUEPERPERIODQRY_3

**This CDS views provides an explanation of when the entity expects to recognize revenue of the remaining performance obligations. This CDS view provides the prerequisites for answering the following business questions: What is the to-be recognized revenue in document currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue in display currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue for each account assignment, for example, by profit centre? What is the total open revenue for each account assignment, for example, by profit centre?**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAOPENREVENUEPERPERIODQRY_3')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PerformanceObligation` |  | |  |  | `CHAR(16)` | Performance Obligation |
| `PerformanceObligationClass` |  | |  |  | `CHAR(30)` | Performance Obligation Name |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `AccountingPrinciple` |  | |  |  | `CHAR(4)` | Accounting Principle |
| `AccountingPrincipleName` |  | |  |  | `CHAR(70)` | Name of Accounting Principle |
| `RAPerformanceObligationType` |  | |  |  | `CHAR(10)` | Revenue Accounting Performance Obligation Type |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `SalesDocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `DeltaRecognizedRevnInDspCrcy` |  | |  |  | `CURR(23)` |  |
| `RecgdCatchUpAmtInDspCrcy` |  | |  |  | `CURR(23)` |  |
| `RAPerPeriodOpenRevnInDspCrcy` |  | |  |  | `CURR(23)` | Recognizable Revenue up to the Current Period |
| `RAPerPerdOpenRevnInSlsDocCrcy` |  | |  |  | `CURR(23)` | Recognizable Revenue up to the Current Period |
| `BandFiscalYearPeriodText` |  | |  |  | `SSTR(15)` | FiscalYearPeriod for reporting Disclosure 120 |
| `RevenueAccountingContract` |  | |  |  | `CHAR(14)` | Revenue Contract |
| `RevnAcctgContractCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` |  | |  |  | `CHAR(81)` |  |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `RevnAcctgSalesOrganization` |  | |  |  | `CHAR(20)` | Sales Organization for Revenue Accounting |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `FunctionalAreaName` |  | |  |  | `CHAR(25)` | Name of the Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `BusinessAreaName` |  | |  |  | `CHAR(30)` | Business Area Name |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `SegmentName` |  | |  |  | `CHAR(50)` | Segment Name |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProfitCenterName` |  | |  |  | `CHAR(20)` | Description of Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Account assignment Sales Order |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `RevnAcctgPerfOblgnStatus` |  | |  |  | `CHAR(1)` | Performance Obligation Status |
| `RAInitialEffectiveDate` |  | |  |  | `DATS(8)` | Initial effect. date when POB is created & becomes effective |
| `RAContractIsUniversal` |  | |  |  | `CHAR(1)` | Universal Revenue Recognition Contract |
| `PerfOblgnFulfillmentType` |  | |  |  | `CHAR(1)` | Fulfillment Type |
| `PerfOblgnEventType` |  | |  |  | `CHAR(2)` | Event Type |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order ID |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item ID |
