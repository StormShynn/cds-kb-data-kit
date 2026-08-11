---
name: I_EWM_PHYSINVTRYCYCLECOUNTING
description: "This CDS view provides information about physical inventory cycle counting in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYCYCLECOUNTING')/$value
semantic_en: "This CDS view provides information about physical inventory cycle counting in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Physical Inventory Cycle Counting — CDS view giao diện dựa trên Physical Inventory Cycle Counting."
keywords:
  - "physical"
  - "inventory"
  - "cycle"
  - "counting"
  - "warehouse"
  - "phys"
  - "intvl"
  - "value"
  - "buffer"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - inventory
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_PHYSINVTRYCYCLECOUNTING

**This CDS view provides information about physical inventory cycle counting in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYCYCLECOUNTING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `/scwm/pi_cc_peri.lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMPhysInventoryCountingCycle` | ✓ | |  | `/scwm/pi_cc_peri.ccind` | `CHAR(1)` | Cycle Counting Indicator |
| `EWMPInvCycCountingIntvlValue` |  | |  | `cc_int` | `NUMC(4)` | Cycle Counting Interval in Working Days |
| `EWMPInvCycCountingBufferValue` |  | |  | `cc_buf_int` | `NUMC(2)` | Cycle Counting Buffer in Working Days |
| `_Warehouse` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYCYCLECOUNTING')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYCYCLECOUNTING')/$value)*

```abap
@EndUserText.label: 'Physical Inventory Cycle Counting'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@ObjectModel.representativeKey: 'EWMPhysInventoryCountingCycle'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IEWMPINVCYCCNTG'
@Analytics.internalName:#LOCAL
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
             #SQL_DATA_SOURCE,
             #CDS_MODELING_DATA_SOURCE,
             #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION  
@Metadata.ignorePropagatedAnnotations:true 
define view entity I_EWM_PhysInvtryCycleCounting
  as select from /scwm/pi_cc_peri
  association [0..1] to I_EWM_WarehouseNumber_2        as _Warehouse     on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse

{
  @ObjectModel.foreignKey.association: '_Warehouse'
  key /scwm/pi_cc_peri.lgnum as EWMWarehouse,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
  key /scwm/pi_cc_peri.ccind as EWMPhysInventoryCountingCycle,

      cc_int                 as EWMPInvCycCountingIntvlValue,
      cc_buf_int             as EWMPInvCycCountingBufferValue,
      _Warehouse
}
```
