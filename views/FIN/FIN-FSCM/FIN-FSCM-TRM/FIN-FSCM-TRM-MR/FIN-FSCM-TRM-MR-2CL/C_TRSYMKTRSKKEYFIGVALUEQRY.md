---
name: C_TRSYMKTRSKKEYFIGVALUEQRY
description: This CDS view provides you with the values of market risk key figures (excluding value at risk and mean excess loss) on single position level and higher aggregation levels, such as company code and product type. The market risk key figure values of the single positions are calculated and stored using the Calculate Market Risk Key Figures job template. The aggregation rules for all market risk key figures are defined in the CDS view to ensure the correct reporting of the market risk key figures on the chosen aggregation levels. This CDS view provides the prerequisites for answering the following business questions: What are the market risk key figures in evaluation curreny or display currency on company code level? How do you distribute the results of a company code among the different product types? What are the market risk key figures in evaluation curreny or display currency on single position level? Caution The usage of the financial object number or the transaction number as a dimension can lead to extensive data volumes and long query runtimes. If this is necessary for a detailed analysis, first apply selective filters to limit the data volume.
app_component: FIN-FSCM-TRM-MR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYMKTRSKKEYFIGVALUEQRY')/$value
semantic_en: This CDS view provides you with the values of market risk key figures (excluding value at risk and mean excess loss) on single position level and higher aggregation levels, such as company code and product type. The market risk key figure values of the single positions are calculated and stored using the Calculate Market Risk Key Figures job template. The aggregation rules for all market risk key figures are defined in the CDS view to ensure the correct reporting of the market risk key figures on the chosen aggregation levels. This CDS view provides the prerequisites for answering the following business questions: What are the market risk key figures in evaluation curreny or display currency on company code level? How do you distribute the results of a company code among the different product types? What are the market risk key figures in evaluation curreny or display currency on single position level? Caution The usage of the financial object number or the transaction number as a dimension can lead to extensive data volumes and long query runtimes. If this is necessary for a detailed analysis, first apply selective filters to limit the data volume.
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-MR-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-MR
  - FIN-FSCM-TRM-MR-2CL
  - lob:finance
  - product
  - transaction
  - metadata-only
---
# C_TRSYMKTRSKKEYFIGVALUEQRY

**This CDS view provides you with the values of market risk key figures (excluding value at risk and mean excess loss) on single position level and higher aggregation levels, such as company code and product type. The market risk key figure values of the single positions are calculated and stored using the Calculate Market Risk Key Figures job template. The aggregation rules for all market risk key figures are defined in the CDS view to ensure the correct reporting of the market risk key figures on the chosen aggregation levels. This CDS view provides the prerequisites for answering the following business questions: What are the market risk key figures in evaluation curreny or display currency on company code level? How do you distribute the results of a company code among the different product types? What are the market risk key figures in evaluation curreny or display currency on single position level? Caution The usage of the financial object number or the transaction number as a dimension can lead to extensive data volumes and long query runtimes. If this is necessary for a detailed analysis, first apply selective filters to limit the data volume.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-MR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYMKTRSKKEYFIGVALUEQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MarketRiskKeyFigureSet` |  | |  |  | `CHAR(6)` | Market Risk Key Figure Set |
| `ValidityDate` |  | |  |  | `DATS(8)` | Key Date in Results Databases |
| `TreasuryFinancialObject` |  | |  |  | `CHAR(22)` | Object Number for Financial Transactions |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `TreasuryContractType` |  | |  |  | `CHAR(1)` | Contract Type |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `SecurityClass` |  | |  |  | `CHAR(13)` | Security Class ID Number |
| `SecurityAccount` |  | |  |  | `CHAR(10)` | Securities Account |
| `TreasuryPositionAccount` |  | |  |  | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `FinancialExposurePosition` |  | |  |  | `CHAR(20)` | Exposure Position ID |
| `LoanContract` |  | |  |  | `CHAR(13)` | Contract Number |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `MktRiskCharacteristicCurrency` |  | |  |  | `CUKY(5)` | Analytic Characteristic Currency |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `FinancialInstrCharacteristic` |  | |  |  | `CHAR(25)` | Characteristics |
| `NetPresentValueSign` |  | |  |  | `CHAR(1)` | Sign of Net Present Value |
| `NetPresentValueInDisplayCrcy` |  | |  |  | `CURR(23)` | Net Present Value in Display Currency |
| `CleanPriceAmountInDisplayCrcy` |  | |  |  | `CURR(23)` | Clean Price in Display Currency |
| `BasePointValueAmountInDspCrcy` |  | |  |  | `CURR(23)` | Basis Point Value in Display Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `NetPresentValueInEvalCrcy` |  | |  |  | `CURR(23)` | Net Present Value in Evaluation Currency |
| `CleanPriceAmountInEvalCrcy` |  | |  |  | `CURR(23)` | Clean Price in Evaluation Currency |
| `BasePointValueAmountInEvalCrcy` |  | |  |  | `CURR(23)` | Basis Point Value in Evaluation Currency |
| `EvaluationCurrency` |  | |  |  | `CUKY(5)` | Evaluation Currency |
| `MktRskKeyFigMacaulayDuration` |  | |  |  | `FLTP(16)` | Macaulay Duration |
| `MktRskKeyFigModifiedDuration` |  | |  |  | `FLTP(16)` | Modified Duration |
| `MktRskKeyFigFisherWeilDuration` |  | |  |  | `FLTP(16)` | Fisher-Weil Duration Value |
| `NetPresentValueConvexityValue` |  | |  |  | `FLTP(16)` | Convexity |
| `OptionDeltaValue` |  | |  |  | `FLTP(16)` | Option Delta |
| `YieldToMaturityRate` |  | |  |  | `FLTP(16)` | Yield to Maturity |
