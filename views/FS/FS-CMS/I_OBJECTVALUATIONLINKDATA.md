---
name: I_OBJECTVALUATIONLINKDATA
description: Object Value Link Data
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTVALUATIONLINKDATA')/$value
semantic_en: Object Value Link Data
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_OBJECTVALUATIONLINKDATA

**Object Value Link Data**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTVALUATIONLINKDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectValuationUUID` |  | |  |  | `RAW(16)` | GUID for Value service |
| `ObjectValuationLinkUUID` |  | |  |  | `RAW(16)` | GUID for OMS Links - Values |
| `ObjectValuationType` |  | |  |  | `CHAR(6)` | Value Type |
| `ObjectValuationCalculatedAmt` |  | |  |  | `CURR(17)` | Calculated Value |
| `ObjectValuationCalculatedCrcy` |  | |  |  | `CUKY(5)` | Currency for Calculated Value |
| `ObjectValuationEnteredAmount` |  | |  |  | `CURR(17)` | Entered Value |
| `ObjectValuationEnteredCurrency` |  | |  |  | `CUKY(5)` | Currency for Entered Value |
| `ObjectValuationValidFromDate` |  | |  |  | `DATS(8)` | Date from which Value Stands Valid |
| `ObjectValuationValidToDate` |  | |  |  | `DATS(8)` | Date until which Value Stands Valid |
| `ObjectFirstValuationDate` |  | |  |  | `DATS(8)` | Date of First Valuation |
| `ObjectValuationOrigin` |  | |  |  | `CHAR(6)` | Origin of Value |
| `ObjectValuationEnteredDateTime` |  | |  |  | `DEC(15)` | Creation Timestamp |
| `ObjectValuationLastChgdDteTme` |  | |  |  | `DEC(15)` | Change Timestamp |
| `MovableObjectUUID` |  | |  |  | `RAW(16)` | GUID for  CMS_MOVABLES |
| `ShipObjectUUID` |  | |  |  | `RAW(16)` | Globally Unique Identifier |
| `RightsObjectUUID` |  | |  |  | `RAW(16)` | Rights GUID |
| `InsuranceObjectCategory` |  | |  |  | `CHAR(6)` | Object Category |
| `CollateralObjectCategory` |  | |  |  | `CHAR(6)` | Object Category |
