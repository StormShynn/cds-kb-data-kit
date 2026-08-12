---
name: I_CASEFUNCTIONPROFILETEXT
description: "Case Function Profile Text"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEFUNCTIONPROFILETEXT')/$value
semantic_en: "Case Function Profile Text"
semantic_vi: "Case Function Profile Text — CDS view giao diện dựa trên scmgfuncproft."
keywords:
  - "case"
  - "function"
  - "profile"
  - "text"
  - "language"
  - "name"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - bo:companycode
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASEFUNCTIONPROFILETEXT

**Case Function Profile Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEFUNCTIONPROFILETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CaseFunctionProfile` | ✓ | |  | `profile_id` | `CHAR(8)` | Case: Function Profile ID |
| `CaseFunctionProfileName` |  | |  | `text` | `CHAR(40)` | Case: Profile Description |
| `_Language` | | ✓ | | | | |
| `_CaseFunction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CaseFunction` | `I_CaseFunctionProfile` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEFUNCTIONPROFILETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEFUNCTIONPROFILETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASEFPTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Function Profile Text'
@ObjectModel.dataCategory: #TEXT
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseFunctionProfile'
define view I_CaseFunctionProfileText
  as select from scmgfuncproft


  association [0..1] to I_Language   as _Language     on $projection.Language = _Language.Language
  association [0..1] to I_CaseFunctionProfile as _CaseFunction 
  on $projection.CaseFunctionProfile = _CaseFunction.CaseFunctionProfile
{

          @ObjectModel.foreignKey.association: '_Language'
          @Semantics.language: true
  key     scmgfuncproft.langu           as  Language,
          @ObjectModel.foreignKey.association: '_CaseFunction'
  key     scmgfuncproft.profile_id      as  CaseFunctionProfile,
          @Semantics.text: true
          scmgfuncproft.text            as  CaseFunctionProfileName,

          _Language,
          _CaseFunction
}
```
