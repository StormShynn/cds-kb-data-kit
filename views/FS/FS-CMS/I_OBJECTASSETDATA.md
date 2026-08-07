---
name: I_OBJECTASSETDATA
description: Object Asset Details
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETDATA')/$value
semantic_en: Object Asset Details
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_OBJECTASSETDATA

**Object Asset Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectAssetUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_AST |
| `ObjectAssetID` |  | |  |  | `CHAR(40)` | Asset ID |
| `ObjectAssetType` |  | |  |  | `CHAR(6)` | Asset Type |
| `ObjectAssetParentUUID` |  | |  |  | `RAW(16)` | Asset Guid as a parent GUID for a sub-asset |
| `ObjectAssetReferenceNumber` |  | |  |  | `CHAR(40)` | Reference ID for the object |
| `ObjectAssetRiskCode` |  | |  |  | `CHAR(6)` | Risk Code |
| `ObjectAssetSafetyDiscountSign` |  | |  |  | `CHAR(2)` | Indicates if the Asset has a Default Safety Discount |
| `ObjectAssetSafetyDiscountPct` |  | |  |  | `DEC(10)` | Percentage of Safety Discount |
| `ObjectAssetSafetyDiscountAmt` |  | |  |  | `CURR(17)` | Amount of Safety Discount |
| `ObjectAssetSafetyDiscountCrcy` |  | |  |  | `CUKY(5)` | Currency of the Safety Discount Amount |
| `ObjectAssetReferenceSystem` |  | |  |  | `CHAR(6)` | Object System Reference ID |
| `ObjectAssetValuationType` |  | |  |  | `CHAR(2)` | Type of Valuation Check performed on Collateral Object |
| `ObjectAssetValuationFrequency` |  | |  |  | `CHAR(2)` | Indicator: Units of time for revaluation of an asset |
| `ObjectAssetValuationPeriod` |  | |  |  | `NUMC(4)` | Revaluation Period for an Asset |
| `ObjectAssetLastRevaluationDate` |  | |  |  | `DATS(8)` | Last Date on which the Asset was Valued |
| `ObjectAssetRevaluationStartDte` |  | |  |  | `DATS(8)` | Date on which the First Valuation is Performed on the Asset |
| `ObjectAssetRevaluationEndDate` |  | |  |  | `DATS(8)` | Date on which the Last Valuation is Performed on the Asset |
| `ObjectAssetLendingRateSign` |  | |  |  | `CHAR(2)` | Indicator to specify if Asset has a Default Lending Rate |
| `ObjectAsset1stLendingRate` |  | |  |  | `DEC(10)` | Lending Rate 1 |
| `ObjectAsset2ndLendingRate` |  | |  |  | `DEC(10)` | Lending Rate 2 |
| `ObjectAsset3rdLendingRate` |  | |  |  | `DEC(10)` | Lending Rate 3 |
| `ObjectAsset4thLendingRate` |  | |  |  | `DEC(10)` | Lending Rate 4 |
| `ObjectAsset5thLendingRate` |  | |  |  | `DEC(10)` | Lending Rate 5 |
| `ObjectAssetLiquidationType` |  | |  |  | `CHAR(6)` | Liquidation Type |
| `ObjectAssetLiquidationReason` |  | |  |  | `CHAR(6)` | Liquidation Reason |
| `ObjectAssetLiquidationDate` |  | |  |  | `DATS(8)` | Date on which the Collateral was Liquidated |
| `ObjectAssetLiquidationAmount` |  | |  |  | `CURR(17)` | Returns from the Liquidation of Collateral |
| `ObjectAssetLiquidationCurrency` |  | |  |  | `CUKY(5)` | Currency of Liquidation Value |
| `ObjectAssetLqdtnAccountNumber` |  | |  |  | `CHAR(35)` | Account number for liquidation proceeds |
| `ObjectAssetLqdtnBankCountry` |  | |  |  | `CHAR(3)` | Key of Bank Country/Region |
| `ObjectAssetLiquidationBankKey` |  | |  |  | `CHAR(15)` | Bank Key |
| `ObjectAssetBankControlKey` |  | |  |  | `CHAR(2)` | Bank Control Key |
| `ObjectAssetVerificationFrqcy` |  | |  |  | `CHAR(2)` | Indicator: Units of time for verification of an asset |
| `ObjectAssetVerificationPeriod` |  | |  |  | `NUMC(4)` | Statement Period for an Asset |
| `ObjectAssetVerificationDate` |  | |  |  | `DATS(8)` | Last Verification Date |
| `ObjectAssetNominalAmount` |  | |  |  | `CURR(17)` | Nominal Value of the Asset |
| `ObjectAssetNominalCurrency` |  | |  |  | `CUKY(5)` | Currency of Nominal value |
| `ObjectAssetFinalAmount` |  | |  |  | `CURR(17)` | Final Asset Value |
| `ObjectAssetFinalCurrency` |  | |  |  | `CUKY(5)` | Currency of the Final Asset Value |
| `ObjectAssetQuantity` |  | |  |  | `QUAN(13)` | Quantity |
| `ObjectAssetUnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure of Quantity |
| `ObjectAssetOriginalAmount` |  | |  |  | `CURR(17)` | Original Protection of the Asset |
| `ObjectAssetOriginalCurrency` |  | |  |  | `CUKY(5)` | Currency of the Original Protection Value |
