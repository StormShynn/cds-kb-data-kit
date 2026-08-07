---
name: C_COSTCOMPONENTASSIGNMENTDEX
description: Cost Component Assignment for Extraction
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCOMPONENTASSIGNMENTDEX')/$value
semantic_en: Cost Component Assignment for Extraction
tags:
  - CO
  - bo:purchaseorder
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - consumption-view
  - lob:controlling
  - metadata-only
---
# C_COSTCOMPONENTASSIGNMENTDEX

**Cost Component Assignment for Extraction**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCOMPONENTASSIGNMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `CostComponentStructure` |  | |  |  | `CHAR(2)` | Cost Component Structure - CGM and Sales/Administr. Costs |
| `FromCostElement` |  | |  |  | `CHAR(10)` | From Cost Element |
| `CostOriginGroup` |  | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `ToCostElement` |  | |  |  | `CHAR(10)` | To Cost Element |
| `CostComponent` |  | |  |  | `NUMC(3)` | Cost Component Number |
