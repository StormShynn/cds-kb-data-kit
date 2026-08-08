---
name: I_SHIPOBJECTCLASSTEXT
description: "Ship Class - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTCLASSTEXT')/$value
semantic_en: "Ship Class - Text"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_SHIPOBJECTCLASSTEXT

**Ship Class - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTCLASSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `ShipObjectClass` |  | |  |  | `CHAR(2)` | Specifies whether the Ship is Sea Ship or Inland Ship |
| `ShipObjectClassText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
