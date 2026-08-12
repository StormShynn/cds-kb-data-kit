---
name: I_PUBLICHOLIDAYCODE
description: "Public Holiday Code"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
