---
name: I_MAINTNOTIFRSKASSESSMENTCUBE
description: "Maint Notif Risk Assessment - Cube"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTNOTIFRSKASSESSMENTCUBE')/$value
semantic_en: "Maint Notif Risk Assessment - Cube"
semantic_vi: "Maint Notif Risk Assessment - Cube — CDS view giao diện dựa trên P_MaintNotifRskAssessment."
keywords:
  - "maint"
  - "notif"
  - "risk"
  - "assessment"
  - "cube"
  - "maintenance"
  - "notification"
  - "event"
  - "cnsqnc"
  - "category"
  - "code"
  - "consequence"
  - "prioritization"
  - "profile"
  - "likelihood"
tags:
  - PM
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
---
# I_MAINTNOTIFRSKASSESSMENTCUBE

**Maint Notif Risk Assessment - Cube**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTNOTIFRSKASSESSMENTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceNotification` | ✓ | |  |  | `CHAR(12)` | Notification Number |
| `MaintEventCnsqncCategoryCode` | ✓ | |  |  | `NUMC(2)` | Consequence Category ID |
| `MaintEventConsequenceCode` |  | |  |  | `NUMC(2)` | Consequence ID |
| `MaintEvtPrioritizationProfile` |  | |  |  | `CHAR(10)` | Prioritization Profile ID |
| `MaintEventLikelihoodCode` |  | |  |  | `NUMC(2)` | Likelihood ID |
| `MaintEventConsequenceGroup` |  | |  |  | `CHAR(10)` | Consequence Category Group ID |
| `MaintEventConsequenceIsLeading` |  | |  |  | `CHAR(1)` | Leading Consequence Indicator |
| `TechObjIsEquipOrFuncnlLoc` |  | |  |  | `CHAR(20)` | Technical Object Type |
| `TechnicalObject` |  | |  |  | `CHAR(40)` | Technical Object |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | 30 Characters |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `MaintenancePlant` |  | |  |  | `CHAR(4)` | Maintenance Plant |
| `NotificationType` |  | |  |  | `CHAR(2)` | Notification Type |
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `MaintPriority` |  | |  |  | `CHAR(1)` | Priority |
| `MaintPriorityType` |  | |  |  | `CHAR(2)` | Priority Type |
| `NumberOfMaintNotifRisk` |  | |  | `cast( 1 as abap.int4 )` | `INT4(10)` |  |
| `_MaintenanceNotification` | | ✓ | | | | |
| `_MaintEventPrioznProfile` | | ✓ | | | | |
| `_MaintEventProfCnsqncGrp` | | ✓ | | | | |
| `_MaintEventCnsqncCategory` | | ✓ | | | | |
| `_MaintEventConsequence` | | ✓ | | | | |
| `_MaintEventLikelihood` | | ✓ | | | | |
| `_MaintNotificationTechObj` | | ✓ | | | | |
| `_TechObjIsEquipOrFuncnlLoc` | | ✓ | | | | |
| `_TechnicalObject` | | ✓ | | | | |
| `_PMNotificationType` | | ✓ | | | | |
| `_PMNotificationPriority` | | ✓ | | | | |
| `_PMNotificationPriorityType` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_MaintenancePlant` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_MaintEvtCnsqncCategoryGroup` | | ✓ | | | | |
| `_MaintenanceNotificationType` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTNOTIFRSKASSESSMENTCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTNOTIFRSKASSESSMENTCUBE')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED }

@EndUserText.label: 'Maint Notif Risk Assessment - Cube'

@VDM.viewType: #COMPOSITE

@ObjectModel: {
  usageType: {
    serviceQuality: #C,
    sizeCategory: #XXL,
    dataClass: #MIXED },
  supportedCapabilities:
    [ #ANALYTICAL_PROVIDER, #CDS_MODELING_DATA_SOURCE ],
  modelingPattern: #ANALYTICAL_CUBE }

@Analytics: {
  dataCategory: #CUBE,
  internalName: #LOCAL,
  technicalName: 'IMANITNTFRSKASMC' }

@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true }

define view entity I_MaintNotifRskAssessmentCube
  as select from P_MaintNotifRskAssessment

{
      @ObjectModel.foreignKey.association: '_MaintenanceNotification'
  key MaintenanceNotification,

      @ObjectModel.foreignKey.association: '_MaintEventCnsqncCategory'
  key MaintEventCnsqncCategoryCode,

      @ObjectModel.foreignKey.association: '_MaintEventConsequence'
      MaintEventConsequenceCode,

      @ObjectModel.foreignKey.association: '_MaintEventPrioznProfile'
      MaintEvtPrioritizationProfile,

      @ObjectModel.foreignKey.association: '_MaintEventLikelihood'
      MaintEventLikelihoodCode,

      @ObjectModel.foreignKey.association: '_MaintEvtCnsqncCategoryGroup'
      MaintEventConsequenceGroup,

      MaintEventConsequenceIsLeading,
      
      @ObjectModel.foreignKey.association: '_TechObjIsEquipOrFuncnlLoc'
      TechObjIsEquipOrFuncnlLoc,
      
      @ObjectModel.foreignKey.association: '_TechnicalObject'
      TechnicalObject,
      
      @ObjectModel.foreignKey.association: '_FunctionalLocation'
      FunctionalLocation,
      
      @ObjectModel.foreignKey.association: '_Equipment'
      Equipment,
      @ObjectModel.foreignKey.association: '_MaintenancePlant'
      MaintenancePlant,
      @ObjectModel.foreignKey.association: '_MaintenanceNotificationType'
      NotificationType,

      MaintenanceOrder,
      @ObjectModel.foreignKey.association: '_PMNotificationPriority'
      MaintPriority,
      @ObjectModel.foreignKey.association: '_PMNotificationPriorityType'
      MaintPriorityType,

      @Aggregation.default: #SUM     
      cast( 1 as abap.int4 ) as NumberOfMaintNotifRisk,

      //** Associations
      _MaintenanceNotification,
      _MaintEventPrioznProfile,
      _MaintEventProfCnsqncGrp,
      _MaintEventCnsqncCategory,
      _MaintEventConsequence,
      _MaintEventLikelihood,
      _MaintNotificationTechObj,
      _TechObjIsEquipOrFuncnlLoc,
      _TechnicalObject,
      _PMNotificationType,
      _PMNotificationPriority,
      _PMNotificationPriorityType,
      _Equipment,
      _MaintenancePlant,
      _FunctionalLocation,
      _MaintEvtCnsqncCategoryGroup,
      _MaintenanceNotificationType
}
```
