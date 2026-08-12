---
name: I_EWM_WAVECATEGORY_2
description: "Warehouse Wave Category"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAVECATEGORY_2')/$value
semantic_en: "Warehouse Wave Category"
semantic_vi: "Warehouse Wave Category — CDS view giao diện dựa trên Warehouse Wave Category."
keywords:
  - "warehouse"
  - "wave"
  - "category"
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_WAVECATEGORY_2

**Warehouse Wave Category**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAVECATEGORY_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `WaveCategory` | ✓ | |  | `wave_cat` | `CHAR(2)` | Wave Category |
| `_Warehouse` | | ✓ | | | | |
| `_WaveCategoryText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_WaveCategoryText` | `I_EWM_WaveCategoryText_2` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAVECATEGORY_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAVECATEGORY_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Wave Category'

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'WaveCategory'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IEWMWVCAT2'
@Analytics.internalName: #LOCAL
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
                         
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,                                      
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
                         
@Metadata.ignorePropagatedAnnotations:true
define view entity I_EWM_WaveCategory_2
  as select from /scwm/twavecat

  association [0..1] to I_EWM_WarehouseNumber_2  as _Warehouse        on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..*] to I_EWM_WaveCategoryText_2 as _WaveCategoryText on  $projection.EWMWarehouse    = _WaveCategoryText.EWMWarehouse
                                                                    and $projection.WaveCategory = _WaveCategoryText.WaveCategory

{
      @ObjectModel.foreignKey.association: '_Warehouse'
  key lgnum    as EWMWarehouse,
      _Warehouse,

  key wave_cat as WaveCategory,
      _WaveCategoryText

}
```
