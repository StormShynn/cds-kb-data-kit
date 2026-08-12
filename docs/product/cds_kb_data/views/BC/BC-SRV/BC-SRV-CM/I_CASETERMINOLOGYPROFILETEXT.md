---
name: I_CASETERMINOLOGYPROFILETEXT
description: "Case Terminology Profile Text"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETERMINOLOGYPROFILETEXT')/$value
semantic_en: "Case Terminology Profile Text"
semantic_vi: "Case Terminology Profile Text — CDS view giao diện dựa trên scmgtermproft."
keywords:
  - "case"
  - "terminology"
  - "profile"
  - "text"
  - "language"
  - "profiledescription"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - bo:companycode
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASETERMINOLOGYPROFILETEXT

**Case Terminology Profile Text**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETERMINOLOGYPROFILETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CaseTerminologyProfile` | ✓ | |  | `profile_id` | `CHAR(8)` | Terminology Profile ID |
| `Profiledescription` |  | |  | `description` | `CHAR(40)` | Case: Profile Description |
| `_Language` | | ✓ | | | | |
| `_TermProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_TermProfile` | `I_CaseTerminologyProfile` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETERMINOLOGYPROFILETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETERMINOLOGYPROFILETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASETERMPTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Terminology Profile Text'
@ObjectModel.dataCategory: #TEXT
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseTerminologyProfile'
define view I_CaseTerminologyProfileText
  as select from scmgtermproft


  association [0..1] to I_Language   as _Language    on $projection.Language = _Language.Language
  association [0..1] to I_CaseTerminologyProfile as _TermProfile
   on $projection.CaseTerminologyProfile = _TermProfile.CaseTerminologyProfile

{
        @ObjectModel.foreignKey.association: '_Language'
        @Semantics.language: true
  key   scmgtermproft.langu       as Language,
  key   scmgtermproft.profile_id  as CaseTerminologyProfile,
        scmgtermproft.description as Profiledescription,
        
        _Language,
        _TermProfile
}
```
