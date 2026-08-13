---
name: D_TRANSPORDCONFIRMATIONSTSBFR
description: "D Transpordconfirmationstsbfr"
semantic_vi: "View D_TRANSPORDCONFIRMATIONSTSBFR hiển thị dữ liệu trạng thái xác nhận vận chuyển cho đơn đặt hàng vận chuyển. Nó được sử dụng để lấy trạng thái xác nhận vận chuyển."
keywords:
  - "transportation order"
  - "đơn đặt hàng vận chuyển"
  - "transportation confirmation"
  - "xác nhận vận chuyển"
  - "status"
  - "thanh toán"
  - "tm"
  - "tm-frm"
  - "sap"
  - "cds view"
semantic_en: "The D_TRANSPORDCONFIRMATIONSTSBFR view exposes transportation confirmation status data for transportation orders. It is used to retrieve the status of transportation confirmations."
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - component:TM-FRM-2CL
  - lob:Other
---
# D_TRANSPORDCONFIRMATIONSTSBFR

**D Transpordconfirmationstsbfr**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderConfSts` |  | |  | `/scmtms/tor_confirm_status` |  |  |
| `_DummyAssociation` | | ✓ | | | | |

## Source Code

```abap
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_TranspOrdConfirmationStsBfr
{
  TransportationOrderConfSts : /scmtms/tor_confirm_status;
  _DummyAssociation          : association to parent D_TranspOrdConfirmationStsChgd;
}
```
