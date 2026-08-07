---
name: I_CMMDTYPOSITIONREPQTYCUBE
description: Commodity Position Report - Cube
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPOSITIONREPQTYCUBE')/$value
semantic_en: Commodity Position Report - Cube
tags:
  - LO
  - bo:purchaseorder
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
  - metadata-only
---
# I_CMMDTYPOSITIONREPQTYCUBE

**Commodity Position Report - Cube**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPOSITIONREPQTYCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CommodityTransactionType` |  | |  |  | `CHAR(1)` | Paper/Physical Indicator for Exposure Group |
| `PricingKey` |  | |  |  | `CHAR(40)` | A key required to access versioned pricing data |
| `Version` |  | |  |  | `NUMC(10)` | Version of an MtM Valuation Record |
| `PricingDocumentItem` |  | |  |  | `NUMC(6)` | Condition item number |
| `ConditionType` |  | |  |  | `CHAR(4)` | Condition Type |
| `SubConditionType` |  | |  |  | `NUMC(6)` | The key of a sub-condition type |
| `VersStockRecordUUID` |  | |  |  | `RAW(16)` | GUID assigned to the VlogP stock delta record |
| `EvaluationDate` |  | |  |  | `DATS(8)` | Latest Evaluation Date |
| `PriceQuotationDate` |  | |  |  | `DATS(8)` | Date of Price Quotation |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CommodityPriceExposure` |  | |  |  | `CHAR(13)` | Commodity Price Exposure ID |
| `CommodityExposureCategory` |  | |  |  | `CHAR(2)` | Exposure Category |
| `CommodityPriceSubExposure` |  | |  |  | `CHAR(40)` | Hash key |
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
| `CmmdtyForwardIndexTimingText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `DerivativeContractMaturityCode` |  | |  |  | `CHAR(13)` | Contract Maturity Code |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `FinancialAssetsMgmtProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinInstrTransactionCategory` |  | |  |  | `NUMC(3)` | Transaction Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `FinancialInstrActivityCategory` |  | |  |  | `NUMC(2)` | Transaction Activity Category |
| `FinancialObject` |  | |  |  | `CHAR(22)` | Financial Object Number |
| `TermStartDate` |  | |  |  | `DATS(8)` | Term Start |
| `TermEndDate` |  | |  |  | `DATS(8)` | Term End |
| `NumberOfCommodityContracts` |  | |  |  | `CHAR(20)` | Number of Contracts |
| `TreasuryPositionAccount` |  | |  |  | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `DerivativeContract` |  | |  |  | `CHAR(13)` | Contract for Listed Options and Futures |
| `OptionStrikePrice` |  | |  |  | `CHAR(18)` | Option Strike Price |
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
