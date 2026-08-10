---
name: I_CRDTDCSNVERSUSSLSORDC
description: "This CDS view is designed to provide a comprehensive analysis of the relationship between credit decisions and sales orders. It aggregates data related to sales orders and their corresponding credit management details, allowing businesses to assess how credit decisions impact sales activities. This CDS view provides the data to answer the following business questions: How many sales orders are associated with specific credit decisions? What is the distribution of sales orders across different credit risk classes? How do sales orders vary across different credit segments and business partner groups? What is the impact of credit control areas on sales order processing? How many sales orders have been blocked or affected due to credit decisions? What are the trends in sales order creation dates in relation to credit management activities? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNVERSUSSLSORDC')/$value
semantic_en: "This CDS view is designed to provide a comprehensive analysis of the relationship between credit decisions and sales orders. It aggregates data related to sales orders and their corresponding credit management details, allowing businesses to assess how credit decisions impact sales activities. This CDS view provides the data to answer the following business questions: How many sales orders are associated with specific credit decisions? What is the distribution of sales orders across different credit risk classes? How do sales orders vary across different credit segments and business partner groups? What is the impact of credit control areas on sales order processing? How many sales orders have been blocked or affected due to credit decisions? What are the trends in sales order creation dates in relation to credit management activities? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - order
  - sales-order
  - metadata-only
---
# I_CRDTDCSNVERSUSSLSORDC

**This CDS view is designed to provide a comprehensive analysis of the relationship between credit decisions and sales orders. It aggregates data related to sales orders and their corresponding credit management details, allowing businesses to assess how credit decisions impact sales activities. This CDS view provides the data to answer the following business questions: How many sales orders are associated with specific credit decisions? What is the distribution of sales orders across different credit risk classes? How do sales orders vary across different credit segments and business partner groups? What is the impact of credit control areas on sales order processing? How many sales orders have been blocked or affected due to credit decisions? What are the trends in sales order creation dates in relation to credit management activities? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNVERSUSSLSORDC')/$value) |

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
| `SalesOrderHasCreditDecisionDoc` |  | |  |  | `CHAR(1)` |  |
| `NumberOfSalesOrders` |  | |  |  | `INT4(10)` | Number of Sales Orders |
| `NumberOfCreditDecisionDocs` |  | |  |  | `INT4(10)` | Number of Credit Blocked Sales Orders |
