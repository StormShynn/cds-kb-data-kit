---
name: D_TRANSPORDGOODSMVTSTSCHGD
description: D Transpordgoodsmvtstschgd
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
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

| Field | Data Source |
|---|---|
| `TransportationOrder` | `/scmtms/tor_id` |
| `TransportationOrderType` | `/scmtms/tor_type` |
| `TransportationMode` | `/scmtms/trmodcode` |
| `TransportationShippingType` | `/scmtms/shipping_type` |
| `Carrier` | `/scmtms/pty_carrier` |
| `TranspPurgOrgExtID` | `/scmtms/vdm_pur_org_ext_id` |
| `TranspOrdGoodsMovementStatus` | `/scmtms/dlv_goods_movem_status` |
| `D_TranspOrdGoodsMvtStsBfr` | `__before : composition [1..1] of D_TranspOrdGoodsMvtStsBfr` |

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
