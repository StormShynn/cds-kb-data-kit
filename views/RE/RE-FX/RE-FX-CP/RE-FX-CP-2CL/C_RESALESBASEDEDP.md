---
name: C_RESALESBASEDEDP
description: "RE Sales-Based Email Determination"
app_component: RE-FX-CP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESALESBASEDEDP')/$value
semantic_en: "RE Sales-Based Email Determination"
tags:
  - RE
  - component:RE-FX-CP-2CL
  - consumption-view
  - RE-FX
  - RE-FX-CP
  - RE-FX-CP-2CL
  - metadata-only
---
# C_RESALESBASEDEDP

**RE Sales-Based Email Determination**

| Property | Value |
|---|---|
| App Component | `RE-FX-CP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESALESBASEDEDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RealEstateProcess` |  | |  |  | `CHAR(16)` | Process ID |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `REContractType` |  | |  |  | `CHAR(4)` | Contract Type |
| `REProcessUUID` |  | |  |  | `RAW(16)` | Generic Key of Process |
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
