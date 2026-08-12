---
name: I_MDQANLYTSSCRPRODDIMNCUBE
description: "MDQ Score for Product Dimensions - Cube"
app_component: CA-MDG-ADQ
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRPRODDIMNCUBE')/$value
semantic_en: "MDQ Score for Product Dimensions - Cube"
semantic_vi: "MDQ Score for Product Dimensions - Cube — CDS view giao diện dựa trên I_MDQltyAnlytsScrProdDimn."
keywords:
  - "MDQ Score for Product Dimensions - Cube"
  - "mdq"
  - "score"
  - "for"
  - "product"
  - "dimensions"
  - "cube"
  - "master"
  - "data"
  - "change"
  - "process"
  - "alternative"
  - "unit"
  - "quality"
  - "business"
  - "rule"
tags:
  - CA
  - bo:material
  - CA-MDG
  - CA-MDG-ADQ
  - component:CA-MDG-ADQ
  - interface-view
  - lob:cross_application components
  - product
---
# I_MDQANLYTSSCRPRODDIMNCUBE

**MDQ Score for Product Dimensions - Cube**

| Property | Value |
|---|---|
| App Component | `CA-MDG-ADQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRPRODDIMNCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MasterDataChangeProcess` | ✓ | |  |  | `NUMC(12)` | Master Data Change Process Identifier |
| `Product` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `AlternativeUnit` | ✓ | |  |  | `UNIT(3)` | Alternative Unit of Measure for Stockkeeping Unit |
| `MDQualityBusinessRuleUUID` | ✓ | |  |  | `RAW(16)` | Master Data Quality Validation Rule UUID |
| `MDQltyBusRuleEvalResultCode` | ✓ | |  |  | `CHAR(1)` | Master Data Quality Rule Evaluation Result Type |
| `GlobalTradeItemNumber` |  | | `_ProductUnitsOfMeasure` | `GlobalTradeItemNumber` | `CHAR(18)` | International Article Number (EAN/UPC) |
| `GlobalTradeItemNumberCategory` |  | | `_ProductUnitsOfMeasure` | `GlobalTradeItemNumberCategory` | `CHAR(2)` | Category of Global Trade Item Number (GTIN) |
| `ProductMeasurementUnit` |  | | `_ProductUnitsOfMeasure` | `ProductMeasurementUnit` | `UNIT(3)` | Unit of Dimension for Length/Width/Height |
| `UnitOfMeasureCategory` |  | | `_ProductUnitsOfMeasure` | `UnitOfMeasureCategory` | `CHAR(1)` | EWM-CW: Category of Unit of Measure |
| `MDChgProcessFinishDate` |  | | `_MasterDataChangeProcess` | `MDChgProcessFinishDate` | `DATS(8)` | Master Data Change Process Completion Date |
| `MDChgProcessIsLatest` |  | | `_MDQltyScoreEvalDetails` | `MDChgProcessIsLatest` | `CHAR(1)` |  |
| `MDQltyBusinessRuleBaseTable` |  | |  |  | `CHAR(30)` | Base Table |
| `MDQltyBusinessRuleOwner` |  | |  |  | `CHAR(12)` | Master Data Quality Business Rule Owner |
| `MDQltyBusRuleCheckedField` |  | | `_MDQltyBusRule` | `MDQltyBusRuleCheckedField` | `CHAR(30)` | Master Data Quality Fieldname of the Checked Field |
| `MDQltyBusRuleCheckedFieldTable` |  | | `_MDQltyBusRule` | `MDQltyBusRuleCheckedFieldTable` | `CHAR(30)` | Name of Table with Checked Field |
| `MDQltyBusRuleChkdFieldAndTable` |  | | `_MDQltyBusRule` | `MDQltyBusRuleChkdFieldAndTable` | `CHAR(61)` | Master Data Quality Table and Field Name of Checked Field |
| `MDQualityBusinessRule` |  | | `_MDQltyBusRule` | `MDQualityBusinessRule` | `CHAR(26)` | Master Data Quality Rule Definition ID |
| `MDQualityBusinessRuleName` |  | | `_MDQltyBusRule` | `MDQualityBusinessRuleName` | `CHAR(50)` | Master Data Quality Rule Definition Name |
| `AuthorizationGroup` |  | | `_Product` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `BaseUnit` |  | | `_Product` | `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `CreatedByUser` |  | | `_Product` | `CreatedByUser` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | | `_Product` | `CreationDate` | `DATS(8)` | Created On |
| `CrossPlantStatus` |  | | `_Product` | `CrossPlantStatus` | `CHAR(2)` | Cross-Plant Product Status |
| `Division` |  | | `_Product` | `Division` | `CHAR(2)` | Division |
| `ExternalProductGroup` |  | | `_Product` | `ExternalProductGroup` | `CHAR(18)` | External Product Group |
| `HasEmptiesBOM` |  | | `_Product` | `HasEmptiesBOM` | `CHAR(1)` | Empties Bill of Material |
| `HasTextilePartsWthAnimalOrigin` |  | | `_Product` | `HasTextilePartsWthAnimalOrigin` | `CHAR(1)` | Indicator: Contains Non-Textile Parts of Animal Origin |
| `HasVariableTareWeight` |  | | `_Product` | `HasVariableTareWeight` | `CHAR(1)` | Variable Tare Weight |
| `IndustrySector` |  | | `_Product` | `IndustrySector` | `CHAR(1)` | Industry |
| `IndustryStandardName` |  | | `_Product` | `IndustryStandardName` | `CHAR(18)` | Industry Standard Description (such as ANSI or ISO) |
| `InternationalArticleNumberCat` |  | | `_Product` | `InternationalArticleNumberCat` | `CHAR(2)` | Category of International Article Number (EAN) |
| `IsBatchManagementRequired` |  | | `_Product` | `IsBatchManagementRequired` | `CHAR(1)` | Batch Management Requirement Indicator |
| `IsPilferable` |  | | `_Product` | `IsPilferable` | `CHAR(1)` | Pilferable |
| `IsRelevantForHzdsSubstances` |  | | `_Product` | `IsRelevantForHzdsSubstances` | `CHAR(1)` | Relevant for Hazardous Substances |
| `ItemCategoryGroup` |  | | `_Product` | `ItemCategoryGroup` | `CHAR(4)` | General item category group |
| `LaboratoryOrDesignOffice` |  | | `_Product` | `LaboratoryOrDesignOffice` | `CHAR(3)` | Laboratory/Design Office |
| `LastChangeDate` |  | | `_Product` | `LastChangeDate` | `DATS(8)` | Date of Last Change |
| `LastChangedByUser` |  | | `_Product` | `LastChangedByUser` | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeTime` |  | | `_Product` | `LastChangeTime` | `TIMS(6)` | Time of Last Change |
| `ProdNoInGenProdInPrepackProd` |  | | `_Product` | `ProdNoInGenProdInPrepackProd` | `CHAR(40)` | Material Number of the Generic Material in Prepack Materials |
| `ProductGroup` |  | | `_Product` | `ProductGroup` | `CHAR(9)` | Product Group |
| `ProductHierarchy` |  | | `_Product` | `ProductHierarchy` | `CHAR(18)` | Product Hierarchy |
| `ProductIsConfigurable` |  | | `_Product` | `ProductIsConfigurable` | `CHAR(1)` | Product is Configurable |
| `ProductOldID` |  | | `_Product` | `ProductOldID` | `CHAR(40)` | Old Product Number |
| `ProductSeasonUsageCategory` |  | | `_Product` | `ProductSeasonUsageCategory` | `CHAR(1)` | Indicator: Use of Season |
| `ProductStandardID` |  | | `_Product` | `ProductStandardID` | `CHAR(18)` | Global Trade Item Number (EAN/UPC/GTIN) |
| `ProductType` |  | | `_Product` | `ProductType` | `CHAR(4)` | Product Type |
| `QualityInspectionGroup` |  | | `_Product` | `QualityInspectionGroup` | `CHAR(4)` | Quality Inspection Group |
| `SerialNoExplicitnessLevel` |  | | `_Product` | `SerialNoExplicitnessLevel` | `CHAR(1)` | Level of Explicitness for Serial Number |
| `ValuationClass` |  | | `_Product._ProductRetail` | `ValuationClass` | `CHAR(4)` | Valuation Class |
| `WarehouseProductGroup` |  | | `_Product` | `WarehouseProductGroup` | `CHAR(4)` | Warehouse Material Group |
| `WarehouseStorageCondition` |  | | `_Product` | `WarehouseStorageCondition` | `CHAR(2)` | Warehouse Storage Condition |
| `MDQltyNmbrOfSuccssflEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyNmbrOfFailedEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyNmbrOfBusRuleEvalResults` |  | |  |  | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyProdAlPgNavgnPath` |  | |  | `cast( concat( _FLPHostPath.MDQltyFioriLaunchpadHostPath, '#MDQualityEvaluation-displayEvaluationResultProdGen?MDQltyBusRuleEvalResultCode=F&MDQltyBusinessObjectTypeCode=194&MDQltyBusinessRuleBaseTable=MARM') as mdq_maint_host_path )` | `SSTR(1333)` | Fiori Host Path concatenated with Navigation Target |
| `_ProductUnitsOfMeasure` | | ✓ | | | | |
| `_LaboratoryOrDesignOfficeText` | | ✓ | | | | |
| `_IndustrySectorText` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_UserChangedBy` | | ✓ | | | | |
| `_UserCreatedBy` | | ✓ | | | | |
| `_UserRuleOwner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductUnitsOfMeasure` | `I_ProductUnitsOfMeasure` | [1..1] |
| `_LaboratoryOrDesignOfficeText` | `I_DocumentInfoRecordLbtryOffcT` | [0..*] |
| `_MDQBusinessRuleBaseTableText` | `I_MDQltyBusinessRuleBaseTableT` | [1..*] |
| `_FLPHostPath` | `I_MDQltyFioriLaunchpadHostPath` | [0..1] |
| `_MDQltyScoreEvalDetails` | `I_MDQltyScoreEvalDetails` | [1..1] |
| `_MDQltyBusRule` | `I_MDQualityBusinessRule` | [1..1] |
| `_IndustrySectorText` | `I_IndustrySectorText_2` | [0..*] |
| `_Product` | `I_Product` | [1..1] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_UserChangedBy` | `I_User` | [0..1] |
| `_UserCreatedBy` | `I_User` | [0..1] |
| `_UserRuleOwner` | `I_User` | [0..1] |
| `_ProductExtension` | `E_Product` | [0..1] |
| `_ProductUnitsOfMeasureExtn` | `E_Productunitsofmeasure` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRPRODDIMNCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRPRODDIMNCUBE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: [ '_UserChangedBy', '_UserCreatedBy', '_UserRuleOwner' ]
@Analytics.dataCategory: #CUBE
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'MDQ Score for Product Dimensions - Cube'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.sapObjectNodeType.name: 'Product' //'MDQProdDimnEvalAnalyticalScore'
@ObjectModel.supportedCapabilities: [
  #ANALYTICAL_PROVIDER,
  #CDS_MODELING_DATA_SOURCE,
  #EXTRACTION_DATA_SOURCE,
  #SQL_DATA_SOURCE
]
@ObjectModel.usageType: {
  dataClass: #MIXED,
  serviceQuality: #D,
  sizeCategory: #XXL
}
@VDM.viewType: #COMPOSITE
define view entity I_MDQAnlytsScrProdDimnCube
  as select from I_MDQltyAnlytsScrProdDimn

  //dimension associations
  association [1..1] to I_ProductUnitsOfMeasure        as _ProductUnitsOfMeasure        on  _ProductUnitsOfMeasure.Product         = $projection.Product
                                                                                        and _ProductUnitsOfMeasure.AlternativeUnit = $projection.AlternativeUnit

  //standard associations
  association [0..*] to I_DocumentInfoRecordLbtryOffcT as _LaboratoryOrDesignOfficeText on  _LaboratoryOrDesignOfficeText.LaboratoryOrDesignOffice = $projection.laboratoryordesignoffice
  association [1..*] to I_MDQltyBusinessRuleBaseTableT as _MDQBusinessRuleBaseTableText on  _MDQBusinessRuleBaseTableText.MDQltyBusinessObjectTypeCode = '194'
                                                                                        and _MDQBusinessRuleBaseTableText.MDQltyBusinessRuleBaseTable  = $projection.MDQltyBusinessRuleBaseTable
  association [0..1] to I_MDQltyFioriLaunchpadHostPath as _FLPHostPath                  on  _FLPHostPath.MDQltyFioriLaunchpadHostPath <> ''
  association [1..1] to I_MDQltyScoreEvalDetails       as _MDQltyScoreEvalDetails       on  _MDQltyScoreEvalDetails.MasterDataChangeProcess = $projection.MasterDataChangeProcess
  association [1..1] to I_MDQualityBusinessRule        as _MDQltyBusRule                on  _MDQltyBusRule.MDQualityBusinessRuleUUID = $projection.MDQualityBusinessRuleUUID
  association [0..*] to I_IndustrySectorText_2         as _IndustrySectorText           on  _IndustrySectorText.IndustrySector = $projection.industrysector
  association [1..1] to I_Product                      as _Product                      on  _Product.Product = $projection.Product
  association [0..*] to I_ProductText                  as _ProductText                  on  _ProductText.Product = $projection.Product
  association [0..1] to I_User                         as _UserChangedBy                on  _UserChangedBy.UserID = $projection.lastchangedbyuser
  association [0..1] to I_User                         as _UserCreatedBy                on  _UserCreatedBy.UserID = $projection.createdbyuser
  association [0..1] to I_User                         as _UserRuleOwner                on  _UserRuleOwner.UserID = $projection.MDQltyBusinessRuleOwner

  //extensibility associations
  association [0..1] to E_Product                      as _ProductExtension             on  _ProductExtension.Product = $projection.Product
  association [0..1] to E_Productunitsofmeasure        as _ProductUnitsOfMeasureExtn    on  _ProductUnitsOfMeasureExtn.Product         = $projection.Product
                                                                                        and _ProductUnitsOfMeasureExtn.AlternativeUnit = $projection.AlternativeUnit
{
  key MasterDataChangeProcess,
      @ObjectModel.text.association: '_ProductText'
  key Product,
  key AlternativeUnit,
  key MDQualityBusinessRuleUUID,
  key MDQltyBusRuleEvalResultCode,

      //dimension data
      _ProductUnitsOfMeasure.GlobalTradeItemNumber,
      @ObjectModel.text.association: '_GlobalTradeItemNumberText'
      _ProductUnitsOfMeasure.GlobalTradeItemNumberCategory,
      @ObjectModel.text.association: '_ProductMeasurementUnitText'
      _ProductUnitsOfMeasure.ProductMeasurementUnit,
      _ProductUnitsOfMeasure.UnitOfMeasureCategory,

      //process data
      _MasterDataChangeProcess.MDChgProcessFinishDate,
      @EndUserText.label: '' //element label required by ATC, label defined in query is visible in SAC
      @Semantics.booleanIndicator: true
      _MDQltyScoreEvalDetails.MDChgProcessIsLatest,

      //rule data
      MDQltyBusinessRuleBaseTable,
      _MDQBusinessRuleBaseTableText[1:Language=$session.system_language].MDQltyBusinessRuleBaseTabName,
      @ObjectModel.foreignKey.association: '_UserRuleOwner'
      MDQltyBusinessRuleOwner,
      _MDQltyBusRule.MDQltyBusRuleCheckedField,
      _MDQltyBusRule.MDQltyBusRuleCheckedFieldTable,
      _MDQltyBusRule.MDQltyBusRuleChkdFieldAndTable,
      _MDQltyBusRule.MDQualityBusinessRule,
      _MDQltyBusRule.MDQualityBusinessRuleName,

      //product data
      _Product.AuthorizationGroup,
      @ObjectModel.text.association: '_BaseUnitOfMeasureText'
      _Product.BaseUnit,
      @ObjectModel.foreignKey.association: '_UserCreatedBy'
      _Product.CreatedByUser,
      _Product.CreationDate,
      @ObjectModel.text.association: '_ProductStatusText'
      _Product.CrossPlantStatus,
      @ObjectModel.text.association: '_DivisionText'
      _Product.Division,
      @ObjectModel.text.association: '_ExtProdGrpText'
      _Product.ExternalProductGroup,
      _Product.HasEmptiesBOM,
      _Product.HasTextilePartsWthAnimalOrigin,
      _Product.HasVariableTareWeight,
      @ObjectModel.text.association: '_IndustrySectorText'
      _Product.IndustrySector,
      _Product.IndustryStandardName,
      @ObjectModel.text.association: '_IntArticleNumberText'
      _Product.InternationalArticleNumberCat,
      _Product.IsBatchManagementRequired,
      _Product.IsPilferable,
      _Product.IsRelevantForHzdsSubstances,
      @ObjectModel.text.association: '_ItemCategoryGroupText'
      _Product.ItemCategoryGroup,
      @ObjectModel.text.association: '_LaboratoryOrDesignOfficeText'
      _Product.LaboratoryOrDesignOffice,
      _Product.LastChangeDate,
      @ObjectModel.foreignKey.association: '_UserChangedBy'
      _Product.LastChangedByUser,
      _Product.LastChangeTime,
      _Product.ProdNoInGenProdInPrepackProd,
      @ObjectModel.text.association: '_ProductGroupText_2'
      _Product.ProductGroup,
      //@ObjectModel.text.association: '_ProductHierarchyText'
      _Product.ProductHierarchy,
      _Product.ProductIsConfigurable,
      _Product.ProductOldID,
      _Product.ProductSeasonUsageCategory,
      _Product.ProductStandardID,
      @ObjectModel.text.association: '_ProductTypeName_2'
      _Product.ProductType,
      //@ObjectModel.text.association: '_QualityInspectionGroupText'
      _Product.QualityInspectionGroup,
      _Product.SerialNoExplicitnessLevel,
      @ObjectModel.text.association: '_ValuationClassText'
      _Product._ProductRetail.ValuationClass,
      //@ObjectModel.text.association: '_WarehouseProductGroupText'
      _Product.WarehouseProductGroup,
      //@ObjectModel.text.association: '_WarehouseStorageConditionText'
      _Product.WarehouseStorageCondition,

      //standard associations
      //_MDQBusinessRuleBaseTableText, //not C1 released
      _IndustrySectorText,
      _LaboratoryOrDesignOfficeText,
      _Product,
      _Product._BaseUnitOfMeasureText,
      _Product._DivisionText,
      _Product._ExtProdGrpText,
      _Product._ItemCategoryGroupText,
      _Product._IntArticleNumberText,
      _Product._ProductGroupText_2,
      //_Product._ProductHierarchyText, //not C1 released
      _Product._ProductStatusText,
      _Product._ProductTypeName_2,
      //_Product._QualityInspectionGroupText, //not C1 released
      _Product._ProductRetail._ValuationClassText,
      //_Product._WarehouseProductGroupText, //not C1 released
      //_Product._WarehouseStorageConditionText, //not C1 released
      _ProductText,
      _UserChangedBy,
      _UserCreatedBy,
      _UserRuleOwner,

      //dimension associations
      _ProductUnitsOfMeasure,
      _ProductUnitsOfMeasure._GlobalTradeItemNumberText,
      _ProductUnitsOfMeasure._ProductMeasurementUnitText,

      @Aggregation.default: #SUM
      MDQltyNmbrOfSuccssflEvalRslts,
      @Aggregation.default: #SUM
      MDQltyNmbrOfFailedEvalRslts,
      @Aggregation.default: #SUM
      MDQltyNmbrOfBusRuleEvalResults,

      @EndUserText.label: '' //element label required by ATC, label defined in query is visible in SAC
      //reducing field length to 250 results in an ATC error
      cast( concat( _FLPHostPath.MDQltyFioriLaunchpadHostPath,
        '#MDQualityEvaluation-displayEvaluationResultProdGen?MDQltyBusRuleEvalResultCode=F&MDQltyBusinessObjectTypeCode=194&MDQltyBusinessRuleBaseTable=MARM') as mdq_maint_host_path ) as MDQltyProdAlPgNavgnPath
}
```
