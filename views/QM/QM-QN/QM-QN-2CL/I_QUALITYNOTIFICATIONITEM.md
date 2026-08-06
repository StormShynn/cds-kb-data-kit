---
name: I_QUALITYNOTIFICATIONITEM
description: Quality NotificationICATIONITEM
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-QN
  - interface-view
  - quality-notification
  - item-level
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QUALITYNOTIFICATIONITEM

**Quality NotificationICATIONITEM**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `QualityNotification` | `I_NotificationItem.Notification` |
| key `NotificationItem` | `I_NotificationItem.NotificationItem` |
| `NotifProcessingPhase` | `I_QltyNotification.NotifProcessingPhase` |
| `CreatedByUser` | `I_NotificationItem.CreatedByUser` |
| `CreationDate` | `I_NotificationItem.CreationDate` |
| `LastChangedByUser` | `I_NotificationItem.LastChangedByUser` |
| `LastChangeDate` | `I_NotificationItem.LastChangeDate` |
| `NotificationItemText` | `I_NotificationItem.NotificationItemText` |
| `DefectCodeCatalog` | `I_NotificationItem.DefectCodeCatalog` |
| `DefectCodeGroup` | `cast( I_NotificationItem.DefectCodeGroup as vdm_qfegrp preserving type )` |
| `DefectCode` | `cast( I_NotificationItem.DefectCode as vdm_qfecod preserving type )` |
| `NotifItmObjectPartCodeCtlg` | `cast( I_NotificationItem.NotifItmObjectPartCodeCtlg as vdm_qfeocat preserving type )` |
| `NotifItmObjectPartCodeGroup` | `cast( I_NotificationItem.NotifItmObjectPartCodeGroup as vdm_qfeogrp preserving type )` |
| `NotifItmObjectPartCode` | `cast( I_NotificationItem.NotifItmObjectPartCode as vdm_qfeocod preserving type )` |
| `Assembly` | `I_NotificationItem.Assembly` |
| `MasterLanguage` | `I_NotificationItem.MasterLanguage` |
| `CreationTime` | `cast( I_NotificationItem.CreationTime as vdm_qerstezeit preserving type )` |
| `LastChangeTime` | `cast( I_NotificationItem.LastChangeTime as vdm_qaendezeit preserving type )` |
| `DefectClass` | `I_NotificationItem.DefectClass` |
| `NumberOfDefects` | `I_NotificationItem.NumberOfDefects` |
| `InspPlanOperationInternalID` | `I_NotificationItem.InspPlanOperationInternalID` |
| `InspectionCharacteristic` | `I_NotificationItem.InspectionCharacteristic` |
| `InspectionSubsetInternalID` | `I_NotificationItem.InspectionSubsetInternalID` |
| `MaterialSample` | `I_NotificationItem.MaterialSample` |
| `DefectiveSingleUnit` | `I_NotificationItem.DefectiveSingleUnit` |
| `WorkCenterTypeCode` | `I_NotificationItem.WorkCenterTypeCode` |
| `MainWorkCenterInternalID` | `I_NotificationItem.MainWorkCenterInternalID` |
| `MainWorkCenter` | `I_NotificationItem.MainWorkCenter` |
| `MainWorkCenterPlant` | `I_NotificationItem.MainWorkCenterPlant` |
| `IsDeleted` | `I_NotificationItem.IsDeleted` |
| `NotificationItemExternalID` | `cast( I_NotificationItem.NotificationItemExternalID as vdm_qnotifitemextid preserving type )` |
| `DefectOrigin` | `I_NotificationItem.DefectOrigin` |
| `ExternalDefectiveQuantity` | `I_NotificationItem.ExternalDefectiveQuantity` |
| `InternalDefectiveQuantity` | `I_NotificationItem.InternalDefectiveQuantity` |
| `DefectiveQuantity` | `I_NotificationItem.DefectiveQuantity` |
| `DefectiveQuantityUnit` | `I_NotificationItem.DefectiveQuantityUnit` |
| `ReferencedDefect` | `I_NotificationItem.ReferencedDefect` |
| `ChangedDateTime` | `I_NotificationItem.ChangedDateTime` |
| `_CreatedByUserContactCard` | `I_NotificationItem._CreatedByUserContactCard` |
| `_LastChangedByUserContactCard` | `I_NotificationItem._LastChangedByUserContactCard` |
| `_QltyNotification` | *Association* |
| `_Notification` | *Association* |
| `_QltyNotificationTask` | *Association* |
| `_QltyNotificationCause` | *Association* |
| `_QltyNotificationActivity` | *Association* |
| `_ReferencedDefect` | *Association* |
| `_DefectCodeGroup` | *Association* |
| `_DefectCode` | *Association* |
| `_DefectLocationCatalog` | *Association* |
| `_DefectLocationCodeGroup` | *Association* |
| `_DefectLocationCode` | *Association* |
| `_QltyNotifItemLongText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QltyNotification` | `I_QltyNotification` | [1..1] |
| `_Notification` | `I_QltyNotification` | [1..1] |
| `_QltyNotificationTask` | `I_QltyNotificationTask` | [0..*] |
| `_QltyNotificationCause` | `I_QltyNotificationCause` | [0..*] |
| `_QltyNotificationActivity` | `I_QltyNotificationActivity` | [0..*] |
| `_ReferencedDefect` | `I_Defect` | [0..1] |
| `_DefectCodeGroup` | `I_DefectCodeGroup` | [0..1] |
| `_DefectCode` | `I_DefectCode` | [0..1] |
| `_DefectLocationCatalog` | `I_DefectLocationCatalog` | [0..1] |
| `_DefectLocationCodeGroup` | `I_DefectLocationCodeGroup` | [0..1] |
| `_DefectLocationCode` | `I_DefectLocationCode` | [0..1] |
| `_QltyNotifItemLongText` | `I_QltyNotifItemLongText` | [0..*] |
| `_Extension` | `E_NotificationItem` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Quality Notification Item'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IQLTYNTFITM'
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations:  [ '_CreatedByUserContactCard','_LastChangedByUserContactCard' ]
@ObjectModel: {
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #C },
    representativeKey: 'NotificationItem',
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ],
    modelingPattern: #NONE
}
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_QualityNotificationItem
  as select from I_NotificationItem

    inner join   I_QltyNotification // inner join ensures that only items of quality notifications are selected
    on I_QltyNotification.QualityNotification = I_NotificationItem.Notification

  association [1..1] to I_QltyNotification         as _QltyNotification         on  $projection.QualityNotification = _QltyNotification.QualityNotification
  association [1..1] to I_QltyNotification         as _Notification             on  $projection.QualityNotification = _Notification.QualityNotification
  association [0..*] to I_QltyNotificationTask     as _QltyNotificationTask     on  $projection.QualityNotification = _QltyNotificationTask.QualityNotification
                                                                                and $projection.NotificationItem    = _QltyNotificationTask.NotificationItem
  association [0..*] to I_QltyNotificationCause    as _QltyNotificationCause    on $projection.QualityNotification = _QltyNotificationCause.QualityNotification and
                                                                                   $projection.NotificationItem = _QltyNotificationCause.NotificationItem
  association [0..*] to I_QltyNotificationActivity as _QltyNotificationActivity on  $projection.QualityNotification = _QltyNotificationActivity.QualityNotification
                                                                                and $projection.NotificationItem    = _QltyNotificationActivity.NotificationItem

  association [0..1] to I_Defect                   as _ReferencedDefect         on  $projection.ReferencedDefect = _ReferencedDefect.DefectInternalID

  association [0..1] to I_DefectCodeGroup          as _DefectCodeGroup          on  $projection.DefectCodeGroup = _DefectCodeGroup.DefectCodeGroup
  association [0..1] to I_DefectCode               as _DefectCode               on  $projection.DefectCodeGroup = _DefectCode.DefectCodeGroup
                                                                                and $projection.DefectCode      = _DefectCode.DefectCode

  association [0..1] to I_DefectLocationCatalog    as _DefectLocationCatalog    on  $projection.NotifItmObjectPartCodeCtlg = _DefectLocationCatalog.DefectLocationCatalog
  association [0..1] to I_DefectLocationCodeGroup  as _DefectLocationCodeGroup  on  $projection.NotifItmObjectPartCodeCtlg  = _DefectLocationCodeGroup.DefectLocationCatalog
                                                                                and $projection.NotifItmObjectPartCodeGroup = _DefectLocationCodeGroup.DefectLocationCodeGroup
  association [0..1] to I_DefectLocationCode       as _DefectLocationCode       on  $projection.NotifItmObjectPartCodeCtlg  = _DefectLocationCode.DefectLocationCatalog
                                                                                and $projection.NotifItmObjectPartCodeGroup = _DefectLocationCode.DefectLocationCodeGroup
                                                                                and $projection.NotifItmObjectPartCode      = _DefectLocationCode.DefectLocationCode


  association [0..*] to I_QltyNotifItemLongText    as _QltyNotifItemLongText    on  $projection.QualityNotification = _QltyNotifItemLongText.QualityNotification
                                                                                and $projection.NotificationItem    = _QltyNotifItemLongText.NotificationItem
                                                                                
  //Extension
  association [1..1] to E_NotificationItem         as _Extension                on  $projection.QualityNotification = _Extension.Notification
                                                                                and $projection.NotificationItem    = _Extension.NotificationItem

{

      @ObjectModel: { foreignKey.association: '_Notification' }
  key I_NotificationItem.Notification                                                              as QualityNotification,
  key I_NotificationItem.NotificationItem,

      I_QltyNotification.NotifProcessingPhase,
      @Semantics.user.createdBy: true
      @ObjectModel.foreignKey.association: '_CreatedByUserContactCard'
      I_NotificationItem.CreatedByUser,
      @Semantics.systemDate.createdAt: true
      I_NotificationItem.CreationDate,
      @Semantics.user.lastChangedBy: true
      @ObjectModel.foreignKey.association: '_LastChangedByUserContactCard'
      I_NotificationItem.LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      I_NotificationItem.LastChangeDate,
      @Semantics.text: true
      I_NotificationItem.NotificationItemText,
      @ObjectModel.foreignKey.association: '_DefectCodeCatalog'
      I_NotificationItem.DefectCodeCatalog,
      @ObjectModel: { foreignKey.association: '_DefectCodeGroup' }
      cast( I_NotificationItem.DefectCodeGroup as vdm_qfegrp preserving type )                     as DefectCodeGroup,
      @ObjectModel: { foreignKey.association: '_DefectCode' }
      cast( I_NotificationItem.DefectCode      as vdm_qfecod preserving type )                     as DefectCode,
      @ObjectModel.foreignKey.association: '_DefectLocationCatalog'
      cast( I_NotificationItem.NotifItmObjectPartCodeCtlg as vdm_qfeocat preserving type )         as NotifItmObjectPartCodeCtlg,
      @ObjectModel.foreignKey.association: '_DefectLocationCodeGroup'
      cast( I_NotificationItem.NotifItmObjectPartCodeGroup as vdm_qfeogrp preserving type )        as NotifItmObjectPartCodeGroup,
      @ObjectModel.foreignKey.association: '_DefectLocationCode'
      cast( I_NotificationItem.NotifItmObjectPartCode as vdm_qfeocod preserving type )             as NotifItmObjectPartCode,
      @ObjectModel.foreignKey.association: '_Assembly'
      I_NotificationItem.Assembly,
      I_NotificationItem.MasterLanguage,
      cast( I_NotificationItem.CreationTime        as vdm_qerstezeit preserving type )             as CreationTime,
      cast( I_NotificationItem.LastChangeTime      as vdm_qaendezeit preserving type )             as LastChangeTime,

      @ObjectModel.foreignKey.association: '_DefectClass'
      I_NotificationItem.DefectClass,
      I_NotificationItem.NumberOfDefects,
      I_NotificationItem.InspPlanOperationInternalID,
      I_NotificationItem.InspectionCharacteristic,
      I_NotificationItem.InspectionSubsetInternalID,
      I_NotificationItem.MaterialSample,
      I_NotificationItem.DefectiveSingleUnit,
      //   Workcenter
      I_NotificationItem.WorkCenterTypeCode,
      I_NotificationItem.MainWorkCenterInternalID,
      I_NotificationItem.MainWorkCenter,
      I_NotificationItem.MainWorkCenterPlant,

      @Semantics.booleanIndicator: true
      I_NotificationItem.IsDeleted,
      cast( I_NotificationItem.NotificationItemExternalID as vdm_qnotifitemextid preserving type ) as NotificationItemExternalID,
      I_NotificationItem.DefectOrigin,


//    Quantities
      @Semantics.quantity.unitOfMeasure: 'DefectiveQuantityUnit'
      I_NotificationItem.ExternalDefectiveQuantity,
      @Semantics.quantity.unitOfMeasure: 'DefectiveQuantityUnit'
      I_NotificationItem.InternalDefectiveQuantity,
      @Semantics.quantity.unitOfMeasure: 'DefectiveQuantityUnit'
      I_NotificationItem.DefectiveQuantity,
      
      @ObjectModel.foreignKey.association: '_DefectiveQuantityUnit'
      I_NotificationItem.DefectiveQuantityUnit,

      @ObjectModel: { foreignKey.association: '_ReferencedDefect' }
      I_NotificationItem.ReferencedDefect,

      /* e-Tag */
      I_NotificationItem.ChangedDateTime,

      /* Associations */
      _QltyNotification,
      @VDM.lifecycle: { status: #DEPRECATED, successor: '_QltyNotification' }
      _Notification,
      _QltyNotificationTask,
      _QltyNotificationCause,
      _QltyNotificationActivity,
       I_NotificationItem._CreatedByUserContactCard        as _CreatedByUserContactCard,
       I_NotificationItem._LastChangedByUserContactCard    as _LastChangedByUserContactCard,
       I_NotificationItem._DefectCodeCatalog,
      _DefectCodeGroup,
      _DefectCode,
      _DefectLocationCatalog,
      _DefectLocationCodeGroup,
      _DefectLocationCode,
       I_NotificationItem._DefectClass,
      @VDM.lifecycle: { status: #DEPRECATED, successor: '_DefectiveQuantityUnit' }
       I_NotificationItem._DefectiveQtyUnitOfMeasure,
       I_NotificationItem._DefectiveQuantityUnit,
       I_NotificationItem._NotifItmObjectPartCodeCtlg,
       I_NotificationItem._NotifItmObjectPartCodeGroup,
       I_NotificationItem._NotifItmObjectPartCode,
      _ReferencedDefect,
       I_NotificationItem._Assembly,
      _QltyNotifItemLongText
}
```
