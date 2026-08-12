---
name: I_ACADEMICTITLETEXT
description: "Academictitletext"
app_component: BC-SRV-ADR
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
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - text-view
  - text
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ACADEMICTITLETEXT

**Academictitletext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
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
| `AcademicTitle` | ✓ | |  | `title_key` | `CHAR(4)` | Academic Title: Key |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `AcademicTitleName` |  | |  | `title_dscr` | `CHAR(40)` | Academic title description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Text for Academic Title'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.dataCategory: #TEXT
//@Analytics.technicalName: 'IACADEMICTITLET'
@ObjectModel.representativeKey: 'AcademicTitle'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]
@VDM.viewType: #BASIC
@Search.searchable: true
define view entity I_AcademicTitleText
  as select from tsad2t
  association [0..1] to I_Language as _Language on tsad2t.langu = _Language.Language

{

  key  title_key  as AcademicTitle,
       @Semantics.language
  key  langu      as Language,
       @Semantics.text
       @EndUserText.label: 'Academic Title Description' 
       @Search.defaultSearchElement: true
       @EndUserText.quickInfo: 'Title Description'
       title_dscr as AcademicTitleName,
       _Language
}
```
