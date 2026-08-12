---
name: I_MDQLTYANALYTICSCORESCUBE
description: "This CDS view helps to retrieve master data quality scores based on data quality business rules. You can use these rules to evaluate master data, analyze incorrect data, and correct identified master data issues. This CDS view provides the prerequisites for answering the following business questions: What is the average data quality of my master data? What is the score of my data quality rules? What is the average quality score of defined category and dimensions?"
app_component: CA-MDG-PF-DQ
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQLTYANALYTICSCORESCUBE')/$value
semantic_en: "This CDS view helps to retrieve master data quality scores based on data quality business rules. You can use these rules to evaluate master data, analyze incorrect data, and correct identified master data issues. This CDS view provides the prerequisites for answering the following business questions: What is the average data quality of my master data? What is the score of my data quality rules? What is the average quality score of defined category and dimensions?"
semantic_vi: "MDQ Analytic Scores - Cube — CDS view giao diện dựa trên I_MDQltyDimnRuleAssgmtImpact."
keywords:
  - "mdq"
  - "analytic"
  - "scores"
  - "cube"
  - "master"
  - "data"
  - "change"
  - "process"
  - "quality"
  - "business"
  - "rule"
  - "qlty"
  - "dimension"
  - "category"
  - "object"
tags:
  - CA
  - bo:businesspartner
  - CA-MDG
  - CA-MDG-PF
  - CA-MDG-PF-DQ
  - component:CA-MDG-PF-DQ
  - interface-view
  - lob:cross_application components
  - master-data
---
# I_MDQLTYANALYTICSCORESCUBE

**This CDS view helps to retrieve master data quality scores based on data quality business rules. You can use these rules to evaluate master data, analyze incorrect data, and correct identified master data issues. This CDS view provides the prerequisites for answering the following business questions: What is the average data quality of my master data? What is the score of my data quality rules? What is the average quality score of defined category and dimensions?**

| Property | Value |
|---|---|
| App Component | `CA-MDG-PF-DQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQLTYANALYTICSCORESCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MasterDataChangeProcess` | ✓ | | `_MDQltyDimnRuleAssgmtImpact` | `MasterDataChangeProcess` | `NUMC(12)` | Master Data Change Process Identifier |
| `MDQualityBusinessRule` | ✓ | | `_MDQltyDimnRuleAssgmtImpact` | `MDQualityBusinessRule` | `CHAR(26)` | Master Data Quality Rule Definition ID |
| `MDQltyDimensionCategory` | ✓ | | `_MDQltyDimnRuleAssgmt._MDQltyDimensionCategory` | `MDQltyDimensionCategory` | `CHAR(20)` | MDQ Dimension Category |
| `MDQltyDimension` | ✓ | | `_MDQltyDimnRuleAssgmt._MDQltyDimension` | `MDQltyDimension` | `CHAR(20)` | MDQ Dimension |
| `MDQltyBusinessObjectTypeCode` | ✓ | | `_MDQltyDimnRuleAssgmtImpact` | `MDQltyBusinessObjectTypeCode` | `CHAR(10)` | Master Data Change Process Business Object Type Code |
| `MDQltyDimensionUUID` | ✓ | | `_MDQltyDimnRuleAssgmtImpact` | `MDQltyDimensionUUID` | `RAW(16)` | MDQ Dimension UUID |
| `MDQualityBusinessRuleName` | ✓ | | `_MDQltyDimnRuleAssgmtImpact` | `MDQualityBusinessRuleName` | `CHAR(50)` | Master Data Quality Rule Definition Name |
| `MDQltyBusinessRuleOwner` | ✓ | | `_MDQltyDimnRuleAssgmtImpact._MDQualityBusinessRule` | `MDQltyBusinessRuleOwner` | `CHAR(12)` | Master Data Quality Business Rule Owner |
| `MDQltyBusRuleCheckedField` | ✓ | | `_MDQltyDimnRuleAssgmtImpact._MDQualityBusinessRule` | `MDQltyBusRuleCheckedField` | `CHAR(30)` | Master Data Quality Fieldname of the Checked Field |
| `MDQltyBusinessRuleExpert` | ✓ | | `_MDQltyDimnRuleAssgmtImpact._MDQualityBusinessRule` | `MDQltyBusinessRuleExpert` | `CHAR(12)` | Master Data Quality Business Rule Expert |
| `MDQltyBusinessRuleBaseTable` | ✓ | | `_MDQltyDimnRuleAssgmtImpact` | `MDQltyBusinessRuleBaseTable` | `CHAR(30)` | Base Table |
| `MDChgProcessFinishDate` |  | |  | `tstmp_to_dats(_MDQltyScoreEvalDetails.MDChgProcessFinishDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL')` | `DATS(8)` |  |
| `MDChgProcessIsLatest` |  | | `_MDQltyScoreEvalDetails` | `MDChgProcessIsLatest` | `CHAR(1)` |  |
| `MDQltyBusRuleNavigationPath` |  | |  | `cast(concat( _FldHost.MDQltyFioriLaunchpadHostPath, concat( concat( concat('#MDQualityBusinessRule-manage?MDQltyBusinessObjectTypeCode=', _MDQltyDimnRuleAssgmtImpact.MDQltyBusinessObjectTypeCode ), '&MDQualityBusinessRule='), _MDQltyDimnRuleAssgmtImpact.MDQualityBusinessRule) ) as mdq_val_rule_navigation_path)` | `CHAR(248)` | Fiori Host Path concatenated with Validation Rule Nav Path |
| `MDQltyRuleScore` |  | | `_MDQltyDimnRuleAssgmtImpact` | `MDQltyRuleScore` | `FLTP(16)` |  |
| `MDQltyDimensionScore` |  | |  | `fltp_to_dec(_MDQltyDimensionScore.MDQltyDimensionScore as abap.dec(4,1))` | `DEC(4)` |  |
| `MDQltyDimnTargetScoreValue` |  | | `_MDQltyDimension` | `MDQltyEvalTargetThreshold` | `DEC(4)` | MDQ Evaluation Target Threshold |
| `MDQltyDimensionCategoryUUID` |  | | `_MDQltyDimnRuleAssgmtImpact` | `MDQltyDimensionCategoryUUID` | `RAW(16)` | MDQ Dimension Category UUID |
| `MDQltyDimnCategoryScore` |  | |  | `fltp_to_dec(_MDQltyDimnCatScore.MDQltyDimnCategoryScore as abap.dec(4,1))` | `DEC(4)` |  |
| `MDQltyDimnCatTargetScoreValue` |  | | `_MDQltyDimensionCategory` | `MDQltyEvalTargetThreshold` | `DEC(4)` | MDQ Evaluation Target Threshold |
| `_MDQltyDimension` | | ✓ | | | | |
| `_MDQltyDimensionCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MDQltyDimensionScore` | `I_MDQltyDimensionScore` | [0..*] |
| `_MDQltyDimnCatScore` | `I_MDQltyDimnCategoryScore` | [0..*] |
| `_MDQltyDimension` | `I_MDQltyDimension` | [1..1] |
| `_FldHost` | `I_MDQltyFioriLaunchpadHostPath` | [0..1] |
| `_MDQltyDimensionCategory` | `I_MDQltyDimensionCategory` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQLTYANALYTICSCORESCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQLTYANALYTICSCORESCUBE')/$value)*

```abap
@EndUserText.label: 'MDQ Analytic Scores - Cube'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #COMPOSITE
@AbapCatalog.sqlViewName: 'MDQLTYANSCORES'
@ObjectModel.usageType: { sizeCategory: #L, dataClass: #MIXED, serviceQuality: #D }
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.sapObjectNodeType.name: 'MDQEvalAnalyticalScoreColl'
@Metadata.allowExtensions:true
@Analytics.internalName:#LOCAL
@Analytics.dataCategory: #CUBE
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true 

define view I_MDQltyAnalyticScoresCube
  as select from I_MDQltyDimnRuleAssgmtImpact as _MDQltyDimnRuleAssgmtImpact


    inner join   I_MDQltyDimnRuleAssgmt       as _MDQltyDimnRuleAssgmt   on _MDQltyDimnRuleAssgmtImpact.MDQltyDimnRuleAssignmentUUID = _MDQltyDimnRuleAssgmt.MDQltyDimnRuleAssignmentUUID
    inner join   I_MDQltyScoreEvalDetails     as _MDQltyScoreEvalDetails on _MDQltyDimnRuleAssgmtImpact.MasterDataChangeProcess = _MDQltyScoreEvalDetails.MasterDataChangeProcess
  association [0..*] to I_MDQltyDimensionScore         as _MDQltyDimensionScore    on  $projection.MasterDataChangeProcess             = _MDQltyDimensionScore.MasterDataChangeProcess
                                                                                   and _MDQltyDimnRuleAssgmtImpact.MDQltyDimensionUUID = _MDQltyDimensionScore.MDQltyDimensionUUID
  association [0..*] to I_MDQltyDimnCategoryScore      as _MDQltyDimnCatScore      on  $projection.MasterDataChangeProcess                     = _MDQltyDimnCatScore.MasterDataChangeProcess
                                                                                   and _MDQltyDimnRuleAssgmtImpact.MDQltyDimensionCategoryUUID = _MDQltyDimnCatScore.MDQltyDimensionCategoryUUID

  association [1..1] to I_MDQltyDimension              as _MDQltyDimension         on  _MDQltyDimnRuleAssgmtImpact.MDQltyDimensionUUID = _MDQltyDimension.MDQltyDimensionUUID
  association [0..1] to I_MDQltyFioriLaunchpadHostPath as _FldHost                 on  _FldHost.mandt = $session.client
  association [1..1] to I_MDQltyDimensionCategory      as _MDQltyDimensionCategory on  _MDQltyDimensionCategory.MDQltyDimensionCategoryUUID = _MDQltyDimnRuleAssgmtImpact.MDQltyDimensionCategoryUUID

  //  association [0..1] to I_MDQltyBusinessRuleBaseTableT as _MDQltyBusinessRuleBaseTableT on  _MDQltyDimnRuleAssgmtImpact.MDQltyBusinessRuleBaseTable    = _MDQltyBusinessRuleBaseTableT.MDQltyBusinessRuleBaseTable
  //                                                                                        and _MDQltyBusinessRuleBaseTableT.MDQltyBusinessObjectTypeCode = $projection.MDQltyBusinessObjectTypeCode
  //                                                                                        and _MDQltyBusinessRuleBaseTableT.Language                     = $session.system_language

  // association [0..1] to I_MasterDataChangeProcess      as _MasterDataChangeProcess      on   $projection.MasterDataChangeProcess = _MasterDataChangeProcess.MasterDataChangeProcess

{

  key        _MDQltyDimnRuleAssgmtImpact.MasterDataChangeProcess                                                                                        as MasterDataChangeProcess,


  key        _MDQltyDimnRuleAssgmtImpact.MDQualityBusinessRule                                                                                          as MDQualityBusinessRule,

             @Consumption.valueHelpDefinition: [   { association: '_MDQltyDimensionCategory' }    ]
  key        _MDQltyDimnRuleAssgmt._MDQltyDimensionCategory.MDQltyDimensionCategory                                                                     as MDQltyDimensionCategory,

             @Consumption.valueHelpDefinition: [   { association: '_MDQltyDimension' }    ]
  key        _MDQltyDimnRuleAssgmt._MDQltyDimension.MDQltyDimension                                                                                     as MDQltyDimension,

  key        _MDQltyDimnRuleAssgmtImpact.MDQltyBusinessObjectTypeCode                                                                                   as MDQltyBusinessObjectTypeCode,

             @Consumption.hidden: true
  key        _MDQltyDimnRuleAssgmtImpact.MDQltyDimensionUUID                                                                                            as MDQltyDimensionUUID,

             @Semantics.text: true
  key        _MDQltyDimnRuleAssgmtImpact.MDQualityBusinessRuleName                                                                                      as MDQualityBusinessRuleName,

             @Semantics.text: true
  key        _MDQltyDimnRuleAssgmtImpact._MDQualityBusinessRule.MDQltyBusinessRuleOwner                                                                 as MDQltyBusinessRuleOwner,

             @Semantics.text: true
  key        _MDQltyDimnRuleAssgmtImpact._MDQualityBusinessRule.MDQltyBusRuleCheckedField                                                               as MDQltyBusRuleCheckedField,

             @Semantics.text: true
  key        _MDQltyDimnRuleAssgmtImpact._MDQualityBusinessRule.MDQltyBusinessRuleExpert                                                                as MDQltyBusinessRuleExpert,

             @EndUserText.label: 'Base Table'
             // @ObjectModel.text.association: '_MDQltyBusinessRuleBaseTableT'
  key        _MDQltyDimnRuleAssgmtImpact.MDQltyBusinessRuleBaseTable                                                                                    as MDQltyBusinessRuleBaseTable,
             @Consumption.hidden: true
             @EndUserText.label: 'Evaluation Completion Date'

             tstmp_to_dats(_MDQltyScoreEvalDetails.MDChgProcessFinishDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL') as MDChgProcessFinishDate,

             @Semantics.booleanIndicator: true
             _MDQltyScoreEvalDetails.MDChgProcessIsLatest,

             cast(concat( _FldHost.MDQltyFioriLaunchpadHostPath, concat(
                             concat(
                                 concat('#MDQualityBusinessRule-manage?MDQltyBusinessObjectTypeCode=', _MDQltyDimnRuleAssgmtImpact.MDQltyBusinessObjectTypeCode ),
                                 '&MDQualityBusinessRule='), _MDQltyDimnRuleAssgmtImpact.MDQualityBusinessRule) ) as mdq_val_rule_navigation_path)      as MDQltyBusRuleNavigationPath,


             @EndUserText.label: 'Rule Score'
             @Consumption.filter.hidden: true
             @DefaultAggregation: #MAX
             _MDQltyDimnRuleAssgmtImpact.MDQltyRuleScore,
             // fltp_to_dec(MDQltyRuleScore as abap.dec(4,1))                                                                                              as MDQltyRuleScore,

             @EndUserText.label: 'Dimension Score'
             @Consumption.filter.hidden: true
             @DefaultAggregation: #MAX
             fltp_to_dec(_MDQltyDimensionScore.MDQltyDimensionScore as abap.dec(4,1))                                                                   as MDQltyDimensionScore,

             @EndUserText.label: 'Dimension Score Target'
             @DefaultAggregation: #MAX
             _MDQltyDimension.MDQltyEvalTargetThreshold                                                                                                 as MDQltyDimnTargetScoreValue,

             @Consumption.hidden: true
             _MDQltyDimnRuleAssgmtImpact.MDQltyDimensionCategoryUUID                                                                                    as MDQltyDimensionCategoryUUID,

             @EndUserText.label: 'Category Score'
             @Consumption.filter.hidden: true
             @DefaultAggregation: #MAX
             fltp_to_dec(_MDQltyDimnCatScore.MDQltyDimnCategoryScore as abap.dec(4,1))                                                                  as MDQltyDimnCategoryScore,

             @EndUserText.label: 'Category Score Target'
             @DefaultAggregation: #MAX
             _MDQltyDimensionCategory.MDQltyEvalTargetThreshold                                                                                         as MDQltyDimnCatTargetScoreValue,


             // _MDQltyBusinessRuleBaseTableT,
             _MDQltyDimension,
             _MDQltyDimensionCategory


}
```
