---
name: I_SCHEDGAGRMTITEMNOTESAPI01
description: Schedgagrmtitemnotesapi 01
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
  - note
  - item-level
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTITEMNOTESAPI01

**Schedgagrmtitemnotesapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  |  |
| `DocumentText` | ✓ | |  |  |
| `TechnicalObjectType` | ✓ | |  |  |
| `ArchObjectNumber` | ✓ | |  |  |
| `SchedulingAgreement` | ✓ | |  |  |
| `SchedulingAgreementItem` | ✓ | |  |  |
| `NoteDescription` |  | |  |  |
| `FixedIndicator` |  | |  |  |
| `Plant` |  | | `_ScheduleAgreementItem` | `Plant` |
| `StorageLocation` |  | | `_ScheduleAgreementItem` | `StorageLocation` |
| `PurchasingDocumentType` |  | | `_SchedgAgrmtHdr` | `PurchasingDocumentType` |
| `PurchasingOrganization` |  | | `_SchedgAgrmtHdr` | `PurchasingOrganization` |
| `PurchasingGroup` |  | | `_SchedgAgrmtHdr` | `PurchasingGroup` |
| `_SchedgAgrmtHdr` | | ✓ | | |
| `_ScheduleAgreementItem` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SchedgAgrmtHdr` | `I_SchedgagrmthdrApi01` | [1..1] |
| `_ScheduleAgreementItem` | `I_SchedgAgrmtItmApi01` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #BASIC
@EndUserText.label: 'Scheduling Agreement Item Notes'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_SchedgAgrmtItemNotesAPI01
  as select from I_SchedgAgrmtItemNotes
  association [1..1] to I_SchedgagrmthdrApi01 as _SchedgAgrmtHdr        on  $projection.SchedulingAgreement = _SchedgAgrmtHdr.SchedulingAgreement
  association [1..1] to I_SchedgAgrmtItmApi01 as _ScheduleAgreementItem on  $projection.SchedulingAgreement     = _ScheduleAgreementItem.SchedulingAgreement
                                                                        and $projection.SchedulingAgreementItem = _ScheduleAgreementItem.SchedulingAgreementItem
{
  key   Language,
  key   DocumentText,
  key   TechnicalObjectType,
  key   ArchObjectNumber,
  key   SchedulingAgreement,
  key   SchedulingAgreementItem,
        NoteDescription,
        FixedIndicator,
        _ScheduleAgreementItem.Plant,
        _ScheduleAgreementItem.StorageLocation,
        _SchedgAgrmtHdr.PurchasingDocumentType,
        _SchedgAgrmtHdr.PurchasingOrganization,
        _SchedgAgrmtHdr.PurchasingGroup,
        _SchedgAgrmtHdr,
        _ScheduleAgreementItem     
}
```
