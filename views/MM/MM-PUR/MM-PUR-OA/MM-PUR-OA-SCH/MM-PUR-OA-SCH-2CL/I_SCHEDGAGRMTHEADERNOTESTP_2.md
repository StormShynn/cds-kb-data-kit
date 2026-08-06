---
name: I_SCHEDGAGRMTHEADERNOTESTP_2
description: Schedgagrmtheadernotestp 2
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
  - note
  - header-level
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTHEADERNOTESTP_2

**Schedgagrmtheadernotestp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `Language` |
| key `DocumentText` | `DocumentText` |
| key `TechnicalObjectType` | `TechnicalObjectType` |
| key `ArchObjectNumber` | `ArchObjectNumber` |
| key `SchedulingAgreement` | `SchedulingAgreement` |
| `NoteDescription` | `NoteDescription` |
| `FixedIndicator` | `FixedIndicator` |
| `DisplayModeOfTextTypeInPurg` | `DisplayModeOfTextTypeInPurg` |
| `TextIsAdoptedFromReference` | `TextIsAdoptedFromReference` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_SchedgAgrmtHdr` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Scheduling Agreement Header Notes'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel: {
    usageType: {
      sizeCategory: #L,
      serviceQuality:#C,
      dataClass: #TRANSACTIONAL
    }
  }

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SchedgAgrmtHeaderNotesTP_2
  as projection on R_SchedgAgrmtHeaderNotesTP
{
  key Language,
  key DocumentText,
  key TechnicalObjectType,
  key ArchObjectNumber,
  key SchedulingAgreement,
      NoteDescription,
      FixedIndicator,
      DisplayModeOfTextTypeInPurg,
      TextIsAdoptedFromReference,
      LastChangeDateTime,

      /* Associations */
      _SchedgAgrmtHdr : redirected to parent I_SchedgAgrmtHdrTP_2


}
```
