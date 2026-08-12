---
name: C_MDQANLYTSSCRPRODCLFNQRY
description: "MDQ Score for Product Clfn - Query"
app_component: CA-MDG-ADQ
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQANLYTSSCRPRODCLFNQRY')/$value
semantic_en: "MDQ Score for Product Clfn - Query"
semantic_vi: "MDQ Score for Product Clfn - Query — CDS view tiêu dùng dựa trên MDQ Score for Product Clfn - Query."
keywords:
  - "mdq"
  - "score"
  - "for"
  - "product"
  - "clfn"
  - "query"
  - "characteristic"
  - "charc"
  - "description"
  - "class"
  - "type"
  - "master"
  - "data"
  - "change"
  - "process"
tags:
  - CA
  - bo:material
  - CA-MDG
  - CA-MDG-ADQ
  - component:CA-MDG-ADQ
  - consumption-view
  - lob:cross_application components
  - product
---
# C_MDQANLYTSSCRPRODCLFNQRY

**MDQ Score for Product Clfn - Query**

| Property | Value |
|---|---|
| App Component | `CA-MDG-ADQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQANLYTSSCRPRODCLFNQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Characteristic` |  | |  |  | `CHAR(30)` | Characteristic Name |
| `CharcDescription` |  | |  |  | `CHAR(30)` | Characteristic Description |
| `ClassType` |  | |  |  | `CHAR(3)` | Class Type |
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
| `Score` |  | |  | `case when MDQltyNmbrOfBusRuleEvalResults = abap.int1'0' then abap.int1'0' else ( MDQltyNmbrOfSuccssflEvalRslts / MDQltyNmbrOfBusRuleEvalResults ) * 100 end` | `DECF(34)` |  |
| `MDQltyProdAlPgNavgnPath` |  | |  |  | `SSTR(1333)` | Fiori Host Path concatenated with Navigation Target |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQANLYTSSCRPRODCLFNQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQANLYTSSCRPRODCLFNQRY')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@Analytics.internalName: #LOCAL
@EndUserText.label: 'MDQ Score for Product Clfn - Query'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@ObjectModel.usageType: {
  dataClass: #MIXED,
  serviceQuality: #D,
  sizeCategory: #XXL
}
@VDM.viewType: #CONSUMPTION
define transient view entity C_MDQAnlytsScrProdClfnQry
  provider contract analytical_query
  as projection on I_MDQAnlytsScrProdClfnCube
{
  //classification data
  Characteristic,
  CharcDescription,
  ClassType,

  //process data
  MasterDataChangeProcess,
  MDChgProcessFinishDate,
  @EndUserText.label: 'Is Latest Evaluation'
  @Semantics.booleanIndicator: true
  MDChgProcessIsLatest,

  //rule data
  MDQltyBusinessRuleBaseTable,
  @EndUserText.label: 'Base Table Description'
  MDQltyBusinessRuleBaseTabName,
  MDQltyBusinessRuleOwner,
  @EndUserText.label: 'Checked Field'
  MDQltyBusRuleCheckedField,
  @EndUserText.label: 'Checked Field Table'
  MDQltyBusRuleCheckedFieldTable,
  @EndUserText.label: 'Checked Table and Field'
  MDQltyBusRuleChkdFieldAndTable,
  MDQltyBusRuleEvalResultCode,
  MDQualityBusinessRule,
  MDQualityBusinessRuleName,

  //product data
  AuthorizationGroup,
  BaseUnit,
  CreatedByUser,
  CreationDate,
  @EndUserText.label: 'Cross Plant Product Status'
  CrossPlantStatus,
  Division,
  ExternalProductGroup,
  HasEmptiesBOM,
  //instead of long text SAC/RSRT uses medium text
  HasTextilePartsWthAnimalOrigin,
  HasVariableTareWeight,
  IndustrySector,
  IndustryStandardName,
  InternationalArticleNumberCat,
  IsBatchManagementRequired,
  IsPilferable,
  IsRelevantForHzdsSubstances,
  ItemCategoryGroup,
  LaboratoryOrDesignOffice,
  LastChangeDate,
  LastChangedByUser,
  LastChangeTime,
  ProdNoInGenProdInPrepackProd,
  @EndUserText.label: 'Product'
  Product,
  ProductGroup,
  ProductHierarchy,
  //instead of long text SAC/RSRT uses medium text
  ProductIsConfigurable,
  ProductOldID,
  ProductSeasonUsageCategory,
  ProductStandardID,
  ProductType,
  QualityInspectionGroup,
  SerialNoExplicitnessLevel,
  ValuationClass,
  @EndUserText.label: 'Warehouse Product Group'
  WarehouseProductGroup,
  WarehouseStorageCondition,

  @EndUserText.label: 'Total'
  MDQltyNmbrOfBusRuleEvalResults,
  @EndUserText.label: 'Not OK'
  MDQltyNmbrOfFailedEvalRslts,
  @EndUserText.label: 'OK'
  MDQltyNmbrOfSuccssflEvalRslts,
  @EndUserText.label: 'Quality Score'
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.decimals: 2
  case
    when MDQltyNmbrOfBusRuleEvalResults = abap.int1'0' then abap.int1'0'
    else ( MDQltyNmbrOfSuccssflEvalRslts / MDQltyNmbrOfBusRuleEvalResults ) * 100
  end as Score,

  @EndUserText.label: 'ALP Navigation Path'
  MDQltyProdAlPgNavgnPath
}
```
