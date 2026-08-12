---
name: I_COLLATERALRBLPRODUCTCLASS
description: "Receivable Product Class"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLPRODUCTCLASS')/$value
semantic_en: "Receivable Product Class"
semantic_vi: "Receivable Product Class — CDS view giao diện dựa trên tcms_prd."
keywords:
  - "receivable"
  - "product"
  - "class"
  - "collateral"
tags:
  - FS
  - bo:material
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - product
---
# I_COLLATERALRBLPRODUCTCLASS

**Receivable Product Class**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLPRODUCTCLASS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralRblProductClass` | ✓ | |  | `prd_class` | `CHAR(6)` | Product Class |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollateralRblProductClassTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLPRODUCTCLASS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALRBLPRODUCTCLASS')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICOLRBLPRDCLS',
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
    representativeKey: 'CollateralRblProductClass'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Receivable Product Class'
define view I_CollateralRblProductClass
  as select from tcms_prd
  association [0..*] to I_CollateralRblProductClassTxt as _Text on $projection.CollateralRblProductClass = _Text.CollateralRblProductClass
{
      @ObjectModel.text.association: '_Text'
  key prd_class as CollateralRblProductClass,

      _Text
}
```
