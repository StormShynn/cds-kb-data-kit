---
name: D_SUPLRINVCCANCELP
description: "D Suplrinvccancelp"
semantic_vi: "View D Suplrinvccancelp hiển thị dữ liệu hủy đơn hàng của nhà cung cấp, có thể được sử dụng để lấy thông tin về các đơn hàng bị hủy và lý do hủy."
keywords:
  - "supplier invoice"
  - "đơn hàng nhà cung cấp"
  - "hủy đơn hàng"
  - "reversal reason"
  - "reason for cancellation"
  - "cancellation data"
  - "dữ liệu hủy"
  - "sap mm iv liv"
  - "mm iv liv 2cl"
semantic_en: "The D Suplrinvccancelp view exposes supplier invoice cancellation data, which can be used to retrieve information about cancelled invoices and their reversal reasons."
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
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRINVCCANCELP

**D Suplrinvccancelp**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReversalReason` |  | |  | `stgrd` |  |  |
| `PostingDate` |  | |  | `budat` |  |  |

## Source Code

```abap
@EndUserText.label: 'Supplier Invoice Reversal Parameters'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_SuplrInvcCancelP
{
  //key DummyKey        : abap.char(1);
      ReversalReason  : stgrd;
      PostingDate     : budat;
}
```
