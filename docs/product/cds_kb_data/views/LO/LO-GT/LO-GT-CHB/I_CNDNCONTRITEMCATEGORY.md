---
name: I_CNDNCONTRITEMCATEGORY
description: "This CDS view is used to select the Condition Contract Item Category. This CDS view provides the parameters for the domain WCB_CONTRACT_ITEMS with the following values: \"\" None 1 Materials 2 Materials with Unit of Measure (as Key)"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRITEMCATEGORY')/$value
semantic_en: "This CDS view is used to select the Condition Contract Item Category. This CDS view provides the parameters for the domain WCB_CONTRACT_ITEMS with the following values: \"\" None 1 Materials 2 Materials with Unit of Measure (as Key)"
tags:
  - LO
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - material
  - metadata-only
---
# I_CNDNCONTRITEMCATEGORY

**This CDS view is used to select the Condition Contract Item Category. This CDS view provides the parameters for the domain WCB_CONTRACT_ITEMS with the following values: "" None 1 Materials 2 Materials with Unit of Measure (as Key)**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRITEMCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrItemCategory` |  | |  |  | `CHAR(1)` | Condition Contract Items Category |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
