---
name: C_CASHFLOWQUERY
description: This CDS view provides a definition of the query on the records in One Exposure. It retrieves the effective date records of cash flows coming from all the pre-defined source applications. This CDS view provides the data to answer the following business questions: What is the definition of the query on the records in One Exposure? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CASHFLOWQUERY')/$value
semantic_en: This CDS view provides a definition of the query on the records in One Exposure. It retrieves the effective date records of cash flows coming from all the pre-defined source applications. This CDS view provides the data to answer the following business questions: What is the definition of the query on the records in One Exposure? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CLM-FQM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-FQM
  - FIN-FSCM-CLM-FQM-2CL
  - lob:finance
  - lob:quality management
  - metadata-only
---
# C_CASHFLOWQUERY

**This CDS view provides a definition of the query on the records in One Exposure. It retrieves the effective date records of cash flows coming from all the pre-defined source applications. This CDS view provides the data to answer the following business questions: What is the definition of the query on the records in One Exposure? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-FQM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CASHFLOWQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OriginSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `OriginApplication` |  | |  |  | `CHAR(5)` | Source Application |
| `OriginDocument` |  | |  |  | `CHAR(32)` | Source Document ID |
| `OriginTransaction` |  | |  |  | `CHAR(32)` | Source Transaction ID |
| `OriginTransactionQualifier` |  | |  |  | `CHAR(3)` | Source Transaction Qualifier |
| `CashFlow` |  | |  |  | `CHAR(32)` | Line Item in Source Document |
| `ValidFrom` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `ValidTo` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `CashFlowID` |  | |  |  | `NUMC(16)` | Flow ID |
| `IsValid` |  | |  |  | `CHAR(1)` | FQM Flag Actual |
| `CashTransactionOwner` |  | |  |  | `CHAR(3)` | Owner of a Business Transaction |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `TransactionDate` |  | |  |  | `DATS(8)` | Transaction Date |
| `CertaintyLevel` |  | |  |  | `CHAR(6)` | Certainty Level |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount |
| `CashReleaseStatus` |  | |  |  | `CHAR(1)` | Release Status |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Number of Line Item Within Accounting Document |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `PostingFiscalPeriod` |  | |  |  | `NUMC(2)` | Fiscal Period |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `GLAccount` |  | |  |  | `CHAR(10)` | General Ledger Account |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `ValueDate` |  | |  |  | `DATS(8)` | Value Date |
| `NetDueDate` |  | |  |  | `DATS(8)` | Net Due Date |
| `CashPlanningGroup` |  | |  |  | `CHAR(10)` | Planning Group |
| `PlanningLevel` |  | |  |  | `CHAR(2)` | Planning Level |
| `HouseBank` |  | |  |  | `CHAR(5)` | Short Key for a House Bank |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | ID for Account Details |
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `LiquidityItem` |  | |  |  | `CHAR(16)` | Liquidity Item |
| `SourceCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `SecurityClass` |  | |  |  | `CHAR(13)` | Security Class ID Number |
| `SecurityAccount` |  | |  |  | `CHAR(10)` | Securities Account |
| `AssetContract` |  | |  |  | `CHAR(13)` | Contract Number |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
