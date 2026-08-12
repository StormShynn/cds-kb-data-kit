---
name: C_MAINTNOTIFACTIVITYDEX
description: "Data Extraction for Maint Notif Activity"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFACTIVITYDEX')/$value
semantic_en: "Data Extraction for Maint Notif Activity"
semantic_vi: "Data Extraction for Maint Notif Activity — CDS view tiêu dùng dựa trên I_MaintNotifActivityBasic."
keywords:
  - "data"
  - "extraction"
  - "for"
  - "maint"
  - "notif"
  - "activity"
  - "maintenance"
  - "notification"
  - "item"
  - "sort"
  - "number"
  - "code"
  - "vers"
  - "nmbr"
tags:
  - PM
  - component:PM-WOC-MN-2CL
  - consumption-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
---
# C_MAINTNOTIFACTIVITYDEX

**Data Extraction for Maint Notif Activity**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFACTIVITYDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceNotification` | ✓ | |  |  | `CHAR(12)` | Notification Number |
| `MaintNotificationActivity` | ✓ | |  |  | `NUMC(4)` | Consecutive Number of Activity |
| `MaintenanceNotificationItem` |  | |  |  | `NUMC(4)` | Item Number in Item Record |
| `MaintNotifActivitySortNumber` |  | |  |  | `NUMC(4)` | Sort Number for Activity |
| `MaintNotifActivityCodeVersNmbr` |  | |  |  | `CHAR(6)` | Version Number |
| `MaintNotifActivityCodeCatalog` |  | |  |  | `CHAR(1)` | Catalog Type - Activities |
| `MaintNotifActivityCodeGroup` |  | |  |  | `CHAR(8)` | Activity Code Group |
| `MaintNotificationActivityCode` |  | |  |  | `CHAR(4)` | Activity Code |
| `MaintNotifActyTxt` |  | |  |  | `CHAR(40)` | Activity Text |
| `NotificationHasLongText` |  | |  |  | `CHAR(1)` | Object Long Text Available |
| `MaintNotifActivityTxtLanguage` |  | |  |  | `CHAR(1)` | Primary language indicator for text segment |
| `MaintNotifActivityStartDate` |  | |  |  | `DATS(8)` | Activity Start Date |
| `MaintNotifActivityStartTime` |  | |  |  | `TIMS(6)` | Start Time of Activity |
| `MaintNotifActivityEndDate` |  | |  |  | `DATS(8)` | Activity End Date |
| `MaintNotifActivityEndTime` |  | |  |  | `TIMS(6)` | End Time of Activity |
| `MaintNotifActyQtyFactor` |  | |  |  | `NUMC(3)` | Quantity Factor for Activities |
| `MaintNotifActyIsCreatedByCopy` |  | |  |  | `CHAR(1)` | Data Record Created with Function 'Create with Copy Model' |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Delete Data Record |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Added |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of Change |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFACTIVITYDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFACTIVITYDEX')/$value)*

```abap
@EndUserText.label: 'Data Extraction for Maint Notif Activity'
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}
@Analytics: {
  dataCategory: #FACT,
  internalName: #LOCAL,
  technicalName: 'CMAINTNOTIFACTDEX',
  dataExtraction: { enabled: true,
                     delta.changeDataCapture:
                            { mapping:
                              [ { role: #MAIN,
                                  table: 'qmma',
                                  tableElement: ['qmnum'                  , 'manum'],
                                  viewElement:  ['MaintenanceNotification', 'MaintNotificationActivity']
                                },
                                { role: #LEFT_OUTER_TO_ONE_JOIN,
                                  table: 'qmel',
                                  tableElement: ['qmnum'],
                                  viewElement:  ['MaintenanceNotification']
                                }
                                ] } }
}
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE ],
  modelingPattern: #ANALYTICAL_FACT,
  sapObjectNodeType.name: 'MaintNotificationActivity',
  usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
}
@VDM.viewType: #CONSUMPTION
define view entity C_MaintNotifActivityDEX
  as select from I_MaintNotifActivityBasic
{
  key MaintenanceNotification,
  key MaintNotificationActivity,
      MaintenanceNotificationItem,
      MaintNotifActivitySortNumber,
      MaintNotifActivityCodeVersNmbr,
      MaintNotifActivityCodeCatalog,
      MaintNotifActivityCodeGroup,
      MaintNotificationActivityCode,
      MaintNotifActyTxt,
      @Semantics.booleanIndicator:true
      NotificationHasLongText,
      MaintNotifActivityTxtLanguage,
      MaintNotifActivityStartDate,
      @EndUserText.label: 'Activity Start Time'
      MaintNotifActivityStartTime,
      MaintNotifActivityEndDate,
      @EndUserText.label: 'Activity End Time'
      MaintNotifActivityEndTime,
      MaintNotifActyQtyFactor,
      @Semantics.booleanIndicator:true
      MaintNotifActyIsCreatedByCopy,
      @Semantics.booleanIndicator:true
      IsDeleted,
      CreatedByUser,
      CreationDate,
      CreationTime,
      LastChangedByUser,
      LastChangeDate,
      LastChangeTime,
      LastChangeDateTime
}
where
  MaintenanceNotificationItem is initial
```
