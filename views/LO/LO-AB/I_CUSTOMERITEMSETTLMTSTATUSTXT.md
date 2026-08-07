---
name: I_CUSTOMERITEMSETTLMTSTATUSTXT
description: This CDS view exposes fixed values of the field Customer Item Settlement Status. The following fixed values have been maintained: ‘ ‘ Not Relevant 1 Open 2 Blocked 3 Settled 6 Completed Through Cancellation
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERITEMSETTLMTSTATUSTXT')/$value
semantic_en: This CDS view exposes fixed values of the field Customer Item Settlement Status. The following fixed values have been maintained: ‘ ‘ Not Relevant 1 Open 2 Blocked 3 Settled 6 Completed Through Cancellation
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
# I_CUSTOMERITEMSETTLMTSTATUSTXT

**This CDS view exposes fixed values of the field Customer Item Settlement Status. The following fixed values have been maintained: ‘ ‘ Not Relevant 1 Open 2 Blocked 3 Settled 6 Completed Through Cancellation**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERITEMSETTLMTSTATUSTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerItemSettlmtStatus` |  | |  |  | `CHAR(1)` | Settlement Status - Item - Customer |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `CustomerItemSettlmtStatusName` |  | |  |  | `CHAR(60)` | Description of Settlement Status - Item - Customer |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
