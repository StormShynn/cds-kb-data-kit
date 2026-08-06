---
name: I_QLTYNOTIFICATION
description: Qltynotification
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

| Field | Data Source |
|---|---|
| key `QualityNotification` | `I_Notification.Notification` |
| `MasterLanguage` | `I_Notification.MasterLanguage` |
| `NotificationOrigin` | `I_Notification.NotificationOrigin` |
| `NotificationType` | `I_Notification.NotificationType` |
| `NotifProcessingPhase` | `I_Notification.NotifProcessingPhase` |
| `NotificationText` | `I_Notification.NotificationText` |
| `NotificationPriorityType` | `I_Notification.NotificationPriorityType` |
| `NotificationPriority` | `I_Notification.NotificationPriority` |
| `NotificationStatusObject` | `I_Notification.NotificationStatusObject` |
| `IsBusinessPurposeCompleted` | `I_Notification.IsBusinessPurposeCompleted` |
| `IsDeleted` | `I_Notification.IsDeleted` |
| `CreatedByUser` | `I_Notification.CreatedByUser` |
| `LastChangedByUser` | `I_Notification.LastChangedByUser` |
| `NotificationCatalog` | `I_Notification.NotificationCatalog` |
| `NotificationCodeGroup` | `I_Notification.NotificationCodeGroup` |
| `NotificationCodeID` | `cast( I_Notification.NotificationCodeID as vdm_qmcod preserving type )` |
| `NotificationComplaintQuantity` | `I_Notification.NotificationComplaintQuantity` |
| `NotificationInternalQuantity` | `I_Notification.NotificationInternalQuantity` |
| `NotificationExternalQty` | `I_Notification.NotificationExternalQty` |
| `NotificationQuantityUnit` | `I_Notification.NotificationQuantityUnit` |
| `NotificationReferenceQuantity` | `I_Notification.NotificationReferenceQuantity` |
| `NotifReturnDeliveryQuantity` | `I_Notification.NotifReturnDeliveryQuantity` |
| `CreationDate` | `I_Notification.CreationDate` |
| `LastChangedDate` | `I_Notification.LastChangedDate` |
| `NotificationCreationTime` | `I_Notification.NotificationCreationTime` |
| `NotificationReportingDate` | `I_Notification.NotificationReportingDate` |
| `NotificationCompletionDate` | `I_Notification.NotificationCompletionDate` |
| `NotificationRequiredStartDate` | `I_Notification.NotificationRequiredStartDate` |
| `NotificationRequiredStartTime` | `I_Notification.NotificationRequiredStartTime` |
| `NotificationRequiredEndDate` | `I_Notification.NotificationRequiredEndDate` |
| `NotificationRequiredEndTime` | `I_Notification.NotificationRequiredEndTime` |
| `CustomerPurchaseOrderDate` | `I_Notification.CustomerPurchaseOrderDate` |
| `NotificationReturnDeliveryDate` | `I_Notification.NotificationReturnDeliveryDate` |
| `NotificationTimeZone` | `cast ( I_Notification.NotificationTimeZone as vdm_qtzonso preserving type )` |
| `ChangedDateTime` | `I_Notification.ChangedDateTime` |
| `Supplier` | `I_Notification.Supplier` |
| `Customer` | `I_Notification.Customer` |
| `ReportedByUser` | `I_Notification.ReportedByUser` |
| `Material` | `I_Notification.Material` |
| `MaterialGroup` | `I_Notification.MaterialGroup` |
| `Plant` | `I_Notification.Plant` |
| `ProductionOrder` | `I_Notification.ProductionOrder` |
| `MfgOrderInternalID` | `I_Notification.MfgOrderInternalID` |
| `ProductionVersion` | `I_Notification.ProductionVersion` |
| `PurchasingDocument` | `I_Notification.PurchasingDocument` |
| `PurchasingDocumentItem` | `I_Notification.PurchasingDocumentItem` |
| `PurchasingOrganization` | `I_Notification.PurchasingOrganization` |
| `PurchasingGroup` | `I_Notification.PurchasingGroup` |
| `ActiveDivision` | `I_Notification.ActiveDivision` |
| `SalesOrganization` | `I_Notification.SalesOrganization` |
| `DistributionChannel` | `I_Notification.DistributionChannel` |
| `WBSElementInternalID` | `I_Notification.WBSElementInternalID` |
| `WorkCenterTypeCode` | `I_Notification.WorkCenterTypeCode` |
| `MainWorkCenterInternalID` | `I_Notification.MainWorkCenterInternalID` |
| `MainWorkCenterPlant` | `I_Notification.MainWorkCenterPlant` |
| `InspectionLot` | `I_Notification.InspectionLot` |
| `OrderOperationInternalID` | `I_Notification.OrderOperationInternalID` |
| `Batch` | `I_Notification.Batch` |
| `Manufacturer` | `I_Notification.Manufacturer` |
| `MaterialDocumentYear` | `I_Notification.MaterialDocumentYear` |
| `MaterialDocument` | `I_Notification.MaterialDocument` |
| `MaterialDocumentItem` | `I_Notification.MaterialDocumentItem` |
| `AdditionalDeviceData` | `I_Notification.AdditionalDeviceData` |
| `NotificationLinkedNotification` | `cast( I_Notification.NotificationLinkedNotification as vdm_qwrnum preserving type )` |
| `NotificationExtReferenceNumber` | `cast( I_Notification.NotificationExtReferenceNumber as vdm_qmextnr preserving type )` |
| `OrderDocument` | `I_Notification.OrderDocument` |
| `OrderDocumentItem` | `I_Notification.OrderDocumentItem` |
| `DeliveryDocument` | `I_Notification.DeliveryDocument` |
| `DeliveryDocumentItem` | `I_Notification.DeliveryDocumentItem` |
| `PurchaseOrderByCustomer` | `I_Notification.PurchaseOrderByCustomer` |
| `ProductionDate` | `I_Notification.ProductionDate` |
| `_NotificationItem` | `_QualityNotificationItem` |
| `_QualityNotificationPartner` | *Association* |
| `_QualityNotificationItem` | *Association* |
| `_QltyNotificationTask` | *Association* |
| `_QltyNotificationActivity` | *Association* |
| `_QltyNotificationHdrTask` | *Association* |
| `_QltyNotificationHdrActivity` | *Association* |
| `_QltyNotificationLongText` | *Association* |
| `_Plant` | *Association* |
| `_Product` | *Association* |
| `_ProductGroup_2` | *Association* |
| `_ProductGroup` | *Association* |
| `_PurchasingDocument` | *Association* |
| `_Supplier` | *Association* |
| `_Customer` | *Association* |
| `_NotificationQuantityUnit` | *Association* |
| `_WBSElement` | *Association* |
| `_InspectionLot` | *Association* |
| `_InspectionOperation` | *Association* |
| `_OrderOperationBasic` | *Association* |
| `_NotificationType` | *Association* |
| `_NotificationPriority` | *Association* |
| `_NotificationCatalog` | *Association* |
| `_NotificationCodeGroup` | *Association* |
| `_NotificationCode` | *Association* |
| `_NotifProcessingPhase` | *Association* |
| `_StsObjConcatActiveStsILL` | *Association* |
| `_CreatedByUserContactCard` | *Association* |
| `_LastChangedByUserContactCard` | *Association* |

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
