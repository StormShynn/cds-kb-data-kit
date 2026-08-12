---
name: I_CASECATEGORYTEXT
description: "Case Category Text"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
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
