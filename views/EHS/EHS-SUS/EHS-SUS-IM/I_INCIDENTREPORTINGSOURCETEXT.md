---
name: I_INCIDENTREPORTINGSOURCETEXT
description: Incident Reporting Source - Text
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTREPORTINGSOURCETEXT')/$value
semantic_en: Incident Reporting Source - Text
tags:
  - EHS
  - bo:purchaseorder
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INCIDENTREPORTINGSOURCETEXT

**Incident Reporting Source - Text**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTREPORTINGSOURCETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentReportingSourceCode` |  | |  |  | `CHAR(2)` | Incident Reporting Source |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `IncidentReportingSourceText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
