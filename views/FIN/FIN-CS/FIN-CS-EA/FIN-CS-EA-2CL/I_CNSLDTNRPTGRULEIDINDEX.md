---
name: I_CNSLDTNRPTGRULEIDINDEX
description: "This CDS view provides parameter values for Fiscal Year, Fiscal Period, and Consolidation Version. For these parameter values, all valid consolidation reporting rule IDs are returned. The view also provides the consolidation reporting rule version that maps the consolidation version and the validity start and end date for the given consolidation reporting rule ID."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEIDINDEX')/$value
semantic_en: "This CDS view provides parameter values for Fiscal Year, Fiscal Period, and Consolidation Version. For these parameter values, all valid consolidation reporting rule IDs are returned. The view also provides the consolidation reporting rule version that maps the consolidation version and the validity start and end date for the given consolidation reporting rule ID."
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CNSLDTNRPTGRULEIDINDEX

**This CDS view provides parameter values for Fiscal Year, Fiscal Period, and Consolidation Version. For these parameter values, all valid consolidation reporting rule IDs are returned. The view also provides the consolidation reporting rule version that maps the consolidation version and the validity start and end date for the given consolidation reporting rule ID.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGRULEIDINDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationReportingRuleVers` |  | |  |  | `CHAR(3)` | Reporting Rule Version |
| `CurrentDate` |  | |  |  | `CHAR(7)` |  |
| `ConsolidationReportingRuleID` |  | |  |  | `CHAR(3)` | Reporting Rule Variant |
| `ValidityStartDate` |  | |  |  | `NUMC(7)` | Valid-From Fiscal Period and Year |
| `ValidityEndDate` |  | |  |  | `NUMC(7)` | Valid-To Fiscal Period and Year |
