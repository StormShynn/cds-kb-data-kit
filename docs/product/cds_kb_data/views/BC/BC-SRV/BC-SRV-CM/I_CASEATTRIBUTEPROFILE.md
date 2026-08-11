---
name: I_CASEATTRIBUTEPROFILE
description: "Case Attribute Profile"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEATTRIBUTEPROFILE')/$value
semantic_en: "Case Attribute Profile"
semantic_vi: "Case Attribute Profile — CDS view giao diện dựa trên scmgattrprof."
keywords:
  - "case"
  - "attribute"
  - "profile"
  - "table"
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
# I_CASEATTRIBUTEPROFILE

**Case Attribute Profile**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEATTRIBUTEPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseAttributeProfile` | ✓ | |  | `profile_id` | `CHAR(8)` | Case: Attribute Profile ID |
| `CaseTableName` |  | |  | `attr_structure` | `CHAR(30)` | Table Name |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CaseAttributeProfileText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEATTRIBUTEPROFILE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEATTRIBUTEPROFILE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASEAPROFILE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Attribute Profile'
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseAttributeProfile'
define view I_CaseAttributeProfile
  as select from scmgattrprof

  association [0..*] to I_CaseAttributeProfileText as _Text on $projection.CaseAttributeProfile = _Text.CaseAttributeProfile

{


      @ObjectModel.text.association: '_Text'
  key scmgattrprof.profile_id     as CaseAttributeProfile,
      scmgattrprof.attr_structure as CaseTableName,
      _Text
}
```
