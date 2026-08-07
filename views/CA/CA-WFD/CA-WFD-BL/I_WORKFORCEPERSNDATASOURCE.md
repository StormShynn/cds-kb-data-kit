---
name: I_WORKFORCEPERSNDATASOURCE
description: "Workforce Person Data Source"
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSNDATASOURCE')/$value
semantic_en: "Workforce Person Data Source"
tags:
  - CA
  - bo:salesorder
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_WORKFORCEPERSNDATASOURCE

**Workforce Person Data Source**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSNDATASOURCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `WorkforcePersonDataSource` |  | |  |  | `CHAR(1)` | Data Source |
| `WorkforcePersonDataSourceText` |  | |  |  | `CHAR(60)` | Explanatory Short Text |
