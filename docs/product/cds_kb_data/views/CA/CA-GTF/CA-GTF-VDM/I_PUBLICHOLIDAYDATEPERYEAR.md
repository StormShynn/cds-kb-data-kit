---
name: I_PUBLICHOLIDAYDATEPERYEAR
description: "Public Holiday Date Per Year"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYDATEPERYEAR')/$value
semantic_en: "Public Holiday Date Per Year"
semantic_vi: "Public Holiday Date Per Year — CDS view giao diện dựa trên tholu."
keywords:
  - "public"
  - "holiday"
  - "date"
  - "per"
  - "year"
  - "code"
  - "calendar"
  - "month"
tags:
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
---
# I_PUBLICHOLIDAYDATEPERYEAR

**Public Holiday Date Per Year**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYDATEPERYEAR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PublicHolidayCode` | ✓ | |  | `ftgid` | `CHAR(3)` | Public holiday key |
| `CalendarYear` | ✓ | |  | `jahr` | `NUMC(4)` | Year stored |
| `PublicHolidayMonth` |  | |  | `monat` | `NUMC(2)` | Month for holiday calculation |
| `PublicHolidayDayOfMonth` |  | |  | `tag` | `NUMC(2)` | Day of month for public holiday calculation |
| `_CalendarYear` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CalendarYear` | `I_CalendarYear` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYDATEPERYEAR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYDATEPERYEAR')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBHOLIDAYDTEYR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Public Holiday Date Per Year'
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
@ObjectModel.representativeKey: 'PublicHolidayCode'
@Analytics:{ dataExtraction: { enabled : true  }}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_PublicHolidayDatePerYear as select from tholu 
association [0..1] to I_CalendarYear as _CalendarYear on $projection.CalendarYear = _CalendarYear.CalendarYear
{
  //THOLU
  key ftgid as PublicHolidayCode,
   @ObjectModel.foreignKey.association: '_CalendarYear'
  key jahr as CalendarYear,
  monat as PublicHolidayMonth,
  tag as PublicHolidayDayOfMonth,
  // Associations
      _CalendarYear
  }
```
