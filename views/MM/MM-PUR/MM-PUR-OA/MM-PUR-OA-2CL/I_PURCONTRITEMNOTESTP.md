---
name: I_PURCONTRITEMNOTESTP
description: Purcontritemnotestp
app_component: MM-PUR-OA-2CL
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
  - item-level
  - component:MM-PUR-OA-2CL
  - lob:Sourcing & Procurement
---
# I_PURCONTRITEMNOTESTP

**Purcontritemnotestp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ArchitecturalObjectNumber` | ✓ | |  |  |
| `TechnicalObjectType` | ✓ | |  |  |
| `DocumentText` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `PurchaseContract` | ✓ | |  |  |
| `PurchaseContractItem` | ✓ | |  |  |
| `NoteDescription` |  | |  |  |
| `FixedIndicator` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `_PurchaseContractItem` | | ✓ | | |
| `_PurContract` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Purchase Contract Item Notes - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.semanticKey:  [ 'ArchitecturalObjectNumber','TechnicalObjectType','DocumentText','Language','PurchaseContract','PurchaseContractItem']

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_PurContrItemNotesTP
  as projection on R_PurContrItemNotesTP
{
  key ArchitecturalObjectNumber,
  key TechnicalObjectType,
  key DocumentText,
  key Language,
  key PurchaseContract,
  key PurchaseContractItem,
      NoteDescription,
      FixedIndicator,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      /* Associations */
      _PurchaseContractItem : redirected to parent I_PurchaseContractItemTP,
      _PurContract          : redirected to I_PurchaseContractTP
}
```
