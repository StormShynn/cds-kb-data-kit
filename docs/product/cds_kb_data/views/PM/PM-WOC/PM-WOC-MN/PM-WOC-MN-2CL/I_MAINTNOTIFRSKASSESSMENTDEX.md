---
name: I_MAINTNOTIFRSKASSESSMENTDEX
description: "Maintenance Notification Risk Assessment"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTNOTIFRSKASSESSMENTDEX')/$value
semantic_en: "Maintenance Notification Risk Assessment"
semantic_vi: "Maintenance Notification Risk Assessment — CDS view giao diện (transactional data) dựa trên I_MaintNotificationConsequence."
keywords:
  - "maintenance"
  - "notification"
  - "risk"
  - "assessment"
  - "maint"
  - "event"
  - "cnsqnc"
  - "category"
  - "code"
  - "consequence"
  - "group"
  - "prioritization"
  - "profile"
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
---
# I_MAINTNOTIFRSKASSESSMENTDEX

**Maintenance Notification Risk Assessment**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTNOTIFRSKASSESSMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceNotification` | ✓ | |  |  | `CHAR(12)` | Notification Number |
| `MaintEventCnsqncCategoryCode` | ✓ | |  |  | `NUMC(2)` | Consequence Category ID |
| `MaintEventConsequenceGroup` |  | |  |  | `CHAR(10)` | Consequence Category Group ID |
| `MaintEvtPrioritizationProfile` |  | |  |  | `CHAR(10)` | Prioritization Profile ID |
| `MaintEventConsequenceCode` |  | |  |  | `NUMC(2)` | Consequence ID |
| `MaintEventLikelihoodCode` |  | |  |  | `NUMC(2)` | Likelihood ID |
| `MaintEventConsequenceIsLeading` |  | |  |  | `CHAR(1)` | Leading Consequence Indicator |
| `TechnicalObject` |  | | `_MaintNotificationTechObj` | `TechnicalObject` | `CHAR(40)` | Technical Object |
| `FunctionalLocation` |  | |  | `cast( _MaintNotificationTechObj._PMNotifMaintenanceData._LocationAccountAssignment.FunctionalLocation as char30 preserving type )` | `CHAR(30)` | 30 Characters |
| `Equipment` |  | | `_MaintNotificationTechObj._PMNotifMaintenanceData` | `Equipment` | `CHAR(18)` | Equipment Number |
| `MaintenancePlant` |  | | `_MaintNotificationTechObj._PMNotifMaintenanceData._LocationAccountAssignment` | `MaintenancePlant` | `CHAR(4)` | Maintenance Plant |
| `NotificationType` |  | | `_MaintNotificationTechObj` | `NotificationType` | `CHAR(2)` | Notification Type |
| `MaintenanceOrder` |  | | `_MaintNotificationTechObj` | `MaintenanceOrder` | `CHAR(12)` | Order Number |
| `MaintPriority` |  | | `_MaintNotificationTechObj` | `MaintPriority` | `CHAR(1)` | Priority |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintNotificationTechObj` | `I_MaintNotificationTechObj` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTNOTIFRSKASSESSMENTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTNOTIFRSKASSESSMENTDEX')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData: {
    blocking: #NOT_REQUIRED } }

@EndUserText.label: 'Maintenance Notification Risk Assessment'
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

@Analytics: {
  dataCategory: #FACT,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ { table: 'EAM_WRKREQ_CNSQN',
                   role: #MAIN,
                   viewElement: [ 'MaintenanceNotification', 'MaintEventCnsqncCategoryCode' ],
                   tableElement: [ 'MAINTENANCENOTIFICATION', 'MAINTEVENTCNSQNCCATEGORYCODE' ] },

                 { table: 'QMEL' ,
                   role: #LEFT_OUTER_TO_ONE_JOIN,
                   viewElement: [ 'MaintenanceNotification' ],
                   tableElement: [ 'QMNUM' ] } ] } } }

@ObjectModel: {
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #D,
    sizeCategory: #XL },
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ],
  modelingPattern: #ANALYTICAL_FACT,
  sapObjectNodeType.name: 'MaintNotifRiskAssessment' }

define view entity I_MaintNotifRskAssessmentDEX
  as select from I_MaintNotificationConsequence
  association [0..1] to I_MaintNotificationTechObj as _MaintNotificationTechObj on $projection.MaintenanceNotification = _MaintNotificationTechObj.MaintenanceNotification

{
  key MaintenanceNotification,
  key MaintEventCnsqncCategoryCode,

      MaintEventConsequenceGroup,
      MaintEvtPrioritizationProfile,
      MaintEventConsequenceCode,
      MaintEventLikelihoodCode,
      MaintEventConsequenceIsLeading,

      _MaintNotificationTechObj.TechnicalObject,
      cast( _MaintNotificationTechObj._PMNotifMaintenanceData._LocationAccountAssignment.FunctionalLocation as char30 preserving type ) as FunctionalLocation,

      /* start suppress warning shlporigin_not_inherited */
      _MaintNotificationTechObj._PMNotifMaintenanceData.Equipment,
      _MaintNotificationTechObj._PMNotifMaintenanceData._LocationAccountAssignment.MaintenancePlant,
      _MaintNotificationTechObj.NotificationType,
      _MaintNotificationTechObj.MaintenanceOrder,
      _MaintNotificationTechObj.MaintPriority,
      /* end suppress warning shlporigin_not_inherited */


      // Associations
      _MaintNotificationTechObj._PMNotifMaintenanceData._Equipment,
      _MaintNotificationTechObj._PMNotifMaintenanceData._LocationAccountAssignment._FunctionalLocation
}
```
