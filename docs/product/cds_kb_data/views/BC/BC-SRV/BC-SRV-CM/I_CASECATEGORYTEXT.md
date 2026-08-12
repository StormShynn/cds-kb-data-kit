---
name: I_CASECATEGORYTEXT
description: "Case Category Text"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASECATEGORYTEXT')/$value
semantic_en: "Case Category Text"
semantic_vi: "Case Category Text — CDS view giao diện dựa trên scmgattr_categot."
keywords:
  - "case"
  - "category"
  - "text"
  - "language"
  - "type"
  - "name"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASECATEGORYTEXT

**Case Category Text**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASECATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CaseType` | ✓ | |  | `case_type` | `CHAR(4)` | Case Type |
| `CaseCategory` | ✓ | |  | `category` | `CHAR(4)` | Category |
| `CaseCategoryName` |  | |  | `description` | `CHAR(60)` | Text Field of Length 60 |
| `_CaseType` | | ✓ | | | | |
| `_CaseCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CaseType` | `I_Casetypes` | [0..1] |
| `_CaseCategory` | `I_CaseCategory` | [0..*] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASECATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASECATEGORYTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASECTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@EndUserText.label: 'Case Category Text'
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseCategory'
define view I_CaseCategoryText
  as select from scmgattr_categot

  association [0..1] to I_Casetypes    as _CaseType     on $projection.CaseType = _CaseType.CaseType
  association [0..*] to I_CaseCategory  as _CaseCategory on $projection.CaseCategory = _CaseCategory.CaseCategory
  association [0..1] to I_Language     as _Language     on $projection.Language = _Language.Language



{
         @ObjectModel.foreignKey.association: '_Language'
         @Semantics.language: true
  key    scmgattr_categot.langu        as Language,
         @ObjectModel.foreignKey.association: '_CaseType'
  key    scmgattr_categot.case_type    as CaseType,
         @ObjectModel.foreignKey.association: '_CaseCategory'
  key    scmgattr_categot.category     as CaseCategory,
         @Semantics.text: true
         scmgattr_categot.description  as CaseCategoryName,

         _Language,
         _CaseType,
         _CaseCategory
}
```
