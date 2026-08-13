---
name: D_TRANSPORDLIFECYCLESTSCHGD
description: "D Transpordlifecyclestschgd"
semantic_vi: "View D_TRANSPORDLIFECYCLESTSCHGD hiển thị các thay đổi trạng thái vòng đời vận chuyển đơn, có thể được sử dụng để theo dõi và phân tích các thay đổi trạng thái vận chuyển đơn."
keywords:
  - "transportation order"
  - "đơn vận chuyển"
  - "transportation lifecycle"
  - "trạng thái vòng đời vận chuyển"
  - "status change"
  - "thay đổi trạng thái"
  - "tm"
  - "tm-frm"
  - "sap tm"
  - "sap tm-frm"
semantic_en: "The D_TRANSPORDLIFECYCLESTSCHGD view exposes transportation order lifecycle status changes, which can be used to track and analyze changes in transportation order status."
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
# D_TRANSPORDLIFECYCLESTSCHGD

**D Transpordlifecyclestschgd**

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
| `TranspOrdLifeCycleStatus` |  | |  | `/scmtms/tor_lc_status` |  |  |
| `D_TranspOrdLifecycleStsBfr` |  | |  | `__before : composition [1..1] of D_TranspOrdLifecycleStsBfr` |  |  |

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'TransportationOrder'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_TranspOrdLifecycleStsChgd
{
  TransportationOrder        : /scmtms/tor_id;
  TransportationOrderType    : /scmtms/tor_type;
  TransportationMode         : /scmtms/trmodcode;
  TransportationShippingType : /scmtms/shipping_type;
  Carrier                    : /scmtms/pty_carrier;
  TranspPurgOrgExtID         : /scmtms/vdm_pur_org_ext_id;
  TranspOrdLifeCycleStatus   : /scmtms/tor_lc_status;
  __before                   : composition [1..1] of D_TranspOrdLifecycleStsBfr;

}
```
