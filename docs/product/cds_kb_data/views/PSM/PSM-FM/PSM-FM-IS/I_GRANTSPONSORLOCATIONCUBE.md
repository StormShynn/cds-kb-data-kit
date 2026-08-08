---
name: I_GRANTSPONSORLOCATIONCUBE
description: "Sponsor Location - Cube"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPONSORLOCATIONCUBE')/$value
semantic_en: "Sponsor Location - Cube"
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
  - metadata-only
---
# I_GRANTSPONSORLOCATIONCUBE

**Sponsor Location - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPONSORLOCATIONCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` |  |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` |  |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CountryRegion` |  | |  |  | `CHAR(6)` |  |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantLfcycStatusForAuthzn` |  | |  |  | `CHAR(5)` | GM Lifecycle Status for Auth Grp |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
