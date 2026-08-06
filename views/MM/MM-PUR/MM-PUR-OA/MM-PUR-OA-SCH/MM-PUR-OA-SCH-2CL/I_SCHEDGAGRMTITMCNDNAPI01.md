---
name: I_SCHEDGAGRMTITMCNDNAPI01
description: Schedgagrmtitmcndnapi 01
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
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTITMCNDNAPI01

**Schedgagrmtitmcndnapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SchedulingAgreement` | `SchedulingAgreement` |
| key `SchedulingAgreementItem` | `SchedulingAgreementItem` |
| key `ConditionValidityEndDate` | `ConditionValidityEndDate` |
| key `ConditionType` | `ConditionType` |
| key `ConditionRecord` | `ConditionRecord` |
| key `ConditionSequentialNumberShort` | `ConditionSequentialNumberShort` |
| `ConditionValidityStartDate` | `ConditionValidityStartDate` |
| `ConditionRateValue` | `ConditionRateValue` |
| `ConditionRateValueUnit` | `ConditionRateValueUnit` |
| `ConditionRateRatioUnit` | `ConditionRateRatioUnit` |
| `ConditionRateAmount` | `ConditionRateAmount` |
| `ConditionCalculationTypeShort` | `ConditionCalculationTypeShort` |
| `ConditionQuantity` | `ConditionQuantity` |
| `ConditionQuantityUnit` | `ConditionQuantityUnit` |
| `ConditionApplication` | `ConditionApplication` |
| `ConditionIsDeleted` | `ConditionIsDeleted` |
| `_ScheduleAgreement` | *Association* |
| `_ScheduleAgreementItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ScheduleAgreement` | `I_SchedgagrmthdrApi01` | [1..1] |
| `_ScheduleAgreementItem` | `I_SchedgAgrmtItmApi01` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #BASIC
@EndUserText.label: 'Scheduling Agreement Item Conditions'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view entity I_SchedgAgrmtItmCndnAPI01
  as select from I_Schedgagrmtitmcnd
  association [1..1] to I_SchedgagrmthdrApi01 as _ScheduleAgreement on $projection.SchedulingAgreement = _ScheduleAgreement.SchedulingAgreement
  association [1..1] to I_SchedgAgrmtItmApi01   as _ScheduleAgreementItem on  $projection.SchedulingAgreement     = _ScheduleAgreementItem.SchedulingAgreement
                                                                     and $projection.SchedulingAgreementItem = _ScheduleAgreementItem.SchedulingAgreementItem
{
  key SchedulingAgreement,
  key SchedulingAgreementItem,
      
      @EndUserText.label: 'Condition Validity End Date'
  key ConditionValidityEndDate,
  key ConditionType,
  key ConditionRecord,
  key ConditionSequentialNumberShort,
  
      @EndUserText.label: 'Condition Validity Start Date'
      ConditionValidityStartDate,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionRateValue,
      ConditionRateValueUnit,
      ConditionRateRatioUnit,
      ConditionRateAmount,
      ConditionCalculationTypeShort,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      ConditionQuantityUnit,
      ConditionApplication,
      ConditionIsDeleted,
      _ScheduleAgreement,
      _ScheduleAgreementItem
}
```
