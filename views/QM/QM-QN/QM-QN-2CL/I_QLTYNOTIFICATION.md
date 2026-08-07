---
name: I_QLTYNOTIFICATION
description: "Qltynotification"
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
# I_QLTYNOTIFICATION

**Qltynotification**

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
| `MasterLanguage` |  | |  |  |  |  |
| `NotificationOrigin` |  | |  |  |  |  |
| `NotificationType` |  | |  |  |  |  |
| `NotifProcessingPhase` |  | |  |  |  |  |
| `NotificationText` |  | |  |  |  |  |
| `NotificationPriorityType` |  | |  |  |  |  |
| `NotificationPriority` |  | |  |  |  |  |
| `NotificationStatusObject` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `NotificationCatalog` |  | |  |  |  |  |
| `NotificationCodeGroup` |  | |  |  |  |  |
| `NotificationCodeID` |  | |  | `cast( I_Notification.NotificationCodeID as vdm_qmcod preserving type )` |  |  |
| `NotificationComplaintQuantity` |  | |  |  |  |  |
| `NotificationInternalQuantity` |  | |  |  |  |  |
| `NotificationExternalQty` |  | |  |  |  |  |
| `NotificationQuantityUnit` |  | |  |  |  |  |
| `NotificationReferenceQuantity` |  | |  |  |  |  |
| `NotifReturnDeliveryQuantity` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangedDate` |  | |  |  |  |  |
| `NotificationCreationTime` |  | |  |  |  |  |
| `NotificationReportingDate` |  | |  |  |  |  |
| `NotificationCompletionDate` |  | |  |  |  |  |
| `NotificationRequiredStartDate` |  | |  |  |  |  |
| `NotificationRequiredStartTime` |  | |  |  |  |  |
| `NotificationRequiredEndDate` |  | |  |  |  |  |
| `NotificationRequiredEndTime` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `NotificationReturnDeliveryDate` |  | |  |  |  |  |
| `NotificationTimeZone` |  | |  | `cast ( I_Notification.NotificationTimeZone as vdm_qtzonso preserving type )` |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `ReportedByUser` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ProductionOrder` |  | |  |  |  |  |
| `MfgOrderInternalID` |  | |  |  |  |  |
| `ProductionVersion` |  | |  |  |  |  |
| `PurchasingDocument` |  | |  |  |  |  |
| `PurchasingDocumentItem` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `ActiveDivision` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WorkCenterTypeCode` |  | |  |  |  |  |
| `MainWorkCenterInternalID` |  | |  |  |  |  |
| `MainWorkCenterPlant` |  | |  |  |  |  |
| `InspectionLot` |  | |  |  |  |  |
| `OrderOperationInternalID` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `Manufacturer` |  | |  |  |  |  |
| `MaterialDocumentYear` |  | |  |  |  |  |
| `MaterialDocument` |  | |  |  |  |  |
| `MaterialDocumentItem` |  | |  |  |  |  |
| `AdditionalDeviceData` |  | |  |  |  |  |
| `NotificationLinkedNotification` |  | |  | `cast( I_Notification.NotificationLinkedNotification as vdm_qwrnum preserving type )` |  |  |
| `NotificationExtReferenceNumber` |  | |  | `cast( I_Notification.NotificationExtReferenceNumber as vdm_qmextnr preserving type )` |  |  |
| `OrderDocument` |  | |  |  |  |  |
| `OrderDocumentItem` |  | |  |  |  |  |
| `DeliveryDocument` |  | |  |  |  |  |
| `DeliveryDocumentItem` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `ProductionDate` |  | |  |  |  |  |
| `_NotificationItem` |  | |  | `_QualityNotificationItem` |  |  |
| `_QualityNotificationPartner` | | ✓ | | | | |
| `_QualityNotificationItem` | | ✓ | | | | |
| `_QltyNotificationTask` | | ✓ | | | | |
| `_QltyNotificationActivity` | | ✓ | | | | |
| `_QltyNotificationHdrTask` | | ✓ | | | | |
| `_QltyNotificationHdrActivity` | | ✓ | | | | |
| `_QltyNotificationLongText` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductGroup_2` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_PurchasingDocument` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_NotificationQuantityUnit` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_InspectionLot` | | ✓ | | | | |
| `_InspectionOperation` | | ✓ | | | | |
| `_OrderOperationBasic` | | ✓ | | | | |
| `_NotificationType` | | ✓ | | | | |
| `_NotificationPriority` | | ✓ | | | | |
| `_NotificationCatalog` | | ✓ | | | | |
| `_NotificationCodeGroup` | | ✓ | | | | |
| `_NotificationCode` | | ✓ | | | | |
| `_NotifProcessingPhase` | | ✓ | | | | |
| `_StsObjConcatActiveStsILL` | | ✓ | | | | |
| `_CreatedByUserContactCard` | | ✓ | | | | |
| `_LastChangedByUserContactCard` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QualityNotificationPartner` | `I_QualityNotificationPartner` | [0..*] |
| `_QualityNotificationItem` | `I_QualityNotificationItem` | [0..*] |
| `_QltyNotificationTask` | `I_QltyNotificationTask` | [0..*] |
| `_QltyNotificationActivity` | `I_QltyNotificationActivity` | [0..*] |
| `_QltyNotificationHdrTask` | `I_QltyNotificationTask` | [0..*] |
| `_QltyNotificationHdrActivity` | `I_QltyNotificationActivity` | [0..*] |
| `_QltyNotificationLongText` | `I_QltyNotificationLongText` | [0..*] |
| `_Extension` | `E_QualityNotification` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IQLTYNOTIF',
  preserveKey: true,
  compiler.compareFilter: true
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #REQUIRED,
  privilegedAssociations: ['_CreatedByUserContactCard', '_LastChangedByUserContactCard', '_StsObjConcatActiveStsILL']
}
@EndUserText.label: 'Quality Notification'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  representativeKey: 'QualityNotification',
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
    modelingPattern: #NONE,
    usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #L,
    serviceQuality: #A
    }
}
@Metadata.ignorePropagatedAnnotations: true
define view I_QltyNotification
  as select from I_Notification

  association [0..*] to I_QualityNotificationPartner as _QualityNotificationPartner  on  $projection.NotificationStatusObject = _QualityNotificationPartner.NotificationPartnerObject
  association [0..*] to I_QualityNotificationItem    as _QualityNotificationItem     on  $projection.QualityNotification = _QualityNotificationItem.QualityNotification
  association [0..*] to I_QltyNotificationTask       as _QltyNotificationTask        on  $projection.QualityNotification = _QltyNotificationTask.QualityNotification
  association [0..*] to I_QltyNotificationActivity   as _QltyNotificationActivity    on  $projection.QualityNotification = _QltyNotificationActivity.QualityNotification
  association [0..*] to I_QltyNotificationTask       as _QltyNotificationHdrTask     on  $projection.QualityNotification           = _QltyNotificationHdrTask.QualityNotification
                                                                                     and _QltyNotificationHdrTask.NotificationItem is initial
  association [0..*] to I_QltyNotificationActivity   as _QltyNotificationHdrActivity on  $projection.QualityNotification = _QltyNotificationHdrActivity.QualityNotification
                                                                                     and _QltyNotificationHdrActivity.NotificationItem is initial
  association [0..*] to I_QltyNotificationLongText   as _QltyNotificationLongText    on  $projection.QualityNotification = _QltyNotificationLongText.QualityNotification
  
  //Extension
  association [1..1] to E_QualityNotification        as _Extension                   on $projection.QualityNotification = _Extension.QualityNotification

{

      //=== Key Fields
  key I_Notification.Notification                                            as QualityNotification,

      //=== Common Fields
      I_Notification.MasterLanguage,
      I_Notification.NotificationOrigin,
      @ObjectModel.foreignKey.association: '_NotificationType'
      I_Notification.NotificationType,
      @ObjectModel.foreignKey.association: '_NotifProcessingPhase'
      I_Notification.NotifProcessingPhase,
      I_Notification.NotificationText,
      I_Notification.NotificationPriorityType,
      @ObjectModel.foreignKey.association: '_NotificationPriority'
      I_Notification.NotificationPriority,
      I_Notification.NotificationStatusObject,
      @Semantics.booleanIndicator: true
      I_Notification.IsBusinessPurposeCompleted,
      @Semantics.booleanIndicator: true
      I_Notification.IsDeleted,
      @Semantics.user.createdBy: true
      @ObjectModel.foreignKey.association: '_CreatedByUserContactCard'
      I_Notification.CreatedByUser,
      @Semantics.user.lastChangedBy: true
      @ObjectModel.foreignKey.association: '_LastChangedByUserContactCard'
      I_Notification.LastChangedByUser,
      @ObjectModel.foreignKey.association: '_NotificationCatalog'
      I_Notification.NotificationCatalog,
      @ObjectModel.foreignKey.association: '_NotificationCodeGroup'
      I_Notification.NotificationCodeGroup,
      @ObjectModel.foreignKey.association: '_NotificationCode'
      cast( I_Notification.NotificationCodeID as vdm_qmcod preserving type ) as NotificationCodeID,

      //=== Quantity Fields
      @Semantics.quantity.unitOfMeasure: 'NotificationQuantityUnit'
      I_Notification.NotificationComplaintQuantity,
      @Semantics.quantity.unitOfMeasure: 'NotificationQuantityUnit'
      I_Notification.NotificationInternalQuantity,
      @Semantics.quantity.unitOfMeasure: 'NotificationQuantityUnit'
      I_Notification.NotificationExternalQty,
      @ObjectModel.foreignKey.association: '_NotificationQuantityUnit'
      @Semantics.unitOfMeasure:true
      I_Notification.NotificationQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'NotificationQuantityUnit'
      I_Notification.NotificationReferenceQuantity,
      @Semantics.quantity.unitOfMeasure: 'NotificationQuantityUnit'
      I_Notification.NotifReturnDeliveryQuantity,

      //=== Date Fields
      @Semantics.systemDate.createdAt: true
      I_Notification.CreationDate,
      @Semantics.systemDate.lastChangedAt: true
      I_Notification.LastChangedDate,
      I_Notification.NotificationCreationTime,
      I_Notification.NotificationReportingDate,
      I_Notification.NotificationCompletionDate,
      I_Notification.NotificationRequiredStartDate,
      I_Notification.NotificationRequiredStartTime,
      I_Notification.NotificationRequiredEndDate,
      I_Notification.NotificationRequiredEndTime,
      I_Notification.CustomerPurchaseOrderDate,
      I_Notification.NotificationReturnDeliveryDate,

      cast ( I_Notification.NotificationTimeZone as vdm_qtzonso preserving type ) as NotificationTimeZone, 

      // etag field
      I_Notification.ChangedDateTime,

      //=== Partner Fields
      @ObjectModel.foreignKey.association: '_Supplier'
      I_Notification.Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      I_Notification.Customer,
      I_Notification.ReportedByUser,

      //=== Reference Object Fields
      @ObjectModel.foreignKey.association: '_Product'
      I_Notification.Material,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      I_Notification.MaterialGroup,
      @ObjectModel.foreignKey.association: '_Plant'
      I_Notification.Plant,
      I_Notification.ProductionOrder,
      I_Notification.MfgOrderInternalID,
      I_Notification.ProductionVersion,
      @ObjectModel.foreignKey.association: '_PurchasingDocument'
      I_Notification.PurchasingDocument,
      I_Notification.PurchasingDocumentItem,
      I_Notification.PurchasingOrganization,
      I_Notification.PurchasingGroup,
      I_Notification.ActiveDivision,
      I_Notification.SalesOrganization,
      I_Notification.DistributionChannel,
      I_Notification.WBSElementInternalID,
      I_Notification.WorkCenterTypeCode,
      I_Notification.MainWorkCenterInternalID,
      I_Notification.MainWorkCenterPlant,
      @ObjectModel.foreignKey.association: '_InspectionLot'
      I_Notification.InspectionLot,
      I_Notification.OrderOperationInternalID,
      I_Notification.Batch,
      I_Notification.Manufacturer,
      I_Notification.MaterialDocumentYear,
      I_Notification.MaterialDocument,
      I_Notification.MaterialDocumentItem,
      I_Notification.AdditionalDeviceData,
      cast( I_Notification.NotificationLinkedNotification as vdm_qwrnum preserving type ) as NotificationLinkedNotification,
      cast( I_Notification.NotificationExtReferenceNumber as vdm_qmextnr preserving type ) as NotificationExtReferenceNumber,
      I_Notification.OrderDocument,
      I_Notification.OrderDocumentItem,
      I_Notification.DeliveryDocument,
      I_Notification.DeliveryDocumentItem,
      I_Notification.PurchaseOrderByCustomer,
      I_Notification.ProductionDate,

      //=== Expose Associations
      _QualityNotificationItem,
      _QltyNotificationHdrTask,
      _QltyNotificationTask,
      _QltyNotificationHdrActivity,
      _QltyNotificationActivity,
      _QltyNotificationLongText,
      _Plant,
      _Product,
      _ProductGroup_2,
      @VDM.lifecycle.status:#DEPRECATED
      @VDM.lifecycle.successor: '_ProductGroup_2'
      _ProductGroup,
      _PurchasingDocument,
      _Supplier,
      _Customer,
      _NotificationQuantityUnit,
      _WBSElement,
      _InspectionLot,
      _InspectionOperation, 
      _OrderOperationBasic,      
      _NotificationType,
      _NotificationPriority,
      _NotificationCatalog,
      _NotificationCodeGroup,
      _NotificationCode,
      _NotifProcessingPhase,
      _StsObjConcatActiveStsILL,
      _CreatedByUserContactCard,
      _LastChangedByUserContactCard,
      _QualityNotificationPartner,
      _QualityNotificationItem                                               as _NotificationItem

}
where
     I_Notification.NotificationOrigin = 'Q1'
  or I_Notification.NotificationOrigin = 'Q2'
  or I_Notification.NotificationOrigin = 'Q3'
```
