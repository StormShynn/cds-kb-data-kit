---
name: C_BHVRLINSGTSPRDTNRSLTRSNQ
description: Prediction Result Reason Details
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSPRDTNRSLTRSNQ')/$value
semantic_en: Prediction Result Reason Details
tags:
  - IS
  - bo:salesorder
  - component:IS-PS-BEI
  - consumption-view
  - IS-PS
  - IS-PS-BEI
  - metadata-only
---
# C_BHVRLINSGTSPRDTNRSLTRSNQ

**Prediction Result Reason Details**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSPRDTNRSLTRSNQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PredictionRecordID` | `CHAR(32)` | Prediction Result Record Identifier |
| `BhvrlInsgtsRecordID` | `CHAR(32)` | Record ID |
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
| `BhvrlInsgtsReasonCodeName` | `CHAR(30)` | Field Name |
| `BhvrlInsgtsReasonText` | `CHAR(60)` | Reason Text |
| `BhvrlInsgtsReasonCodeValue` | `CHAR(128)` | Reason Code Value |
| `BhvrlInsgtsRsnWgtgValue` | `DECF(16)` | 8 Byte Decfloat16 |
| `BhvrlInsgtsReasonQualityValue` | `INT1(3)` |  |
