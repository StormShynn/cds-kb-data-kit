---
name: I_PUBLICHOLIDAYCALENDARHOLIDAY
description: "Public Holiday In Calendar"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCALENDARHOLIDAY')/$value
semantic_en: "Public Holiday In Calendar"
semantic_vi: "Public Holiday In Calendar — CDS view giao diện dựa trên thocd."
keywords:
  - "public"
  - "holiday"
  - "calendar"
  - "validity"
  - "year"
  - "code"
  - "start"
tags:
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
---
# I_PUBLICHOLIDAYCALENDARHOLIDAY

**Public Holiday In Calendar**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCALENDARHOLIDAY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PublicHolidayCalendar` | ✓ | |  | `ident` | `CHAR(2)` | Public Holiday Calendar |
| `ValidityEndYear` | ✓ | |  | `cast(fcal.bisjahr as tabisjahr preserving type)` | `NUMC(4)` | Publicholiday: ValidityEndYear |
| `PublicHolidayCode` | ✓ | |  | `ftgid` | `CHAR(3)` | Public holiday key |
| `ValidityStartYear` |  | |  | `cast(fcal.abjahr as taabjahr preserving type)` | `NUMC(4)` | PublicHoliday:ValidityStartYear |
| `_PublicHolidayCode` | | ✓ | | | | |
| `_ValidityEndYear` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PublicHolidayCode` | `I_PublicHolidayCode` | [0..1] |
| `_ValidityEndYear` | `I_CalendarYear` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCALENDARHOLIDAY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCALENDARHOLIDAY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFCTRYCALPH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Public Holiday In Calendar'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:#CUSTOMIZING
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.representativeKey: 'PublicHolidayCalendar'
@Analytics:{ dataExtraction: { enabled : true  }}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_PublicHolidayCalendarHoliday
  as select from thocd as fcal
  association [0..1] to I_PublicHolidayCode as _PublicHolidayCode on $projection.PublicHolidayCode = _PublicHolidayCode.PublicHolidayCode
  association [0..1] to I_CalendarYear      as _ValidityEndYear   on $projection.ValidityEndYear = _ValidityEndYear.CalendarYear
{
      //THOCD
  key ident   as PublicHolidayCalendar,
      @ObjectModel.foreignKey.association: '_ValidityEndYear'
  key cast(fcal.bisjahr  as tabisjahr preserving type) as ValidityEndYear,
      @ObjectModel.foreignKey.association: '_PublicHolidayCode'
  key ftgid   as PublicHolidayCode,
      cast(fcal.abjahr  as taabjahr preserving type) as ValidityStartYear,
      // Associations
      _ValidityEndYear,
      _PublicHolidayCode
}
```
