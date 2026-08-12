---
name: I_CMMDTYPOSITIONREPQTYCUBE
description: "Commodity Position Report - Cube"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPOSITIONREPQTYCUBE')/$value
semantic_en: "Commodity Position Report - Cube"
semantic_vi: "Commodity Position Report - Cube — CDS view giao diện dựa trên I_CmmdtyPositionReportQty."
keywords:
  - "commodity"
  - "position"
  - "report"
  - "cube"
  - "transaction"
  - "type"
  - "pricing"
  - "version"
  - "document"
  - "item"
  - "condition"
tags:
  - LO
  - bo:purchaseorder
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_CMMDTYPOSITIONREPQTYCUBE

**Commodity Position Report - Cube**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPOSITIONREPQTYCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CommodityTransactionType` | ✓ | |  |  | `CHAR(1)` | Paper/Physical Indicator for Exposure Group |
| `PricingKey` | ✓ | |  |  | `CHAR(40)` | A key required to access versioned pricing data |
| `Version` | ✓ | |  |  | `NUMC(10)` | Version of an MtM Valuation Record |
| `PricingDocumentItem` | ✓ | |  |  | `NUMC(6)` | Condition item number |
| `ConditionType` | ✓ | |  |  | `CHAR(4)` | Condition Type |
| `SubConditionType` | ✓ | |  |  | `NUMC(6)` | The key of a sub-condition type |
| `VersStockRecordUUID` | ✓ | |  |  | `RAW(16)` | GUID assigned to the VlogP stock delta record |
| `EvaluationDate` | ✓ | |  |  | `DATS(8)` | Latest Evaluation Date |
| `PriceQuotationDate` | ✓ | |  |  | `DATS(8)` | Date of Price Quotation |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `CommodityPriceExposure` | ✓ | |  |  | `CHAR(13)` | Commodity Price Exposure ID |
| `CommodityExposureCategory` | ✓ | |  |  | `CHAR(2)` | Exposure Category |
| `CommodityPriceSubExposure` | ✓ | |  |  | `CHAR(40)` | Hash key |
| `EndOfDaySnapshotFromDate` |  | |  |  | `DATS(8)` | Snapshot Start Date |
| `EndOfDaySnapshotToDate` |  | |  |  | `DATS(8)` | Snapshot End Date |
| `MTMDataSourceType` |  | |  |  | `CHAR(2)` | Type of Data Record |
| `EndOfDaySnapshotDateTimeFrom` |  | |  |  | `DEC(15)` | Timestamp defining a End-of-day snapshot |
| `EndOfDaySnapshotDateTimeTo` |  | |  |  | `DEC(15)` | Timestamp defining a End-of-day snapshot |
| `MaximumVersion` |  | |  |  | `NUMC(10)` | Highest Version Number |
| `PreviousVersion` |  | |  |  | `NUMC(10)` | Version of an MtM Valuation Record |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `Creditor` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `ConditionApplication` |  | |  |  | `CHAR(2)` | Application |
| `SourceDocument` |  | |  |  | `CHAR(20)` | Document |
| `SourceDocumentItem` |  | |  |  | `NUMC(6)` | Condition item number |
| `SourceDocumentBusObjType` |  | |  |  | `CHAR(10)` | Document Type |
| `OriginReferenceDocument` |  | |  |  | `CHAR(20)` | Root Document |
| `OriginReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Root Document Item |
| `OriginReferenceDocBusObjType` |  | |  |  | `CHAR(10)` | Root Document Type |
| `ReferenceDocument` |  | |  |  | `CHAR(20)` | Predecessor Document |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Predecessor Document Item |
| `ReferenceDocBusObjType` |  | |  |  | `CHAR(10)` | Predecessor Document Type |
| `ExpectedPaymentDate` |  | |  |  | `DATS(8)` | Payment Date |
| `StatisticsCurrency` |  | |  |  | `CUKY(5)` | Statistics Currency |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `IsIntercompanyTransfer` |  | |  |  | `CHAR(1)` | Intercompany Transfer |
| `ConditionTermRate` |  | |  |  | `DEC(20)` | Term Rate |
| `CommodityPriceFixationStatus` |  | |  |  | `CHAR(2)` | Future/Basis Price Fixation Status |
| `ConditionTermRateCurrency` |  | |  |  | `CUKY(5)` | CPE Term - Currency |
| `ConditionTermRateQuantity` |  | |  |  | `DEC(5)` | CPE Term - Price Unit |
| `ConditionTermRateQuantityUnit` |  | |  |  | `UNIT(3)` | CPE Term - Unit of Measure |
| `ConditionTermValue` |  | |  |  | `CURR(15)` | CPE Term - Value |
| `ConditionTermValueCurrency` |  | |  |  | `CUKY(5)` | CPE Term - Currency |
| `ConditionTermRateMktCurrency` |  | |  |  | `CUKY(5)` | Market Term Currency |
| `ConditionTermName` |  | |  |  | `CHAR(40)` | Description |
| `ConditionTermStatus` |  | |  |  | `NUMC(2)` | CPE Term - Status |
| `RoundingDecimalPlaces` |  | |  |  | `INT1(3)` | Decimals of Calculated Term/Formula Rate |
| `ConditionTermRateIsRounded` |  | |  |  | `CHAR(1)` | Indicates whether the term rate is rounded |
| `ConditionTermRateNmrtr` |  | |  |  | `DEC(10)` | Rate factor numerator |
| `ConditionTermRateDnmntr` |  | |  |  | `DEC(10)` | Rate factor denominator |
| `ConditionTermExtensionUsage` |  | |  |  | `CHAR(1)` | CPE Extension Usage |
| `MaturitySelectionType` |  | |  |  | `INT1(3)` | Maturity Selection Type |
| `QuotationPeriodReferenceDate` |  | |  |  | `DATS(8)` | Reference Date |
| `QuotationKeyType` |  | |  |  | `CHAR(1)` | Quotation Key Type in Document UI (all values) |
| `QuotationDateList` |  | |  |  | `CHAR(40)` | The key of a date list |
| `QuotationPeriodStartDate` |  | |  |  | `DATS(8)` | Start Date of Quotation Period |
| `QuotationPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Quotation Period |
| `BasisType` |  | |  |  | `CHAR(3)` | Basis Type |
| `BasisID` |  | |  |  | `CHAR(18)` | Basis ID |
| `QuotationGroup` |  | |  |  | `CHAR(40)` | Quotation Group (Technical Key Field) |
| `QuotationGroupCalculationRule` |  | |  |  | `CHAR(10)` | Quotation Group Operation |
| `PricingStatus` |  | |  |  | `CHAR(2)` | Future/Basis Price Fixation Status |
| `ConditionTermRateFixation` |  | |  |  | `NUMC(5)` | CPE Term - Number in Formula |
| `CndnTermRateFixationDate` |  | |  |  | `DATS(8)` | Rate Fixation Date |
| `CndnTermRateFixationTime` |  | |  |  | `TIMS(6)` | Rate Fixation Time |
| `CndnTermExchRateFixationDate` |  | |  |  | `DATS(8)` | FX Fixation Date |
| `CndnTermExchRateFixationTime` |  | |  |  | `TIMS(6)` | FX Fixation Time |
| `FixedExchRateDate` |  | |  |  | `DATS(8)` | Date when forward FX rate is frozen |
| `ExchRateMaturityDate` |  | |  |  | `DATS(8)` | Maturity Date |
| `CommodityQuantityInTermUnit` |  | |  |  | `QUAN(17)` |  |
| `QuantitySign` |  | |  |  | `INT2(5)` | Sign of Quantity |
| `MTMConditionGroupCategory` |  | |  |  | `CHAR(1)` | Categorization of Condition Group |
| `MTMConditionGroup` |  | |  |  | `CHAR(1)` | MtM Condition Group |
| `MTMCalculationGroup` |  | |  |  | `CHAR(1)` | MtM Calculation Group |
| `MTMAdjustmentType` |  | |  |  | `CHAR(2)` | Type of adjustment for the MtM or TPL calculation |
| `MTMCalcGrpMarketPriceCondition` |  | |  |  | `CHAR(4)` | Market Price Condition within a calculation group |
| `PriceIsRealized` |  | |  |  | `CHAR(1)` | Indicates that the MtM value is realized |
| `ContrPriceExposureIsExecuted` |  | |  |  | `CHAR(1)` | Indicates that the goods movement has been executed |
| `ImplicitFixationIsRelevant` |  | |  |  | `CHAR(1)` | Implicit Fixation Relevant |
| `MinimumConditionTermLimitRate` |  | |  |  | `DEC(20)` | Minimum of Commodity Rate Calculation |
| `MaximumConditionTermLimitRate` |  | |  |  | `DEC(20)` | Maximum of Commodity Rate Calculation |
| `ConditionTermLimitRateCurrency` |  | |  |  | `CUKY(5)` | CPE Term - Currency of Rate Calculation Limits |
| `ConditionTermLimitRateQuantity` |  | |  |  | `DEC(5)` | CPE Term - Price Unit of Rate Calculation Limits |
| `CndnTermLimitRateQuantityUnit` |  | |  |  | `UNIT(3)` | CPE Term - Unit of Measure for Rate Limits |
| `ConditionTermLimitRateStatus` |  | |  |  | `CHAR(2)` | Pricing Status for Rate Limit |
| `AdjustedReportingDate` |  | |  |  | `DATS(8)` | Adjusted Reporting Date |
| `AdjustedReportingYear` |  | |  |  | `CHAR(4)` | Abjusted Reporting Year |
| `AdjustedReportingMonth` |  | |  |  | `CHAR(3)` | Adjusted Reporting Month |
| `GoodsMovement` |  | |  |  | `CHAR(20)` | Document |
| `MaterialStockPriceExposureUnit` |  | |  |  | `UNIT(3)` | Material Stock Unit of Measure |
| `ExposureDueDate` |  | |  |  | `DATS(8)` | Date on which the exposure is due and expires |
| `CashFlowDirection` |  | |  |  | `CHAR(1)` | Transaction Flow Direction |
| `TreasuryPositionLongShortCode` |  | |  |  | `CHAR(1)` | Code: Long or Short Position |
| `TimeToMaturity` |  | |  |  | `CHAR(10)` | Time to Maturity |
| `CmmdtyForwardIndexTiming` |  | |  |  | `NUMC(2)` | Timing/Periodicity of Commodity Forward Indexes |
| `CmmdtyForwardIndexTimingText` |  | | `_CmmdtyForwardIndexTimingText` | `DomainText` | `CHAR(60)` | Short Text for Fixed Values |
| `DerivativeContractMaturityCode` |  | |  |  | `CHAR(13)` | Contract Maturity Code |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `FinancialAssetsMgmtProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinInstrTransactionCategory` |  | |  |  | `NUMC(3)` | Transaction Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `FinancialInstrActivityCategory` |  | |  |  | `NUMC(2)` | Transaction Activity Category |
| `FinancialObject` |  | |  |  | `CHAR(22)` | Financial Object Number |
| `TermStartDate` |  | |  |  | `DATS(8)` | Term Start |
| `TermEndDate` |  | |  |  | `DATS(8)` | Term End |
| `NumberOfCommodityContracts` |  | |  | `cast( NumberOfCommodityContracts as cmm_contracts_number )` | `CHAR(20)` | Number of Contracts |
| `TreasuryPositionAccount` |  | |  |  | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `DerivativeContract` |  | |  |  | `CHAR(13)` | Contract for Listed Options and Futures |
| `OptionStrikePrice` |  | |  | `cast(OptionStrikePrice as cmm_option_strike_price)` | `CHAR(18)` | Option Strike Price |
| `OptionStrikeCurrency` |  | |  |  | `CHAR(5)` | Currency Unit of the Rate |
| `OptionPutCallCode` |  | |  |  | `NUMC(1)` | Put/Call Indicator |
| `ExternalKeyFigureValue` |  | |  |  | `CHAR(50)` | External Key figures |
| `OptionDeltaFactor` |  | |  |  | `CHAR(30)` | Option Delta Factor Value |
| `OptionDeltaFactorKeyFigure` |  | |  |  | `DEC(15)` | Option Delta Factor |
| `EndOfDaySnapshotDateTime` |  | |  |  | `DEC(15)` | Timestamp defining a End-of-day snapshot |
| `MTMDataSelectionType` |  | |  |  | `CHAR(2)` | VLOGP Data Selection Type |
| `EndOfDaySnapshotDate` |  | |  |  | `DATS(8)` | Snapshot Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityStartTime` |  | |  |  | `TIMS(6)` | Valid-From Time |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-To Date |
| `ValidityEndTime` |  | |  |  | `TIMS(6)` | Valid-To Time |
| `ValidityStartDateTime` |  | |  |  | `DEC(15)` | Valid-From Timestamp |
| `ValidityEndDateTime` |  | |  |  | `DEC(15)` | Valid-To Timestamp |
| `PhysicalCommodity` |  | |  |  | `CHAR(18)` | Commodity |
| `DeliveryDate` |  | |  |  | `DATS(8)` | Delivery Date |
| `DerivativeContrSpecification` |  | |  |  | `CHAR(20)` | Derivative Contract Specification ID |
| `MarketIdentifierCode` |  | |  |  | `CHAR(4)` | Market Identifier Code |
| `MaturityKeyDate` |  | |  |  | `DATS(8)` | Maturity Key Date |
| `FinInstrExternalReference` |  | |  |  | `CHAR(16)` | External Reference |
| `DisplayView` |  | |  |  | `CHAR(1)` | View Variant |
| `ConditionTermRateIsFixed` |  | |  |  | `CHAR(1)` | Indicates that the term is fixed |
| `ReportingDate` |  | |  |  | `DATS(8)` | Reporting Date |
| `ReportingYear` |  | |  |  | `CHAR(4)` | Reporting Year |
| `ReportingMonth` |  | |  |  | `CHAR(3)` | Reporting Period |
| `HasError` |  | |  |  | `CHAR(1)` | Error Flag for Data Record of Commodity Risk Analytics |
| `SystemMessageNumber` |  | |  |  | `CHAR(3)` | System Message Number |
| `CommodityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Commodity |
| `CommodityPriceExposureQuantity` |  | |  |  | `QUAN(28)` |  |
| `PricedUndeliveredContrExpsrQty` |  | |  |  | `QUAN(31)` | Priced Undelivered Contract Quantity |
| `UnpricedUndeliveredCtrExpsrQty` |  | |  |  | `QUAN(31)` | Unpriced Undelivered Contract Quantity |
| `UndeliveredMarketPrExposureQty` |  | |  |  | `QUAN(31)` | Undelivered Market Exposure Quantity |
| `UnpricedDeliveredCtrExpsrQty` |  | |  |  | `QUAN(31)` | Unpriced Delivered Contract Quantity |
| `PricedDeliveredContrExpsrQty` |  | |  |  | `QUAN(31)` | Priced Delivered Contract Quantity |
| `DeliveredMarketPrExposureQty` |  | |  |  | `QUAN(31)` | Delivered Market Exposure |
| `UnpricedContrPriceExposureQty` |  | |  |  | `QUAN(31)` | Unpriced Contract Quantity |
| `UnrlzdMarketPriceExposureQty` |  | |  |  | `QUAN(31)` | Unrealized Market Exposure Quantity |
| `OutrightPriceExposureQty` |  | |  |  | `QUAN(31)` | Outright Exposure Quantity |
| `PricedContractsExposureQty` |  | |  |  | `QUAN(31)` | Priced Contract Quantity |
| `MaterialStockExposureQty` |  | |  |  | `QUAN(31)` | Stock on Hand |
| `UnrealizedGoodsRcptPrcExpsrQty` |  | |  |  | `QUAN(31)` | Unrealized Goods Receipt Quantity |
| `UnrealizedGoodsIssPrcExpsrQty` |  | |  |  | `QUAN(31)` | Unrealized Goods Issue Quantity |
| `RealizedMaterialStkPrcExpsrQty` |  | |  |  | `QUAN(31)` | Realized Stock Quantity |
| `TodayPricedUndeliveredExpsrQty` |  | |  |  | `QUAN(31)` | Today Priced Undelivered Quantity |
| `UnrealizedPriceExposureQty` |  | |  |  | `QUAN(31)` | Not Realized Quantity |
| `UnpricedUnrealizedPrcExpsrQty` |  | |  |  | `QUAN(31)` | Unpriced Not Realized Quantity |
| `TodayUnpricedUnrlzdCtrExpsrQty` |  | |  |  | `QUAN(31)` | Today Unpriced Not Realized Quantity |
| `ReducnNoPrcEstablishedExpsrQty` |  | |  |  | `QUAN(31)` | Reducing NPE Quantity |
| `NoFutureEstabPurchaseContrQty` |  | |  |  | `QUAN(18)` |  |
| `NoFutureEstabSalesContrQty` |  | |  |  | `QUAN(18)` |  |
| `FlatPricedContractsQty` |  | |  |  | `QUAN(31)` | FLAT Contracts Quantity |
| `NoFutrEstablishedContrExpsrQty` |  | |  |  | `QUAN(31)` | NFE Contracts Quantity |
| `NoBsEstablishedContrExpsrQty` |  | |  |  | `QUAN(31)` | NBE Contracts Quantity |
| `NoPrcEstablishedContrExpsrQty` |  | |  |  | `QUAN(31)` | NPE Contracts Quantity |
| `FixPricedDelivsPriceExpsrQty` |  | |  |  | `QUAN(31)` | Priced Delivered Quantity |
| `UndeliveredFixPrCtrPrExpsrQty` |  | |  |  | `QUAN(31)` | Undelivered Not Realized Contract Quantity |
| `UnpricedUnrlzdGdsIssExpsrQty` |  | |  |  | `QUAN(31)` | Unpriced Not Realized GR Quantity |
| `UnpricedUnrlzdGdsRcptExpsrQty` |  | |  |  | `QUAN(31)` | Unpriced Not Realized GR Quantity |
| `FixPricedContrPriceExpsrQty` |  | |  |  | `QUAN(31)` | Fix Priced Contract Quantity |
| `TodayPricedContractsExpsrQty` |  | |  |  | `QUAN(31)` | Today Priced Contracts Exposure Quantity |
| `InventoryAndContractsQty` |  | |  |  | `QUAN(31)` | Inventory and Contracts Quantity |
| `TotalPhysicalPositionQty` |  | |  |  | `QUAN(31)` | Total Physical Position quantity |
| `ImpliedFuturesPositionQty` |  | |  |  | `QUAN(31)` | Implied Futures Position Quantity |
| `BasisPositionQty` |  | |  |  | `QUAN(31)` | Basis Position Quantity |
| `NmbrOfPrcdQuotationPeriodDays` |  | |  |  | `INT8(19)` |  |
| `NmbrOfUnpricedQtanPeriodDays` |  | |  |  | `INT8(19)` |  |
| `NmbrOfValnDtePrcdQtanPerdDays` |  | |  |  | `INT8(19)` |  |
| `PriceSettingMethod` |  | |  |  | `NUMC(5)` | Price Setting Method |
| `PriceSettingMethodStatus` |  | |  |  | `NUMC(5)` | Price Setting Method Status |
| `ValidToDateTime` |  | |  |  | `DEC(15)` | Valid-To Timestamp |
| `PricingProcedure` |  | |  |  | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `PricingConditionTerm` |  | |  |  | `NUMC(5)` | CPE Term - Number in Formula |
| `CmmdtyDocumentExternalNumber` |  | |  |  | `CHAR(75)` | External Number of Document |
| `CmmdtyRootDocExternalNumber` |  | |  |  | `CHAR(75)` | External Number of Root Document |
| `_SourceDocumentBusObjType` | | ✓ | | | | |
| `_CommodityUnit` | | ✓ | | | | |
| `_MaterialStockUnit` | | ✓ | | | | |
| `_PricingStatus` | | ✓ | | | | |
| `_DerivativeContrSpecification` | | ✓ | | | | |
| `_MarketIdentifierCode` | | ✓ | | | | |
| `_PhysicalCommodity` | | ✓ | | | | |
| `_FinAssetsMgmtProductType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_MTMDataSourceType` | | ✓ | | | | |
| `_MTMConditionGroup` | | ✓ | | | | |
| `_MTMConditionGroupCategory` | | ✓ | | | | |
| `_MTMAdjustmentType` | | ✓ | | | | |
| `_MTMCalculationGroup` | | ✓ | | | | |
| `_BasisID` | | ✓ | | | | |
| `_ReferenceDocBusObjType` | | ✓ | | | | |
| `_OriginReferenceDocBusObjType` | | ✓ | | | | |
| `_Creditor` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_ProductGroupText_2` | | ✓ | | | | |
| `_CmmdtyMtmMessage` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_SalesOrganizationText` | | ✓ | | | | |
| `_ProductCategory` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_ConditionApplicationText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SourceDocumentBusObjType` | `I_BusinessObjType` | [0..1] |
| `_CommodityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_MaterialStockUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PricingStatus` | `I_PricingStatus` | [0..1] |
| `_DerivativeContrSpecification` | `I_DerivativeContrSpec` | [0..1] |
| `_MarketIdentifierCode` | `I_MarketIdentCode` | [0..1] |
| `_PhysicalCommodity` | `I_Cmmdty` | [0..1] |
| `_FinAssetsMgmtProductType` | `I_FinAssetsMgntProductType` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_MTMDataSourceType` | `I_MtmDataSourceType` | [0..1] |
| `_MTMConditionGroup` | `I_MtmConditionGroup` | [0..1] |
| `_MTMConditionGroupCategory` | `I_Mtmconditiongroupcategory` | [0..1] |
| `_MTMAdjustmentType` | `I_MtmAdjustmentType` | [0..1] |
| `_MTMCalculationGroup` | `I_MtmCalculationGroup` | [0..1] |
| `_BasisID` | `I_BasisID` | [0..1] |
| `_ReferenceDocBusObjType` | `I_BusinessObjType` | [0..1] |
| `_OriginReferenceDocBusObjType` | `I_BusinessObjType` | [0..1] |
| `_Creditor` | `I_Supplier` | [0..1] |
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_Material` | `I_Product` | [0..1] |
| `_ProductGroupText_2` | `I_ProductGroupText` | [0..*] |
| `_CmmdtyMtmMessage` | `I_CmmdtyMtmMessage` | [0..*] |
| `_IncotermsClassification` | `I_IncotermsClassification` | [0..1] |
| `_CmmdtyForwardIndexTimingText` | `I_DomainFixedValueText` | [0..1] |
| `_SalesOrganizationText` | `I_SalesOrganizationText` | [0..*] |
| `_ProductCategory` | `I_FinancialInstrProdCatText` | [0..*] |
| `_ProductType` | `I_Producttype` | [0..1] |
| `_ConditionApplicationText` | `I_ConditionApplicationText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPOSITIONREPQTYCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPOSITIONREPQTYCUBE')/$value)*

```abap
@EndUserText.label: 'Commodity Position Report - Cube'
@Metadata.ignorePropagatedAnnotations: true 
//@OData.publish: true //optional
@Analytics.dataCategory: #CUBE
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'ICMMUNIONPFCUBE'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]

define view I_CmmdtyPositionRepQtyCube
  with parameters   
    @Consumption.defaultValue: 'P'
    P_DisplayUnitOfMeasure     : cds_view_uom,             -- Display UoM
    @Environment.systemField: #SYSTEM_DATE
    P_EndOfDaySnapshotFromDate : cmm_snapshot_start,      -- Snapshot Start Date
    @Environment.systemField: #SYSTEM_DATE
    P_EndOfDaySnapshotToDate   : cmm_snapshot_end,        -- Snapshot End Date
    @Consumption.defaultValue: '1'    
    P_MTMDataSelectionType     : cmm_vlogp_consumptiontype, -- Analytic consumption type
    @Consumption.defaultValue: '1'
    P_OptionDeltaMethod: cds_option_delta_method,    
    P_OptionDeltaThreshold: cds_option_delta_threshold
  as select from I_CmmdtyPositionReportQty(
                            P_DisplayUnitOfMeasure     : :P_DisplayUnitOfMeasure,
                            P_EndOfDaySnapshotFromDate : :P_EndOfDaySnapshotFromDate,
                            P_EndOfDaySnapshotToDate   : :P_EndOfDaySnapshotToDate,
                            P_MTMDataSelectionType     : :P_MTMDataSelectionType, 
                            P_OptionDeltaMethod        : :P_OptionDeltaMethod,
                            P_OptionDeltaThreshold     : :P_OptionDeltaThreshold ) as _Icmmdty
  association [0..1] to I_BusinessObjType           as _SourceDocumentBusObjType     on  $projection.SourceDocumentBusObjType = _SourceDocumentBusObjType.BusinessObjectType
  association [0..1] to I_UnitOfMeasure             as _CommodityUnit                on  $projection.CommodityUnit = _CommodityUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure             as _MaterialStockUnit            on  $projection.MaterialStockPriceExposureUnit = _MaterialStockUnit.UnitOfMeasure
  association [0..1] to I_PricingStatus             as _PricingStatus                on  $projection.PricingStatus = _PricingStatus.PricingStatus
  association [0..1] to I_DerivativeContrSpec       as _DerivativeContrSpecification on  $projection.DerivativeContrSpecification = _DerivativeContrSpecification.DerivativeContrSpecification
  association [0..1] to I_MarketIdentCode           as _MarketIdentifierCode         on  $projection.MarketIdentifierCode = _MarketIdentifierCode.MarketIdentifierCode
  association [0..1] to I_Cmmdty                    as _PhysicalCommodity            on  $projection.PhysicalCommodity = _PhysicalCommodity.Commodity
  association [0..1] to I_FinAssetsMgntProductType  as _FinAssetsMgmtProductType     on  $projection.FinancialAssetsMgmtProductType = _FinAssetsMgmtProductType.FinancialAssetsMgmtProductType
  association [0..1] to I_CompanyCode               as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_MtmDataSourceType         as _MTMDataSourceType            on  $projection.MTMDataSourceType = _MTMDataSourceType.MTMDataSourceType
  association [0..1] to I_MtmConditionGroup         as _MTMConditionGroup            on  $projection.MTMConditionGroup = _MTMConditionGroup.MTMConditionGroup
  association [0..1] to I_Mtmconditiongroupcategory as _MTMConditionGroupCategory    on  $projection.MTMConditionGroupCategory = _MTMConditionGroupCategory.MTMConditionGroupCategory
  association [0..1] to I_MtmAdjustmentType         as _MTMAdjustmentType            on  $projection.MTMAdjustmentType = _MTMAdjustmentType.MTMAdjustmentType
  association [0..1] to I_MtmCalculationGroup       as _MTMCalculationGroup          on  $projection.MTMCalculationGroup = _MTMCalculationGroup.MTMCalculationGroup
  association [0..1] to I_BasisID                   as _BasisID                      on  $projection.BasisID = _BasisID.BasisID
  association [0..1] to I_BusinessObjType           as _ReferenceDocBusObjType       on  $projection.ReferenceDocBusObjType = _ReferenceDocBusObjType.BusinessObjectType
  association [0..1] to I_BusinessObjType           as _OriginReferenceDocBusObjType on  $projection.OriginReferenceDocBusObjType = _OriginReferenceDocBusObjType.BusinessObjectType
  association [0..1] to I_Supplier                  as _Creditor                     on  $projection.Creditor = _Creditor.Supplier
  association [0..1] to I_Customer                  as _SoldToParty                  on  $projection.SoldToParty = _SoldToParty.Customer
  association [0..1] to I_Plant                     as _Plant                        on  $projection.Plant = _Plant.Plant
  association [0..1] to I_StorageLocation           as _StorageLocation              on  $projection.Plant           = _StorageLocation.Plant
                                                                                     and $projection.StorageLocation = _StorageLocation.StorageLocation

// I_Material is not supported. Instead I_product must be used  
//  association [0..1] to I_Material                  as _Material                     on  $projection.Material = _Material.Material
  
  
  association [0..1] to I_Product                   as _Material                     on  $projection.Material = _Material.Product
  association [0..*] to I_ProductGroupText          as _ProductGroupText_2            on  $projection.MaterialGroup = _ProductGroupText_2.MaterialGroup
  association [0..*] to I_CmmdtyMtmMessage          as _CmmdtyMtmMessage             on $projection.SystemMessageNumber = _CmmdtyMtmMessage.SystemMessageNumber
  association [0..1] to I_IncotermsClassification   as _IncotermsClassification      on  $projection.IncotermsClassification = _IncotermsClassification.IncotermsClassification
  association [0..1] to I_DomainFixedValueText as _CmmdtyForwardIndexTimingText on $projection.CmmdtyForwardIndexTiming = _CmmdtyForwardIndexTimingText.DomainValue 
                                                                                        and _CmmdtyForwardIndexTimingText.Language = 'E'
                                                                                        and _CmmdtyForwardIndexTimingText.SAPDataDictionaryDomain = 'TBA_TIMING'                                                                                   
  association [0..*] to I_SalesOrganizationText       as _SalesOrganizationText        on $projection.SalesOrganization = _SalesOrganizationText.SalesOrganization
  association [0..*] to I_FinancialInstrProdCatText   as _ProductCategory              on $projection.FinancialInstrProductCategory = _ProductCategory.FinancialInstrProductCategory
  association [0..1] to I_Producttype                 as _ProductType                  on $projection.FinancialAssetsMgmtProductType = _ProductType.ProductType
  
  association [0..*] to I_ConditionApplicationText    as _ConditionApplicationText     on $projection.ConditionApplication = _ConditionApplicationText.ConditionApplication
                                                                                          
{
      /* Key Fields */
  key CommodityTransactionType,
  key PricingKey,
  key Version,
  key PricingDocumentItem,
  key ConditionType,
  key SubConditionType,
  key VersStockRecordUUID,
  key EvaluationDate,
  key PriceQuotationDate,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
  key CommodityPriceExposure,
  key CommodityExposureCategory,
  key CommodityPriceSubExposure,

      /* Physical Fields */
      EndOfDaySnapshotFromDate,
      EndOfDaySnapshotToDate,
      @ObjectModel.foreignKey.association: '_MTMDataSourceType'
      MTMDataSourceType,
      EndOfDaySnapshotDateTimeFrom,
      EndOfDaySnapshotDateTimeTo,
      MaximumVersion,
      PreviousVersion,
      @ObjectModel.text.association: '_SalesOrganizationText'
      SalesOrganization,
      DistributionChannel,
      Division,
      @ObjectModel.foreignKey.association: '_Creditor'
      Creditor,
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_Material'
      Material,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      StorageLocation,
      Batch,
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification,
      IncotermsTransferLocation,
      @ObjectModel.text.association: '_ConditionApplicationText'
      ConditionApplication,
      SourceDocument,
      SourceDocumentItem,
      @ObjectModel.foreignKey.association: '_SourceDocumentBusObjType'
      SourceDocumentBusObjType,
      OriginReferenceDocument,
      OriginReferenceDocumentItem,
      @ObjectModel.foreignKey.association: '_OriginReferenceDocBusObjType'
      OriginReferenceDocBusObjType,
      ReferenceDocument,
      ReferenceDocumentItem,
      @ObjectModel.foreignKey.association: '_ReferenceDocBusObjType'
      ReferenceDocBusObjType,
      ExpectedPaymentDate,
      StatisticsCurrency,
      DocumentCurrency,
      ProfitCenter,
      BusinessArea,
      PurchasingOrganization,
      @ObjectModel.text.association: '_ProductGroupText_2'
      MaterialGroup,
      IsIntercompanyTransfer,
      @DefaultAggregation: #SUM
      ConditionTermRate,
      CommodityPriceFixationStatus,
      ConditionTermRateCurrency,
      @Semantics.quantity.unitOfMeasure: 'ConditionTermRateQuantityUnit'
      ConditionTermRateQuantity,
      ConditionTermRateQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ConditionTermValueCurrency'
      ConditionTermValue,
      ConditionTermValueCurrency,
      ConditionTermRateMktCurrency,
      ConditionTermName,
      ConditionTermStatus,
      RoundingDecimalPlaces,
      ConditionTermRateIsRounded,
      @DefaultAggregation: #SUM
      ConditionTermRateNmrtr,
      @DefaultAggregation: #SUM
      ConditionTermRateDnmntr,
      ConditionTermExtensionUsage,
      MaturitySelectionType,
      QuotationPeriodReferenceDate,
      QuotationKeyType,
      QuotationDateList,
      QuotationPeriodStartDate,
      QuotationPeriodEndDate,
      BasisType,
      @ObjectModel.foreignKey.association: '_BasisID'
      BasisID,
      QuotationGroup,
      QuotationGroupCalculationRule,
      @ObjectModel.foreignKey.association: '_PricingStatus'
      PricingStatus,
      ConditionTermRateFixation,
      CndnTermRateFixationDate,
      CndnTermRateFixationTime,
      CndnTermExchRateFixationDate,
      CndnTermExchRateFixationTime,
      FixedExchRateDate,
      ExchRateMaturityDate,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      CommodityQuantityInTermUnit,
      @DefaultAggregation: #SUM
      QuantitySign,
      @ObjectModel.foreignKey.association: '_MTMConditionGroupCategory'
      MTMConditionGroupCategory,
      @ObjectModel.foreignKey.association: '_MTMConditionGroup'
      MTMConditionGroup,
      @ObjectModel.foreignKey.association: '_MTMCalculationGroup'
      MTMCalculationGroup,
      MTMAdjustmentType,
      MTMCalcGrpMarketPriceCondition,
      PriceIsRealized,
      ContrPriceExposureIsExecuted,
      ImplicitFixationIsRelevant,
      
      @DefaultAggregation: #SUM  
      MinimumConditionTermLimitRate,
      @DefaultAggregation: #SUM
      MaximumConditionTermLimitRate,
      ConditionTermLimitRateCurrency,
      @Semantics.quantity.unitOfMeasure: 'CndnTermLimitRateQuantityUnit'
      ConditionTermLimitRateQuantity,
      CndnTermLimitRateQuantityUnit,
      ConditionTermLimitRateStatus,
      AdjustedReportingDate,
      AdjustedReportingYear,
      AdjustedReportingMonth,
      GoodsMovement,
      @ObjectModel.foreignKey.association: '_MaterialStockUnit'
      @Semantics.unitOfMeasure: true
      MaterialStockPriceExposureUnit,

      /* Financial Fields */
      ExposureDueDate, 
      CashFlowDirection,
      TreasuryPositionLongShortCode,
      TimeToMaturity,
      CmmdtyForwardIndexTiming,
      _CmmdtyForwardIndexTimingText.DomainText as CmmdtyForwardIndexTimingText,
      DerivativeContractMaturityCode,
      @ObjectModel.text.association: '_ProductCategory'
      FinancialInstrProductCategory,
      @ObjectModel.foreignKey.association: '_FinAssetsMgmtProductType'
      @ObjectModel.text.association: '_ProductType'
      FinancialAssetsMgmtProductType,
      FinInstrTransactionCategory,
      FinancialInstrumentProductType,
      FinancialInstrActivityCategory,
      FinancialObject,
      TermStartDate,
      TermEndDate,
      cast( NumberOfCommodityContracts as cmm_contracts_number )            as  NumberOfCommodityContracts,
      TreasuryPositionAccount,
      DerivativeContract,

      cast(OptionStrikePrice as cmm_option_strike_price) as OptionStrikePrice,

      OptionStrikeCurrency,
      OptionPutCallCode,
      ExternalKeyFigureValue,
      OptionDeltaFactor,
      @DefaultAggregation:  #SUM
      OptionDeltaFactorKeyFigure,
      EndOfDaySnapshotDateTime,

      /* Common Fields */
      MTMDataSelectionType,
      EndOfDaySnapshotDate,
      ValidityStartDate,
      ValidityStartTime,
      ValidityEndDate,
      ValidityEndTime,
      ValidityStartDateTime,
      ValidityEndDateTime,
      @ObjectModel.foreignKey.association: '_PhysicalCommodity'
      PhysicalCommodity,
      DeliveryDate,
      @ObjectModel.foreignKey.association: '_DerivativeContrSpecification'
      DerivativeContrSpecification,
      @ObjectModel.foreignKey.association: '_MarketIdentifierCode'
      MarketIdentifierCode,
      MaturityKeyDate,
      FinInstrExternalReference,
      DisplayView,
      ConditionTermRateIsFixed,
      ReportingDate,
      ReportingYear,
      ReportingMonth,
      HasError,
      
      @ObjectModel.foreignKey.association:'_CmmdtyMtmMessage'
      SystemMessageNumber,      

      @Semantics.unitOfMeasure:true
      @ObjectModel.foreignKey.association: '_CommodityUnit'
      CommodityUnit,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      CommodityPriceExposureQuantity,

      /* Key figures */
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      PricedUndeliveredContrExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      UnpricedUndeliveredCtrExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      UndeliveredMarketPrExposureQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      UnpricedDeliveredCtrExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      PricedDeliveredContrExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      DeliveredMarketPrExposureQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      UnpricedContrPriceExposureQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      UnrlzdMarketPriceExposureQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      OutrightPriceExposureQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      PricedContractsExposureQty,

      @Semantics.quantity.unitOfMeasure: 'MaterialStockPriceExposureUnit'
      @DefaultAggregation:#SUM
      MaterialStockExposureQty,

      @Semantics.quantity.unitOfMeasure: 'MaterialStockPriceExposureUnit'
      @DefaultAggregation:#SUM
      UnrealizedGoodsRcptPrcExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'MaterialStockPriceExposureUnit'
      @DefaultAggregation:#SUM
      UnrealizedGoodsIssPrcExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      RealizedMaterialStkPrcExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      TodayPricedUndeliveredExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      UnrealizedPriceExposureQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      UnpricedUnrealizedPrcExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      TodayUnpricedUnrlzdCtrExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      ReducnNoPrcEstablishedExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      NoFutureEstabPurchaseContrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      NoFutureEstabSalesContrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      FlatPricedContractsQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      NoFutrEstablishedContrExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      NoBsEstablishedContrExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      NoPrcEstablishedContrExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      FixPricedDelivsPriceExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      UndeliveredFixPrCtrPrExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      UnpricedUnrlzdGdsIssExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      UnpricedUnrlzdGdsRcptExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      FixPricedContrPriceExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      TodayPricedContractsExpsrQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      InventoryAndContractsQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      TotalPhysicalPositionQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      ImpliedFuturesPositionQty,

      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      BasisPositionQty,
      

      /*Associations*/
      _SourceDocumentBusObjType,
      _CommodityUnit,
      _MaterialStockUnit,
      _PricingStatus,
      _CompanyCode,
      _DerivativeContrSpecification,
      _FinAssetsMgmtProductType,
      _MarketIdentifierCode,
      _PhysicalCommodity,
      _MTMDataSourceType,
      _MTMConditionGroup,
      _MTMConditionGroupCategory,
      _MTMAdjustmentType,
      _MTMCalculationGroup,
      _BasisID,
      _ReferenceDocBusObjType,
      _OriginReferenceDocBusObjType,
      _Creditor,
      _SoldToParty,
      _Plant,
      _StorageLocation,
      _Material,
      _CmmdtyMtmMessage,
      _IncotermsClassification,
      _ProductGroupText_2,
      _SalesOrganizationText,
      _ProductType,
      _ConditionApplicationText,
      _ProductCategory,
      NmbrOfPrcdQuotationPeriodDays,
      NmbrOfUnpricedQtanPeriodDays,
      NmbrOfValnDtePrcdQtanPerdDays,
      PriceSettingMethod, 
      PriceSettingMethodStatus,
      ValidToDateTime,
      PricingProcedure,
      PricingConditionTerm,
      CmmdtyDocumentExternalNumber,
      CmmdtyRootDocExternalNumber

}
```
