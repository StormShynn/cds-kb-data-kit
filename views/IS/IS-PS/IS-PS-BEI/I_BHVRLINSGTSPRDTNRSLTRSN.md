---
name: I_BHVRLINSGTSPRDTNRSLTRSN
description: Prediction Result Reason
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BHVRLINSGTSPRDTNRSLTRSN')/$value
semantic_en: Prediction Result Reason
tags:
  - IS
  - bo:salesorder
  - component:IS-PS-BEI
  - interface-view
  - IS-PS
  - IS-PS-BEI
  - metadata-only
---
# I_BHVRLINSGTSPRDTNRSLTRSN

**Prediction Result Reason**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BHVRLINSGTSPRDTNRSLTRSN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PredictionRecordID` |  | |  |  | `CHAR(32)` | Prediction Result Record Identifier |
| `BhvrlInsgtsRecordID` |  | |  |  | `CHAR(32)` | Record ID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` |  | |  |  | `CHAR(40)` | Name 1 of organization |
| `PredictionScenarioID` |  | |  |  | `INT1(3)` | Scenario Identifier |
| `PredictionScenarioDateTime` |  | |  |  | `DEC(15)` | Prediction UTC Time Stamp |
| `BhvrlInsgtsAccountNumber` |  | |  |  | `CHAR(12)` | Account Number |
| `BhvrlInsgtsAccountName` |  | |  |  | `CHAR(35)` | Contract Account Name |
| `BhvrlInsgtsSubAccountNumber` |  | |  |  | `CHAR(20)` | Subaccount Number |
| `BhvrlInsgtsSubAccountName` |  | |  |  | `CHAR(1)` |  |
| `BhvrlInsgtsPredictionValue` |  | |  |  | `INT1(3)` |  |
| `NumberOfBusinessPartners` |  | |  |  | `INT4(10)` |  |
| `PredictionScenarioName` |  | |  |  | `CHAR(60)` | Description of the scenario that must be displayed on the UI |
| `RiskRangeCategory` |  | |  |  | `CHAR(10)` | Range Category |
| `RiskRangeCategoryText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `BhvrlInsgtsReasonCodeValue` |  | |  |  | `CHAR(128)` | Reason Code Value |
| `BhvrlInsgtsReasonCodeName` |  | |  |  | `CHAR(30)` | Field Name |
| `BhvrlInsgtsReasonText` |  | |  |  | `CHAR(60)` | Reason Text |
| `BhvrlInsgtsRsnWgtgValue` |  | |  |  | `DECF(16)` | 8 Byte Decfloat16 |
| `BhvrlInsgtsReasonQualityValue` |  | |  |  | `DEC(16)` |  |
