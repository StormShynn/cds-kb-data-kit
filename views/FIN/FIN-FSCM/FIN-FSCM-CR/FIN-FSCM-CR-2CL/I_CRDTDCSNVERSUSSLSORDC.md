---
name: I_CRDTDCSNVERSUSSLSORDC
description: Credit Decsn Versus Sales Order - Cube
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNVERSUSSLSORDC')/$value
semantic_en: Credit Decsn Versus Sales Order - Cube
tags:
  - FIN
  - bo:salesorder
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

**Credit Decsn Versus Sales Order - Cube**

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
