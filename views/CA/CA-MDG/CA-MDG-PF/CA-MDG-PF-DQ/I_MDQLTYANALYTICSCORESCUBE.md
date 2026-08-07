---
name: I_MDQLTYANALYTICSCORESCUBE
description: "This CDS view helps to retrieve master data quality scores based on validation rules. You can use these rules to evaluate master data, analyze incorrect data, and correct identified master data issues. This CDS view provides the prerequisites for answering the following business questions: What is the average data quality of my master data? What is the score of my validation rules? What is the average quality score of defined category and dimensions?"
app_component: CA-MDG-PF-DQ
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQLTYANALYTICSCORESCUBE')/$value
semantic_en: "This CDS view helps to retrieve master data quality scores based on validation rules. You can use these rules to evaluate master data, analyze incorrect data, and correct identified master data issues. This CDS view provides the prerequisites for answering the following business questions: What is the average data quality of my master data? What is the score of my validation rules? What is the average quality score of defined category and dimensions?"
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
  - metadata-only
---
# I_MDQLTYANALYTICSCORESCUBE

**This CDS view helps to retrieve master data quality scores based on validation rules. You can use these rules to evaluate master data, analyze incorrect data, and correct identified master data issues. This CDS view provides the prerequisites for answering the following business questions: What is the average data quality of my master data? What is the score of my validation rules? What is the average quality score of defined category and dimensions?**

| Property | Value |
|---|---|
| App Component | `CA-MDG-PF-DQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQLTYANALYTICSCORESCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MasterDataChangeProcess` |  | |  |  | `NUMC(12)` | Master Data Change Process Identifier |
| `MDQualityBusinessRule` |  | |  |  | `CHAR(26)` | Master Data Quality Rule Definition ID |
| `MDQltyDimensionCategory` |  | |  |  | `CHAR(20)` | MDQ Dimension Category |
| `MDQltyDimension` |  | |  |  | `CHAR(20)` | MDQ Dimension |
| `MDQltyBusinessObjectTypeCode` |  | |  |  | `CHAR(10)` | Master Data Change Process Business Object Type Code |
| `MDQltyDimensionUUID` |  | |  |  | `RAW(16)` | MDQ Dimension UUID |
| `MDQualityBusinessRuleName` |  | |  |  | `CHAR(50)` | Master Data Quality Rule Definition Name |
| `MDQltyBusinessRuleOwner` |  | |  |  | `CHAR(12)` | Master Data Quality Business Rule Owner |
| `MDQltyBusRuleCheckedField` |  | |  |  | `CHAR(30)` | Master Data Quality Fieldname of the Checked Field |
| `MDQltyBusinessRuleExpert` |  | |  |  | `CHAR(12)` | Master Data Quality Business Rule Expert |
| `MDQltyBusinessRuleBaseTable` |  | |  |  | `CHAR(30)` | Base Table |
| `MDChgProcessFinishDate` |  | |  |  | `DATS(8)` |  |
| `MDChgProcessIsLatest` |  | |  |  | `CHAR(1)` |  |
| `MDQltyBusRuleNavigationPath` |  | |  |  | `CHAR(248)` | Fiori Host Path concatenated with Validation Rule Nav Path |
| `MDQltyRuleScore` |  | |  |  | `FLTP(16)` |  |
| `MDQltyDimensionScore` |  | |  |  | `DEC(4)` |  |
| `MDQltyDimnTargetScoreValue` |  | |  |  | `DEC(4)` | MDQ Evaluation Target Threshold |
| `MDQltyDimensionCategoryUUID` |  | |  |  | `RAW(16)` | MDQ Dimension Category UUID |
| `MDQltyDimnCategoryScore` |  | |  |  | `DEC(4)` |  |
| `MDQltyDimnCatTargetScoreValue` |  | |  |  | `DEC(4)` | MDQ Evaluation Target Threshold |
