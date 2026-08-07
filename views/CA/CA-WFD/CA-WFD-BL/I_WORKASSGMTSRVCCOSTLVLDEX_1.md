---
name: I_WORKASSGMTSRVCCOSTLVLDEX_1
description: Workforce Person Service Cost Level
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTSRVCCOSTLVLDEX_1')/$value
semantic_en: Workforce Person Service Cost Level
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
# I_WORKASSGMTSRVCCOSTLVLDEX_1

**Workforce Person Service Cost Level**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTSRVCCOSTLVLDEX_1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignment` |  | |  |  | `NUMC(8)` | Workforce Assignment ID |
| `StartDate` |  | |  |  | `DATS(8)` | Start Date |
| `EndDate` |  | |  |  | `DATS(8)` | End Date |
| `WorkAssignmentExternalID` |  | |  |  | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` |  | |  |  | `CHAR(2)` | Workforce Country ISO Code |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `ServiceCostLevel` |  | |  |  | `NUMC(4)` | Service Cost Level |
| `IsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator |
