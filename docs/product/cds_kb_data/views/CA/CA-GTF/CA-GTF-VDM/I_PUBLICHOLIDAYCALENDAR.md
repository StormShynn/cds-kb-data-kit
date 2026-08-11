---
name: I_PUBLICHOLIDAYCALENDAR
description: "Public Holiday In Factory Calendar"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCALENDAR')/$value
semantic_en: "Public Holiday In Factory Calendar"
semantic_vi: "Public Holiday In Factory Calendar — CDS view giao diện dựa trên thoci."
keywords:
  - "public"
  - "holiday"
  - "factory"
  - "calendar"
  - "validity"
  - "start"
  - "year"
  - "last"
  - "change"
  - "date"
  - "time"
tags:
  - CA
  - bo:plant
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
---
# I_PUBLICHOLIDAYCALENDAR

**Public Holiday In Factory Calendar**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCALENDAR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PublicHolidayCalendar` | ✓ | |  | `ident` | `CHAR(2)` | Public Holiday Calendar |
| `ValidityStartYear` |  | |  | `vjahr` | `NUMC(4)` | Year from which data is stored |
| `ValidityEndYear` |  | |  | `bjahr` | `NUMC(4)` | Year until which data is saved |
| `LastChangeDate` |  | |  | `crdat` | `DATS(8)` | Date |
| `LastChangeTime` |  | |  | `crtime` | `TIMS(6)` | Calendar: Creation or change time |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCALENDAR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCALENDAR')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFCTRYPH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Public Holiday In Factory Calendar'
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #BASIC  
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:#CUSTOMIZING
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.representativeKey: 'PublicHolidayCalendar'
@Analytics:{ dataExtraction: { enabled : true  }}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_PublicHolidayCalendar as select from thoci {
//THOCI
key ident as PublicHolidayCalendar,
vjahr as ValidityStartYear,
bjahr as ValidityEndYear,
crdat as LastChangeDate,
crtime as LastChangeTime
}
```
