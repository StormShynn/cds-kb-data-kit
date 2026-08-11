---
name: C_BHVRLINSGTSPRDTNRSLTRSNQ
description: "Prediction Result Reason Details"
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSPRDTNRSLTRSNQ')/$value
semantic_en: "Prediction Result Reason Details"
semantic_vi: "Prediction Result Reason Details — CDS view tiêu dùng dựa trên I_BhvrlInsgtsPrdtnRsltRsn."
keywords:
  - "prediction"
  - "result"
  - "reason"
  - "details"
  - "record"
  - "bhvrl"
  - "insgts"
  - "scenario"
  - "name"
  - "business"
  - "partner"
tags:
  - IS
  - bo:salesorder
  - component:IS-PS-BEI
  - consumption-view
  - IS-PS
  - IS-PS-BEI
---
# C_BHVRLINSGTSPRDTNRSLTRSNQ

**Prediction Result Reason Details**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSPRDTNRSLTRSNQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PredictionRecordID` | ✓ | |  |  | `CHAR(32)` | Prediction Result Record Identifier |
| `BhvrlInsgtsRecordID` | ✓ | |  |  | `CHAR(32)` | Record ID |
| `PredictionScenarioID` |  | |  |  | `INT1(3)` | Scenario Identifier |
| `PredictionScenarioName` |  | |  |  | `CHAR(60)` | Description of the scenario that must be displayed on the UI |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` |  | |  |  | `CHAR(40)` | Name 1 of organization |
| `BhvrlInsgtsAccountNumber` |  | |  |  | `CHAR(12)` | Account Number |
| `BhvrlInsgtsAccountName` |  | |  |  | `CHAR(35)` | Contract Account Name |
| `BhvrlInsgtsSubAccountNumber` |  | |  |  | `CHAR(20)` | Subaccount Number |
| `BhvrlInsgtsSubAccountName` |  | |  |  | `CHAR(1)` |  |
| `NumberOfBusinessPartners` |  | |  |  | `INT4(10)` |  |
| `BhvrlInsgtsPredictionValue` |  | |  | `1` | `INT1(3)` |  |
| `PredictionScenarioDateTime` |  | |  |  | `DEC(15)` | Prediction UTC Time Stamp |
| `RiskRangeCategory` |  | |  |  | `CHAR(10)` | Range Category |
| `RiskRangeCategoryText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `BhvrlInsgtsReasonCodeName` |  | |  |  | `CHAR(30)` | Field Name |
| `BhvrlInsgtsReasonText` |  | |  |  | `CHAR(60)` | Reason Text |
| `BhvrlInsgtsReasonCodeValue` |  | |  |  | `CHAR(128)` | Reason Code Value |
| `BhvrlInsgtsRsnWgtgValue` |  | |  |  | `DECF(16)` | 8 Byte Decfloat16 |
| `BhvrlInsgtsReasonQualityValue` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSPRDTNRSLTRSNQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSPRDTNRSLTRSNQ')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CBIPRDTNRSLTRSNQ'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking : #BLOCKED_DATA_EXCLUDED
@Analytics.query: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@OData.publish: true
@VDM.viewType: #CONSUMPTION
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Prediction Result Reason Details'
define view C_BhvrlInsgtsPrdtnRsltRsnQ
  as select from I_BhvrlInsgtsPrdtnRsltRsn
{

      @EndUserText.label: 'Header Record Identifier'
  key PredictionRecordID,
      @EndUserText.label: 'Item Record Identifier'
  key BhvrlInsgtsRecordID,
      @EndUserText.label: 'Prediction Scenario Identifier'
      PredictionScenarioID,
      @EndUserText.label: 'Prediction Scenario Name'
      PredictionScenarioName,
      @EndUserText.label: 'Customer Identifier'
      BusinessPartner,
      @EndUserText.label: 'Customer Name'
      BusinessPartnerName,
      @EndUserText.label: 'Account Number'
      BhvrlInsgtsAccountNumber,
      @EndUserText.label: 'Account Name'
      BhvrlInsgtsAccountName,
      @EndUserText.label: 'Subaccount Number'
      BhvrlInsgtsSubAccountNumber,
      @EndUserText.label: 'Subaccount Name'
      BhvrlInsgtsSubAccountName,
      @EndUserText.label: 'Number Of Business Partners'
      NumberOfBusinessPartners,
      @AnalyticsDetails.query.formula: 'BhvrlInsgtsPredictionValue / NumberOfBusinessPartners'
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Prediction Value'
      1 as BhvrlInsgtsPredictionValue,
      @EndUserText.label: 'Prediction Scenario Time Stamp'
      PredictionScenarioDateTime,
      @EndUserText.label: 'Risk Range Category'
      RiskRangeCategory,
      @EndUserText.label: 'Risk Range Category Text'
      RiskRangeCategoryText,
      @EndUserText.label: 'Reason Code'
      BhvrlInsgtsReasonCodeName,
      @EndUserText.label: 'Reason Code Text'
      BhvrlInsgtsReasonText,
      @EndUserText.label: 'Reason Value'
      BhvrlInsgtsReasonCodeValue,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @UI.hidden
      @EndUserText.label: 'Reason Weightage'      
      BhvrlInsgtsRsnWgtgValue,
      @AnalyticsDetails.query.formula: 'BhvrlInsgtsReasonQualityValue / NumberOfBusinessPartners'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.decimals: 2
      @EndUserText.label: 'Reason Quality Value'
      1 as BhvrlInsgtsReasonQualityValue
}
```
