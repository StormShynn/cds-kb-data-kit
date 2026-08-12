---
name: I_QLTYNOTIFICATIONTP
description: "Qltynotificationtp"
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QualityNotification` | ✓ | |  |  |  |  |
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
| `NotificationCodeID` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangedDate` |  | |  |  |  |  |
| `NotificationReportingDate` |  | |  |  |  |  |
| `NotificationCompletionDate` |  | |  |  |  |  |
| `NotificationRequiredStartDate` |  | |  |  |  |  |
| `NotificationRequiredStartTime` |  | |  |  |  |  |
| `NotificationRequiredEndDate` |  | |  |  |  |  |
| `NotificationRequiredEndTime` |  | |  |  |  |  |
| `NotificationTimeZone` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
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
| `Batch` |  | |  |  |  |  |
| `MaterialDocumentYear` |  | |  |  |  |  |
| `MaterialDocument` |  | |  |  |  |  |
| `MaterialDocumentItem` |  | |  |  |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `_QltyNotificationLongText` | | ✓ | | | | |
| `_QltyNotificationPartner` | | ✓ | | | | |
| `_QualityNotificationItem` | | ✓ | | | | |
| `_QltyNotificationTask` | | ✓ | | | | |

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
