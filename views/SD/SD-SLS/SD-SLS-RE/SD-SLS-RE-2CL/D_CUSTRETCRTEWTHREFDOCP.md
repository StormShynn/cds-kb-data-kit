---
name: D_CUSTRETCRTEWTHREFDOCP
description: D Custretcrtewthrefdocp
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
---
# D_CUSTRETCRTEWTHREFDOCP

**D Custretcrtewthrefdocp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SalesDocumentType` | `auart` |
| `ReferenceSDDocument` | `vgbel` |

## Source Code

```abap
@EndUserText.label: 'Action Parameter: Create with Ref Header'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_CustRetCrteWthRefDocP
{

  SalesDocumentType        : auart;
  ReferenceSDDocument      : vgbel;

  _ReferenceSDDocumentItems : association [0..*] to D_CustRetItmCrteWthRefDocP on 1 = 0;
  
}
```
