---
name: I_POINVOICINGPLANITEMTP_2
description: "Poinvoicingplanitemtp 2"
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
  - item-level
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_POINVOICINGPLANITEMTP_2

**Poinvoicingplanitemtp 2**

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
| `InvoicingPlanItem` | ✓ | |  |  |  |  |
| `InvoicingPlan` | ✓ | |  |  |  |  |
| `InvoicingPlanSettlementFromDte` |  | |  |  |  |  |
| `InvoicingPlanSettlementToDte` |  | |  |  |  |  |
| `InvoicingPlanInvoicingDate` |  | |  |  |  |  |
| `InvoicingPlanAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `PurchaseOrderType` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `_PurchaseOrder` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |
| `_PurchaseOrderInvoicingPlan` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Purchase Order Invoicing Plan Item'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_POInvoicingPlanItemTP_2
  as projection on R_POInvoicingPlanItemTP as _POInvoicingPlanItemTP
{

  key PurchaseOrder,
  key PurchaseOrderItem,
  key InvoicingPlanItem,
  key InvoicingPlan,

      InvoicingPlanSettlementFromDte,
      InvoicingPlanSettlementToDte,
      InvoicingPlanInvoicingDate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      InvoicingPlanAmount, 
      TransactionCurrency,
//     InvoicingPlanAmountPercent,

      PurchasingOrganization,
      PurchasingGroup,
      PurchaseOrderType,
      Plant,

      /* Associations */
      _PurchaseOrder : redirected to I_PurchaseOrderTP_2,
      _PurchaseOrderItem: redirected to I_PurchaseOrderItemTP_2,
      _PurchaseOrderInvoicingPlan  : redirected to parent I_PurOrderInvoicingPlanTP_2
}
```
