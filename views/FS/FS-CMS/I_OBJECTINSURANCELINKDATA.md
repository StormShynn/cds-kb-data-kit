---
name: I_OBJECTINSURANCELINKDATA
description: Object Insurance Link Data
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTINSURANCELINKDATA')/$value
semantic_en: Object Insurance Link Data
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_OBJECTINSURANCELINKDATA

**Object Insurance Link Data**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTINSURANCELINKDATA')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ObjectInsuranceLinkUUID` | `RAW(16)` | Insurance Link GUID |
| `ObjectReferenceUUID` | `RAW(16)` | Object reference GUID |
| `ObjectInsuranceReferenceUUID` | `RAW(16)` | Insurance Reference GUID |
| `InsuranceReferenceSystem` | `CHAR(6)` | Object System Reference ID |
| `RealEstateUUID` | `RAW(16)` | GUID for Real Estate Object |
| `CollateralRealEstateUUID` | `RAW(16)` | GUID for Real Estate Object |
| `MovableObjectUUID` | `RAW(16)` | GUID for  CMS_MOVABLES |
| `ShipObjectUUID` | `RAW(16)` | Globally Unique Identifier |
| `RightsObjectUUID` | `RAW(16)` | Rights GUID |
