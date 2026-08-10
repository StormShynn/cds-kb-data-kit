---
name: I_CRDTDCSNVERSUSSLSORDC_2
description: "This CDS view is designed to provide analytical insights into the relationship between credit decisions and sales orders. It aggregates and analyzes data related to sales orders, credit management, and associated business partners, allowing businesses to understand how credit decisions impact sales activities. This CDS view provides the data to answer the following business questions: How many sales orders have associated credit decision documents? What is the distribution of sales orders across different credit risk classes? How are sales orders distributed across various credit segments and business partner groups? What is the geographical distribution of sales orders in terms of country and region? How many sales orders are blocked due to credit decisions? What is the relationship between sales order types and credit management decisions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNVERSUSSLSORDC_2')/$value
semantic_en: "This CDS view is designed to provide analytical insights into the relationship between credit decisions and sales orders. It aggregates and analyzes data related to sales orders, credit management, and associated business partners, allowing businesses to understand how credit decisions impact sales activities. This CDS view provides the data to answer the following business questions: How many sales orders have associated credit decision documents? What is the distribution of sales orders across different credit risk classes? How are sales orders distributed across various credit segments and business partner groups? What is the geographical distribution of sales orders in terms of country and region? How many sales orders are blocked due to credit decisions? What is the relationship between sales order types and credit management decisions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - order
  - sales-order
  - metadata-only
---
# I_CRDTDCSNVERSUSSLSORDC_2

**This CDS view is designed to provide analytical insights into the relationship between credit decisions and sales orders. It aggregates and analyzes data related to sales orders, credit management, and associated business partners, allowing businesses to understand how credit decisions impact sales activities. This CDS view provides the data to answer the following business questions: How many sales orders have associated credit decision documents? What is the distribution of sales orders across different credit risk classes? How are sales orders distributed across various credit segments and business partner groups? What is the geographical distribution of sales orders in terms of country and region? How many sales orders are blocked due to credit decisions? What is the relationship between sales order types and credit management decisions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNVERSUSSLSORDC_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Order Type |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SalesOrderHasCreditDecisionDoc` |  | |  |  | `CHAR(1)` |  |
| `NumberOfSalesOrders` |  | |  |  | `INT4(10)` | Number of Sales Orders |
| `NumberOfCreditDecisionDocs` |  | |  |  | `INT4(10)` | Number of Credit Blocked Sales Orders |
