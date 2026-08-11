---
name: I_COLLATERALLANDREGISTERTYPE
description: "Land Register Type for Collateral"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALLANDREGISTERTYPE')/$value
semantic_en: "Land Register Type for Collateral"
semantic_vi: "Land Register Type for Collateral — CDS view giao diện dựa trên tcms_lr_de_tya."
keywords:
  - "land"
  - "register"
  - "type"
  - "for"
  - "collateral"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALLANDREGISTERTYPE

**Land Register Type for Collateral**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALLANDREGISTERTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralLandRegisterType` | ✓ | |  | `reg_typ` | `CHAR(6)` | Register Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ColltrlLandRegisterTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALLANDREGISTERTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALLANDREGISTERTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICLRTYPE',
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
    representativeKey: 'CollateralLandRegisterType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Land Register Type for Collateral'
define view I_CollateralLandRegisterType
  as select from tcms_lr_de_tya
  association [0..*] to I_ColltrlLandRegisterTypeText as _Text on $projection.CollateralLandRegisterType = _Text.CollateralLandRegisterType
{
      @ObjectModel.text.association: '_Text'
  key reg_typ as CollateralLandRegisterType,

      _Text
}
```
