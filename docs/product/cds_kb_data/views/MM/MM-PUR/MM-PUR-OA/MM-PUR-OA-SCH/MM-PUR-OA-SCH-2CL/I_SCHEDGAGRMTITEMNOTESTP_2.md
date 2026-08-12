---
name: I_SCHEDGAGRMTITEMNOTESTP_2
description: "Schedgagrmtitemnotestp 2"
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - transactional-processing
  - note
  - item-level
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTITEMNOTESTP_2

**Schedgagrmtitemnotestp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  |  |  |
| `DocumentText` | ✓ | |  |  |  |  |
| `TechnicalObjectType` | ✓ | |  |  |  |  |
| `ArchObjectNumber` | ✓ | |  |  |  |  |
| `SchedulingAgreement` | ✓ | |  |  |  |  |
| `SchedulingAgreementItem` | ✓ | |  |  |  |  |
| `NoteDescription` |  | |  |  |  |  |
| `FixedIndicator` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_SchedgAgrmtItm` | | ✓ | | | | |
| `_PurSchedgAgrmt` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Scheduling Agreement Item Notes'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel: {
    usageType: {
      sizeCategory: #L,
      serviceQuality: #B,
      dataClass: #TRANSACTIONAL
    }
  }

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SchedgAgrmtItemNotesTP_2
  as projection on R_SchedgAgrmtItemNotesTP
{
  key Language,
  key DocumentText,
  key TechnicalObjectType,
  key ArchObjectNumber,
  key SchedulingAgreement,
  key SchedulingAgreementItem,
      NoteDescription,
      FixedIndicator,
      LastChangeDateTime,

      /* Associations */
      _SchedgAgrmtItm : redirected to parent I_SchedgAgrmtItmTP_2,
      _PurSchedgAgrmt : redirected to I_SchedgAgrmtHdrTP_2
}
```
