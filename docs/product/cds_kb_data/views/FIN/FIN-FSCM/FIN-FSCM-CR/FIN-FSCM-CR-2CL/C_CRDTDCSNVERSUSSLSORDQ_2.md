---
name: C_CRDTDCSNVERSUSSLSORDQ_2
description: "This CDS view is designed to provide analytical insights into the relationship between credit decisions and sales orders. It allows users to analyze how credit management impacts sales orders by comparing the number of sales orders with the number of credit decision documents. Additionally, it calculates the percentage of sales orders that are blocked due to credit issues. This CDS view provides the data to answer the following business questions: How many sales orders are associated with each business partner and what types are they? What is the creation date of these sales orders? What is the geographical distribution (country and region) of the sales orders? How are sales orders grouped by credit management business partner group, credit risk class, and credit segment? What is the total number of sales orders and credit decision documents? What percentage of sales orders are blocked due to credit issues? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTDCSNVERSUSSLSORDQ_2')/$value
semantic_en: "This CDS view is designed to provide analytical insights into the relationship between credit decisions and sales orders. It allows users to analyze how credit management impacts sales orders by comparing the number of sales orders with the number of credit decision documents. Additionally, it calculates the percentage of sales orders that are blocked due to credit issues. This CDS view provides the data to answer the following business questions: How many sales orders are associated with each business partner and what types are they? What is the creation date of these sales orders? What is the geographical distribution (country and region) of the sales orders? How are sales orders grouped by credit management business partner group, credit risk class, and credit segment? What is the total number of sales orders and credit decision documents? What percentage of sales orders are blocked due to credit issues? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - consumption-view
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - lob:finance
  - order
  - sales-order
  - metadata-only
---
# C_CRDTDCSNVERSUSSLSORDQ_2

**This CDS view is designed to provide analytical insights into the relationship between credit decisions and sales orders. It allows users to analyze how credit management impacts sales orders by comparing the number of sales orders with the number of credit decision documents. Additionally, it calculates the percentage of sales orders that are blocked due to credit issues. This CDS view provides the data to answer the following business questions: How many sales orders are associated with each business partner and what types are they? What is the creation date of these sales orders? What is the geographical distribution (country and region) of the sales orders? How are sales orders grouped by credit management business partner group, credit risk class, and credit segment? What is the total number of sales orders and credit decision documents? What percentage of sales orders are blocked due to credit issues? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTDCSNVERSUSSLSORDQ_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Order Type |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `NumberOfSalesOrders` |  | |  |  | `INT4(10)` | Number of Sales Orders |
| `NumberOfCreditDecisionDocs` |  | |  |  | `INT4(10)` | Number of Credit Blocked Sales Orders |
| `CreditBlockedSalesOrdersPct` |  | |  |  | `DECF(34)` |  |
