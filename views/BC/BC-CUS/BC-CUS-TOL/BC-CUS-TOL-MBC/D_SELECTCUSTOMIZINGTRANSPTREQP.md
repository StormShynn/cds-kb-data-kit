---
name: D_SELECTCUSTOMIZINGTRANSPTREQP
description: D Selectcustomizingtransptreqp
app_component: BC-CUS-TOL-MBC
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-CUS
  - BC-CUS-TOL
  - component:BC-CUS-TOL-MBC
  - lob:Basis Components
---
# D_SELECTCUSTOMIZINGTRANSPTREQP

**D Selectcustomizingtransptreqp**

| Property | Value |
|---|---|
| App Component | `BC-CUS-TOL-MBC` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `trkorr` | `key TransportRequestID : trkorr` |

## Source Code

```abap
@EndUserText.label: 'Select Customizing Transport Request'
@VDM.usage.type: [ #ACTION_PARAMETER_STRUCTURE]
define abstract entity D_SelectCustomizingTransptReqP
{
      @Consumption.valueHelpDefinition:
      [
        { entity.name    : 'C_OpenCustomizingRequestVH',
          entity.element : 'TransportRequestID',
          label          : 'Select Customizing Transport Request' }
      ]
  @EndUserText.label: 'Customizing Transport Request'    
  key TransportRequestID : trkorr;
}
```
