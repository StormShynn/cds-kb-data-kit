---
name: I_CALENDARMONTHTEXT
description: "Calendarmonthtext"
app_component: CA-GTF-DF
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_CALENDARMONTHTEXT

**Calendarmonthtext**

| Property | Value |
|---|---|
| App Component | `CA-GTF-DF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CalendarMonth` | ✓ | |  | `cast ( substring( dd07t.domvalue_l, 1, 2 ) as calendarmonth )` | `NUMC(2)` | Calendar Month |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CalendarMonthName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_CalendarMonth` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CalendarMonth` | `I_CalendarMonth` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CalendarMonth'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.sqlViewName: 'ICALMONTHTEXT'
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Calendar Month Text'
@Analytics.dataExtraction.enabled: false
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true

define view I_CalendarMonthText
  as select from dd07t

  association [0..1] to I_CalendarMonth as _CalendarMonth on $projection.CalendarMonth = _CalendarMonth.CalendarMonth

  association [0..1] to I_Language      as _Language      on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CalendarMonth'
      //key dd07t.domvalue_l as CalendarMonth,
  key cast ( substring( dd07t.domvalue_l, 1, 2 )  as calendarmonth ) as CalendarMonth,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                                               as Language,
      @Semantics.text
      dd07t.ddtext                                                   as CalendarMonthName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement : true
      @Search.ranking: #HIGH
      dd07t.domvalue_l                                               as DomainValue,
      _CalendarMonth,
      _Language

}
where
      dd07t.domname  = 'KMONAT'
  and dd07t.as4local = 'A'
```
