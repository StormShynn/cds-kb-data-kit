---
name: D_TRANSPORDUNASSIGNFRTUNITP
description: "D Transpordunassignfrtunitp"
semantic_vi: "View D_TRANSPORDUNASSIGNFRTUNITP hiển thị các tham số không gán đơn vị vận chuyển cho quản lý vận chuyển. Nó được sử dụng để lấy hoặc cập nhật các tham số không gán đơn vị vận chuyển."
keywords:
  - "freight unit"
  - "unassignment"
  - "transportation management"
  - "tm"
  - "tm-frm"
  - "transactional processing"
  - "đơn vị vận chuyển"
  - "không gán"
  - "quản lý vận chuyển"
semantic_en: "The D_TRANSPORDUNASSIGNFRTUNITP CDS view exposes freight unit unassignment parameters for transportation management. It is used to retrieve or update freight unit unassignment parameters."
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
  - transactional-processing
  - component:TM-FRM-2CL
  - lob:Other
---
# D_TRANSPORDUNASSIGNFRTUNITP

**D Transpordunassignfrtunitp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `/scmtms/vdm_freight_unit_uuid` |  | |  | `key FreightUnitUUID : /scmtms/vdm_freight_unit_uuid` |  |  |
| `D_FreightUnitUnassignParameter` |  | |  | `_FreightUnits : composition [0..*] of D_FreightUnitUnassignParameter` |  |  |

## Source Code

```abap
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'UnassignFreightUnit Action Par'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
define root abstract entity D_TranspOrdUnassignFrtUnitP
{
  key FreightUnitUUID : /scmtms/vdm_freight_unit_uuid;
      _FreightUnits   : composition [0..*] of D_FreightUnitUnassignParameter;
}
```
