---
name: I_COLLTRLREPARTACCESSORYMASTER
description: Accessory Details for Collateral RE Part
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTACCESSORYMASTER')/$value
semantic_en: Accessory Details for Collateral RE Part
tags:
  - FS
  - bo:salesorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_COLLTRLREPARTACCESSORYMASTER

**Accessory Details for Collateral RE Part**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTACCESSORYMASTER')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ColltrlREPartAccessoryUUID` | `RAW(16)` | GUID for part accessory |
| `CollateralRealEstatePartUUID` | `RAW(16)` | GUID for Object part |
| `CollateralRealEstatePartID` | `NUMC(10)` | Part ID for the Object |
| `ColltrlRealEstateAccessoryType` | `CHAR(6)` | Accessory Type |
| `ColltrlRENumberOfAccessory` | `INT4(10)` | No of Accessory Units |
| `ColltrlREAccessoryAmount` | `CURR(17)` | Value of the Accessory |
| `ColltrlREAccessoryCurrency` | `CUKY(5)` | Currency for Value of the accessory |
| `ColltrlREIsSubAssetCreated` | `CHAR(1)` | Indicates whether a Sub-asset is created for Building Part |
| `ColltrlREAccessoryDescription` | `CHAR(30)` | Description of the cost |
| `ColltrlRealEstateAccessoryID` | `NUMC(4)` | Sequence Number of Accessory or Special Equipment |
| `CollateralRealEstateRiskCode` | `CHAR(6)` | Risk Code |
| `ColltrlRESafetyDiscountSign` | `CHAR(2)` | Indicates that the asset has a default sfty discount or not |
| `ColltrlRESafetyDiscountPercent` | `DEC(10)` | Safety discount |
| `ColltrlRESafetyDiscountAmount` | `CURR(17)` | Safety discount as an amount |
| `ColltrlRESftyDiscountCurrency` | `CUKY(5)` | Currency of the Safety discount amount |
| `ColltrlRealEstateValuationType` | `CHAR(2)` | Type of Check conducted on the object |
| `ColltrlREValuationFrequency` | `CHAR(2)` | Indicator : Valuation Period |
| `ColltrlREValuationPeriod` | `NUMC(4)` | Period of revaluation for a real estate |
| `ColltrlRELastRevaluationDate` | `DATS(8)` | Most Recent Date on which the Real Estate was last Valued |
| `ColltrlRERevaluationStartDate` | `DATS(8)` | Revaluation Start date |
| `ColltrlRERevaluationEndDate` | `DATS(8)` | End date for Revaluation of the Real Estate |
| `ColltrlRealEstateLendingSign` | `CHAR(2)` | Indicates that the asset has a default lending rate or not |
| `ColltrlRE1stLendingRate` | `DEC(10)` | Lending rate 1 |
| `ColltrlRE2ndLendingRate` | `DEC(10)` | Lending rate 2 |
| `ColltrlRE3rdLendingRate` | `DEC(10)` | Lending rate 3 |
| `ColltrlRE4thLendingRate` | `DEC(10)` | Lending rate 4 |
| `ColltrlRE5thLendingRate` | `DEC(10)` | Lending rate 5 |
