---
name: I_VOLUMECATEGORY
description: "Volume Category"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMECATEGORY')/$value
semantic_en: "Volume Category"
semantic_vi: "Volume Category — CDS view giao diện dựa trên dd07l."
keywords:
  - "volume"
  - "category"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_VOLUMECATEGORY

**Volume Category**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMECATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VolumeCategory` | ✓ | |  | `cast (domvalue_l as oiu_vl_cat_cd )` | `CHAR(1)` | Volume Category Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_VolumeCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMECATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMECATEGORY')/$value)*

```abap
@EndUserText.label: 'Volume Category'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVVOLUMECAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'VolumeCategory'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAVolumeCategoryCode'

define view I_VolumeCategory
  as select from dd07l
  association [0..*] to I_VolumeCategoryText as _Text on $projection.VolumeCategory = _Text.VolumeCategory
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiu_vl_cat_cd ) as VolumeCategory,
      _Text
}
where
      domname  = 'OIU_VL_CAT_CD'
  and as4local = 'A';
```
