---
name: I_JOINTVENTUREDESCRIPTIONTP
description: Jointventuredescriptiontp
app_component: CA-JVA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - CA-JVA-JVA
  - interface-view
  - text-view
  - transactional-processing
  - component:CA-JVA-JVA
  - lob:Cross-Application Components
---
# I_JOINTVENTUREDESCRIPTIONTP

**Jointventuredescriptiontp**

| Property | Value |
|---|---|
| App Component | `CA-JVA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `JointVenture` | ✓ | |  |  |
| `JointVentureName` |  | |  |  |
| `_JointVenture` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Joint Venture Description - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   usageType: {
     dataClass:      #MASTER,
     serviceQuality: #C,
     sizeCategory:   #XL
   }
}

define view entity I_JointVentureDescriptionTP

  as projection on R_JointVentureDescriptionTP

{
  key CompanyCode,
  key Language,
  key JointVenture,

      JointVentureName,

      _JointVenture : redirected to parent I_JointVentureTP
}
```
