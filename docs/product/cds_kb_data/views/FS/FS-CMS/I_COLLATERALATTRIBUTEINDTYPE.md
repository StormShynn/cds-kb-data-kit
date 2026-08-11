---
name: I_COLLATERALATTRIBUTEINDTYPE
description: "Collateral Attribute Indicator"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALATTRIBUTEINDTYPE')/$value
semantic_en: "Collateral Attribute Indicator"
semantic_vi: "Collateral Attribute Indicator — CDS view giao diện dựa trên tcms_att_id_ty."
keywords:
  - "collateral"
  - "attribute"
  - "indicator"
  - "type"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALATTRIBUTEINDTYPE

**Collateral Attribute Indicator**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALATTRIBUTEINDTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralAttributeIndCat` | ✓ | |  | `indicator_id` | `CHAR(6)` | Attribute Indicator ID |
| `CollateralAttributeIndType` | ✓ | |  | `indicator_type` | `CHAR(6)` | Attribute Indicator Type |
| `_CollateralAttributeIndCat` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralAttributeIndCat` | `I_CollateralAttributeIndCat` | [0..1] |
| `_Text` | `I_CollateralAttribIndTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALATTRIBUTEINDTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALATTRIBUTEINDTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICOLATTIDTYPE',
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
    representativeKey: 'CollateralAttributeIndType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Attribute Indicator'
define view I_CollateralAttributeIndType
  as select from tcms_att_id_ty
  association [0..1] to I_CollateralAttributeIndCat   as _CollateralAttributeIndCat on  $projection.CollateralAttributeIndCat = _CollateralAttributeIndCat.collateralattributeindcat
  association [0..*] to I_CollateralAttribIndTypeText as _Text                      on  $projection.CollateralAttributeIndCat  = _Text.collateralattributeindcat
                                                                                    and $projection.CollateralAttributeIndType = _Text.CollateralAttributeIndType
{
      @ObjectModel.foreignKey.association: '_CollateralAttributeIndCat'
  key indicator_id   as CollateralAttributeIndCat,
      @ObjectModel.text.association: '_Text'
  key indicator_type as CollateralAttributeIndType,

      _CollateralAttributeIndCat,
      _Text
}
```
