---
name: I_MFGORDERITEMSERIALNUMBER
description: MFGORDERITEMSerial Number
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
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
# I_MFGORDERITEMSERIALNUMBER

**MFGORDERITEMSerial Number**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ManufacturingOrder` | `item.ManufacturingOrder` |
| key `ManufacturingOrderItem` | `item.ManufacturingOrderItem` |
| key `SerialNumber` | `cast(objk.SerialNumber as gernr preserving type)` |
| `MaintenanceItemObjectList` | `objk.MaintenanceItemObjectList` |
| `MaintenanceItemObject` | `objk.MaintenanceItemObject` |
| `Equipment` | `objk.Equipment` |
| `Equipment_2` | `cast(objk.Equipment as equnr preserving type)` |
| `Product` | `item.Product` |
| `ProductionPlant` | `item.ProductionPlant` |
| `PlanningPlant` | `item.PlanningPlant` |
| `MRPController` | `item.MRPController` |
| `ProductionSupervisor` | `item.ProductionSupervisor` |
| `ManufacturingOrderCategory` | `item.ManufacturingOrderCategory` |
| `ManufacturingOrderType` | `item.ManufacturingOrderType` |
| `SerialNumberProfile` | `item.SerialNumberAssgmtProfile` |
| `DocumentDate` | `sern.SerialNumberAssignmentDate` |
| `_MfgOrderItem` | *Association* |
| `_Equipment` | *Association* |
| `_Equipment_2` | *Association* |
| `_EquipmentText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MfgOrderItem` | `I_ManufacturingOrderItem` | [1..1] |
| `_Equipment` | `I_Equipment` | [1..1] |
| `_Equipment_2` | `I_Equipment` | [1..1] |
| `_EquipmentText` | `I_EquipmentText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_MRPController', '_ProductionSupervisor']
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPPMFGORDITMSERN'
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION]
@ObjectModel.representativeKey: 'SerialNumber'
@ObjectModel.semanticKey: ['ManufacturingOrder', 'ManufacturingOrderItem', 'SerialNumber']
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Manufacturing Order Item Serial Number'

define view entity I_MfgOrderItemSerialNumber
  as select from I_ManufacturingOrderItem     as item
    inner join ( I_MaintObjListLogisticsOrder as sern
      inner join I_MaintenanceItemObject      as objk on  objk.MaintenanceItemObjectList = sern.MaintenanceObjectList )
                                                      on  sern.LogisticsOrder = item.ManufacturingOrder
                                                      and sern.OrderItem      = item.ManufacturingOrderItem
                                                 
   association [1..1] to I_ManufacturingOrderItem as _MfgOrderItem  on  $projection.ManufacturingOrder     = _MfgOrderItem.ManufacturingOrder
                                                                    and $projection.ManufacturingOrderItem = _MfgOrderItem.ManufacturingOrderItem
   association [1..1] to I_Equipment              as _Equipment     on  $projection.Equipment              = _Equipment.Equipment   // deprecated
   association [1..1] to I_Equipment              as _Equipment_2   on  $projection.Equipment_2            = _Equipment_2.Equipment                                        
-- start new associations for full coverage of text relations
   association [0..*] to I_EquipmentText          as _EquipmentText on  $projection.Equipment_2 = _EquipmentText.Equipment
-- end new associations for full coverage of text relations
{
      // Key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrder'
  key item.ManufacturingOrder,
      @ObjectModel.foreignKey.association: '_MfgOrderItem'
  key item.ManufacturingOrderItem,
      -- representative key
  key cast(objk.SerialNumber as gernr preserving type) as SerialNumber,

      // Technical Key  
      objk.MaintenanceItemObjectList,    //OBKNR
      objk.MaintenanceItemObject,        //OBZAE

      // Assignments
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'Equipment_2'
      @ObjectModel.foreignKey.association: '_Equipment'
      objk.Equipment,                                                  // w/o conv. exit
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_EquipmentStdVH', element: 'Equipment' } } ]
      @ObjectModel.foreignKey.association: '_Equipment_2'
      @ObjectModel.text.association: '_EquipmentText'
      cast(objk.Equipment as equnr preserving type)    as Equipment_2, // with conv. exit     
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Product'
      @ObjectModel.text.association: '_ProductText'
      item.Product,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      item.ProductionPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_MRPPlant'
      item.PlanningPlant,
      @ObjectModel.foreignKey.association: '_MRPController'
      item.MRPController,
      @ObjectModel.foreignKey.association: '_ProductionSupervisor'
      item.ProductionSupervisor,
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      item.ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_MfgOrderType'
      item.ManufacturingOrderType,
--    @ObjectModel.foreignKey.association: '_SerialNumberProfile'
      item.SerialNumberAssgmtProfile                   as SerialNumberProfile,

      // Date
      @Semantics.businessDate.at: true
      sern.SerialNumberAssignmentDate                  as DocumentDate,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      item._MfgOrder,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _MfgOrderItem,
      item._MfgOrderCategory,
      item._MfgOrderType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Equipment_2'
      _Equipment,
      _Equipment_2,
      item._Product,
      item._ProductionPlant,
      item._ProductionSupervisor,
      item._MRPController,
      item._MRPPlant,
      item._SerialNumberProfile,
      
      // Text relations
      _EquipmentText,
      item._ProductText,
      item._ProductionPlantText,
      item._PlanningPlantText
};
```
