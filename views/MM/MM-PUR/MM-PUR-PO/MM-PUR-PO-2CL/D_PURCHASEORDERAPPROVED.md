---
name: D_PURCHASEORDERAPPROVED
description: "D Purchase OrderAPPROVED"
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
  - purchase-order
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# D_PURCHASEORDERAPPROVED

**D Purchase OrderAPPROVED**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrderType` |  | |  | `vdm_esart` |  |  |
| `PurchasingOrganization` |  | |  | `ekorg` |  |  |
| `PurchasingGroup` |  | |  | `ekgrp` |  |  |
| `Supplier` |  | |  | `vdm_supplierref` |  |  |

## Source Code

```abap
@EndUserText.label: 'Purchase Order Approved'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_PurchaseOrderApproved
{
   PurchaseOrderType : vdm_esart;
   PurchasingOrganization: ekorg;
   PurchasingGroup : ekgrp;
   Supplier : vdm_supplierref; 
}
```
