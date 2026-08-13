---
name: D_SUPLRINVCCHANGEGLITEMP
description: "D Suplrinvcchangeglitemp"
semantic_vi: "View D_SUPLRINVCCHANGEGLITEMP hiển thị các thay đổi của đơn hàng nhà cung cấp liên quan đến tài khoản kế toán chung, cung cấp dữ liệu để phân tích và quản lý các giao dịch tài chính trong quá trình cung cấp và mua sắm."
keywords:
  - "supplier invoice"
  - "đơn hàng nhà cung cấp"
  - "tài khoản kế toán chung"
  - "sourcing and procurement"
  - "financial transactions"
  - "ekko"
  - "mm-iv"
  - "mm-iv-liv"
  - "item-level"
  - "general ledger account"
semantic_en: "The D_SUPLRINVCCHANGEGLITEMP view exposes supplier invoice item changes related to general ledger accounts, providing data for analyzing and managing financial transactions in the sourcing and procurement process."
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierInvoiceItem` |  | |  | `cobl_nr` |  |  |
| `GLAccount` |  | |  | `saknr` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `SupplierInvoiceItemText` |  | |  | `sgtxt` |  |  |
| `CostCenter` |  | |  | `kostl` |  |  |
| `SalesOrder` |  | |  | `vbeln` |  |  |
| `SalesOrderItem` |  | |  | `vbelp` |  |  |
| `InternalOrder` |  | |  | `aufnr` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `CostObject` |  | |  | `kstrg` |  |  |
| `WBSElementInternalID` |  | |  | `ps_s4_pspnr` |  |  |
| `CostCtrActivityType` |  | |  | `lstar` |  |  |
| `PersonnelNumber` |  | |  | `pernr_d` |  |  |
| `BusinessProcess` |  | |  | `co_prznr` |  |  |
| `AssignmentReference` |  | |  | `dzuonr` |  |  |
| `IsNotCashDiscountLiable` |  | |  | `xskrl` |  |  |
| `WorkItem` |  | |  | `/cpd/pfp_workitem_id` |  |  |
| `FinancialTransactionType` |  | |  | `rmvct` |  |  |
| `_SupplierInvoice` | | ✓ | | | | |

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
