---
name: I_MAINTNOTIFRSKASSESSMENTDEX
description: Maintenance Notification Risk Assessment
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTNOTIFRSKASSESSMENTDEX')/$value
semantic_en: Maintenance Notification Risk Assessment
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - notification
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
  - metadata-only
---
# I_MAINTNOTIFRSKASSESSMENTDEX

**Maintenance Notification Risk Assessment**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTNOTIFRSKASSESSMENTDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MaintenanceNotification` | `CHAR(12)` | Notification Number |
| `MaintEventCnsqncCategoryCode` | `NUMC(2)` | Consequence Category ID |
| `MaintEventConsequenceGroup` | `CHAR(10)` | Consequence Category Group ID |
| `MaintEvtPrioritizationProfile` | `CHAR(10)` | Prioritization Profile ID |
| `MaintEventConsequenceCode` | `NUMC(2)` | Consequence ID |
| `MaintEventLikelihoodCode` | `NUMC(2)` | Likelihood ID |
| `MaintEventConsequenceIsLeading` | `CHAR(1)` | Leading Consequence Indicator |
| `TechnicalObject` | `CHAR(40)` | Technical Object |
| `FunctionalLocation` | `CHAR(30)` | 30 Characters |
| `Equipment` | `CHAR(18)` | Equipment Number |
| `MaintenancePlant` | `CHAR(4)` | Maintenance Plant |
| `NotificationType` | `CHAR(2)` | Notification Type |
| `MaintenanceOrder` | `CHAR(12)` | Order Number |
| `MaintPriority` | `CHAR(1)` | Priority |
