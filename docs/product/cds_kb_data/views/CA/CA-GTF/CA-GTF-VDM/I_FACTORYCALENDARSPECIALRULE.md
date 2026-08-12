---
name: I_FACTORYCALENDARSPECIALRULE
description: "Factory Calendar Special Rule"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARSPECIALRULE')/$value
semantic_en: "Factory Calendar Special Rule"
semantic_vi: "Factory Calendar Special Rule — CDS view giao diện dựa trên tfain."
keywords:
  - "factory"
  - "calendar"
  - "special"
  - "rule"
  - "year"
  - "validity"
  - "start"
  - "date"
  - "working"
tags:
  - CA
  - bo:plant
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
---
# I_FACTORYCALENDARSPECIALRULE

**Factory Calendar Special Rule**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARSPECIALRULE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FactoryCalendar` | ✓ | |  | `ident` | `CHAR(2)` | Factory Calendar |
| `CalendarYear` | ✓ | |  | `jahr` | `NUMC(4)` | Year stored |
| `ValidityStartDate` | ✓ | |  | `von` | `DATS(8)` | Date from which special rule is valid |
| `ValidityEndDate` |  | |  | `bis` | `DATS(8)` | Date, until which the rule applies |
| `IsWorkingDay` |  | |  | `cast(fcal.wert as tawert preserving type)` | `CHAR(1)` | Indicator:IsWorkingDay |
| `_CalendarYear` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CalendarYear` | `I_CalendarYear` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARSPECIALRULE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARSPECIALRULE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFCTRYCALSR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Factory Calendar Special Rule'
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
@ObjectModel.representativeKey: 'FactoryCalendar'
@Analytics:{ dataExtraction: { enabled : true  }}
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]

define view I_FactoryCalendarSpecialRule
  as select from tfain as fcal
  association [0..1] to I_CalendarYear as _CalendarYear on $projection.CalendarYear = _CalendarYear.CalendarYear
{
      //TFAIN
  key ident as FactoryCalendar,
      @ObjectModel.foreignKey.association: '_CalendarYear'
  key jahr  as CalendarYear,
      @Semantics.businessDate.from: true
  key von   as ValidityStartDate,
      @Semantics.businessDate.to: true
      bis   as ValidityEndDate,
      cast(fcal.wert as tawert  preserving type)  as IsWorkingDay,
      
        // Associations
      _CalendarYear
           
}
```
