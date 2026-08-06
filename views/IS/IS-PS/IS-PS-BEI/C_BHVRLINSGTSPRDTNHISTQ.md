---
name: C_BHVRLINSGTSPRDTNHISTQ
description: Risk Prediction History
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSPRDTNHISTQ')/$value
semantic_en: Risk Prediction History
tags:
  - IS
  - component:IS-PS-BEI
  - consumption-view
  - IS-PS
  - IS-PS-BEI
  - metadata-only
---
# C_BHVRLINSGTSPRDTNHISTQ

**Risk Prediction History**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSPRDTNHISTQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PredictionRecordID` | `CHAR(32)` | Prediction Result Record Identifier |
| `PredictionScenarioID` | `INT1(3)` | Scenario Identifier |
| `PredictionScenarioName` | `CHAR(60)` | Description of the scenario that must be displayed on the UI |
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` | `CHAR(40)` | Name 1 of organization |
| `BhvrlInsgtsAccountNumber` | `CHAR(12)` | Account Number |
| `BhvrlInsgtsAccountName` | `CHAR(35)` | Contract Account Name |
| `BhvrlInsgtsSubAccountNumber` | `CHAR(20)` | Subaccount Number |
| `BhvrlInsgtsSubAccountName` | `CHAR(1)` |  |
| `NumberOfBusinessPartners` | `INT4(10)` |  |
| `BhvrlInsgtsPredictionValue` | `INT1(3)` |  |
| `PredictionScenarioDateTime` | `DEC(15)` | Prediction UTC Time Stamp |
| `RiskRangeCategory` | `CHAR(10)` | Range Category |
| `RiskRangeCategoryText` | `CHAR(60)` | Short Text for Fixed Values |
