---
name: I_CASEAUTHORIZATIONLEVELTEXT
description: "Case Authorization Level Text"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEAUTHORIZATIONLEVELTEXT')/$value
semantic_en: "Case Authorization Level Text"
semantic_vi: "Case Authorization Level Text — CDS view giao diện dựa trên scmgaut_seclevlt."
keywords:
  - "case"
  - "authorization"
  - "level"
  - "text"
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
# I_CASEAUTHORIZATIONLEVELTEXT

**Case Authorization Level Text**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEAUTHORIZATIONLEVELTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CaseAuthorizationLevel` | ✓ | |  | `secure_level` | `CHAR(1)` | Authorization level |
| `CaseAuthorizationLevelName` |  | |  | `description` | `CHAR(40)` | Text, 40 Characters Long |
| `_Language` | | ✓ | | | | |
| `_CaseAuthLevel` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CaseAuthLevel` | `I_Caseauthorizationlevel` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEAUTHORIZATIONLEVELTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEAUTHORIZATIONLEVELTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASEALTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@EndUserText.label: 'Case Authorization Level Text'
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseAuthorizationLevel'

define view I_CaseAuthorizationLevelText
  as select from scmgaut_seclevlt

  association [0..1] to I_Language               as _Language      on $projection.Language = _Language.Language
  association [0..1] to I_Caseauthorizationlevel as _CaseAuthLevel 
  on $projection.CaseAuthorizationLevel = _CaseAuthLevel.CaseAuthorizationLevel
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key scmgaut_seclevlt.langu        as Language,
      @ObjectModel.foreignKey.association: '_CaseAuthLevel'
  key scmgaut_seclevlt.secure_level as CaseAuthorizationLevel,
      @Semantics.text: true
      scmgaut_seclevlt.description  as CaseAuthorizationLevelName,

      _Language,
      _CaseAuthLevel
}
```
