---
name: C_RDPBATCHGENERALDEX
description: RDP Specific Data Extractor for general Batch data
app_component: SUS-RDP-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPBATCHGENERALDEX')/$value
semantic_en: RDP Specific Data Extractor for general Batch data
tags:
  - SUS
  - bo:companycode
  - component:SUS-RDP-INT
  - consumption-view
  - SUS-RDP
  - SUS-RDP-INT
  - metadata-only
---
# C_RDPBATCHGENERALDEX

**RDP Specific Data Extractor for general Batch data**

| Property | Value |
|---|---|
| App Component | `SUS-RDP-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPBATCHGENERALDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ManufactureDate` |  | |  |  | `DATS(8)` | Date of Manufacture |
