---
name: I_FINDIMENSIONSQTYFIELDS
description: Dimensions for Quantity Fields
app_component: CO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINDIMENSIONSQTYFIELDS')/$value
semantic_en: Dimensions for Quantity Fields
tags:
  - CO
  - bo:companycode
  - CO-PA
  - CO-PA-2CL
  - component:CO-PA-2CL
  - interface-view
  - lob:controlling
  - metadata-only
---
# I_FINDIMENSIONSQTYFIELDS

**Dimensions for Quantity Fields**

| Property | Value |
|---|---|
| App Component | `CO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINDIMENSIONSQTYFIELDS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DatabaseTable` |  | |  |  | `CHAR(30)` | Table Name |
| `DatabaseTableField` |  | |  |  | `CHAR(30)` | Name of an Additional Quantity Field |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `UnitOfMeasureDimension` |  | |  |  | `CHAR(6)` | Dimension |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Standard Unit of Measure |
