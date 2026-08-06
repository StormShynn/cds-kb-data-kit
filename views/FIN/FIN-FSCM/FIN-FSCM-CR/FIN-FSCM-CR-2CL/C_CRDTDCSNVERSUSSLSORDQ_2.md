---
name: C_CRDTDCSNVERSUSSLSORDQ_2
description: Credit Dcsn Vs Sales Order V2 Query
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTDCSNVERSUSSLSORDQ_2')/$value
semantic_en: Credit Dcsn Vs Sales Order V2 Query
tags:
  - FIN
  - bo:salesorder
  - component:FIN-FSCM-CR-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - lob:finance
  - order
  - sales-order
  - metadata-only
---
# C_CRDTDCSNVERSUSSLSORDQ_2

**Credit Dcsn Vs Sales Order V2 Query**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTDCSNVERSUSSLSORDQ_2')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderType` | `CHAR(4)` | Sales Order Type |
| `CreationDate` | `DATS(8)` | Record Creation Date |
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `Country` | `CHAR(3)` | Country/Region |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `CrdtMgmtBusinessPartnerGroup` | `NUMC(4)` | Customer Credit Group |
| `CreditRiskClass` | `CHAR(3)` | Risk Class |
| `CreditSegment` | `CHAR(10)` | Credit Segment |
| `NumberOfSalesOrders` | `INT4(10)` | Number of Sales Orders |
| `NumberOfCreditDecisionDocs` | `INT4(10)` | Number of Credit Blocked Sales Orders |
| `CreditBlockedSalesOrdersPct` | `DECF(34)` |  |
