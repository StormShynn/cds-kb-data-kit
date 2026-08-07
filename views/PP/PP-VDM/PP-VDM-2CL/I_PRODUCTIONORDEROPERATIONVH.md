---
name: I_PRODUCTIONORDEROPERATIONVH
description: Production OrderOPERATIONVH
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
# I_PRODUCTIONORDEROPERATIONVH

**Production OrderOPERATIONVH**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `OrderInternalID` | ✓ | |  |  |
| `OrderOperationInternalID` | ✓ | |  |  |
| `ProductionOrder` |  | |  |  |
| `ProductionOrderSequence` |  | |  |  |
| `ProductionOrderOperation` |  | |  |  |
| `ProductionOrderOperationText` |  | |  |  |
| `ProductionOrderType` |  | |  |  |
| `Plant` |  | |  |  |
| `_ProductionOrderInternal` | | ✓ | | |

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
@ObjectModel.representativeKey: 'OrderOperationInternalID'
@ObjectModel.supportedCapabilities: [#SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Production Order Operation'

define view entity I_ProductionOrderOperationVH 
  as select from   I_ProductionOrderOperation_2 as oper
                                                     
    association [1..1] to I_ProductionOrderInternalID as _ProductionOrderInternal on $projection.OrderInternalID = _ProductionOrderInternal.ProductionOrderInternalID
{
      // Technical key
      @ObjectModel.foreignKey.association: '_ProductionOrderInternal'
  key oper.OrderInternalID,
      @ObjectModel.text.element: ['ProductionOrderOperationText']
  key oper.OrderOperationInternalID,

      // Semantical key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderStdVH', element: 'ProductionOrder' } } ]
      oper.ProductionOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderSequenceVH', element: 'ProductionOrderSequence' } } ]
      oper.ProductionOrderSequence,
      @ObjectModel.text.element: ['ProductionOrderOperationText']
      oper.ProductionOrderOperation,

      // Text
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      ProductionOrderOperationText,

      // for DCLS
      @Consumption.hidden: true
      oper.ProductionOrderType,
      @Consumption.hidden: true
      oper.Plant,
      
      // Associations
      @Consumption.hidden: true
      _ProductionOrderInternal
};
```
