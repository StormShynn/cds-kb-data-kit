---
name: I_COLLATERALATTRIBUTEINDCAT
description: "Collateral Attribute Indicator Category"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALATTRIBUTEINDCAT')/$value
semantic_en: "Collateral Attribute Indicator Category"
semantic_vi: "Collateral Attribute Indicator Category — CDS view giao diện dựa trên tcms_att_id_ct."
keywords:
  - "collateral"
  - "attribute"
  - "indicator"
  - "category"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALATTRIBUTEINDCAT

**Collateral Attribute Indicator Category**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALATTRIBUTEINDCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralAttributeIndCat` | ✓ | |  | `indicator_id` | `CHAR(6)` | Attribute Indicator ID |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollateralAttributeIndCatTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALATTRIBUTEINDCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALATTRIBUTEINDCAT')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICOLATTIDCT',
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
    representativeKey: 'CollateralAttributeIndCat'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Attribute Indicator Category'
define view I_CollateralAttributeIndCat
  as select from tcms_att_id_ct
  association [0..*] to I_CollateralAttributeIndCatTxt as _Text on $projection.CollateralAttributeIndCat = _Text.collateralattributeindcat
{
      @ObjectModel.text.association: '_Text'
  key indicator_id as CollateralAttributeIndCat,

      _Text
}
```
