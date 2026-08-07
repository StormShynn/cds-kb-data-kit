---
name: C_PNLPLNACTLCMTMTJRNLENTRITMQ
description: P&L – Plan/Actual/Committed
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PNLPLNACTLCMTMTJRNLENTRITMQ')/$value
semantic_en: P&L – Plan/Actual/Committed
keywords:
  - P&L – Plan/Actual/Committed
  - P&L – Plan/Actual/Committed
  - P&L – Plan/Actual/Committed
tags:
  - FI
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - plan
  - metadata-only
---
# C_PNLPLNACTLCMTMTJRNLENTRITMQ

**P&L – Plan/Actual/Committed**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PNLPLNACTLCMTMTJRNLENTRITMQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `ActualValue` |  | |  |  | `INT1(3)` |  |
| `PlanValue` |  | |  |  | `INT1(3)` |  |
| `CommitmentValue` |  | |  |  | `INT1(3)` |  |
| `PlanActualCommitmentDeltaValue` |  | |  |  | `INT1(3)` |  |
