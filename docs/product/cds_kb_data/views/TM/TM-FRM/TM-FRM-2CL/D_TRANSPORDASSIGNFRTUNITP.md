---
name: D_TRANSPORDASSIGNFRTUNITP
description: "D Transpordassignfrtunitp"
semantic_vi: "CDS view D_TRANSPORDASSIGNFRTUNITP hiển thị các tham số gán đơn vị hàng hóa cho vận tải, hữu ích khi quản lý đơn hàng vận tải hoặc đơn vị hàng hóa."
keywords:
  - "transportation"
  - "freight unit"
  - "assignment parameter"
  - "đơn vị hàng hóa"
  - "gán tham số"
  - "đơn hàng vận tải"
  - "tm"
  - "tm-frm"
  - "transactional-processing"
  - "sap"
  - "cds view"
semantic_en: "The D_TRANSPORDASSIGNFRTUNITP CDS view exposes freight unit assignment parameters for transportation, useful when managing transportation orders or freight units."
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
# D_TRANSPORDASSIGNFRTUNITP

**D Transpordassignfrtunitp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `/scmtms/toritmuuid` |  | |  | `key TransportationOrderItemUUID : /scmtms/toritmuuid` |  |  |
| `D_FreightUnitAssignParameter` |  | |  | `_FreightUnits : composition [0..*] of D_FreightUnitAssignParameter` |  |  |

## Source Code

```abap
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'AssignFreightUnit Action Parameter'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_TranspOrdAssignFrtUnitP
{
  key TransportationOrderItemUUID : /scmtms/toritmuuid;
      _FreightUnits               : composition [0..*] of D_FreightUnitAssignParameter;
}
```
