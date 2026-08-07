---
name: D_PCLBLFLDVERSREGLBLFLDCALCTRP
description: D Pclblfldversreglblfldcalctrp
app_component: EHS-SUS-SDS
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-SDS
  - component:EHS-SUS-SDS
  - lob:Other
---
# D_PCLBLFLDVERSREGLBLFLDCALCTRP

**D Pclblfldversreglblfldcalctrp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-SDS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ehlbl_id` |  | |  | `key ProdCmplncLabelFieldID : ehlbl_id` |
| `PCLblFieldCalculatorClassName` |  | |  | `classname` |

## Source Code

```abap
@EndUserText.label: 'Par struct for lbl fld calc registration'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE] 
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define abstract entity D_PCLblFldVersRegLblFldCalctrP  {
   key ProdCmplncLabelFieldID        : ehlbl_id;
       PCLblFieldCalculatorClassName   : classname;
}
```
