---
name: I_FTR_FACILITY_VH
description: "This CDS view is used in the app Credit Line Analysis - Review Booklet for the value help of a facility transaction. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FTR_FACILITY_VH')/$value
semantic_en: "This CDS view is used in the app Credit Line Analysis - Review Booklet for the value help of a facility transaction. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_FTR_FACILITY_VH

**This CDS view is used in the app Credit Line Analysis - Review Booklet for the value help of a facility transaction. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FTR_FACILITY_VH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Financial Instrument Product Category |
| `TreasuryMasterAgreement` |  | |  |  | `CHAR(10)` | Master Agreement |
| `FinancialInstrumentStatus` |  | |  |  | `NUMC(1)` | Active Status of Transaction or Activity |
| `Counterparty` |  | |  |  | `CHAR(10)` | Counterparty Number |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `TreasuryFinanceProject` |  | |  |  | `CHAR(13)` | Finance Project |
| `TreasuryFacility` |  | |  |  | `CHAR(13)` | Transaction Number of Facility |
| `TreasuryFacilityCompanyCode` |  | |  |  | `CHAR(4)` | Company Code of Facility |
| `FinancialInstrumentAssignment` |  | |  |  | `CHAR(18)` | Free Assignment of Financial Transaction |
| `FinancialInstrumentReference` |  | |  |  | `CHAR(16)` | Free Internal Reference of Financial Transaction |
| `FinancialInstrCharacteristic` |  | |  |  | `CHAR(25)` | Free Characteristic of Financial Transaction |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Instrument Transaction Type |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Entered By |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `TermStartDate` |  | |  |  | `DATS(8)` | Term Start |
| `TermEndDate` |  | |  |  | `DATS(8)` | Term End |
| `HedgingClassification` |  | |  |  | `CHAR(5)` | Hedging Classification |
| `FinInstrumentIncomingCurrency` |  | |  |  | `CUKY(5)` | Currency of Incoming Side |
| `FinInstrumentOutgoingCurrency` |  | |  |  | `CUKY(5)` | Currency of Outgoing Side |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
