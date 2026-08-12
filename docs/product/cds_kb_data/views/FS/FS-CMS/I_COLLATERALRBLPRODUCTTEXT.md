---
name: I_COLLATERALRBLPRODUCTTEXT
description: "Receivable Product - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLPRODUCTTEXT')/$value
semantic_en: "Receivable Product - Text"
semantic_vi: "Receivable Product - Text — CDS view giao diện dựa trên tcms_rbl_prod_t."
keywords:
  - "receivable"
  - "product"
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
# I_COLLATERALRBLPRODUCTTEXT

**Receivable Product - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLPRODUCTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralRblProduct` | ✓ | |  | `prod` | `CHAR(12)` | Product of Receivable |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `CollateralRblProductText` |  | |  | `name` | `CHAR(40)` | Product of receivable name in a specified language |
| `_Language` | | ✓ | | | | |
| `_CollateralRblProduct` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CollateralRblProduct` | `I_CollateralRblProduct` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLPRODUCTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLPRODUCTTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICOLRBLPRODTXT',
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
    representativeKey: 'CollateralRblProduct'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Receivable Product - Text'
define view I_CollateralRblProductText
  as select from tcms_rbl_prod_t
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
  association [0..1] to I_CollateralRblProduct as _CollateralRblProduct on $projection.CollateralRblProduct = _CollateralRblProduct.CollateralRblProduct
{
      @ObjectModel.foreignKey.association: '_CollateralRblProduct'
  key prod     as CollateralRblProduct,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language as Language,
      @Semantics.text: true
      name     as CollateralRblProductText,

      _Language,
      _CollateralRblProduct
}
```
