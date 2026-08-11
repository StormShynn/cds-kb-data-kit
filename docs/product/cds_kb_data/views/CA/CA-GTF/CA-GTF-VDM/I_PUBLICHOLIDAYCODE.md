---
name: I_PUBLICHOLIDAYCODE
description: "Public Holiday Code"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCODE')/$value
semantic_en: "Public Holiday Code"
semantic_vi: "Public Holiday Code — CDS view giao diện dựa trên thol."
keywords:
  - "public"
  - "holiday"
  - "code"
  - "rule"
  - "month"
  - "weekday"
tags:
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
---
# I_PUBLICHOLIDAYCODE

**Public Holiday Code**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PublicHolidayCode` | ✓ | |  | `ftgid` | `CHAR(3)` | Public holiday key |
| `PublicHolidayRule` |  | |  | `regel` | `CHAR(1)` | Holiday rule |
| `PublicHolidayMonth` |  | |  | `monat` | `NUMC(2)` | Month for holiday calculation |
| `PublicHolidayDayOfMonth` |  | |  | `cast(fcal.motag as taktag preserving type)` | `NUMC(2)` | Day of month for public holiday calculation |
| `PublicHolidayWeekday` |  | |  | `cast(fcal.wotag as takwotag preserving type)` | `NUMC(1)` | Code:Day for public holiday calculation |
| `DistanceFromEasterInDays` |  | |  | `abstd` | `DEC(3)` | Distance of public holiday from Easter |
| `ReligiousDenomination` |  | |  | `konfe` | `CHAR(2)` | Calendar religion key |
| `PublicHolidayClass` |  | |  | `klass` | `CHAR(1)` | Holiday class |
| `PublicHolidayGuaranteeRule` |  | |  | `garant` | `CHAR(1)` | Public holiday guaranteed flag |
| `PublicHolidaySortValue` |  | |  | `sort` | `CHAR(3)` | Sort field for public holidays |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCODE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBHOLIDAYCODE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Public Holiday Code'
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

define view I_PublicHolidayCode as select from thol as fcal {
 //THOL
 key ftgid as PublicHolidayCode,
 regel as PublicHolidayRule,
 monat as PublicHolidayMonth,
  cast(fcal.motag  as taktag preserving type)  as PublicHolidayDayOfMonth,
  cast(fcal.wotag  as takwotag preserving type) as PublicHolidayWeekday,
 abstd as DistanceFromEasterInDays,
 konfe as ReligiousDenomination,
 klass as PublicHolidayClass,
 garant as PublicHolidayGuaranteeRule,
 sort as PublicHolidaySortValue
 }
```
