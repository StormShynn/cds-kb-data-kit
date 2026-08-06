---
name: C_TRSYVALUEATRISKQUERY
description: This CDS query view calculates the value at risk and mean excess loss market risk key figures based on the parameters of the market risk key figure sets. This CDS view provides the prerequisites for answering the following business questions: What is the overall value at risk for all company codes? What is the value at risk for a specific company code of lower aggregation levels? For market risk key figure sets with VaR calculation using simulation methods: What is the mean excess loss?
app_component: FIN-FSCM-TRM-MR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYVALUEATRISKQUERY')/$value
semantic_en: This CDS query view calculates the value at risk and mean excess loss market risk key figures based on the parameters of the market risk key figure sets. This CDS view provides the prerequisites for answering the following business questions: What is the overall value at risk for all company codes? What is the value at risk for a specific company code of lower aggregation levels? For market risk key figure sets with VaR calculation using simulation methods: What is the mean excess loss?
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
  - metadata-only
---
# C_TRSYVALUEATRISKQUERY

**This CDS query view calculates the value at risk and mean excess loss market risk key figures based on the parameters of the market risk key figure sets. This CDS view provides the prerequisites for answering the following business questions: What is the overall value at risk for all company codes? What is the value at risk for a specific company code of lower aggregation levels? For market risk key figure sets with VaR calculation using simulation methods: What is the mean excess loss?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-MR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYVALUEATRISKQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ValidityDate` | `DATS(8)` | Key Date in Results Databases |
| `TreasuryFinancialObject` | `CHAR(22)` | Object Number for Financial Transactions |
| `MarketRiskKeyFigureSet` | `CHAR(6)` | Market Risk Key Figure Set |
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
| `ValueAtRiskInDisplayCurrency` | `CURR(23)` | Value at Risk in Display Currency |
| `MeanExcessLossAmtInDisplayCrcy` | `CURR(23)` | Mean Excess Loss in Display Currency |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `ValueAtRiskInEvaluationCrcy` | `CURR(23)` | Value at Risk in Evaluation Currency |
| `MeanExcessLossAmtInEvalCrcy` | `CURR(23)` | Mean Excess Loss in Evaluation Currency |
| `EvaluationCurrency` | `CUKY(5)` | Evaluation Currency |
