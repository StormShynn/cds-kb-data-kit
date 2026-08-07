---
name: C_MDQLTYANALYTICSCORESQRY
description: This CDS view helps to retrieve master data quality scores based on data quality business rules. These rules are used to evaluate master data, to analyze incorrect data, and to correct identified master data issues. This CDS view provides the prerequisites for answering the following business questions: What is the average data quality of my master data? What is the score of the data quality rules? What is the average quality score of the defined categories and dimensions?
app_component: CA-MDG-PF-DQ
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQLTYANALYTICSCORESQRY')/$value
semantic_en: This CDS view helps to retrieve master data quality scores based on data quality business rules. These rules are used to evaluate master data, to analyze incorrect data, and to correct identified master data issues. This CDS view provides the prerequisites for answering the following business questions: What is the average data quality of my master data? What is the score of the data quality rules? What is the average quality score of the defined categories and dimensions?
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
  - metadata-only
---
# C_MDQLTYANALYTICSCORESQRY

**This CDS view helps to retrieve master data quality scores based on data quality business rules. These rules are used to evaluate master data, to analyze incorrect data, and to correct identified master data issues. This CDS view provides the prerequisites for answering the following business questions: What is the average data quality of my master data? What is the score of the data quality rules? What is the average quality score of the defined categories and dimensions?**

| Property | Value |
|---|---|
| App Component | `CA-MDG-PF-DQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQLTYANALYTICSCORESQRY')/$value) |

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
| `MDQltyDimensionScore` |  | |  |  | `INT1(3)` |  |
| `MDQltyDimnTargetScoreValue` |  | |  |  | `DEC(4)` | MDQ Evaluation Target Threshold |
| `MDQltyDimnCategoryScore` |  | |  |  | `INT1(3)` |  |
| `MDQltyDimnCatTargetScoreValue` |  | |  |  | `DEC(4)` | MDQ Evaluation Target Threshold |
| `MDQltyRuleScore` |  | |  |  | `INT1(3)` |  |
