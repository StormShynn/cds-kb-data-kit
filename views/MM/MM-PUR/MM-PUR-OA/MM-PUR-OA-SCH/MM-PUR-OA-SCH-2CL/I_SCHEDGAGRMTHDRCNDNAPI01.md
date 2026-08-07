---
name: I_SCHEDGAGRMTHDRCNDNAPI01
description: Schedgagrmthdrcndnapi 01
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - header-level
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTHDRCNDNAPI01

**Schedgagrmthdrcndnapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SchedulingAgreement` | ✓ | |  |  |  |  |
| `ConditionValidityEndDate` | ✓ | |  |  |  |  |
| `ConditionType` | ✓ | |  |  |  |  |
| `ConditionSequentialNumberShort` | ✓ | |  |  |  |  |
| `ConditionValidityStartDate` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
| `ConditionRateValueUnit` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionIsDeleted` |  | |  |  |  |  |
| `_SchedgAgrmtHdr` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SchedgAgrmtHdr` | `I_SchedgagrmthdrApi01` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #BASIC
@EndUserText.label: 'Scheduling Agreement Header Conditions'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_SchedgAgrmtHdrCndnAPI01
  as select from I_Schedgagrmthdrcnd
  association [1..1] to I_SchedgagrmthdrApi01 as _SchedgAgrmtHdr on $projection.SchedulingAgreement = _SchedgAgrmtHdr.SchedulingAgreement
{
  key    SchedulingAgreement,

         @EndUserText.label: 'Condition Validity End Date'
  key    ConditionValidityEndDate,
  key    ConditionType,
  key    ConditionSequentialNumberShort,

         @EndUserText.label: 'Condition Validity Start Date'
         ConditionValidityStartDate,
         @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
         ConditionRateValue,
         ConditionRateValueUnit,
         @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
         ConditionQuantity,
         ConditionQuantityUnit,
         ConditionApplication,
         ConditionIsDeleted,

         //Associations
         _SchedgAgrmtHdr
}
```
