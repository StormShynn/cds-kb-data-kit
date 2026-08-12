---
name: C_MAINTNOTIFICATIONDEX
description: "Data Extraction for Maint Notification"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFICATIONDEX')/$value
semantic_en: "Data Extraction for Maint Notification"
semantic_vi: "Data Extraction for Maint Notification — CDS view tiêu dùng dựa trên I_MaintenanceNotificationBasic."
keywords:
  - "data"
  - "extraction"
  - "for"
  - "maint"
  - "notification"
  - "maintenance"
  - "type"
  - "text"
  - "order"
  - "notif"
  - "processing"
  - "context"
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MN-2CL
  - consumption-view
  - lob:plant maintenance
  - notification
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
---
# C_MAINTNOTIFICATIONDEX

**Data Extraction for Maint Notification**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFICATIONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceNotification` | ✓ | |  |  | `CHAR(12)` | Notification Number |
| `NotificationType` |  | |  |  | `CHAR(2)` | Notification Type |
| `NotificationText` |  | |  |  | `CHAR(40)` | Short Text |
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `MaintNotifProcessingContext` |  | |  |  | `CHAR(2)` | Maintenance Notification Processing Context |
| `MaintNotifRejectionReasonCode` |  | |  |  | `CHAR(3)` | Maintenance Reason Code |
| `MaintPriorityType` |  | |  |  | `CHAR(2)` | Priority Type |
| `MaintPriority` |  | |  |  | `CHAR(1)` | Priority |
| `LatestAcceptableCompletionDate` |  | |  |  | `DATS(8)` | Final Due Date |
| `PreviousFinalDueDate` |  | |  |  | `DATS(8)` | Previous Final Due Date |
| `CatalogProfile` |  | |  |  | `CHAR(9)` | Catalog Profile |
| `CatalogProfileOriginCode` |  | |  |  | `CHAR(1)` | Origin of Notifications Catalog Profile |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  |  | `CHAR(12)` | Location and account assignment for technical object |
| `LocationDescription` |  | |  |  | `CHAR(50)` | Description of Current Location |
| `RequiredStartDate` |  | |  |  | `DATS(8)` | Required Start Date |
| `RequiredStartTime` |  | |  |  | `TIMS(6)` | Required Start Time |
| `RequiredEndDate` |  | |  |  | `DATS(8)` | Required End Date |
| `RequiredEndTime` |  | |  |  | `TIMS(6)` | Required End Time |
| `NotificationCreationDate` |  | |  |  | `DATS(8)` | Date of Notification |
| `NotificationCreationTime` |  | |  |  | `TIMS(6)` | Time of Notification |
| `NotificationReferenceDate` |  | |  |  | `DATS(8)` | Notification Reference Date |
| `NotificationReferenceTime` |  | |  |  | `TIMS(6)` | Notification Reference Time |
| `NotificationCompletionDate` |  | |  |  | `DATS(8)` | Date for Notification Completion |
| `NotificationCompletionTime` |  | |  |  | `TIMS(6)` | Completion Time of Notification |
| `MalfunctionStartDate` |  | |  |  | `DATS(8)` | Start of Malfunction (Date) |
| `MalfunctionStartTime` |  | |  |  | `TIMS(6)` | Start of Malfunction (Time) |
| `MalfunctionEndDate` |  | |  |  | `DATS(8)` | End of Malfunction (Date) |
| `MalfunctionEndTime` |  | |  |  | `TIMS(6)` | End of Malfunction (Time) |
| `MaintNotificationCatalog` |  | |  |  | `CHAR(1)` | Catalog Type - Coding |
| `MaintNotificationCodeGroup` |  | |  |  | `CHAR(8)` | Code Group - Coding |
| `MaintNotificationCode` |  | |  |  | `CHAR(4)` | Coding |
| `MaintenanceObjectIsDown` |  | |  |  | `CHAR(1)` | Breakdown Indicator |
| `MaintObjectDowntimeDuration` |  | |  |  | `FLTP(16)` | Breakdown Duration |
| `MaintObjDowntimeDurationUnit` |  | |  |  | `UNIT(3)` | Unit for Breakdown Duration |
| `MaintNotifDetectionCatalog` |  | |  |  | `CHAR(2)` | Detection Method Profile |
| `MaintNotifDetectionCodeGroup` |  | |  |  | `CHAR(8)` | Detection Method Group |
| `MaintNotifDetectionCode` |  | |  |  | `CHAR(4)` | Detection Method |
| `MalfunctionEffect` |  | |  |  | `CHAR(1)` | Effect on Operation |
| `MaintNotifInternalID` |  | |  |  | `CHAR(22)` | Object Number for Status Management |
| `NotificationHasLongText` |  | |  |  | `CHAR(1)` | Object Long Text Available |
| `NotificationTimeZone` |  | |  |  | `CHAR(6)` | Time Zone for Notification |
| `NotificationTimeZoneOrigin` |  | |  |  | `CHAR(1)` | Origin of Time Zone in Notification |
| `MaintenancePlan` |  | |  |  | `CHAR(12)` | Maintenance Plan |
| `MaintenanceItem` |  | |  |  | `CHAR(16)` | Maintenance Item |
| `MaintenancePlanCallNumber` |  | |  |  | `INT4(10)` | Maintenance Plan Call Number |
| `MaintenanceTaskListType` |  | |  |  | `CHAR(1)` | Task List Type |
| `TaskListGroup` |  | |  |  | `CHAR(8)` | Key for Task List Group |
| `TaskListGroupCounter` |  | |  |  | `CHAR(2)` | Group Counter |
| `MaintenanceActivityType` |  | |  |  | `CHAR(3)` | Maintenance activity type |
| `NotifProcessingPhase` |  | |  |  | `CHAR(1)` | Notification Processing Phase |
| `MaintNotifProcessPhaseCode` |  | |  |  | `CHAR(2)` | Process Phase |
| `MaintNotifProcessSubPhaseCode` |  | |  |  | `CHAR(4)` | Process Subphase |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Object is deleted |
| `IsCompleted` |  | |  |  | `CHAR(1)` | Object is completed |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the Work Center |
| `MainWorkCenterPlant` |  | |  |  | `CHAR(4)` | Plant for Work Center |
| `MainWorkCenterTypeCode` |  | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `MaintenancePlannerGroup` |  | |  |  | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `MaintenancePlanningPlant` |  | |  |  | `CHAR(4)` | Maintenance Planning Plant |
| `NotificationPersonResponsible` |  | |  |  | `CHAR(12)` | Person Responsible ID |
| `ReportedByUser` |  | |  |  | `CHAR(12)` | Name of Person Reporting Notification |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Added |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of Change |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFICATIONDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFICATIONDEX')/$value)*

```abap
@EndUserText.label: 'Data Extraction for Maint Notification'
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}
@Analytics: {
  dataCategory: #FACT,
  technicalName: 'CMAINTNOTIFDEX',
  dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                                    { mapping:
                                      [
                                        { role: #MAIN,
                                          table: 'qmel',
                                          tableElement: ['qmnum'                  ],
                                          viewElement:  ['MaintenanceNotification']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'qmih',
                                          tableElement: ['qmnum'],
                                          viewElement:  ['MaintenanceNotification']
                                        }
                                        ] } }
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'MaintenanceNotification',
  modelingPattern: #ANALYTICAL_FACT,
  usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
}
@VDM.viewType: #CONSUMPTION
define view entity C_MaintNotificationDEX
  as select from I_MaintenanceNotificationBasic
{
  key MaintenanceNotification,
      NotificationType,
      NotificationText,
      MaintenanceOrder,
      MaintNotifProcessingContext,
      MaintNotifRejectionReasonCode,
      MaintPriorityType,
      MaintPriority,
      LatestAcceptableCompletionDate,
      PreviousFinalDueDate,
      CatalogProfile,
      CatalogProfileOriginCode,
      Equipment,
      MaintObjectLocAcctAssgmtNmbr,
      LocationDescription,
      RequiredStartDate,
      RequiredStartTime,
      RequiredEndDate,
      RequiredEndTime,
      NotificationCreationDate,
      NotificationCreationTime,
      NotificationReferenceDate,
      NotificationReferenceTime,
      NotificationCompletionDate,
      NotificationCompletionTime,
      MalfunctionStartDate,
      MalfunctionStartTime,
      @EndUserText.label: 'Malfunction End Date'
      MalfunctionEndDate,
      @EndUserText.label: 'Malfunction End Time'
      MalfunctionEndTime,
      MaintNotificationCatalog,
      MaintNotificationCodeGroup,
      MaintNotificationCode,
      MaintenanceObjectIsDown,
      MaintObjectDowntimeDuration,
      MaintObjDowntimeDurationUnit,
      MaintNotifDetectionCatalog,
      MaintNotifDetectionCodeGroup,
      MaintNotifDetectionCode,
      MalfunctionEffect,
      MaintNotifInternalID,
      @Semantics.booleanIndicator:true
      NotificationHasLongText,
      NotificationTimeZone,
      NotificationTimeZoneOrigin,
      MaintenancePlan,
      MaintenanceItem,
      MaintenancePlanCallNumber,
      MaintenanceTaskListType,
      TaskListGroup,
      TaskListGroupCounter,
      MaintenanceActivityType,
      NotifProcessingPhase,
      MaintNotifProcessPhaseCode,
      MaintNotifProcessSubPhaseCode,
      @Semantics.booleanIndicator:true
      IsDeleted,
      @Semantics.booleanIndicator:true
      IsCompleted,
      WorkCenterInternalID,
      MainWorkCenterPlant,
      MainWorkCenterTypeCode,
      MaintenancePlannerGroup,
      MaintenancePlanningPlant,
      NotificationPersonResponsible,
      ReportedByUser,
      CreatedByUser,
      CreationDate,
      CreationTime,
      LastChangedByUser,
      LastChangeDate,
      LastChangeTime,
      LastChangeDateTime


}
```
