---
name: I_COLLATERALINSURANCETYPE
description: "Type of Collateral Insurance"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALINSURANCETYPE')/$value
semantic_en: "Type of Collateral Insurance"
semantic_vi: "Type of Collateral Insurance — CDS view giao diện dựa trên tcms_ins_typ."
keywords:
  - "type"
  - "collateral"
  - "insurance"
  - "object"
  - "category"
  - "process"
  - "control"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALINSURANCETYPE

**Type of Collateral Insurance**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALINSURANCETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralObjectCategory` | ✓ | |  | `ins_category` | `CHAR(6)` | Object Category |
| `CollateralInsuranceType` | ✓ | |  | `ins_typ` | `CHAR(6)` | Insurance Type |
| `CollateralProcessControlKey` |  | |  | `proc_cky` | `CHAR(10)` | Process Control Key |
| `_CollateralObjectCategory` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralObjectCategory` | `I_CollateralObjectCategory` | [0..1] |
| `_Text` | `I_CollateralInsuranceTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALINSURANCETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALINSURANCETYPE')/$value)*

```abap
@AbapCatalog: {
sqlViewName: 'ICINSURANCETYPE',
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
    representativeKey: 'CollateralInsuranceType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Type of Collateral Insurance'
define view I_CollateralInsuranceType
  as select from tcms_ins_typ
  association [0..1] to I_CollateralObjectCategory    as _CollateralObjectCategory on  $projection.CollateralObjectCategory = _CollateralObjectCategory.CollateralObjectCategory
  association [0..*] to I_CollateralInsuranceTypeText as _Text                     on  $projection.CollateralObjectCategory = _Text.CollateralObjectCategory
                                                                                   and $projection.CollateralInsuranceType  = _Text.CollateralInsuranceType
{
      @ObjectModel.foreignKey.association: '_CollateralObjectCategory'
  key ins_category as CollateralObjectCategory,
      @ObjectModel.text.association: '_Text'
  key ins_typ      as CollateralInsuranceType,
      proc_cky     as CollateralProcessControlKey,

      _CollateralObjectCategory,
      _Text

}
```
