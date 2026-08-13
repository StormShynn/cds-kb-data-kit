---
name: D_SUPLRINVCCHANGEPOITEMP
description: "D Suplrinvcchangepoitemp"
semantic_vi: "View D_SUPLRINVCCHANGEPOITEMP cung cấp truy cập vào các bản ghi thay đổi hóa đơn nhà cung cấp cho các thay đổi ở mức độ chi tiết của hàng hóa trong thành phần MM-IV-LIV-2CL. Nó được sử dụng để lấy thông tin về các thay đổi được thực hiện trên hóa đơn nhà cung cấp."
keywords:
  - "supplier invoice"
  - "thay đổi hóa đơn nhà cung cấp"
  - "mm-iv-liv-2cl"
  - "item-level change"
  - "sourcing & procurement"
  - "lob:sourcing & procurement"
  - "ekko"
  - "purchasing"
  - "đơn mua hàng"
  - "thay đổi ở mức độ chi tiết"
semantic_en: "The D_SUPLRINVCCHANGEPOITEMP view provides access to supplier invoice change records for item-level changes in the MM-IV-LIV-2CL component. It is used to retrieve information about changes made to supplier invoices."
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
# D_SUPLRINVCCHANGEPOITEMP

**D Suplrinvcchangepoitemp**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierInvoiceItem` |  | |  | `rblgp` |  |  |
| `SuplrInvcIsSubsqntDebitCrdt` |  | |  | `tbtkz` |  |  |
| `SupplierInvoiceItemText` |  | |  | `sgtxt` |  |  |
| `IsNotCashDiscountLiable` |  | |  | `xskrl` |  |  |
| `IsFinallyInvoiced` |  | |  | `erekz` |  |  |
| `D_SuplrInvcChangeAccAssgmtP` |  | |  | `_AccountAssignments : composition [0..*] of D_SuplrInvcChangeAccAssgmtP` |  |  |
| `_SupplierInvoice` | | ✓ | | | | |

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
