---
name: I_COLLTRLREUSAGETYPE
description: "Usage Type for Collateral Real Estate"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREUSAGETYPE')/$value
semantic_en: "Usage Type for Collateral Real Estate"
semantic_vi: "Usage Type for Collateral Real Estate — CDS view giao diện dựa trên tcms_re_u_typ."
keywords:
  - "usage"
  - "type"
  - "for"
  - "collateral"
  - "real"
  - "estate"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLREUSAGETYPE

**Usage Type for Collateral Real Estate**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREUSAGETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralRealEstateUsageType` | ✓ | |  | `usage_type` | `CHAR(6)` | Usage Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ColltrlREUsageTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREUSAGETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREUSAGETYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICREUSAGETYPE',
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
    modelingPattern: #ANALYTICAL_DIMENSION,                         
    representativeKey: 'CollateralRealEstateUsageType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Usage Type for Collateral Real Estate'
define view I_ColltrlREUsageType
  as select from tcms_re_u_typ
  association [0..*] to I_ColltrlREUsageTypeText as _Text on $projection.CollateralRealEstateUsageType = _Text.CollateralRealEstateUsageType
{
     @ObjectModel.text.association: '_Text'
  key usage_type as CollateralRealEstateUsageType,

      _Text
}
```
