---
name: C_GTEEMBLLDELMNTITMQRY1
description: "Grantee Mgmt Billed Element Item - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBLLDELMNTITMQRY1')/$value
semantic_en: "Grantee Mgmt Billed Element Item - Query"
tags:
  - PSM
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_GTEEMBLLDELMNTITMQRY1

**Grantee Mgmt Billed Element Item - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBLLDELMNTITMQRY1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `ClearingAccountingDocument` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `NetDueDate` |  | |  |  | `DATS(8)` | Net Due Date |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `OnTimePaidAmtInDocCrcy` |  | |  |  | `CURR(23)` | On Time Paid Revenue Amount |
| `LatePaidAmtInDocCrcy` |  | |  |  | `CURR(23)` | Late Paid Revenue |
| `BilledNotDueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billed and Not Due Revenue |
| `BilledOverdueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billed and Overdue Revenue |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `OnTimePaidAmtInGCrcy` |  | |  |  | `CURR(23)` | On Time Paid Revenue in Global Currency |
| `LatePaidAmtInGCrcy` |  | |  |  | `CURR(23)` | Late Paid Revenue Amount in Global Crrency |
| `BilledNotDueAmtInGCrcy` |  | |  |  | `CURR(23)` | Billed and Not Due Revenue Amount in Global Currency |
| `BilledOverdueAmtInGCrcy` |  | |  |  | `CURR(23)` | Billed and Overdue Amount in Global Currency |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
