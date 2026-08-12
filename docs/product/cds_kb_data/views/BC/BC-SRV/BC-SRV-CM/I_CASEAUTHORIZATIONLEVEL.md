---
name: I_CASEAUTHORIZATIONLEVEL
description: "Case Authorization Level"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEAUTHORIZATIONLEVEL')/$value
semantic_en: "Case Authorization Level"
semantic_vi: "Case Authorization Level — CDS view giao diện dựa trên scmgaut_seclevl."
keywords:
  - "case"
  - "authorization"
  - "level"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASEAUTHORIZATIONLEVEL

**Case Authorization Level**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEAUTHORIZATIONLEVEL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseAuthorizationLevel` | ✓ | |  | `secure_level` | `CHAR(1)` | Authorization level |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CaseAuthorizationLevelText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEAUTHORIZATIONLEVEL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEAUTHORIZATIONLEVEL')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASEALEVEL'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Authorization Level'
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseAuthorizationLevel'
define view I_Caseauthorizationlevel
  as select from scmgaut_seclevl

  association [0..*] to I_CaseAuthorizationLevelText as _Text 
  on $projection.CaseAuthorizationLevel = _Text.CaseAuthorizationLevel

{

       @ObjectModel.text.association: '_Text'
  key  scmgaut_seclevl.secure_level as CaseAuthorizationLevel,

       _Text
}
```
