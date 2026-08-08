---
name: I_WORKCENTERQTYCALCFORMULA
description: "Work Center Quantity Calculation Formula"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERQTYCALCFORMULA')/$value
semantic_en: "Work Center Quantity Calculation Formula"
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - metadata-only
---
# I_WORKCENTERQTYCALCFORMULA

**Work Center Quantity Calculation Formula**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERQTYCALCFORMULA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterFormula` |  | |  |  | `CHAR(6)` | Formula Key |
| `FormulaIsAllowedForCosting` |  | |  |  | `CHAR(1)` | Indicates it is allowed for costing |
| `FormulaIsAllwdForCapRqmtPlng` |  | |  |  | `CHAR(1)` | Indicator: work center is allowed for capacity requirements |
| `FormulaIsAllwdForProdnRsceTool` |  | |  |  | `CHAR(1)` | Indicator: PRT allowed for requirements |
| `FormulaIsAllowedForScheduling` |  | |  |  | `CHAR(1)` | Indicator: Allowed for scheduling |
