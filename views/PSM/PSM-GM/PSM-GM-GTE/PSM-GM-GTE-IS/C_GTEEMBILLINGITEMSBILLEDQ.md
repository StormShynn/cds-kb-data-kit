---
name: C_GTEEMBILLINGITEMSBILLEDQ
description: Grantee Mgmt Billg Items Billed - Query
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBILLINGITEMSBILLEDQ')/$value
semantic_en: Grantee Mgmt Billg Items Billed - Query
tags:
  - PSM
  - bo:billingdocument
  - component:PSM-GM-GTE-IS
  - consumption-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
  - metadata-only
---
# C_GTEEMBILLINGITEMSBILLEDQ

**Grantee Mgmt Billg Items Billed - Query**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBILLINGITEMSBILLEDQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GteeMBillgElmntEntrItmUUID` | `RAW(16)` | Grantee Mgmt: Billing Element Entry UUID |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `ReferenceDocument` | `CHAR(10)` | Reference Doc. Number |
| `GteeMBillingExternalReference` | `CHAR(40)` | Grants Billing: External Reference |
| `GrantID` | `CHAR(20)` | Grant |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `Fund` | `CHAR(10)` | Fund |
| `GranteeMgmtBillingRule` | `NUMC(4)` | Rule Used as a Basis for Billing |
| `PubSecBudgetCnsmpnType` | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnDate` | `DATS(8)` | Budget Consumption Date |
| `DocumentCurrency` | `CUKY(5)` | Billing Document Currency |
| `GlobalCurrency` | `CUKY(5)` | GM Billing: Global Currency |
| `NotBilledAmtInDocCrcy` | `CURR(23)` | Unbilled Amount in Document Currency |
| `NotPaidRevenueAmtInDocCrcy` | `CURR(23)` | Billed Not Paid Revenue Amount |
| `PaidRevenueAmtInDocCrcy` | `CURR(23)` | Paid Revenue |
| `NotBilledAmtInGlobCurrency` | `CURR(23)` | Unbilled Amount in Global Currency |
| `NotPaidRevenueAmtInGCrcy` | `CURR(23)` | Billed Not Paid Revenue Amount in Global Currency |
| `PaidRevenueAmtInGlobalCrcy` | `CURR(23)` | Paid Revenue in Global Currency |
