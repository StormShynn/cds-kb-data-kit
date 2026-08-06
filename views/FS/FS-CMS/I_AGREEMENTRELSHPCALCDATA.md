---
name: I_AGREEMENTRELSHPCALCDATA
description: Calculation Results for CAG Relations
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRELSHPCALCDATA')/$value
semantic_en: Calculation Results for CAG Relations
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_AGREEMENTRELSHPCALCDATA

**Calculation Results for CAG Relations**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRELSHPCALCDATA')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `AgreementRelationshipUUID` | `RAW(16)` | GUID for Table CMS_REL |
| `AgreementRelationshipSrceUUID` | `RAW(16)` | GUID for Table CMS_CAG |
| `AgrmtRelshpSrceSecdryUUID` | `RAW(16)` | Relationship Source Secondary GUID |
| `AgreementRelationshipDestUUID` | `RAW(16)` | GUID for Table CMS_CAG |
| `CollateralConstellationUUID` | `RAW(16)` | Constellation GUID |
| `AgreementRelationshipCurrency` | `CUKY(5)` | Calculations Result Currency |
| `AgrRelDistrdColltrlCurRskAmt` | `CURR(17)` | Distributed Collateral value |
| `AgrRelDistrdColltrlMaxRskAmt` | `CURR(17)` | Distributed Collateral value |
| `AgrRelDistrdColltrlCurRskPct` | `DEC(10)` | Calculations Result as Pecentage |
| `AgrRelDistrdColltrlMaxRskPct` | `DEC(10)` | Calculations Result as Pecentage |
| `AgrmtRelshpCalcLastChgdBy` | `CHAR(12)` | Last Changed By |
| `AgrmtRelshpCalcLastChgdDate` | `DATS(8)` | Date on which last change was done |
| `AgrmtRelshpCalcLastChgdTime` | `TIMS(6)` | Time at which last change was made |
