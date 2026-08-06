---
name: I_EHSRSKASSESSMENTAUTHZNFIELDS
description: Environment and Health and Safety Risk Assessment Authorization Fields
app_component: EHS-SUS-HS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSRSKASSESSMENTAUTHZNFIELDS')/$value
semantic_en: Environment and Health and Safety Risk Assessment Authorization Fields
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-HS
  - EHS-SUS
  - EHS-SUS-HS
  - interface-view
  - metadata-only
---
# I_EHSRSKASSESSMENTAUTHZNFIELDS

**Environment and Health and Safety Risk Assessment Authorization Fields**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-HS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSRSKASSESSMENTAUTHZNFIELDS')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EHSRiskAssessmentUUID` | `RAW(16)` | Risk Assessment - Root UUID |
| `EHSTaskHostObjectInstance` | `CHAR(70)` | Instance Ident. in BOR Compat. Persistent Object References |
| `EHSRiskAssessmentType` | `CHAR(21)` | Risk Assessment Type |
| `EHSLocationAuthorizationGroup` | `CHAR(21)` | Location Authorization Group |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `Plant` | `CHAR(4)` | Plant ID |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `EHSLocationUUIDHex` | `CHAR(32)` | EHS Location - Root UUID Hex |
