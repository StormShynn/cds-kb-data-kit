---
name: I_EWM_STORAGEBINSORTING
description: "This CDS view provides information about the assignment of storage bins to activities and activity areas in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINSORTING')/$value
semantic_en: "This CDS view provides information about the assignment of storage bins to activities and activity areas in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Storage Bin Sorting — CDS view giao diện dựa trên Storage Bin Sorting."
keywords:
  - "storage"
  - "bin"
  - "sorting"
  - "warehouse"
  - "activity"
  - "area"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - bo:salesorder
---
# I_EWM_STORAGEBINSORTING

**This CDS view provides information about the assignment of storage bins to activities and activity areas in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINSORTING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMStorageBin` | ✓ | |  | `lgpla` | `CHAR(18)` | Storage Bin |
| `Activity` | ✓ | |  | `act_type` | `CHAR(4)` | Activity |
| `ActivityArea` |  | |  | `aarea` | `CHAR(4)` | Activity Area |
| `_Warehouse` | | ✓ | | | | |
| `_ActivityArea` | | ✓ | | | | |
| `_WarehouseActivity` | | ✓ | | | | |
| `_StorageBin` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_ActivityArea` | `I_EWM_ActivityArea_2` | [0..1] |
| `_WarehouseActivity` | `I_EWM_WarehouseActivity_2` | [0..1] |
| `_StorageBin` | `I_EWM_StorageBin_2` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINSORTING')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINSORTING')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Storage Bin Sorting'
@VDM.viewType:#BASIC 
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #S,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE                                     
define view entity I_EWM_StorageBinSorting
  as select from /scwm/lagps
  association [0..1] to I_EWM_WarehouseNumber_2   as _Warehouse         on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..1] to I_EWM_ActivityArea_2      as _ActivityArea      on  $projection.EWMWarehouse = _ActivityArea.EWMWarehouse
                                                                        and $projection.ActivityArea = _ActivityArea.ActivityArea
  association [0..1] to I_EWM_WarehouseActivity_2 as _WarehouseActivity on  $projection.EWMWarehouse = _WarehouseActivity.EWMWarehouse
                                                                        and $projection.Activity     = _WarehouseActivity.Activity
  association [0..1] to I_EWM_StorageBin_2        as _StorageBin        on  $projection.EWMWarehouse  = _StorageBin.EWMWarehouse
                                                                        and $projection.EWMStorageBin = _StorageBin.EWMStorageBin
{
      @ObjectModel.foreignKey.association: '_Warehouse'
  key lgnum    as EWMWarehouse,
      @ObjectModel.foreignKey.association: '_StorageBin'
  key lgpla    as EWMStorageBin,
      @ObjectModel.foreignKey.association: '_WarehouseActivity'
  key act_type as Activity,
      @ObjectModel.foreignKey.association: '_ActivityArea'
      aarea    as ActivityArea,

      _Warehouse,
      _ActivityArea,
      _WarehouseActivity,
      _StorageBin
}
```
