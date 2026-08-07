---
name: I_EXPNSETTLMTSTDVH
description: Expense Settlement
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTSTDVH')/$value
semantic_en: Expense Settlement
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_EXPNSETTLMTSTDVH

**Expense Settlement**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExpnSettlmt` |  | |  |  | `CHAR(10)` | Document Number of Expense Settlement |
| `BillToParty` |  | |  |  | `CHAR(10)` | Customer in Settlement Management |
| `CustSettlmtCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
