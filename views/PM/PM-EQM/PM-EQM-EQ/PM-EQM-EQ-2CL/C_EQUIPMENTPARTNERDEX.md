---
name: C_EQUIPMENTPARTNERDEX
description: Equipment Partner DEX
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EQUIPMENTPARTNERDEX')/$value
semantic_en: Equipment Partner DEX
tags:
  - PM
  - component:PM-EQM-EQ-2CL
  - consumption-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-EQ
  - PM-EQM-EQ-2CL
  - metadata-only
---
# C_EQUIPMENTPARTNERDEX

**Equipment Partner DEX**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EQUIPMENTPARTNERDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MaintObjectInternalID` | `CHAR(22)` | Object Number |
| `PartnerFunction` | `CHAR(2)` | Partner Function |
| `MaintenancePartnerObjectNumber` | `NUMC(6)` | Counter for differentiation 6-digit |
| `Equipment` | `CHAR(18)` | Equipment Number |
| `MaintObjectCategory` | `CHAR(3)` | Object Category |
| `CreatedByUser` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` | `DATS(8)` | Record Creation Date |
| `CreationTime` | `TIMS(6)` | Time at Which Record Was Added |
| `LastChangedByUser` | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeTime` | `TIMS(6)` | Time of Change |
| `LastChangeDate` | `DATS(8)` | Last Changed On |
| `MaintenancePartner` | `CHAR(12)` | Partner |
