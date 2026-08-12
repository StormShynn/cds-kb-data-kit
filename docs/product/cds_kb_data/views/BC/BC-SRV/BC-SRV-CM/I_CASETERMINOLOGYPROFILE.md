---
name: I_CASETERMINOLOGYPROFILE
description: "Case Terminology Profile"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETERMINOLOGYPROFILE')/$value
semantic_en: "Case Terminology Profile"
semantic_vi: "Case Terminology Profile — CDS view giao diện dựa trên scmgtermprof."
keywords:
  - "case"
  - "terminology"
  - "profile"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - bo:companycode
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASETERMINOLOGYPROFILE

**Case Terminology Profile**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETERMINOLOGYPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseTerminologyProfile` | ✓ | |  | `profile_id` | `CHAR(8)` | Terminology Profile ID |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CaseTerminologyProfileText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETERMINOLOGYPROFILE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETERMINOLOGYPROFILE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASETPROFILE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Terminology Profile'
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseTerminologyProfile'
define view I_CaseTerminologyProfile
  as select from scmgtermprof

  association [0..*] to I_CaseTerminologyProfileText as _Text on $projection.CaseTerminologyProfile = _Text.CaseTerminologyProfile
{

       @ObjectModel.text.association: '_Text'
  key  scmgtermprof.profile_id as CaseTerminologyProfile,

       _Text

}
```
