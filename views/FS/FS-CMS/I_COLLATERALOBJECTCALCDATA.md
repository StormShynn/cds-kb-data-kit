---
name: I_COLLATERALOBJECTCALCDATA
description: Calculation Result for CMS Object
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTCALCDATA')/$value
semantic_en: Calculation Result for CMS Object
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_COLLATERALOBJECTCALCDATA

**Calculation Result for CMS Object**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTCALCDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralObjectUUID` |  | |  |  | `RAW(16)` | CMS-Basel II: Object GUID |
| `CollateralObjectType` |  | |  |  | `CHAR(3)` | CMS Object Type |
| `CollateralConstellationUUID` |  | |  |  | `RAW(16)` | Constellation GUID |
| `ObjectAssetType` |  | |  |  | `CHAR(6)` | Asset Type |
| `ObjectAssetParentUUID` |  | |  |  | `RAW(16)` | Asset Guid as a parent GUID for a sub-asset |
| `CollateralObjectCurrency` |  | |  |  | `CUKY(5)` | Calculations Result Currency |
| `ObjectAssetAmount` |  | |  |  | `CURR(17)` | Final Asset Value |
| `ObjectAssetLendingAmt` |  | |  |  | `CURR(17)` | Lending value Calculation for Asset |
| `ObjectAssetLendingLimit1Amt` |  | |  |  | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetLendingLimit2Amt` |  | |  |  | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetLendingLimit3Amt` |  | |  |  | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetLendingLimit4Amt` |  | |  |  | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetLendingLimit5Amt` |  | |  |  | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetLendingRange1Amt` |  | |  |  | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetLendingRange2Amt` |  | |  |  | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetLendingRange3Amt` |  | |  |  | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetLendingRange4Amt` |  | |  |  | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetLendingRange5Amt` |  | |  |  | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetPrtLendingAmt` |  | |  |  | `CURR(17)` | Lending value Calculation for Asset |
| `ObjectAssetPrtLendingLimit1Amt` |  | |  |  | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetPrtLendingLimit2Amt` |  | |  |  | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetPrtLendingLimit3Amt` |  | |  |  | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetPrtLendingLimit4Amt` |  | |  |  | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetPrtLendingLimit5Amt` |  | |  |  | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjectAssetPrtLendingRange1Amt` |  | |  |  | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetPrtLendingRange2Amt` |  | |  |  | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetPrtLendingRange3Amt` |  | |  |  | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetPrtLendingRange4Amt` |  | |  |  | `CURR(17)` | Lending Range calculation for Asset |
| `ObjectAssetPrtLendingRange5Amt` |  | |  |  | `CURR(17)` | Lending Range calculation for Asset |
| `ObjAstFreeLendgLmtCurRskAmt` |  | |  |  | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjAstFreeLendgLmtMaxRskAmt` |  | |  |  | `CURR(17)` | Lending Limit Calculation for Asset |
| `ObjAstFreeLendgLmtCurRskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `ObjAstFreeLendgLmtMaxRskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `CollateralRblCreditSystem` |  | |  |  | `CHAR(3)` | Credit System |
| `CollateralReceivableID` |  | |  |  | `CHAR(64)` | Receivable ID |
| `RblCoverageGapCurRiskAmt` |  | |  |  | `CURR(17)` | Coverage Gap Calculation for RBL |
| `RblCoverageGapMaxRiskAmt` |  | |  |  | `CURR(17)` | Coverage Gap Calculation for RBL |
| `RblCoverageGapCurRiskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `RblCoverageGapMaxRiskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `RblCollateralRatioCurRiskPct` |  | |  |  | `DEC(10)` | Collateralization Ratio |
| `RblCollateralRatioMaxRiskPct` |  | |  |  | `DEC(10)` | Collateralization Ratio |
| `AgreementCollateralCurRiskAmt` |  | |  |  | `CURR(17)` | Collateral Value Calculation for CAG |
| `AgreementCollateralMaxRiskAmt` |  | |  |  | `CURR(17)` | Collateral Value Calculation for CAG |
| `AgreementCollateralCurRiskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `AgreementCollateralMaxRiskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `AgreementGuarLendingCurRiskAmt` |  | |  |  | `CURR(17)` | Lending value calculation Guarantee |
| `AgreementGuarLendingMaxRiskAmt` |  | |  |  | `CURR(17)` | Lending value calculation Guarantee |
| `AgreementGuarLendingCurRiskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `AgreementGuarLendingMaxRiskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `AgreementGuarLendgLmtCurRskAmt` |  | |  |  | `CURR(17)` | Lending limit calculation for Guarantee |
| `AgreementGuarLendgLmtMaxRskAmt` |  | |  |  | `CURR(17)` | Lending limit calculation for Guarantee |
| `AgreementGuarLendgLmtCurRskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `AgreementGuarLendgLmtMaxRskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `AgrmtLoanToValAgrmtCurRskAmt` |  | |  |  | `CURR(17)` | Loan to value ratio for cag as amount |
| `AgrmtLoanToValAgrmtMaxRskAmt` |  | |  |  | `CURR(17)` | Loan to value ratio for cag as amount |
| `AgrmtLoanToValAgrmtCurRskPct` |  | |  |  | `DEC(10)` | Loan to value ratio for cag as percentage |
| `AgrmtLoanToValAgrmtMaxRskPct` |  | |  |  | `DEC(10)` | Loan to value ratio for cag as percentage |
| `AgrLoaToValPriorChrgCurRskAmt` |  | |  |  | `CURR(17)` | Loan to value ratio with ref to prior charge: as amount |
| `AgrLoaToValPriorChrgMaxRskAmt` |  | |  |  | `CURR(17)` | Loan to value ratio with ref to prior charge: as amount |
| `AgrLoaToValPriorChrgRskCurPct` |  | |  |  | `DEC(10)` | Loan to value ratio with ref to prior charge: as pct |
| `AgrLoaToValPriorChrgMaxRskPct` |  | |  |  | `DEC(10)` | Loan to value ratio with ref to prior charge: as pct |
| `AgreementLoanToValRblCurRskAmt` |  | |  |  | `CURR(17)` | Loan to value ratio with ref to RBL : as amount |
| `AgreementLoanToValRblMaxRskAmt` |  | |  |  | `CURR(17)` | Loan to value ratio with ref to RBL : as amount |
| `AgreementLoanToValRblCurRskPct` |  | |  |  | `DEC(10)` | Loan to value ratio with ref to RBL: as pct |
| `AgreementLoanToValRblMaxRskPct` |  | |  |  | `DEC(10)` | Loan to value ratio with ref to RBL: as pct |
| `AgrmtDistrdColltrlCurRskAmt` |  | |  |  | `CURR(17)` | Distributed Collateral value |
| `AgrmtDistrdColltrlMaxRskAmt` |  | |  |  | `CURR(17)` | Distributed Collateral value |
| `AgrmtDistrdColltrlCurRskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `AgrmtDistrdColltrlMaxRskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `AgreementCvrgRatioCurRiskPct` |  | |  |  | `DEC(10)` | Coverage ratio of collateral agreements |
| `AgreementCvrgRatioMaxRiskPct` |  | |  |  | `DEC(10)` | Coverage ratio of collateral agreements |
| `AgrmtColltrlRightsCurRskAmt` |  | |  |  | `CURR(17)` | Collateral Right Determined for  CAG |
| `AgrmtColltrlRightsMaxRskAmt` |  | |  |  | `CURR(17)` | Collateral Right Determined for  CAG |
| `AgrmtColltrlRightsCurRskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `AgrmtColltrlRightsMaxRskPct` |  | |  |  | `DEC(10)` | Calculations Result as Pecentage |
| `CollateralObjCalcLastChangedBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `CollateralObjCalcLastChgdDate` |  | |  |  | `DATS(8)` | Date on which last change was done |
| `CollateralObjCalcLastChgdTime` |  | |  |  | `TIMS(6)` | Time at which last change was made |
| `ObjectAssetUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_AST |
| `ObjectAssetReferenceSystem` |  | |  |  | `CHAR(6)` | Object System Reference ID |
