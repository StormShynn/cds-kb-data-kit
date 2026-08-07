---
name: I_SUPPLIERITEMSETTLMTSTATUS
description: This CDS view exposes fixed values of the field Supplier Settlement Status Item. The following fixed values have been maintained: ' ' Not Relevant 1 Open 2 Blocked 3 Settled 6 Completed Through Cancellation
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERITEMSETTLMTSTATUS')/$value
semantic_en: This CDS view exposes fixed values of the field Supplier Settlement Status Item. The following fixed values have been maintained: ' ' Not Relevant 1 Open 2 Blocked 3 Settled 6 Completed Through Cancellation
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
  - metadata-only
---
# I_SUPPLIERITEMSETTLMTSTATUS

**This CDS view exposes fixed values of the field Supplier Settlement Status Item. The following fixed values have been maintained: ' ' Not Relevant 1 Open 2 Blocked 3 Settled 6 Completed Through Cancellation**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERITEMSETTLMTSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierItemSettlmtStatus` |  | |  |  | `CHAR(1)` | Settlement Status - Item - Supplier |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
