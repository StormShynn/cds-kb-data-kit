---
name: C_BUSSOLNORDITMFINANCIALQ
description: This CDS view provides the data to answer the following business questions: What is my solution order volume for a given time period? What is my solution order volume by sales organization? How many solution orders do I have in a specific lifecycle status, for example, how many are in released status? What is my revenue, cost, and profit margin for a specific product/products? What is my net value of solution orders by item category over a period of time? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CRM-S4-ANA-CDS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSSOLNORDITMFINANCIALQ')/$value
semantic_en: This CDS view provides the data to answer the following business questions: What is my solution order volume for a given time period? What is my solution order volume by sales organization? How many solution orders do I have in a specific lifecycle status, for example, how many are in released status? What is my revenue, cost, and profit margin for a specific product/products? What is my net value of solution orders by item category over a period of time? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
  - product
  - metadata-only
---
# C_BUSSOLNORDITMFINANCIALQ

**This CDS view provides the data to answer the following business questions: What is my solution order volume for a given time period? What is my solution order volume by sales organization? How many solution orders do I have in a specific lifecycle status, for example, how many are in released status? What is my revenue, cost, and profit margin for a specific product/products? What is my net value of solution orders by item category over a period of time? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSSOLNORDITMFINANCIALQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceObjectType` |  | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Transaction ID |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `BusSolnOrdType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `BusSolnOrdDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `BusSolnOrdItmDescription` |  | |  |  | `CHAR(40)` | Product Description |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ServiceDocItemCategory` |  | |  |  | `CHAR(4)` | Item Category |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `ServiceDocumentItemObjectType` |  | |  |  | `CHAR(10)` | CRM Item Object Type |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `BusSolnOrdOpgMarginRatio` |  | |  |  | `DEC(23)` | Operating Margin Global Currency Percent |
| `TotBusSolnOrdItmNetAmtPerPerd` |  | |  |  | `CURR(15)` |  |
| `BusSolnOrdRevnAmtInDC` |  | |  |  | `CURR(23)` |  |
| `BusSolnOrdCostAmtInDC` |  | |  |  | `CURR(23)` |  |
| `BusSolnOrdRecgdMargAmtInDC` |  | |  |  | `CURR(23)` |  |
| `SlsItmNetAmount` |  | |  |  | `CURR(15)` |  |
| `ServiceContractItemNetAmount` |  | |  |  | `CURR(15)` |  |
| `ExpnItmNetAmount` |  | |  |  | `CURR(15)` |  |
| `SbscrBilgItmNetAmount` |  | |  |  | `CURR(15)` |  |
| `SrvcPrtItmNetAmount` |  | |  |  | `CURR(15)` |  |
| `SrvcItmNetAmount` |  | |  |  | `CURR(15)` |  |
| `EnterpriseProjectItemNetAmount` |  | |  |  | `CURR(15)` |  |
| `NrOfOpenBusSolnOrders` |  | |  |  | `INT4(10)` |  |
| `NrOfReldBusSolnOrders` |  | |  |  | `INT4(10)` |  |
| `NrOfCmpltdBusSolnOrders` |  | |  |  | `INT4(10)` |  |
| `BusSolnOrdStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `BusSolnOrdItmStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceDocItemCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `ServiceDocumentCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `BusSolnOrdCreationQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `BusSolnOrdCreationMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `BusSolnOrdCreationYear` |  | |  |  | `NUMC(4)` | Calendar Year |
