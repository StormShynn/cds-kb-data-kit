---
name: I_CAPACITYREQUIREMENT
description: Capacityrequirement
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
# I_CAPACITYREQUIREMENT

**Capacityrequirement**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CapacityRequirement` | `kbko.bedid` |
| `CapacityRequirementOrigin` | `cast(kbko.typkz as capacityrequirementorigin preserving type)` |
| `PlannedOrder` | `kbko.plnum` |
| `OrderID` | `afko.aufnr` |
| `OrderInternalID` | `cast(kbko.aufpl as pph_aufpl preserving type)` |
| `SalesOperationsPlanningOrder` | `kbko.safnr` |
| `BillOfOperationsType` | `kbko.plnty` |
| `BillOfOperationsGroup` | `kbko.plnnr` |
| `BillOfOperations` | `kbko.plnal` |
| `SchedulingType` | `cast(kbko.terkz as pph_termkz preserving type)` |
| `ScheduledBasicStartDate` | `kbko.gstrs` |
| `ScheduledBasicStartTime` | `kbko.gsuzs` |
| `ScheduledBasicEndDate` | `kbko.gltrs` |
| `ScheduledBasicEndTime` | `kbko.gluzs` |
| `LastScheduledDate` | `kbko.trmdt` |
| `BOOExplosionDate` | `kbko.plauf` |
| `_CapacityRequirementOrigin` | *Association* |
| `_PlannedOrder` | *Association* |
| `_Order` | *Association* |
| `_OrderInternalID` | *Association* |
| `_SalesOperationsPlanningOrder` | *Association* |
| `_BillOfOperationsType` | *Association* |
| `_BillOfOperationsGroup` | *Association* |
| `_BillOfOperations` | *Association* |
| `_SchedulingType` | *Association* |
| `_CapacityRequirementItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CapacityRequirementOrigin` | `I_CapacityRequirementOrigin` | [1..1] |
| `_PlannedOrder` | `I_PlannedOrder` | [0..1] |
| `_Order` | `I_LogisticsOrder` | [0..1] |
| `_OrderInternalID` | `I_OrderInternalID` | [0..1] |
| `_SalesOperationsPlanningOrder` | `I_SalesOperationsPlanningOrder` | [0..1] |
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [0..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [0..1] |
| `_BillOfOperations` | `I_BillOfOperations` | [0..1] |
| `_SchedulingType` | `I_SchedulingType` | [0..1] |
| `_CapacityRequirementItem` | `I_CapacityRequirementItem` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPCAPRQMT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'CapacityRequirement'
@ObjectModel.sapObjectNodeType.name: 'WorkOrderCapacityRequirement'
@ObjectModel.semanticKey: ['CapacityRequirement']
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Capacity Requirement Header'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CapacityRequirement
  as select from           kbko as kbko
    left outer to one join afko as afko on  kbko.aufpl = afko.aufpl
                                        and kbko.aufpl > '0000000000'

  association [1..1] to I_CapacityRequirementOrigin    as _CapacityRequirementOrigin    on  $projection.CapacityRequirementOrigin = _CapacityRequirementOrigin.CapacityRequirementOrigin
  association [0..1] to I_PlannedOrder                 as _PlannedOrder                 on  $projection.PlannedOrder = _PlannedOrder.PlannedOrder
  association [0..1] to I_LogisticsOrder               as _Order                        on  $projection.OrderID = _Order.OrderID
  association [0..1] to I_OrderInternalID              as _OrderInternalID              on  $projection.OrderInternalID = _OrderInternalID.OrderInternalID
  association [0..1] to I_SalesOperationsPlanningOrder as _SalesOperationsPlanningOrder on  $projection.SalesOperationsPlanningOrder= _SalesOperationsPlanningOrder.SalesOperationsPlanningOrder
  association [0..1] to I_BillOfOperationsType         as _BillOfOperationsType         on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
  association [0..1] to I_BillOfOperationsGroup        as _BillOfOperationsGroup        on  $projection.BillOfOperationsType  = _BillOfOperationsGroup.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup = _BillOfOperationsGroup.BillOfOperationsGroup
  association [0..1] to I_BillOfOperations             as _BillOfOperations             on  $projection.BillOfOperationsType  = _BillOfOperations.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup = _BillOfOperations.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperations      = _BillOfOperations.BillOfOperationsVariant
  association [0..1] to I_SchedulingType               as _SchedulingType               on  $projection.SchedulingType = _SchedulingType.SchedulingType
  -- to child
  association [1..*] to I_CapacityRequirementItem      as _CapacityRequirementItem      on  $projection.CapacityRequirement = _CapacityRequirementItem.CapacityRequirement

  {
    // Key
    key kbko.bedid as CapacityRequirement,

    // Assignments
    @ObjectModel.foreignKey.association: '_CapacityRequirementOrigin'
    @ObjectModel.sapObjectNodeTypeReference: 'CapacityRequirementOrigin'
    cast(kbko.typkz as capacityrequirementorigin preserving type) as CapacityRequirementOrigin,
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlannedOrderStdVH', element: 'PlannedOrder' } } ]
    @ObjectModel.foreignKey.association: '_PlannedOrder'
    @ObjectModel.sapObjectNodeTypeReference: 'PlannedOrder'
    kbko.plnum as PlannedOrder,
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_LogisticsOrderStdVH', element: 'OrderID' } } ]
    @ObjectModel.foreignKey.association: '_Order'
    afko.aufnr as OrderID,
    @ObjectModel.foreignKey.association: '_OrderInternalID'
    cast(kbko.aufpl as pph_aufpl preserving type)                 as OrderInternalID,
    @ObjectModel.foreignKey.association: '_SalesOperationsPlanningOrder'
    kbko.safnr as SalesOperationsPlanningOrder,
    @ObjectModel.foreignKey.association: '_BillOfOperationsType'
    kbko.plnty as BillOfOperationsType,
    @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
    kbko.plnnr as BillOfOperationsGroup,
    @ObjectModel.foreignKey.association: '_BillOfOperations'
    kbko.plnal as BillOfOperations,
    @ObjectModel.foreignKey.association: '_SchedulingType'
    @ObjectModel.sapObjectNodeTypeReference: 'SchedulingType'
    cast(kbko.terkz as pph_termkz preserving type)                as SchedulingType,

    // Dates and Times
    kbko.gstrs as ScheduledBasicStartDate,
    kbko.gsuzs as ScheduledBasicStartTime,
    kbko.gltrs as ScheduledBasicEndDate,
    kbko.gluzs as ScheduledBasicEndTime,
    kbko.trmdt as LastScheduledDate,
    kbko.plauf as BOOExplosionDate,

    // Associations
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _CapacityRequirementItem,
    _CapacityRequirementOrigin,
    _BillOfOperationsType,
    _BillOfOperationsGroup,
    _BillOfOperations,
    _SchedulingType,
    _PlannedOrder,
    _Order,
    _SalesOperationsPlanningOrder,
    @Consumption.hidden: true
    _OrderInternalID
  };
```
