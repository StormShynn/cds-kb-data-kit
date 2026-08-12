---
name: I_COLLATERALRBLPRODUCT
description: "Receivable Product"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLPRODUCT')/$value
semantic_en: "Receivable Product"
semantic_vi: "Receivable Product — CDS view giao diện dựa trên tcms_rbl_prod."
keywords:
  - "receivable"
  - "product"
  - "collateral"
tags:
  - FS
  - bo:material
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - product
---
# I_COLLATERALRBLPRODUCT

**Receivable Product**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLPRODUCT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralRblProduct` | ✓ | |  | `prod` | `CHAR(12)` | Product of Receivable |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollateralRblProductText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLPRODUCT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLPRODUCT')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICOLRBLPROD',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'CollateralRblProduct'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Receivable Product'
define view I_CollateralRblProduct
  as select from tcms_rbl_prod
  association [0..*] to I_CollateralRblProductText as _Text on $projection.CollateralRblProduct = _Text.CollateralRblProduct
{
      @ObjectModel.text.association: '_Text'
  key prod as CollateralRblProduct,

      _Text
}
```
