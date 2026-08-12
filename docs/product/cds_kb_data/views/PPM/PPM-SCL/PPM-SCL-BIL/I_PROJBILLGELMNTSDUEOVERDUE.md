---
name: I_PROJBILLGELMNTSDUEOVERDUE
description: "Billing elements due and overdue"
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJBILLGELMNTSDUEOVERDUE')/$value
semantic_en: "Billing elements due and overdue"
tags:
  - PPM
  - billing
  - bo:billingdocument
  - component:PPM-SCL-BIL
  - interface-view
  - PPM-SCL
  - PPM-SCL-BIL
  - metadata-only
---
# I_PROJBILLGELMNTSDUEOVERDUE

**Billing elements due and overdue**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJBILLGELMNTSDUEOVERDUE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectBillingElementUUID` |  | |  |  | `RAW(16)` | Project Billing Element UUID |
| `DueBillingDate` |  | |  |  | `DATS(8)` | Billing Date |
| `BillingWBSElementInternalID` |  | |  |  | `NUMC(8)` |  |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Document Currency |
| `BillableRevenueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billable Revenue |
| `BillingPlanUsageCategory` |  | |  |  | `CHAR(2)` |  |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` |  |
| `Project` |  | |  |  | `CHAR(24)` |  |
| `Customer` |  | |  |  | `CHAR(10)` | Project Customer |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProjectBillingRequest` |  | |  |  | `CHAR(10)` |  |
