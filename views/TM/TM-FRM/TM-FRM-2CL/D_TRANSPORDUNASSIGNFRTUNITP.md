---
name: D_TRANSPORDUNASSIGNFRTUNITP
description: D Transpordunassignfrtunitp
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
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

| Field | Data Source |
|---|---|
| `/scmtms/vdm_freight_unit_uuid` | `key FreightUnitUUID : /scmtms/vdm_freight_unit_uuid` |
| `D_FreightUnitUnassignParameter` | `_FreightUnits : composition [0..*] of D_FreightUnitUnassignParameter` |

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
