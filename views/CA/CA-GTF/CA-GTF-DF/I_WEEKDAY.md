---
name: I_WEEKDAY
description: Weekday
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
# I_WEEKDAY

**Weekday**

| Property | Value |
|---|---|
| App Component | `CA-GTF-DF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `WeekDay` | `cast ( substring( domvalue_l, 1, 1 ) as vdm_weekday )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WeekDayText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'WeekDay'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.sqlViewName: 'IWEEKDAY'
@EndUserText.label: 'Week Day'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true

define view I_WeekDay
  as select from dd07l
  association [0..*] to I_WeekDayText as _Text on $projection.WeekDay = _Text.WeekDay
{
      @ObjectModel.text.association: '_Text'
  //key domvalue_l as WeekDay,
  key cast ( substring( domvalue_l, 1, 1 )  as vdm_weekday ) as WeekDay,
      _Text
}
where
      dd07l.domname  = 'SC_WEEKDAY'
  and dd07l.as4local = 'A'
```
