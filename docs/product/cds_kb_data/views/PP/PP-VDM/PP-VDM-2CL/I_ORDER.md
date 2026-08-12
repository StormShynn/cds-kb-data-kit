---
name: I_ORDER
description: "Order"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_ORDER

**Order**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderID` | ✓ | |  |  |  |  |
| `OrderCategory` |  | |  |  |  |  |
| `OrderType` |  | |  |  |  |  |
| `OrderInternalID` |  | |  |  |  |  |
| `OrderDescription` |  | |  |  |  |  |
| `OrderHasLongText` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `MRPController` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `ObjectInternalID` |  | |  |  |  |  |
| `IsStatisticalOrder` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `_PlantText` | | ✓ | | | | |
| `_CompanyCodeText` | | ✓ | | | | |
| `_ControllingAreaText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_LogisticsOrder` | [1..1] |
| `_PlantText` | `I_Plant` | [1..1] |
| `_CompanyCodeText` | `I_CompanyCode` | [0..1] |
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IORDER'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'OrderID'
@ObjectModel.semanticKey: ['OrderID']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Order Header'
// basic view for existence check on orders of any category (AUFTYP); 
// details on orders are provided e.g. by basic views I_LogisticsOrder or I_InternalOrder        

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_Order
  as select from           I_OrderBasic          as aufk
    left outer to one join I_LogisticsOrderBasic as afko on afko.OrderID = aufk.OrderID

  association [1..1] to E_LogisticsOrder as _Extension            on $projection.OrderID = _Extension.OrderID

  // Text relations
  association [1..1] to I_Plant           as _PlantText           on  $projection.Plant = _PlantText.Plant
  association [0..1] to I_CompanyCode     as _CompanyCodeText     on  $projection.CompanyCode = _CompanyCodeText.CompanyCode
  association [0..1] to I_ControllingArea as _ControllingAreaText on  $projection.ControllingArea = _ControllingAreaText.ControllingArea 
  
{
  // Key
  @ObjectModel.hierarchy.association: '_OrderHierarchyNode'
  @ObjectModel.text.element: ['OrderDescription']
  @Search:{
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #HIGH
  }
  key aufk.OrderID,

  // Category and Type
  @ObjectModel.foreignKey.association: '_OrderCategory'
  @Search:{
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  aufk.OrderCategory,
  @ObjectModel.foreignKey.association: '_OrderType'
  @Search:{
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  aufk.OrderType,

  // Internal ID
  @ObjectModel.foreignKey.association: '_OrderInternalID'
  @Search:{
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  afko.OrderInternalID,

  // Text
  @Semantics.text: true
  @Search:{
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  aufk.OrderDescription,
  aufk.OrderHasLongText,

  // Additionals
  @Consumption.valueHelpDefinition: [ { 
    entity: { name: 'I_PlantStdVH', 
    element: 'Plant' } 
  } ]
  @Search:{
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  aufk.Plant,

  @Search:{
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  afko.MRPController,

  @Consumption.valueHelpDefinition: [ { 
    entity: { name: 'I_ControllingAreaStdVH', 
    element: 'ControllingArea' } 
  } ]
  @Search:{
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  aufk.ControllingArea,

  @Consumption.valueHelpDefinition: [ { 
    entity: { name: 'I_CompanyCodeStdVH', 
    element: 'CompanyCode' } 
  } ]
  @Search:{
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  aufk.CompanyCode,

  @Consumption.valueHelpDefinition: [ { 
    entity: { name: 'I_ProfitCenterStdVH', 
    element: 'ProfitCenter' } 
  } ]
  @Search:{
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  aufk.ProfitCenter,

  // Admin
  @Semantics.systemDate.createdAt: true
  aufk.CreationDate,
  @Semantics.systemTime.createdAt: true
  aufk.CreationTime,
  @Semantics.systemDate.lastChangedAt: true
  aufk.LastChangeDate,
  @Semantics.systemTime.lastChangedAt: true
  aufk.LastChangeTime,


  aufk.ObjectInternalID,
  aufk.IsStatisticalOrder,
  aufk.IsMarkedForDeletion,

  // Associations
  aufk._OrderCategory,
  aufk._OrderType,
  afko._OrderInternalID,
  aufk._OrderHierarchyNode,

  // Text relations
  _PlantText,
  _CompanyCodeText,
  _ControllingAreaText
};
```
