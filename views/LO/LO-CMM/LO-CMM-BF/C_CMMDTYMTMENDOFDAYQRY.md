---
name: C_CMMDTYMTMENDOFDAYQRY
description: MtM End of Day Query
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYMTMENDOFDAYQRY')/$value
semantic_en: MtM End of Day Query
tags:
  - LO
  - component:LO-CMM-BF
  - consumption-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
  - metadata-only
---
# C_CMMDTYMTMENDOFDAYQRY

**MtM End of Day Query**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYMTMENDOFDAYQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingKey` |  | |  |  | `CHAR(40)` | A key required to access versioned pricing data |
| `Version` |  | |  |  | `NUMC(10)` | Version of an MtM Valuation Record |
| `PricingDocumentItem` |  | |  |  | `NUMC(6)` | Condition item number |
| `VersStockRecordUUID` |  | |  |  | `RAW(16)` | GUID assigned to the VlogP stock delta record |
| `CommodityPriceExposure` |  | |  |  | `CHAR(13)` | Commodity Price Exposure ID |
| `CommodityExposureCategory` |  | |  |  | `CHAR(2)` | Exposure Category |
| `CommodityPriceSubExposure` |  | |  |  | `CHAR(40)` | Hash key |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PhysicalCommodity` |  | |  |  | `CHAR(18)` | Commodity |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `OriginReferenceDocument` |  | |  |  | `CHAR(20)` | Root Document |
| `SourceDocument` |  | |  |  | `CHAR(20)` | Source Document |
| `SourceDocumentItem` |  | |  |  | `NUMC(6)` | Source Document Item |
| `SourceDocumentBusObjType` |  | |  |  | `CHAR(10)` | Source Document Business Object Type |
| `EndOfDaySnapshotDate` |  | |  |  | `DATS(8)` | Snapshot Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Last Changed Date |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `ConditionApplication` |  | |  |  | `CHAR(2)` | Application |
| `StatisticsCurrency` |  | |  |  | `CUKY(5)` | Statistics Currency |
| `MTMCalculationGroup` |  | |  |  | `CHAR(1)` | MtM Calculation Group |
| `MTMConditionGroupCategory` |  | |  |  | `CHAR(1)` | Categorization of Condition Group |
| `DerivativeContractMaturityCode` |  | |  |  | `CHAR(13)` | Contract Maturity Code |
| `MaturityKeyDate` |  | |  |  | `DATS(8)` | Maturity Key Date |
| `BasisID` |  | |  |  | `CHAR(18)` | Basis ID |
| `DerivativeContrSpecification` |  | |  |  | `CHAR(20)` | Derivative Contract Specification ID |
| `MarketIdentifierCode` |  | |  |  | `CHAR(4)` | Market Identifier Code |
| `PricingStatus` |  | |  |  | `CHAR(2)` | Future/Basis Price Fixation Status |
| `MTMAdjustmentType` |  | |  |  | `CHAR(2)` | Type of adjustment for the MtM or TPL calculation |
| `ConditionTermRateFixation` |  | |  |  | `NUMC(5)` | Fixation ID |
| `QuotationPeriodReferenceDate` |  | |  |  | `DATS(8)` | Reference Date |
| `ConditionType` |  | |  |  | `CHAR(4)` | Condition Type |
| `SubConditionType` |  | |  |  | `NUMC(6)` | The key of a sub-condition type |
| `ConditionTermValueInStstcCrcy` |  | |  |  | `CURR(31)` | Value in Statistical Currency |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `ConditionTermValueInDocCrcy` |  | |  |  | `DEC(31)` | Value in Document Currency |
| `ConditionTermRate` |  | |  |  | `DEC(31)` | Price |
| `MarketToDocExchRate` |  | |  |  | `DEC(20)` | Exchange Rate: Market to Document Currency |
| `ConditionTermRateCurrency` |  | |  |  | `CUKY(5)` | Price Currency |
| `DocToStatisticalExchRate` |  | |  |  | `DEC(20)` | Exchange Rate: Document to Statistics Currency |
| `CommodityQuantity` |  | |  |  | `QUAN(17)` | Commodity Quantity |
| `CommodityQuantityInTermUnit` |  | |  |  | `QUAN(17)` | Commodity Quantity in Price Unit |
| `CommodityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Commodity |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `Creditor` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `ReferenceDocument` |  | |  |  | `CHAR(20)` | Predecessor Document |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Predecessor Document Item |
| `ReferenceDocBusObjType` |  | |  |  | `CHAR(10)` | Ref (BOR) Object Type |
| `ExpectedPaymentDate` |  | |  |  | `DATS(8)` | Payment Date |
| `ExchRateEvaluationDate` |  | |  |  | `DATS(8)` | Exchange Rate Evaluation Date |
| `DocToStstcCrcyExchRateEvalDate` |  | |  |  | `DATS(8)` | Document to Statistics Currency Evaluation Date |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `IsIntercompanyTransfer` |  | |  |  | `CHAR(1)` | Intercompany Transfer |
| `ConditionTermRateQuantity` |  | |  |  | `DEC(5)` | Price Unit |
| `ConditionTermRateQuantityUnit` |  | |  |  | `UNIT(3)` | Price UoM |
| `ConditionTermValueCurrency` |  | |  |  | `CUKY(5)` | CPE Term - Currency |
| `BasisType` |  | |  |  | `CHAR(3)` | Basis Type |
| `QuotationPriceType` |  | |  |  | `CHAR(2)` | Type of Price Quotation |
| `MarketPriceCurrency` |  | |  |  | `CUKY(5)` | Market Price Currency |
| `OldestQuotationDate` |  | |  |  | `DATS(8)` | Oldest Quotation Date |
| `MTMConditionGroup` |  | |  |  | `CHAR(1)` | MtM Condition Group |
| `MTMCalcGrpMarketPriceCondition` |  | |  |  | `CHAR(4)` | Market Price Condition within a calculation group |
| `ConditionTermExchRateIsFixed` |  | |  |  | `CHAR(1)` | Indicates that the term is fixed |
| `CndnTermRateFixationDate` |  | |  |  | `DATS(8)` | Rate Fixation Date |
| `CndnTermRateFixationTime` |  | |  |  | `TIMS(6)` | Rate Fixation Time |
| `CndnTermExchRateFixationDate` |  | |  |  | `DATS(8)` | FX Fixation Date |
| `CndnTermExchRateFixationTime` |  | |  |  | `TIMS(6)` | FX Fixation Time |
| `ExchRateMaturityDate` |  | |  |  | `DATS(8)` | Maturity Date |
| `BasisMarketRefRate` |  | |  |  | `DEC(20)` | Original Basis Market reference rate |
| `BasisMarketRefAdjustmentSpread` |  | |  |  | `DEC(20)` | Adjustment Value |
| `MarketToDocFrozenExchRate` |  | |  |  | `DEC(20)` | Exchange Rate: Market to Document Currency at a Key Date |
| `BsMktRefDrvtvContrMaturityCode` |  | |  |  | `CHAR(13)` | Basis Market Reference Contract Maturity Code |
| `BasisMarketRefRateCurrency` |  | |  |  | `CUKY(5)` | Adjustment Value Currency |
| `BasisMarketRefKeyDate` |  | |  |  | `DATS(8)` | Basis Market reference maturity keydate |
| `ConditionTermFactor` |  | |  |  | `DEC(10)` | CPE condition type term factor |
| `ConditionTermRateIsFixed` |  | |  |  | `CHAR(1)` | Indicates that the term is fixed |
| `MaximumVersion` |  | |  |  | `NUMC(10)` | Highest Version Number |
| `ExposureDueDate` |  | |  |  | `DATS(8)` | Date on which the exposure is due and expires |
| `ReportingDate` |  | |  |  | `DATS(8)` | Reporting Date |
| `CashFlowDirection` |  | |  |  | `CHAR(1)` | Transaction Flow Direction |
| `TreasuryPositionLongShortCode` |  | |  |  | `CHAR(1)` | Code: Long or Short Position |
| `TimeToMaturity` |  | |  |  | `CHAR(10)` | Time to Maturity |
| `CmmdtyForwardIndexTiming` |  | |  |  | `NUMC(2)` | Timing/Periodicity of Commodity Forward Indexes |
| `CmmdtyForwardIndexTimingText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `FinancialAssetsMgmtProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinInstrTransactionCategory` |  | |  |  | `NUMC(3)` | Transaction Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `FinancialInstrActivityCategory` |  | |  |  | `NUMC(2)` | Transaction Activity Category |
| `EvaluationDate` |  | |  |  | `DATS(8)` |  |
| `MTMDataSourceType` |  | |  |  | `CHAR(2)` | Type of Data Record |
| `OriginReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Root Document Item |
| `OriginReferenceDocBusObjType` |  | |  |  | `CHAR(10)` | Root Document (BOR) Object Type |
| `DeliveryDate` |  | |  |  | `DATS(8)` | Delivery Date |
| `DeliveryYear` |  | |  |  | `CHAR(4)` | Abjusted Reporting Year |
| `DeliveryMonth` |  | |  |  | `CHAR(3)` | Adjusted Reporting Month |
| `ExternalKeyFigureValue` |  | |  |  | `CHAR(50)` | External Key figures |
| `OptionDeltaFactor` |  | |  |  | `CHAR(30)` | Option Delta Factor Value |
| `FinInstrExternalReference` |  | |  |  | `CHAR(16)` | External Reference |
| `HasError` |  | |  |  | `CHAR(1)` | Flag: Error occured |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `SystemMessageText` |  | |  |  | `CHAR(73)` | Message Text |
