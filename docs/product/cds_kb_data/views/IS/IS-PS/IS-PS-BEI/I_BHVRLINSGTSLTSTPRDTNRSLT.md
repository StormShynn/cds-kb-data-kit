---
name: I_BHVRLINSGTSLTSTPRDTNRSLT
description: "Prediction Latest Result - Query"
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BHVRLINSGTSLTSTPRDTNRSLT')/$value
semantic_en: "Prediction Latest Result - Query"
semantic_vi: "Prediction Latest Result - Query — CDS view giao diện dựa trên I_BhvrlInsgtsRskScrGrouping."
keywords:
  - "prediction"
  - "latest"
  - "result"
  - "query"
  - "record"
  - "business"
  - "partner"
  - "bhvrl"
  - "insgts"
  - "account"
  - "number"
  - "scenario"
tags:
  - IS
  - component:IS-PS-BEI
  - interface-view
  - IS-PS
  - IS-PS-BEI
---
# I_BHVRLINSGTSLTSTPRDTNRSLT

**Prediction Latest Result - Query**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BHVRLINSGTSLTSTPRDTNRSLT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PredictionRecordID` | ✓ | |  |  | `CHAR(32)` | Prediction Result Record Identifier |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BhvrlInsgtsAccountNumber` |  | |  |  | `CHAR(12)` | Account Number |
| `BhvrlInsgtsSubAccountNumber` |  | |  |  | `CHAR(20)` | Subaccount Number |
| `PredictionScenarioID` |  | |  |  | `INT1(3)` | Scenario Identifier |
| `ScenarioName` |  | |  |  | `CHAR(60)` | Description of the scenario that must be displayed on the UI |
| `RiskScoreValue` |  | |  | `BhvrlInsgtsPredictionValue` | `INT1(3)` |  |
| `RiskTrendValue` |  | |  |  | `INT2(5)` | Prediction Risk Score Trend value |
| `RiskScoreCategory` |  | |  |  | `CHAR(10)` | Range Category |
| `RiskScoreCategoryText` |  | |  | `RangeCategoryText` | `CHAR(60)` | Short Text for Fixed Values |
| `DebtAmountInLocalCurrency` |  | |  | `case when PredRes.DebtAmountInLocalCurrency < 0 then 0 else PredRes.DebtAmountInLocalCurrency end` | `CURR(13)` | Debt Amount |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Amount Currency |
| `DebtAmountCategory` |  | |  |  | `CHAR(10)` | Range Category |
| `BhvrlInsgtsAccountCategory` |  | |  |  | `CHAR(2)` | Contract Account Category |
| `BhvrlInsgtsAccountCategoryTxt` |  | |  |  | `CHAR(50)` | Description of Contract Account Category |
| `BhvrlInsgtsAccountName` |  | |  |  | `CHAR(35)` | Contract Account Name |
| `PredictionRangeIdentifier` |  | |  |  | `INT2(5)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BHVRLINSGTSLTSTPRDTNRSLT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BHVRLINSGTSLTSTPRDTNRSLT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBEILPRRT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking : #BLOCKED_DATA_EXCLUDED
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Prediction Latest Result - Query'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.representativeKey: 'PredictionRecordID'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,#ANALYTICAL_PROVIDER ]
@ObjectModel: { modelingPattern: #ANALYTICAL_CUBE}

@VDM.viewType: #COMPOSITE


define view I_BhvrlInsgtsLtstPrdtnRslt
as select from I_BhvrlInsgtsRskScrGrouping as PredRes
inner join     I_BhvrlInsgtsLtstPrdtnTime as LtstPrdtn
                    on LtstPrdtn.PredictionScenarioID           =  PredRes.PredictionScenarioID and
                    LtstPrdtn.PredictionScenarioDateTime        =  PredRes.PredictionScenarioDateTime
left outer to one join I_BhvrlInsgtsCAHeader as AccDts on PredRes.BhvrlInsgtsAccountNumber          = AccDts.BhvrlInsgtsAccountNumber

left outer to one join I_BhvrlInsgtsRangeCategoryT as RangeConfigT
     on  RangeConfigT.RangeCategory = PredRes.RiskScoreCategory
{
          key PredRes.PredictionRecordID,
          PredRes.BusinessPartner,
          PredRes.BhvrlInsgtsAccountNumber,
          PredRes.BhvrlInsgtsSubAccountNumber,
          PredRes.PredictionScenarioID,
         PredRes.ScenarioName,
         @EndUserText.label : 'Risk Score'
         PredRes.BhvrlInsgtsPredictionValue as RiskScoreValue,
         PredRes.RiskTrendValue,
         @EndUserText.label : 'Risk Score Range'
         @EndUserText.quickInfo: 'Risk Score Range'
         PredRes.RiskScoreCategory,
         RangeConfigT.RangeCategoryText as RiskScoreCategoryText,
         @Semantics.amount.currencyCode: 'LocalCurrency'
         case when PredRes.DebtAmountInLocalCurrency < 0 then 0 else PredRes.DebtAmountInLocalCurrency end as DebtAmountInLocalCurrency,
         @Semantics.currencyCode
         PredRes.LocalCurrency,
         @EndUserText.label : 'Debt Range'
         @EndUserText.quickInfo: 'Debt Range'
         PredRes.DebtAmountCategory,
         PredRes.BhvrlInsgtsAccountCategory,
         PredRes.BhvrlInsgtsAccountCategoryTxt,
         AccDts.BhvrlInsgtsAccountName,
         @EndUserText.label : 'Range ID'
         PredRes.PredictionRangeIdentifier         
}
```
