---
name: D_PURCHASEREQNITEMCREATED
description: D Purchase RequisitionNITEMCREATED
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
  - purchase-requisition
  - item-level
  - component:MM-PUR-REQ-2CL
  - lob:Sourcing & Procurement
---
# D_PURCHASEREQNITEMCREATED

**D Purchase RequisitionNITEMCREATED**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PurchaseRequisitionType` | `bbsrt` |
| `PurchasingDocumentItemCategory` | `pstyp` |
| `MaterialGroup` | `matkl` |
| `PurchasingOrganization` | `ekorg` |
| `PurchasingGroup` | `ekgrp` |
| `Plant` | `ewerk` |

## Source Code

```abap
@EndUserText.label: 'Purchase Requisition Item Created'
@Event: { description: 'This event is raised when a purchase requisition item instance has been Created',
          implementedBy:['ABAP:RAP_EVENT']}
//@Event.sapObjectNodeTypeKey:[{element:'PurchaseRequisition'},
//                            {element:'PurchaseRequisitionItem'}]     
@ObjectModel.sapObjectNodeType.name: 'PurchaseRequisitionItem'       
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]                              
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_PurchaseReqnItemCreated
{
//  PurchaseRequisitionItem        : vdm_purchaserequisitionitem;
  PurchaseRequisitionType        : bbsrt;
  PurchasingDocumentItemCategory : pstyp;
  MaterialGroup                  : matkl;  
  PurchasingOrganization         : ekorg;
  PurchasingGroup                : ekgrp;
  Plant                          : ewerk;
}
```
