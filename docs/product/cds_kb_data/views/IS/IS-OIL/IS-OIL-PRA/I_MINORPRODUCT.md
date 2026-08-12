---
name: I_MINORPRODUCT
description: "Minor Product"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MINORPRODUCT')/$value
semantic_en: "Minor Product"
semantic_vi: "Minor Product — CDS view giao diện dựa trên oiu_cm_pdcd."
keywords:
  - "minor"
  - "product"
  - "major"
tags:
  - IS
  - bo:material
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - product
---
# I_MINORPRODUCT

**Minor Product**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MINORPRODUCT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MajorProduct` | ✓ | |  | `majpd_cd` | `CHAR(1)` | Major product code |
| `MinorProduct` | ✓ | |  | `pd_cd` | `CHAR(2)` | Minor Product Code |
| `_MajorProduct` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MajorProduct` | `I_MajorProduct` | [0..1] |
| `_Text` | `I_MinorProductText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MINORPRODUCT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MINORPRODUCT')/$value)*

```abap
@EndUserText.label: 'Minor Product'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVMINPDCD'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'MinorProduct'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAMinorProduct'

define view I_MinorProduct
  as select from oiu_cm_pdcd
  association [0..1] to I_MajorProduct     as _MajorProduct on  $projection.MajorProduct = _MajorProduct.MajorProduct
  association [0..*] to I_MinorProductText as _Text         on  $projection.MajorProduct = _Text.MajorProduct
                                                            and $projection.MinorProduct = _Text.MinorProduct
{
      @ObjectModel.foreignKey.association: '_MajorProduct'
  key majpd_cd        as MajorProduct,
      @ObjectModel.text.association: '_Text'
  key pd_cd           as MinorProduct,
      _MajorProduct,
      _Text
}
```
