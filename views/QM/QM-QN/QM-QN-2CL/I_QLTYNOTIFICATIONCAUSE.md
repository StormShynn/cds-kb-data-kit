---
name: I_QLTYNOTIFICATIONCAUSE
description: "Qltynotificationcause"
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
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QLTYNOTIFICATIONCAUSE

**Qltynotificationcause**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QualityNotification` | ✓ | |  | `Notification` |  |  |
| `NotificationItem` | ✓ | |  |  |  |  |
| `NotificationCauseID` | ✓ | |  |  |  |  |
| `NotificationCauseSortNumber` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `NotificationCauseText` |  | |  |  |  |  |
| `NotificationCauseCodeCatalog` |  | |  | `cast( I_NotificationCause.NotificationCauseCodeCatalog as vdm_qurkat preserving type )` |  |  |
| `NotificationCauseCodeGroup` |  | |  | `cast( I_NotificationCause.NotificationCauseCodeGroup as vdm_qurgrp preserving type )` |  |  |
| `NotificationCauseCode` |  | |  |  |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `MasterLanguage` |  | |  |  |  |  |
| `NotificationRootCause` |  | |  |  |  |  |
| `IsDeleted` |  | |  | `cast( I_NotificationCause.IsDeleted as vdm_qisdeleted preserving type )` |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `_QltyNotification` | | ✓ | | | | |
| `_QualityNotificationItem` | | ✓ | | | | |
| `_Notification` | | ✓ | | | | |
| `_NotificationItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QltyNotification` | `I_QltyNotification` | [1] |
| `_QualityNotificationItem` | `I_QualityNotificationItem` | [1] |
| `_Notification` | `I_QltyNotification` | [1..1] |
| `_NotificationItem` | `I_QualityNotificationItem` | [1..1] |
| `_Extension` | `E_NotificationCause` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Quality Notification Item Cause'

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations:  [ '_CreatedByUserContactCard','_LastChangedByUserContactCard' ]

@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities: 
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel: {
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #C },
    representativeKey: 'NotificationCauseID'
}
@Analytics.technicalName: 'IQLTYNTFCAU'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_QltyNotificationCause as select from I_NotificationCause 

  inner join   I_QltyNotification // inner join ensures that only items of quality notifications are selected
    on I_QltyNotification.QualityNotification = I_NotificationCause.Notification 
    
  // Define own association for parent and root in the QM layer
  association [1] to I_QltyNotification          as _QltyNotification         on  $projection.QualityNotification = _QltyNotification.QualityNotification
  association [1] to I_QualityNotificationItem   as _QualityNotificationItem  on  $projection.QualityNotification = _QualityNotificationItem.QualityNotification
                                                                              and $projection.NotificationItem    = _QualityNotificationItem.NotificationItem
                         
  association [1..1] to I_QltyNotification as _Notification on $projection.QualityNotification = _Notification.QualityNotification
  association [1..1] to I_QualityNotificationItem as _NotificationItem on $projection.QualityNotification = _NotificationItem.QualityNotification and 
                                                                          $projection.NotificationItem = _NotificationItem.NotificationItem     

  //Extension
  association [1..1] to E_NotificationCause as _Extension on  $projection.QualityNotification = _Extension.Notification
                                                          and $projection.NotificationItem    = _Extension.NotificationItem
                                                          and $projection.NotificationCauseID = _Extension.NotificationCauseID 

{

  @ObjectModel.foreignKey.association: '_Notification'
  key I_NotificationCause.Notification as QualityNotification,
  @ObjectModel.foreignKey.association: '_NotificationItem'
  key I_NotificationCause.NotificationItem,
  key I_NotificationCause.NotificationCauseID,
  I_NotificationCause.NotificationCauseSortNumber,
  I_NotificationCause.CreatedByUser,
  I_NotificationCause.CreationDate,
  I_NotificationCause.CreationTime,
  I_NotificationCause.LastChangedByUser,
  I_NotificationCause.LastChangeDate,
  I_NotificationCause.LastChangeTime,
  I_NotificationCause.NotificationCauseText,
  cast( I_NotificationCause.NotificationCauseCodeCatalog as vdm_qurkat preserving type ) as NotificationCauseCodeCatalog,
  cast( I_NotificationCause.NotificationCauseCodeGroup as vdm_qurgrp preserving type ) as NotificationCauseCodeGroup,
  I_NotificationCause.NotificationCauseCode,
  I_NotificationCause.ChangedDateTime,
  I_NotificationCause.MasterLanguage,
  I_NotificationCause.NotificationRootCause,
  
  @Semantics.booleanIndicator 
  cast( I_NotificationCause.IsDeleted as vdm_qisdeleted preserving type ) as IsDeleted,
  @Semantics.booleanIndicator 
  I_NotificationCause.IsBusinessPurposeCompleted,
  
  /* Associations */
  _QltyNotification,
  @VDM.lifecycle: { status: #DEPRECATED, successor: '_QltyNotification' }
  _Notification,
  _QualityNotificationItem,
  @VDM.lifecycle: { status: #DEPRECATED, successor: '_QualityNotificationItem' }
  _NotificationItem,
  I_NotificationCause._CreatedByUserContactCard,
  I_NotificationCause._LastChangedByUserContactCard,
  I_NotificationCause._NotifCauseCodeCatalog,
  I_NotificationCause._NotifCauseCodeGroup,
  I_NotificationCause._NotifCauseCode,
  I_NotificationCause._NotificationRootCause
}
```
