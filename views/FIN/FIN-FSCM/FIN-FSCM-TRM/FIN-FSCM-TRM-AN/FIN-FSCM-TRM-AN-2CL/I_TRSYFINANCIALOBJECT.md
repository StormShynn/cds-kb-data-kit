---
name: I_TRSYFINANCIALOBJECT
description: "This CDS view provides information for financial objects. This CDS view provides the prerequisites for answering the following business questions: Which financial object exists for a financial transaction? What are the analysis characteristics of a financial transaction?"
app_component: FIN-FSCM-TRM-AN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYFINANCIALOBJECT')/$value
semantic_en: "This CDS view provides information for financial objects. This CDS view provides the prerequisites for answering the following business questions: Which financial object exists for a financial transaction? What are the analysis characteristics of a financial transaction?"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-AN-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-AN
  - FIN-FSCM-TRM-AN-2CL
  - interface-view
  - lob:finance
  - transaction
  - metadata-only
---
# I_TRSYFINANCIALOBJECT

**This CDS view provides information for financial objects. This CDS view provides the prerequisites for answering the following business questions: Which financial object exists for a financial transaction? What are the analysis characteristics of a financial transaction?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-AN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYFINANCIALOBJECT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryFinancialObject` |  | |  |  | `CHAR(22)` | Object Number for Financial Transactions |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `TrsyFinObjValidityStartDate` |  | |  |  | `DATS(8)` | Transaction Start for Risk Management |
| `TrsyFinObjValidityEndDate` |  | |  |  | `DATS(8)` | Transaction End for Risk Management |
| `TreasuryContractType` |  | |  |  | `CHAR(1)` | Contract Type |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `SecurityClass` |  | |  |  | `CHAR(13)` | Security Class ID Number |
| `SecurityAccount` |  | |  |  | `CHAR(10)` | Securities Account |
| `TreasuryPositionAccount` |  | |  |  | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `FinancialExposurePosition` |  | |  |  | `CHAR(20)` | Exposure Position ID |
| `LoanContract` |  | |  |  | `CHAR(13)` | Contract Number |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `MktRiskCharacteristicCurrency` |  | |  |  | `CUKY(5)` | Analytic Characteristic Currency |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `FinancialInstrCharacteristic` |  | |  |  | `CHAR(25)` | Characteristics |
