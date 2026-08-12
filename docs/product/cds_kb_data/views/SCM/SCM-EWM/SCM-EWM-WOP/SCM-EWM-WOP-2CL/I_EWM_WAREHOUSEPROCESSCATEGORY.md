---
name: I_EWM_WAREHOUSEPROCESSCATEGORY
description: "This CDS view provides information about warehouse process categories in your warehouse."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAREHOUSEPROCESSCATEGORY')/$value
semantic_en: "This CDS view provides information about warehouse process categories in your warehouse."
semantic_vi: "Warehouse Process Categories — CDS view giao diện dựa trên Warehouse Process Categories."
keywords:
  - "warehouse"
  - "process"
  - "categories"
  - "category"
  - "type"
  - "assigned"
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_WAREHOUSEPROCESSCATEGORY

**This CDS view provides information about warehouse process categories in your warehouse.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAREHOUSEPROCESSCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WarehouseProcessCategory` | ✓ | |  | `trart` | `CHAR(1)` | Warehouse Process Category |
| `WarehouseProcessTypeIsAssigned` |  | |  | `activity` | `CHAR(1)` | Assign Warehouse Process Type - Activity |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EWM_WhseProcessCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAREHOUSEPROCESSCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAREHOUSEPROCESSCATEGORY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEWMWPC'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Process Categories'

@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'WarehouseProcessCategory'
@Analytics.dataCategory: #DIMENSION
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,                                      
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@Metadata.ignorePropagatedAnnotations:true
define view I_EWM_WarehouseProcessCategory
  as select from /scwm/t333a  as  WarehouseProcessCategory
  association [0..*] to I_EWM_WhseProcessCategoryText  as  _Text   on  $projection.WarehouseProcessCategory = _Text.WarehouseProcessCategory
{
  @ObjectModel.text.association: '_Text'
  key trart     as  WarehouseProcessCategory,
      activity  as  WarehouseProcessTypeIsAssigned,
      _Text
}
```
