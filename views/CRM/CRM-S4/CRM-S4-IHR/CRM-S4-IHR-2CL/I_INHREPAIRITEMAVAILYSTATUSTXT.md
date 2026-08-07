---
name: I_INHREPAIRITEMAVAILYSTATUSTXT
description: "Availability of In-House Service Item - Text"
app_component: CRM-S4-IHR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMAVAILYSTATUSTXT')/$value
semantic_en: "Availability of In-House Service Item - Text"
tags:
  - CRM
  - component:CRM-S4-IHR-2CL
  - CRM-S4
  - CRM-S4-IHR
  - CRM-S4-IHR-2CL
  - interface-view
  - metadata-only
---
# I_INHREPAIRITEMAVAILYSTATUSTXT

**Availability of In-House Service Item - Text**

| Property | Value |
|---|---|
| App Component | `CRM-S4-IHR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMAVAILYSTATUSTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `InhRepairItemAvailyStatus` |  | |  |  | `CHAR(5)` | Availability of Repair Object at Repair Center |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `InhRepairItemAvailyStatusText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
