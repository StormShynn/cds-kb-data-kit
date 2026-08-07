---
name: I_COLLTRLRELANDREGFINDATA
description: Land Reg Fin Dets for Collateral
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGFINDATA')/$value
semantic_en: Land Reg Fin Dets for Collateral
tags:
  - FS
  - bo:companycode
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_COLLTRLRELANDREGFINDATA

**Land Reg Fin Dets for Collateral**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGFINDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlLandRegFinancialUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_LR_DE_2 |
| `ColltrlLandRegisterHeaderUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_LR_DE_A |
| `ColltrlLandRegChrgSerialNumber` |  | |  |  | `CHAR(32)` | Serial No |
| `ColltrlLandRegPrptyListNumber` |  | |  |  | `CHAR(4)` | Serial number of the Property List Number |
| `ColltrlLandRegChrgPrioValue` |  | |  |  | `NUMC(4)` | Priority of the Charge |
| `ColltrlLandRegisterChargeType` |  | |  |  | `CHAR(6)` | Section II Charge/Restriction Type |
| `ColltrlLandRegChargeAmount` |  | |  |  | `CURR(17)` | Value of the Charge/Restriction |
| `ColltrlLandRegChargeCurrency` |  | |  |  | `CUKY(5)` | Currency of the Charge |
| `ColltrlLandRegChrgDescription` |  | |  |  | `CHAR(60)` | Description |
