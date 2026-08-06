---
name: C_ARBANKSTMTREPROCESSING
description: This CDS view provides you with an overview about the manual reprocessing of incoming payments (bank statement items). The search result aggregates the number of reprocessed items and valuates them with the reprocessing costs and calculates the ratio of reprocessed items per account (company code and customer), bank and payment transaction type. This CDS view provides you with the information that you need to answer the following business questions: Are the settings for automatic posting complete? How often and under what circumstances is manual reprocessing required? This query cannot be accessed directly using SQL or custom CDS views. This query can be used in the key user tool KPI Design or Create Reports.
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARBANKSTMTREPROCESSING')/$value
semantic_en: This CDS view provides you with an overview about the manual reprocessing of incoming payments (bank statement items). The search result aggregates the number of reprocessed items and valuates them with the reprocessing costs and calculates the ratio of reprocessed items per account (company code and customer), bank and payment transaction type. This CDS view provides you with the information that you need to answer the following business questions: Are the settings for automatic posting complete? How often and under what circumstances is manual reprocessing required? This query cannot be accessed directly using SQL or custom CDS views. This query can be used in the key user tool KPI Design or Create Reports.
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - consumption-view
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - lob:finance
  - payment
  - transaction
  - metadata-only
---
# C_ARBANKSTMTREPROCESSING

**This CDS view provides you with an overview about the manual reprocessing of incoming payments (bank statement items). The search result aggregates the number of reprocessed items and valuates them with the reprocessing costs and calculates the ratio of reprocessed items per account (company code and customer), bank and payment transaction type. This CDS view provides you with the information that you need to answer the following business questions: Are the settings for automatic posting complete? How often and under what circumstances is manual reprocessing required? This query cannot be accessed directly using SQL or custom CDS views. This query can be used in the key user tool KPI Design or Create Reports.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARBANKSTMTREPROCESSING')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `BankCountry` | `CHAR(3)` | Bank Country/Region Key |
| `BankInternalID` | `CHAR(15)` | Bank Keys |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Customer` | `CHAR(10)` | Customer Number |
| `AccountingClerk` | `CHAR(2)` | Accounting Clerk |
| `PaymentManualTransacTypeName` | `CHAR(40)` | Manual Transaction Text |
| `PaymentExternalTransacType` | `CHAR(27)` | External Business Transaction |
| `BankStmntItemReprocessReason` | `CHAR(2)` | Reprocessing Reason Code |
| `BankStmntItemReprocessRsnName` | `CHAR(60)` | Reprocessing Reason |
| `YearMonth` | `CHAR(6)` | Calendar Year Month in external format MM.YYYY |
| `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `CustomerName` | `CHAR(80)` | Name of Customer |
| `AccountingClerkName` | `CHAR(30)` | Name of Accounting Clerk |
| `BankName` | `CHAR(60)` | Name of Financial Institution |
| `NumberOfItems` | `INT4(10)` | Number of Items |
| `NumberOfReprocessedItems` | `INT4(10)` | Number of Reprocessed Items |
| `BankStmntItemReprocgRate` | `INT1(3)` |  |
| `Currency` | `CUKY(5)` | Display Currency |
| `ReprocessingCostPerCoCode` | `CURR(23)` | Average Cost to Reprocess an Incoming Payment |
| `TotalAmountInDisplayCrcy` | `CURR(23)` | Total Amount in Display Currency |
