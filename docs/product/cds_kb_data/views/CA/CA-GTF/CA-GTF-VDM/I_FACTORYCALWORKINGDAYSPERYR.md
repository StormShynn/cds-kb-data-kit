---
name: I_FACTORYCALWORKINGDAYSPERYR
description: "Factory Calendar Working Days Per Year"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALWORKINGDAYSPERYR')/$value
semantic_en: "Factory Calendar Working Days Per Year"
semantic_vi: "Factory Calendar Working Days Per Year — CDS view giao diện dựa trên tfacs."
keywords:
  - "factory"
  - "calendar"
  - "working"
  - "days"
  - "per"
  - "year"
  - "month01"
  - "string"
  - "month02"
  - "month03"
tags:
  - CA
  - bo:plant
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
---
# I_FACTORYCALWORKINGDAYSPERYR

**Factory Calendar Working Days Per Year**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALWORKINGDAYSPERYR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FactoryCalendar` | ✓ | |  | `ident` | `CHAR(2)` | Factory Calendar |
| `CalendarYear` | ✓ | |  | `jahr` | `NUMC(4)` | Year stored |
| `Month01WorkingDaysString` |  | |  | `cast(fcal.mon01 as tamon01 preserving type)` | `CHAR(31)` | Calendar: Month01WorkingDays |
| `Month02WorkingDaysString` |  | |  | `cast(fcal.mon02 as tamon02 preserving type)` | `CHAR(31)` | Calendar:Month02WorkingDays |
| `Month03WorkingDaysString` |  | |  | `cast(fcal.mon03 as tamon03 preserving type)` | `CHAR(31)` | Calendar:Month03WorkingDays |
| `Month04WorkingDaysString` |  | |  | `cast(fcal.mon04 as tamon04 preserving type)` | `CHAR(31)` | Calendar:Month04WorkingDays |
| `Month05WorkingDaysString` |  | |  | `cast(fcal.mon05 as tamon05 preserving type)` | `CHAR(31)` | Calendar:Month05WorkingDaysString |
| `Month06WorkingDaysString` |  | |  | `cast(fcal.mon06 as tamon06 preserving type)` | `CHAR(31)` | Month06WorkingDaysString |
| `Month07WorkingDaysString` |  | |  | `cast(fcal.mon07 as tamon07 preserving type)` | `CHAR(31)` | Calendar:Month07WorkingDays |
| `Month08WorkingDaysString` |  | |  | `cast(fcal.mon08 as tamon08 preserving type)` | `CHAR(31)` | Calendar:Month08WorkingDays |
| `Month09WorkingDaysString` |  | |  | `cast(fcal.mon09 as tamon09 preserving type)` | `CHAR(31)` | Calendar:Month09WorkingDaysString |
| `Month10WorkingDaysString` |  | |  | `cast(fcal.mon10 as tamon10 preserving type)` | `CHAR(31)` | Calendar:Month10WorkingDaysString |
| `Month11WorkingDaysString` |  | |  | `cast(fcal.mon11 as tamon11 preserving type)` | `CHAR(31)` | Calendar:Month11WorkingDays |
| `Month12WorkingDaysString` |  | |  | `cast(fcal.mon12 as tamon12 preserving type)` | `CHAR(31)` | Calendar:Month12WorkingDays |
| `FactoryCalYearStartDayValue` |  | |  | `basis` | `NUMC(5)` | Start of factory day numbering |
| `NumberOfNonWorkingDays` |  | |  | `fenum` | `NUMC(3)` | Number of days in year |
| `NumberOfWorkingDays` |  | |  | `wenum` | `NUMC(3)` | Number of workdays in the year |
| `_CalendarYear` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CalendarYear` | `I_CalendarYear` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALWORKINGDAYSPERYR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALWORKINGDAYSPERYR')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFCTRYCALWD'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Factory Calendar Working Days Per Year'
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
@ObjectModel.representativeKey: 'FactoryCalendar'
@Analytics:{ dataExtraction: { enabled : true  }}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_FactoryCalWorkingDaysPerYr as select from tfacs as fcal 
association [0..1] to I_CalendarYear as _CalendarYear on $projection.CalendarYear = _CalendarYear.CalendarYear
{
//TFACS
key ident as FactoryCalendar,
 @ObjectModel.foreignKey.association: '_CalendarYear'
key jahr as CalendarYear,
cast(fcal.mon01 as tamon01 preserving type) as Month01WorkingDaysString,
cast(fcal.mon02 as tamon02 preserving type) as Month02WorkingDaysString,
cast(fcal.mon03 as tamon03 preserving type) as Month03WorkingDaysString,
cast(fcal.mon04 as tamon04 preserving type) as Month04WorkingDaysString,
cast(fcal.mon05 as tamon05 preserving type) as Month05WorkingDaysString,
cast(fcal.mon06 as tamon06 preserving type) as Month06WorkingDaysString,
cast(fcal.mon07 as tamon07 preserving type) as Month07WorkingDaysString,
cast(fcal.mon08 as tamon08 preserving type) as Month08WorkingDaysString,
cast(fcal.mon09 as tamon09 preserving type) as Month09WorkingDaysString,
cast(fcal.mon10 as tamon10 preserving type) as Month10WorkingDaysString,
cast(fcal.mon11 as tamon11 preserving type) as Month11WorkingDaysString,
cast(fcal.mon12 as tamon12 preserving type) as Month12WorkingDaysString,
basis as FactoryCalYearStartDayValue,
fenum as NumberOfNonWorkingDays,
wenum as NumberOfWorkingDays,
 // Associations
      _CalendarYear
}
```
