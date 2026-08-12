---
name: C_MAINTNOTIFTASKDEX
description: "Data Extraction for Maint Notif Task"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFTASKDEX')/$value
semantic_en: "Data Extraction for Maint Notif Task"
semantic_vi: "Data Extraction for Maint Notif Task — CDS view tiêu dùng dựa trên I_MaintNotificationTaskBasic."
keywords:
  - "data"
  - "extraction"
  - "for"
  - "maint"
  - "notif"
  - "task"
  - "maintenance"
  - "notification"
  - "item"
  - "code"
  - "catalog"
  - "group"
tags:
  - PM
  - component:PM-WOC-MN-2CL
  - consumption-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
  - task
  - bo:companycode
---
# C_MAINTNOTIFTASKDEX

**Data Extraction for Maint Notif Task**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFTASKDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceNotification` | ✓ | |  |  | `CHAR(12)` | Notification Number |
| `MaintenanceNotificationTask` | ✓ | |  |  | `NUMC(4)` | Sequential Task Number |
| `MaintenanceNotificationItem` |  | |  |  | `NUMC(4)` | Item Number in Item Record |
| `MaintNotifTaskCodeCatalog` |  | |  |  | `CHAR(1)` | Catalog Type - Tasks |
| `MaintNotifTaskCodeGroup` |  | |  |  | `CHAR(8)` | Code Group - Tasks |
| `MaintNotifTaskCode` |  | |  |  | `CHAR(4)` | Task Code |
| `MaintNotifTaskTxt` |  | |  |  | `CHAR(40)` | Short Text for Task |
| `ResponsiblePersonFunctionCode` |  | |  |  | `CHAR(2)` | Partner Function |
| `ResponsiblePerson` |  | |  |  | `NUMC(8)` | Number of the Responsible Person (Project Manager) |
| `NotificationTaskSortNumber` |  | |  |  | `NUMC(4)` | Sort Number for Task |
| `PlannedStartDate` |  | |  |  | `DATS(8)` | Planned Start Date |
| `PlannedStartTime` |  | |  |  | `TIMS(6)` | Planned Start Time for Task |
| `PlannedEndDate` |  | |  |  | `DATS(8)` | Planned Finish Date |
| `PlannedEndTime` |  | |  |  | `TIMS(6)` | Planned Finish Time for Task |
| `CompletionDate` |  | |  |  | `DATS(8)` | Date on Which the Task Was Completed |
| `CompletionTime` |  | |  |  | `TIMS(6)` | Time at Which Task Was Completed |
| `CompletedByUser` |  | |  |  | `CHAR(12)` | Person Who Completed the Task |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Delete Data Record |
| `MaintNotifTaskInternalID` |  | |  |  | `CHAR(22)` | Object Number for Status Management |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Added |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of Change |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFTASKDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFTASKDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                                    { mapping:
                                      [ { role: #MAIN,
                                          table: 'qmsm',
                                          tableElement: ['qmnum'                  , 'manum'],
                                          viewElement:  ['MaintenanceNotification', 'MaintenanceNotificationTask']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'qmel',
                                          tableElement: ['qmnum'],
                                          viewElement:  ['MaintenanceNotification']
                                        }
                                        ] } }
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'CMAINTNOTIFTASKDEX'
@Consumption.ranked: true
@Metadata.allowExtensions: true
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'MaintenanceNotificationTask'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Data Extraction for Maint Notif Task'
@Metadata.ignorePropagatedAnnotations: true
define view entity C_MaintNotifTaskDEX
  as select from I_MaintNotificationTaskBasic
{
  key MaintenanceNotification,
  key MaintenanceNotificationTask,
      MaintenanceNotificationItem,
      MaintNotifTaskCodeCatalog,
      MaintNotifTaskCodeGroup,
      MaintNotifTaskCode,
      MaintNotifTaskTxt,
      ResponsiblePersonFunctionCode,
      ResponsiblePerson,
      NotificationTaskSortNumber,
      PlannedStartDate,
      PlannedStartTime,
      PlannedEndDate,
      PlannedEndTime,
      CompletionDate,
      CompletionTime,
      CompletedByUser,
      @Semantics.booleanIndicator: true
      IsDeleted,
      MaintNotifTaskInternalID,
      CreatedByUser,
      CreationDate,
      CreationTime,
      LastChangedByUser,
      LastChangeDate,
      LastChangeTime

}
where
  MaintenanceNotificationItem = '0000'
```
