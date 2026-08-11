---
name: I_MDQLTYANLYTSSCRPRODSLSCUBE
description: "MDQ Score for Product Sales - Cube"
app_component: CA-MDG-ADQ
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQLTYANLYTSSCRPRODSLSCUBE')/$value
semantic_en: "MDQ Score for Product Sales - Cube"
semantic_vi: "MDQ Score for Product Sales - Cube — CDS view giao diện dựa trên I_MDQltyAnlytsScrProdSls."
keywords:
  - "MDQ Score for Product Sales - Cube"
  - "mdq"
  - "score"
  - "for"
  - "product"
  - "sales"
  - "cube"
  - "master"
  - "data"
  - "change"
  - "process"
  - "distribution"
  - "chnl"
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
# I_MDQLTYANLYTSSCRPRODSLSCUBE

**MDQ Score for Product Sales - Cube**

| Property | Value |
|---|---|
| App Component | `CA-MDG-ADQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQLTYANLYTSSCRPRODSLSCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MasterDataChangeProcess` | ✓ | |  |  | `NUMC(12)` | Master Data Change Process Identifier |
| `Product` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `ProductSalesOrg` | ✓ | |  |  | `CHAR(4)` | Sales Organization |
| `ProductDistributionChnl` | ✓ | |  |  | `CHAR(2)` | Distribution Channel |
| `MDQualityBusinessRuleUUID` | ✓ | |  |  | `RAW(16)` | Master Data Quality Validation Rule UUID |
| `MDQltyBusRuleEvalResultCode` | ✓ | |  |  | `CHAR(1)` | Master Data Quality Rule Evaluation Result Type |
| `CashDiscountIsDeductible` |  | | `_ProductSalesDelivery` | `CashDiscountIsDeductible` | `CHAR(1)` | Cash Discount Indicator |
| `CompetitionPressureCategory` |  | | `_ProductSalesDelivery` | `CompetitionPressureCategory` | `CHAR(1)` | Competition characterization of a material |
| `FifthSalesSpecProductGroup` |  | | `_ProductSalesDelivery` | `FifthSalesSpecProductGroup` | `CHAR(3)` | Product Group 5 |
| `FirstSalesSpecProductGroup` |  | | `_ProductSalesDelivery` | `FirstSalesSpecProductGroup` | `CHAR(3)` | Product Group 1 |
| `FourthSalesSpecProductGroup` |  | | `_ProductSalesDelivery` | `FourthSalesSpecProductGroup` | `CHAR(3)` | Product Group 4 |
| `LogisticsStatisticsGroup` |  | | `_ProductSalesDelivery` | `LogisticsStatisticsGroup` | `CHAR(1)` | Material Statistics Group |
| `PriceFixingCategory` |  | | `_ProductSalesDelivery` | `PriceFixingCategory` | `CHAR(1)` | Indicator for price fixing |
| `ProductCommissionGroup` |  | | `_ProductSalesDelivery` | `ProductCommissionGroup` | `CHAR(2)` | Commission Group |
| `ProductUnitGroup` |  | | `_ProductSalesDelivery` | `ProductUnitGroup` | `CHAR(4)` | Unit of Measure Group |
| `RoundingProfile` |  | | `_ProductSalesDelivery` | `RoundingProfile` | `CHAR(4)` | Rounding Profile |
| `SalesItemCategoryGroup` |  | | `_ProductSalesDelivery` | `ItemCategoryGroup` | `CHAR(4)` | Item Category Group from Material Master |
| `SalesMeasureUnit` |  | | `_ProductSalesDelivery` | `SalesMeasureUnit` | `UNIT(3)` | Sales Unit |
| `SecondSalesSpecProductGroup` |  | | `_ProductSalesDelivery` | `SecondSalesSpecProductGroup` | `CHAR(3)` | Product Group 2 |
| `SupplyingPlant` |  | | `_ProductSalesDelivery` | `SupplyingPlant` | `CHAR(4)` | Delivering Plant (Own or External) |
| `ThirdSalesSpecProductGroup` |  | | `_ProductSalesDelivery` | `ThirdSalesSpecProductGroup` | `CHAR(3)` | Product Group 3 |
| `VariableSalesUnitIsNotAllowed` |  | | `_ProductSalesDelivery` | `VariableSalesUnitIsNotAllowed` | `CHAR(1)` | Variable Sales Unit Not Allowed |
| `VolumeRebateGroup` |  | | `_ProductSalesDelivery` | `VolumeRebateGroup` | `CHAR(2)` | Volume rebate group |
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
| `_SalesItemCategoryGroupText` |  | | `_ProductSalesDelivery` | `_ItemCategoryGroupText` |  |  |
| `MDQltyNmbrOfSuccssflEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyNmbrOfFailedEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyNmbrOfBusRuleEvalResults` |  | |  |  | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyProdAlPgNavgnPath` |  | |  | `cast( concat( _FLPHostPath.MDQltyFioriLaunchpadHostPath, '#MDQualityEvaluation-displayEvaluationResultSales?MDQltyBusRuleEvalResultCode=F&MDQltyBusinessObjectTypeCode=194') as mdq_maint_host_path )` | `SSTR(1333)` | Fiori Host Path concatenated with Navigation Target |
| `_AdditionalMaterialGroup1` | | ✓ | | | | |
| `_AdditionalMaterialGroup2` | | ✓ | | | | |
| `_AdditionalMaterialGroup3` | | ✓ | | | | |
| `_AdditionalMaterialGroup4` | | ✓ | | | | |
| `_AdditionalMaterialGroup5` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_LogisticalRoundingProfileText` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ProductSalesDelivery` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
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
| `_AdditionalMaterialGroup1` | `I_AdditionalMaterialGroup1` | [1..1] |
| `_AdditionalMaterialGroup2` | `I_AdditionalMaterialGroup2` | [1..1] |
| `_AdditionalMaterialGroup3` | `I_AdditionalMaterialGroup3` | [1..1] |
| `_AdditionalMaterialGroup4` | `I_AdditionalMaterialGroup4` | [1..1] |
| `_AdditionalMaterialGroup5` | `I_AdditionalMaterialGroup5` | [1..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [1..1] |
| `_LogisticalRoundingProfileText` | `I_LogisticalRoundingProfileT` | [0..*] |
| `_Plant` | `I_Plant` | [1..1] |
| `_ProductSalesDelivery` | `I_ProductSalesDelivery` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [1..1] |
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
| `_ProductSalesDeliveryExtension` | `E_Productsalesdelivery` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQLTYANLYTSSCRPRODSLSCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQLTYANLYTSSCRPRODSLSCUBE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: [ '_UserChangedBy', '_UserCreatedBy', '_UserRuleOwner' ]
@Analytics.dataCategory: #CUBE
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'MDQ Score for Product Sales - Cube'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.sapObjectNodeType.name: 'MDQProdSlsEvalAnalyticalScore'
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
define view entity I_MDQltyAnlytsScrProdSlsCube
  as select from I_MDQltyAnlytsScrProdSls

  //sales associations
  association [1..1] to I_AdditionalMaterialGroup1     as _AdditionalMaterialGroup1      on  _AdditionalMaterialGroup1.AdditionalMaterialGroup1 = $projection.firstsalesspecproductgroup
  association [1..1] to I_AdditionalMaterialGroup2     as _AdditionalMaterialGroup2      on  _AdditionalMaterialGroup2.AdditionalMaterialGroup2 = $projection.secondsalesspecproductgroup
  association [1..1] to I_AdditionalMaterialGroup3     as _AdditionalMaterialGroup3      on  _AdditionalMaterialGroup3.AdditionalMaterialGroup3 = $projection.thirdsalesspecproductgroup
  association [1..1] to I_AdditionalMaterialGroup4     as _AdditionalMaterialGroup4      on  _AdditionalMaterialGroup4.AdditionalMaterialGroup4 = $projection.fourthsalesspecproductgroup
  association [1..1] to I_AdditionalMaterialGroup5     as _AdditionalMaterialGroup5      on  _AdditionalMaterialGroup5.AdditionalMaterialGroup5 = $projection.fifthsalesspecproductgroup
  association [1..1] to I_DistributionChannel          as _DistributionChannel           on  _DistributionChannel.DistributionChannel = $projection.ProductDistributionChnl
  association [0..*] to I_LogisticalRoundingProfileT   as _LogisticalRoundingProfileText on  _LogisticalRoundingProfileText.Plant                     = $projection.supplyingplant
                                                                                         and _LogisticalRoundingProfileText.LogisticalRoundingProfile = $projection.roundingprofile
  association [1..1] to I_Plant                        as _Plant                         on  _Plant.Plant = $projection.supplyingplant
  association [0..1] to I_ProductSalesDelivery         as _ProductSalesDelivery          on  _ProductSalesDelivery.Product                 = $projection.Product
                                                                                         and _ProductSalesDelivery.ProductSalesOrg         = $projection.ProductSalesOrg
                                                                                         and _ProductSalesDelivery.ProductDistributionChnl = $projection.ProductDistributionChnl
  association [1..1] to I_SalesOrganization            as _SalesOrganization             on  _SalesOrganization.SalesOrganization = $projection.ProductSalesOrg

  //standard associations
  association [0..*] to I_DocumentInfoRecordLbtryOffcT as _LaboratoryOrDesignOfficeText  on  _LaboratoryOrDesignOfficeText.LaboratoryOrDesignOffice = $projection.laboratoryordesignoffice
  association [1..*] to I_MDQltyBusinessRuleBaseTableT as _MDQBusinessRuleBaseTableText  on  _MDQBusinessRuleBaseTableText.MDQltyBusinessObjectTypeCode = '194'
                                                                                         and _MDQBusinessRuleBaseTableText.MDQltyBusinessRuleBaseTable  = $projection.MDQltyBusinessRuleBaseTable
  association [0..1] to I_MDQltyFioriLaunchpadHostPath as _FLPHostPath                   on  _FLPHostPath.MDQltyFioriLaunchpadHostPath <> ''
  association [1..1] to I_MDQltyScoreEvalDetails       as _MDQltyScoreEvalDetails        on  _MDQltyScoreEvalDetails.MasterDataChangeProcess = $projection.MasterDataChangeProcess
  association [1..1] to I_MDQualityBusinessRule        as _MDQltyBusRule                 on  _MDQltyBusRule.MDQualityBusinessRuleUUID = $projection.MDQualityBusinessRuleUUID
  association [0..*] to I_IndustrySectorText_2         as _IndustrySectorText            on  _IndustrySectorText.IndustrySector = $projection.industrysector
  association [1..1] to I_Product                      as _Product                       on  _Product.Product = $projection.Product
  association [0..*] to I_ProductText                  as _ProductText                   on  _ProductText.Product = $projection.Product
  association [0..1] to I_User                         as _UserChangedBy                 on  _UserChangedBy.UserID = $projection.lastchangedbyuser
  association [0..1] to I_User                         as _UserCreatedBy                 on  _UserCreatedBy.UserID = $projection.createdbyuser
  association [0..1] to I_User                         as _UserRuleOwner                 on  _UserRuleOwner.UserID = $projection.MDQltyBusinessRuleOwner

  //extensibility associations
  association [0..1] to E_Product                      as _ProductExtension              on  _ProductExtension.Product = $projection.Product
  association [0..1] to E_Productsalesdelivery         as _ProductSalesDeliveryExtension on  _ProductSalesDeliveryExtension.Product                    = $projection.Product
                                                                                         and _ProductSalesDeliveryExtension.ProductDistributionChannel = $projection.ProductDistributionChnl
                                                                                         and _ProductSalesDeliveryExtension.ProductSalesOrganization   = $projection.ProductSalesOrg
{
  key MasterDataChangeProcess,
      @EndUserText.label: 'Product'
  key Product,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
  key ProductSalesOrg,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
  key ProductDistributionChnl,
  key MDQualityBusinessRuleUUID,
  key MDQltyBusRuleEvalResultCode,

      //sales data
      _ProductSalesDelivery.CashDiscountIsDeductible,
      _ProductSalesDelivery.CompetitionPressureCategory,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      _ProductSalesDelivery.FifthSalesSpecProductGroup,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      _ProductSalesDelivery.FirstSalesSpecProductGroup,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      _ProductSalesDelivery.FourthSalesSpecProductGroup,
      @ObjectModel.text.association: '_MaterialStatisticsGroupText'
      _ProductSalesDelivery.LogisticsStatisticsGroup,
      @ObjectModel.text.association: '_PriceFixingCategoryText'
      _ProductSalesDelivery.PriceFixingCategory,
      @ObjectModel.text.association: '_ProductCommissionGroupText'
      _ProductSalesDelivery.ProductCommissionGroup,
      _ProductSalesDelivery.ProductUnitGroup,
      @ObjectModel.text.association: '_LogisticalRoundingProfileText'
      _ProductSalesDelivery.RoundingProfile,
      @ObjectModel.text.association: '_SalesItemCategoryGroupText'
      _ProductSalesDelivery.ItemCategoryGroup                                                                                                        as SalesItemCategoryGroup,
      @ObjectModel.text.association: '_SalesUnitText'
      _ProductSalesDelivery.SalesMeasureUnit,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      _ProductSalesDelivery.SecondSalesSpecProductGroup,
      //only used as key for _LogisticalRoundingProfileText
      @ObjectModel.foreignKey.association: '_Plant'
      _ProductSalesDelivery.SupplyingPlant,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      _ProductSalesDelivery.ThirdSalesSpecProductGroup,
      _ProductSalesDelivery.VariableSalesUnitIsNotAllowed,
      _ProductSalesDelivery.VolumeRebateGroup,

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

      //sales associations
      _AdditionalMaterialGroup1,
      _AdditionalMaterialGroup2,
      _AdditionalMaterialGroup3,
      _AdditionalMaterialGroup4,
      _AdditionalMaterialGroup5,
      _DistributionChannel,
      _LogisticalRoundingProfileText,
      _Plant,
      _ProductSalesDelivery,
      _ProductSalesDelivery._ItemCategoryGroupText                                                                                                   as _SalesItemCategoryGroupText,
      _ProductSalesDelivery._MaterialStatisticsGroupText,
      _ProductSalesDelivery._PriceFixingCategoryText,
      _ProductSalesDelivery._ProductCommissionGroupText,
      _ProductSalesDelivery._SalesUnitText,
      _SalesOrganization,

      @Aggregation.default: #SUM
      MDQltyNmbrOfSuccssflEvalRslts,
      @Aggregation.default: #SUM
      MDQltyNmbrOfFailedEvalRslts,
      @Aggregation.default: #SUM
      MDQltyNmbrOfBusRuleEvalResults,

      @EndUserText.label: '' //element label required by ATC, label defined in query is visible in SAC
      //reducing field length to 250 results in an ATC error
      cast( concat( _FLPHostPath.MDQltyFioriLaunchpadHostPath,
        '#MDQualityEvaluation-displayEvaluationResultSales?MDQltyBusRuleEvalResultCode=F&MDQltyBusinessObjectTypeCode=194') as mdq_maint_host_path ) as MDQltyProdAlPgNavgnPath
}
```
