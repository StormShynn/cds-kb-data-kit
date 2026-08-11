---
name: I_COLLATERALRBLPRODUCTCLASSTXT
description: "Receivable Product Class - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLPRODUCTCLASSTXT')/$value
semantic_en: "Receivable Product Class - Text"
semantic_vi: "Receivable Product Class - Text — CDS view giao diện dựa trên tcms_prd_t."
keywords:
  - "receivable"
  - "product"
  - "class"
  - "text"
  - "collateral"
  - "language"
tags:
  - FS
  - bo:material
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - product
---
# I_COLLATERALRBLPRODUCTCLASSTXT

**Receivable Product Class - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLPRODUCTCLASSTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralRblProductClass` | ✓ | |  | `prd_class` | `CHAR(6)` | Product Class |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `CollateralRblProductClassTxt` |  | |  | `name` | `CHAR(40)` | Product Name in a Specified Language |
| `_Language` | | ✓ | | | | |
| `_CollateralRblProductClass` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CollateralRblProductClass` | `I_CollateralRblProductClass` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLPRODUCTCLASSTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLPRODUCTCLASSTXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICOLRBLPRDCLSTXT',
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
    representativeKey: 'CollateralRblProductClass'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Receivable Product Class - Text'
define view I_CollateralRblProductClassTxt
  as select from tcms_prd_t
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
  association [0..1] to I_CollateralRblProductClass as _CollateralRblProductClass on $projection.CollateralRblProductClass = _CollateralRblProductClass.CollateralRblProductClass
{
      @ObjectModel.foreignKey.association: '_CollateralRblProductClass'
  key prd_class as CollateralRblProductClass,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language  as Language,
      @Semantics.text: true
      name      as CollateralRblProductClassTxt,

      _Language,
      _CollateralRblProductClass

}
```
