---
name: C_GTEEMBILLGELMNTITMQRY1
description: Grantee Mgmt Billing Element Item - Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBILLGELMNTITMQRY1')/$value
semantic_en: Grantee Mgmt Billing Element Item - Query
tags:
  - PSM
  - billing
  - bo:billingdocument
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_GTEEMBILLGELMNTITMQRY1

**Grantee Mgmt Billing Element Item - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBILLGELMNTITMQRY1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GteeMBillgElmntEntrItmUUID` |  | |  |  | `RAW(16)` | Grantee Mgmt: Billing Element Entry UUID |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Billing Document Currency |
| `OriginalRevenueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Original Amount in Document Currency |
| `ToBePostponedAmtInDocCrcy` |  | |  |  | `CURR(23)` | Amount to Be Postponed in Document Currency |
| `ToBeWrittenOffAmtInDocCrcy` |  | |  |  | `CURR(23)` | Amount to Be Written Off in Document Currency |
| `BillgInProcAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billing in Process Amount in Document Currency |
| `BilledRevenueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billed Revenue Amount in Document Currency |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `DocumentBillingStatus` |  | |  |  | `CHAR(1)` | GM Billing Elements: Grant Billing Doc. Request Status |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | GM Billing: Global Currency |
| `OriginalRevenueAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Original Amount in Global Currency |
| `ToBePostponedAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount to Be Postponed in Global Currency |
| `ToBeWrittenOffAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount to Be Written Off in Global Currency |
| `BillgInProcAmtInGlobCurrency` |  | |  |  | `CURR(23)` | Billing in Process Amount in Global Currency |
| `BilledRevenueAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Billed Revenue Amount in Global Currency |
