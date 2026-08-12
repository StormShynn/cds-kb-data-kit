---
name: I_CMMDTYMTMVALUECUBE
description: "Mark To Market Values for - Cube"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMVALUECUBE')/$value
semantic_en: "Mark To Market Values for - Cube"
semantic_vi: "MtM Values for - Cube — CDS view giao diện dựa trên I_CmmdtyMtmValueExtn."
keywords:
  - "mtm"
  - "values"
  - "for"
  - "cube"
  - "pricing"
  - "version"
  - "document"
  - "item"
  - "condition"
  - "type"
tags:
  - LO
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_CMMDTYMTMVALUECUBE

**Mark To Market Values for - Cube**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMVALUECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingKey` | ✓ | |  |  | `CHAR(40)` | A key required to access versioned pricing data |
| `Version` | ✓ | |  |  | `NUMC(10)` | Version of an MtM Valuation Record |
| `PricingDocumentItem` | ✓ | |  |  | `NUMC(6)` | Condition item number |
| `ConditionType` | ✓ | |  |  | `CHAR(4)` | Condition Type |
| `SubConditionType` | ✓ | |  |  | `NUMC(6)` | The key of a sub-condition type |
| `VersStockRecordUUID` | ✓ | |  |  | `RAW(16)` | GUID assigned to the VlogP stock delta record |
| `ValuationDate` | ✓ | |  |  | `DATS(8)` | Latest Evaluation Date |
| `EndOfDaySnapshotDate` | ✓ | |  |  | `DATS(8)` | Snapshot Date |
| `EndOfDayBusinessEntityKey` |  | |  |  | `CHAR(40)` | Key of an Business Entity End-of-day snapshot:Char format |
| `MTMDataSourceType` |  | |  |  | `CHAR(2)` | Type of Data Record |
| `EndOfDaySnapshotDateTimeTo` |  | |  |  | `DEC(15)` | Timestamp defining a End-of-day snapshot |
| `EndOfDaySnapshotDateTimeFrom` |  | |  |  | `DEC(15)` | Timestamp defining a End-of-day snapshot |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `Creditor` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Product` |  | | `_Product` | `Product` | `CHAR(40)` | Product |
| `PhysicalCommodity` |  | |  |  | `CHAR(18)` | Commodity |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `MovementType` |  | | `_MovementType` | `GoodsMovementType` | `CHAR(3)` | Movement Type (Inventory Management) |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `ConditionApplication` |  | |  |  | `CHAR(2)` | Application |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Last Changed Date |
| `SourceDocument` |  | |  |  | `CHAR(20)` | Source Document |
| `SourceDocumentItem` |  | |  |  | `NUMC(6)` | Source Document Item |
| `SourceDocumentBusObjType` |  | |  |  | `CHAR(10)` | Source Document Business Object Type |
| `OriginReferenceDocBusObjType` |  | |  |  | `CHAR(10)` | Root Document (BOR) Object Type |
| `OriginReferenceDocument` |  | |  |  | `CHAR(20)` | Root Document |
| `OriginReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Root Document Item |
| `ReferenceDocBusObjType` |  | |  |  | `CHAR(10)` | Ref (BOR) Object Type |
| `ReferenceDocument` |  | |  |  | `CHAR(20)` | Predecessor Document |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Predecessor Document Item |
| `DeliveryDate` |  | |  |  | `DATS(8)` | Delivery Date |
| `DeliveryYear` |  | |  |  | `CHAR(4)` | Abjusted Reporting Year |
| `DeliveryMonth` |  | |  |  | `CHAR(3)` | Adjusted Reporting Month |
| `ExpectedPaymentDate` |  | |  |  | `DATS(8)` | Payment Date |
| `ExchRateEvaluationDate` |  | |  |  | `DATS(8)` | Exchange Rate Evaluation Date |
| `DocToStstcCrcyExchRateEvalDate` |  | |  |  | `DATS(8)` | Document to Statistics Currency Evaluation Date |
| `StatisticsCurrency` |  | |  |  | `CUKY(5)` | Statistics Currency |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `IsIntercompanyTransfer` |  | |  |  | `CHAR(1)` | Intercompany Transfer |
| `ConditionTermRate` |  | |  |  | `CURR(31)` | Price |
| `MarketToDocExchRate` |  | |  |  | `DEC(20)` | Exchange Rate: Market to Document Currency |
| `ConditionTermRateCurrency` |  | |  |  | `CUKY(5)` | Price Currency |
| `MarketToDocFrozenExchRate` |  | |  |  | `DEC(20)` | Exchange Rate: Market to Document Currency at a Key Date |
| `ConditionTermRateQuantity` |  | |  |  | `DEC(5)` | Price Unit |
| `ConditionTermRateQuantityUnit` |  | |  |  | `UNIT(3)` | Price UoM |
| `ConditionTermValueInDocCrcy` |  | |  |  | `DEC(31)` | Value in Document Currency |
| `ConditionTermValueInStstcCrcy` |  | |  |  | `CURR(31)` | Value in Statistical Currency |
| `DocToStatisticalExchRate` |  | |  |  | `DEC(20)` | Exchange Rate: Document to Statistics Currency |
| `BasisID` |  | |  |  | `CHAR(18)` | Basis ID |
| `DerivativeContrSpecification` |  | |  |  | `CHAR(20)` | Derivative Contract Specification ID |
| `MarketIdentifierCode` |  | |  |  | `CHAR(4)` | Market Identifier Code |
| `MaturityKeyDate` |  | |  |  | `DATS(8)` | Maturity Key Date |
| `DerivativeContractMaturityCode` |  | |  |  | `CHAR(13)` | Contract Maturity Code |
| `MarketPriceCurrency` |  | |  |  | `CUKY(5)` | Market Price Currency |
| `OldestQuotationDate` |  | |  |  | `DATS(8)` | Oldest Quotation Date |
| `QuotationPeriodReferenceDate` |  | |  |  | `DATS(8)` | Reference Date |
| `HasError` |  | |  |  | `CHAR(1)` | Flag: Error occured |
| `SystemMessageNumber` |  | |  |  | `CHAR(3)` | System Message Number |
| `CommodityQuantity` |  | |  |  | `QUAN(17)` | Commodity Quantity |
| `CommodityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Commodity |
| `CommodityQuantityInTermUnit` |  | |  |  | `QUAN(17)` | Commodity Quantity in Price Unit |
| `MTMCalculationGroup` |  | |  |  | `CHAR(1)` | MtM Calculation Group |
| `MTMConditionGroup` |  | |  |  | `CHAR(1)` | MtM Condition Group |
| `MTMConditionGroupCategory` |  | |  |  | `CHAR(1)` | Categorization of Condition Group |
| `MTMAdjustmentType` |  | |  |  | `CHAR(2)` | Type of adjustment for the MtM or TPL calculation |
| `ConditionTermRateIsFixed` |  | |  |  | `CHAR(1)` | Indicates that the term is fixed |
| `ConditionTermExchRateIsFixed` |  | |  |  | `CHAR(1)` | Indicates that the term is fixed |
| `ConditionTermRateFixation` |  | |  |  | `NUMC(5)` | Fixation ID |
| `ConditionTermFactor` |  | |  |  | `DEC(10)` | CPE condition type term factor |
| `PricingStatus` |  | |  |  | `CHAR(2)` | Future/Basis Price Fixation Status |
| `CmmdtyForwardIndexTiming` |  | |  |  | `NUMC(2)` | Timing/Periodicity of Commodity Forward Indexes |
| `CmmdtyForwardIndexTimingText` |  | | `_CmmdtyForwardIndexTimingText` | `DomainText` | `CHAR(60)` | Short Text for Fixed Values |
| `CndnTermRateFixationDate` |  | |  |  | `DATS(8)` | Rate Fixation Date |
| `CndnTermRateFixationTime` |  | |  |  | `TIMS(6)` | Rate Fixation Time |
| `CndnTermExchRateFixationDate` |  | |  |  | `DATS(8)` | FX Fixation Date |
| `CndnTermExchRateFixationTime` |  | |  |  | `TIMS(6)` | FX Fixation Time |
| `ExchRateMaturityDate` |  | |  |  | `DATS(8)` | Maturity Date |
| `BsMktRefDrvtvContrMaturityCode` |  | |  |  | `CHAR(13)` | Basis Market Reference Contract Maturity Code |
| `BasisMarketRefRate` |  | |  |  | `DEC(20)` | Original Basis Market reference rate |
| `BasisMarketRefRateCurrency` |  | |  |  | `CUKY(5)` | Adjustment Value Currency |
| `BasisMarketRefKeyDate` |  | |  |  | `DATS(8)` | Basis Market reference maturity keydate |
| `BasisMarketRefAdjustmentSpread` |  | |  |  | `DEC(20)` | Adjustment Value |
| `CmmdtyPriceExpsrQtyInMassUnit` |  | |  |  | `QUAN(17)` | Open Commodity Quantity In MASS |
| `CmmdtyPriceExpsrMassUnit` |  | |  |  | `UNIT(3)` | Mass Unit of Measure |
| `CmmdtyPriceExpsrQtyInVolUnit` |  | |  |  | `QUAN(17)` | Open Commodity Quantity In Volume |
| `CmmdtyPriceExpsrVolumeUnit` |  | |  |  | `UNIT(3)` | QuantityVolume UoM |
| `PricedContractsExposureQty` |  | |  |  | `QUAN(31)` | Priced Contract Quantity |
| `UnpricedContrPriceExposureQty` |  | |  |  | `QUAN(31)` | Unpriced Contract Quantity |
| `TodayPricedContractsExpsrQty` |  | |  |  | `QUAN(31)` | Today Unpriced Not Realized Quantity |
| `PrcdContrExposureQtyInMassUnit` |  | |  |  | `QUAN(31)` | Priced Quantity(Mass UoM) |
| `UnpricedContrPrcExpsrQtyInMass` |  | |  |  | `QUAN(31)` | Unpriced Quantity(Mass UoM) |
| `TodayPrcdContrExpsrQtyInMass` |  | |  |  | `QUAN(31)` | Today Quantity(Mass UoM) |
| `PrcdContrExpsrQtyInVolumeUnit` |  | |  |  | `QUAN(31)` | Priced Quantity(Volume UoM) |
| `UnpricedContrPrcExpsrQtyInVol` |  | |  |  | `QUAN(31)` | Unpriced Quantity(Volume UoM) |
| `TodayPrcdContrExpsrQtyInVolume` |  | |  |  | `QUAN(31)` | Today Quantity(Volume UoM) |
| `ContrPriceExposureIsExecuted` |  | |  |  | `CHAR(1)` | Indicates that the goods movement has been executed |
| `NmbrOfPrcdQuotationPeriodDays` |  | |  |  | `INT8(19)` | Number of priced quotation days until latest evaluation date |
| `NmbrOfUnpricedQtanPeriodDays` |  | |  |  | `INT8(19)` | No of unpriced quotation days after latest evaluation date |
| `NmbrOfValnDtePrcdQtanPerdDays` |  | |  |  | `INT8(19)` | Number of today's priced quotation days at latest eval. date |
| `PriceSettingMethod` |  | |  |  | `NUMC(5)` | Price Setting Method |
| `PriceSettingMethodStatus` |  | |  |  | `NUMC(5)` | Price Setting Method Status |
| `ValidToDateTime` |  | |  |  | `DEC(15)` | Valid-To Timestamp |
| `PricingProcedure` |  | |  |  | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `PricingConditionTerm` |  | |  |  | `NUMC(5)` | CPE Term - Number in Formula |
| `CmmdtyRootDocExternalNumber` |  | |  |  | `CHAR(75)` | External Number of Root Document |
| `CmmdtyDocumentExternalNumber` |  | |  |  | `CHAR(75)` | External Number of Document |
| `_ConditionTermRateQuantityUnit` | | ✓ | | | | |
| `_CommodityMassUnit` | | ✓ | | | | |
| `_CommodityVolumeUnit` | | ✓ | | | | |
| `_StatisticsCurrency` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_MarketPriceCurrency` | | ✓ | | | | |
| `_ConditionTermRateCurrency` | | ✓ | | | | |
| `_CommodityUnit` | | ✓ | | | | |
| `_MTMDataSourceType` | | ✓ | | | | |
| `_MTMConditionGroup` | | ✓ | | | | |
| `_MTMConditionGroupCategory` | | ✓ | | | | |
| `_MTMAdjustmentType` | | ✓ | | | | |
| `_MTMCalculationGroup` | | ✓ | | | | |
| `_PhysicalCmmdty` | | ✓ | | | | |
| `_BasisID` | | ✓ | | | | |
| `_SourceDocumentBusObjType` | | ✓ | | | | |
| `_ReferenceDocBusObjType` | | ✓ | | | | |
| `_OriginReferenceDocBusObjType` | | ✓ | | | | |
| `_PricingStatus` | | ✓ | | | | |
| `_Creditor` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_DerivativeContrSpecification` | | ✓ | | | | |
| `_MarketIdentCode` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_CmmdtyMtmMessage` | | ✓ | | | | |
| `_GoodsMovementType` | | ✓ | | | | |
| `_MovementType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionTermRateQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CommodityMassUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CommodityVolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_StatisticsCurrency` | `I_Currency` | [0..1] |
| `_DocumentCurrency` | `I_Currency` | [0..1] |
| `_MarketPriceCurrency` | `I_Currency` | [0..1] |
| `_ConditionTermRateCurrency` | `I_Currency` | [0..1] |
| `_CommodityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_MTMDataSourceType` | `I_MtmDataSourceType` | [0..1] |
| `_MTMConditionGroup` | `I_MtmConditionGroup` | [0..1] |
| `_MTMConditionGroupCategory` | `I_Mtmconditiongroupcategory` | [0..1] |
| `_MTMAdjustmentType` | `I_MtmAdjustmentType` | [0..1] |
| `_MTMCalculationGroup` | `I_MtmCalculationGroup` | [0..1] |
| `_PhysicalCmmdty` | `I_Cmmdty` | [0..1] |
| `_BasisID` | `I_BasisID` | [0..1] |
| `_SourceDocumentBusObjType` | `I_BusinessObjType` | [0..1] |
| `_ReferenceDocBusObjType` | `I_BusinessObjType` | [0..1] |
| `_OriginReferenceDocBusObjType` | `I_BusinessObjType` | [0..1] |
| `_PricingStatus` | `I_PricingStatus` | [0..1] |
| `_Creditor` | `I_Supplier` | [0..1] |
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_Text` | `I_ProfitCenterText` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [1..1] |
| `_Material` | `I_Product` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_DerivativeContrSpecification` | `I_DerivativeContrSpec` | [0..1] |
| `_MarketIdentCode` | `I_MarketIdentCode` | [0..1] |
| `_IncotermsClassification` | `I_IncotermsClassification` | [0..1] |
| `_CmmdtyMtmMessage` | `I_CmmdtyMtmMessage` | [0..*] |
| `_GoodsMovementType` | `I_GoodsMovementType` | [0..1] |
| `_MovementType` | `I_GoodsMovementType` | [0..1] |
| `_CmmdtyForwardIndexTimingText` | `I_DomainFixedValueText` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMVALUECUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMVALUECUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICMMDTYMTMVALUEC'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
--@Consumption.dbHints: ['CS_JOIN']
@AccessControl.authorizationCheck: #CHECK
@Analytics.dataCategory:#CUBE
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'MtM Values for - Cube'
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true

define view I_CmmdtyMtmValueCube
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_EvaluationDate           :cmm_eval_keydate, -- valuation key date
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_ExchRateEvaluationDate   :cmm_eval_keydate, -- FX valuation date
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_EndOfDaySnapshotFromDate :cmm_dend_cutdate, -- date of snapshot to be selected
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_EndOfDaySnapshotToDate   :cmm_dend_cutdate, -- date of snapshot to be selected
    @Consumption.defaultValue: '1'
    P_MTMDataSelectionType     :cmm_vlogp_consumptiontype -- consumption type
  as select from I_CmmdtyMtmValueExtn( P_EvaluationDate:            :P_EvaluationDate, -- valuation key date
                                       P_ExchRateEvaluationDate:    :P_ExchRateEvaluationDate, -- FX valuation date
                                       P_EndOfDaySnapshotFromDate:  :P_EndOfDaySnapshotFromDate, -- date of snapshot to be selected
                                       P_EndOfDaySnapshotToDate:    :P_EndOfDaySnapshotToDate, -- date of snapshot to be selected
                                       P_MTMDataSelectionType:      :P_MTMDataSelectionType ) -- consumption type
  association [0..1] to I_UnitOfMeasure             as _ConditionTermRateQuantityUnit on  $projection.ConditionTermRateQuantityUnit = _ConditionTermRateQuantityUnit.UnitOfMeasure

  association [0..1] to I_UnitOfMeasure             as _CommodityMassUnit             on  $projection.CmmdtyPriceExpsrMassUnit = _CommodityMassUnit.UnitOfMeasure

  association [0..1] to I_UnitOfMeasure             as _CommodityVolumeUnit           on  $projection.CmmdtyPriceExpsrVolumeUnit = _CommodityVolumeUnit.UnitOfMeasure

  association [0..1] to I_Currency                  as _StatisticsCurrency            on  $projection.StatisticsCurrency = _StatisticsCurrency.Currency
  association [0..1] to I_Currency                  as _DocumentCurrency              on  $projection.DocumentCurrency = _DocumentCurrency.Currency
  association [0..1] to I_Currency                  as _MarketPriceCurrency           on  $projection.MarketPriceCurrency = _MarketPriceCurrency.Currency
  association [0..1] to I_Currency                  as _ConditionTermRateCurrency     on  $projection.ConditionTermRateCurrency = _ConditionTermRateCurrency.Currency
  association [0..1] to I_UnitOfMeasure             as _CommodityUnit                 on  $projection.CommodityUnit = _CommodityUnit.UnitOfMeasure
  association [0..1] to I_MtmDataSourceType         as _MTMDataSourceType             on  $projection.MTMDataSourceType = _MTMDataSourceType.MTMDataSourceType
  association [0..1] to I_MtmConditionGroup         as _MTMConditionGroup             on  $projection.MTMConditionGroup = _MTMConditionGroup.MTMConditionGroup
  association [0..1] to I_Mtmconditiongroupcategory as _MTMConditionGroupCategory     on  $projection.MTMConditionGroupCategory = _MTMConditionGroupCategory.MTMConditionGroupCategory
  association [0..1] to I_MtmAdjustmentType         as _MTMAdjustmentType             on  $projection.MTMAdjustmentType = _MTMAdjustmentType.MTMAdjustmentType
  association [0..1] to I_MtmCalculationGroup       as _MTMCalculationGroup           on  $projection.MTMCalculationGroup = _MTMCalculationGroup.MTMCalculationGroup
  association [0..1] to I_Cmmdty                    as _PhysicalCmmdty                on  $projection.PhysicalCommodity = _PhysicalCmmdty.Commodity
  association [0..1] to I_BasisID                   as _BasisID                       on  $projection.BasisID = _BasisID.BasisID
  association [0..1] to I_BusinessObjType           as _SourceDocumentBusObjType      on  $projection.SourceDocumentBusObjType = _SourceDocumentBusObjType.BusinessObjectType
  association [0..1] to I_BusinessObjType           as _ReferenceDocBusObjType        on  $projection.ReferenceDocBusObjType = _ReferenceDocBusObjType.BusinessObjectType
  association [0..1] to I_BusinessObjType           as _OriginReferenceDocBusObjType  on  $projection.OriginReferenceDocBusObjType = _OriginReferenceDocBusObjType.BusinessObjectType
  association [0..1] to I_PricingStatus             as _PricingStatus                 on  $projection.PricingStatus = _PricingStatus.PricingStatus
  association [0..1] to I_Supplier                  as _Creditor                      on  $projection.Creditor = _Creditor.Supplier
  association [0..1] to I_Customer                  as _SoldToParty                   on  $projection.SoldToParty = _SoldToParty.Customer
  association [0..1] to I_Plant                     as _Plant                         on  $projection.Plant = _Plant.Plant
  association [0..1] to I_StorageLocation           as _StorageLocation               on  $projection.Plant           = _StorageLocation.Plant
                                                                                      and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [0..*] to I_ProfitCenter              as _ProfitCenter                  on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                      and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..*] to I_ProfitCenterText          as _Text                          on  $projection.ControllingArea = _Text.ControllingArea
                                                                                      and $projection.ProfitCenter    = _Text.ProfitCenter
  association [1..1] to I_ControllingArea           as _ControllingArea               on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_Product                   as _Material                      on  $projection.Material = _Material.Product
  association [0..1] to I_Product                   as _Product                       on  $projection.product = _Product.Product
  association [0..1] to I_DerivativeContrSpec       as _DerivativeContrSpecification  on  $projection.DerivativeContrSpecification = _DerivativeContrSpecification.DerivativeContrSpecification
  association [0..1] to I_MarketIdentCode           as _MarketIdentCode               on  $projection.MarketIdentifierCode = _MarketIdentCode.MarketIdentifierCode
  association [0..1] to I_IncotermsClassification   as _IncotermsClassification       on  $projection.IncotermsClassification = _IncotermsClassification.IncotermsClassification
  association [0..*] to I_CmmdtyMtmMessage          as _CmmdtyMtmMessage              on  $projection.SystemMessageNumber = _CmmdtyMtmMessage.SystemMessageNumber
  association [0..1] to I_GoodsMovementType         as _GoodsMovementType             on  $projection.GoodsMovementType = _GoodsMovementType.GoodsMovementType
  association [0..1] to I_GoodsMovementType         as _MovementType                  on  $projection.MovementType = _MovementType.GoodsMovementType
  association [0..1] to I_DomainFixedValueText      as _CmmdtyForwardIndexTimingText  on  $projection.CmmdtyForwardIndexTiming                  = _CmmdtyForwardIndexTimingText.DomainValue
                                                                                      and _CmmdtyForwardIndexTimingText.Language                = 'E'
                                                                                      and _CmmdtyForwardIndexTimingText.SAPDataDictionaryDomain = 'TBA_TIMING'

{
  key PricingKey,
  key Version,
  key PricingDocumentItem,
  key ConditionType,
  key SubConditionType,
  key VersStockRecordUUID,
  key ValuationDate,
  key EndOfDaySnapshotDate,

      EndOfDayBusinessEntityKey,

      @ObjectModel.foreignKey.association: '_MTMDataSourceType'
      MTMDataSourceType,
      _MTMDataSourceType,

      EndOfDaySnapshotDateTimeTo,
      EndOfDaySnapshotDateTimeFrom,

      -- Business Document
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      _CompanyCode,

      SalesOrganization,
      DistributionChannel,
      Division,

      @ObjectModel.foreignKey.association:'_Creditor'
      Creditor,
      _Creditor,

      @ObjectModel.foreignKey.association:'_SoldToParty'
      SoldToParty,
      _SoldToParty,

      @ObjectModel.foreignKey.association:'_Material'
      Material,
      _Material,

      @ObjectModel.foreignKey.association: '_Product'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Product', element: 'Product' } } ]
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'Material'
      _Product.Product,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Material'
      _Product,

      @ObjectModel.foreignKey.association:'_PhysicalCmmdty'
      PhysicalCommodity,
      _PhysicalCmmdty,

      @ObjectModel.foreignKey.association:'_Plant'
      Plant,
      _Plant,

      @ObjectModel.foreignKey.association:'_StorageLocation'
      StorageLocation,
      _StorageLocation,

      Batch,

      @ObjectModel.foreignKey.association:'_GoodsMovementType'
      GoodsMovementType,  -- n_2464020
      _GoodsMovementType, -- n_2464020

      @ObjectModel.foreignKey.association: '_MovementType'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_GoodsMovementType', element: 'GoodsMovementType' } } ]
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'GoodsMovementType'
      _MovementType.GoodsMovementType          as MovementType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_GoodsMovementType'
      _MovementType,


      @ObjectModel.foreignKey.association:'_IncotermsClassification'
      IncotermsClassification,
      _IncotermsClassification,

      IncotermsTransferLocation,
      ConditionApplication,
      ValidityStartDate,
      SourceDocument,
      SourceDocumentItem,

      @ObjectModel.foreignKey.association:'_SourceDocumentBusObjType'
      SourceDocumentBusObjType,
      _SourceDocumentBusObjType,

      @ObjectModel.foreignKey.association:'_OriginReferenceDocBusObjType'
      OriginReferenceDocBusObjType,
      _OriginReferenceDocBusObjType,

      OriginReferenceDocument,
      OriginReferenceDocumentItem,

      @ObjectModel.foreignKey.association:'_ReferenceDocBusObjType'
      ReferenceDocBusObjType,
      _ReferenceDocBusObjType,

      ReferenceDocument,
      ReferenceDocumentItem,
      DeliveryDate,
      DeliveryYear,
      DeliveryMonth,
      ExpectedPaymentDate,
      ExchRateEvaluationDate,
      DocToStstcCrcyExchRateEvalDate,

      @ObjectModel.foreignKey.association:'_StatisticsCurrency'
      @Semantics.currencyCode: true
      StatisticsCurrency,
      _StatisticsCurrency,

      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      @Semantics.currencyCode: true
      DocumentCurrency,
      _DocumentCurrency,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      _ControllingArea,

      _Text,
      @ObjectModel.text.association: '_Text'
      ProfitCenter,
      _ProfitCenter,

      BusinessArea,
      PurchasingOrganization,
      MaterialGroup,
      IsIntercompanyTransfer,

      -- Commodity Pricing Engine
      -- @OData.v2.amount.noDecimalShift: true
      @Semantics.amount.currencyCode: 'ConditionTermRateCurrency'
      @DefaultAggregation:#SUM
      ConditionTermRate,
      @DefaultAggregation:#SUM  
      MarketToDocExchRate,

      @ObjectModel.foreignKey.association:'_ConditionTermRateCurrency'
      @Semantics.currencyCode: true
      ConditionTermRateCurrency,
      _ConditionTermRateCurrency,

      @DefaultAggregation:#SUM
      MarketToDocFrozenExchRate,
      @DefaultAggregation: #NONE
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      ConditionTermRateQuantity,

      @ObjectModel.foreignKey.association:'_ConditionTermRateQuantityUnit'
      @Semantics.unitOfMeasure: true
      ConditionTermRateQuantityUnit,
      _ConditionTermRateQuantityUnit,



      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @OData.v2.amount.noDecimalShift: true
      ConditionTermValueInDocCrcy,
      //      @OData.v2.amount.noDecimalShift: true
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'StatisticsCurrency'
      ConditionTermValueInStstcCrcy,
      @DefaultAggregation:#SUM     
      DocToStatisticalExchRate,

      -- Quotations / Commodity Curve
      @ObjectModel.foreignKey.association:'_BasisID'
      BasisID,
      _BasisID,

      @ObjectModel.foreignKey.association:'_DerivativeContrSpecification'
      DerivativeContrSpecification,
      _DerivativeContrSpecification,

      @ObjectModel.foreignKey.association:'_MarketIdentCode'
      MarketIdentifierCode,
      _MarketIdentCode,

      MaturityKeyDate,
      DerivativeContractMaturityCode,

      @ObjectModel.foreignKey.association:'_MarketPriceCurrency'
      @Semantics.currencyCode: true
      MarketPriceCurrency,
      _MarketPriceCurrency,

      OldestQuotationDate,
      QuotationPeriodReferenceDate,

      HasError,
      @ObjectModel.foreignKey.association:'_CmmdtyMtmMessage'
      SystemMessageNumber,
      _CmmdtyMtmMessage,

      -- Miscellanous fields
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      CommodityQuantity,

      @ObjectModel.foreignKey.association:'_CommodityUnit'
      @Semantics.unitOfMeasure: true
      CommodityUnit,
      _CommodityUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ConditionTermRateQuantityUnit'
      CommodityQuantityInTermUnit,

      @ObjectModel.foreignKey.association:'_MTMCalculationGroup'
      MTMCalculationGroup,
      _MTMCalculationGroup,

      @ObjectModel.foreignKey.association:'_MTMConditionGroup'
      MTMConditionGroup,
      _MTMConditionGroup,


      @ObjectModel.foreignKey.association:'_MTMConditionGroupCategory'
      MTMConditionGroupCategory,
      _MTMConditionGroupCategory,

      @ObjectModel.foreignKey.association: '_MTMAdjustmentType'
      MTMAdjustmentType,
      _MTMAdjustmentType,

      ConditionTermRateIsFixed,
      ConditionTermExchRateIsFixed,
      ConditionTermRateFixation,
      @DefaultAggregation:#MAX
      ConditionTermFactor,

      @ObjectModel.foreignKey.association: '_PricingStatus'
      PricingStatus,
      _PricingStatus,

      CmmdtyForwardIndexTiming,
      _CmmdtyForwardIndexTimingText.DomainText as CmmdtyForwardIndexTimingText,

      CndnTermRateFixationDate,
      CndnTermRateFixationTime,
      CndnTermExchRateFixationDate,
      CndnTermExchRateFixationTime,
      ExchRateMaturityDate,
      BsMktRefDrvtvContrMaturityCode,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'MarketPriceCurrency'
      @OData.v2.amount.noDecimalShift: true
      BasisMarketRefRate,
      @Semantics.currencyCode: true
      BasisMarketRefRateCurrency,
      BasisMarketRefKeyDate,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'BasisMarketRefRateCurrency'
      @OData.v2.amount.noDecimalShift: true
      BasisMarketRefAdjustmentSpread,

      @DefaultAggregation:#SUM
      @Semantics.quantity.unitOfMeasure: 'CmmdtyPriceExpsrMassUnit'
      CmmdtyPriceExpsrQtyInMassUnit,

      @ObjectModel.foreignKey.association:'_CommodityMassUnit'
      @Semantics.unitOfMeasure: true
      CmmdtyPriceExpsrMassUnit,
      _CommodityMassUnit,

      @DefaultAggregation:#SUM
      @Semantics.quantity.unitOfMeasure: 'CmmdtyPriceExpsrVolumeUnit'
      CmmdtyPriceExpsrQtyInVolUnit,
      _CommodityVolumeUnit,

      @ObjectModel.foreignKey.association:'_CommodityVolumeUnit'
      @Semantics.unitOfMeasure: true
      CmmdtyPriceExpsrVolumeUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      PricedContractsExposureQty,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      UnpricedContrPriceExposureQty,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      TodayPricedContractsExpsrQty,
      @DefaultAggregation:#SUM
      @Semantics.quantity.unitOfMeasure: 'CmmdtyPriceExpsrMassUnit'
      PrcdContrExposureQtyInMassUnit,
      @DefaultAggregation:#SUM
      @Semantics.quantity.unitOfMeasure: 'CmmdtyPriceExpsrMassUnit'
      UnpricedContrPrcExpsrQtyInMass,
      @DefaultAggregation:#SUM
      @Semantics.quantity.unitOfMeasure: 'CmmdtyPriceExpsrMassUnit'
      TodayPrcdContrExpsrQtyInMass,
      @DefaultAggregation:#SUM
      @Semantics.quantity.unitOfMeasure: 'CmmdtyPriceExpsrVolumeUnit'
      PrcdContrExpsrQtyInVolumeUnit,
      @DefaultAggregation:#SUM
      @Semantics.quantity.unitOfMeasure: 'CmmdtyPriceExpsrVolumeUnit'
      UnpricedContrPrcExpsrQtyInVol,
      @DefaultAggregation:#SUM
      @Semantics.quantity.unitOfMeasure: 'CmmdtyPriceExpsrVolumeUnit'
      TodayPrcdContrExpsrQtyInVolume,
      ContrPriceExposureIsExecuted,
      NmbrOfPrcdQuotationPeriodDays,
      NmbrOfUnpricedQtanPeriodDays,
      NmbrOfValnDtePrcdQtanPerdDays,
      PriceSettingMethod,
      PriceSettingMethodStatus,
      ValidToDateTime,
      PricingProcedure,
      PricingConditionTerm,
      CmmdtyRootDocExternalNumber,
      CmmdtyDocumentExternalNumber   

}
```
