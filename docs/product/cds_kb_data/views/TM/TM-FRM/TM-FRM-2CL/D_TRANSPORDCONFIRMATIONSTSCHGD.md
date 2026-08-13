---
name: D_TRANSPORDCONFIRMATIONSTSCHGD
description: "D Transpordconfirmationstschgd"
semantic_vi: "View D_TRANSPORDCONFIRMATIONSTSCHGD hiển thị các thay đổi trạng thái xác nhận vận chuyển cho một đơn hàng vận chuyển, cho phép bạn theo dõi và phân tích các thay đổi trạng thái xác nhận vận chuyển."
keywords:
  - "transportation order"
  - "đơn hàng vận chuyển"
  - "transportation confirmation"
  - "xác nhận vận chuyển"
  - "status change"
  - "thay đổi trạng thái"
  - "sap tm"
  - "tm-frm-2cl"
semantic_en: "The D_TRANSPORDCONFIRMATIONSTSCHGD view exposes transportation confirmation status changes for a transportation order, allowing you to track and analyze changes to the status of a shipment confirmation."
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
# D_TRANSPORDCONFIRMATIONSTSCHGD

**D Transpordconfirmationstschgd**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrder` |  | |  | `/scmtms/tor_id` |  |  |
| `TransportationOrderType` |  | |  | `/scmtms/tor_type` |  |  |
| `TransportationMode` |  | |  | `/scmtms/trmodcode` |  |  |
| `TransportationShippingType` |  | |  | `/scmtms/shipping_type` |  |  |
| `Carrier` |  | |  | `/scmtms/pty_carrier` |  |  |
| `TranspPurgOrgExtID` |  | |  | `/scmtms/vdm_pur_org_ext_id` |  |  |
| `TransportationOrderConfSts` |  | |  | `/scmtms/tor_confirm_status` |  |  |
| `D_TranspOrdConfirmationStsBfr` |  | |  | `__before : composition [1..1] of D_TranspOrdConfirmationStsBfr` |  |  |

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'TransportationOrder'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_TranspOrdConfirmationStsChgd
{
  TransportationOrder        : /scmtms/tor_id;
  TransportationOrderType    : /scmtms/tor_type;
  TransportationMode         : /scmtms/trmodcode;
  TransportationShippingType : /scmtms/shipping_type;
  Carrier                    : /scmtms/pty_carrier;
  TranspPurgOrgExtID         : /scmtms/vdm_pur_org_ext_id;
  TransportationOrderConfSts : /scmtms/tor_confirm_status;
  __before                   : composition [1..1] of D_TranspOrdConfirmationStsBfr;

}
```
