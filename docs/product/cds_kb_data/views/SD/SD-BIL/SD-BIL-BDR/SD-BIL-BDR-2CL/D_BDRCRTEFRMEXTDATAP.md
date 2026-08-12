---
name: D_BDRCRTEFRMEXTDATAP
description: "D Bdrcrtefrmextdatap"
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# D_BDRCRTEFRMEXTDATAP

**D Bdrcrtefrmextdatap**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceLogicalSystem` |  | |  | `sdbil_odata_source_system` |  |  |
| `D_BDRCrteFrmExtDataControlP` |  | |  | `_Control : composition [0..1] of D_BDRCrteFrmExtDataControlP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Create BDR from External Data - Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_BDRCrteFrmExtDataP
{

  ReferenceLogicalSystem : sdbil_odata_source_system; // Mandatory

  _BillableDocument      : association [1..*] to D_BDRCrteFrmExtBllbleDocP on 1 = 0;

  _Control               : composition [0..1] of D_BDRCrteFrmExtDataControlP;


}
```
