---
name: D_INSPLOTOPERATIONCREATED
description: D Insplotoperationcreated
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - component:QM-IM-2CL
  - lob:Quality Management
---
# D_INSPLOTOPERATIONCREATED

**D Insplotoperationcreated**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `element:'InspectionOperation'` |  | |  |  |

## Source Code

```abap
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'InspectionOperation'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Event.sapObjectNodeTypeKey:[{element:'InspectionLot'},
                            {element:'InspectionOperation'}]
@Metadata.allowExtensions: true
define abstract entity D_InspLotOperationCreated {
  InspectionSubSystem         : qeifsubsys;
  InspPlanOperationInternalID : qlfnkn;
  WorkCenterInternalID        : pph_arbid;
}
```
