---
name: C_RAPOSTINGITEMQUERY_2
description: This CDS view provides the prerequisites for answering the following business questions: How much revenue is posted in the document currency and company code currency? How much revenue is posted in each period in the document currency and company code currency? How much revenue is posted for each G/L account in the document currency and company code currency? What proportion of posted revenue belongs to each business unit? What is the posted revenue for each performance obligation or contract?
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAPOSTINGITEMQUERY_2')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: How much revenue is posted in the document currency and company code currency? How much revenue is posted in each period in the document currency and company code currency? How much revenue is posted for each G/L account in the document currency and company code currency? What proportion of posted revenue belongs to each business unit? What is the posted revenue for each performance obligation or contract?
keywords:
  - Disaggregation of Revenue
  - Disaggregation of Revenue
tags:
  - FI
  - account
  - bo:plant
  - component:FI-RA-2CL
  - consumption-view
  - contract
  - document
  - FI-RA
  - FI-RA-2CL
  - lob:finance
  - metadata-only
---
# C_RAPOSTINGITEMQUERY_2

**This CDS view provides the prerequisites for answering the following business questions: How much revenue is posted in the document currency and company code currency? How much revenue is posted in each period in the document currency and company code currency? How much revenue is posted for each G/L account in the document currency and company code currency? What proportion of posted revenue belongs to each business unit? What is the posted revenue for each performance obligation or contract?**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAPOSTINGITEMQUERY_2')/$value) |

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
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `GLAccount` | `CHAR(10)` | G/L Account Number |
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
| `SalesOrder` | `CHAR(10)` | Sales Order Number |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `RevnAcctgContractCreationDate` | `DATS(8)` | Created On |
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` | `CHAR(81)` |  |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerName` | `CHAR(80)` | Name of Customer |
| `PerfOblgnFulfillmentType` | `CHAR(1)` | Fulfillment Type |
| `RAPerformanceObligationType` | `CHAR(10)` | Revenue Accounting Performance Obligation Type |
| `RevnAcctgSalesOrganization` | `CHAR(20)` | Sales Organization for Revenue Accounting |
| `SalesDocumentCurrency` | `CUKY(5)` | SD Document Currency |
| `AdditionalCurrency1` | `CUKY(5)` | Currency Key of Second Local Currency |
| `AdditionalCurrency2` | `CUKY(5)` | Currency Key of Third Local Currency |
| `RevnAcctgPostgAmtInSlsDocCrcy` | `CURR(23)` | Posting Revenue in Document Currency |
| `RevnAcctgPostgAmtInCoCodeCrcy` | `CURR(23)` | Posting Revenue in Company Code Currency |
| `RevnAcctgPostgAmtInAddlCrcy1` | `CURR(23)` | Posting Revenue in Local Currency 2 |
| `RevnAcctgPostgAmtInAddlCrcy2` | `CURR(23)` | Posting Revenue in Local Currency 3 |
| `RAPostedCostInSlsDocCrcy` | `CURR(23)` | Posting Cost in Document Currency |
| `RAPostedCostAmountInCoCodeCrcy` | `CURR(23)` | Posting Cost in Company Code Currency |
| `RAPostedCostAmountInAddlCrcy1` | `CURR(23)` | Posting Cost in Local Currency 2 |
| `RAPostedCostAmountInAddlCrcy2` | `CURR(23)` | Posting Cost in Local Currency 3 |
| `RAContractIsUniversal` | `CHAR(1)` | Universal Revenue Recognition Contract |
