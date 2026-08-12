---
name: I_CASETYPESTEXT
description: "Case Types Text"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETYPESTEXT')/$value
semantic_en: "Case Types Text"
semantic_vi: "Case Types Text — CDS view giao diện dựa trên scmgcasetypet."
keywords:
  - "case"
  - "types"
  - "text"
  - "type"
  - "language"
  - "name"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASETYPESTEXT

**Case Types Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETYPESTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseType` | ✓ | |  | `case_type` | `CHAR(4)` | Case Type |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CaseTypeName` |  | |  | `description` | `CHAR(40)` | Short Text for Case Type |
| `_Language` | | ✓ | | | | |
| `_CaseTypes` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CaseTypes` | `I_Casetypes` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETYPESTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETYPESTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASETYPESTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Types Text'
@ObjectModel.dataCategory: #TEXT
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseType'
define view I_CaseTypesText
  as select from scmgcasetypet


  association [0..1] to I_Language  as _Language  on $projection.Language = _Language.Language
  association [0..1] to I_Casetypes as _CaseTypes on $projection.CaseType = _CaseTypes.CaseType
{
      @ObjectModel.foreignKey.association: '_CaseTypes'
  key scmgcasetypet.case_type            as CaseType,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key scmgcasetypet.langu                as Language,

      @Semantics.text : true
      description                        as CaseTypeName,

      _Language,
     _CaseTypes

}
```
