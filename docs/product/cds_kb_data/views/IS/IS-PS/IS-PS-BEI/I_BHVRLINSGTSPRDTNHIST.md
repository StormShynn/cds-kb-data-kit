---
name: I_BHVRLINSGTSPRDTNHIST
description: "Risk Prediction History"
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BHVRLINSGTSPRDTNHIST')/$value
semantic_en: "Risk Prediction History"
semantic_vi: "Risk Prediction History — CDS view giao diện dựa trên I_BhvrlInsgtsRskScrGrouping."
keywords:
  - "risk"
  - "prediction"
  - "history"
  - "record"
  - "business"
  - "partner"
  - "name"
  - "scenario"
  - "date"
  - "time"
tags:
  - IS
  - component:IS-PS-BEI
  - interface-view
  - IS-PS
  - IS-PS-BEI
---
# I_BHVRLINSGTSPRDTNHIST

**Risk Prediction History**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BHVRLINSGTSPRDTNHIST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PredictionRecordID` | ✓ | |  |  | `CHAR(32)` | Prediction Result Record Identifier |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` |  | |  |  | `CHAR(40)` | Name 1 of organization |
| `PredictionScenarioID` |  | |  |  | `INT1(3)` | Scenario Identifier |
| `PredictionScenarioDateTime` |  | |  |  | `DEC(15)` | Prediction UTC Time Stamp |
| `BhvrlInsgtsAccountNumber` |  | |  |  | `CHAR(12)` | Account Number |
| `BhvrlInsgtsAccountName` |  | |  |  | `CHAR(35)` | Contract Account Name |
| `BhvrlInsgtsSubAccountNumber` |  | |  |  | `CHAR(20)` | Subaccount Number |
| `BhvrlInsgtsSubAccountName` |  | |  | `''` | `CHAR(1)` |  |
| `BhvrlInsgtsPredictionValue` |  | |  |  | `INT1(3)` |  |
| `NumberOfBusinessPartners` |  | |  | `count(*)` | `INT4(10)` |  |
| `PredictionScenarioName` |  | |  | `ScenarioName` | `CHAR(60)` | Description of the scenario that must be displayed on the UI |
| `RiskRangeCategory` |  | |  | `RiskScoreCategory` | `CHAR(10)` | Range Category |
| `RiskRangeCategoryText` |  | |  | `RangeCategoryText` | `CHAR(60)` | Short Text for Fixed Values |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BHVRLINSGTSPRDTNHIST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BHVRLINSGTSPRDTNHIST')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBIPRDTNHIST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking : #BLOCKED_DATA_EXCLUDED
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Risk Prediction History'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.representativeKey: 'PredictionRecordID'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE ]
@VDM.viewType: #COMPOSITE
define view I_BhvrlInsgtsPrdtnHist
  as select from           I_BhvrlInsgtsRskScrGrouping as RiskGrouping
    left outer to one join I_CustomerMasterData        as CustomerData on RiskGrouping.BusinessPartner = CustomerData.BusinessPartner

    left outer to one join I_BhvrlInsgtsCAPartner      as CAPartner    on RiskGrouping.BhvrlInsgtsAccountNumber = CAPartner.BhvrlInsgtsAccountNumber

    left outer to one join I_BhvrlInsgtsRangeCategoryT as RangeConfigT
        on  RangeConfigT.RangeCategory = RiskGrouping.RiskScoreCategory and RangeConfigT.LanguageCode = $session.system_language



{
  key RiskGrouping.PredictionRecordID,
      RiskGrouping.BusinessPartner,
      CustomerData.BusinessPartnerName,
      RiskGrouping.PredictionScenarioID,
      RiskGrouping.PredictionScenarioDateTime,
      RiskGrouping.BhvrlInsgtsAccountNumber,
      CAPartner.BhvrlInsgtsAccountName,
      RiskGrouping.BhvrlInsgtsSubAccountNumber,
      ''                             as BhvrlInsgtsSubAccountName,
      @Aggregation.default: #SUM
      RiskGrouping.BhvrlInsgtsPredictionValue,
      @Aggregation.default: #SUM
      count(*)                       as NumberOfBusinessPartners,
      RiskGrouping.ScenarioName      as PredictionScenarioName,
      RiskGrouping.RiskScoreCategory as RiskRangeCategory,
      RangeConfigT.RangeCategoryText as RiskRangeCategoryText

}
group by
  RiskGrouping.PredictionRecordID,
  RiskGrouping.BusinessPartner,
  CustomerData.BusinessPartnerName,
  RiskGrouping.BhvrlInsgtsPredictionValue,
  RiskGrouping.PredictionScenarioID,
  RiskGrouping.PredictionScenarioDateTime,
  RiskGrouping.BhvrlInsgtsAccountNumber,
  CAPartner.BhvrlInsgtsAccountName,
  RiskGrouping.BhvrlInsgtsSubAccountNumber,
  RiskGrouping.ScenarioName,
  RiskGrouping.RiskScoreCategory,
  RangeConfigT.RangeCategoryText
```
