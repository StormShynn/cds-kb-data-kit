---
name: I_PURCHASEREQNITEMTEXTTP
description: "Purchase RequisitionNITEMTEXTTP"
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
  - text
  - item-level
  - component:MM-PUR-REQ-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASEREQNITEMTEXTTP

**Purchase RequisitionNITEMTEXTTP**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseRequisition` | ✓ | |  |  |  |  |
| `PurchaseRequisitionItem` | ✓ | |  |  |  |  |
| `TextObjectCategory` | ✓ | |  |  |  |  |
| `TextObjectKey` | ✓ | |  |  |  |  |
| `TextObjectType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `PlainLongText` |  | |  |  |  |  |
| `FixedIndicator` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_PurchaseRequisitionItem` | | ✓ | | | | |
| `_PurReqn` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Purchase Requisition Item Notes - TP'

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
        dataClass:#MIXED
    }
  }
    
@ObjectModel.semanticKey: ['PurchaseRequisition',
                  'PurchaseRequisitionItem',
                  'TextObjectCategory',
                  'TextObjectKey',
                  'TextObjectType',
                  'Language' ]

@Metadata.ignorePropagatedAnnotations: true
//@ObjectModel.query.implementedBy:'ABAP:CL_MM_PUR_REQ_QRY_ITEM_TEXT'

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

define view entity I_PurchaseReqnItemTextTP 
  as projection on R_PurchaseReqnItemTextTP
{
  key PurchaseRequisition,
  key PurchaseRequisitionItem,
  key TextObjectCategory,
  key TextObjectKey,
  key TextObjectType,
  key Language,
 //     @ObjectModel.virtualElement: true
      PlainLongText,
      FixedIndicator,
       // Field added for Etag
       @Semantics.systemDateTime.lastChangedAt: true
       LastChangeDateTime,
      
      /* Associations */
      _PurchaseRequisitionItem : redirected to parent I_PurchaseReqnItemTP,
      _PurReqn                 : redirected to I_PurchaseRequisitionTP

}
```
