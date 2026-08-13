---
name: D_TRANSPORDBLOCKSTSCHGD
description: "D Transpordblockstschgd"
semantic_vi: "View D_TRANSPORDBLOCKSTSCHGD cung cấp thông tin thay đổi trạng thái chặn vận chuyển đơn hàng, có thể được sử dụng để theo dõi và phân tích các thay đổi trạng thái chặn vận chuyển đơn hàng."
keywords:
  - "transportation order"
  - "đơn vận chuyển"
  - "block status"
  - "trạng thái chặn"
  - "transportation management"
  - "quản lý vận chuyển"
  - "sap tm"
  - "tm-frm-2cl"
semantic_en: "The D_TRANSPORDBLOCKSTSCHGD view provides transportation order block status changes, which can be used to track and analyze transportation order block status updates."
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
# D_TRANSPORDBLOCKSTSCHGD

**D Transpordblockstschgd**

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
| `TranspOrdExecutionIsBlocked` |  | |  | `/scmtms/block_execution` |  |  |
| `D_TranspOrdBlockStsBfr` |  | |  | `__before : composition [1..1] of D_TranspOrdBlockStsBfr` |  |  |

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'TransportationOrder'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_TranspOrdBlockStsChgd
{
  TransportationOrder         : /scmtms/tor_id;
  TransportationOrderType     : /scmtms/tor_type;
  TransportationMode          : /scmtms/trmodcode;
  TransportationShippingType  : /scmtms/shipping_type;
  Carrier                     : /scmtms/pty_carrier;
  TranspPurgOrgExtID          : /scmtms/vdm_pur_org_ext_id;
  TranspOrdExecutionIsBlocked : /scmtms/block_execution;
  __before                    : composition [1..1] of D_TranspOrdBlockStsBfr;

}
```
