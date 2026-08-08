---
name: I_UA_RECNCLNRPTEMLTEMPLATE
description: "UA Reconciliation Report Email Template"
app_component: FI-LOC-FI-RU
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UA_RECNCLNRPTEMLTEMPLATE')/$value
semantic_en: "UA Reconciliation Report Email Template"
tags:
  - FI
  - bo:purchaseorder
  - component:FI-LOC-FI-RU
  - FI-LOC
  - FI-LOC-FI
  - FI-LOC-FI-RU
  - interface-view
  - lob:finance
  - lob:logistics general
  - metadata-only
---
# I_UA_RECNCLNRPTEMLTEMPLATE

**UA Reconciliation Report Email Template**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-RU` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UA_RECNCLNRPTEMLTEMPLATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReconciliationReportUUID` |  | |  |  | `RAW(16)` | NodeID |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CompanyCodeName` |  | |  |  | `CHAR(163)` |  |
| `StartDate` |  | |  |  | `DATS(8)` | Start Date |
| `EndDate` |  | |  |  | `DATS(8)` | End Date |
