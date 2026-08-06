---
name: D_SUPLRINVCCHANGEPOITEMP
description: D Suplrinvcchangepoitemp
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - item-level
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRINVCCHANGEPOITEMP

**D Suplrinvcchangepoitemp**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SupplierInvoiceItem` | `rblgp` |
| `SuplrInvcIsSubsqntDebitCrdt` | `tbtkz` |
| `SupplierInvoiceItemText` | `sgtxt` |
| `IsNotCashDiscountLiable` | `xskrl` |
| `IsFinallyInvoiced` | `erekz` |
| `D_SuplrInvcChangeAccAssgmtP` | `_AccountAssignments : composition [0..*] of D_SuplrInvcChangeAccAssgmtP` |
| `_SupplierInvoice` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Items with Purchase Order Reference'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_SuplrInvcChangePOItemP
{
      SupplierInvoiceItem            : rblgp;//not changeable
      SuplrInvcIsSubsqntDebitCrdt    : tbtkz;
      SupplierInvoiceItemText        : sgtxt;
      IsNotCashDiscountLiable        : xskrl;
      IsFinallyInvoiced              : erekz;

      _AccountAssignments            : composition [0..*] of D_SuplrInvcChangeAccAssgmtP;
      _SupplierInvoice               : association to parent D_SuplrInvcChangeP;
}
```
