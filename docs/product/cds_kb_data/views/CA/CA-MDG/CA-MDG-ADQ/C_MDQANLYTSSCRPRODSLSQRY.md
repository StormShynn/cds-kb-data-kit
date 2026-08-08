---
name: C_MDQANLYTSSCRPRODSLSQRY
description: "MDQ Score for Product Sales - Query"
app_component: CA-MDG-ADQ
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQANLYTSSCRPRODSLSQRY')/$value
semantic_en: "MDQ Score for Product Sales - Query"
keywords:
  - "MDQ Score for Product Sales"
  - "MDQ Score for Product Sales"
tags:
  - CA
  - bo:material
  - CA-MDG
  - CA-MDG-ADQ
  - component:CA-MDG-ADQ
  - consumption-view
  - lob:cross_application components
  - product
  - metadata-only
---
# C_MDQANLYTSSCRPRODSLSQRY

**MDQ Score for Product Sales - Query**

| Property | Value |
|---|---|
| App Component | `CA-MDG-ADQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQANLYTSSCRPRODSLSQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CashDiscountIsDeductible` |  | |  |  | `CHAR(1)` | Cash Discount Indicator |
| `CompetitionPressureCategory` |  | |  |  | `CHAR(1)` | Competition characterization of a material |
| `FifthSalesSpecProductGroup` |  | |  |  | `CHAR(3)` | Product Group 5 |
| `FirstSalesSpecProductGroup` |  | |  |  | `CHAR(3)` | Product Group 1 |
| `FourthSalesSpecProductGroup` |  | |  |  | `CHAR(3)` | Product Group 4 |
| `LogisticsStatisticsGroup` |  | |  |  | `CHAR(1)` | Material Statistics Group |
| `PriceFixingCategory` |  | |  |  | `CHAR(1)` | Indicator for price fixing |
| `ProductCommissionGroup` |  | |  |  | `CHAR(2)` | Commission Group |
| `ProductDistributionChnl` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `ProductSalesOrg` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ProductUnitGroup` |  | |  |  | `CHAR(4)` | Unit of Measure Group |
| `RoundingProfile` |  | |  |  | `CHAR(4)` | Rounding Profile |
| `SalesItemCategoryGroup` |  | |  |  | `CHAR(4)` | Item Category Group from Material Master |
| `SalesMeasureUnit` |  | |  |  | `UNIT(3)` | Sales Unit |
| `SecondSalesSpecProductGroup` |  | |  |  | `CHAR(3)` | Product Group 2 |
| `ThirdSalesSpecProductGroup` |  | |  |  | `CHAR(3)` | Product Group 3 |
| `VariableSalesUnitIsNotAllowed` |  | |  |  | `CHAR(1)` | Variable Sales Unit Not Allowed |
| `VolumeRebateGroup` |  | |  |  | `CHAR(2)` | Volume rebate group |
| `MasterDataChangeProcess` |  | |  |  | `NUMC(12)` | Master Data Change Process Identifier |
| `MDChgProcessFinishDate` |  | |  |  | `DATS(8)` | Master Data Change Process Completion Date |
| `MDChgProcessIsLatest` |  | |  |  | `CHAR(1)` |  |
| `MDQltyBusinessRuleBaseTable` |  | |  |  | `CHAR(30)` | Base Table |
| `MDQltyBusinessRuleBaseTabName` |  | |  |  | `CHAR(80)` | Alias of a table |
| `MDQltyBusinessRuleOwner` |  | |  |  | `CHAR(12)` | Master Data Quality Business Rule Owner |
| `MDQltyBusRuleCheckedField` |  | |  |  | `CHAR(30)` | Master Data Quality Fieldname of the Checked Field |
| `MDQltyBusRuleCheckedFieldTable` |  | |  |  | `CHAR(30)` | Name of Table with Checked Field |
| `MDQltyBusRuleChkdFieldAndTable` |  | |  |  | `CHAR(61)` | Master Data Quality Table and Field Name of Checked Field |
| `MDQltyBusRuleEvalResultCode` |  | |  |  | `CHAR(1)` | Master Data Quality Rule Evaluation Result Type |
| `MDQualityBusinessRule` |  | |  |  | `CHAR(26)` | Master Data Quality Rule Definition ID |
| `MDQualityBusinessRuleName` |  | |  |  | `CHAR(50)` | Master Data Quality Rule Definition Name |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CrossPlantStatus` |  | |  |  | `CHAR(2)` | Cross-Plant Product Status |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `ExternalProductGroup` |  | |  |  | `CHAR(18)` | External Product Group |
| `HasEmptiesBOM` |  | |  |  | `CHAR(1)` | Empties Bill of Material |
| `HasTextilePartsWthAnimalOrigin` |  | |  |  | `CHAR(1)` | Indicator: Contains Non-Textile Parts of Animal Origin |
| `HasVariableTareWeight` |  | |  |  | `CHAR(1)` | Variable Tare Weight |
| `IndustrySector` |  | |  |  | `CHAR(1)` | Industry |
| `IndustryStandardName` |  | |  |  | `CHAR(18)` | Industry Standard Description (such as ANSI or ISO) |
| `InternationalArticleNumberCat` |  | |  |  | `CHAR(2)` | Category of International Article Number (EAN) |
| `IsBatchManagementRequired` |  | |  |  | `CHAR(1)` | Batch Management Requirement Indicator |
| `IsPilferable` |  | |  |  | `CHAR(1)` | Pilferable |
| `IsRelevantForHzdsSubstances` |  | |  |  | `CHAR(1)` | Relevant for Hazardous Substances |
| `ItemCategoryGroup` |  | |  |  | `CHAR(4)` | General item category group |
| `LaboratoryOrDesignOffice` |  | |  |  | `CHAR(3)` | Laboratory/Design Office |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Change |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of Last Change |
| `ProdNoInGenProdInPrepackProd` |  | |  |  | `CHAR(40)` | Material Number of the Generic Material in Prepack Materials |
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `ProductHierarchy` |  | |  |  | `CHAR(18)` | Product Hierarchy |
| `ProductIsConfigurable` |  | |  |  | `CHAR(1)` | Product is Configurable |
| `ProductOldID` |  | |  |  | `CHAR(40)` | Old Product Number |
| `ProductSeasonUsageCategory` |  | |  |  | `CHAR(1)` | Indicator: Use of Season |
| `ProductStandardID` |  | |  |  | `CHAR(18)` | Global Trade Item Number (EAN/UPC/GTIN) |
| `ProductType` |  | |  |  | `CHAR(4)` | Product Type |
| `QualityInspectionGroup` |  | |  |  | `CHAR(4)` | Quality Inspection Group |
| `SerialNoExplicitnessLevel` |  | |  |  | `CHAR(1)` | Level of Explicitness for Serial Number |
| `ValuationClass` |  | |  |  | `CHAR(4)` | Valuation Class |
| `WarehouseProductGroup` |  | |  |  | `CHAR(4)` | Warehouse Material Group |
| `WarehouseStorageCondition` |  | |  |  | `CHAR(2)` | Warehouse Storage Condition |
| `MDQltyNmbrOfBusRuleEvalResults` |  | |  |  | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyNmbrOfFailedEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyNmbrOfSuccssflEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Total Records |
| `Score` |  | |  |  | `DECF(34)` |  |
| `MDQltyProdAlPgNavgnPath` |  | |  |  | `SSTR(1333)` | Fiori Host Path concatenated with Navigation Target |
