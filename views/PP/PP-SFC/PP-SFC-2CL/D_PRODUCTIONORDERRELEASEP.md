---
name: D_PRODUCTIONORDERRELEASEP
description: D Production OrderRELEASEP
app_component: PP-SFC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - product
  - production-order
  - lease
  - component:PP-SFC-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# D_PRODUCTIONORDERRELEASEP

**D Production OrderRELEASEP**

| Property | Value |
|---|---|
| App Component | `PP-SFC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrdRelIsPmtdDsptMisgParts` |  | |  | `abap_boolean` |  |  |

## Source Code

```abap
@EndUserText.label: 'Release Production Order Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_ProductionOrderReleaseP
{
  OrdRelIsPmtdDsptMisgParts : abap_boolean;
}
```
