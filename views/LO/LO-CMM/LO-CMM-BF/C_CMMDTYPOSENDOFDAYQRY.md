---
name: C_CMMDTYPOSENDOFDAYQRY
description: Commodity Position End Of Day Query
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYPOSENDOFDAYQRY')/$value
semantic_en: Commodity Position End Of Day Query
tags:
  - LO
  - bo:purchaseorder
  - component:LO-CMM-BF
  - consumption-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
  - metadata-only
---
# C_CMMDTYPOSENDOFDAYQRY

**Commodity Position End Of Day Query**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYPOSENDOFDAYQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CommodityTransactionType` | `CHAR(1)` | Paper/Physical Indicator for Exposure Group |
| `PricingKey` | `CHAR(40)` | A key required to access versioned pricing data |
| `ConditionType` | `CHAR(4)` | Condition Type |
| `EvaluationDate` | `DATS(8)` | Latest Evaluation Date |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CommodityExposureCategory` | `CHAR(2)` | Exposure Category |
| `EndOfDaySnapshotFromDate` | `DATS(8)` | Snapshot Start Date |
| `EndOfDaySnapshotToDate` | `DATS(8)` | Snapshot End Date |
| `MTMDataSelectionType` | `CHAR(2)` | VLOGP Data Selection Type |
| `MTMDataSourceType` | `CHAR(2)` | Type of Data Record |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
| `Creditor` | `CHAR(10)` | Supplier's Account Number |
| `SoldToParty` | `CHAR(10)` | Sold-to Party |
| `PhysicalCommodity` | `CHAR(18)` | Commodity |
| `Material` | `CHAR(40)` | Material Number |
| `Plant` | `CHAR(4)` | Plant |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `Batch` | `CHAR(10)` | Batch Number |
| `IncotermsClassification` | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` | `CHAR(28)` | Incoterms (Part 2) |
| `SourceDocument` | `CHAR(20)` | Document |
| `SourceDocumentItem` | `NUMC(6)` | Condition item number |
| `SourceDocumentBusObjType` | `CHAR(10)` | Document Type |
| `OriginReferenceDocument` | `CHAR(20)` | Root Document |
| `OriginReferenceDocumentItem` | `NUMC(6)` | Root Document Item |
| `OriginReferenceDocBusObjType` | `CHAR(10)` | Root Document Type |
| `ReferenceDocument` | `CHAR(20)` | Predecessor Document |
| `ReferenceDocumentItem` | `NUMC(6)` | Predecessor Document Item |
| `ReferenceDocBusObjType` | `CHAR(10)` | Predecessor Document Type |
| `DeliveryDate` | `DATS(8)` | Delivery Date |
| `ExpectedPaymentDate` | `DATS(8)` | Payment Date |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `IsIntercompanyTransfer` | `CHAR(1)` | Intercompany Transfer |
| `MTMConditionGroup` | `CHAR(1)` | MtM Condition Group |
| `ExposureDueDate` | `DATS(8)` | Date on which the exposure is due and expires |
| `TreasuryPositionLongShortCode` | `CHAR(1)` | Code: Long or Short Position |
| `TimeToMaturity` | `CHAR(10)` | Time to Maturity |
| `CmmdtyForwardIndexTiming` | `NUMC(2)` | Timing/Periodicity of Commodity Forward Indexes |
| `CmmdtyForwardIndexTimingText` | `CHAR(60)` | Short Text for Fixed Values |
| `DerivativeContractMaturityCode` | `CHAR(13)` | Contract Maturity Code |
| `FinancialAssetsMgmtProductType` | `CHAR(3)` | Product Type |
| `FinInstrTransactionCategory` | `NUMC(3)` | Transaction Category |
| `FinancialInstrumentProductType` | `CHAR(3)` | Financial Transaction Type |
| `OptionStrikeCurrency` | `CHAR(5)` | Currency Unit of the Rate |
| `OptionStrikePrice` | `CHAR(18)` | Option Strike Price |
| `OptionPutCallCode` | `NUMC(1)` | Put/Call Indicator |
| `ExternalKeyFigureValue` | `CHAR(50)` | External Key figures |
| `OptionDeltaFactor` | `CHAR(30)` | Option Delta Factor Value |
| `DerivativeContrSpecification` | `CHAR(20)` | Derivative Contract Specification ID |
| `MarketIdentifierCode` | `CHAR(4)` | Market Identifier Code |
| `MaturityKeyDate` | `DATS(8)` | Maturity Key Date |
| `CommodityUnit` | `UNIT(3)` | Unit of Measure for Commodity |
| `PriceIsRealized` | `CHAR(1)` | Indicates that the MtM value is realized |
| `ImplicitFixationIsRelevant` | `CHAR(1)` | Implicit Fixation Relevant |
| `ConditionTermRateIsFixed` | `CHAR(1)` | Indicates that the term is fixed |
| `MaterialStockPriceExposureUnit` | `UNIT(3)` | Material Stock Unit of Measure |
| `UnpricedUndeliveredCtrExpsrQty` | `QUAN(31)` | Unpriced Undelivered Contract Quantity |
| `UnpricedDeliveredCtrExpsrQty` | `QUAN(31)` | Unpriced Delivered Contract Quantity |
| `UnpricedContrPriceExposureQty` | `QUAN(31)` | Unpriced Contract Quantity |
| `PricedUndeliveredContrExpsrQty` | `QUAN(31)` | Priced Undelivered Contract Quantity |
| `PricedDeliveredContrExpsrQty` | `QUAN(31)` | Priced Delivered Contract Quantity |
| `PricedContractsExposureQty` | `QUAN(31)` | Priced Contract Quantity |
| `TodayPricedUndeliveredExpsrQty` | `QUAN(31)` | Today Priced Undelivered Quantity |
| `UndeliveredMarketPrExposureQty` | `QUAN(31)` | Undelivered Market Exposure Quantity |
| `DeliveredMarketPrExposureQty` | `QUAN(31)` | Delivered Market Exposure |
| `UnrlzdMarketPriceExposureQty` | `QUAN(31)` | Unrealized Market Exposure Quantity |
| `UnrealizedGoodsRcptPrcExpsrQty` | `QUAN(31)` | Unrealized Goods Receipt Quantity |
| `UnrealizedGoodsIssPrcExpsrQty` | `QUAN(31)` | Unrealized Goods Issue Quantity |
| `MaterialStockExposureQty` | `QUAN(31)` | Stock on Hand |
| `RealizedMaterialStkPrcExpsrQty` | `QUAN(31)` | Realized Stock Quantity |
| `OutrightPriceExposureQty` | `QUAN(31)` | Outright Exposure Quantity |
| `AdjustedReportingDate` | `DATS(8)` | Adjusted Reporting Date |
| `AdjustedReportingYear` | `CHAR(4)` | Abjusted Reporting Year |
| `AdjustedReportingMonth` | `CHAR(3)` | Adjusted Reporting Month |
| `FinInstrExternalReference` | `CHAR(16)` | External Reference |
| `ConditionApplication` | `CHAR(2)` | Application |
| `FinancialInstrProductCategory` | `NUMC(3)` | Product Category |
| `SystemMessageText` | `CHAR(73)` | Message Text |
| `HasError` | `CHAR(1)` | Error Flag for Data Record of Commodity Risk Analytics |
| `PriceSettingMethod` | `NUMC(5)` | Price Setting Method |
| `PriceSettingMethodStatus` | `NUMC(5)` | Price Setting Method Status |
| `ValidToDateTime` | `DEC(15)` | Valid-To Timestamp |
| `PricingProcedure` | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `PricingConditionTerm` | `NUMC(5)` | CPE Term - Number in Formula |
