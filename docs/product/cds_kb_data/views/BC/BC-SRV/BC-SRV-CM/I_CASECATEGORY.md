---
name: I_CASECATEGORY
description: "Case Category"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASECATEGORY')/$value
semantic_en: "Case Category"
semantic_vi: "Case Category — CDS view giao diện dựa trên scmgattr_catego."
keywords:
  - "case"
  - "category"
  - "type"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASECATEGORY

**Case Category**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASECATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseType` | ✓ | |  | `case_type` | `CHAR(4)` | Case Type |
| `CaseCategory` | ✓ | |  | `category` | `CHAR(4)` | Category |
| `_CaseType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CaseType` | `I_Casetypes` | [0..1] |
| `_Text` | `I_CaseCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASECATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASECATEGORY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASECATEGORY'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Category'
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseCategory'
define view I_CaseCategory
  as select from scmgattr_catego

  association [0..1] to I_Casetypes     as _CaseType on  $projection.CaseType = _CaseType.CaseType
  //
  association [0..*] to I_CaseCategoryText as _Text     on  $projection.CaseType     = _Text.CaseType
                                                      and $projection.CaseCategory = _Text.CaseCategory
{

      @ObjectModel.foreignKey.association: '_CaseType'
  key scmgattr_catego.case_type as CaseType,
      @ObjectModel.text.association: '_Text'
  key scmgattr_catego.category  as CaseCategory,

      _Text,
      _CaseType

}
```
