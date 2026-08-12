---
name: I_MFGORDERSEQUENCE
description: "Mfgordersequence"
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
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDERSEQUENCE

**Mfgordersequence**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManufacturingOrder` | ✓ | |  | `cast(affl.OrderID as manufacturingorder preserving type)` |  |  |
| `ManufacturingOrderSequence` | ✓ | |  | `cast(affl.Sequence as manufacturingordersequence preserving type)` |  |  |
| `OrderInternalID` |  | |  |  |  |  |
| `SequenceInternalID` |  | |  |  |  |  |
| `MfgOrderSequenceText` |  | |  | `cast(affl.SequenceText as mfgordersequencetext preserving type)` |  |  |
| `Language` |  | |  |  |  |  |
| `MfgOrderSequenceBrnchOperation` |  | |  | `cast(vornr1.Operation as vornr1 preserving type)` |  |  |
| `MfgOrderSqncBranchOperation_2` |  | |  | `cast(vornr1.Operation_2 as vdm_vornr1 preserving type)` |  |  |
| `MfgOrderSequenceRetOperation` |  | |  | `cast(vornr2.Operation as vornr2 preserving type)` |  |  |
| `MfgOrderSqncReturnOperation_2` |  | |  | `cast(vornr2.Operation_2 as vdm_vornr2 preserving type)` |  |  |
| `ManufacturingOrderCategory` |  | |  | `cast(affl.OrderCategory as manufacturingordercategory preserving type)` |  |  |
| `ManufacturingOrderType` |  | |  | `cast(affl.OrderType as manufacturingordertype preserving type)` |  |  |
| `MfgOrderSequenceCategory` |  | |  | `SequenceCategory` |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `ReferenceSequence` |  | |  |  |  |  |
| `BillOfOperationsType` |  | |  |  |  |  |
| `BillOfOperations` |  | |  |  |  |  |
| `BillOfOperationsGroup` |  | |  |  |  |  |
| `BillOfOperationsVariant` |  | |  |  |  |  |
| `SequenceSchedulingAlignment` |  | |  |  |  |  |
| `ObjectInternalID` |  | |  |  |  |  |
| `BillOfOperationsUnit` |  | |  |  |  |  |
| `MinimumLotSizeQuantity` |  | |  |  |  |  |
| `MaximumLotSizeQuantity` |  | |  |  |  |  |
| `_MfgOrder` | | ✓ | | | | |
| `_MfgOrderCategory` | | ✓ | | | | |
| `_MfgOrderType` | | ✓ | | | | |
| `_ReferenceSequence` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsGroup2` | | ✓ | | | | |
| `_BillOfOperations` | | ✓ | | | | |
| `_BillOfOperations2` | | ✓ | | | | |
| `_ManufacturingOrder` | | ✓ | | | | |
| `_MfgOrderOperation` | | ✓ | | | | |
| `_MfgOrderSequenceLongText` | | ✓ | | | | |
| `_MfgOrderText` | | ✓ | | | | |
| `_ProductionPlantText` | | ✓ | | | | |
| `_StatusObjectText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MfgOrder` | `I_MfgOrder` | [1..1] |
| `_MfgOrderCategory` | `I_MfgOrderCategory` | [1..1] |
| `_MfgOrderType` | `I_MfgOrderType` | [1..1] |
| `_ReferenceSequence` | `I_MfgOrderSequence` | [0..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [0..1] |
| `_BillOfOperationsGroup2` | `I_BillOfOperationsGroup` | [0..1] |
| `_BillOfOperations` | `I_MfgBillOfOperations` | [0..1] |
| `_BillOfOperations2` | `I_MfgBillOfOperations` | [0..1] |
| `_ManufacturingOrder` | `I_ManufacturingOrder` | [1..1] |
| `_MfgOrderOperation` | `I_ManufacturingOrderOperation` | [1..*] |
| `_MfgOrderSequenceLongText` | `I_MfgOrderSequenceLongText` | [0..1] |
| `_MfgOrderText` | `I_ManufacturingOrder` | [1..1] |
| `_ProductionPlantText` | `I_Plant` | [1..1] |
| `_StatusObjectText` | `I_StatusObject` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMFGORDSEQ'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_LongText','_StatusObject', '_StatusObjectText']
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ManufacturingOrderSequence'
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderSequence'
@ObjectModel.semanticKey: ['ManufacturingOrder', 'ManufacturingOrderSequence']
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Manufacturing Order Sequence'

define view I_MfgOrderSequence
  as select from           I_OrderSequence       as affl
    left outer to one join I_OrderOperationBasic as vornr1 on  vornr1.OrderInternalID          = affl.OrderInternalID           // Branching Operation
                                                           and vornr1.OrderOperationInternalID = affl.BranchOperationInternalID
    left outer to one join I_OrderOperationBasic as vornr2 on  vornr2.OrderInternalID          = affl.OrderInternalID           // Returning Operation
                                                           and vornr2.OrderOperationInternalID = affl.ReturnOperationInternalID

  association [1..1] to I_MfgOrder              as _MfgOrder               on  $projection.ManufacturingOrder         = _MfgOrder.ManufacturingOrder
  association [1..1] to I_MfgOrderCategory      as _MfgOrderCategory       on  $projection.ManufacturingOrderCategory = _MfgOrderCategory.ManufacturingOrderCategory
  association [1..1] to I_MfgOrderType          as _MfgOrderType           on  $projection.ManufacturingOrderType     = _MfgOrderType.ManufacturingOrderType
  association [0..1] to I_MfgOrderSequence      as _ReferenceSequence      on  $projection.ManufacturingOrder = _ReferenceSequence.ManufacturingOrder
                                                                           and $projection.ReferenceSequence  = _ReferenceSequence.ManufacturingOrderSequence
  association [0..1] to I_BillOfOperationsGroup as _BillOfOperationsGroup  on  $projection.BillOfOperationsType  = _BillOfOperationsGroup.BillOfOperationsType
                                                                           and $projection.BillOfOperations      = _BillOfOperationsGroup.BillOfOperationsGroup
  association [0..1] to I_BillOfOperationsGroup as _BillOfOperationsGroup2 on  $projection.BillOfOperationsType  = _BillOfOperationsGroup2.BillOfOperationsType
                                                                           and $projection.BillOfOperationsGroup = _BillOfOperationsGroup2.BillOfOperationsGroup
  association [0..1] to I_MfgBillOfOperations   as _BillOfOperations       on  $projection.BillOfOperationsType    = _BillOfOperations.BillOfOperationsType
                                                                           and $projection.BillOfOperations        = _BillOfOperations.BillOfOperationsGroup
                                                                           and $projection.BillOfOperationsVariant = _BillOfOperations.BillOfOperationsVariant
  association [0..1] to I_MfgBillOfOperations   as _BillOfOperations2      on  $projection.BillOfOperationsType    = _BillOfOperations2.BillOfOperationsType
                                                                           and $projection.BillOfOperationsGroup   = _BillOfOperations2.BillOfOperationsGroup
                                                                           and $projection.BillOfOperationsVariant = _BillOfOperations2.BillOfOperationsVariant

  -- to root:  Header
  association [1..1] to I_ManufacturingOrder          as _ManufacturingOrder       on  $projection.ManufacturingOrder = _ManufacturingOrder.ManufacturingOrder
  -- to child: Operations
  association [1..*] to I_ManufacturingOrderOperation as _MfgOrderOperation        on  $projection.OrderInternalID    = _MfgOrderOperation.MfgOrderInternalID
  -- to child: Longtext
  association [0..1] to I_MfgOrderSequenceLongText    as _MfgOrderSequenceLongText on  $projection.OrderInternalID    = _MfgOrderSequenceLongText.OrderInternalID
                                                                                   and $projection.SequenceInternalID = _MfgOrderSequenceLongText.SequenceInternalID
                                                                                   and $projection.Language           = _MfgOrderSequenceLongText.LongTextLanguage
  -- start new associations for full coverage of text relations
  association [1..1] to I_ManufacturingOrder    as _MfgOrderText           on  $projection.ManufacturingOrder = _MfgOrderText.ManufacturingOrder
  association [1..1] to I_Plant                 as _ProductionPlantText    on  $projection.ProductionPlant = _ProductionPlantText.Plant
  association [1..1] to I_StatusObject          as _StatusObjectText       on  $projection.ObjectInternalID = _StatusObjectText.StatusObject  
  {
    // Semantical key
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
    @ObjectModel.foreignKey.association: '_MfgOrder'
    key cast(affl.OrderID   as manufacturingorder         preserving type) as ManufacturingOrder,
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderSequenceStdVH', element: 'ManufacturingOrderSequence' } } ]
    @ObjectModel.text.element: ['MfgOrderSequenceText']
    key cast(affl.Sequence  as manufacturingordersequence preserving type) as ManufacturingOrderSequence,

    // Technical Key
    @ObjectModel.foreignKey.association: '_OrderInternalID'
    affl.OrderInternalID                                                   as OrderInternalID,
    affl.SequenceInternalID                                                as SequenceInternalID,

    // Short Text
    @Semantics.text: true
    cast(affl.SequenceText  as mfgordersequencetext preserving type)       as MfgOrderSequenceText,
    @ObjectModel.foreignKey.association: '_Language'
    affl.Language                                                          as Language,

    // Branch and Return Operation
    @API.element.releaseState: #DEPRECATED // operation field has conversion exit
    @API.element.successor: 'MfgOrderSqncBranchOperation_2'
    cast(vornr1.Operation   as vornr1 preserving type)                     as MfgOrderSequenceBrnchOperation,
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrdOpBySemanticKeyStdVH', element: 'ManufacturingOrderOperation' } } ]
    cast(vornr1.Operation_2 as vdm_vornr1 preserving type)                 as MfgOrderSqncBranchOperation_2, // no conv. exit
    @API.element.releaseState: #DEPRECATED // operation field has conversion exit
    @API.element.successor: 'MfgOrderSqncReturnOperation_2'
    cast(vornr2.Operation   as vornr2 preserving type)                     as MfgOrderSequenceRetOperation,
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrdOpBySemanticKeyStdVH', element: 'ManufacturingOrderOperation' } } ]
    cast(vornr2.Operation_2 as vdm_vornr2 preserving type)                 as MfgOrderSqncReturnOperation_2, // no conv. exit

    // Assignments
    @ObjectModel.foreignKey.association: '_MfgOrderCategory'
    cast(affl.OrderCategory as manufacturingordercategory preserving type) as ManufacturingOrderCategory,
    @ObjectModel.foreignKey.association: '_MfgOrderType'
    cast(affl.OrderType     as manufacturingordertype preserving type)     as ManufacturingOrderType,
    @ObjectModel.foreignKey.association: '_SequenceCategory'
    affl.SequenceCategory                                                  as MfgOrderSequenceCategory,
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
    @ObjectModel.foreignKey.association: '_Plant'
    affl.ProductionPlant,
--  @ObjectModel.foreignKey.association: '_ReferenceSequence'    
    affl.ReferenceSequence,
    @ObjectModel.foreignKey.association: '_BillOfOperationsType'
    affl.BillOfOperationsType,
    @API.element.releaseState: #DEPRECATED // default data element change -> deprecated to avoid RTT2 error in ATC
    @API.element.successor: 'BillOfOperationsGroup'
    @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
    affl.BillOfOperations,
    @ObjectModel.foreignKey.association: '_BillOfOperationsGroup2'
    affl.BillOfOperationsGroup,
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgBillOfOperationsStdVH', element: 'BillOfOperationsVariant' } } ]
    @ObjectModel.foreignKey.association: '_BillOfOperationsVariant'
    affl.BillOfOperationsVariant,
    @ObjectModel.foreignKey.association: '_SequenceSchedulingAlignment'
    affl.SequenceSchedulingAlignment,
    @ObjectModel.foreignKey.association: '_StatusObject'
    affl.ObjectInternalID,

    // Quantities and UoM
    @ObjectModel.foreignKey.association: '_BillOfOperationsUnit'
    @Semantics.unitOfMeasure: true
    affl.BillOfOperationsUnit,
    @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
    @Aggregation.default: #MIN
    affl.MinimumLotSizeQuantity,
    @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
    @Aggregation.default: #MAX
    affl.MaximumLotSizeQuantity,

    // Associations
    @VDM.lifecycle.status: #DEPRECATED   // View I_MfgOrder is deprecated itself
    @VDM.lifecycle.successor: '_ManufacturingOrder'
    _MfgOrder,
    @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
    _ManufacturingOrder,
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _MfgOrderOperation,
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _MfgOrderSequenceLongText,
    _MfgOrderCategory,
    _MfgOrderType,
    _ReferenceSequence,
    affl._StatusObject,
    @Consumption.hidden: true
    affl._OrderInternalID,
    affl._SequenceCategory,
    affl._SequenceSchedulingAlignment, 
    affl._Plant,
    affl._BillOfOperationsType,
    @API.element.releaseState: #DEPRECATED
    @API.element.successor: '_BillOfOperations2'
    _BillOfOperationsGroup,
    _BillOfOperationsGroup2,
    @API.element.releaseState: #DEPRECATED
    @API.element.successor: '_BillOfOperations2'
    _BillOfOperations,
    _BillOfOperations2,
    affl._BillOfOperationsVariant,
    affl._BillOfOperationsUnit,
    @VDM.lifecycle.status: #DEPRECATED
    @VDM.lifecycle.successor: '_MfgOrderSequenceLongText'
    affl._LongText,
    affl._Language,

    // Text relations
    _MfgOrderText,
    _ProductionPlantText,    
    _StatusObjectText
  }
  where ( affl.OrderCategory = '10' or //Manufacturing orders only
          affl.OrderCategory = '40' );
```
