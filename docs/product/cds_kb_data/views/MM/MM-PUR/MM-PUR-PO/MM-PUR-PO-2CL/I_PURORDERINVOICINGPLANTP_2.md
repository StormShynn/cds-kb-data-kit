---
name: I_PURORDERINVOICINGPLANTP_2
description: "Purorderinvoicingplantp 2"
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
  - plant
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
  - bo:Plant
---
# I_PURORDERINVOICINGPLANTP_2

**Purorderinvoicingplantp 2**

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
| `InvoicingPlan` | ✓ | |  |  |  |  |
| `InvoicingPlanType` |  | |  |  |  |  |
| `InvoicingPlanStartDate` |  | |  |  |  |  |
| `InvoicingPlanEndDate` |  | |  |  |  |  |
| `InvoicingPlanNextInvcDateRule` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `PurchaseOrderType` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `_PurchaseOrder` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |
| `_POInvoicingPlanItem` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Purchase Order Invoicing Plan'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_PurOrderInvoicingPlanTP_2
  as projection on R_PurchaseOrderInvoicingPlanTP as _PurchaseOrderInvoicingPlanTP
{

  key PurchaseOrder,
  key PurchaseOrderItem,
  key InvoicingPlan,
      InvoicingPlanType,
      InvoicingPlanStartDate,
      InvoicingPlanEndDate,
      InvoicingPlanNextInvcDateRule,
      PurchasingGroup,
      PurchaseOrderType,
      PurchasingOrganization,
      Plant,

      /* Composition */
      _PurchaseOrder       : redirected to I_PurchaseOrderTP_2,
      _PurchaseOrderItem   : redirected to parent I_PurchaseOrderItemTP_2,
      _POInvoicingPlanItem : redirected to composition child I_POInvoicingPlanItemTP_2

}
```
