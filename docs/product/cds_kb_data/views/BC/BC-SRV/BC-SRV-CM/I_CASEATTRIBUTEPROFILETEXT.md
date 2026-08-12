---
name: I_CASEATTRIBUTEPROFILETEXT
description: "Case Attribute Profile Text"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEATTRIBUTEPROFILETEXT')/$value
semantic_en: "Case Attribute Profile Text"
semantic_vi: "Case Attribute Profile Text — CDS view giao diện dựa trên scmgattrproft."
keywords:
  - "case"
  - "attribute"
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
# I_CASEATTRIBUTEPROFILETEXT

**Case Attribute Profile Text**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEATTRIBUTEPROFILETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseAttributeProfile` | ✓ | |  | `profile_id` | `CHAR(8)` | Case: Attribute Profile ID |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CaseAttributeProfileName` |  | |  | `description` | `CHAR(40)` | Case: Profile Description |
| `_Language` | | ✓ | | | | |
| `_CaseAttrProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CaseAttrProfile` | `I_CaseAttributeProfile` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEATTRIBUTEPROFILETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEATTRIBUTEPROFILETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASEAPTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Attribute Profile Text'
@ObjectModel.dataCategory: #TEXT
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseAttributeProfile'
define view I_CaseAttributeProfileText
  as select from scmgattrproft

  association [0..1] to I_Language             as _Language        on $projection.Language = _Language.Language
  association [0..1] to I_CaseAttributeProfile as _CaseAttrProfile 
  on $projection.CaseAttributeProfile = _CaseAttrProfile.CaseAttributeProfile

{
      @ObjectModel.foreignKey.association: ''
  key scmgattrproft.profile_id            as  CaseAttributeProfile,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key scmgattrproft.langu                 as  Language,

      @Semantics.text : true
      scmgattrproft.description           as  CaseAttributeProfileName,

      _Language,
      _CaseAttrProfile


}
```
