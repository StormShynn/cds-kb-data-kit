---
name: I_EWM_PHYSINVTRYPRIORITY
description: "This CDS view provides information about physical inventory priority in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYPRIORITY')/$value
semantic_en: "This CDS view provides information about physical inventory priority in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Physical Inventory Priority — CDS view giao diện dựa trên Warehouse Physical Inventory Priority."
keywords:
  - "warehouse"
  - "physical"
  - "inventory"
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
---
# I_EWM_PHYSINVTRYPRIORITY

**This CDS view provides information about physical inventory priority in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYPRIORITY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMPhysicalInventoryPriority` | ✓ | |  | `prio` | `NUMC(1)` | Priority |
| `_Warehouse` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_Text` | `I_EWM_PInvPriorityText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYPRIORITY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYPRIORITY')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Physical Inventory Priority'
@Analytics.internalName:#LOCAL
@VDM.viewType:#BASIC
@Analytics.dataCategory: #DIMENSION
@ObjectModel.representativeKey: 'EWMPhysicalInventoryPriority'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
             #SQL_DATA_SOURCE,
             #CDS_MODELING_DATA_SOURCE,
             #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'WhsePhysicalInventoryPriority'
define view entity I_EWM_PhysInvtryPriority
  as select from /scwm/picust_pri
  association [0..1] to I_EWM_WarehouseNumber_2 as _Warehouse on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..*] to I_EWM_PInvPriorityText  as _Text      on  $projection.EWMWarehouse                 = _Text.EWMWarehouse
                                                              and $projection.EWMPhysicalInventoryPriority = _Text.EWMPhysicalInventoryPriority
{
      @ObjectModel.foreignKey.association: '_Warehouse'
  key lgnum as EWMWarehouse,
      _Warehouse,
      @ObjectModel.text.association: '_Text'
  key prio  as EWMPhysicalInventoryPriority,

      _Text


}
```
