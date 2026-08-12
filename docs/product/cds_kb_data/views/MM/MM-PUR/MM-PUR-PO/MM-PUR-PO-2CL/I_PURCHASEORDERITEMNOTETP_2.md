---
name: I_PURCHASEORDERITEMNOTETP_2
description: "Purchase OrderITEMNOTETP 2"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - interface-view
  - transactional-processing
  - purchase-order
  - note
  - item-level
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# I_PURCHASEORDERITEMNOTETP_2

**Purchase OrderITEMNOTETP 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `PurchaseOrderItem` | ✓ | |  |  |  |  |
| `TextObjectType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `PlainLongText` |  | |  |  |  |  |
| `PurchaseOrderItemUniqueID` |  | |  |  |  |  |
| `_Language` | | ✓ | | | | |
| `_PurchaseOrder` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Purchase Order Item Notes Projection'
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
define view entity I_PurchaseOrderItemNoteTP_2
  as projection on R_PurchaseOrderItemNoteTP
{
  key PurchaseOrder,
  key PurchaseOrderItem,
  key TextObjectType,
  key Language,
      PlainLongText,
      PurchaseOrderItemUniqueID,

      /* Associations */
      _Language,
     // _TextObjectPlainLongText,
      _PurchaseOrder     : redirected to I_PurchaseOrderTP_2,
      _PurchaseOrderItem : redirected to parent I_PurchaseOrderItemTP_2
}
```
