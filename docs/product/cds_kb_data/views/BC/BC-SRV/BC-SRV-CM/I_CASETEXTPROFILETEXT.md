---
name: I_CASETEXTPROFILETEXT
description: "Case Text Profile Text"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETEXTPROFILETEXT')/$value
semantic_en: "Case Text Profile Text"
semantic_vi: "Case Text Profile Text — CDS view giao diện dựa trên scmgtextproft."
keywords:
  - "case"
  - "text"
  - "profile"
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
# I_CASETEXTPROFILETEXT

**Case Text Profile Text**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETEXTPROFILETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CaseTextProfile` | ✓ | |  | `profile_id` | `CHAR(8)` | Text Profile for Case Notes |
| `CaseTextProfileName` |  | |  | `description` | `CHAR(40)` | Case: Profile Description |
| `_Language` | | ✓ | | | | |
| `_TextProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_TextProfile` | `I_CaseTextProfile` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETEXTPROFILETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETEXTPROFILETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASETPTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Text Profile Text'
@ObjectModel.dataCategory: #TEXT
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseTextProfile'
define view I_CaseTextProfileText
  as select from scmgtextproft


  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [0..1] to I_CaseTextProfile as _TextProfile on $projection.CaseTextProfile= _TextProfile.CaseTextProfile
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key scmgtextproft.langu         as Language,
      @ObjectModel.foreignKey.association: '_TextProfile'
  key  scmgtextproft.profile_id    as CaseTextProfile,
      scmgtextproft.description   as CaseTextProfileName,
      
      _Language,
      _TextProfile
}
```
