---
name: I_SCHEDGAGRMTITMCNDNVALDTYTP_2
description: Schedgagrmtitmcndnvaldtytp 2
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
  - transactional-processing
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTITMCNDNVALDTYTP_2

**Schedgagrmtitmcndnvaldtytp 2**

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
| `SchedulingAgreementItem` | ✓ | |  |  |  |  |
| `ConditionRecord` | ✓ | |  |  |  |  |
| `ConditionValidityEndDate` | ✓ | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionValidityStartDate` |  | |  |  |  |  |
| `ConditionIsDeleted` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_SchedgAgrmtItm` | | ✓ | | | | |
| `_SchedgAgrmtItmCndnAmount` | | ✓ | | | | |
| `_PurSchedgAgrmt` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Scheduling Agrmt Item Condition Validity'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['SchedulingAgreement','SchedulingAgreementItem','ConditionRecord','ConditionValidityEndDate']

@ObjectModel: {
    usageType: {
      sizeCategory: #XL,
      serviceQuality: #C,
      dataClass: #TRANSACTIONAL
    }
  }

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SchedgAgrmtItmCndnValdtyTP_2
  as projection on R_SchedgAgrmtItmCndnValdtyTP_2
{
  key SchedulingAgreement,
  key SchedulingAgreementItem,
  key ConditionRecord,
  key ConditionValidityEndDate,
      ConditionApplication,
      ConditionType,
      ConditionValidityStartDate,
      ConditionIsDeleted,
      LastChangeDateTime,

      /* Associations */
      _SchedgAgrmtItm           : redirected to parent I_SchedgAgrmtItmTP_2,
      _SchedgAgrmtItmCndnAmount : redirected to composition child I_SchedgAgrmtItmCndnAmountTP_2,
      _PurSchedgAgrmt           : redirected to I_SchedgAgrmtHdrTP_2

}
```
