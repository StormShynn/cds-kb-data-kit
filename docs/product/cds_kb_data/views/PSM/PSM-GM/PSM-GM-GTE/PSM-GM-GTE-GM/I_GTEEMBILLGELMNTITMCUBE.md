---
name: I_GTEEMBILLGELMNTITMCUBE
description: "Grantee Management Billing Element Item - Cube"
app_component: PSM-GM-GTE-GM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBILLGELMNTITMCUBE')/$value
semantic_en: "Grantee Management Billing Element Item - Cube"
tags:
  - PSM
  - billing
  - bo:billingdocument
  - component:PSM-GM-GTE-GM
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-GM
  - metadata-only
---
# I_GTEEMBILLGELMNTITMCUBE

**Grantee Management Billing Element Item - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-GM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBILLGELMNTITMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GteeMBillgElmntEntrItmUUID` |  | |  |  | `RAW(16)` | Grantee Mgmt: Billing Element Entry UUID |
| `GteeMBillgElmntEntrItmFlowUUID` |  | |  |  | `RAW(16)` | GM Billing Element: Flow UUID |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Billing Document Currency |
| `OriginalRevenueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Original Amount in Document Currency |
| `ToBePostponedAmtInDocCrcy` |  | |  |  | `CURR(23)` | Amount to Be Postponed in Document Currency |
| `ToBeWrittenOffAmtInDocCrcy` |  | |  |  | `CURR(23)` | Amount to Be Written Off in Document Currency |
| `BillgInProcAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billing in Process Amount in Document Currency |
| `BilledRevenueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billed Revenue Amount in Document Currency |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | GM Billing: Global Currency |
| `OriginalRevenueAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Original Amount in Global Currency |
| `ToBeWrittenOffAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount to Be Written Off in Global Currency |
| `ToBePostponedAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount to Be Postponed in Global Currency |
| `BillgInProcAmtInGlobCurrency` |  | |  |  | `CURR(23)` | Billing in Process Amount in Global Currency |
| `BilledRevenueAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Billed Revenue Amount in Global Currency |
| `DocumentBillingStatus` |  | |  |  | `CHAR(1)` | GM Billing Elements: Grant Billing Doc. Request Status |
