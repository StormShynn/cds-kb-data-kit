---
name: I_ACTIVEPLNDINDEPRQMT
description: "Activeplndindeprqmt"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlndIndepRqmtInternalID` | ✓ | |  |  |  |  |
| `PlndIndepRqmtVersion` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `MRPArea` |  | |  |  |  |  |
| `PlndIndepRqmtType` |  | |  |  |  |  |
| `RequirementPlan` |  | |  |  |  |  |
| `ExternalRequirementPlan` |  | |  |  |  |  |
| `RequirementSegment` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WBSElementInternalID_2` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `InventorySpecialStockValnType` |  | |  |  |  |  |
| `ConsumptionPosting` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `PlndIndepRqmtLastChgdDateTime` |  | |  |  |  |  |
| `_ActivePlndIndepRqmtItem` | | ✓ | | | | |

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
