---
name: I_BHVRLINSGTSPRDTNRSLTRSN
description: "Prediction Result Reason"
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BHVRLINSGTSPRDTNRSLTRSN')/$value
semantic_en: "Prediction Result Reason"
semantic_vi: "Prediction Result Reason — CDS view giao diện dựa trên I_BhvrlInsgtsPrdtnHist."
keywords:
  - "prediction"
  - "result"
  - "reason"
  - "record"
  - "bhvrl"
  - "insgts"
  - "business"
  - "partner"
  - "name"
  - "scenario"
tags:
  - IS
  - bo:salesorder
  - component:IS-PS-BEI
  - interface-view
  - IS-PS
  - IS-PS-BEI
---
# I_BHVRLINSGTSPRDTNRSLTRSN

**Prediction Result Reason**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BHVRLINSGTSPRDTNRSLTRSN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PredictionRecordID` | ✓ | |  |  | `CHAR(32)` | Prediction Result Record Identifier |
| `BhvrlInsgtsRecordID` | ✓ | |  | `case when PrdtnHistRsltItem.BhvrlInsgtsRecordID is null then '1' else PrdtnHistRsltItem.BhvrlInsgtsRecordID end` | `CHAR(32)` | Record ID |
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
| `BhvrlInsgtsRsnWgtgValue` |  | |  | `cast(0 as d16n)` | `DECF(16)` | 8 Byte Decfloat16 |
| `BhvrlInsgtsReasonQualityValue` |  | |  |  | `DEC(16)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BHVRLINSGTSPRDTNRSLTRSN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BHVRLINSGTSPRDTNRSLTRSN')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBIPRDTNRSLTRSN'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking : #BLOCKED_DATA_EXCLUDED
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Prediction Result Reason'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
@VDM.viewType: #COMPOSITE
define view I_BhvrlInsgtsPrdtnRsltRsn
  as select from            I_BhvrlInsgtsPrdtnHist     as PrdtnHist

    left outer to many join I_BhvrlInsgtsPrdtnRsltItem as PrdtnHistRsltItem on  PrdtnHist.PredictionRecordID                    = PrdtnHistRsltItem.PredictionRecordID
                                                                            and PrdtnHistRsltItem.BhvrlInsgtsReasonQualityValue > 0

    left outer to one join  I_BhvrlInsgtsRsnTxt        as RsnTxt            on  PrdtnHistRsltItem.BhvrlInsgtsReasonCodeName = RsnTxt.BhvrlInsgtsReasonCodeName
                                                                            and PrdtnHist.PredictionScenarioID              = RsnTxt.PredictionScenarioID
{
  key PrdtnHist.PredictionRecordID                    as PredictionRecordID,
  key case when PrdtnHistRsltItem.BhvrlInsgtsRecordID is null then '1'
  else  PrdtnHistRsltItem.BhvrlInsgtsRecordID
  end                                                 as BhvrlInsgtsRecordID,
      PrdtnHist.BusinessPartner,
      PrdtnHist.BusinessPartnerName,
      PrdtnHist.PredictionScenarioID                  as PredictionScenarioID,
      PrdtnHist.PredictionScenarioDateTime,
      PrdtnHist.BhvrlInsgtsAccountNumber,
      PrdtnHist.BhvrlInsgtsAccountName,
      PrdtnHist.BhvrlInsgtsSubAccountNumber,
      PrdtnHist.BhvrlInsgtsSubAccountName,
      @Aggregation.default: #SUM
      PrdtnHist.BhvrlInsgtsPredictionValue,
      @Aggregation.default: #SUM
      PrdtnHist.NumberOfBusinessPartners,
      PrdtnHist.PredictionScenarioName,
      PrdtnHist.RiskRangeCategory,
      PrdtnHist.RiskRangeCategoryText,
      PrdtnHistRsltItem.BhvrlInsgtsReasonCodeValue,
      RsnTxt.BhvrlInsgtsReasonCodeName                as BhvrlInsgtsReasonCodeName,
      RsnTxt.BhvrlInsgtsReasonText                    as BhvrlInsgtsReasonText,
      @Aggregation.default: #SUM
      cast(0 as d16n)                                 as BhvrlInsgtsRsnWgtgValue,
      @Aggregation.default: #SUM
      PrdtnHistRsltItem.BhvrlInsgtsReasonQualityValue as BhvrlInsgtsReasonQualityValue
}
```
