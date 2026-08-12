---
name: I_MAJORPRODUCT
description: "Major Product"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAJORPRODUCT')/$value
semantic_en: "Major Product"
semantic_vi: "Major Product — CDS view giao diện dựa trên dd07l."
keywords:
  - "major"
  - "product"
tags:
  - IS
  - bo:material
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - product
---
# I_MAJORPRODUCT

**Major Product**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAJORPRODUCT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MajorProduct` | ✓ | |  | `cast( domvalue_l as oiu_majpd_cd )` | `CHAR(1)` | Major product code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MajorProductText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAJORPRODUCT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAJORPRODUCT')/$value)*

```abap
@EndUserText.label: 'Major Product'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVMAJPDCD'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'MajorProduct'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAMajorProduct'

define view I_MajorProduct
  as select from dd07l
  association [0..*] to I_MajorProductText as _Text on $projection.MajorProduct = _Text.MajorProduct
{
      @ObjectModel.text.association: '_Text'
  key cast( domvalue_l as oiu_majpd_cd ) as MajorProduct,
      _Text
}
where
      domname  = 'OIU_MAJPD_CD'
  and as4local = 'A';
```
