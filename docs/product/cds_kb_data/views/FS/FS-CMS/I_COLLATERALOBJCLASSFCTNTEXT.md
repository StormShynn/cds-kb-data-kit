---
name: I_COLLATERALOBJCLASSFCTNTEXT
description: "Collateral Object Classification - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJCLASSFCTNTEXT')/$value
semantic_en: "Collateral Object Classification - Text"
semantic_vi: "Collateral Object Classification - Text — CDS view giao diện dựa trên tcms_oms_feat_t."
keywords:
  - "collateral"
  - "object"
  - "classification"
  - "text"
  - "category"
  - "language"
  - "classfctn"
tags:
  - FS
  - bo:companycode
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALOBJCLASSFCTNTEXT

**Collateral Object Classification - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJCLASSFCTNTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralObjectCategory` | ✓ | |  | `categoryid` | `CHAR(6)` | Object Category |
| `CollateralObjClassification` | ✓ | |  | `type_feat` | `CHAR(6)` | Classification |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `CollateralObjClassfctnText` |  | |  | `name` | `CHAR(40)` |  Feature of the object type/ Object classification |
| `_Language` | | ✓ | | | | |
| `_CollateralObjClassification` | | ✓ | | | | |
| `_CollateralObjectCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CollateralObjClassification` | `I_CollateralObjClassification` | [0..1] |
| `_CollateralObjectCategory` | `I_CollateralObjectCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJCLASSFCTNTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJCLASSFCTNTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICOLOBJCLSSIFTXT',
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
    representativeKey: 'CollateralObjClassification'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Object Classification - Text'
define view I_CollateralObjClassfctnText
  as select from tcms_oms_feat_t
  association [0..1] to I_Language                    as _Language                    on  $projection.Language = _Language.Language
  association [0..1] to I_CollateralObjClassification as _CollateralObjClassification on  $projection.CollateralObjectCategory    = _CollateralObjClassification.CollateralObjectCategory
                                                                                      and $projection.CollateralObjClassification = _CollateralObjClassification.CollateralObjClassification
  association [0..1] to I_CollateralObjectCategory    as _CollateralObjectCategory    on  $projection.CollateralObjectCategory = _CollateralObjectCategory.CollateralObjectCategory
{
      @ObjectModel.foreignKey.association: '_CollateralObjectCategory'
  key categoryid as CollateralObjectCategory,
      @ObjectModel.foreignKey.association: '_CollateralObjClassification'
  key type_feat  as CollateralObjClassification,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language   as Language,
      @Semantics.text: true
      name       as CollateralObjClassfctnText,

      _Language,
      _CollateralObjClassification,
      _CollateralObjectCategory
}
```
