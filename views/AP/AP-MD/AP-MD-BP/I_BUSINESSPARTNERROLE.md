---
name: I_BUSINESSPARTNERROLE
description: This CDS view retrieves the list of a business partner roles and role categories.
app_component: AP-MD-BP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERROLE')/$value
semantic_en: This CDS view retrieves the list of a business partner roles and role categories.
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - component:AP-MD-BP
  - interface-view
  - metadata-only
---
# I_BUSINESSPARTNERROLE

**This CDS view retrieves the list of a business partner roles and role categories.**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERROLE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerRole` |  | |  |  | `CHAR(6)` | BP Role |
| `RoleCategory` |  | |  |  | `CHAR(6)` | BP Role Category |
