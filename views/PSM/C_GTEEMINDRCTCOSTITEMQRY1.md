---
name: C_GTEEMINDRCTCOSTITEMQRY1
description: Grant Indirect Cost Item - Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMINDRCTCOSTITEMQRY1')/$value
semantic_en: Grant Indirect Cost Item - Query
tags:
  - PSM
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_GTEEMINDRCTCOSTITEMQRY1

**Grant Indirect Cost Item - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMINDRCTCOSTITEMQRY1')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `AccountingDocumentItem` | `NUMC(3)` | Journal Entry Posting View Item |
| `GrantID` | `CHAR(20)` | Grant |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `GrantType` | `CHAR(2)` | Grant Type |
| `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
| `ValidityStartDate` | `DATS(8)` | Valid-from Date |
| `ValidityEndDate` | `DATS(8)` | Valid-to Date |
| `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `Fund` | `CHAR(10)` | Fund |
| `IndirectCostAmtInCoCodeCrcy` | `CURR(23)` | Indirect Cost Amount in Company Code Currency |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
