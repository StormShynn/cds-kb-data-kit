---
name: I_GTEEMBDGTVALIDITYNUMBER
description: "Grantee Management Budget Validity Number"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBDGTVALIDITYNUMBER')/$value
semantic_en: "Grantee Management Budget Validity Number"
tags:
  - PSM
  - budget
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
  - metadata-only
---
# I_GTEEMBDGTVALIDITYNUMBER

**Grantee Management Budget Validity Number**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBDGTVALIDITYNUMBER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GteeMBudgetValidityNumber` |  | |  |  | `CHAR(3)` | Budget Validity Number |
| `GranteeMgmtBdgtPhase` |  | |  |  | `CHAR(1)` | Budget Phase |
| `GranteeMgmtBudgetStatus` |  | |  |  | `CHAR(1)` | Budget Status: Unreleased/Released |
| `GteeMBdgtValidityNumberStrtDte` |  | |  |  | `DATS(8)` | Start Date of Budget Validity Number |
| `GteeMBdgtValidityNumberEndDate` |  | |  |  | `DATS(8)` | End Date of Budget Validity Number |
| `GrantFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Sponsor (is Grant Fiscal Year) |
| `GranteeFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year for Grantee Organization |
