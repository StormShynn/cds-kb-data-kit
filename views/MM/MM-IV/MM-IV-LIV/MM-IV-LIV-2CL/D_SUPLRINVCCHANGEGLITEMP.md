---
name: D_SUPLRINVCCHANGEGLITEMP
description: D Suplrinvcchangeglitemp
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
# D_SUPLRINVCCHANGEGLITEMP

**D Suplrinvcchangeglitemp**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SupplierInvoiceItem` | `cobl_nr` |
| `GLAccount` | `saknr` |
| `CompanyCode` | `bukrs` |
| `SupplierInvoiceItemText` | `sgtxt` |
| `CostCenter` | `kostl` |
| `SalesOrder` | `vbeln` |
| `SalesOrderItem` | `vbelp` |
| `InternalOrder` | `aufnr` |
| `ProfitCenter` | `prctr` |
| `BusinessArea` | `gsber` |
| `CostObject` | `kstrg` |
| `WBSElementInternalID` | `ps_s4_pspnr` |
| `CostCtrActivityType` | `lstar` |
| `PersonnelNumber` | `pernr_d` |
| `BusinessProcess` | `co_prznr` |
| `AssignmentReference` | `dzuonr` |
| `IsNotCashDiscountLiable` | `xskrl` |
| `WorkItem` | `/cpd/pfp_workitem_id` |
| `FinancialTransactionType` | `rmvct` |
| `_SupplierInvoice` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Direct Postings to GL account'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_SuplrInvcChangeGLItemP
{
      SupplierInvoiceItem       : cobl_nr;
      GLAccount                 : saknr;
      CompanyCode               : bukrs;
      SupplierInvoiceItemText   : sgtxt;
      CostCenter                : kostl;
      SalesOrder                : vbeln;
      SalesOrderItem            : vbelp;
      InternalOrder             : aufnr;
      ProfitCenter              : prctr;
      BusinessArea              : gsber;
      CostObject                : kstrg;
      WBSElementInternalID      : ps_s4_pspnr;
      CostCtrActivityType       : lstar;
      PersonnelNumber           : pernr_d;
      BusinessProcess           : co_prznr;
      AssignmentReference       : dzuonr;
      IsNotCashDiscountLiable   : xskrl;
      WorkItem                  : /cpd/pfp_workitem_id;
      FinancialTransactionType  : rmvct;

      _SupplierInvoice          : association to parent D_SuplrInvcChangeP;
}
```
