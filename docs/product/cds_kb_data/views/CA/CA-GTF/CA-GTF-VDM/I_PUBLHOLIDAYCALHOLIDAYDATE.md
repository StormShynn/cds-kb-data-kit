---
name: I_PUBLHOLIDAYCALHOLIDAYDATE
description: "Date For Public Holiday In Holiday Calendar"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLHOLIDAYCALHOLIDAYDATE')/$value
semantic_en: "Date For Public Holiday In Holiday Calendar"
semantic_vi: "Date For Public Holiday In Holiday Calendar — CDS view giao diện dựa trên thoc."
keywords:
  - "date"
  - "for"
  - "public"
  - "holiday"
  - "calendar"
  - "code"
  - "guaranteed"
tags:
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
---
# I_PUBLHOLIDAYCALHOLIDAYDATE

**Date For Public Holiday In Holiday Calendar**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLHOLIDAYCALHOLIDAYDATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PublicHolidayCalendar` | ✓ | |  | `ident` | `CHAR(2)` | Public Holiday Calendar |
| `PublicHolidayDate` | ✓ | |  | `datum` | `DATS(8)` | Date |
| `PublicHolidayCode` | ✓ | |  | `ftgid` | `CHAR(3)` | Public holiday key |
| `PublicHolidayIsGuaranteed` |  | |  | `cast(fcal.garant as tagarant preserving type)` | `CHAR(1)` | Indicator:PublicHolidayIsGuaranteed |
| `_PublicHolidayDate` | | ✓ | | | | |
| `_PublicHolidayCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PublicHolidayDate` | `I_CalendarDate` | [0..1] |
| `_PublicHolidayCode` | `I_PublicHolidayCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLHOLIDAYCALHOLIDAYDATE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLHOLIDAYCALHOLIDAYDATE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBHOLIDAYDTE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Date For Public Holiday In Holiday Calendar'
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

define view I_PublHolidayCalHolidayDate
  as select from thoc as fcal
  association [0..1] to I_CalendarDate      as _PublicHolidayDate on $projection.PublicHolidayDate = _PublicHolidayDate.CalendarDate
  association [0..1] to I_PublicHolidayCode as _PublicHolidayCode on $projection.PublicHolidayCode = _PublicHolidayCode.PublicHolidayCode
{
      //THOC

  key ident                                          as PublicHolidayCalendar,
      @ObjectModel.foreignKey.association: '_PublicHolidayDate'
  key datum                                          as PublicHolidayDate,
      @ObjectModel.foreignKey.association: '_PublicHolidayCode'
  key ftgid                                          as PublicHolidayCode,
      cast(fcal.garant  as tagarant preserving type) as PublicHolidayIsGuaranteed,
      // Associations
      _PublicHolidayDate,
      _PublicHolidayCode
}
```
