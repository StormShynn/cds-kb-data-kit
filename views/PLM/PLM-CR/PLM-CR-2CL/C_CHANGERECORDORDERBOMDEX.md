---
name: C_CHANGERECORDORDERBOMDEX
description: Change Record Sales Order BOM Extraction
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDORDERBOMDEX')/$value
semantic_en: Change Record Sales Order BOM Extraction
tags:
  - PLM
  - component:PLM-CR-2CL
  - consumption-view
  - order
  - PLM-CR
  - PLM-CR-2CL
  - sales-order
  - metadata-only
---
# C_CHANGERECORDORDERBOMDEX

**Change Record Sales Order BOM Extraction**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDORDERBOMDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordReferenceUUID` |  | |  |  | `RAW(16)` | DB Key |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `BillOfMaterial` |  | |  |  | `CHAR(8)` | Bill of Material |
| `BillOfMaterialVariantUsage` |  | |  |  | `CHAR(1)` | BOM Usage |
| `BillOfMaterialVariant` |  | |  |  | `CHAR(2)` | Alternative BOM |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `ChangeRecordUUID` |  | |  |  | `RAW(16)` | DB Key |
| `BillOfMaterialCategory` |  | |  |  | `CHAR(1)` | BOM category |
