---
name: I_EWM_PHYSINVTRYREASON
description: "This CDS view provides information about physical inventory reason in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYREASON')/$value
semantic_en: "This CDS view provides information about physical inventory reason in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Physical Inventory Reason — CDS view giao diện dựa trên Warehouse Physical Inventory Reason."
keywords:
  - "warehouse"
  - "physical"
  - "inventory"
  - "reason"
  - "phys"
  - "invtry"
  - "priority"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - inventory
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - bo:salesorder
---
# I_EWM_PHYSINVTRYREASON

**This CDS view provides information about physical inventory reason in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMPhysInvtryReason` | ✓ | |  | `reason` | `CHAR(4)` | Reason |
| `EWMPhysicalInventoryPriority` |  | |  | `prio` | `NUMC(1)` | Priority |
| `_Warehouse` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_Text` | `I_EWM_PInvReasonText_2` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYREASON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYREASON')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Physical Inventory Reason'
@Analytics.internalName:#LOCAL
@VDM.viewType:#BASIC
//@ObjectModel.dataCategory:#VALUE_HELP
//@Search.searchable: true
//@Consumption.ranked:true
@Analytics.dataCategory: #DIMENSION
@ObjectModel.representativeKey: 'EWMPhysInvtryReason'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
             #SQL_DATA_SOURCE,
             #CDS_MODELING_DATA_SOURCE,
             #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'WhsePhysicalInventoryReason'
define view entity I_EWM_PhysInvtryReason
  as select from /scwm/picust_rea
  association [0..1] to I_EWM_WarehouseNumber_2 as _Warehouse on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..*] to I_EWM_PInvReasonText_2  as _Text      on  $projection.EWMWarehouse        = _Text.EWMWarehouse
                                                              and $projection.EWMPhysInvtryReason = _Text.EWMPhysInvtryReason

{
      @ObjectModel.foreignKey.association: '_Warehouse'
  key lgnum  as EWMWarehouse,
      _Warehouse,
//      @Search.defaultSearchElement: true
//      @Search.fuzzinessThreshold: 0.8
//      @Search.ranking: #HIGH      
      @ObjectModel.text.association: '_Text'
  key reason as EWMPhysInvtryReason,
      prio   as EWMPhysicalInventoryPriority,

      _Text
}
```
