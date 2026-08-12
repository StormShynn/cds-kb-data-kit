---
name: I_CALENDARQUARTER
description: "Calendarquarter"
app_component: CA-GTF-DF
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
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
# I_CALENDARQUARTER

**Calendarquarter**

| Property | Value |
|---|---|
| App Component | `CA-GTF-DF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CalendarQuarter` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as calendarquarter )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CalendarQuarterText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CalendarQuarter'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.sqlViewName: 'ICALENDARQUARTER'
@EndUserText.label: 'Quarter'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_CalendarQuarter
  as select from dd07l
  association [0..*] to I_CalendarQuarterText as _Text on $projection.CalendarQuarter = _Text.CalendarQuarter
{
      @ObjectModel.text.association: '_Text'
      //key domvalue_l as CalendarQuarter,
      //@Search.defaultSearchElement : true
  key cast ( substring( domvalue_l, 1, 1 )  as calendarquarter ) as CalendarQuarter,
  @Analytics.hidden: true
  @Consumption.hidden: true
  @Search.defaultSearchElement : true
  @Search.ranking: #HIGH
  dd07l.domvalue_l as DomainValue,
      _Text
}
where
      dd07l.domname  = 'CALENDARQUARTER'
  and dd07l.as4local = 'A'
```
