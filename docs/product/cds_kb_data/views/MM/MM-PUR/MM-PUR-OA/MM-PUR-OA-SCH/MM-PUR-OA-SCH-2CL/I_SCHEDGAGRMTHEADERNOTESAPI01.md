---
name: I_SCHEDGAGRMTHEADERNOTESAPI01
description: "Schedgagrmtheadernotesapi 01"
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - note
  - header-level
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTHEADERNOTESAPI01

**Schedgagrmtheadernotesapi 01**

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
| `NoteDescription` |  | |  |  |  |  |
| `FixedIndicator` |  | |  |  |  |  |
| `DisplayModeOfTextTypeInPurg` |  | |  |  |  |  |
| `TextIsAdoptedFromReference` |  | |  |  |  |  |
| `PurchasingDocumentType` |  | | `_SchedgAgrmtHdr` | `PurchasingDocumentType` |  |  |
| `PurchasingOrganization` |  | | `_SchedgAgrmtHdr` | `PurchasingOrganization` |  |  |
| `PurchasingGroup` |  | | `_SchedgAgrmtHdr` | `PurchasingGroup` |  |  |
| `_SchedgAgrmtHdr` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SchedgAgrmtHdr` | `I_SchedgagrmthdrApi01` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #BASIC
@EndUserText.label: 'Scheduling Agreement Header Notes'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_SchedgAgrmtHeaderNotesAPI01
  as select from I_SchedgAgrmtHeaderNotes
  association [1..1] to I_SchedgagrmthdrApi01 as _SchedgAgrmtHdr on $projection.SchedulingAgreement = _SchedgAgrmtHdr.SchedulingAgreement
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
      _SchedgAgrmtHdr,
      _SchedgAgrmtHdr.PurchasingDocumentType,
      _SchedgAgrmtHdr.PurchasingOrganization,
      _SchedgAgrmtHdr.PurchasingGroup
}
```
