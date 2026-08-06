---
name: I_DERIVATIVECMMDTYEXPSR
description: Derivative Basic Layer Select data from VFIND
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DERIVATIVECMMDTYEXPSR')/$value
semantic_en: Derivative Basic Layer Select data from VFIND
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CMM-RSK
  - FIN-FSCM
  - FIN-FSCM-CMM
  - FIN-FSCM-CMM-RSK
  - interface-view
  - lob:finance
  - lob:sourcing & procurement
  - metadata-only
---
# I_DERIVATIVECMMDTYEXPSR

**Derivative Basic Layer Select data from VFIND**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-RSK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DERIVATIVECMMDTYEXPSR')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CommodityPriceExposure` | `CHAR(13)` | Commodity Price Exposure ID |
| `CommodityExposureCategory` | `CHAR(2)` | Exposure Category |
| `CommodityPriceSubExposure` | `CHAR(40)` | Hash key |
| `CommodityPriceExposureVersion` | `NUMC(10)` | Version of a Commodity Price Exposure |
| `ValidityStartDateTime` | `DEC(15)` | Valid-From Timestamp of Commodity Derivative |
| `ValidityEndDateTime` | `DEC(15)` | Valid-To Timestamp of Commodity Derivative |
| `ValidityStartDate` | `DATS(8)` | Valid-From Date of Exposure |
| `ValidityStartTime` | `TIMS(6)` | Valid-From Time of Commodity Derivative |
| `ValidityEndDate` | `DATS(8)` | Valid-To Date of Commodity Derivative |
| `ValidityEndTime` | `TIMS(6)` | Valid-To Time of Commodity Derivative |
| `MaximumVersion` | `NUMC(10)` | Highest Version Number |
| `RiskAnalyzerVersionUUID` | `RAW(16)` | CMM_VFIND Version GUID |
| `ExposureDueDate` | `DATS(8)` | Date on which the exposure is due and expires |
| `ReportingDate` | `DATS(8)` | Reporting Date |
| `Commodity` | `CHAR(18)` | Commodity |
| `CashFlowDirection` | `CHAR(1)` | Transaction Flow Direction |
| `TreasuryPositionLongShortCode` | `CHAR(1)` | Indicates whether it is a long or a short position |
| `DerivativeContrSpecification` | `CHAR(20)` | Derivative Contract Specification ID |
| `MarketIdentifierCode` | `CHAR(4)` | Market Identifier Code |
| `QuotationPriceType` | `CHAR(2)` | Type of Price Quotation |
| `TimeToMaturity` | `CHAR(10)` | Time to Maturity |
| `CmmdtyForwardIndexTiming` | `NUMC(2)` | Timing/Periodicity of Commodity Forward Indexes |
| `MaturityKeyDate` | `DATS(8)` | Maturity Key Date |
| `DerivativeContractMaturityCode` | `CHAR(13)` | Contract Maturity Code |
| `FinancialInstrProductCategory` | `NUMC(3)` | Product Category |
| `FinancialAssetsMgmtProductType` | `CHAR(3)` | Product Type |
| `FinInstrTransactionCategory` | `NUMC(3)` | Transaction Category |
| `FinancialInstrumentProductType` | `CHAR(3)` | Financial Transaction Type |
| `FinancialInstrActivityCategory` | `NUMC(2)` | Transaction Activity Category |
| `FinancialObject` | `CHAR(22)` | Financial Object Number |
| `PnLEventType` | `CHAR(10)` | Profit and Loss Event Type |
| `HasError` | `CHAR(1)` | Error Flag for Data Record of Commodity Risk Analytics |
| `IsNotRelevantForMTMRisk` | `CHAR(1)` | Indicates whether derivative entry is reporting relevant |
| `CalculationPeriodStartDate` | `DATS(8)` | Start Date of Calculation Period |
| `CalculationPeriodEndDate` | `DATS(8)` | End Date of Calculation Period |
| `TermStartDate` | `DATS(8)` | Term Start |
| `TermEndDate` | `DATS(8)` | Term End |
| `DeliveryDate` | `DATS(8)` | Delivery Date of a Commodity Derivative (OBSOLETE) |
| `NumberOfCommodityContracts` | `DEC(15)` | Number of Contracts |
| `CommodityPriceExposureUnit` | `UNIT(3)` | Unit of Measure for the Commodity |
| `CommodityPriceExposureBaseUnit` | `UNIT(3)` | Base Unit of Measure for the Commodity |
| `CmmdtyPriceExpsrMassUnit` | `UNIT(3)` | Mass Unit of Measure |
| `CmmdtyPriceExpsrVolumeUnit` | `UNIT(3)` | Volume Unit of Measure |
| `CommodityPriceExposureQuantity` | `QUAN(13)` | Quantity (OBSOLETE) |
| `CommodityPriceExposureBaseQty` | `QUAN(13)` | Base Quantity |
| `CmmdtyPriceExpsrQtyInMassUnit` | `QUAN(13)` | Quantity in Mass Unit of Measure |
| `CmmdtyPriceExpsrQtyInVolUnit` | `QUAN(13)` | Quantity in Volume Unit of Measure |
| `CmmdtyPriceExpsrPaymentAmount` | `CURR(13)` | Contract Amount in Payment Currency |
| `CommodityPriceFixationStatus` | `CHAR(1)` | Fixation Status (OBSOLETE) |
| `TreasuryPositionAccount` | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `DerivativeContract` | `CHAR(13)` | Contract for Listed Options and Futures |
| `QuotationCurrency` | `CUKY(5)` | Evaluation in Quotation Currency |
| `PaymentCurrency` | `CUKY(5)` | Evaluation in Payment Currency |
| `OptionStrikePrice` | `DEC(13)` | Strike price for commodity listed options |
| `OptionStrikeCurrency` | `CHAR(5)` | Currency Unit of the Rate |
| `OptionPutCallCode` | `NUMC(1)` | Put/Call Indicator |
| `OptionExerciseType` | `NUMC(1)` | Exercise Type (American or European) |
| `EndOfDayBusinessEntityKey` | `RAW(20)` | Key of an Business Entity requiring an End-of-day snapshot |
| `ReportingMonth` | `CHAR(3)` | Reporting Month |
| `ReportingYear` | `NUMC(4)` | Reporting Year |
| `FinInstrExternalReference` | `CHAR(16)` | External Reference |
| `TradedDrvtvContrSpecification` | `CHAR(20)` | Traded Derivative Contract Specification ID |
| `ParDrvtvContractSpecification` | `CHAR(20)` | Parent Derivative Contract Specification ID |
| `RiskViewIsNotRelevant` | `CHAR(1)` | Ignore for Risk View |
| `FinancialTransactionPortfolio` | `CHAR(10)` | Portfolio |
| `CmmdtyHdgPlanExposureHedgeBook` | `CHAR(10)` | Commodity Hedge Book |
| `CommodityHedgePlanExposureID` | `CHAR(13)` | Plan Exposure ID |
