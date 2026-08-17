---
name: I_WEEKDAYTEXT
description: "Weekdaytext"
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
# I_WEEKDAYTEXT

**Weekdaytext**

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
| `WeekDay` | ✓ | |  | `cast ( substring( dd07t.domvalue_l, 1, 1 ) as vdm_weekday )` | `NUMC(1)` | Week Day |
| `Language` | ✓ | |  | `cast(ddlanguage as spras)` | `LANG(1)` | Language Key |
| `WeekDayName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_WeekDay` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WeekDay` | `I_WeekDay` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'WeekDay'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.sqlViewName: 'IWEEKDAYTEXT'
@EndUserText.label: 'Week Day Text'
@Analytics.dataExtraction.enabled: false
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true

define view I_WeekDayText
  as select from dd07t
  association [0..1] to I_WeekDay  as _WeekDay  on $projection.WeekDay = _WeekDay.WeekDay
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_WeekDay'
  //key dd07t.domvalue_l          as WeekDay,
  key cast ( substring( dd07t.domvalue_l, 1, 1 )  as vdm_weekday ) as WeekDay,
  
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key cast(ddlanguage as spras) as Language,
      @Semantics.text
      dd07t.ddtext              as WeekDayName,
      _WeekDay,
      _Language

}
where
      dd07t.domname  = 'SC_WEEKDAY'
  and dd07t.as4local = 'A'
```
