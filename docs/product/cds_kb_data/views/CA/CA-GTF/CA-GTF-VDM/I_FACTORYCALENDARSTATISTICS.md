---
name: I_FACTORYCALENDARSTATISTICS
description: "Statistics of Factory Calendar"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARSTATISTICS')/$value
semantic_en: "Statistics of Factory Calendar"
semantic_vi: "Statistics of Factory Calendar — CDS view giao diện dựa trên tcals."
keywords:
  - "statistics"
  - "factory"
  - "calendar"
  - "code"
  - "last"
  - "change"
  - "date"
  - "time"
  - "number"
  - "calendars"
  - "memory"
  - "size"
  - "bytes"
tags:
  - CA
  - bo:plant
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
---
# I_FACTORYCALENDARSTATISTICS

**Statistics of Factory Calendar**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARSTATISTICS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FactoryCalendarStatisticsCode` | ✓ | |  | `id` | `CHAR(1)` | Calendar: Termination flag |
| `LastChangeDate` |  | |  | `dat` | `DATS(8)` | Date |
| `LastChangeTime` |  | |  | `tim` | `TIMS(6)` | Calendar: Creation or change time |
| `NumberOfCalendars` |  | |  | `dsz` | `NUMC(4)` | Year stored |
| `CalendarsMemorySizeInBytes` |  | |  | `psz` | `NUMC(8)` | Memory requirement (Bytes) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARSTATISTICS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARSTATISTICS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFCTRYCALS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Statistics of Factory Calendar'
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
@ObjectModel.representativeKey: 'FactoryCalendarStatisticsCode'
@Analytics:{ dataExtraction: { enabled : true  }}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_FactoryCalendarStatistics
  as select from tcals as fcal
{
      //TCALS
  key id  as FactoryCalendarStatisticsCode,
      dat as LastChangeDate,
      tim as LastChangeTime,
      dsz as NumberOfCalendars,
      psz as CalendarsMemorySizeInBytes
}
```
