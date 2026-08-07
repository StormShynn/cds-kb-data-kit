---
name: I_MFGORDEROPERATIONVH
description: Mfgorderoperationvh
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
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDEROPERATIONVH

**Mfgorderoperationvh**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MfgOrderInternalID` | ✓ | |  |  |
| `OrderOperationInternalID` | ✓ | |  |  |
| `ManufacturingOrder` |  | |  |  |
| `ManufacturingOrderSequence` |  | |  |  |
| `ManufacturingOrderOperation` |  | |  |  |
| `OperationIsSubOperation` |  | |  | `cast(oper1.OperationIsSubOperation as vdm_subop_flag preserving type)` |
| `MfgOrderOperationText` |  | |  | `OperationText` |
| `ManufacturingOrderCategory` |  | |  |  |
| `ManufacturingOrderType` |  | |  |  |
| `ProductionPlant` |  | |  |  |

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
@EndUserText.label: 'Manufacturing Order Operation'
// Contains technical as well as semantic key and can therefore be used as successor 
// CDS view for both I_MfgOrdOpBySemanticKeyStdVH and I_MfgOrderOperationStdVH

define view entity I_MfgOrderOperationVH 
  as select from   P_MfgOrderOperationForVH as oper1 
    inner join     I_OrderOperationBasic    as oper2 on  oper2.OrderInternalID          = oper1.MfgOrderInternalID
                                                     and oper2.OrderOperationInternalID = oper1.OrderOperationInternalID
{
      // Technical key
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key oper1.MfgOrderInternalID,
      @ObjectModel.text.element: ['MfgOrderOperationText']
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key oper1.OrderOperationInternalID,
      // Semantic key
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.9}
      oper1.ManufacturingOrder,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      oper1.ManufacturingOrderSequence,
      @ObjectModel.text.element: ['MfgOrderOperationText']
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      oper1.ManufacturingOrderOperation,
      // Indicator: Suboperation
      cast(oper1.OperationIsSubOperation as vdm_subop_flag preserving type) as OperationIsSubOperation,      
      // Text
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      oper2.OperationText as MfgOrderOperationText,
      // for DCLS
      @Consumption.hidden: true
      oper1.ManufacturingOrderCategory,
      @Consumption.hidden: true
      oper1.ManufacturingOrderType,
      @Consumption.hidden: true
      oper1.ProductionPlant
};
```
