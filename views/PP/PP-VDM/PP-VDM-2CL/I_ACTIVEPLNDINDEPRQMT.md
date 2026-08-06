---
name: I_ACTIVEPLNDINDEPRQMT
description: Activeplndindeprqmt
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
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_ACTIVEPLNDINDEPRQMT

**Activeplndindeprqmt**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PlndIndepRqmtInternalID` | `pbim.PlndIndepRqmtInternalID` |
| `PlndIndepRqmtVersion` | `pbim.PlndIndepRqmtVersion` |
| `Product` | `pbim.Product` |
| `Plant` | `pbim.Plant` |
| `MRPArea` | `pbim.MRPArea` |
| `PlndIndepRqmtType` | `pbim.PlndIndepRqmtType` |
| `RequirementPlan` | `pbim.RequirementPlan` |
| `ExternalRequirementPlan` | `pbim.ExternalRequirementPlan` |
| `RequirementSegment` | `pbim.RequirementSegment` |
| `SalesOrder` | `pbim.SalesOrder` |
| `SalesOrderItem` | `pbim.SalesOrderItem` |
| `WBSElementInternalID` | `pbim.WBSElementInternalID` |
| `WBSElementInternalID_2` | `pbim.WBSElementInternalID_2` |
| `InventorySpecialStockType` | `pbim.InventorySpecialStockType` |
| `InventorySpecialStockValnType` | `pbim.InventorySpecialStockValnType` |
| `ConsumptionPosting` | `pbim.ConsumptionPosting` |
| `AccountAssignmentCategory` | `pbim.AccountAssignmentCategory` |
| `PlndIndepRqmtLastChgdDateTime` | `pbim.PlndIndepRqmtLastChgdDateTime` |
| `_ActivePlndIndepRqmtItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ActivePlndIndepRqmtItem` | `I_ActivePlndIndepRqmtItem` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IACTPIR'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION]
@ObjectModel.representativeKey: 'PlndIndepRqmtInternalID'
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Active Planned Independent Requirement'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK"]  } */
define view entity I_ActivePlndIndepRqmt
  as select from I_PlndIndepRqmtByIntKey as pbim
  -- to child
  association [0..*] to I_ActivePlndIndepRqmtItem as _ActivePlndIndepRqmtItem on $projection.PlndIndepRqmtInternalID = _ActivePlndIndepRqmtItem.PlndIndepRqmtInternalID

{
  key pbim.PlndIndepRqmtInternalID,

      pbim.PlndIndepRqmtVersion,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Product'
      @ObjectModel.sapObjectNodeTypeReference: 'Product'
      pbim.Product,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      @ObjectModel.sapObjectNodeTypeReference: 'Plant'
      pbim.Plant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPAreaVH', element: 'MRPArea' } } ]
      @ObjectModel.foreignKey.association: '_MRPArea'
      @ObjectModel.sapObjectNodeTypeReference: 'MRPArea'
      pbim.MRPArea,
      @ObjectModel.foreignKey.association: '_PlndIndepRqmtType'
      pbim.PlndIndepRqmtType,
      pbim.RequirementPlan,
      pbim.ExternalRequirementPlan,
      pbim.RequirementSegment,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      @ObjectModel.sapObjectNodeTypeReference: 'SalesOrder'
      pbim.SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      pbim.SalesOrderItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID_2'
      @ObjectModel.foreignKey.association: '_WBSElement'
      pbim.WBSElementInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElementBasic'
      pbim.WBSElementInternalID_2,       // no conv. exit
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      @ObjectModel.sapObjectNodeTypeReference: 'InventorySpecialStockType'
      pbim.InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
      pbim.InventorySpecialStockValnType,
      @ObjectModel.foreignKey.association: '_ConsumptionPosting'
      pbim.ConsumptionPosting,
      @ObjectModel.foreignKey.association: '_AccountAssignmentCategory'
      @ObjectModel.sapObjectNodeTypeReference: 'AccountAssignmentCategory'
      pbim.AccountAssignmentCategory,
      
      @Semantics.systemDateTime.lastChangedAt: true
      pbim.PlndIndepRqmtLastChgdDateTime,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ActivePlndIndepRqmtItem,
      pbim._Plant,
      pbim._Product,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductPlant2'
      pbim._ProductPlant,
      pbim._ProductPlant2,
      pbim._ProductMRPArea,
      pbim._MRPArea,
      pbim._PlndIndepRqmtType,
      pbim._SalesOrder,
      pbim._SalesOrderItem,
--    @API.element.releaseState: #DEPRECATED
--    @API.element.successor: '_WBSElementBasic'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasic'
      pbim._WBSElement,
      pbim._WBSElementBasic,
      pbim._InventorySpecialStockType,
      pbim._InventorySpecialStockValnType,
      pbim._ConsumptionPosting,
      pbim._AccountAssignmentCategory
}
where
      pbim.PlndIndepRqmtIsActive      = 'X'  -- only active ones
  and pbim.PlndIndepRqmtIsToBeDeleted = '';  -- and not deleted
```
