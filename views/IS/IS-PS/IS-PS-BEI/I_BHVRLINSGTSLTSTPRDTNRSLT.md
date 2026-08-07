---
name: I_BHVRLINSGTSLTSTPRDTNRSLT
description: "Prediction Latest Result - Query"
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BHVRLINSGTSLTSTPRDTNRSLT')/$value
semantic_en: "Prediction Latest Result - Query"
tags:
  - IS
  - component:IS-PS-BEI
  - interface-view
  - IS-PS
  - IS-PS-BEI
  - metadata-only
---
# I_BHVRLINSGTSLTSTPRDTNRSLT

**Prediction Latest Result - Query**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BHVRLINSGTSLTSTPRDTNRSLT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PredictionRecordID` |  | |  |  | `CHAR(32)` | Prediction Result Record Identifier |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BhvrlInsgtsAccountNumber` |  | |  |  | `CHAR(12)` | Account Number |
| `BhvrlInsgtsSubAccountNumber` |  | |  |  | `CHAR(20)` | Subaccount Number |
| `PredictionScenarioID` |  | |  |  | `INT1(3)` | Scenario Identifier |
| `ScenarioName` |  | |  |  | `CHAR(60)` | Description of the scenario that must be displayed on the UI |
| `RiskScoreValue` |  | |  |  | `INT1(3)` |  |
| `RiskTrendValue` |  | |  |  | `INT2(5)` | Prediction Risk Score Trend value |
| `RiskScoreCategory` |  | |  |  | `CHAR(10)` | Range Category |
| `RiskScoreCategoryText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `DebtAmountInLocalCurrency` |  | |  |  | `CURR(13)` | Debt Amount |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Amount Currency |
| `DebtAmountCategory` |  | |  |  | `CHAR(10)` | Range Category |
| `BhvrlInsgtsAccountCategory` |  | |  |  | `CHAR(2)` | Contract Account Category |
| `BhvrlInsgtsAccountCategoryTxt` |  | |  |  | `CHAR(50)` | Description of Contract Account Category |
| `BhvrlInsgtsAccountName` |  | |  |  | `CHAR(35)` | Contract Account Name |
| `PredictionRangeIdentifier` |  | |  |  | `INT2(5)` |  |
