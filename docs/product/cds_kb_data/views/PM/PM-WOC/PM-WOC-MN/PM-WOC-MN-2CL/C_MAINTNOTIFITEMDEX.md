---
name: C_MAINTNOTIFITEMDEX
description: "Data Extraction for Maint Notif Items"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFITEMDEX')/$value
semantic_en: "Data Extraction for Maint Notif Items"
semantic_vi: "Data Extraction for Maint Notif Items — CDS view tiêu dùng dựa trên I_MaintNotificationItemBasic."
keywords:
  - "data"
  - "extraction"
  - "for"
  - "maint"
  - "notif"
  - "items"
  - "maintenance"
  - "notification"
  - "item"
  - "text"
  - "language"
  - "damage"
  - "code"
  - "catalog"
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
# C_MAINTNOTIFITEMDEX

**Data Extraction for Maint Notif Items**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFITEMDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceNotification` | ✓ | |  |  | `CHAR(12)` | Notification Number |
| `MaintenanceNotificationItem` | ✓ | |  |  | `NUMC(4)` | Item Number in Item Record |
| `MaintNotifItemText` |  | |  |  | `CHAR(40)` | Notification Item Short Text |
| `MaintNotifItemTxtLanguage` |  | |  |  | `CHAR(1)` | Primary language indicator for text segment |
| `MaintNotifDamageCodeCatalog` |  | |  |  | `CHAR(1)` | Damage Code Catalog |
| `MaintNotifDamageCodeGroup` |  | |  |  | `CHAR(8)` | Damage Code Group |
| `MaintNotificationDamageCode` |  | |  |  | `CHAR(4)` | Damage Code |
| `MaintNotifDamageCodeVersNumber` |  | |  |  | `CHAR(6)` | Version Number |
| `MaintNotifObjPrtCodeCatalog` |  | |  |  | `CHAR(1)` | Object Part Code Catalog |
| `MaintNotifObjPrtCodeGroup` |  | |  |  | `CHAR(8)` | Object Part Code Group |
| `MaintNotifObjPrtCode` |  | |  |  | `CHAR(4)` | Object Part Code |
| `MaintNotifObjectCodeVersNmbr` |  | |  |  | `CHAR(6)` | Version Number |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Delete Data Record |
| `NotificationItemExternalID` |  | |  |  | `NUMC(4)` | Sort Number for Item |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Added |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of Change |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFITEMDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFITEMDEX')/$value)*

```abap
@EndUserText.label: 'Data Extraction for Maint Notif Items'
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                                    { mapping:
                                      [ { role: #MAIN,
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
@Consumption.ranked: true
@Analytics.technicalName: 'CMAINTNOTIFITMDEX'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'MaintenanceNotificationItem',
  modelingPattern: #ANALYTICAL_FACT,
  usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
}
@VDM.viewType: #CONSUMPTION
define view entity C_MaintNotifItemDEX
  as select from I_MaintNotificationItemBasic

{
  key MaintenanceNotification,
  key MaintenanceNotificationItem,
      @Semantics.text: true
      MaintNotifItemText,
      MaintNotifItemTxtLanguage,
      MaintNotifDamageCodeCatalog,
      MaintNotifDamageCodeGroup,
      MaintNotificationDamageCode,
      @EndUserText.label: 'Damage Code Version Number'
      MaintNotifDamageCodeVersNumber,
      MaintNotifObjPrtCodeCatalog,
      MaintNotifObjPrtCodeGroup,
      MaintNotifObjPrtCode,
      @EndUserText.label: 'Object Code Version Number'
      MaintNotifObjectCodeVersNmbr,
      Assembly,
      @Semantics.booleanIndicator:true
      IsDeleted,
      NotificationItemExternalID,
      CreatedByUser,
      CreationDate,
      CreationTime,
      LastChangedByUser,
      LastChangeDate,
      LastChangeTime,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime
}
```
