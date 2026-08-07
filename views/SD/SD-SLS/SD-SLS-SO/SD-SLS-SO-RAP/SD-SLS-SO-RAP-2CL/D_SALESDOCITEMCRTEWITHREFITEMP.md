---
name: D_SALESDOCITEMCRTEWITHREFITEMP
description: D Salesdocitemcrtewithrefitemp
app_component: SD-SLS-SO-RAP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - item-level
  - component:SD-SLS-SO-RAP-2CL
  - lob:Sales & Distribution
---
# D_SALESDOCITEMCRTEWITHREFITEMP

**D Salesdocitemcrtewithrefitemp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-RAP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceSDDocument` |  | |  | `vgbel` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sls Doc Item Create with Ref actn param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_SalesDocItemCrteWithRefItemP
{

  ReferenceSDDocument      : vgbel;

  _ReferenceSDDocumentItems : association [0..*] to D_SalesDocCreateWithRefItemP on 1 = 0; //reuse

}
```
