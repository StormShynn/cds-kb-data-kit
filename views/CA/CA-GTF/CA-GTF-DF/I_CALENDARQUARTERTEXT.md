---
name: I_CALENDARQUARTERTEXT
description: Calendarquartertext
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
  - text-view
  - text
  - component:CA-GTF-DF
  - lob:Cross-Application Components
---
# I_CALENDARQUARTERTEXT

**Calendarquartertext**

| Property | Value |
|---|---|
| App Component | `CA-GTF-DF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CalendarQuarter` | `cast ( substring( dd07t.domvalue_l, 1, 1 ) as calendarquarter )` |
| key `Language` | `ddlanguage` |
| `CalendarQuarterName` | `dd07t.ddtext` |
| `DomainValue` | `dd07t.domvalue_l` |
| `_CalendarQuarter` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CalendarQuarter` | `I_CalendarQuarter` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CalendarQuarter'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.sqlViewName: 'ICALQUARTERTEXT'
@EndUserText.label: 'Calendar Quarter text'
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: false
@VDM.viewType: #BASIC

define view I_CalendarQuarterText
  as select from dd07t
  association [0..1] to I_CalendarQuarter as _CalendarQuarter on $projection.CalendarQuarter = _CalendarQuarter.CalendarQuarter
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_CalendarQuarter'
      //key dd07t.domvalue_l as CalendarQuarter,
  key cast ( substring( dd07t.domvalue_l, 1, 1 )  as calendarquarter ) as CalendarQuarter,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                       as Language,
      @Semantics.text: true
      @EndUserText: { label:  'Calendar Quarter Name',
      quickInfo: 'Calendar Quarter Name' }
      dd07t.ddtext                                                     as CalendarQuarterName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement : true
      @Search.ranking: #HIGH
      dd07t.domvalue_l                                                 as DomainValue,
      _CalendarQuarter,
      _Language

}
where
      dd07t.domname  = 'CALENDARQUARTER'
  and dd07t.as4local = 'A'
```
