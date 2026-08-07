---
name: I_EHSCTRLIMPLMTNAUTHZNFIELDS
description: Environment and Health and Safety Control Implementation Authorization Fields
app_component: EHS-SUS-HS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSCTRLIMPLMTNAUTHZNFIELDS')/$value
semantic_en: Environment and Health and Safety Control Implementation Authorization Fields
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-HS
  - EHS-SUS
  - EHS-SUS-HS
  - interface-view
  - metadata-only
---
# I_EHSCTRLIMPLMTNAUTHZNFIELDS

**Environment and Health and Safety Control Implementation Authorization Fields**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-HS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSCTRLIMPLMTNAUTHZNFIELDS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSControlInstanceUUID` |  | |  |  | `RAW(16)` | NodeID |
| `EHSTaskHostObjectInstance` |  | |  |  | `CHAR(70)` | Instance Ident. in BOR Compat. Persistent Object References |
| `EHSRiskAssessmentType` |  | |  |  | `CHAR(21)` | Risk Assessment Type |
| `EHSLocationAuthorizationGroup` |  | |  |  | `CHAR(21)` | Location Authorization Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
