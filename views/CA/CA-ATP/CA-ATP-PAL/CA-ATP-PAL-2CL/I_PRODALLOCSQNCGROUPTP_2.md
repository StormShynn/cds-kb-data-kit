---
name: I_PRODALLOCSQNCGROUPTP_2
description: Prodallocsqncgrouptp 2
app_component: CA-ATP-PAL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - CA-ATP-PAL
  - interface-view
  - transactional-processing
  - component:CA-ATP-PAL-2CL
  - lob:Cross-Application Components
---
# I_PRODALLOCSQNCGROUPTP_2

**Prodallocsqncgrouptp 2**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProdAllocSequenceGroupUUID` | `ProdAllocSequenceGroupUUID` |
| `ProductAllocationSequenceGroup` | `ProductAllocationSequenceGroup` |
| `ProductAllocationSequence` | `ProductAllocationSequence` |
| `ProductAllocationSequenceUUID` | `ProductAllocationSequenceUUID` |
| `ProdAllocSequenceGroupType` | `ProdAllocSequenceGroupType` |
| `ProdAllocSqncGrpPriorityValue` | `ProdAllocSqncGrpPriorityValue` |
| `NumberOfBackwardCnsmpnPeriods` | `NumberOfBackwardCnsmpnPeriods` |
| `NumberOfForwardCnsmpnPeriods` | `NumberOfForwardCnsmpnPeriods` |
| `HorizontalConsumptionDirection` | `HorizontalConsumptionDirection` |
| `PastPeriodIsAllowed` | `PastPeriodIsAllowed` |
| `OnlyOverlappingQtyIsConsumed` | `OnlyOverlappingQtyIsConsumed` |
| `ProdAllocSqncGrpCnsmpnUnit` | `ProdAllocSqncGrpCnsmpnUnit` |
| `IsDeleted` | `IsDeleted` |
| `_ProdAllocationSequenceTP` | *Association* |
| `_ProdAllocSqncGroupTTP` | *Association* |
| `_ProdAllocSqncCstrtTP` | *Association* |

## Source Code

```abap
@ObjectModel.representativeKey: 'ProdAllocSequenceGroupUUID'
@ObjectModel.semanticKey: ['ProductAllocationSequence', 'ProductAllocationSequenceGroup']

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.sapObjectNodeType.name: 'ProductAllocationSequenceGroup'

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER

@EndUserText.label: 'Product Allocation Sequence Group'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL


define view entity I_ProdAllocSqncGroupTP_2
as projection on I_ProdAllocSqncGroupTP

{

key ProdAllocSequenceGroupUUID,
    ProductAllocationSequenceGroup,
    ProductAllocationSequence,
    ProductAllocationSequenceUUID,
    ProdAllocSequenceGroupType,
    ProdAllocSqncGrpPriorityValue,
    NumberOfBackwardCnsmpnPeriods,
    NumberOfForwardCnsmpnPeriods,
    HorizontalConsumptionDirection,
    PastPeriodIsAllowed,
    OnlyOverlappingQtyIsConsumed,
    ProdAllocSqncGrpCnsmpnUnit,
    IsDeleted,

    _ProdAllocationSequenceTP : redirected to parent I_ProdAllocationSequenceTP_2,
    _ProdAllocSqncGroupTTP : redirected to composition child I_ProdAllocSqncGroupTxtTP_2,
    _ProdAllocSqncCstrtTP: redirected to composition child I_ProdAllocSqncCstrtTP_2
  

}
where IsDeleted = ' '
```
