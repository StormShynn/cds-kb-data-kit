---
name: I_SERVICEENTRYSHEETNOTETP
description: Serviceentrysheetnotetp
app_component: MM-PUR-SVC-SES-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SVC
  - interface-view
  - transactional-processing
  - service
  - note
  - component:MM-PUR-SVC-SES-2CL
  - lob:Sourcing & Procurement
---
# I_SERVICEENTRYSHEETNOTETP

**Serviceentrysheetnotetp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SVC-SES-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceEntrySheet` | ✓ | |  |  |
| `NoteBasicUUID` | ✓ | |  |  |
| `PurchasingOrganization` |  | |  |  |
| `PurchasingGroup` |  | |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |
| `NoteBasicObjectNodeType` |  | |  |  |
| `NoteBasicType` |  | |  |  |
| `NoteBasicLanguage` |  | |  |  |
| `NoteBasicContent` |  | |  |  |
| `_ServiceEntrySheet` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Service Entry Sheet Note - TP'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}
define view entity I_ServiceEntrySheetNoteTP as projection on R_ServiceEntrySheetNoteTP  as _ServiceEntrySheetNote
{
  @ObjectModel.foreignKey.association: '_ServiceEntrySheet'
  key ServiceEntrySheet,
  key NoteBasicUUID,
      PurchasingOrganization,
      PurchasingGroup,
      @Semantics.booleanIndicator
      IsEndOfPurposeBlocked,
      NoteBasicObjectNodeType,
      NoteBasicType,
      NoteBasicLanguage,
      NoteBasicContent,
      
      /* Associations */
      _ServiceEntrySheet : redirected to parent I_ServiceEntrySheetTP_2
}
```
