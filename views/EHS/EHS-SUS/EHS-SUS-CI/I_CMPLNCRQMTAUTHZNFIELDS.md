---
name: I_CMPLNCRQMTAUTHZNFIELDS
description: Cmplnc Requirement Authorization Fields
app_component: EHS-SUS-CI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLNCRQMTAUTHZNFIELDS')/$value
semantic_en: Cmplnc Requirement Authorization Fields
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-CI
  - EHS-SUS
  - EHS-SUS-CI
  - interface-view
  - metadata-only
---
# I_CMPLNCRQMTAUTHZNFIELDS

**Cmplnc Requirement Authorization Fields**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-CI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLNCRQMTAUTHZNFIELDS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplRqUUID` |  | |  |  | `RAW(16)` | Compliance Requirement |
| `EHSTaskHostObjectInstance` |  | |  |  | `CHAR(70)` | Instance Ident. in BOR Compat. Persistent Object References |
| `CmplRqVersUUID` |  | |  |  | `RAW(16)` | Compliance Requirement UUID |
| `CmplRqDomain` |  | |  |  | `CHAR(21)` | Compliance Requirement Domain |
