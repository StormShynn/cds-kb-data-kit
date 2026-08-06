---
name: I_TRSYMKTRSKKEYFIGVALUECUBE
description: This CDS view shows the market risk key figure values on single position level. The shown market risk key figures are calculated and stored using the Calculate Market Risk Key Figures job template. This CDS view provides the prerequisites for answering the following business questions: What are the market risk key figure values in evaluation currency of a financial transaction for one or multiple market risk key figure sets? What are the market risk key figure values in display currency of a financial transaction for one or multiple market risk key figure sets?
app_component: FIN-FSCM-TRM-MR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYMKTRSKKEYFIGVALUECUBE')/$value
semantic_en: This CDS view shows the market risk key figure values on single position level. The shown market risk key figures are calculated and stored using the Calculate Market Risk Key Figures job template. This CDS view provides the prerequisites for answering the following business questions: What are the market risk key figure values in evaluation currency of a financial transaction for one or multiple market risk key figure sets? What are the market risk key figure values in display currency of a financial transaction for one or multiple market risk key figure sets?
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-MR-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-MR
  - FIN-FSCM-TRM-MR-2CL
  - interface-view
  - lob:finance
  - transaction
  - metadata-only
---
# I_TRSYMKTRSKKEYFIGVALUECUBE

**This CDS view shows the market risk key figure values on single position level. The shown market risk key figures are calculated and stored using the Calculate Market Risk Key Figures job template. This CDS view provides the prerequisites for answering the following business questions: What are the market risk key figure values in evaluation currency of a financial transaction for one or multiple market risk key figure sets? What are the market risk key figure values in display currency of a financial transaction for one or multiple market risk key figure sets?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-MR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYMKTRSKKEYFIGVALUECUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ValidityDate` | `DATS(8)` | Key Date in Results Databases |
| `MarketRiskKeyFigureSet` | `CHAR(6)` | Market Risk Key Figure Set |
| `TreasuryFinancialObject` | `CHAR(22)` | Object Number for Financial Transactions |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `TreasuryContractType` | `CHAR(1)` | Contract Type |
| `FinancialInstrProductCategory` | `NUMC(3)` | Product Category |
| `FinancialInstrumentProductType` | `CHAR(3)` | Product Type |
| `Portfolio` | `CHAR(10)` | Portfolio |
| `FinancialTransaction` | `CHAR(13)` | Financial Transaction |
| `SecurityClass` | `CHAR(13)` | Security Class ID Number |
| `SecurityAccount` | `CHAR(10)` | Securities Account |
| `TreasuryPositionAccount` | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `FinancialExposurePosition` | `CHAR(20)` | Exposure Position ID |
| `LoanContract` | `CHAR(13)` | Contract Number |
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `MktRiskCharacteristicCurrency` | `CUKY(5)` | Analytic Characteristic Currency |
| `Country` | `CHAR(3)` | Country/Region Key |
| `FinancialInstrCharacteristic` | `CHAR(25)` | Characteristics |
| `NetPresentValueSign` | `CHAR(1)` | Sign of Net Present Value |
| `NetPresentValueInEvalCrcy` | `CURR(23)` | Net Present Value in Evaluation Currency |
| `NetPresentValueInDisplayCrcy` | `CURR(23)` | Net Present Value in Display Currency |
| `NetPresentValue` | `FLTP(16)` | Net Present Value |
| `DurationNetPresentValue` | `FLTP(16)` | Net Present Value Used for Duration Calculation |
| `CleanPriceAmountInEvalCrcy` | `CURR(23)` | Clean Price in Evaluation Currency |
| `CleanPriceAmountInDisplayCrcy` | `CURR(23)` | Clean Price in Display Currency |
| `NgtvIntRateShiftNetPresentVal` | `FLTP(16)` | Net Present Value of Symmetric Negative Interest Rate Shift |
| `PstvIntRateShiftNetPresentVal` | `FLTP(16)` | Net Present Value of Symmetric Positive Interest Rate Shift |
| `BasePointValueAmountInEvalCrcy` | `CURR(23)` | Basis Point Value in Evaluation Currency |
| `BasePointValueAmountInDspCrcy` | `CURR(23)` | Basis Point Value in Display Currency |
| `MacaulayDurnWgtdNetPresentVal` | `FLTP(16)` |  |
| `ModifiedDurnWgtdNetPresentVal` | `FLTP(16)` |  |
| `OptionDeltaValue` | `FLTP(16)` | Option Delta |
| `YieldToMaturityRate` | `FLTP(16)` | Yield to Maturity |
| `NumberOfRecords` | `INT4(10)` |  |
| `EvaluationCurrency` | `CUKY(5)` | Evaluation Currency |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
