---
name: I_PRODALLOCSQNCCSTRTTP_2
description: "Prodallocsqnccstrttp 2"
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
# I_PRODALLOCSQNCCSTRTTP_2

**Prodallocsqnccstrttp 2**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdAllocSqncConstraintUUID` | ✓ | |  |  |  |  |
| `ProdAllocSequenceConstraint` |  | |  |  |  |  |
| `ProductAllocationSequenceGroup` |  | |  |  |  |  |
| `ProductAllocationSequence` |  | |  |  |  |  |
| `ProductAllocationSequenceUUID` |  | |  |  |  |  |
| `ProdAllocSequenceGroupUUID` |  | |  |  |  |  |
| `ValidityStartUTCDateTime` |  | |  |  |  |  |
| `ValidityStartTimeZone` |  | |  |  |  |  |
| `ValidityEndUTCDateTime` |  | |  |  |  |  |
| `ValidityEndTimeZone` |  | |  |  |  |  |
| `ProductAllocationObjectUUID` |  | |  |  |  |  |
| `ProductAllocationRate` |  | |  |  |  |  |
| `ProdAllocLeadTimeDuration` |  | |  |  |  |  |
| `ProdAllocLeadTimeDurationUnit` |  | |  |  |  |  |
| `NumberOfBackwardCnsmpnPeriods` |  | |  |  |  |  |
| `NumberOfForwardCnsmpnPeriods` |  | |  |  |  |  |
| `HorizontalConsumptionDirection` |  | |  |  |  |  |
| `ProdAllocSqncCstrtCnsmpnUnit` |  | |  |  |  |  |
| `PastPeriodIsAllowed` |  | |  |  |  |  |
| `ProdAllocCheckDateTimeType` |  | |  |  |  |  |
| `ProdAllocationConstraintStatus` |  | |  |  |  |  |
| `AfterValidityConstraintStatus` |  | |  |  |  |  |
| `BeforeValidityConstraintStatus` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `_ProdAllocationSequenceTP` | | ✓ | | | | |
| `_ProdAllocSqncCstrtTTP` | | ✓ | | | | |
| `_ProdAllocSqncGroupTP` | | ✓ | | | | |

## Source Code

```abap
@ObjectModel.representativeKey: 'ProdAllocSqncConstraintUUID'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.sapObjectNodeType.name: 'ProdAllocSqncCstrt'

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER

@EndUserText.label: 'Product Allocation Sequence Constraint'
@AccessControl.authorizationCheck: #NOT_REQUIRED                                                   
                                                   
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL


define view entity I_ProdAllocSqncCstrtTP_2
    as projection on I_ProdAllocSqncCstrtTP

{ 
  key ProdAllocSqncConstraintUUID,
      ProdAllocSequenceConstraint,
      ProductAllocationSequenceGroup,
      ProductAllocationSequence,
      ProductAllocationSequenceUUID,
      ProdAllocSequenceGroupUUID,
      ValidityStartUTCDateTime,
      ValidityStartTimeZone,
      ValidityEndUTCDateTime,
      ValidityEndTimeZone,
      ProductAllocationObjectUUID,
      ProductAllocationRate,
      ProdAllocLeadTimeDuration,
      ProdAllocLeadTimeDurationUnit,
      NumberOfBackwardCnsmpnPeriods,
      NumberOfForwardCnsmpnPeriods,
      HorizontalConsumptionDirection,
      ProdAllocSqncCstrtCnsmpnUnit,
      PastPeriodIsAllowed,
      ProdAllocCheckDateTimeType,
      ProdAllocationConstraintStatus,
      AfterValidityConstraintStatus,
      BeforeValidityConstraintStatus,
      IsDeleted,
                
      _ProdAllocationSequenceTP: redirected to  I_ProdAllocationSequenceTP_2,  
      _ProdAllocSqncCstrtTTP: redirected to composition child I_ProdAllocSqncCstrtTxtTP_2,
      _ProdAllocSqncGroupTP: redirected to parent I_ProdAllocSqncGroupTP_2
}            
where IsDeleted = ' '
```
