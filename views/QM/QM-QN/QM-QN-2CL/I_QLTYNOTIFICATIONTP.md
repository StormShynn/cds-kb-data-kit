---
name: I_QLTYNOTIFICATIONTP
description: Qltynotificationtp
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
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QLTYNOTIFICATIONTP

**Qltynotificationtp**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `QualityNotification` | `QualityNotification` |
| `MasterLanguage` | `MasterLanguage` |
| `NotificationOrigin` | `NotificationOrigin` |
| `NotificationType` | `NotificationType` |
| `NotifProcessingPhase` | `NotifProcessingPhase` |
| `NotificationText` | `NotificationText` |
| `NotificationPriorityType` | `NotificationPriorityType` |
| `NotificationPriority` | `NotificationPriority` |
| `NotificationStatusObject` | `NotificationStatusObject` |
| `IsBusinessPurposeCompleted` | `IsBusinessPurposeCompleted` |
| `IsDeleted` | `IsDeleted` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangedByUser` | `LastChangedByUser` |
| `NotificationCatalog` | `NotificationCatalog` |
| `NotificationCodeGroup` | `NotificationCodeGroup` |
| `NotificationCodeID` | `NotificationCodeID` |
| `CreationDate` | `CreationDate` |
| `LastChangedDate` | `LastChangedDate` |
| `NotificationReportingDate` | `NotificationReportingDate` |
| `NotificationCompletionDate` | `NotificationCompletionDate` |
| `NotificationRequiredStartDate` | `NotificationRequiredStartDate` |
| `NotificationRequiredStartTime` | `NotificationRequiredStartTime` |
| `NotificationRequiredEndDate` | `NotificationRequiredEndDate` |
| `NotificationRequiredEndTime` | `NotificationRequiredEndTime` |
| `NotificationTimeZone` | `NotificationTimeZone` |
| `Supplier` | `Supplier` |
| `Customer` | `Customer` |
| `Material` | `Material` |
| `MaterialGroup` | `MaterialGroup` |
| `Plant` | `Plant` |
| `PurchasingDocument` | `PurchasingDocument` |
| `PurchasingDocumentItem` | `PurchasingDocumentItem` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PurchasingGroup` | `PurchasingGroup` |
| `ActiveDivision` | `ActiveDivision` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `WorkCenterTypeCode` | `WorkCenterTypeCode` |
| `MainWorkCenterInternalID` | `MainWorkCenterInternalID` |
| `MainWorkCenterPlant` | `MainWorkCenterPlant` |
| `InspectionLot` | `InspectionLot` |
| `Batch` | `Batch` |
| `MaterialDocumentYear` | `MaterialDocumentYear` |
| `MaterialDocument` | `MaterialDocument` |
| `MaterialDocumentItem` | `MaterialDocumentItem` |
| `ChangedDateTime` | `ChangedDateTime` |
| `_QltyNotificationLongText` | *Association* |
| `_QltyNotificationPartner` | *Association* |
| `_QualityNotificationItem` | *Association* |
| `_QltyNotificationTask` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Quality Notification - TP'
@AccessControl.authorizationCheck: #MANDATORY

@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
//  modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  representativeKey: 'QualityNotification'
}

@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.sapObjectNodeType.name: 'QualityNotification'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

//@ObjectModel.representativeKey: 'QualityNotification'

@Metadata.ignorePropagatedAnnotations: true

define root view entity I_QltyNotificationTP
  provider contract transactional_interface
//  provider contract transactional_query
  as projection on R_QltyNotificationTP as QltyNotification
{
      @ObjectModel.sapObjectNodeTypeReference: 'QualityNotification'
  key QualityNotification,
      MasterLanguage,
      NotificationOrigin,
      NotificationType,
      NotifProcessingPhase,
      NotificationText,
      NotificationPriorityType,
      NotificationPriority,
      NotificationStatusObject,
      @Semantics.booleanIndicator
      IsBusinessPurposeCompleted,
      @Semantics.booleanIndicator
      IsDeleted,
      CreatedByUser,
      LastChangedByUser,
      NotificationCatalog,
      NotificationCodeGroup,
      NotificationCodeID,
      CreationDate,
      LastChangedDate,
      NotificationReportingDate,
      NotificationCompletionDate,
      NotificationRequiredStartDate,
      NotificationRequiredStartTime,
      NotificationRequiredEndDate,
      NotificationRequiredEndTime,
      NotificationTimeZone,
      Supplier,
      Customer,
      Material,
      MaterialGroup,
      Plant,
      PurchasingDocument,
      PurchasingDocumentItem,
      PurchasingOrganization,
      PurchasingGroup,
      ActiveDivision,
      SalesOrganization,
      DistributionChannel,
      WBSElementInternalID,
      WorkCenterTypeCode,
      MainWorkCenterInternalID,
      MainWorkCenterPlant,
      InspectionLot,
      Batch,
      MaterialDocumentYear,
      MaterialDocument,
      MaterialDocumentItem,
      ChangedDateTime,
      
      @Semantics.valueRange.maximum: '1'      
      _QltyNotificationLongText : redirected to composition child I_QltyNotificationLongTextTP,
      _QltyNotificationPartner  : redirected to composition child I_QualityNotificationPartnerTP,
      _QualityNotificationItem  : redirected to composition child I_QualityNotificationItemTP,
      _QltyNotificationTask     : redirected to composition child I_QltyNotificationTaskTP
}
```
