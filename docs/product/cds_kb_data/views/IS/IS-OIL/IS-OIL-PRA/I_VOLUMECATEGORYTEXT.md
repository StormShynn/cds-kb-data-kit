---
name: I_VOLUMECATEGORYTEXT
description: "Volume Category Name - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMECATEGORYTEXT')/$value
semantic_en: "Volume Category Name - Text"
semantic_vi: "Volume Category Name - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "volume"
  - "category"
  - "name"
  - "text"
  - "language"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_VOLUMECATEGORYTEXT

**Volume Category Name - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMECATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VolumeCategory` | ✓ | |  | `cast (domvalue_l as oiu_vl_cat_cd )` | `CHAR(1)` | Volume Category Code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `VolumeCategoryName` |  | |  | `cast (ddtext as oiu_vdm_volume_cat_name )` | `CHAR(60)` | Volume Category Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMECATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMECATEGORYTEXT')/$value)*

```abap
@EndUserText.label: 'Volume Category Name - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVVOLUMECATT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'VolumeCategory'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_VolumeCategoryText
  as select from dd07t
{
  key cast (domvalue_l as oiu_vl_cat_cd )                     as VolumeCategory,
      @Semantics.language
  key cast( ddlanguage as spras )                             as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_volume_cat_name )               as VolumeCategoryName
}
where
      domname  = 'OIU_VL_CAT_CD'
  and as4local = 'A';
```
