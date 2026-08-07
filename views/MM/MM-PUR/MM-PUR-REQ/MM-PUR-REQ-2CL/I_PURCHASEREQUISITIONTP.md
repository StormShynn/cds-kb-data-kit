---
name: I_PURCHASEREQUISITIONTP
description: Purchase RequisitionUISITIONTP
app_component: MM-PUR-REQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-REQ
  - interface-view
  - transactional-processing
  - purchase-requisition
  - component:MM-PUR-REQ-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASEREQUISITIONTP

**Purchase RequisitionUISITIONTP**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PurchaseRequisition` | ✓ | |  |  |
| `PurchaseRequisitionType` |  | |  |  |
| `PurReqnDescription` |  | |  |  |
| `SourceDetermination` |  | |  |  |
| `PurReqnDoOnlyValidation` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `_PurchaseRequisitionItem` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Purchase Requisition - TP'

@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

//@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel: {
    usageType: {
        sizeCategory: #L,
        serviceQuality: #C,
        dataClass:#TRANSACTIONAL
    },
    sapObjectNodeType.name: 'PurchaseRequisition'
  }

@ObjectModel.semanticKey: ['PurchaseRequisition']
@ObjectModel.representativeKey: 'PurchaseRequisition'
@Metadata.ignorePropagatedAnnotations: true

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

define root view entity I_PurchaseRequisitionTP
  provider contract transactional_interface
  as projection on R_PurchaseRequisitionTP
{
  key PurchaseRequisition,
      PurchaseRequisitionType,
      PurReqnDescription,
      SourceDetermination,
      PurReqnDoOnlyValidation,
      // For Etag
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      /* Associations */
      _PurchaseRequisitionItem : redirected to composition child I_PurchaseReqnItemTP

}
```
