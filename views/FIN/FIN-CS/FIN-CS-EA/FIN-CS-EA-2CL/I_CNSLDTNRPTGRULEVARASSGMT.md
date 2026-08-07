---
name: I_CNSLDTNRPTGRULEVARASSGMT
description: This CDS view assigns the reporting rule variant to consolidation chart of accounts and reporting item hierarchy.
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARASSGMT')/$value
semantic_en: This CDS view assigns the reporting rule variant to consolidation chart of accounts and reporting item hierarchy.
tags:
  - FIN
  - account
  - bo:purchaseorder
  - component:FIN-CS-EA-2CL
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CNSLDTNRPTGRULEVARASSGMT

**This CDS view assigns the reporting rule variant to consolidation chart of accounts and reporting item hierarchy.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEVARASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `ConsolidationReportingItemHier` |  | |  |  | `CHAR(10)` | Reporting Item Hierarchy |
| `ConsolidationReportingRuleID` |  | |  |  | `CHAR(3)` | Reporting Rule Variant |
