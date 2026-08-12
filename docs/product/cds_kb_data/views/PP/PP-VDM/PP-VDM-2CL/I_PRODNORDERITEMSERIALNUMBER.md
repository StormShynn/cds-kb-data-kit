---
name: I_PRODNORDERITEMSERIALNUMBER
description: "PRODNORDERITEMSerial Number"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - serial-number
  - item-level
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PRODNORDERITEMSERIALNUMBER

**PRODNORDERITEMSerial Number**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionOrder` | ✓ | |  |  |  |  |
| `ProductionOrderItem` | ✓ | |  |  |  |  |
| `SerialNumber` | ✓ | |  | `cast(objk.SerialNumber as gernr preserving type)` |  |  |
| `MaintenanceItemObjectList` |  | |  |  |  |  |
| `MaintenanceItemObject` |  | |  |  |  |  |
| `Equipment` |  | |  | `cast(objk.Equipment as equnr preserving type)` |  |  |
| `Product` |  | |  |  |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `PlanningPlant` |  | |  |  |  |  |
| `ProductionOrderType` |  | |  |  |  |  |
| `SerialNumberProfile` |  | |  |  |  |  |
| `SerialNumberAssignmentDate` |  | |  |  |  |  |
| `_ProductionOrder` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_EquipmentText` | | ✓ | | | | |
| `_ProductionOrderItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionOrder` | `I_ProductionOrder` | [1..1] |
| `_Equipment` | `I_Equipment` | [1..1] |
| `_EquipmentText` | `I_EquipmentText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IPRODNORDITMSERN'
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderSerialNumber'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Serial Number of Production Order Item'

define view entity I_ProdnOrderItemSerialNumber
    as select from I_ProductionOrderItem        as item
      inner join ( I_MaintObjListLogisticsOrder as sern
        inner join I_MaintenanceItemObject      as objk on  objk.MaintenanceItemObjectList = sern.MaintenanceObjectList )
                                                        on  sern.LogisticsOrder = item.ProductionOrder
                                                        and sern.OrderItem      = item.ProductionOrderItem
                       
     association to parent I_ProductionOrderItem as _ProductionOrderItem on  $projection.ProductionOrder     = _ProductionOrderItem.ProductionOrder
                                                                         and $projection.ProductionOrderItem = _ProductionOrderItem.ProductionOrderItem
     association [1..1] to I_ProductionOrder     as _ProductionOrder     on  $projection.ProductionOrder = _ProductionOrder.ProductionOrder
     association [1..1] to I_Equipment           as _Equipment           on  $projection.Equipment = _Equipment.Equipment  
 
--   new associations for full coverage of text relations
     association [0..*] to I_EquipmentText       as _EquipmentText       on  $projection.Equipment = _EquipmentText.Equipment

{
      // Key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderStdVH', element: 'ProductionOrder' } } ]
      @ObjectModel.foreignKey.association: '_ProductionOrder'
  key item.ProductionOrder,
  key item.ProductionOrderItem,
      -- representative key
  key cast(objk.SerialNumber as gernr preserving type) as SerialNumber,

      // Technical Key
      @Consumption.hidden: true
      objk.MaintenanceItemObjectList,    //OBKNR
      @Consumption.hidden: true
      objk.MaintenanceItemObject,        //OBZAE

      // Assignments
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_EquipmentStdVH', element: 'Equipment' } } ]
      @ObjectModel.foreignKey.association: '_Equipment'
      @ObjectModel.text.association: '_EquipmentText'
      cast(objk.Equipment as equnr preserving type) as Equipment,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Product'
      @ObjectModel.text.association: '_ProductText'
      item.Product,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      item.ProductionPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_PlanningPlant'
      item.PlanningPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderTypeStdVH', element: 'ProductionOrderType' } } ]
      @ObjectModel.foreignKey.association: '_ProductionOrderType'
      item.ProductionOrderType,
--    @ObjectModel.foreignKey.association: '_SerialNumberProfile'
      item.SerialNumberProfile,

      // Date
      @Semantics.businessDate.at: true
      sern.SerialNumberAssignmentDate,

      // Association,
      _ProductionOrder,
      _ProductionOrderItem,
      _Equipment,
      item._ProductionOrderType,
      item._Product,
      item._ProductionPlant,
      item._PlanningPlant,
      item._SerialNumberProfile,
      -- New text relations
      _EquipmentText,
      item._ProductText,
      item._ProductionPlantText,
      item._PlanningPlantText
};
```
