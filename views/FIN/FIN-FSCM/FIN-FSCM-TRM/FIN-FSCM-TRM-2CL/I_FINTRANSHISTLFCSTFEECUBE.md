---
name: I_FINTRANSHISTLFCSTFEECUBE
description: This CDS view provides the data to answer the following business questions What is the amount of paid financial transaction fees in transaction currency on specific dates in the reporting period? What is the amount of financial transaction fees in transaction currency on specific dates in the forecast period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSHISTLFCSTFEECUBE')/$value
semantic_en: This CDS view provides the data to answer the following business questions What is the amount of paid financial transaction fees in transaction currency on specific dates in the reporting period? What is the amount of financial transaction fees in transaction currency on specific dates in the forecast period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
  - metadata-only
---
# I_FINTRANSHISTLFCSTFEECUBE

**This CDS view provides the data to answer the following business questions What is the amount of paid financial transaction fees in transaction currency on specific dates in the reporting period? What is the amount of financial transaction fees in transaction currency on specific dates in the forecast period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSHISTLFCSTFEECUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FinancialTransaction` | `CHAR(13)` | Financial Transaction |
| `FinTransFeeDataSource` | `CHAR(10)` | Data source for FinTrans Fee |
| `FinTransFlowType` | `CHAR(4)` | Flow Type |
| `FinTransFlowCreationTime` | `TIMS(6)` | Flow Entry Time |
| `FinancialInstrumentActivity` | `NUMC(5)` | Transaction Activity |
| `FinTransFlowCreationDate` | `DATS(8)` | Entered On |
| `FinTransFlowNumber` | `NUMC(4)` | Transaction Flow |
| `FinTransFlowPaymentDate` | `DATS(8)` | Flow Payment Date |
| `TreasuryContractType` | `CHAR(1)` | Contract Type |
| `FinTransFlowPostingStatus` | `CHAR(1)` | Flow Fixing Status |
| `FinTransFlowFixingStatus` | `CHAR(1)` | Flow Fixing Status |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `FinTransFlowPaytAmt` | `CURR(13)` | Flow Payment Amount |
| `FinTransFlowPaytAmtCrcy` | `CUKY(5)` | Payment Currency |
| `BankGroup` | `CHAR(10)` | Bank Group ID |
| `Counterparty` | `CHAR(10)` | Counterparty Number |
| `FinancialInstrumentProductType` | `CHAR(3)` | Product Type |
| `Portfolio` | `CHAR(10)` | Portfolio |
| `SecurityAccount` | `CHAR(10)` | Security Account |
| `FinancialInstrTransactionType` | `CHAR(3)` | Financial Instrument Transaction Type |
| `YearMonth` | `NUMC(6)` | Year Month |
| `YearQuarter` | `NUMC(5)` | Year Quarter |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
