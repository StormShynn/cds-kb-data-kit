---
name: I_PRODUCTIONORDERSEQUENCEVH
description: Production OrderSEQUENCEVH
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
  - value-help
  - product
  - production-order
  - component:PP-VDM-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDERSEQUENCEVH

**Production OrderSEQUENCEVH**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderInternalID` | ✓ | |  |  |  |  |
| `SequenceInternalID` | ✓ | |  |  |  |  |
| `ProductionOrder` |  | |  |  |  |  |
| `ProductionOrderSequence` |  | |  |  |  |  |
| `ProductionOrderSequenceText` |  | |  |  |  |  |
| `SequenceCategory` |  | |  |  |  |  |
| `ProductionOrderType` |  | |  |  |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `_ProductionOrderInternal` | | ✓ | | | | |
| `_SequenceCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionOrderInternal` | `I_ProductionOrderInternalID` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'SequenceInternalID'
@ObjectModel.supportedCapabilities: [#SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Production Order Sequence'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_ProductionOrderSequenceVH as select from I_ProductionOrderSequence 

    association [1..1] to I_ProductionOrderInternalID as _ProductionOrderInternal on $projection.OrderInternalID = _ProductionOrderInternal.ProductionOrderInternalID

{
    // Technical key
    @ObjectModel.foreignKey.association: '_ProductionOrderInternal'
key OrderInternalID,
    @ObjectModel.text.element: ['ProductionOrderSequenceText']
key SequenceInternalID,

    // Semantic key
    @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.9}
    ProductionOrder,
    @ObjectModel.text.element: ['ProductionOrderSequenceText']
    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
    ProductionOrderSequence,

    @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
    @Semantics.text: true
    ProductionOrderSequenceText,
    @ObjectModel.foreignKey.association: '_SequenceCategory'
    SequenceCategory,

    // for DCLS
    @Consumption.hidden: true
    ProductionOrderType,
    @Consumption.hidden: true
    ProductionPlant,

    // Associations
    @Consumption.hidden: true
    _ProductionOrderInternal,
    @Consumption.hidden: true
    _SequenceCategory
};
```
