---
name: I_PURCHASEORDERNOTETP_2
description: "Purchase OrderNOTETP 2"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
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
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# I_PURCHASEORDERNOTETP_2

**Purchase OrderNOTETP 2**

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
| `TextObjectType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `PlainLongText` |  | |  |  |  |  |
| `_Language` | | ✓ | | | | |
| `_PurchaseOrder` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Purchase Order Header Note Interface'
@AccessControl.authorizationCheck: #CHECK 
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_PurchaseOrderNoteTP_2
  as projection on R_PurchaseOrderNoteTP
{

  key PurchaseOrder,
  key TextObjectType,
  key Language,
      PlainLongText,

      /* Associations */
      _Language,
      _PurchaseOrder : redirected to parent I_PurchaseOrderTP_2

}
```
