---
name: I_CMMDTYMTMVALUECUBE
description: "Mark To Market Values for - Cube"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMVALUECUBE')/$value
semantic_en: "Mark To Market Values for - Cube"
tags:
  - LO
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
  - metadata-only
---
# I_CMMDTYMTMVALUECUBE

**Mark To Market Values for - Cube**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMVALUECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingKey` |  | |  |  | `CHAR(40)` | A key required to access versioned pricing data |
| `Version` |  | |  |  | `NUMC(10)` | Version of an MtM Valuation Record |
| `PricingDocumentItem` |  | |  |  | `NUMC(6)` | Condition item number |
| `ConditionType` |  | |  |  | `CHAR(4)` | Condition Type |
| `SubConditionType` |  | |  |  | `NUMC(6)` | The key of a sub-condition type |
| `VersStockRecordUUID` |  | |  |  | `RAW(16)` | GUID assigned to the VlogP stock delta record |
| `ValuationDate` |  | |  |  | `DATS(8)` | Latest Evaluation Date |
| `EndOfDaySnapshotDate` |  | |  |  | `DATS(8)` | Snapshot Date |
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
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `PhysicalCommodity` |  | |  |  | `CHAR(18)` | Commodity |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `MovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
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
| `CmmdtyForwardIndexTimingText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
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
