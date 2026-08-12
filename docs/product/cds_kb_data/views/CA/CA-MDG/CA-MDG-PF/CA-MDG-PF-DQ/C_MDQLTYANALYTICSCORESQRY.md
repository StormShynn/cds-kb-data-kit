---
name: C_MDQLTYANALYTICSCORESQRY
description: "This CDS view helps to retrieve master data quality scores based on data quality business rules. These rules are used to evaluate master data, to analyze incorrect data, and to correct identified master data issues. This CDS view provides the prerequisites for answering the following business questions: What is the average data quality of my master data? What is the score of the data quality rules? What is the average quality score of the defined categories and dimensions?"
app_component: CA-MDG-PF-DQ
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQLTYANALYTICSCORESQRY')/$value
semantic_en: "This CDS view helps to retrieve master data quality scores based on data quality business rules. These rules are used to evaluate master data, to analyze incorrect data, and to correct identified master data issues. This CDS view provides the prerequisites for answering the following business questions: What is the average data quality of my master data? What is the score of the data quality rules? What is the average quality score of the defined categories and dimensions?"
semantic_vi: "MDQ Analytic Scores — CDS view tiêu dùng dựa trên I_MDQltyAnalyticScoresCube."
keywords:
  - "mdq"
  - "analytic"
  - "scores"
  - "master"
  - "data"
  - "change"
  - "process"
  - "qlty"
  - "dimension"
  - "category"
  - "quality"
  - "business"
  - "rule"
  - "object"
  - "type"
tags:
  - CA
  - bo:businesspartner
  - CA-MDG
  - CA-MDG-PF
  - CA-MDG-PF-DQ
  - component:CA-MDG-PF-DQ
  - consumption-view
  - lob:cross_application components
  - master-data
---
# C_MDQLTYANALYTICSCORESQRY

**This CDS view helps to retrieve master data quality scores based on data quality business rules. These rules are used to evaluate master data, to analyze incorrect data, and to correct identified master data issues. This CDS view provides the prerequisites for answering the following business questions: What is the average data quality of my master data? What is the score of the data quality rules? What is the average quality score of the defined categories and dimensions?**

| Property | Value |
|---|---|
| App Component | `CA-MDG-PF-DQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQLTYANALYTICSCORESQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MasterDataChangeProcess` |  | |  |  | `NUMC(12)` | Master Data Change Process Identifier |
| `MDQltyDimensionCategory` |  | |  |  | `CHAR(20)` | MDQ Dimension Category |
| `MDQltyDimension` |  | |  |  | `CHAR(20)` | MDQ Dimension |
| `MDQualityBusinessRule` |  | |  |  | `CHAR(26)` | Master Data Quality Rule Definition ID |
| `MDQltyBusinessObjectTypeCode` |  | |  |  | `CHAR(10)` | Master Data Change Process Business Object Type Code |
| `MDQualityBusinessRuleName` |  | |  |  | `CHAR(50)` | Master Data Quality Rule Definition Name |
| `MDQltyBusinessRuleBaseTable` |  | |  |  | `CHAR(30)` | Base Table |
| `MDQltyBusinessRuleOwner` |  | |  |  | `CHAR(12)` | Master Data Quality Business Rule Owner |
| `MDQltyBusRuleCheckedField` |  | |  |  | `CHAR(30)` | Master Data Quality Fieldname of the Checked Field |
| `MDQltyBusinessRuleExpert` |  | |  |  | `CHAR(12)` | Master Data Quality Business Rule Expert |
| `MDChgProcessIsLatest` |  | |  |  | `CHAR(1)` |  |
| `MDChgProcessFinishDate` |  | |  |  | `DATS(8)` |  |
| `MDQltyBusRuleNavigationPath` |  | |  |  | `CHAR(248)` | Fiori Host Path concatenated with Validation Rule Nav Path |
| `MDQltyDimensionScore` |  | |  | `0` | `INT1(3)` |  |
| `MDQltyDimnTargetScoreValue` |  | |  |  | `DEC(4)` | MDQ Evaluation Target Threshold |
| `MDQltyDimnCategoryScore` |  | |  | `0` | `INT1(3)` |  |
| `MDQltyDimnCatTargetScoreValue` |  | |  |  | `DEC(4)` | MDQ Evaluation Target Threshold |
| `MDQltyRuleScore` |  | |  | `0` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQLTYANALYTICSCORESQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQLTYANALYTICSCORESQRY')/$value)*

```abap
@EndUserText.label: 'MDQ Analytic Scores'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #CONSUMPTION
@AbapCatalog.sqlViewName: 'MDQLTYANSCORESQR'
@ObjectModel.usageType: { sizeCategory: #L, dataClass: #MIXED, serviceQuality: #D }
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@Metadata.allowExtensions:true
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey:true
@Analytics.query: true
@OData.publish:true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Metadata.ignorePropagatedAnnotations: true

define view C_MDQltyAnalyticScoresQry
  as select from I_MDQltyAnalyticScoresCube
{
  MasterDataChangeProcess,
  MDQltyDimensionCategory,
  MDQltyDimension,
  MDQualityBusinessRule,
  MDQltyBusinessObjectTypeCode,
  MDQualityBusinessRuleName,
  MDQltyBusinessRuleBaseTable,
  MDQltyBusinessRuleOwner,
  MDQltyBusRuleCheckedField,
  MDQltyBusinessRuleExpert,
  MDChgProcessIsLatest,
  @AnalyticsDetails.query.axis:#ROWS
  MDChgProcessFinishDate,
  @EndUserText.label: 'Navigation Path'
  MDQltyBusRuleNavigationPath,

  @AnalyticsDetails.query.axis:#COLUMNS
  @EndUserText.label: 'Dimension Score'
  @AnalyticsDetails.exceptionAggregationSteps.exceptionAggregationBehavior: #AVG
  @AnalyticsDetails.exceptionAggregationSteps.exceptionAggregationElements: ['MDQltyDimension']
  @AnalyticsDetails.query.formula: 'MDQltyDimensionScore'
  0 as MDQltyDimensionScore,

  @AnalyticsDetails.query.axis:#COLUMNS
  @EndUserText.label: 'Dimension Target Threshold'
  MDQltyDimnTargetScoreValue,

  @AnalyticsDetails.query.axis:#COLUMNS
  @EndUserText.label: 'Category Score'
  @AnalyticsDetails.exceptionAggregationSteps.exceptionAggregationBehavior: #AVG
  @AnalyticsDetails.exceptionAggregationSteps.exceptionAggregationElements: ['MDQltyDimensionCategory']
  @AnalyticsDetails.query.formula: 'MDQltyDimnCategoryScore'
  0 as MDQltyDimnCategoryScore,

  @AnalyticsDetails.query.axis:#COLUMNS
  @EndUserText.label: 'Category Target Score'
  MDQltyDimnCatTargetScoreValue,

  @AnalyticsDetails.query.axis:#COLUMNS
  @EndUserText.label: 'Rule Score'
  @AnalyticsDetails.exceptionAggregationSteps.exceptionAggregationBehavior: #AVG
  @AnalyticsDetails.exceptionAggregationSteps.exceptionAggregationElements: ['MDQualityBusinessRule']
  @AnalyticsDetails.query.formula: 'MDQltyRuleScore'
  0 as MDQltyRuleScore

}
```
