---
name: I_MDQANLYTSSCRPRODPLNTCUBE
description: "MDQ Score for Product Plant - Cube"
app_component: CA-MDG-ADQ
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRPRODPLNTCUBE')/$value
semantic_en: "MDQ Score for Product Plant - Cube"
semantic_vi: "MDQ Score for Product Plant - Cube — CDS view giao diện dựa trên I_MDQltyAnlytsScrProdPlnt."
keywords:
  - "MDQ Score for Product Plant - Cube"
  - "mdq"
  - "score"
  - "for"
  - "product"
  - "plant"
  - "cube"
  - "master"
  - "data"
  - "change"
  - "process"
  - "quality"
  - "business"
  - "rule"
  - "qlty"
  - "eval"
tags:
  - CA
  - bo:material
  - CA-MDG
  - CA-MDG-ADQ
  - component:CA-MDG-ADQ
  - interface-view
  - lob:cross_application components
  - plan
  - product
---
# I_MDQANLYTSSCRPRODPLNTCUBE

**MDQ Score for Product Plant - Cube**

| Property | Value |
|---|---|
| App Component | `CA-MDG-ADQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRPRODPLNTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MasterDataChangeProcess` | ✓ | |  |  | `NUMC(12)` | Master Data Change Process Identifier |
| `Product` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `MDQualityBusinessRuleUUID` | ✓ | |  |  | `RAW(16)` | Master Data Quality Validation Rule UUID |
| `MDQltyBusRuleEvalResultCode` | ✓ | |  |  | `CHAR(1)` | Master Data Quality Rule Evaluation Result Type |
| `ABCIndicator` |  | | `_ProductPlant` | `ABCIndicator` | `CHAR(1)` | ABC Indicator |
| `AvailabilityCheckType` |  | | `_ProductPlant` | `AvailabilityCheckType` | `CHAR(2)` | Checking Group for Availability Check |
| `CostingSpecialProcurementType` |  | | `_ProductPlant._ProductPlantCosting` | `CostingSpecialProcurementType` | `CHAR(2)` | Special Procurement Type for Costing |
| `CountryOfOrigin` |  | | `_ProductPlant` | `CountryOfOrigin` | `CHAR(3)` | Country/Region of Origin of Product |
| `DependentRequirementsType` |  | | `_ProductSupplyPlanning` | `DependentRequirementsType` | `CHAR(1)` | Indicator for Individual and Collective Requirements |
| `IsAutoPurOrdCreationAllowed` |  | | `_ProductPlant._PlantProcurement` | `IsAutoPurOrdCreationAllowed` | `CHAR(1)` | Indicator: "automatic purchase order allowed" |
| `LoadingGroup` |  | | `_ProductPlant._PlantSales` | `LoadingGroup` | `CHAR(4)` | Loading Group |
| `LotSizingProcedure` |  | | `_ProductPlant._MaterialLotSizingProcedure` | `LotSizingProcedure` | `CHAR(2)` | Lot Sizing Procedure in Materials Planning |
| `MRPAvailabilityType` |  | | `_ProductSupplyPlanning` | `MRPAvailabilityType` | `CHAR(1)` | Mixed MRP indicator |
| `MRPGroup` |  | | `_ProductSupplyPlanning` | `MRPGroup` | `CHAR(4)` | MRP Group |
| `MRPPlanningCalendar` |  | | `_ProductSupplyPlanning` | `MRPPlanningCalendar` | `CHAR(3)` | Planning Calendar |
| `MRPResponsible` |  | | `_ProductPlant` | `MRPResponsible` | `CHAR(3)` | MRP Controller |
| `MRPType` |  | | `_ProductSupplyPlanning` | `MRPType` | `CHAR(2)` | MRP Type |
| `PlanningStrategyGroup` |  | | `_ProductSupplyPlanning` | `PlanningStrategyGroup` | `CHAR(2)` | Planning Strategy Group |
| `ProcurementSubType` |  | | `_ProductSupplyPlanning` | `ProcurementSubType` | `CHAR(2)` | Special Procurement Type |
| `ProcurementType` |  | | `_ProductSupplyPlanning` | `ProcurementType` | `CHAR(1)` | Procurement Type |
| `ProductionSupervisor` |  | | `_ProductPlant` | `ProductionSupervisor` | `CHAR(3)` | Production Supervisor |
| `PurchasingGroup` |  | | `_ProductPlant` | `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `QualityMgmtCtrlKey` |  | | `_ProductPlant._PlantQualityMgmt` | `QualityMgmtCtrlKey` | `CHAR(8)` | Control Key for Quality Management in Procurement |
| `RegionOfOrigin` |  | | `_ProductPlant` | `RegionOfOrigin` | `CHAR(3)` | Region of Origin |
| `RoundingProfile` |  | | `_ProductSupplyPlanning` | `RoundingProfile` | `CHAR(4)` | Rounding Profile |
| `SchedulingFloatProfile` |  | | `_ProductSupplyPlanning` | `SchedulingMarginKey` | `CHAR(3)` | Scheduling Profile for Floats |
| `SerialNumberProfile` |  | | `_ProductPlant` | `SerialNumberProfile` | `CHAR(4)` | Serial Number Profile |
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
| `MDQltyProdAlPgNavgnPath` |  | |  | `cast( concat( _FLPHostPath.MDQltyFioriLaunchpadHostPath, '#MDQualityEvaluation-displayEvaluationResultPlant?MDQltyBusRuleEvalResultCode=F&MDQltyBusinessObjectTypeCode=194') as mdq_maint_host_path )` | `SSTR(1333)` | Fiori Host Path concatenated with Navigation Target |
| `_ATPCheckingGroup` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_LogisticalRoundingProfileT` | | ✓ | | | | |
| `_MRPController` | | ✓ | | | | |
| `_MRPGroupText` | | ✓ | | | | |
| `_MRPTypeText` | | ✓ | | | | |
| `_PlanningStrategyGroupText` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ABCClassificationText` | | ✓ | | | | |
| `_ProductionSupervisor` | | ✓ | | | | |
| `_ProductPlant` | | ✓ | | | | |
| `_ProductProcmtProfile` | | ✓ | | | | |
| `_ProductSupplyPlanning` | | ✓ | | | | |
| `_ProductProcmtProfileText` | | ✓ | | | | |
| `_RegionText` | | ✓ | | | | |
| `_SerialNumberProfileText` | | ✓ | | | | |
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
| `_ATPCheckingGroup` | `I_ATPCheckingGroup` | [1..1] |
| `_Country` | `I_Country` | [1..1] |
| `_LogisticalRoundingProfileT` | `I_LogisticalRoundingProfileT` | [0..*] |
| `_MRPController` | `I_MRPController` | [0..1] |
| `_MRPGroupText` | `I_MRPGroupText` | [0..*] |
| `_MRPTypeText` | `I_MRPTypeText` | [0..*] |
| `_PlanningStrategyGroupText` | `I_PlanningStrategyGroupText` | [0..*] |
| `_Plant` | `I_Plant` | [1..1] |
| `_ABCClassificationText` | `I_Prodabclassfctntxt` | [0..*] |
| `_ProductionSupervisor` | `I_ProductionSupervisor` | [0..1] |
| `_ProductPlant` | `I_ProductPlantBasic` | [1..1] |
| `_ProductProcmtProfile` | `I_ProductProcmtProfile` | [1..1] |
| `_ProductSupplyPlanning` | `I_ProductSupplyPlanning` | [0..1] |
| `_ProductProcmtProfileText` | `I_ProductProcmtProfileText` | [0..*] |
| `_RegionText` | `I_RegionText` | [0..*] |
| `_SerialNumberProfileText` | `I_SerialNumberProfileText` | [0..*] |
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
| `_ProductPlantExtension` | `E_Productplant` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRPRODPLNTCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRPRODPLNTCUBE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: [ '_MRPController', '_ProductionSupervisor', '_UserChangedBy', '_UserCreatedBy', '_UserRuleOwner' ]
@Analytics.dataCategory: #CUBE
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'MDQ Score for Product Plant - Cube'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.sapObjectNodeType.name: 'MDQProdPlntEvalAnalyticalScore'
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
define view entity I_MDQAnlytsScrProdPlntCube
  as select from I_MDQltyAnlytsScrProdPlnt

  //plant associations
  association [1..1] to I_ATPCheckingGroup             as _ATPCheckingGroup             on  _ATPCheckingGroup.ATPCheckingGroup = $projection.availabilitychecktype
  association [1..1] to I_Country                      as _Country                      on  _Country.Country = $projection.countryoforigin
  association [0..*] to I_LogisticalRoundingProfileT   as _LogisticalRoundingProfileT   on  _LogisticalRoundingProfileT.Plant                     = $projection.Plant
                                                                                        and _LogisticalRoundingProfileT.LogisticalRoundingProfile = $projection.roundingprofile
  association [0..1] to I_MRPController                as _MRPController                on  _MRPController.Plant         = $projection.Plant
                                                                                        and _MRPController.MRPController = $projection.mrpresponsible
  association [0..*] to I_MRPGroupText                 as _MRPGroupText                 on  _MRPGroupText.MRPPlant = $projection.Plant
                                                                                        and _MRPGroupText.MRPGroup = $projection.mrpgroup
  association [0..*] to I_MRPTypeText                  as _MRPTypeText                  on  _MRPTypeText.MRPType = $projection.mrptype
  association [0..*] to I_PlanningStrategyGroupText    as _PlanningStrategyGroupText    on  _PlanningStrategyGroupText.PlanningStrategyGroup = $projection.planningstrategygroup
  association [1..1] to I_Plant                        as _Plant                        on  _Plant.Plant = $projection.Plant
  association [0..*] to I_Prodabclassfctntxt           as _ABCClassificationText        on  _ABCClassificationText.MaterialABCClassification = $projection.abcindicator
  association [0..1] to I_ProductionSupervisor         as _ProductionSupervisor         on  _ProductionSupervisor.Plant                = $projection.Plant
                                                                                        and _ProductionSupervisor.ProductionSupervisor = $projection.productionsupervisor
  association [1..1] to I_ProductPlantBasic            as _ProductPlant                 on  _ProductPlant.Product = $projection.Product
                                                                                        and _ProductPlant.Plant   = $projection.Plant
  association [1..1] to I_ProductProcmtProfile         as _ProductProcmtProfile         on  _ProductProcmtProfile.Plant              = $projection.Plant
                                                                                        and _ProductProcmtProfile.ProcurementSubType = $projection.costingspecialprocurementtype
  association [0..1] to I_ProductSupplyPlanning        as _ProductSupplyPlanning        on  _ProductSupplyPlanning.Product = $projection.Product
                                                                                        and _ProductSupplyPlanning.Plant   = $projection.Plant
  association [0..*] to I_ProductProcmtProfileText     as _ProductProcmtProfileText     on  _ProductProcmtProfileText.Plant              = $projection.Plant
                                                                                        and _ProductProcmtProfileText.ProcurementSubType = $projection.procurementsubtype
  association [0..*] to I_RegionText                   as _RegionText                   on  _RegionText.Region  = $projection.regionoforigin
                                                                                        and _RegionText.Country = $projection.countryoforigin
  association [0..*] to I_SerialNumberProfileText      as _SerialNumberProfileText      on _SerialNumberProfileText.SerialNumberProfile = $projection.serialnumberprofile
  

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
  association [0..1] to E_Productplant                 as _ProductPlantExtension        on  _ProductPlantExtension.Product = $projection.Product
                                                                                        and _ProductPlantExtension.Plant   = $projection.Plant
{
  key MasterDataChangeProcess,
      @ObjectModel.text.association: '_ProductText'
  key Product,
      @ObjectModel.foreignKey.association: '_Plant'
  key Plant,
  key MDQualityBusinessRuleUUID,
  key MDQltyBusRuleEvalResultCode,

      //plant data
      @ObjectModel.text.association: '_ABCClassificationText'
      _ProductPlant.ABCIndicator,
      @ObjectModel.foreignKey.association: '_ATPCheckingGroup'
      _ProductPlant.AvailabilityCheckType,
      @ObjectModel.foreignKey.association: '_ProductProcmtProfile'
      _ProductPlant._ProductPlantCosting.CostingSpecialProcurementType,
      @ObjectModel.foreignKey.association: '_Country'
      _ProductPlant.CountryOfOrigin,
      _ProductSupplyPlanning.DependentRequirementsType,
      _ProductPlant._PlantProcurement.IsAutoPurOrdCreationAllowed,
      @ObjectModel.text.association: '_LoadingGroupText'
      _ProductPlant._PlantSales.LoadingGroup,
      @ObjectModel.text.association: '_LotSizingProcedureText'
      _ProductPlant._MaterialLotSizingProcedure.LotSizingProcedure,
      _ProductSupplyPlanning.MRPAvailabilityType,
      @ObjectModel.text.association: '_MRPGroupText'
      _ProductSupplyPlanning.MRPGroup,
      _ProductSupplyPlanning.MRPPlanningCalendar,
      @ObjectModel.foreignKey.association: '_MRPController'
      _ProductPlant.MRPResponsible,
      @ObjectModel.text.association: '_MRPTypeText'
      _ProductSupplyPlanning.MRPType,
      @ObjectModel.text.association: '_PlanningStrategyGroupText'
      _ProductSupplyPlanning.PlanningStrategyGroup,
      @ObjectModel.text.association:'_ProductProcmtProfileText'
      _ProductSupplyPlanning.ProcurementSubType,
      @ObjectModel.text.association:'_ProdProcurementTypeText'
      _ProductSupplyPlanning.ProcurementType,
      @ObjectModel.foreignKey.association: '_ProductionSupervisor'
      _ProductPlant.ProductionSupervisor,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      _ProductPlant.PurchasingGroup,
      @ObjectModel.foreignKey.association:'_QualityMgmtCtrlKey'
      _ProductPlant._PlantQualityMgmt.QualityMgmtCtrlKey,
      @ObjectModel.text.association: '_RegionText'
      _ProductPlant.RegionOfOrigin,
      @ObjectModel.text.association:'_LogisticalRoundingProfileT'
      _ProductSupplyPlanning.RoundingProfile,
      _ProductSupplyPlanning.SchedulingMarginKey                                                                                                     as SchedulingFloatProfile,
      @ObjectModel.text.association: '_SerialNumberProfileText'
      _ProductPlant.SerialNumberProfile,

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

      //plant associations
      _ABCClassificationText,
      _ATPCheckingGroup,
      _Country,
      _LogisticalRoundingProfileT,
      _MRPController,
      _MRPGroupText,
      _MRPTypeText,
      _PlanningStrategyGroupText,
      _Plant,
      _ProductionSupervisor,
      _ProductPlant,
      _ProductPlant._MaterialLotSizingProcedure._LotSizingProcedureText,
      _ProductPlant._PlantQualityMgmt._QualityMgmtCtrlKey,
      _ProductPlant._PlantSales._LoadingGroupText,
      _ProductPlant._PurchasingGroup,
      _ProductProcmtProfile,
      _ProductProcmtProfileText,
      _ProductSupplyPlanning,
      _ProductSupplyPlanning._ProdProcurementTypeText,
      _RegionText,
      _SerialNumberProfileText,

      @Aggregation.default: #SUM
      MDQltyNmbrOfSuccssflEvalRslts,
      @Aggregation.default: #SUM
      MDQltyNmbrOfFailedEvalRslts,
      @Aggregation.default: #SUM
      MDQltyNmbrOfBusRuleEvalResults,

      @EndUserText.label: '' //element label required by ATC, label defined in query is visible in SAC
      //reducing field length to 250 results in an ATC error
      cast( concat( _FLPHostPath.MDQltyFioriLaunchpadHostPath,
        '#MDQualityEvaluation-displayEvaluationResultPlant?MDQltyBusRuleEvalResultCode=F&MDQltyBusinessObjectTypeCode=194') as mdq_maint_host_path ) as MDQltyProdAlPgNavgnPath
}
```
