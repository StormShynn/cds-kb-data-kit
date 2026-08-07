---
name: C_TIMEVARIANCEQUERY
description: Time Variance
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TIMEVARIANCEQUERY')/$value
semantic_en: Time Variance
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - metadata-only
---
# C_TIMEVARIANCEQUERY

**Time Variance**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TIMEVARIANCEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Item Number of Purchase Order |
| `ScheduleLine` |  | |  |  | `NUMC(4)` | Schedule Line Number |
| `DeliveryDate` |  | |  |  | `DATS(8)` | Delivery Date |
| `SchedLineStscDeliveryDate` |  | |  |  | `DATS(8)` | Statistics-Relevant Delivery Date |
| `OriglPOSchdLnDelivDte` |  | |  |  | `DATS(8)` | Original Delivery Date |
| `OriglPOSchedLineStstclDelivDte` |  | |  |  | `DATS(8)` | Original Statistical Delivery Date |
| `PurOrdItmFinalGRPostingDate` |  | |  |  | `DATS(8)` | Final Goods Receipt Date |
| `PurOrdItmFirstGRPostingDate` |  | |  |  | `DATS(8)` | First Goods Receipt Date |
| `OriglPurOrdItm1stGRPostgDte` |  | |  |  | `DATS(8)` | Original First Good Receipt Posting Date |
| `OriglPurOrdItmFnlGRPostgDte` |  | |  |  | `DATS(8)` | Original Final Goods Receipt Posting Date |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PurgDocMigrtnIsCmpltdForAnlyts` |  | |  |  | `CHAR(1)` | Single-Character Flag |
| `SuplrEvalRelevantDocCategory` |  | |  |  | `NUMC(1)` | Supplier Evaluation Configuration for Document Category type |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `SupplierCountry` |  | |  |  | `CHAR(3)` | Supplier Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PurchasingCategory` |  | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurchasingDocumentCategory` |  | |  |  | `CHAR(1)` | Purchasing Document Category |
| `PurgCatName` |  | |  |  | `CHAR(60)` | Name of Purchasing Category |
| `TimeVarianceInDays` |  | |  |  | `INT4(10)` | Overdue days |
| `TimeVarianceInPct` |  | |  |  | `DEC(14)` | Variance % for Statistical Delivery Date |
| `TimeVarianceInPctByDelivDate` |  | |  |  | `DEC(15)` | Variance for Delivery Date |
| `TimeVarianceScore` |  | |  |  | `DEC(3)` |  |
| `TimeVarianceScoreByDelivDate` |  | |  |  | `DEC(3)` |  |
| `NumberOfScheduleLines` |  | |  |  | `INT4(10)` | Number of Purchase Order Items |
| `SuplrEvalTimeVarianceInDays` |  | |  |  | `INT4(10)` | Overdue days |
| `SuplrEvalTimeVarianceInPct` |  | |  |  | `DEC(14)` | Variance % for Statistical Delivery Date |
| `SuplrEvalTmeVarcByDelivDtePct` |  | |  |  | `DEC(15)` | Variance for Delivery Date |
| `SuplrEvalTimeVarianceScoreVal` |  | |  |  | `DEC(3)` |  |
| `SuplrEvalTmeVarcDelivDteScrVal` |  | |  |  | `DEC(3)` |  |
| `NumberOfPurchaseOrders` |  | |  |  | `INT4(10)` | Number of Purchase Orders |
| `NumberOfPurchaseOrderItems` |  | |  |  | `INT4(10)` | Number of Purchase Order Items |
| `TimeVarianceScoreValue` |  | |  |  | `DEC(6)` | Time Variance Score |
| `TmeVarcScrByDelivDateValue` |  | |  |  | `DEC(6)` | Time variance by statistical delivery date |
| `SuplrEvalTmeVarcScoreValue` |  | |  |  | `DEC(6)` | Time Variance Score |
| `SuplrEvalTmeVarcScrDelivDteVal` |  | |  |  | `DEC(6)` | Time variance by statistical delivery date |
