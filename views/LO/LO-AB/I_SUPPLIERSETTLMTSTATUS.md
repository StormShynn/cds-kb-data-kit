---
name: I_SUPPLIERSETTLMTSTATUS
description: This CDS view exposes fixed values of the field Supplier Settlement Status. The following fixed values have been maintained: ' ' Not Relevant 1 Open 2 Blocked 3 Settled 4 Open (Creation at Item Level) 5 Party Settled 6 Completed Through Cancellation
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERSETTLMTSTATUS')/$value
semantic_en: This CDS view exposes fixed values of the field Supplier Settlement Status. The following fixed values have been maintained: ' ' Not Relevant 1 Open 2 Blocked 3 Settled 4 Open (Creation at Item Level) 5 Party Settled 6 Completed Through Cancellation
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
# I_SUPPLIERSETTLMTSTATUS

**This CDS view exposes fixed values of the field Supplier Settlement Status. The following fixed values have been maintained: ' ' Not Relevant 1 Open 2 Blocked 3 Settled 4 Open (Creation at Item Level) 5 Party Settled 6 Completed Through Cancellation**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERSETTLMTSTATUS')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SupplierSettlmtStatus` | `CHAR(1)` | Settlement Status - Supplier |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
