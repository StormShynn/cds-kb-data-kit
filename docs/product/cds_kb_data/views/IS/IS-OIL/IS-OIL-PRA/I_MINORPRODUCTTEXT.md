---
name: I_MINORPRODUCTTEXT
description: "Minor Product - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MINORPRODUCTTEXT')/$value
semantic_en: "Minor Product - Text"
semantic_vi: "Minor Product - Text — CDS view giao diện dựa trên oiu_cm_pdcd_tx."
keywords:
  - "minor"
  - "product"
  - "text"
  - "major"
  - "language"
  - "name"
tags:
  - IS
  - bo:material
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - product
---
# I_MINORPRODUCTTEXT

**Minor Product - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MINORPRODUCTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MajorProduct` | ✓ | |  | `majpd_cd` | `CHAR(1)` | Major product code |
| `MinorProduct` | ✓ | |  | `pd_cd` | `CHAR(2)` | Minor Product Code |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `MinorProductName` |  | |  | `cast( pd_de as oiu_vdm_minor_product_name )` | `CHAR(50)` | Minor Product Name |
| `_MajorProduct` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MajorProduct` | `I_MajorProduct` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MINORPRODUCTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MINORPRODUCTTEXT')/$value)*

```abap
@EndUserText.label: 'Minor Product - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVMINORPRODT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'MinorProduct'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_MinorProductText
  as select from oiu_cm_pdcd_tx
  association [0..1] to I_MajorProduct as _MajorProduct on $projection.MajorProduct = _MajorProduct.MajorProduct
{
      @ObjectModel.foreignKey.association: '_MajorProduct'
  key majpd_cd                                     as MajorProduct,
  key pd_cd                                        as MinorProduct,
      @Semantics.language: true
  key spras                                        as Language,
      @Semantics.text: true
      cast( pd_de as oiu_vdm_minor_product_name )  as MinorProductName,
      _MajorProduct
}
```
