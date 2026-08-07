---
name: I_AGREEMENTASSETCALCDATA
description: Calculation Results for Agreement Asset
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTASSETCALCDATA')/$value
semantic_en: Calculation Results for Agreement Asset
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_AGREEMENTASSETCALCDATA

**Calculation Results for Agreement Asset**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTASSETCALCDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectAssetUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_AST |
| `CollateralAgreementUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_CAG |
| `AgreementPriorChargeUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_CAG |
| `AssetAgreementUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_CHG |
| `CollateralConstellationUUID` |  | |  |  | `RAW(16)` | Constellation GUID |
| `CollateralAgreementAssetCrcy` |  | |  |  | `CUKY(5)` | Calculations Result Currency |
| `AgrAssDistrd1stLnRgCurRskAmt` |  | |  |  | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd2ndLnRgCurRskAmt` |  | |  |  | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd3rdLnRgCurRskAmt` |  | |  |  | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd4thLnRgCurRskAmt` |  | |  |  | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd5thLnRgCurRskAmt` |  | |  |  | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd1stLnRgMaxRskAmt` |  | |  |  | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd2ndLnRgMaxRskAmt` |  | |  |  | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd3rdLnRgMaxRskAmt` |  | |  |  | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd4thLnRgMaxRskAmt` |  | |  |  | `CURR(17)` | Distributed Lending Range |
| `AgrAssDistrd5thLnRgMaxRskAmt` |  | |  |  | `CURR(17)` | Distributed Lending Range |
| `AgreementAssetPriorChargeAmt` |  | |  |  | `CURR(17)` | Prior Charges calculation for ast-cag link |
| `AgreementAssetPriorChargePct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `AgreementAssetCalcLastChgdBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `AgreementAssetCalcLastChgdDate` |  | |  |  | `DATS(8)` | Date on which last change was done |
| `AgreementAssetCalcLastChgdTime` |  | |  |  | `TIMS(6)` | Time at which last change was made |
| `ObjectAssetReferenceSystem` |  | |  |  | `CHAR(6)` | Object System Reference ID |
