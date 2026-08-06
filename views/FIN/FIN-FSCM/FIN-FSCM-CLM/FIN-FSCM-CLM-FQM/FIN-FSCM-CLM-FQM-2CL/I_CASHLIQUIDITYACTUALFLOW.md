---
name: I_CASHLIQUIDITYACTUALFLOW
description: This CDS view provides the data to answer the following business questions: What are the cash actual amounts per bank account and transaction date in transaction currency? What are the cash actual amounts per bank account and transaction date in company code currency? What are the cash actual amounts per bank account and transaction date in global currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASHLIQUIDITYACTUALFLOW')/$value
semantic_en: This CDS view provides the data to answer the following business questions: What are the cash actual amounts per bank account and transaction date in transaction currency? What are the cash actual amounts per bank account and transaction date in company code currency? What are the cash actual amounts per bank account and transaction date in global currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-FQM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-FQM
  - FIN-FSCM-CLM-FQM-2CL
  - interface-view
  - lob:finance
  - lob:quality management
  - transaction
  - metadata-only
---
# I_CASHLIQUIDITYACTUALFLOW

**This CDS view provides the data to answer the following business questions: What are the cash actual amounts per bank account and transaction date in transaction currency? What are the cash actual amounts per bank account and transaction date in company code currency? What are the cash actual amounts per bank account and transaction date in global currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-FQM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASHLIQUIDITYACTUALFLOW')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CashFlowID` | `NUMC(16)` | Flow ID |
| `CshFlwValdtyStrtDteTmeVal` | `DEC(21)` | FQM Flow Valid From - Decimal Type |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `TransactionDate` | `DATS(8)` | Transaction Date |
| `PostingDate` | `DATS(8)` | Posting Date in the Document |
| `TransactionCurrency` | `CUKY(5)` | Currency |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount |
| `CompanyCodeCurrency` | `CUKY(5)` | Currency Key |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `BankAccountInternalID` | `NUMC(10)` | Bank Account Technical ID |
| `Bank` | `CHAR(15)` | Bank Key |
| `BankCountry` | `CHAR(3)` | Bank Country/Region Key |
| `BankName` | `CHAR(60)` | Name of Financial Institution |
