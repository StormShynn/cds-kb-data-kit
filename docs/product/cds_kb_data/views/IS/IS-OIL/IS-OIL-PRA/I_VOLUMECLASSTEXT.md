---
name: I_VOLUMECLASSTEXT
description: "Volume Class Name - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMECLASSTEXT')/$value
semantic_en: "Volume Class Name - Text"
semantic_vi: "Volume Class Name - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "volume"
  - "class"
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
# I_VOLUMECLASSTEXT

**Volume Class Name - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMECLASSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VolumeClass` | ✓ | |  | `cast (domvalue_l as oiu_vc_cd )` | `CHAR(1)` | Volume class code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `VolumeClassName` |  | |  | `cast (ddtext as oiu_vdm_volume_class_name )` | `CHAR(60)` | Volume Class Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMECLASSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMECLASSTEXT')/$value)*

```abap
@EndUserText.label: 'Volume Class Name - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVVOLUMECLASST'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'VolumeClass'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_VolumeClassText
  as select from dd07t
{
  key cast (domvalue_l as oiu_vc_cd )                     as VolumeClass,
      @Semantics.language
  key cast( ddlanguage as spras )                         as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_volume_class_name )         as VolumeClassName
}
where
      domname  = 'OIU_VC_CD'
  and as4local = 'A';
```
