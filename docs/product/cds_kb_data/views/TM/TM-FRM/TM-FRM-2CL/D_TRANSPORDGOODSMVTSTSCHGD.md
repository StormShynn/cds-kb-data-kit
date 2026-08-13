---
name: D_TRANSPORDGOODSMVTSTSCHGD
description: "D Transpordgoodsmvtstschgd"
semantic_vi: "View D_TRANSPORDGOODSMVTSTSCHGD hiển thị các thay đổi trạng thái di chuyển hàng hóa trong đơn vận chuyển, có thể được sử dụng để theo dõi và phân tích các thay đổi trạng thái di chuyển hàng hóa trong đơn vận chuyển."
keywords:
  - "transportation order"
  - "đơn vận chuyển"
  - "goods movement"
  - "di chuyển hàng hóa"
  - "status change"
  - "thay đổi trạng thái"
  - "sap tm"
  - "tm-frm-2cl"
semantic_en: "The D_TRANSPORDGOODSMVTSTSCHGD CDS view exposes transportation order goods movement status changes, which can be used to track and analyze changes in the status of goods movements within a transportation order."
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
# D_TRANSPORDGOODSMVTSTSCHGD

**D Transpordgoodsmvtstschgd**

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
| `TranspOrdGoodsMovementStatus` |  | |  | `/scmtms/dlv_goods_movem_status` |  |  |
| `D_TranspOrdGoodsMvtStsBfr` |  | |  | `__before : composition [1..1] of D_TranspOrdGoodsMvtStsBfr` |  |  |

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'TransportationOrder'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_TranspOrdGoodsMvtStsChgd
{
  TransportationOrder          : /scmtms/tor_id;
  TransportationOrderType      : /scmtms/tor_type;
  TransportationMode           : /scmtms/trmodcode;
  TransportationShippingType   : /scmtms/shipping_type;
  Carrier                      : /scmtms/pty_carrier;
  TranspPurgOrgExtID           : /scmtms/vdm_pur_org_ext_id;
  TranspOrdGoodsMovementStatus : /scmtms/dlv_goods_movem_status;
  __before                     : composition [1..1] of D_TranspOrdGoodsMvtStsBfr;

}
```
