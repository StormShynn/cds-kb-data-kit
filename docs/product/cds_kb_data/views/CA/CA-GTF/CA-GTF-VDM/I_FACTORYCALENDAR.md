---
name: I_FACTORYCALENDAR
description: "This CDS view provides the prerequisites for answering the following business questions: Which factory calendars are maintained? Which are the validity start and end years of the factory calendars? Which public holiday calendars are assigned to the factory calendars?"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDAR')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Which factory calendars are maintained? Which are the validity start and end years of the factory calendars? Which public holiday calendars are assigned to the factory calendars?"
semantic_vi: "Factory Calendar — CDS view giao diện dựa trên tfacd."
keywords:
  - "factory"
  - "calendar"
  - "public"
  - "holiday"
  - "validity"
  - "start"
  - "year"
  - "creation"
  - "date"
tags:
  - CA
  - bo:plant
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
---
# I_FACTORYCALENDAR

**This CDS view provides the prerequisites for answering the following business questions: Which factory calendars are maintained? Which are the validity start and end years of the factory calendars? Which public holiday calendars are assigned to the factory calendars?**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDAR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FactoryCalendar` | ✓ | |  | `cast(fcal.ident as cr_wfcid preserving type)` | `CHAR(2)` | Factory Calendar ID |
| `PublicHolidayCalendar` |  | |  | `cast(fcal.hocid as hident preserving type)` | `CHAR(2)` | Public Holiday Calendar |
| `ValidityStartYear` |  | |  | `cast(fcal.vjahr as pph_vjahr preserving type)` | `NUMC(4)` | Validity Start Year |
| `ValidityEndYear` |  | |  | `cast(fcal.bjahr as pph_bjahr preserving type)` | `NUMC(4)` | Validity End Year |
| `CreationDate` |  | |  | `cast(fcal.crdat as erdat preserving type)` | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  | `cast(fcal.crtime as erzet preserving type)` | `TIMS(6)` | Entry time |
| `MondayIsWorkingDay` |  | |  | `cast(fcal.motag as tamotag preserving type)` | `CHAR(1)` | Indicator: Monday is Working Day |
| `TuesdayIsWorkingDay` |  | |  | `cast(fcal.ditag as taditag preserving type)` | `CHAR(1)` | Indicator: Tuesday is Working Day |
| `WednesdayIsWorkingDay` |  | |  | `cast(fcal.miwch as tamiwch preserving type)` | `CHAR(1)` | Indicator: Wednesday is Working Day |
| `ThursdayIsWorkingDay` |  | |  | `cast(fcal.dotag as tadotag preserving type)` | `CHAR(1)` | Indicator: Thursday is Working Day |
| `FridayIsWorkingDay` |  | |  | `cast(fcal.frtag as tafrtag preserving type)` | `CHAR(1)` | Indicator: Friday is Working Day |
| `SaturdayIsWorkingDay` |  | |  | `cast(fcal.satag as tasatag preserving type)` | `CHAR(1)` | Indicator: Saturday is Working Day |
| `SundayIsWorkingDay` |  | |  | `cast(fcal.sotag as tasotag preserving type)` | `CHAR(1)` | Indicator: Sunday is Working Day |
| `HolidayIsWorkingDay` |  | |  | `cast(fcal.fetag as tafetag preserving type)` | `CHAR(1)` | Indicator: Holiday is Working Day |
| `FactoryCalendarStartDayValue` |  | |  | `basis` | `NUMC(5)` | Start of factory calendar day numbering |
| `LastChangeDate` |  | |  | `cast(fcal.crdat as laeda preserving type)` | `DATS(8)` | Date of Last Change |
| `LastChangeTime` |  | |  | `crtime` | `TIMS(6)` | Calendar: Creation or change time |
| `FactoryCalSpclRulesAreExisting` |  | |  | `cast(fcal.interv as tainterv preserving type)` | `CHAR(1)` | Factory Calendar Special Rules Are Existing |
| `_Text` | | ✓ | | | | |
| `_ValidityStartYear` | | ✓ | | | | |
| `_ValidityEndYear` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FactoryCalendarText` | [0..*] |
| `_ValidityStartYear` | `I_CalendarYear` | [0..1] |
| `_ValidityEndYear` | `I_CalendarYear` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDAR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDAR')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPPFACTORYCAL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'FactoryCalendar'
@ObjectModel.semanticKey: 'FactoryCalendar'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #ORGANIZATIONAL}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Factory Calendar'
@ClientHandling.type: #INHERITED
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Analytics:{ dataExtraction: { enabled : true  }}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]



define view I_FactoryCalendar
  as select from tfacd as fcal
  association [0..*] to I_FactoryCalendarText as _Text              on $projection.FactoryCalendar = _Text.FactoryCalendar
  association [0..1] to I_CalendarYear        as _ValidityStartYear on $projection.ValidityStartYear = _ValidityStartYear.CalendarYear
  association [0..1] to I_CalendarYear        as _ValidityEndYear   on $projection.ValidityEndYear = _ValidityEndYear.CalendarYear

{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(fcal.ident as cr_wfcid preserving type)  as FactoryCalendar,
      cast(fcal.hocid as hident preserving type)    as PublicHolidayCalendar,
      @Semantics.calendar.year: true
      cast(fcal.vjahr as pph_vjahr preserving type) as ValidityStartYear,
      @Semantics.calendar.year: true
      cast(fcal.bjahr as pph_bjahr preserving type) as ValidityEndYear,

      // Admin
      @Semantics.systemDate.createdAt: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'LastChangeDate'
      cast(fcal.crdat  as erdat preserving type)    as CreationDate,
      @Semantics.systemTime.createdAt: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'LastChangeTime'
      cast(fcal.crtime as erzet preserving type)    as CreationTime,
      cast(fcal.motag as tamotag preserving type)   as MondayIsWorkingDay,
      cast(fcal.ditag as taditag preserving type)   as TuesdayIsWorkingDay,
      cast(fcal.miwch as tamiwch preserving type)   as WednesdayIsWorkingDay,
      cast(fcal.dotag as tadotag preserving type)   as ThursdayIsWorkingDay,
      cast(fcal.frtag as tafrtag preserving type)   as FridayIsWorkingDay,
      cast(fcal.satag as tasatag preserving type)   as SaturdayIsWorkingDay,
      cast(fcal.sotag as tasotag preserving type)   as SundayIsWorkingDay,
      cast(fcal.fetag as tafetag preserving type)   as HolidayIsWorkingDay,
      basis                                         as FactoryCalendarStartDayValue,
      @Semantics.systemDate.lastChangedAt: true
      cast(fcal.crdat as laeda preserving type)     as LastChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      crtime                                        as LastChangeTime,
      cast(fcal.interv as tainterv preserving type) as FactoryCalSpclRulesAreExisting,

      // Associations
      _Text,
      _ValidityStartYear,
      _ValidityEndYear
};
```
