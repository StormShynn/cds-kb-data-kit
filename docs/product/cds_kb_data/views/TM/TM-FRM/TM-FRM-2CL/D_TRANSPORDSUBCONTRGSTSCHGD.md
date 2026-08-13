---
name: D_TRANSPORDSUBCONTRGSTSCHGD
description: "D Transpordsubcontrgstschgd"
semantic_vi: "View D_TRANSPORDSUBCONTRGSTSCHGD hiển thị các thay đổi trạng thái nhà thầu phụ vận tải, có thể được sử dụng để theo dõi các thay đổi trạng thái nhà thầu phụ cho các đơn hàng vận tải."
keywords:
  - "transportation order"
  - "đơn hàng vận tải"
  - "subcontractor status"
  - "trạng thái nhà thầu phụ"
  - "transportation management"
  - "quản lý vận tải"
  - "tm"
  - "tm-frm"
  - "sap cds view"
semantic_en: "The D_TRANSPORDSUBCONTRGSTSCHGD view exposes transportation order subcontractor status changes, which can be used to track changes in subcontractor status for transportation orders."
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
# D_TRANSPORDSUBCONTRGSTSCHGD

**D Transpordsubcontrgstschgd**

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
| `TranspOrderSubcontrgSts` |  | |  | `/scmtms/tor_subcontr_status` |  |  |
| `D_TranspOrdSubcontrgStsBfr` |  | |  | `__before : composition [1..1] of D_TranspOrdSubcontrgStsBfr` |  |  |

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'TransportationOrder'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_TranspOrdSubcontrgStsChgd
{
  TransportationOrder        : /scmtms/tor_id;
  TransportationOrderType    : /scmtms/tor_type;
  TransportationMode         : /scmtms/trmodcode;
  TransportationShippingType : /scmtms/shipping_type;
  Carrier                    : /scmtms/pty_carrier;
  TranspPurgOrgExtID         : /scmtms/vdm_pur_org_ext_id;
  TranspOrderSubcontrgSts    : /scmtms/tor_subcontr_status;
  __before                   : composition [1..1] of D_TranspOrdSubcontrgStsBfr;

}
```
