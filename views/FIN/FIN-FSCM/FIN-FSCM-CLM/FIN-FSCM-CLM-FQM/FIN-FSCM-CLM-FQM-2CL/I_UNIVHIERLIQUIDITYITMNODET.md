---
name: I_UNIVHIERLIQUIDITYITMNODET
description: Liquidity Item Hierarchy Node Base - Txt
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMNODET')/$value
semantic_en: Liquidity Item Hierarchy Node Base - Txt
tags:
  - FIN
  - component:FIN-FSCM-CLM-FQM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-FQM
  - FIN-FSCM-CLM-FQM-2CL
  - interface-view
  - lob:finance
  - lob:quality management
  - metadata-only
---
# I_UNIVHIERLIQUIDITYITMNODET

**Liquidity Item Hierarchy Node Base - Txt**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-FQM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMNODET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `LiquidityItemHierarchy` |  | |  |  | `CHAR(42)` | Hierarchy ID |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `HierarchyNode` |  | |  |  | `CHAR(50)` | Hierarchy node |
| `HierarchyNodeText` |  | |  |  | `CHAR(40)` |  |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `LiquidityItem` |  | |  |  | `CHAR(40)` | Node value |
