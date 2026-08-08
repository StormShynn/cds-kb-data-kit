---
name: C_READJUSTMENTRESULTEMAILEDP
description: "Real Estate Adjustment Result EDP"
app_component: RE-FX-CP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_READJUSTMENTRESULTEMAILEDP')/$value
semantic_en: "Real Estate Adjustment Result EDP"
tags:
  - RE
  - component:RE-FX-CP-2CL
  - consumption-view
  - RE-FX
  - RE-FX-CP
  - RE-FX-CP-2CL
  - metadata-only
---
# C_READJUSTMENTRESULTEMAILEDP

**Real Estate Adjustment Result EDP**

| Property | Value |
|---|---|
| App Component | `RE-FX-CP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_READJUSTMENTRESULTEMAILEDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RealEstateProcess` |  | |  |  | `CHAR(16)` | Process ID |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `REContractType` |  | |  |  | `CHAR(4)` | Contract Type |
| `REAdjustmentRecordUUID` |  | |  |  | `RAW(16)` | Generic Key of Adjustment Record |
| `REAdjustmentNmbrOfLettersSent` |  | |  |  | `INT1(3)` | Number of Adjustment Letters |
| `REAdjustmentLetterSentOnDate` |  | |  |  | `DATS(8)` | Adjustment Letter On |
| `REProcessUUID` |  | |  |  | `RAW(16)` | Generic Key of Process |
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
