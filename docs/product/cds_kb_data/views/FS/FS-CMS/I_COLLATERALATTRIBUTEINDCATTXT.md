---
name: I_COLLATERALATTRIBUTEINDCATTXT
description: "Collateral Attribute Ind Category - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALATTRIBUTEINDCATTXT')/$value
semantic_en: "Collateral Attribute Ind Category - Text"
semantic_vi: "Collateral Attribute Ind Category - Text — CDS view giao diện dựa trên tcms_att_id_ct_t."
keywords:
  - "collateral"
  - "attribute"
  - "ind"
  - "category"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALATTRIBUTEINDCATTXT

**Collateral Attribute Ind Category - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALATTRIBUTEINDCATTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralAttributeIndCat` | ✓ | |  | `indicator_id` | `CHAR(6)` | Attribute Indicator ID |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `CollateralAttributeIndCatText` |  | |  | `name` | `CHAR(40)` | Attribute Category Name |
| `_Language` | | ✓ | | | | |
| `_CollateralAttributeIndCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CollateralAttributeIndCat` | `I_CollateralAttributeIndCat` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALATTRIBUTEINDCATTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALATTRIBUTEINDCATTXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICOLATTIDCTTXT',
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
    representativeKey: 'CollateralAttributeIndCat'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Attribute Ind Category - Text'
define view I_CollateralAttributeIndCatTxt
  as select from tcms_att_id_ct_t
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
  association [0..1] to I_CollateralAttributeIndCat as _CollateralAttributeIndCat on $projection.CollateralAttributeIndCat = _CollateralAttributeIndCat.CollateralAttributeIndCat
{
      @ObjectModel.foreignKey.association: '_CollateralAttributeIndCat'
  key indicator_id as CollateralAttributeIndCat,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language     as Language,
      @Semantics.text: true
      name         as CollateralAttributeIndCatText,

      _Language,
      _CollateralAttributeIndCat
}
```
