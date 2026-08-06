---
name: C_CRDTDCSNVERSUSSLSORDQ
description: Credit Decision Versus Sales Order Query
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTDCSNVERSUSSLSORDQ')/$value
semantic_en: Credit Decision Versus Sales Order Query
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
# C_CRDTDCSNVERSUSSLSORDQ

**Credit Decision Versus Sales Order Query**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTDCSNVERSUSSLSORDQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderType` | `CHAR(4)` | Sales Order Type |
| `CreationDate` | `DATS(8)` | Record Creation Date |
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `CrdtMgmtBusinessPartnerGroup` | `NUMC(4)` | Customer Credit Group |
| `CreditRiskClass` | `CHAR(3)` | Risk Class |
| `CreditSegment` | `CHAR(10)` | Credit Segment |
| `NumberOfSalesOrders` | `INT4(10)` | Number of Sales Orders |
| `NumberOfCreditDecisionDocs` | `INT4(10)` | Number of Credit Blocked Sales Orders |
| `CreditBlockedSalesOrdersPct` | `INT1(3)` |  |
