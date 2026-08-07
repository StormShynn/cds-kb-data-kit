---
name: I_MAINTENANCENOTIFICATION
description: Maintenancenotification
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCENOTIFICATION

**Maintenancenotification**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MaintenanceNotification` | ✓ | |  | `qmnum` |
| `MaintPriority` |  | |  | `priok` |
| `MaintPriorityType` |  | |  | `artpr` |
| `NotificationType` |  | |  | `qmart` |
| `NotifProcessingPhase` |  | |  | `phase` |
| `CreatedByUser` |  | |  | `ernam` |
| `LastChangedByUser` |  | |  | `aenam` |
| `ReportedByUser` |  | |  | `qmnam` |
| `CreationDate` |  | |  | `erdat` |
| `LastChangeTime` |  | |  | `case when qmel.aezeit = '000000' or qmel.aezeit is null then qmel.erzeit else qmel.aezeit end` |
| `LastChangeDate` |  | |  | `case when qmel.aedat = '00000000' or qmel.aedat is null then qmel.erdat else qmel.aedat end` |
| `CreationTime` |  | |  | `erzeit` |
| `CreationDateTime` |  | |  | `cast ( concat(qmel.erdat,qmel.erzeit) as eam_creation_timestamp )` |
| `NotificationText` |  | |  | `qmtxt` |
| `LongTextLanguage` |  | |  | `kzmla` |
| `MaintenanceOrder` |  | |  | `aufnr` |
| `RequiredStartDate` |  | |  | `cast ( qmel.strmn as eam_req_start_date )` |
| `RequiredStartTime` |  | |  | `strur` |
| `RequiredEndDate` |  | |  | `cast ( qmel.ltrmn as eam_req_end_date )` |
| `RequiredEndTime` |  | |  | `ltrur` |
| `NotificationCreationDate` |  | |  | `qmdat` |
| `NotificationCreationTime` |  | |  | `mzeit` |
| `NotificationReferenceDate` |  | |  | `bezdt` |
| `NotificationHasLongText` |  | |  | `indtx` |
| `MaintNotifInternalID` |  | |  | `objnr` |
| `NotificationTimeZone` |  | |  | `tzonso` |
| `NotificationReferenceTime` |  | |  | `bezur` |
| `NotificationCompletionDate` |  | |  | `qmdab` |
| `NotificationCompletionTime` |  | |  | `qmzab` |
| `WorkCenterInternalID` |  | |  | `arbpl` |
| `WorkCenterTypeCode` |  | |  | `cast( 'A' as cr_objty )` |
| `MaintenanceWorkCenterPlant` |  | |  | `arbplwerk` |
| `MaintNotificationCatalog` |  | |  | `qmkat` |
| `MaintNotificationCode` |  | |  | `}] qmel.qmcod` |
| `MaintNotificationCodeGroup` |  | |  | `}] qmel.qmgrp` |
| `CatalogProfile` |  | |  | `rbnr` |
| `NotificationOrigin` |  | |  | `herkz` |
| `IsDeleted` |  | |  | `cast( case when qmel.phase = '5' or qmel.kzloesch = 'X' then 'X' else '' end as eam_is_deleted )` |
| `IsCompleted` |  | |  | `cast( case when qmel.phase = '4' then 'X' else '' end as eam_is_completed )` |
| `LastChangeDateTime` |  | |  | `changeddatetime` |
| `SerialNumber` |  | |  | `serialnr` |
| `Material` |  | |  | `matnr` |
| `AdditionalDeviceData` |  | |  | `deviceid` |
| `MaintNotifExtReferenceNumber` |  | |  | `refnum` |
| `MasterLanguage` |  | |  | `cast( qmel.kzmla as vdm_j_masterlanguage )` |
| `_PMNotificationPriorityType` | | ✓ | | |
| `_PMNotificationPriority` | | ✓ | | |
| `_PMNotificationType` | | ✓ | | |
| `_PMNotifMaintenanceData` | | ✓ | | |
| `_PMNotificationPhase` | | ✓ | | |
| `_MainWorkCenter` | | ✓ | | |
| `_WorkCenterType` | | ✓ | | |
| `_CreatedByUser` | | ✓ | | |
| `_LastChangedByUser` | | ✓ | | |
| `_ReportedByUser` | | ✓ | | |
| `_IsDeleted` | | ✓ | | |
| `_IsCompleted` | | ✓ | | |
| `_MaintenanceOrder` | | ✓ | | |
| `_MaintenancePartner` | | ✓ | | |
| `_MaintenanceNotificationItem` | | ✓ | | |
| `_Maintenancenotificationtask` | | ✓ | | |
| `_MaintNotificationActivity` | | ✓ | | |
| `_MaintNotificationCatalog` | | ✓ | | |
| `_MaintNotificationCodeGroup` | | ✓ | | |
| `_MaintNotificationCode` | | ✓ | | |
| `_MaintenanceWorkCenterPlant` | | ✓ | | |
| `_StatusObject` | | ✓ | | |
| `_TechnicalObjectCodeCatalog` | | ✓ | | |
| `_StatusObjectActiveStatus` | | ✓ | | |
| `_NotificationHasLongText` | | ✓ | | |
| `_LinearAssetManagementData` | | ✓ | | |
| `_Material` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PMNotificationPriorityType` | `I_PMNotificationPriorityType` | [0..1] |
| `_PMNotificationPriority` | `I_PMNotificationPriority` | [0..1] |
| `_PMNotificationType` | `I_PMNotificationType` | [1..1] |
| `_PMNotifMaintenanceData` | `I_PMNotifMaintenanceData` | [0..1] |
| `_PMNotificationPhase` | `I_PMNotificationPhase` | [0..1] |
| `_MainWorkCenter` | `I_WorkCenter` | [0..1] |
| `_WorkCenterType` | `I_WorkCenterType` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_ReportedByUser` | `I_User` | [0..1] |
| `_IsDeleted` | `I_Indicator` | [0..1] |
| `_IsCompleted` | `I_Indicator` | [0..1] |
| `_MaintenanceOrder` | `I_MaintenanceOrder` | [0..1] |
| `_MaintenancePartner` | `I_PlantMaintenancePartner` | [0..*] |
| `_MaintenanceNotificationItem` | `I_MaintenanceNotificationItem` | [0..*] |
| `_Maintenancenotificationtask` | `I_MaintenanceNotificationTask` | [0..*] |
| `_MaintNotificationActivity` | `I_MaintNotificationActivity` | [0..*] |
| `_MaintNotificationCatalog` | `I_Inspectioncatalog` | [0..1] |
| `_MaintNotificationCodeGroup` | `I_InspectionCodeGroup` | [0..1] |
| `_MaintNotificationCode` | `I_InspectionCode` | [0..1] |
| `_MaintenanceWorkCenterPlant` | `I_Plant` | [0..1] |
| `_StatusObject` | `I_StatusObject` | [0..1] |
| `_TechnicalObjectCodeCatalog` | `I_TechnicalReport` | [0..1] |
| `_StatusObjectActiveStatus` | `I_StatusObjectActiveStatus` | [0..*] |
| `_NotificationHasLongText` | `I_Indicator` | [0..1] |
| `_LinearAssetManagementData` | `I_LinearAssetManagementData` | [0..1] |
| `_Material` | `I_Material` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Maintenance Notification'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: { sqlViewName: 'IMAINTNOTIF', compiler.compareFilter, preserveKey }
@AccessControl: {
    authorizationCheck:#CHECK,
    personalData.blocking: #NOT_REQUIRED,
    privilegedAssociations: [ '_CreatedByUser', '_LastChangedByUser', '_ReportedByUser', '_StatusObjectActiveStatus', '_StatusObject' ]
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API }

@ObjectModel: {
  representativeKey: 'MaintenanceNotification',
  semanticKey:  [ 'MaintenanceNotification' ],
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #B,
    sizeCategory: #L },
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
    modelingPattern: #NONE }

@Metadata.ignorePropagatedAnnotations

@ObjectModel.sapObjectNodeType.name: 'MaintenanceNotification'

define view I_MaintenanceNotification
  as select from qmel
  association [0..1] to I_PMNotificationPriorityType  as _PMNotificationPriorityType  on  $projection.MaintPriorityType = _PMNotificationPriorityType.MaintPriorityType
  association [0..1] to I_PMNotificationPriority      as _PMNotificationPriority      on  _PMNotificationPriority.MaintPriority     = $projection.MaintPriority
                                                                                      and _PMNotificationPriority.MaintPriorityType = $projection.MaintPriorityType
  association [1..1] to I_PMNotificationType          as _PMNotificationType          on  _PMNotificationType.NotificationType = $projection.NotificationType
  association [0..1] to I_PMNotifMaintenanceData      as _PMNotifMaintenanceData      on  _PMNotifMaintenanceData.MaintenanceNotification = $projection.MaintenanceNotification
  association [0..1] to I_PMNotificationPhase         as _PMNotificationPhase         on  _PMNotificationPhase.NotifProcessingPhase = $projection.NotifProcessingPhase
  association [0..1] to I_WorkCenter                  as _MainWorkCenter              on  _MainWorkCenter.WorkCenterInternalID = $projection.WorkCenterInternalID
                                                                                      and _MainWorkCenter.WorkCenterTypeCode   = $projection.WorkCenterTypeCode
  association [0..1] to I_WorkCenterType              as _WorkCenterType              on  $projection.WorkCenterTypeCode = _WorkCenterType.WorkCenterTypeCode
  association [0..1] to I_User                        as _CreatedByUser               on  _CreatedByUser.UserID = $projection.CreatedByUser
  association [0..1] to I_User                        as _LastChangedByUser           on  _LastChangedByUser.UserID = $projection.LastChangedByUser
  association [0..1] to I_User                        as _ReportedByUser              on  _ReportedByUser.UserID = $projection.ReportedByUser
  association [0..1] to I_Indicator                   as _IsDeleted                   on  $projection.IsDeleted = _IsDeleted.IndicatorValue
  association [0..1] to I_Indicator                   as _IsCompleted                 on  $projection.IsCompleted = _IsCompleted.IndicatorValue
  association [0..1] to I_MaintenanceOrder            as _MaintenanceOrder            on  $projection.MaintenanceOrder = _MaintenanceOrder.MaintenanceOrder
  association [0..*] to I_PlantMaintenancePartner     as _MaintenancePartner          on  $projection.MaintNotifInternalID = _MaintenancePartner.MaintObjectInternalID
  association [0..*] to I_MaintenanceNotificationItem as _MaintenanceNotificationItem on  $projection.MaintenanceNotification = _MaintenanceNotificationItem.MaintenanceNotification
  association [0..*] to I_MaintenanceNotificationTask as _Maintenancenotificationtask on  $projection.MaintenanceNotification = _Maintenancenotificationtask.MaintenanceNotification
  association [0..*] to I_MaintNotificationActivity   as _MaintNotificationActivity   on  $projection.MaintenanceNotification = _MaintNotificationActivity.MaintenanceNotification
  association [0..1] to I_Inspectioncatalog           as _MaintNotificationCatalog    on  $projection.MaintNotificationCatalog = _MaintNotificationCatalog.InspectionCatalog
  association [0..1] to I_InspectionCodeGroup         as _MaintNotificationCodeGroup  on  $projection.MaintNotificationCatalog   = _MaintNotificationCodeGroup.InspectionCatalog
                                                                                      and $projection.MaintNotificationCodeGroup = _MaintNotificationCodeGroup.InspectionCodeGroup
  association [0..1] to I_InspectionCode              as _MaintNotificationCode       on  $projection.MaintNotificationCatalog   = _MaintNotificationCode.InspectionCatalog
                                                                                      and $projection.MaintNotificationCodeGroup = _MaintNotificationCode.InspectionCodeGroup
                                                                                      and $projection.MaintNotificationCode      = _MaintNotificationCode.InspectionCode
  association [0..1] to I_Plant                       as _MaintenanceWorkCenterPlant  on  $projection.MaintenanceWorkCenterPlant = _MaintenanceWorkCenterPlant.Plant
  association [0..1] to I_StatusObject                as _StatusObject                on  $projection.MaintNotifInternalID = _StatusObject.StatusObject
  association [0..1] to I_TechnicalReport             as _TechnicalObjectCodeCatalog  on  $projection.CatalogProfile = _TechnicalObjectCodeCatalog.CatalogProfile

  association [0..*] to I_StatusObjectActiveStatus    as _StatusObjectActiveStatus    on  $projection.MaintNotifInternalID = _StatusObjectActiveStatus.StatusObject
  association [0..1] to I_Indicator                   as _NotificationHasLongText     on  $projection.NotificationHasLongText = _NotificationHasLongText.IndicatorValue
  association [0..1] to I_LinearAssetManagementData   as _LinearAssetManagementData   on  $projection.MaintenanceNotification = _LinearAssetManagementData.LinearDataObjectKey
                                                                                      and _LinearAssetManagementData.LinearDataObjectType = 'QM'                                     
  association [0..1] to I_Material                    as _Material                    on $projection.Material = _Material.Material                                                                                                                                 
{

      @ObjectModel.text.element:  [ 'NotificationText' ]
  key qmel.qmnum                                                              as MaintenanceNotification,

      // Associations
      @ObjectModel.foreignKey.association: '_PMNotificationPriority'
      qmel.priok                                                              as MaintPriority,
      @ObjectModel.foreignKey.association: '_PMNotificationPriorityType'
      qmel.artpr                                                              as MaintPriorityType,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_PMNotificationTypeStdVH',
                     element: 'NotificationType' }
        }]
      @ObjectModel.foreignKey.association: '_PMNotificationType'
      qmel.qmart                                                              as NotificationType,
      @ObjectModel.foreignKey.association: '_PMNotificationPhase'
      qmel.phase                                                              as NotifProcessingPhase,

      // Admin Data
      @Semantics.user.createdBy: true
      qmel.ernam                                                              as CreatedByUser,
      @Semantics.user.lastChangedBy: true
      qmel.aenam                                                              as LastChangedByUser,
      qmel.qmnam                                                              as ReportedByUser,

      @Semantics.systemDate.createdAt: true
      qmel.erdat                                                              as CreationDate,

      // If changed date and time fields are empty they will be
      // populated with the created date and time field values
      case when  qmel.aezeit = '000000' or qmel.aezeit is null
        then  qmel.erzeit
        else  qmel.aezeit end                                                 as LastChangeTime,

      @Semantics.systemDate.lastChangedAt: true
      case when qmel.aedat = '00000000' or qmel.aedat is null
        then qmel.erdat
        else qmel.aedat end                                                   as LastChangeDate,

      qmel.erzeit                                                             as CreationTime, 
      cast ( concat(qmel.erdat,qmel.erzeit)
      as eam_creation_timestamp )                                             as CreationDateTime,

      @Semantics.text:true
      qmel.qmtxt                                                              as NotificationText,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MasterLanguage'
      qmel.kzmla                                                              as LongTextLanguage,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_MaintenanceOrderStdVH',
                     element: 'MaintenanceOrder' }
        }]
      @ObjectModel.foreignKey.association: '_MaintenanceOrder'
      qmel.aufnr                                                              as MaintenanceOrder,


      cast ( qmel.strmn as eam_req_start_date )                               as RequiredStartDate,
      qmel.strur                                                              as RequiredStartTime,

      cast ( qmel.ltrmn as eam_req_end_date )                                 as RequiredEndDate,
      qmel.ltrur                                                              as RequiredEndTime,

      qmel.qmdat                                                              as NotificationCreationDate,
      qmel.mzeit                                                              as NotificationCreationTime,
      qmel.bezdt                                                              as NotificationReferenceDate,

      qmel.indtx                                                              as NotificationHasLongText,

      qmel.objnr                                                              as MaintNotifInternalID,
      qmel.tzonso                                                             as NotificationTimeZone,
      qmel.bezur                                                              as NotificationReferenceTime,
      qmel.qmdab                                                              as NotificationCompletionDate,
      qmel.qmzab                                                              as NotificationCompletionTime,
      
      // Responsibilities
      @ObjectModel.foreignKey.association: '_MainWorkCenter'
      qmel.arbpl                                                              as WorkCenterInternalID, // Main Work Center

      @ObjectModel.foreignKey.association: '_WorkCenterType'
      cast( 'A' as cr_objty )                                                 as WorkCenterTypeCode, // 'A' = Work center

      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_PlantStdVH',
                     element: 'Plant' }
        }]
      @ObjectModel.foreignKey.association: '_MaintenanceWorkCenterPlant'
      qmel.arbplwerk                                                          as MaintenanceWorkCenterPlant,

      @ObjectModel.foreignKey.association: '_MaintNotificationCatalog'
      qmel.qmkat                                                              as MaintNotificationCatalog,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_InspectionCodeStdVH',
                     element: 'InspectionCode' },
          additionalBinding: [{ localElement: 'MaintNotificationCatalog',
                                element: 'InspectionCatalog' },
                              { localElement: 'MaintNotificationCodeGroup',
                                element: 'InspectionCodeGroup' }]
        }]
      @ObjectModel.foreignKey.association: '_MaintNotificationCode'
      qmel.qmcod                                                              as MaintNotificationCode,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_InspectionCodeGroupStdVH',
                     element: 'InspectionCodeGroup' },
          additionalBinding: [{ localElement: 'MaintNotificationCatalog',
                                element: 'InspectionCatalog' }]
        }]
      @ObjectModel.foreignKey.association: '_MaintNotificationCodeGroup'
      qmel.qmgrp                                                              as MaintNotificationCodeGroup,

      @ObjectModel.foreignKey.association: '_TechnicalObjectCodeCatalog'
      qmel.rbnr                                                               as CatalogProfile,
      
      qmel.herkz                                                              as NotificationOrigin,


      // Phase 5 = Deletion Flag
      cast( case when qmel.phase = '5' or qmel.kzloesch = 'X' then 'X'
       else ''
      end                            as eam_is_deleted  )                     as IsDeleted,

      // Phase 4 = Completed
      cast( case when qmel.phase  = '4' then 'X'
       else ''
      end                      as eam_is_completed )                          as IsCompleted,
      
      @Semantics.systemDateTime.lastChangedAt: true
      qmel.changeddatetime                                                    as LastChangeDateTime,
      qmel.serialnr                                                           as SerialNumber,
      qmel.matnr                                                              as Material,
      qmel.deviceid                                                           as AdditionalDeviceData,
      // Notification API 2011
      qmel.refnum                                                             as MaintNotifExtReferenceNumber,
      // Notification API 2011
      cast( qmel.kzmla as vdm_j_masterlanguage )          as MasterLanguage,
            
      // Propagate associations
      _LastChangedByUser,
      _CreatedByUser,
      _ReportedByUser,
      _PMNotificationPriority,
      _PMNotificationType,
      _PMNotifMaintenanceData,
      _PMNotificationPhase,
      _MainWorkCenter,
      _IsDeleted,
      _IsCompleted,
      _MaintenanceOrder,
      _PMNotificationPriorityType,
      _MaintenanceNotificationItem,
      _MaintNotificationActivity,
      _Maintenancenotificationtask,
      _MaintenancePartner,
      _MaintNotificationCatalog,
      _MaintNotificationCodeGroup,
      _MaintNotificationCode,
      _MaintenanceWorkCenterPlant,
      _StatusObject,
      _TechnicalObjectCodeCatalog,
      _WorkCenterType,
      _StatusObjectActiveStatus,
      _NotificationHasLongText,
      _LinearAssetManagementData,
      _Material
} where //herkz between '01' and '06'. 
// Only show PM & CS relevant headers
herkz = '01' or   // General Maintenance Notification
herkz = '02' or   // Malfunction Report
herkz = '03' or   // Activity Report
herkz = '04' or   // Problem notification
herkz = '05' or   // Activity report (service)
herkz = '06'      // General notification (service)
```
