---
name: C_CHMLCMPLNCMATLASSGMTDEX
description: Chemical Compliance Info Material
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCMATLASSGMTDEX')/$value
semantic_en: Chemical Compliance Info Material
tags:
  - EHS
  - component:EHS-SUS-FND-PC
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-PC
  - material
  - metadata-only
---
# C_CHMLCMPLNCMATLASSGMTDEX

**Chemical Compliance Info Material**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCMATLASSGMTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChmlCmplncMatlAssgmtUUID` |  | |  |  | `RAW(16)` | Product Assignment |
| `ChmlCmplncInfoUUID` |  | |  |  | `RAW(16)` | Chemical Compliance Information |
| `Material` |  | |  |  | `CHAR(40)` | Product |
| `MatlAssgmtIsPrimary` |  | |  |  | `CHAR(1)` | Name Representing the Product |
