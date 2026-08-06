---
name: I_INHREPAIRTRANSACTIONRELATION
description: Relationship between Srvc Transactions
app_component: CRM-S4-IHR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRTRANSACTIONRELATION')/$value
semantic_en: Relationship between Srvc Transactions
tags:
  - CRM
  - component:CRM-S4-IHR-2CL
  - CRM-S4
  - CRM-S4-IHR
  - CRM-S4-IHR-2CL
  - interface-view
  - transaction
  - metadata-only
---
# I_INHREPAIRTRANSACTIONRELATION

**Relationship between Srvc Transactions**

| Property | Value |
|---|---|
| App Component | `CRM-S4-IHR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRTRANSACTIONRELATION')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CustMgmtTransacRelationUUID` | `CHAR(22)` | Object Relationship Service : GUID binary link |
| `CustMgmtPrdcssrTransactionUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `CustMgmtPrdcssrTransacObjType` | `CHAR(10)` | Object Type |
| `CustMgmtSuccssrTransactionUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `CustMgmtSuccssrTransactionKey` | `CHAR(70)` | Object key |
| `CustMgmtSuccssrTransacObjType` | `CHAR(10)` | Object Type |
| `CustMgmtTransacRelationType` | `CHAR(4)` | Relationship type |
| `CustMgmtPrdcssrTransactionKey` | `CHAR(70)` | Object key |
