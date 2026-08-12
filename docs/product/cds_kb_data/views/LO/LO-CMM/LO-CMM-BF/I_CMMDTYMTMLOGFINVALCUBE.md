---
name: I_CMMDTYMTMLOGFINVALCUBE
description: "Union Mark To Market - Cube"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMLOGFINVALCUBE')/$value
semantic_en: "Union Mark To Market - Cube"
semantic_vi: "Union MtM - Cube — CDS view giao diện dựa trên I_CmmdtyMTMLogFinValue."
keywords:
  - "union"
  - "mtm"
  - "cube"
  - "pricing"
  - "version"
  - "document"
  - "item"
  - "condition"
  - "type"
tags:
  - LO
  - bo:companycode
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_CMMDTYMTMLOGFINVALCUBE

**Union Mark To Market - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMLOGFINVALCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingKey` | ✓ | |  |  | `CHAR(40)` | A key required to access versioned pricing data |
| `Version` | ✓ | |  |  | `NUMC(10)` | Version of an MtM Valuation Record |
| `PricingDocumentItem` | ✓ | |  |  | `NUMC(6)` | Condition item number |
| `ConditionType` | ✓ | |  |  | `CHAR(4)` | Condition Type |
| `SubConditionType` | ✓ | |  |  | `NUMC(6)` | The key of a sub-condition type |
| `VersStockRecordUUID` | ✓ | |  |  | `RAW(16)` | GUID assigned to the VlogP stock delta record |
| `EndOfDaySnapshotDate` | ✓ | |  |  | `DATS(8)` | Snapshot Date |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `CommodityPriceExposure` | ✓ | |  |  | `CHAR(13)` | Commodity Price Exposure ID |
| `CommodityExposureCategory` | ✓ | |  |  | `CHAR(2)` | Exposure Category |
| `CommodityPriceSubExposure` | ✓ | |  |  | `CHAR(40)` | Hash key |
| `EndOfDaySnapshotDateTimeFrom` |  | |  |  | `DEC(15)` | Timestamp defining a End-of-day snapshot |
| `EndOfDaySnapshotDateTimeTo` |  | |  |  | `DEC(15)` | Timestamp defining a End-of-day snapshot |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `Creditor` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `ConditionApplication` |  | |  |  | `CHAR(2)` | Application |
| `ReferenceDocument` |  | |  |  | `CHAR(20)` | Predecessor Document |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Predecessor Document Item |
| `ReferenceDocBusObjType` |  | |  |  | `CHAR(10)` | Ref (BOR) Object Type |
| `ExpectedPaymentDate` |  | |  |  | `DATS(8)` | Payment Date |
| `ExchRateEvaluationDate` |  | |  |  | `DATS(8)` | Exchange Rate Evaluation Date |
| `DocToStstcCrcyExchRateEvalDate` |  | |  |  | `DATS(8)` | Document to Statistics Currency Evaluation Date |
| `QuotationPeriodReferenceDate` |  | |  |  | `DATS(8)` | Reference Date |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `IsIntercompanyTransfer` |  | |  |  | `CHAR(1)` | Intercompany Transfer |
| `MarketToDocFrozenExchRate` |  | |  |  | `DEC(20)` | Exchange Rate: Market to Document Currency at a Key Date |
| `ConditionTermRateQuantity` |  | |  |  | `DEC(5)` | Price Unit |
| `ConditionTermRateQuantityUnit` |  | |  |  | `UNIT(3)` | Price UoM |
| `ConditionTermValueCurrency` |  | |  |  | `CUKY(5)` | CPE Term - Currency |
| `BasisID` |  | |  |  | `CHAR(18)` | Basis ID |
| `BasisType` |  | |  |  | `CHAR(3)` | Basis Type |
| `QuotationPriceType` |  | |  |  | `CHAR(2)` | Type of Price Quotation |
| `MarketPriceCurrency` |  | |  |  | `CUKY(5)` | Market Price Currency |
| `OldestQuotationDate` |  | |  |  | `DATS(8)` | Oldest Quotation Date |
| `SystemMessageNumber` |  | |  |  | `CHAR(3)` | System Message Number |
| `MTMConditionGroupCategory` |  | |  |  | `CHAR(1)` | Categorization of Condition Group |
| `MTMConditionGroup` |  | |  |  | `CHAR(1)` | MtM Condition Group |
| `MTMCalculationGroup` |  | |  |  | `CHAR(1)` | MtM Calculation Group |
| `MTMAdjustmentType` |  | |  |  | `CHAR(2)` | Type of adjustment for the MtM or TPL calculation |
| `MTMCalcGrpMarketPriceCondition` |  | |  |  | `CHAR(4)` | Market Price Condition within a calculation group |
| `ConditionTermExchRateIsFixed` |  | |  |  | `CHAR(1)` | Indicates that the term is fixed |
| `ConditionTermRateFixation` |  | |  |  | `NUMC(5)` | Fixation ID |
| `PricingStatus` |  | |  |  | `CHAR(2)` | Future/Basis Price Fixation Status |
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
| `ConditionTermFactor` |  | |  |  | `DEC(10)` | CPE condition type term factor |
| `ConditionTermRateIsFixed` |  | |  |  | `CHAR(1)` | Indicates that the term is fixed |
| `ValidityStartDateTime` |  | |  |  | `DEC(15)` | Valid-From Timestamp of Commodity Derivative |
| `ValidityEndDateTime` |  | |  |  | `DEC(15)` | Valid-To Timestamp of Commodity Derivative |
| `ValidityStartTime` |  | |  |  | `TIMS(6)` | Valid-From Time of Commodity Derivative |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-To Date of Commodity Derivative |
| `ValidityEndTime` |  | |  |  | `TIMS(6)` | Valid-To Time of Commodity Derivative |
| `MaximumVersion` |  | |  |  | `NUMC(10)` | Highest Version Number |
| `ExposureDueDate` |  | |  |  | `DATS(8)` | Date on which the exposure is due and expires |
| `ReportingDate` |  | |  |  | `DATS(8)` | Reporting Date |
| `CashFlowDirection` |  | |  |  | `CHAR(1)` | Transaction Flow Direction |
| `TreasuryPositionLongShortCode` |  | |  |  | `CHAR(1)` | Code: Long or Short Position |
| `TimeToMaturity` |  | |  |  | `CHAR(10)` | Time to Maturity |
| `CmmdtyForwardIndexTiming` |  | |  |  | `NUMC(2)` | Timing/Periodicity of Commodity Forward Indexes |
| `CmmdtyForwardIndexTimingText` |  | | `_CmmdtyForwardIndexTimingText` | `DomainText` | `CHAR(60)` | Short Text for Fixed Values |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `FinancialAssetsMgmtProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinInstrTransactionCategory` |  | |  |  | `NUMC(3)` | Transaction Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `FinancialInstrActivityCategory` |  | |  |  | `NUMC(2)` | Transaction Activity Category |
| `FinancialObject` |  | |  |  | `CHAR(22)` | Financial Object Number |
| `PnLEventType` |  | |  |  | `CHAR(10)` | Profit and Loss Event Type |
| `TermStartDate` |  | |  |  | `DATS(8)` | Term Start |
| `TermEndDate` |  | |  |  | `DATS(8)` | Term End |
| `NumberOfCommodityContracts` |  | |  | `cast( NumberOfCommodityContracts as cmm_contracts_number)` | `CHAR(20)` | Number of Contracts |
| `TreasuryPositionAccount` |  | |  |  | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `DerivativeContract` |  | |  |  | `CHAR(13)` | Contract for Listed Options and Futures |
| `OptionStrikePrice` |  | |  |  | `CHAR(18)` | Option Strike Price |
| `OptionStrikeCurrency` |  | |  |  | `CUKY(5)` | Strike currency of option/future |
| `OptionPutCallCode` |  | |  |  | `NUMC(1)` | Put/Call Indicator |
| `OptionExerciseType` |  | |  |  | `NUMC(1)` | Exercise Type (American or European) |
| `ExternalKeyFigureValue` |  | |  |  | `CHAR(50)` | External Key figures |
| `OptionDeltaFactor` |  | |  |  | `CHAR(30)` | Option Delta Factor Value |
| `OptionDeltaFactorKeyFigure` |  | |  |  | `DEC(15)` | Option Delta Factor |
| `EvaluationDate` |  | |  |  | `DATS(8)` |  |
| `MTMDataSelectionType` |  | |  |  | `CHAR(2)` |  |
| `FinInstrExternalReference` |  | |  |  | `CHAR(16)` | External Reference |
| `DisplayView` |  | |  |  | `CHAR(1)` |  |
| `HasErrorDescription` |  | |  |  | `CHAR(60)` | Error Description |
| `MTMDataSourceType` |  | |  |  | `CHAR(2)` | Type of Data Record |
| `PhysicalCommodity` |  | |  |  | `CHAR(18)` | Commodity |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Last Changed Date |
| `SourceDocument` |  | |  |  | `CHAR(20)` | Source Document |
| `SourceDocumentItem` |  | |  |  | `NUMC(6)` | Source Document Item |
| `SourceDocumentBusObjType` |  | |  |  | `CHAR(10)` | Source Document Business Object Type |
| `OriginReferenceDocument` |  | |  |  | `CHAR(20)` | Root Document |
| `OriginReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Root Document Item |
| `OriginReferenceDocBusObjType` |  | |  |  | `CHAR(10)` | Root Document (BOR) Object Type |
| `DeliveryDate` |  | |  |  | `DATS(8)` | Delivery Date |
| `DeliveryYear` |  | |  |  | `CHAR(4)` | Abjusted Reporting Year |
| `DeliveryMonth` |  | |  |  | `CHAR(3)` | Adjusted Reporting Month |
| `DerivativeContrSpecification` |  | |  |  | `CHAR(20)` | Derivative Contract Specification ID |
| `MarketIdentifierCode` |  | |  |  | `CHAR(4)` | Market Identifier Code |
| `MaturityKeyDate` |  | |  |  | `DATS(8)` | Maturity Key Date |
| `DerivativeContractMaturityCode` |  | |  |  | `CHAR(13)` | Contract Maturity Code |
| `HasError` |  | |  |  | `CHAR(1)` | Flag: Error occured |
| `StatisticsCurrency` |  | |  |  | `CUKY(5)` | Statistics Currency |
| `ConditionTermValueInStstcCrcy` |  | |  |  | `CURR(31)` | Value in Statistical Currency |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `ConditionTermValueInDocCrcy` |  | |  |  | `DEC(31)` | Value in Document Currency |
| `QuotationCurrency` |  | |  |  | `CUKY(5)` | Evaluation in Quotation Currency |
| `RiskAnalyzerKeyFigInQtanCrcy` |  | |  |  | `CURR(23)` | Contract Value(CV) in Quotation Currecy |
| `ConditionTermRate` |  | |  |  | `DEC(31)` | Price |
| `MarketToDocExchRate` |  | |  |  | `DEC(20)` | Exchange Rate: Market to Document Currency |
| `ConditionTermRateCurrency` |  | |  |  | `CUKY(5)` | Price Currency |
| `DocToStatisticalExchRate` |  | |  |  | `DEC(20)` | Exchange Rate: Document to Statistics Currency |
| `CommodityQuantity` |  | |  |  | `QUAN(17)` | Commodity Quantity |
| `CommodityQuantityInTermUnit` |  | |  |  | `QUAN(17)` | Commodity Quantity in Price Unit |
| `CommodityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Commodity |
| `_ConditionTermRateQuantityUnit` | | ✓ | | | | |
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
| `_ControllingArea` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_DerivativeContrSpecification` | | ✓ | | | | |
| `_MarketIdentCode` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_CmmdtyMtmMessage` | | ✓ | | | | |
| `_GoodsMovementType` | | ✓ | | | | |
| `_FinAssetsMgmtProductType` | | ✓ | | | | |
| `_ProductGroupText_2` | | ✓ | | | | |
| `_SalesOrganizationText` | | ✓ | | | | |
| `_ProductCategory` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_ConditionApplication` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionTermRateQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
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
| `_ControllingArea` | `I_ControllingArea` | [1..1] |
| `_Material` | `I_Product` | [0..1] |
| `_DerivativeContrSpecification` | `I_DerivativeContrSpec` | [0..1] |
| `_MarketIdentCode` | `I_MarketIdentCode` | [0..1] |
| `_IncotermsClassification` | `I_IncotermsClassification` | [0..1] |
| `_CmmdtyMtmMessage` | `I_CmmdtyMtmMessage` | [0..*] |
| `_GoodsMovementType` | `I_GoodsMovementType` | [0..1] |
| `_FinAssetsMgmtProductType` | `I_FinAssetsMgntProductType` | [0..1] |
| `_CmmdtyForwardIndexTimingText` | `I_DomainFixedValueText` | [0..1] |
| `_ProductGroupText_2` | `I_ProductGroupText` | [0..*] |
| `_SalesOrganizationText` | `I_SalesOrganizationText` | [0..*] |
| `_ProductCategory` | `I_FinancialInstrProdCatText` | [0..*] |
| `_ProductType` | `I_Producttype` | [0..1] |
| `_ConditionApplication` | `I_ConditionApplicationText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMLOGFINVALCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMLOGFINVALCUBE')/$value)*

```abap
@Analytics.dataCategory: #CUBE
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'IUNIONMTMPFCUBE'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@EndUserText.label: 'Union MtM - Cube'
define view I_CmmdtyMTMLogFinValCube
  with parameters
    P_DisplayUnitOfMeasure     : cds_view_uom,
    P_EvaluationDate           : cds_evaluation_date,
    P_ExchRateEvaluationDate   : cmm_eval_keydate, -- FX valuation date
    P_EndOfDaySnapshotFromDate : cmm_snapshot_start, -- date of snapshot to be selected
    P_EndOfDaySnapshotToDate   : cmm_snapshot_end,   -- date of snapshot to be selected
    P_MTMDataSelectionType     : cmm_vlogp_consumptiontype
  as select from I_CmmdtyMTMLogFinValue
                 (
                     P_DisplayUnitOfMeasure:      :P_DisplayUnitOfMeasure,
                     P_EvaluationDate:            :P_EvaluationDate, -- valuation key date
                     P_ExchRateEvaluationDate:    :P_ExchRateEvaluationDate, -- FX valuation date
                     P_EndOfDaySnapshotFromDate:  :P_EndOfDaySnapshotFromDate, -- date of snapshot to be selected
                     P_EndOfDaySnapshotToDate:    :P_EndOfDaySnapshotToDate, -- date of snapshot to be selected
                     P_MTMDataSelectionType:      :P_MTMDataSelectionType)

  association [0..1] to I_UnitOfMeasure             as _ConditionTermRateQuantityUnit on  $projection.ConditionTermRateQuantityUnit = _ConditionTermRateQuantityUnit.UnitOfMeasure
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
  //  association [0..1] to I_CompanyCode               as _CompanyCode                   on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_ProfitCenter              as _ProfitCenter                  on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                      and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [1..1] to I_ControllingArea           as _ControllingArea               on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_Product                   as _Material                      on  $projection.Material = _Material.Product
  association [0..1] to I_DerivativeContrSpec       as _DerivativeContrSpecification  on  $projection.DerivativeContrSpecification = _DerivativeContrSpecification.DerivativeContrSpecification
  association [0..1] to I_MarketIdentCode           as _MarketIdentCode               on  $projection.MarketIdentifierCode = _MarketIdentCode.MarketIdentifierCode
  association [0..1] to I_IncotermsClassification   as _IncotermsClassification       on  $projection.IncotermsClassification = _IncotermsClassification.IncotermsClassification
  association [0..*] to I_CmmdtyMtmMessage          as _CmmdtyMtmMessage              on  $projection.SystemMessageNumber = _CmmdtyMtmMessage.SystemMessageNumber
  association [0..1] to I_GoodsMovementType         as _GoodsMovementType             on  $projection.GoodsMovementType = _GoodsMovementType.GoodsMovementType
  association [0..1] to I_FinAssetsMgntProductType  as _FinAssetsMgmtProductType      on  $projection.FinancialAssetsMgmtProductType = _FinAssetsMgmtProductType.FinancialAssetsMgmtProductType
  association [0..1] to I_DomainFixedValueText      as _CmmdtyForwardIndexTimingText  on  $projection.CmmdtyForwardIndexTiming                  = _CmmdtyForwardIndexTimingText.DomainValue
                                                                                      and _CmmdtyForwardIndexTimingText.Language                = 'E'
                                                                                      and _CmmdtyForwardIndexTimingText.SAPDataDictionaryDomain = 'TBA_TIMING'
  association [0..*] to I_ProductGroupText          as _ProductGroupText_2            on  $projection.MaterialGroup = _ProductGroupText_2.MaterialGroup
  association [0..*] to I_SalesOrganizationText     as _SalesOrganizationText         on  $projection.SalesOrganization = _SalesOrganizationText.SalesOrganization
  association [0..*] to I_FinancialInstrProdCatText as _ProductCategory               on  $projection.FinancialInstrProductCategory = _ProductCategory.FinancialInstrProductCategory
  association [0..1] to I_Producttype               as _ProductType                   on  $projection.FinancialAssetsMgmtProductType = _ProductType.ProductType
  association [0..*] to I_ConditionApplicationText  as _ConditionApplication          on  $projection.ConditionApplication = _ConditionApplication.ConditionApplication
{
  key PricingKey,
  key Version,
  key PricingDocumentItem,
  key ConditionType,
  key SubConditionType,
  key VersStockRecordUUID,
  key EndOfDaySnapshotDate,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
  key CommodityPriceExposure,
  key CommodityExposureCategory,
  key CommodityPriceSubExposure,

      /* Physical Fields */
      EndOfDaySnapshotDateTimeFrom,
      EndOfDaySnapshotDateTimeTo,
      @ObjectModel.text.association: '_SalesOrganizationText'
      SalesOrganization,
      DistributionChannel,
      Division,
      @ObjectModel.foreignKey.association:'_Creditor'
      Creditor,
      @ObjectModel.foreignKey.association:'_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association:'_Material'
      Material,
      @ObjectModel.foreignKey.association:'_Plant'
      Plant,
      @ObjectModel.foreignKey.association:'_StorageLocation'
      StorageLocation,
      Batch,
      @ObjectModel.foreignKey.association:'_GoodsMovementType'
      GoodsMovementType,
      @ObjectModel.foreignKey.association:'_IncotermsClassification'
      IncotermsClassification,
      IncotermsTransferLocation,
      @ObjectModel.text.association: '_ConditionApplication'
      ConditionApplication,
      ReferenceDocument,
      ReferenceDocumentItem,
      @ObjectModel.foreignKey.association:'_ReferenceDocBusObjType'
      ReferenceDocBusObjType,
      ExpectedPaymentDate,
      ExchRateEvaluationDate,
      DocToStstcCrcyExchRateEvalDate,
      QuotationPeriodReferenceDate,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      BusinessArea,
      PurchasingOrganization,
      @ObjectModel.text.association: '_ProductGroupText_2'
      MaterialGroup,
      IsIntercompanyTransfer,
      @DefaultAggregation:#SUM
      MarketToDocFrozenExchRate,
      @DefaultAggregation: #NONE
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      ConditionTermRateQuantity,
      @Semantics.unitOfMeasure: true
      ConditionTermRateQuantityUnit,
      @Semantics.currencyCode: true
      ConditionTermValueCurrency,
      @ObjectModel.foreignKey.association:'_BasisID'
      BasisID,
      BasisType,
      QuotationPriceType,
      @ObjectModel.foreignKey.association:'_MarketPriceCurrency'
      @Semantics.currencyCode: true
      MarketPriceCurrency,
      OldestQuotationDate,
      @ObjectModel.foreignKey.association:'_CmmdtyMtmMessage'
      SystemMessageNumber,
      @ObjectModel.foreignKey.association:'_MTMConditionGroupCategory'
      MTMConditionGroupCategory,
      @ObjectModel.foreignKey.association:'_MTMConditionGroup'
      MTMConditionGroup,
      @ObjectModel.foreignKey.association:'_MTMCalculationGroup'
      MTMCalculationGroup,
      @ObjectModel.foreignKey.association: '_MTMAdjustmentType'
      MTMAdjustmentType,
      MTMCalcGrpMarketPriceCondition,
      ConditionTermExchRateIsFixed,
      ConditionTermRateFixation,
      @ObjectModel.foreignKey.association: '_PricingStatus'
      PricingStatus,
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
      @DefaultAggregation:#MAX
      ConditionTermFactor,
      ConditionTermRateIsFixed,

      /*Financial Fields */
      ValidityStartDateTime,
      ValidityEndDateTime,
      ValidityStartTime,
      ValidityEndDate,
      ValidityEndTime,
      MaximumVersion,
      ExposureDueDate,
      ReportingDate,
      CashFlowDirection,
      TreasuryPositionLongShortCode,
      TimeToMaturity,
      CmmdtyForwardIndexTiming,
      //cmmdtyforwardindextiming,
      _CmmdtyForwardIndexTimingText.DomainText                  as CmmdtyForwardIndexTimingText,
      @ObjectModel.text.association: '_ProductCategory'
      FinancialInstrProductCategory,
      @ObjectModel.foreignKey.association: '_FinAssetsMgmtProductType'
      @ObjectModel.text.association: '_ProductType'
      FinancialAssetsMgmtProductType,
      FinInstrTransactionCategory,
      FinancialInstrumentProductType,
      FinancialInstrActivityCategory,
      FinancialObject,
      PnLEventType,
      TermStartDate,
      TermEndDate,
      cast( NumberOfCommodityContracts as cmm_contracts_number) as NumberOfCommodityContracts,
      TreasuryPositionAccount,
      DerivativeContract,
      OptionStrikePrice,
      @Semantics.currencyCode: true
      OptionStrikeCurrency,
      OptionPutCallCode,
      OptionExerciseType,
      ExternalKeyFigureValue,
      OptionDeltaFactor,
      @DefaultAggregation:  #SUM
      OptionDeltaFactorKeyFigure,
      EvaluationDate,
      MTMDataSelectionType,
      FinInstrExternalReference,
      DisplayView,
      HasErrorDescription,

      /*Common Fields*/
      @ObjectModel.foreignKey.association: '_MTMDataSourceType'
      MTMDataSourceType,
      @ObjectModel.foreignKey.association:'_PhysicalCmmdty'
      PhysicalCommodity,
      ValidityStartDate,
      SourceDocument,
      SourceDocumentItem,
      @ObjectModel.foreignKey.association:'_SourceDocumentBusObjType'
      SourceDocumentBusObjType,
      OriginReferenceDocument,
      OriginReferenceDocumentItem,
      @ObjectModel.foreignKey.association:'_OriginReferenceDocBusObjType'
      OriginReferenceDocBusObjType,
      DeliveryDate,
      DeliveryYear,
      DeliveryMonth,
      @ObjectModel.foreignKey.association: '_DerivativeContrSpecification'
      DerivativeContrSpecification,
      @ObjectModel.foreignKey.association:'_MarketIdentCode'
      MarketIdentifierCode,
      MaturityKeyDate,
      DerivativeContractMaturityCode,
      HasError,

      /*Keyfigures*/
      @ObjectModel.foreignKey.association:'_StatisticsCurrency'
      @Semantics.currencyCode: true
      StatisticsCurrency,
      --@OData.v2.amount.noDecimalShift: true
      @Semantics.amount.currencyCode: 'StatisticsCurrency'
      @DefaultAggregation: #SUM
      ConditionTermValueInStstcCrcy,
      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      @Semantics.currencyCode: true
      DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @DefaultAggregation: #SUM
      @OData.v2.amount.noDecimalShift: true
      ConditionTermValueInDocCrcy,
      @Semantics.currencyCode: true
      QuotationCurrency,
      @Semantics.amount.currencyCode: 'QuotationCurrency'
      @DefaultAggregation: #SUM
      RiskAnalyzerKeyFigInQtanCrcy,
      @Semantics.amount.currencyCode: 'ConditionTermRateCurrency'
      @OData.v2.amount.noDecimalShift: true
      @DefaultAggregation: #SUM
      ConditionTermRate,
      @DefaultAggregation:#SUM
      MarketToDocExchRate,
      @Semantics.currencyCode: true
      ConditionTermRateCurrency,
      @DefaultAggregation:#SUM
      DocToStatisticalExchRate,
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation: #SUM
      CommodityQuantity,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ConditionTermRateQuantityUnit'
      CommodityQuantityInTermUnit,
      @ObjectModel.foreignKey.association:'_CommodityUnit'
      @Semantics.unitOfMeasure: true
      CommodityUnit,

      /*Associations*/
      _ConditionTermRateQuantityUnit,
      _StatisticsCurrency,
      _DocumentCurrency,
      _MarketPriceCurrency,
      _ConditionTermRateCurrency,
      _CommodityUnit,
      _MTMDataSourceType,
      _MTMConditionGroup,
      _MTMConditionGroupCategory,
      _MTMAdjustmentType,
      _MTMCalculationGroup,
      _PhysicalCmmdty,
      _BasisID,
      _SourceDocumentBusObjType,
      _ReferenceDocBusObjType,
      _OriginReferenceDocBusObjType,
      _PricingStatus,
      _Creditor,
      _SoldToParty,
      _Plant,
      _StorageLocation,
      _CompanyCode,
      _Material,
      _DerivativeContrSpecification,
      _MarketIdentCode,
      _IncotermsClassification,
      _CmmdtyMtmMessage,
      _GoodsMovementType,
      _FinAssetsMgmtProductType,
      _ProductGroupText_2,
      _SalesOrganizationText,
      _ProductType,
      _ConditionApplication,
      _ProductCategory,
      _ControllingArea,
      _ProfitCenter
}
```
