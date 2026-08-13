---
name: D_TRANSPORDEXECUTIONSTSCHGD
description: "D Transpordexecutionstschgd"
semantic_vi: "View D_TRANSPORDEXECUTIONSTSCHGD hiển thị các thay đổi trạng thái thực hiện vận chuyển cho một đơn hàng vận chuyển cụ thể. Nó có thể được sử dụng để theo dõi các bản cập nhật trạng thái của đơn hàng vận chuyển trong thành phần TM-FRM-2CL."
keywords:
  - "transportation"
  - "execution"
  - "status"
  - "change"
  - "transportation order"
  - "đơn hàng vận chuyển"
  - "thay đổi trạng thái"
  - "tm-frm-2cl"
  - "sap"
  - "cds view"
semantic_en: "The D_TRANSPORDEXECUTIONSTSCHGD view exposes transportation execution status changes for a given transportation order. It can be used to track the status updates of transportation orders in the TM-FRM-2CL component."
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
# D_TRANSPORDEXECUTIONSTSCHGD

**D Transpordexecutionstschgd**

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
| `TransportationOrderExecSts` |  | |  | `/scmtms/tor_execution_status` |  |  |
| `D_TranspOrdExecutionStsBfr` |  | |  | `__before : composition [1..1] of D_TranspOrdExecutionStsBfr` |  |  |

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'TransportationOrder'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_TranspOrdExecutionStsChgd
{
  TransportationOrder        : /scmtms/tor_id;
  TransportationOrderType    : /scmtms/tor_type;
  TransportationMode         : /scmtms/trmodcode;
  TransportationShippingType : /scmtms/shipping_type;
  Carrier                    : /scmtms/pty_carrier;
  TranspPurgOrgExtID         : /scmtms/vdm_pur_org_ext_id;
  TransportationOrderExecSts : /scmtms/tor_execution_status;
  __before                   : composition [1..1] of D_TranspOrdExecutionStsBfr;

}
```
