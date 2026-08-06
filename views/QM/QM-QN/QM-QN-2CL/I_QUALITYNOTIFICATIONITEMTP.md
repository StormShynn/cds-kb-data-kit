---
name: I_QUALITYNOTIFICATIONITEMTP
description: Quality NotificationICATIONITEMTP
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
  - transactional-processing
  - quality-notification
  - item-level
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QUALITYNOTIFICATIONITEMTP

**Quality NotificationICATIONITEMTP**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `QualityNotification` | `_QualityNotificationItem.QualityNotification` |
| key `NotificationItem` | `_QualityNotificationItem.NotificationItem` |
| `NotificationItemExternalID` | `_QualityNotificationItem.NotificationItemExternalID` |
| `NotificationItemText` | `_QualityNotificationItem.NotificationItemText` |
| `MasterLanguage` | `_QualityNotificationItem.MasterLanguage` |
| `Assembly` | `_QualityNotificationItem.Assembly` |
| `DefectClass` | `_QualityNotificationItem.DefectClass` |
| `NumberOfDefects` | `_QualityNotificationItem.NumberOfDefects` |
| `InspPlanOperationInternalID` | `_QualityNotificationItem.InspPlanOperationInternalID` |
| `InspectionCharacteristic` | `_QualityNotificationItem.InspectionCharacteristic` |
| `InspectionSubsetInternalID` | `_QualityNotificationItem.InspectionSubsetInternalID` |
| `MaterialSample` | `_QualityNotificationItem.MaterialSample` |
| `DefectiveSingleUnit` | `_QualityNotificationItem.DefectiveSingleUnit` |
| `WorkCenterTypeCode` | `_QualityNotificationItem.WorkCenterTypeCode` |
| `MainWorkCenterInternalID` | `_QualityNotificationItem.MainWorkCenterInternalID` |
| `MainWorkCenter` | `_QualityNotificationItem.MainWorkCenter` |
| `MainWorkCenterPlant` | `_QualityNotificationItem.MainWorkCenterPlant` |
| `DefectOrigin` | `_QualityNotificationItem.DefectOrigin` |
| `ReferencedDefect` | `_QualityNotificationItem.ReferencedDefect` |
| `IsDeleted` | `_QualityNotificationItem.IsDeleted` |
| `DefectCodeCatalog` | `_QualityNotificationItem.DefectCodeCatalog` |
| `DefectCodeGroup` | `_QualityNotificationItem.DefectCodeGroup` |
| `DefectCode` | `_QualityNotificationItem.DefectCode` |
| `NotifItmObjectPartCodeCtlg` | `_QualityNotificationItem.NotifItmObjectPartCodeCtlg` |
| `NotifItmObjectPartCodeGroup` | `_QualityNotificationItem.NotifItmObjectPartCodeGroup` |
| `NotifItmObjectPartCode` | `_QualityNotificationItem.NotifItmObjectPartCode` |
| `ExternalDefectiveQuantity` | `_QualityNotificationItem.ExternalDefectiveQuantity` |
| `InternalDefectiveQuantity` | `_QualityNotificationItem.InternalDefectiveQuantity` |
| `DefectiveQuantityUnit` | `_QualityNotificationItem.DefectiveQuantityUnit` |
| `CreatedByUser` | `_QualityNotificationItem.CreatedByUser` |
| `CreationDate` | `_QualityNotificationItem.CreationDate` |
| `CreationTime` | `_QualityNotificationItem.CreationTime` |
| `LastChangedByUser` | `_QualityNotificationItem.LastChangedByUser` |
| `LastChangeDate` | `_QualityNotificationItem.LastChangeDate` |
| `LastChangeTime` | `_QualityNotificationItem.LastChangeTime` |
| `I_QltyNotificationTP` | `_QualityNotificationItem._QltyNotification : redirected to parent I_QltyNotificationTP` |
| `I_QltyNotifItemLongTextTP` | `_QualityNotificationItem._QltyNotifItemLongText : redirected to composition child I_QltyNotifItemLongTextTP` |
| `I_QltyNotificationItemCauseTP` | `_QualityNotificationItem._QltyNotificationItemCause : redirected to composition child I_QltyNotificationItemCauseTP` |

## Source Code

```abap
@EndUserText.label: 'Quality Notification Item - TP'
@AccessControl.authorizationCheck: #MANDATORY

@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ]

@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
//  modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL },
  representativeKey: 'NotificationItem'
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_QualityNotificationItemTP
  as projection on R_QualityNotificationItemTP as _QualityNotificationItem 

{
      @ObjectModel.foreignKey.association: '_QltyNotification'
  key _QualityNotificationItem.QualityNotification,
  key _QualityNotificationItem.NotificationItem,

      _QualityNotificationItem.NotificationItemExternalID,

      @Semantics.text: true
      _QualityNotificationItem.NotificationItemText,

      _QualityNotificationItem.MasterLanguage,
      _QualityNotificationItem.Assembly,
      _QualityNotificationItem.DefectClass,

      _QualityNotificationItem.NumberOfDefects,

      _QualityNotificationItem.InspPlanOperationInternalID,
      _QualityNotificationItem.InspectionCharacteristic,
      _QualityNotificationItem.InspectionSubsetInternalID,
      _QualityNotificationItem.MaterialSample,
      _QualityNotificationItem.DefectiveSingleUnit,

      _QualityNotificationItem.WorkCenterTypeCode,
      _QualityNotificationItem.MainWorkCenterInternalID,
      _QualityNotificationItem.MainWorkCenter,
      _QualityNotificationItem.MainWorkCenterPlant,

      _QualityNotificationItem.DefectOrigin,
      _QualityNotificationItem.ReferencedDefect,

      @Semantics.booleanIndicator: true
      _QualityNotificationItem.IsDeleted,

      _QualityNotificationItem.DefectCodeCatalog,
      _QualityNotificationItem.DefectCodeGroup,
      _QualityNotificationItem.DefectCode,
      _QualityNotificationItem.NotifItmObjectPartCodeCtlg,
      _QualityNotificationItem.NotifItmObjectPartCodeGroup,
      _QualityNotificationItem.NotifItmObjectPartCode,

      @Semantics.quantity.unitOfMeasure: 'DefectiveQuantityUnit'
      _QualityNotificationItem.ExternalDefectiveQuantity,
      @Semantics.quantity.unitOfMeasure: 'DefectiveQuantityUnit'
      _QualityNotificationItem.InternalDefectiveQuantity,
//      @Semantics.unitOfMeasure: true
      _QualityNotificationItem.DefectiveQuantityUnit,

      @Semantics.user.createdBy: true
      _QualityNotificationItem.CreatedByUser,
      @Semantics.systemDate.createdAt: true
      _QualityNotificationItem.CreationDate,
      @Semantics.time: true
      _QualityNotificationItem.CreationTime,
      @Semantics.user.lastChangedBy: true
      _QualityNotificationItem.LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      _QualityNotificationItem.LastChangeDate,
      @Semantics.time: true
      _QualityNotificationItem.LastChangeTime,


      /* Associations */
      _QualityNotificationItem._QltyNotification          : redirected to parent            I_QltyNotificationTP,

      @Semantics.valueRange.maximum: '1'
      _QualityNotificationItem._QltyNotifItemLongText     : redirected to composition child I_QltyNotifItemLongTextTP,
      _QualityNotificationItem._QltyNotificationItemCause : redirected to composition child I_QltyNotificationItemCauseTP,

      // For auth check mapping role
      _QualityNotificationItem._Notification

}
```
