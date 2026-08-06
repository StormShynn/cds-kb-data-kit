---
name: I_CALENDARMONTH
description: Calendarmonth
app_component: CA-GTF-DF
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-DF
  - interface-view
  - component:CA-GTF-DF
  - lob:Cross-Application Components
---
# I_CALENDARMONTH

**Calendarmonth**

| Property | Value |
|---|---|
| App Component | `CA-GTF-DF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CalendarMonth` | `cast ( substring( domvalue_l, 1, 2 ) as calendarmonth )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CalendarMonthText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'CalendarMonth'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.sqlViewName: 'ICALENDARMONTH'
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Calendar Month'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_CalendarMonth
  as select from dd07l
  association [0..*] to I_CalendarMonthText as _Text on $projection.CalendarMonth = _Text.CalendarMonth
{
      @ObjectModel.text.association: '_Text'
      //key domvalue_l as CalendarMonth,
     // @Search.defaultSearchElement : true
  key cast ( substring( domvalue_l, 1, 2 )  as calendarmonth ) as CalendarMonth,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement : true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                         as DomainValue,
      _Text
}
where
      dd07l.domname  = 'KMONAT'
  and dd07l.as4local = 'A'
```
