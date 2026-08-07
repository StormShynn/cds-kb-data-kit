---
name: I_COSTCOMPONENTASSIGNMENT
description: This CDS view provides general information about cost component assignment. It includes information about chart of accounts, cost component structure, from cost element, cost origin group, variance results analysis category, to cost element and cost component. This CDS view provides the prerequisites for answering the following business questions: Which cost elements are assigned to certain cost component structure? Which cost elements are assigned to certain cost component?
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTASSIGNMENT')/$value
semantic_en: This CDS view provides general information about cost component assignment. It includes information about chart of accounts, cost component structure, from cost element, cost origin group, variance results analysis category, to cost element and cost component. This CDS view provides the prerequisites for answering the following business questions: Which cost elements are assigned to certain cost component structure? Which cost elements are assigned to certain cost component?
tags:
  - CO
  - account
  - bo:plant
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - interface-view
  - lob:controlling
  - metadata-only
---
# I_COSTCOMPONENTASSIGNMENT

**This CDS view provides general information about cost component assignment. It includes information about chart of accounts, cost component structure, from cost element, cost origin group, variance results analysis category, to cost element and cost component. This CDS view provides the prerequisites for answering the following business questions: Which cost elements are assigned to certain cost component structure? Which cost elements are assigned to certain cost component?**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTASSIGNMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `CostComponentStructure` |  | |  |  | `CHAR(2)` | Cost Component Structure - CGM and Sales/Administr. Costs |
| `FromCostElement` |  | |  |  | `CHAR(10)` | From Cost Element |
| `CostOriginGroup` |  | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `VarianceResultsAnlysCategory` |  | |  |  | `NUMC(2)` | Category for Variance/Results Analysis |
| `ToCostElement` |  | |  |  | `CHAR(10)` | To Cost Element |
| `CostComponent` |  | |  |  | `NUMC(3)` | Cost Component Number |
