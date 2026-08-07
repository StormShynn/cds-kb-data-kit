---
name: I_SERVICEENTRYSHEETITEMNOTETP
description: Serviceentrysheetitemnotetp
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
  - item-level
  - component:MM-PUR-SVC-SES-2CL
  - lob:Sourcing & Procurement
---
# I_SERVICEENTRYSHEETITEMNOTETP

**Serviceentrysheetitemnotetp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SVC-SES-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceEntrySheet` | ✓ | |  |  |  |  |
| `ServiceEntrySheetItem` | ✓ | |  |  |  |  |
| `NoteBasicUUID` | ✓ | |  |  |  |  |
| `ServiceEntrySheetItemUniqueID` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `NoteBasicObjectNodeType` |  | |  |  |  |  |
| `NoteBasicType` |  | |  |  |  |  |
| `NoteBasicLanguage` |  | |  |  |  |  |
| `NoteBasicContent` |  | |  |  |  |  |
| `_ServiceEntrySheet` | | ✓ | | | | |
| `_ServiceEntrySheetItem` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Entry Sheet Item Note - TP'
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}
define view entity I_ServiceEntrySheetItemNoteTP as projection on R_ServiceEntrySheetItemNoteTP  as _ServiceEntrySheetItemNote
{
  @ObjectModel.foreignKey.association: '_ServiceEntrySheet'
  key ServiceEntrySheet,
  key ServiceEntrySheetItem,
  key NoteBasicUUID,
      ServiceEntrySheetItemUniqueID,
      PurchasingOrganization,
      PurchasingGroup,
      Plant,
      @Semantics.booleanIndicator
      IsEndOfPurposeBlocked,
      NoteBasicObjectNodeType,
      NoteBasicType,
      NoteBasicLanguage,
      NoteBasicContent,
      
      /* Associations */
      _ServiceEntrySheet     : redirected to I_ServiceEntrySheetTP_2,
      _ServiceEntrySheetItem : redirected to parent I_ServiceEntrySheetItemTP_2
}
```
