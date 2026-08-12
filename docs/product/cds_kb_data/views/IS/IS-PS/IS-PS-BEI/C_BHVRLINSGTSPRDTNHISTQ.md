---
name: C_BHVRLINSGTSPRDTNHISTQ
description: "Risk Prediction History"
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSPRDTNHISTQ')/$value
semantic_en: "Risk Prediction History"
semantic_vi: "Risk Prediction History — CDS view tiêu dùng dựa trên I_BhvrlInsgtsPrdtnHist."
keywords:
  - "risk"
  - "prediction"
  - "history"
  - "record"
  - "scenario"
  - "name"
  - "business"
  - "partner"
tags:
  - IS
  - component:IS-PS-BEI
  - consumption-view
  - IS-PS
  - IS-PS-BEI
---
# C_BHVRLINSGTSPRDTNHISTQ

**Risk Prediction History**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSPRDTNHISTQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PredictionRecordID` | ✓ | |  |  | `CHAR(32)` | Prediction Result Record Identifier |
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

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSPRDTNHISTQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSPRDTNHISTQ')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CBIPRDTNHISTQ'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.representativeKey: 'PredictionRecordID'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking : #BLOCKED_DATA_EXCLUDED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Risk Prediction History'
define view C_BhvrlInsgtsPrdtnHistQ
  as select from I_BhvrlInsgtsPrdtnHist
{
      @EndUserText.label: 'Record Identifier'
  key PredictionRecordID,
      @EndUserText.label: 'Prediction Scenario Identifier'
      PredictionScenarioID,
      @EndUserText.label: 'Prediction Scenario Name'
      PredictionScenarioName,
      @EndUserText.label: 'Customer Number'
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
      @EndUserText.label: 'Number Of Customers'
      NumberOfBusinessPartners,
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'BhvrlInsgtsPredictionValue / NumberOfBusinessPartners'
      @EndUserText.label: 'Prediction Value'
      1 as BhvrlInsgtsPredictionValue,
      @EndUserText.label: 'Prediction Scenario Time Stamp'
      PredictionScenarioDateTime,
      @EndUserText.label: 'Risk Range Category'
      RiskRangeCategory,
      @EndUserText.label: 'Risk Range Category Text'
      RiskRangeCategoryText
}
```
