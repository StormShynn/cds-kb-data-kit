---
name: C_RDPBATCHCLASSIFICATIONDEX
description: Batch Data with Classification Extractor for RDP
app_component: SUS-RDP-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPBATCHCLASSIFICATIONDEX')/$value
semantic_en: Batch Data with Classification Extractor for RDP
tags:
  - SUS
  - bo:companycode
  - component:SUS-RDP-INT
  - consumption-view
  - SUS-RDP
  - SUS-RDP-INT
  - metadata-only
---
# C_RDPBATCHCLASSIFICATIONDEX

**Batch Data with Classification Extractor for RDP**

| Property | Value |
|---|---|
| App Component | `SUS-RDP-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPBATCHCLASSIFICATIONDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Batch` | `CHAR(10)` | Batch Number |
| `Material` | `CHAR(40)` | Material Number |
| `Plant` | `CHAR(4)` | Plant |
| `BatchClass` | `CHAR(18)` | Class number |
| `BatchCharacteristic` | `CHAR(30)` | Characteristic Name |
| `BatchCharacteristicValue` | `CHAR(70)` | Characteristic Value |
| `ManufactureDate` | `DATS(8)` | Date of Manufacture |
| `LastChangeDateTime` | `DEC(21)` | Last Change Timestamp |
