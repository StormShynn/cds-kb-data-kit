---
name: I_PURCONTRHEADERNOTESTP
description: Purcontrheadernotestp
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
  - header-level
  - component:MM-PUR-OA-2CL
  - lob:Sourcing & Procurement
---
# I_PURCONTRHEADERNOTESTP

**Purcontrheadernotestp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ArchitecturalObjectNumber` | `ArchitecturalObjectNumber` |
| key `TechnicalObjectType` | `TechnicalObjectType` |
| key `DocumentText` | `DocumentText` |
| key `Language` | `Language` |
| key `PurchaseContract` | `PurchaseContract` |
| `NoteDescription` | `NoteDescription` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_PurchaseContract` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Purchase Contract Header Notes - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.semanticKey:  [ 'ArchitecturalObjectNumber','TechnicalObjectType','DocumentText','Language','PurchaseContract']

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #CUSTOMIZING
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_PurContrHeaderNotesTP 
as projection on R_PurContrHeaderNotesTP 
{
  key ArchitecturalObjectNumber,
  key TechnicalObjectType,
  key DocumentText,
  key Language,
  key PurchaseContract,
  NoteDescription,
   @Semantics.systemDateTime.lastChangedAt: true
  LastChangeDateTime,
  /* Associations */
 _PurchaseContract : redirected to parent I_PurchaseContractTP
}
```
