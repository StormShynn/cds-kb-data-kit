---
name: C_BSORDGLACCTLINEITEMQRY
description: "This CDS view provides the data to answer the following business questions: What is the recognized revenue for my incoming solution order volume for a given time period? What is the recognized cost for my incoming solution order volume for a given time period? What is the recognized proft margin for my incoming solution order volume for a given time period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CRM-S4-ANA-CDS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BSORDGLACCTLINEITEMQRY')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is the recognized revenue for my incoming solution order volume for a given time period? What is the recognized cost for my incoming solution order volume for a given time period? What is the recognized proft margin for my incoming solution order volume for a given time period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CRM
  - bo:companycode
  - component:CRM-S4-ANA-CDS-2CL
  - consumption-view
  - CRM-S4
  - CRM-S4-ANA
  - CRM-S4-ANA-CDS
  - CRM-S4-ANA-CDS-2CL
  - order
  - metadata-only
---
# C_BSORDGLACCTLINEITEMQRY

**This CDS view provides the data to answer the following business questions: What is the recognized revenue for my incoming solution order volume for a given time period? What is the recognized cost for my incoming solution order volume for a given time period? What is the recognized proft margin for my incoming solution order volume for a given time period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BSORDGLACCTLINEITEMQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Transaction ID |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `BusSolnOrdType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `BusSolnOrdDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `BusSolnOrdItmDescription` |  | |  |  | `CHAR(40)` | Product Description |
| `BusSolnOrdItmStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `BusSolnOrdStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `BusSolnOrdRevnAmtInDC` |  | |  |  | `CURR(23)` |  |
| `BusSolnOrdCostAmtInDC` |  | |  |  | `CURR(23)` |  |
| `BusSolnOrdRecgdMargAmtInDC` |  | |  |  | `CURR(23)` |  |
| `SlsItmRevenueAmount` |  | |  |  | `CURR(23)` |  |
| `SrvcContrItmRevenueAmount` |  | |  |  | `CURR(23)` |  |
| `ExpnItmRevenueAmount` |  | |  |  | `CURR(23)` |  |
| `SbscrBilgItmRevenueAmount` |  | |  |  | `CURR(23)` |  |
| `SrvcPrtItmRevenueAmount` |  | |  |  | `CURR(23)` |  |
| `SrvcItmRevenueAmount` |  | |  |  | `CURR(23)` |  |
| `EntProjItmRevenueAmount` |  | |  |  | `CURR(23)` |  |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
