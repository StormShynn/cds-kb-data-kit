---
name: C_MAINTNOTIFITEMCAUSEDEX
description: "Data Extr for Maint Notif Item Cause"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFITEMCAUSEDEX')/$value
semantic_en: "Data Extr for Maint Notif Item Cause"
semantic_vi: "Data Extr for Maint Notif Item Cause — CDS view tiêu dùng dựa trên I_MaintNotifItemCauseBasic."
keywords:
  - "data"
  - "extr"
  - "for"
  - "maint"
  - "notif"
  - "item"
  - "cause"
  - "maintenance"
  - "notification"
  - "code"
  - "catalog"
  - "group"
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
# C_MAINTNOTIFITEMCAUSEDEX

**Data Extr for Maint Notif Item Cause**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFITEMCAUSEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceNotification` | ✓ | |  |  | `CHAR(12)` | Notification Number |
| `MaintenanceNotificationItem` | ✓ | |  |  | `NUMC(4)` | Item Number in Item Record |
| `MaintenanceNotificationCause` | ✓ | |  |  | `NUMC(4)` | Sequential Number for Cause |
| `MaintNotifCauseCodeCatalog` |  | |  |  | `CHAR(1)` | Catalog Type - Causes |
| `MaintNotifCauseCodeGroup` |  | |  |  | `CHAR(8)` | Code Group - Causes |
| `MaintNotificationCauseCode` |  | |  |  | `CHAR(4)` | Cause Code |
| `MaintNotifCauseText` |  | |  |  | `CHAR(40)` | Cause Text |
| `MaintNotificationRootCause` |  | |  |  | `CHAR(1)` | Root Cause |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Delete Data Record |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Added |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of Change |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFITEMCAUSEDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFITEMCAUSEDEX')/$value)*

```abap
@EndUserText.label: 'Data Extr for Maint Notif Item Cause'
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}
@Analytics: {
  dataCategory: #FACT,
  internalName: #LOCAL,
  dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                                    { mapping:
                                      [ { role: #MAIN,
                                          table: 'qmur',
                                          tableElement: ['qmnum'                  , 'fenum'                      , 'urnum'],
                                          viewElement:  ['MaintenanceNotification', 'MaintenanceNotificationItem', 'MaintenanceNotificationCause']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'qmfe',
                                          tableElement: ['qmnum'                  , 'fenum'],
                                          viewElement:  ['MaintenanceNotification', 'MaintenanceNotificationItem']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'qmel',
                                          tableElement: ['qmnum'],
                                          viewElement:  ['MaintenanceNotification']
                                        }
                                        ] } }
}
@Consumption.ranked: true
@Analytics.technicalName: 'CMAINTNOTIFITCAUSEDEX'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'MaintenanceNotifItemCause',
  modelingPattern: #ANALYTICAL_FACT,
  usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
}
@VDM.viewType: #CONSUMPTION
define view entity C_MaintNotifItemCauseDEX
  as select from I_MaintNotifItemCauseBasic
{
  key MaintenanceNotification,
  key MaintenanceNotificationItem,
      @EndUserText.label: 'Cause'
  key MaintenanceNotificationCause,
      MaintNotifCauseCodeCatalog,
      @EndUserText.label: 'Cause Code Group'
      MaintNotifCauseCodeGroup,
      MaintNotificationCauseCode,
      MaintNotifCauseText,
      MaintNotificationRootCause,
      @Semantics.booleanIndicator:true
      IsDeleted,
      CreatedByUser,
      CreationDate,
      CreationTime,
      LastChangedByUser,
      LastChangeDateTime,
      LastChangeDate,
      LastChangeTime
}
```
