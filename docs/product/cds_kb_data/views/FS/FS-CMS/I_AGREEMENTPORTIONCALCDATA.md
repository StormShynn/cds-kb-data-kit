---
name: I_AGREEMENTPORTIONCALCDATA
description: "Calculation Results for CAG Portions"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONCALCDATA')/$value
semantic_en: "Calculation Results for CAG Portions"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_AGREEMENTPORTIONCALCDATA

**Calculation Results for CAG Portions**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONCALCDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementPortionUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_CAG_POR |
| `CollateralAgreementUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_CAG |
| `CollateralConstellationUUID` |  | |  |  | `RAW(16)` | Constellation GUID |
| `CollateralAgreementPortionCrcy` |  | |  |  | `CUKY(5)` | Calculations Result Currency |
| `AgrmtPortnFreeColltrlMaxRskAmt` |  | |  |  | `CURR(17)` | Free collateral calculation for CAG |
| `AgrmtPortnFreeColltrlCurRskAmt` |  | |  |  | `CURR(17)` | Free collateral calculation for CAG |
| `AgrmtPortnFreeColltrlCurRskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `AgrmtPortnFreeColltrlMaxRskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `AgrmtPortnCalcLastChgdBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `AgrmtPortnCalcLastChgdDate` |  | |  |  | `DATS(8)` | Date on which last change was done |
| `AgrmtPortnCalcLastChgdTime` |  | |  |  | `TIMS(6)` | Time at which last change was made |
