---
name: I_COLLATERALREALESTATETYPE
description: "Type of Collateral Real Estate"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATETYPE')/$value
semantic_en: "Type of Collateral Real Estate"
semantic_vi: "Type of Collateral Real Estate — CDS view giao diện dựa trên tcms_re_typ."
keywords:
  - "type"
  - "collateral"
  - "real"
  - "estate"
  - "process"
  - "control"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALREALESTATETYPE

**Type of Collateral Real Estate**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralRealEstateType` | ✓ | |  | `object_type` | `CHAR(6)` | Real Estate Object Type ID |
| `CollateralProcessControlKey` |  | |  | `proc_cky` | `CHAR(10)` | Process Control Key |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollateralRealEstateTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATETYPE')/$value)*

```abap
@AbapCatalog: {
sqlViewName: 'ICOLRETYPE',
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
    representativeKey: 'CollateralRealEstateType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Type of Collateral Real Estate'
define view I_CollateralRealEstateType
  as select from tcms_re_typ
  association [0..*] to I_CollateralRealEstateTypeText as _Text on $projection.CollateralRealEstateType = _Text.CollateralRealEstateType
{
      @ObjectModel.text.association: '_Text'
  key object_type as CollateralRealEstateType,
      proc_cky    as CollateralProcessControlKey,

      _Text
}
```
