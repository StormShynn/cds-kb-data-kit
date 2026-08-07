---
name: C_CREDITLOSSALLOWANCE
description: This CDS view is designed to analyze credit loss allowances within a company's financial data. It provides a structured way to access and evaluate impairment data from the general ledger, focusing on various financial dimensions such as ledger, company code, fiscal year, and period. The view is tailored for consumption in analytical scenarios, allowing users to query and visualize credit loss information effectively. This CDS view provides the data to answer the following business questions: What are the credit loss allowances for specific ledgers and company codes within a given fiscal year and period? How do credit loss allowances vary across different business partners and countries? What is the distribution of credit loss allowances across different credit risk classes? How are credit loss allowances allocated to specific general ledger accounts, customers, cost centers, profit centers, functional areas, and segments? What is the impact of credit loss allowances on financial statements when viewed in different display currencies? How do credit loss allowances change over time, considering general ledger aging increments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-GL-GL-G-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLOSSALLOWANCE')/$value
semantic_en: This CDS view is designed to analyze credit loss allowances within a company's financial data. It provides a structured way to access and evaluate impairment data from the general ledger, focusing on various financial dimensions such as ledger, company code, fiscal year, and period. The view is tailored for consumption in analytical scenarios, allowing users to query and visualize credit loss information effectively. This CDS view provides the data to answer the following business questions: What are the credit loss allowances for specific ledgers and company codes within a given fiscal year and period? How do credit loss allowances vary across different business partners and countries? What is the distribution of credit loss allowances across different credit risk classes? How are credit loss allowances allocated to specific general ledger accounts, customers, cost centers, profit centers, functional areas, and segments? What is the impact of credit loss allowances on financial statements when viewed in different display currencies? How do credit loss allowances change over time, considering general ledger aging increments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-GL-GL-G-2CL
  - consumption-view
  - customer
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-G
  - FI-GL-GL-G-2CL
  - lob:finance
  - metadata-only
---
# C_CREDITLOSSALLOWANCE

**This CDS view is designed to analyze credit loss allowances within a company's financial data. It provides a structured way to access and evaluate impairment data from the general ledger, focusing on various financial dimensions such as ledger, company code, fiscal year, and period. The view is tailored for consumption in analytical scenarios, allowing users to query and visualize credit loss information effectively. This CDS view provides the data to answer the following business questions: What are the credit loss allowances for specific ledgers and company codes within a given fiscal year and period? How do credit loss allowances vary across different business partners and countries? What is the distribution of credit loss allowances across different credit risk classes? How are credit loss allowances allocated to specific general ledger accounts, customers, cost centers, profit centers, functional areas, and segments? What is the impact of credit loss allowances on financial statements when viewed in different display currencies? How do credit loss allowances change over time, considering general ledger aging increments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-G-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLOSSALLOWANCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `LedgerName` |  | |  |  | `CHAR(30)` | Ledger Name |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `GeneralLedgerAgingIncrement` |  | |  |  | `CHAR(15)` | Aging Increment |
| `GLAccount` |  | |  |  | `CHAR(10)` | Account Number |
| `GLAccountName` |  | |  |  | `CHAR(20)` | G/L Account Name |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProfitCenterName` |  | |  |  | `CHAR(20)` | Description of Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `FunctionalAreaName` |  | |  |  | `CHAR(25)` | Name of the Functional Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `SegmentName` |  | |  |  | `CHAR(50)` | Segment Name |
| `LossAllowanceSortSequenceValue` |  | |  |  | `NUMC(3)` | Sorting Order of Key Figures in a Layout |
| `LossAllowanceKeyFigure` |  | |  |  | `CHAR(30)` | Key Figure |
| `LossAllowanceKeyFigureName` |  | |  |  | `CHAR(70)` | Name of Key Figure |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Balance Amount |
