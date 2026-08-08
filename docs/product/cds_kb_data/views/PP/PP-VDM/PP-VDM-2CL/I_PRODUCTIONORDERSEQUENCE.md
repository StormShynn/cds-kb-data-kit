---
name: I_PRODUCTIONORDERSEQUENCE
description: "Production OrderSEQUENCE"
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
  - product
  - production-order
  - component:PP-VDM-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDERSEQUENCE

**Production OrderSEQUENCE**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionOrder` | ✓ | |  | `cast(affl.OrderID as vdm_manufacturingorder preserving type)` |  |  |
| `ProductionOrderSequence` | ✓ | |  | `cast(affl.Sequence as vdm_prodnordersequence preserving type)` |  |  |
| `OrderInternalID` |  | |  |  |  |  |
| `SequenceInternalID` |  | |  |  |  |  |
| `SequenceCategory` |  | |  |  |  |  |
| `ProductionOrderType` |  | |  | `cast(affl.OrderType as vdm_prodnordertype preserving type)` |  |  |
| `ProductionOrderSequenceText` |  | |  | `cast(affl.SequenceText as vdm_flgtext preserving type)` |  |  |
| `SequenceHasLongText` |  | |  |  |  |  |
| `LongTextLanguage` |  | |  | `cast(affl.Language as pph_longtextlang preserving type)` |  |  |
| `SequenceBranchOperation` |  | |  | `cast(vornr1.Operation_2 as vdm_vornr1 preserving type)` |  |  |
| `SequenceReturnOperation` |  | |  | `cast(vornr2.Operation_2 as vdm_vornr2 preserving type)` |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `BillOfOperationsType` |  | |  |  |  |  |
| `BillOfOperationsGroup` |  | |  |  |  |  |
| `BillOfOperationsVariant` |  | |  | `BillOfOperations` |  |  |
| `BillOfOperationsSequence` |  | |  | `ReferenceSequence` |  |  |
| `SequenceSchedulingAlignment` |  | |  |  |  |  |
| `ObjectInternalID` |  | |  |  |  |  |
| `BillOfOperationsUnit` |  | |  |  |  |  |
| `MinimumLotSizeQuantity` |  | |  |  |  |  |
| `MaximumLotSizeQuantity` |  | |  |  |  |  |
| `_SequenceInternalID` |  | |  | `_OrderSequence` |  |  |
| `_ProductionOrderType` | | ✓ | | | | |
| `_BillOfOperationsVariant` | | ✓ | | | | |
| `_BillOfOperationsSequence` | | ✓ | | | | |
| `_StatusObject` | | ✓ | | | | |
| `_ProductionOrderText` | | ✓ | | | | |
| `_ProductionPlantText` | | ✓ | | | | |
| `_StatusObjectText` | | ✓ | | | | |
| `_ProductionOrderHeader` | | ✓ | | | | |
| `_ProductionOrderOperation` | | ✓ | | | | |
| `_LongText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionOrderType` | `I_ProductionOrderType` | [1..1] |
| `_BillOfOperationsVariant` | `I_MfgBillOfOperations` | [0..1] |
| `_BillOfOperationsSequence` | `I_MfgBillOfOperationsSequence` | [0..1] |
| `_StatusObject` | `I_StatusObject` | [1..1] |
| `_ProductionOrderText` | `I_ProductionOrder` | [1..1] |
| `_ProductionPlantText` | `I_Plant` | [1..1] |
| `_StatusObjectText` | `I_StatusObject` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_StatusObject', '_StatusObjectText']
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IPRODNORDERSEQ'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderSequence'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Production Order Sequence'

define view entity I_ProductionOrderSequence
  as select from           I_OrderSequenceBySemKey as affl
    left outer to one join I_OrderOperationBasic   as vornr1 on  vornr1.OrderInternalID          = affl.OrderInternalID           // Branching Operation
                                                             and vornr1.OrderOperationInternalID = affl.BranchOperationInternalID
    left outer to one join I_OrderOperationBasic   as vornr2 on  vornr2.OrderInternalID          = affl.OrderInternalID           // Returning Operation
                                                             and vornr2.OrderOperationInternalID = affl.ReturnOperationInternalID                   


  association [1..1] to I_ProductionOrderType         as _ProductionOrderType      on  $projection.ProductionOrderType = _ProductionOrderType.ProductionOrderType
  association [0..1] to I_MfgBillOfOperations         as _BillOfOperationsVariant  on  $projection.BillOfOperationsType    = _BillOfOperationsVariant.BillOfOperationsType
                                                                                   and $projection.BillOfOperationsGroup   = _BillOfOperationsVariant.BillOfOperationsGroup
                                                                                   and $projection.BillOfOperationsVariant = _BillOfOperationsVariant.BillOfOperationsVariant
  association [0..1] to I_MfgBillOfOperationsSequence as _BillOfOperationsSequence on  $projection.BillOfOperationsType      = _BillOfOperationsSequence.BillOfOperationsType
                                                                                   and $projection.BillOfOperationsGroup     = _BillOfOperationsSequence.BillOfOperationsGroup
                                                                                   and $projection.BillOfOperationsVariant   = _BillOfOperationsSequence.BillOfOperationsVariant
                                                                                   and $projection.BillOfOperationsSequence  = _BillOfOperationsSequence.BillOfOperationsSequence
  association [1..1] to I_StatusObject                as _StatusObject             on  $projection.ObjectInternalID = _StatusObject.StatusObject

  // SOT relations
  association to parent I_ProductionOrder             as _ProductionOrderHeader    on  $projection.ProductionOrder = _ProductionOrderHeader.ProductionOrder
  composition [0..*] of I_ProductionOrderOperation_2  as _ProductionOrderOperation
  composition [0..*] of I_ProdnOrderSequenceLongText  as _LongText

  -- start new associations for full coverage of text relations
  association [1..1] to I_ProductionOrder             as _ProductionOrderText      on  $projection.ProductionOrder = _ProductionOrderText.ProductionOrder
  association [1..1] to I_Plant                       as _ProductionPlantText      on  $projection.ProductionPlant = _ProductionPlantText.Plant
  association [1..1] to I_StatusObject                as _StatusObjectText         on  $projection.ObjectInternalID = _StatusObjectText.StatusObject

  {
    // Semantic key
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderStdVH', element: 'ProductionOrder' } } ]
    @ObjectModel.foreignKey.association: '_ProductionOrderHeader'
    key cast(affl.OrderID  as vdm_manufacturingorder preserving type) as ProductionOrder,
    @ObjectModel.text.element: ['ProductionOrderSequenceText']
    key cast(affl.Sequence as vdm_prodnordersequence preserving type) as ProductionOrderSequence,

    // Technical Key
    @ObjectModel.foreignKey.association: '_OrderInternalID'
    affl.OrderInternalID,
    @ObjectModel.foreignKey.association: '_SequenceInternalID' 
    @ObjectModel.text.element: ['ProductionOrderSequenceText']
    affl.SequenceInternalID,

    // Category and Type
    @ObjectModel.foreignKey.association: '_SequenceCategory'
    affl.SequenceCategory,
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderTypeStdVH', element: 'ProductionOrderType' } } ]
    @ObjectModel.foreignKey.association: '_ProductionOrderType'
    cast(affl.OrderType     as vdm_prodnordertype preserving type)     as ProductionOrderType,

    // Short Text
    @Semantics.text: true
    cast(affl.SequenceText  as vdm_flgtext preserving type)           as ProductionOrderSequenceText,
    affl.SequenceHasLongText,
    @ObjectModel.foreignKey.association: '_Language'
    cast(affl.Language      as pph_longtextlang preserving type)      as LongTextLanguage,

    // Branch and Return Operation
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderOperationVH', element: 'ProductionOrderOperation' } } ]
    cast(vornr1.Operation_2 as vdm_vornr1 preserving type)            as SequenceBranchOperation,
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderOperationVH', element: 'ProductionOrderOperation' } } ]
    cast(vornr2.Operation_2 as vdm_vornr2 preserving type)            as SequenceReturnOperation,

    // Assignments
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
    @ObjectModel.foreignKey.association: '_Plant'
    affl.ProductionPlant,
    @ObjectModel.foreignKey.association: '_BillOfOperationsType'
    affl.BillOfOperationsType,
    @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
    affl.BillOfOperationsGroup,
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgBillOfOperationsStdVH', element: 'BillOfOperationsVariant' } } ]
    @ObjectModel.foreignKey.association: '_BillOfOperationsVariant'
    affl.BillOfOperations  as BillOfOperationsVariant,
    @ObjectModel.foreignKey.association: '_BillOfOperationsSequence'    
    affl.ReferenceSequence as BillOfOperationsSequence,
    @ObjectModel.foreignKey.association: '_SequenceSchedulingAlignment'  
    affl.SequenceSchedulingAlignment,
    @ObjectModel.foreignKey.association: '_StatusObject'
    affl.ObjectInternalID,

    // Quantities and UoM
    @ObjectModel.foreignKey.association: '_BillOfOperationsUnit'
    affl.BillOfOperationsUnit,
    @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
    @Aggregation.default: #MIN
    affl.MinimumLotSizeQuantity,
    @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
    @Aggregation.default: #MAX
    affl.MaximumLotSizeQuantity,

    // Associations
    _ProductionOrderType,
    _StatusObject,
    @Consumption.hidden: true
    affl._OrderInternalID,
    affl._OrderSequence as _SequenceInternalID,
    affl._SequenceCategory,
    affl._SequenceSchedulingAlignment, 
    affl._Plant,
    affl._BillOfOperationsType,
    affl._BillOfOperationsGroup,
    _BillOfOperationsVariant,
    _BillOfOperationsSequence,
    affl._BillOfOperationsUnit,
    affl._Language,
    -- Compositions
    _ProductionOrderHeader,
    _ProductionOrderOperation,
    _LongText,
    -- New text relations
    _ProductionOrderText,
    _ProductionPlantText,    
    _StatusObjectText
  }
  where
    affl.OrderCategory = '10'; //Production orders only
```
