---
name: I_COLLATERALINSURANCETYPETEXT
description: "Type of Collateral Insurance - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALINSURANCETYPETEXT')/$value
semantic_en: "Type of Collateral Insurance - Text"
semantic_vi: "Type of Collateral Insurance - Text — CDS view giao diện dựa trên tcms_ins_typ_t."
keywords:
  - "type"
  - "collateral"
  - "insurance"
  - "text"
  - "object"
  - "category"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALINSURANCETYPETEXT

**Type of Collateral Insurance - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALINSURANCETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralObjectCategory` | ✓ | |  | `ins_category` | `CHAR(6)` | Object Category |
| `CollateralInsuranceType` | ✓ | |  | `ins_typ` | `CHAR(6)` | Insurance Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `CollateralInsuranceTypeText` |  | |  | `name` | `CHAR(40)` | Type Name |
| `_CollateralObjectCategory` | | ✓ | | | | |
| `_CollateralInsuranceType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralObjectCategory` | `I_CollateralObjectCategory` | [0..1] |
| `_CollateralInsuranceType` | `I_CollateralInsuranceType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALINSURANCETYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALINSURANCETYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICINSURTYPETEXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    representativeKey: 'CollateralInsuranceType'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Type of Collateral Insurance - Text'
define view I_CollateralInsuranceTypeText
  as select from tcms_ins_typ_t
  association [0..1] to I_CollateralObjectCategory as _CollateralObjectCategory on  $projection.CollateralObjectCategory = _CollateralObjectCategory.CollateralObjectCategory
  association [0..1] to I_CollateralInsuranceType  as _CollateralInsuranceType  on  $projection.CollateralObjectCategory = _CollateralInsuranceType.CollateralObjectCategory
                                                                                and $projection.CollateralInsuranceType  = _CollateralInsuranceType.CollateralInsuranceType
  association [0..1] to I_Language                 as _Language                 on  $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CollateralObjectCategory'
  key ins_category as CollateralObjectCategory,
      @ObjectModel.foreignKey.association: '_CollateralInsuranceType'
  key ins_typ      as CollateralInsuranceType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language     as Language,
      @Semantics.text: true
      name         as CollateralInsuranceTypeText,

      _CollateralObjectCategory,
      _CollateralInsuranceType,
      _Language

}
```
