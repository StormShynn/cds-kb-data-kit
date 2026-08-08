---
name: I_CUSTSETTLMTLISTITEMSTDVH
description: "Customer Settlement List Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTITEMSTDVH')/$value
semantic_en: "Customer Settlement List Item"
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
# I_CUSTSETTLMTLISTITEMSTDVH

**Customer Settlement List Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTITEMSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmtList` |  | |  |  | `CHAR(10)` | Settlement Document: Customer Settlement List |
| `CustSettlmtListItem` |  | |  |  | `NUMC(6)` | Item in List |
| `RefSettlmtDoc` |  | |  |  | `CHAR(10)` | Settlement Document Number |
