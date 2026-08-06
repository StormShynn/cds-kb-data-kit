---
name: C_RATOTALOPENREVENUEQUERY_2
description: This CDS views disclose the aggregate amount of the transaction price allocated to the performance obligations that are unsatisfied (or partially unsatisfied) as of the end of the reporting period. This CDS view provides the prerequisites for answering the following business questions: What is the total open revenue at the end of the reporting period in the document currency? What is the total open revenue of time-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue of event-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue in the display currency? What is the total open revenue for each account assignment, for example, by profit centre? What is the total open revenue for each performance obligation type?
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RATOTALOPENREVENUEQUERY_2')/$value
semantic_en: This CDS views disclose the aggregate amount of the transaction price allocated to the performance obligations that are unsatisfied (or partially unsatisfied) as of the end of the reporting period. This CDS view provides the prerequisites for answering the following business questions: What is the total open revenue at the end of the reporting period in the document currency? What is the total open revenue of time-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue of event-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue in the display currency? What is the total open revenue for each account assignment, for example, by profit centre? What is the total open revenue for each performance obligation type?
keywords:
  - Remaining Performance Obligations - Total Open Revenue
  - Remaining Performance Obligations - Total Open Revenue
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
  - transaction
  - metadata-only
---
# C_RATOTALOPENREVENUEQUERY_2

**This CDS views disclose the aggregate amount of the transaction price allocated to the performance obligations that are unsatisfied (or partially unsatisfied) as of the end of the reporting period. This CDS view provides the prerequisites for answering the following business questions: What is the total open revenue at the end of the reporting period in the document currency? What is the total open revenue of time-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue of event-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue in the display currency? What is the total open revenue for each account assignment, for example, by profit centre? What is the total open revenue for each performance obligation type?**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RATOTALOPENREVENUEQUERY_2')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `AccountingPrinciple` | `CHAR(4)` | Accounting Principle |
| `PerformanceObligation` | `CHAR(16)` | Performance Obligation |
| `RAPerformanceObligationType` | `CHAR(10)` | Revenue Accounting Performance Obligation Type |
| `PerformanceObligationClass` | `CHAR(30)` | Performance Obligation Name |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `SalesDocumentCurrency` | `CUKY(5)` | SD Document Currency |
| `RevenueAccountingContract` | `CHAR(14)` | Revenue Contract |
| `RevnAcctgContractCreationDate` | `DATS(8)` | Created On |
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` | `CHAR(81)` |  |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerName` | `CHAR(80)` | Name of Customer |
| `RevnAcctgSalesOrganization` | `CHAR(20)` | Sales Organization for Revenue Accounting |
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
| `RevnAcctgPerfOblgnStatus` | `CHAR(1)` | Performance Obligation Status |
| `RAInitialEffectiveDate` | `DATS(8)` | Initial effect. date when POB is created & becomes effective |
| `RAContractIsUniversal` | `CHAR(1)` | Universal Revenue Recognition Contract |
| `RATotalOpenRevenueInDspCrcy` | `CURR(23)` |  |
| `RAEventBasedOpenRevnInDspCrcy` | `CURR(23)` |  |
| `RATimeBasedOpenRevnInDspCrcy` | `CURR(23)` |  |
| `RAOpenCostInDspCrcy` | `CURR(23)` |  |
| `RAEventBasedOpenCostInDspCrcy` | `CURR(23)` |  |
| `RATimeBasedOpenCostInDspCrcy` | `CURR(23)` |  |
| `RATotalOpenRevnInSlsDocCrcy` | `CURR(23)` | Open Revenue up to the Current Period |
| `RAEventBsdOpenRevnInSlsDocCrcy` | `CURR(23)` | Open Revenue up to the Current Period |
| `RATimeBsdOpenRevnInSlsDocCrcy` | `CURR(23)` | Open Revenue up to the Current Period |
| `RAOpenCostInCoCodeCrcy` | `CURR(23)` | Open Revenue up to the Current Period |
| `RAEventBsdOpenCostInSlsDocCrcy` | `CURR(23)` | Open Revenue up to the Current Period |
| `RATimeBsdOpenCostInSlsDocCrcy` | `CURR(23)` | Open Revenue up to the Current Period |
