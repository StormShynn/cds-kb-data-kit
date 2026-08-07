---
name: C_MAINTNOTIFITEMACTIVITYDEX
description: Data Extr for Maint Notif Item Activ
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFITEMACTIVITYDEX')/$value
semantic_en: Data Extr for Maint Notif Item Activ
semantic_vi: Data Extr for Maint Notif Item Activ — CDS view tiêu dùng dựa trên I_MaintNotifActivityBasic.
keywords:
  - data
  - extr
  - for
  - maint
  - notif
  - item
  - activ
  - maintenance
  - notification
  - activity
  - sort
  - number
  - code
  - vers
  - nmbr
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MN-2CL
  - consumption-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
---
# C_MAINTNOTIFITEMACTIVITYDEX

**Data Extr for Maint Notif Item Activ**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFITEMACTIVITYDEX')/$value) |

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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFITEMACTIVITYDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFITEMACTIVITYDEX')/$value)*

```abap
@EndUserText.label: 'Data Extr for Maint Notif Item Activ'
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}
@Analytics: {
  dataCategory: #FACT,
  internalName: #LOCAL,
  technicalName: 'CMAINTNOTIFITACTDEX',
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
  sapObjectNodeType.name: 'MaintenanceNotifItemActivity',
  usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
}
@VDM.viewType: #CONSUMPTION
define view entity C_MaintNotifItemActivityDEX
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
  MaintenanceNotificationItem != '0000'
```
