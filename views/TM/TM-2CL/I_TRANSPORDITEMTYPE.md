---
name: I_TRANSPORDITEMTYPE
description: Transportation Order Item Type
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMTYPE')/$value
semantic_en: Transportation Order Item Type
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - TM-2CL
  - metadata-only
---
# I_TRANSPORDITEMTYPE

**Transportation Order Item Type**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDITEMTYPE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `TranspOrdItemType` | `CHAR(4)` | Transportation Order Item Type |
| `TranspOrdItemCategory` | `CHAR(3)` | Item Category |
| `TranspOrdChildItemType` | `CHAR(4)` | Transportation Order Child Item Type |
| `IsMultiItem` | `CHAR(1)` | Multi-Item |
