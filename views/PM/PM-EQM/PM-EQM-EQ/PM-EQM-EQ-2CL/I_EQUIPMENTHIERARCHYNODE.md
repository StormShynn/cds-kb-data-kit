---
name: I_EQUIPMENTHIERARCHYNODE
description: Equipment Hierarchy Nodes
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EQUIPMENTHIERARCHYNODE')/$value
semantic_en: Equipment Hierarchy Nodes
tags:
  - PM
  - component:PM-EQM-EQ-2CL
  - interface-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-EQ
  - PM-EQM-EQ-2CL
  - metadata-only
---
# I_EQUIPMENTHIERARCHYNODE

**Equipment Hierarchy Nodes**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EQUIPMENTHIERARCHYNODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HierarchyNode` |  | |  |  | `CHAR(18)` | Equipment Number |
| `EquipUsagePeriodSequenceNumber` |  | |  |  | `NUMC(3)` | Consecutive numbering of EquipUsagePeriods on same day |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `SuperordinateEquipment` |  | |  |  | `CHAR(18)` | Superordinate Equipment |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
