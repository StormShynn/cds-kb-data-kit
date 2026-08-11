---
name: I_CUSTSETTLMTLISTSTDVH
description: "Customer Settlement List"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTSTDVH')/$value
semantic_en: "Customer Settlement List"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_CUSTSETTLMTLISTSTDVH

**Customer Settlement List**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmtList` |  | |  |  | `CHAR(10)` | Settlement Document: Customer Settlement List |
| `BillToParty` |  | |  |  | `CHAR(10)` | Customer in Settlement Management |
| `CustSettlmtCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
