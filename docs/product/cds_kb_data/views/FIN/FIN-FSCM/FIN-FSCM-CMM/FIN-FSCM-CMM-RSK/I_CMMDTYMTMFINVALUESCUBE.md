---
name: I_CMMDTYMTMFINVALUESCUBE
description: "Derivative MTM - Cube"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMFINVALUESCUBE')/$value
semantic_en: "Derivative MTM - Cube"
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
# I_CMMDTYMTMFINVALUESCUBE

**Derivative MTM - Cube**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-RSK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMFINVALUESCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CommodityPriceExposure` |  | |  |  | `CHAR(13)` | Commodity Price Exposure ID |
| `CommodityExposureCategory` |  | |  |  | `CHAR(2)` | Exposure Category |
| `CommodityPriceExposureVersion` |  | |  |  | `NUMC(10)` | Version of a Commodity Price Exposure |
| `CommodityPriceSubExposure` |  | |  |  | `CHAR(40)` | Hash key |
| `ValidityStartDateTime` |  | |  |  | `DEC(15)` | Valid-From Timestamp of Commodity Derivative |
| `ValidityEndDateTime` |  | |  |  | `DEC(15)` | Valid-To Timestamp of Commodity Derivative |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date of Exposure |
| `ValidityStartTime` |  | |  |  | `TIMS(6)` | Valid-From Time of Commodity Derivative |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-To Date of Commodity Derivative |
| `ValidityEndTime` |  | |  |  | `TIMS(6)` | Valid-To Time of Commodity Derivative |
| `MaximumVersion` |  | |  |  | `NUMC(10)` | Highest Version Number |
| `RiskAnalyzerVersionUUID` |  | |  |  | `RAW(16)` | CMM_VFIND Version GUID |
| `ExposureDueDate` |  | |  |  | `DATS(8)` | Date on which the exposure is due and expires |
| `ReportingDate` |  | |  |  | `DATS(8)` | Reporting Date |
| `Commodity` |  | |  |  | `CHAR(18)` | Commodity |
| `CashFlowDirection` |  | |  |  | `CHAR(1)` | Transaction Flow Direction |
| `TreasuryPositionLongShortCode` |  | |  |  | `CHAR(1)` | Indicates whether it is a long or a short position |
| `DerivativeContrSpecification` |  | |  |  | `CHAR(20)` | Derivative Contract Specification ID |
| `MarketIdentifierCode` |  | |  |  | `CHAR(4)` | Market Identifier Code |
| `TimeToMaturity` |  | |  |  | `CHAR(10)` | Time to Maturity |
| `CmmdtyForwardIndexTiming` |  | |  |  | `NUMC(2)` | Timing/Periodicity of Commodity Forward Indexes |
| `MaturityKeyDate` |  | |  |  | `DATS(8)` | Maturity Key Date |
| `DerivativeContractMaturityCode` |  | |  |  | `CHAR(13)` | Contract Maturity Code |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `FinancialAssetsMgmtProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinInstrTransactionCategory` |  | |  |  | `NUMC(3)` | Transaction Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `FinancialInstrActivityCategory` |  | |  |  | `NUMC(2)` | Transaction Activity Category |
| `FinancialObject` |  | |  |  | `CHAR(22)` | Financial Object Number |
| `PnLEventType` |  | |  |  | `CHAR(10)` | Profit and Loss Event Type |
| `TermStartDate` |  | |  |  | `DATS(8)` | Term Start |
| `TermEndDate` |  | |  |  | `DATS(8)` | Term End |
| `DeliveryDate` |  | |  |  | `DATS(8)` | Delivery Date of a Commodity Derivative (OBSOLETE) |
| `NumberOfCommodityContracts` |  | |  |  | `CHAR(20)` | Number of Contracts |
| `CommodityPriceExposureQuantity` |  | |  |  | `QUAN(13)` | Quantity (OBSOLETE) |
| `CommodityPriceExposureUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for the Commodity |
| `TreasuryPositionAccount` |  | |  |  | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `DerivativeContract` |  | |  |  | `CHAR(13)` | Contract for Listed Options and Futures |
| `OptionStrikePrice` |  | |  |  | `CHAR(18)` | Option Strike Price |
| `OptionStrikeCurrency` |  | |  |  | `CHAR(5)` | Currency Unit of the Rate |
| `OptionPutCallCode` |  | |  |  | `NUMC(1)` | Put/Call Indicator |
| `OptionExerciseType` |  | |  |  | `NUMC(1)` | Exercise Type (American or European) |
| `EvaluationDate` |  | |  |  | `DATS(8)` | Evaluation Date |
| `MTMDataSelectionType` |  | |  |  | `CHAR(2)` | VLOGP Data Selection Type |
| `FinInstrExternalReference` |  | |  |  | `CHAR(16)` | External Reference |
| `DisplayView` |  | |  |  | `CHAR(1)` | View Variant |
| `HasError` |  | |  |  | `CHAR(1)` | Error Flag for Data Record of Commodity Risk Analytics |
| `ExternalKeyFigureValue` |  | |  |  | `CHAR(50)` | External Key figures |
| `OptionDeltaFactorKeyFigure` |  | |  |  | `DEC(15)` | Option Delta Factor |
| `OptionDeltaFactor` |  | |  |  | `CHAR(30)` | Option Delta Factor Value |
| `RiskAnalyzerKeyFigureName` |  | |  |  | `CHAR(40)` | Risk Analyzer Keyfigure Name |
| `RiskAnalyzerKeyFigInQtanCrcy` |  | |  |  | `CURR(23)` | Value in Quotation Currency |
| `QuotationCurrency` |  | |  |  | `CUKY(5)` | Evaluation in Quotation Currency |
| `RiskAnalyzerKeyFigInPaytCrcy` |  | |  |  | `CURR(23)` | Value in Payment Currency |
| `PaymentCurrency` |  | |  |  | `CUKY(5)` | Evaluation in Payment Currency |
| `RiskAnalyzerKeyFigInStstcCrcy` |  | |  |  | `CURR(23)` | Value in Statistics Currency |
| `StatisticsCurrency` |  | |  |  | `CUKY(5)` | Statistics Currency in Evaluation |
| `HasErrorDescription` |  | |  |  | `CHAR(60)` | Error Description |
| `SystemMessageNumber` |  | |  |  | `CHAR(3)` |  |
