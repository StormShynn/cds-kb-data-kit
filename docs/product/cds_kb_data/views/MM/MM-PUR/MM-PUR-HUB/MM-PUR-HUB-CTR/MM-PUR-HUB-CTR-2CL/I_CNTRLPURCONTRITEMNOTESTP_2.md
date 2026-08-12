---
name: I_CNTRLPURCONTRITEMNOTESTP_2
description: "Cntrlpurcontritemnotestp 2"
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - transactional-processing
  - note
  - item-level
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLPURCONTRITEMNOTESTP_2

**Cntrlpurcontritemnotestp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocumentNoteUUID` | ✓ | |  |  |  |  |
| `PurchasingDocumentObjNodeType` |  | |  |  |  |  |
| `PurchasingDocumentNoteObjectID` |  | |  |  |  |  |
| `PurchasingDocumentNoteType` |  | |  |  |  |  |
| `PurchasingDocumentNoteLanguage` |  | |  |  |  |  |
| `PurchasingDocumentNoteTitle` |  | |  |  |  |  |
| `PurchasingDocumentNoteMimeType` |  | |  |  |  |  |
| `PurgDocNoteCreatedBy` |  | |  |  |  |  |
| `PurgDocNoteCreationDateTime` |  | |  |  |  |  |
| `PurgDocNoteLastChangedBy` |  | |  |  |  |  |
| `PurgDocNoteLastChangedDateTime` |  | |  |  |  |  |
| `PurgDocNoteText` |  | |  |  |  |  |
| `CentralPurchaseContract` |  | |  |  |  |  |
| `CentralPurchaseContractItem` |  | |  |  |  |  |
| `_CentralPurchaseContract` | | ✓ | | | | |
| `_CntrlPurchaseContractItem` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'CCTR Item Notes - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: [ 'CentralPurchaseContract', 'CentralPurchaseContractItem' ]

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_CntrlPurContrItemNotesTP_2
  as projection on R_CntrlPurContrItemNotesTP
{

  key PurchasingDocumentNoteUUID,
      PurchasingDocumentObjNodeType,
      PurchasingDocumentNoteObjectID,
      PurchasingDocumentNoteType,
      PurchasingDocumentNoteLanguage,
      PurchasingDocumentNoteTitle,
      PurchasingDocumentNoteMimeType,
      PurgDocNoteCreatedBy,
      PurgDocNoteCreationDateTime,
      PurgDocNoteLastChangedBy,
      PurgDocNoteLastChangedDateTime,
      PurgDocNoteText,
      CentralPurchaseContract,
      CentralPurchaseContractItem,
      
      
      /* Associations */
      _CentralPurchaseContract   : redirected to I_CntrlPurchaseContractTP_2,
      _CntrlPurchaseContractItem : redirected to parent I_CntrlPurchaseContractItmTP_2 
}
```
