---
name: I_CASEFUNCTIONPROFILE
description: "Case Function Profile"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEFUNCTIONPROFILE')/$value
semantic_en: "Case Function Profile"
semantic_vi: "Case Function Profile — CDS view giao diện dựa trên scmgfuncprof."
keywords:
  - "case"
  - "function"
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
# I_CASEFUNCTIONPROFILE

**Case Function Profile**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEFUNCTIONPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseFunctionProfile` | ✓ | |  | `profile_id` | `CHAR(8)` | Case: Function Profile ID |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CaseFunctionProfileText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEFUNCTIONPROFILE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEFUNCTIONPROFILE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASEFPROFILE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Function Profile'
//@Analytics.dataCategory: #DIMENSION 
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseFunctionProfile'
define view I_CaseFunctionProfile
  as select from scmgfuncprof


  association [0..*] to I_CaseFunctionProfileText as _Text on $projection.CaseFunctionProfile = _Text.CaseFunctionProfile
{

        @ObjectModel.text.association: '_Text'
  key   scmgfuncprof.profile_id as CaseFunctionProfile,

        _Text
}
```
