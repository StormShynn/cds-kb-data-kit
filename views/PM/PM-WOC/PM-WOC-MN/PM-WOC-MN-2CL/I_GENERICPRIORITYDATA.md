---
name: I_GENERICPRIORITYDATA
description: This CDS view provides the prerequisites for answering the following business questions: Which priority type contains the priority? Which shift factor needs to be applied in the calculation of the start date? Which unit needs to be applied for the shift factor in the calculation of the start date? Which shift factor needs to be applied in the calculation of the end date? Which unit needs to be applied for the shift factor in the calculation of the end date? What is the color code for priority?
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERICPRIORITYDATA')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: Which priority type contains the priority? Which shift factor needs to be applied in the calculation of the start date? Which unit needs to be applied for the shift factor in the calculation of the start date? Which shift factor needs to be applied in the calculation of the end date? Which unit needs to be applied for the shift factor in the calculation of the end date? What is the color code for priority?
tags:
  - PM
  - bo:plant
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
  - metadata-only
---
# I_GENERICPRIORITYDATA

**This CDS view provides the prerequisites for answering the following business questions: Which priority type contains the priority? Which shift factor needs to be applied in the calculation of the start date? Which unit needs to be applied for the shift factor in the calculation of the start date? Which shift factor needs to be applied in the calculation of the end date? Which unit needs to be applied for the shift factor in the calculation of the end date? What is the color code for priority?**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERICPRIORITYDATA')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `GenericPriorityType` | `CHAR(2)` | Priority Type |
| `PriorityCode` | `CHAR(1)` | Priority |
| `GenericStartDateShiftFactor` | `NUMC(2)` | Relative Start Date for Task/Notification in Days |
| `GenericStrtDateShiftFactorUnit` | `UNIT(3)` | Relative Start Date Unit |
| `GenericEndDateShiftFactor` | `NUMC(2)` | Relative End Date for Task/Notification in Days |
| `GenericEndDateShiftFactorUnit` | `UNIT(3)` | Relative End Date Unit |
| `GenericPriorityColorCode` | `NUMC(1)` | Priority color code |
