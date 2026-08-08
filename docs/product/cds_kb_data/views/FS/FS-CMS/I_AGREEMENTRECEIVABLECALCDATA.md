---
name: I_AGREEMENTRECEIVABLECALCDATA
description: "Calculation Results for CAG Receivable"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRECEIVABLECALCDATA')/$value
semantic_en: "Calculation Results for CAG Receivable"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_AGREEMENTRECEIVABLECALCDATA

**Calculation Results for CAG Receivable**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRECEIVABLECALCDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementReceivableUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_CAG_RBL |
| `CollateralRblCreditSystem` |  | |  |  | `CHAR(3)` | Credit System |
| `CollateralReceivableID` |  | |  |  | `CHAR(64)` | Receivable ID |
| `AgreementPortionUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_CAG_POR |
| `CollateralAgreementUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_CAG |
| `CollateralConstellationUUID` |  | |  |  | `RAW(16)` | Constellation GUID |
| `CollateralAgreementRblCrcy` |  | |  |  | `CUKY(5)` | Calculations Result Currency |
| `AgrmtRblDistrdColltrlCurRskAmt` |  | |  |  | `CURR(17)` | Distributed Collateral value |
| `AgrmtRblDistrdColltrlMaxRskAmt` |  | |  |  | `CURR(17)` | Distributed Collateral value |
| `AgrmtRblDistrdColltrlCurRskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `AgrmtRblDistrdColltrlMaxRskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `AgreementRblCalcLastChgdBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `AgreementRblCalcLastChgdDate` |  | |  |  | `DATS(8)` | Date on which last change was done |
| `AgreementRblCalcLastChgdTime` |  | |  |  | `TIMS(6)` | Time at which last change was made |
