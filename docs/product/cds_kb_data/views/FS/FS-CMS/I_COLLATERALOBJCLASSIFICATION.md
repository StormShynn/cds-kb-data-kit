---
name: I_COLLATERALOBJCLASSIFICATION
description: "Collateral Object Classification"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJCLASSIFICATION')/$value
semantic_en: "Collateral Object Classification"
semantic_vi: "Collateral Object Classification — CDS view giao diện dựa trên tcms_oms_feat."
keywords:
  - "collateral"
  - "object"
  - "classification"
  - "category"
tags:
  - FS
  - bo:companycode
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALOBJCLASSIFICATION

**Collateral Object Classification**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJCLASSIFICATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralObjectCategory` | ✓ | |  | `categoryid` | `CHAR(6)` | Object Category |
| `CollateralObjClassification` | ✓ | |  | `type_feat` | `CHAR(6)` | Classification |
| `_Text` | | ✓ | | | | |
| `_CollateralObjectCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollateralObjClassfctnText` | [0..*] |
| `_CollateralObjectCategory` | `I_CollateralObjectCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJCLASSIFICATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJCLASSIFICATION')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICOLOBJCLSSIF',
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
    representativeKey: 'CollateralObjClassification'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Object Classification'
define view I_CollateralObjClassification
  as select from tcms_oms_feat
  association [0..*] to I_CollateralObjClassfctnText as _Text                     on  $projection.CollateralObjectCategory    = _Text.CollateralObjectCategory
                                                                                  and $projection.CollateralObjClassification = _Text.CollateralObjClassification
  association [0..1] to I_CollateralObjectCategory   as _CollateralObjectCategory on  $projection.CollateralObjectCategory = _CollateralObjectCategory.CollateralObjectCategory
{
      @ObjectModel.foreignKey.association: '_CollateralObjectCategory'
  key categoryid as CollateralObjectCategory,
      @ObjectModel.text.association: '_Text'
  key type_feat  as CollateralObjClassification,

      _Text,
      _CollateralObjectCategory
}
```
