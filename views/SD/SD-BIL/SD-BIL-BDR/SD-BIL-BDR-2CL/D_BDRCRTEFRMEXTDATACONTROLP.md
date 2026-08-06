---
name: D_BDRCRTEFRMEXTDATACONTROLP
description: D Bdrcrtefrmextdatacontrolp
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
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
# D_BDRCRTEFRMEXTDATACONTROLP

**D Bdrcrtefrmextdatacontrolp**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BillableDocValidityIsChecked` | `billabledocvalidityischecked` |
| `_DummyAssociation` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Create BDR from Ext Data - Control Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_BDRCrteFrmExtDataControlP
{

      BillableDocValidityIsChecked : billabledocvalidityischecked;
      
      _DummyAssociation            : association to parent D_BDRCrteFrmExtDataP;
}
```
