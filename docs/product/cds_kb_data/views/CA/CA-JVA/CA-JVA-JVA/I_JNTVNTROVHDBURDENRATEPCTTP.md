---
name: I_JNTVNTROVHDBURDENRATEPCTTP
description: "Jntvntrovhdburdenratepcttp"
app_component: CA-JVA-JVA
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - CA-JVA-JVA
  - interface-view
  - transactional-processing
  - component:CA-JVA-JVA
  - lob:Cross-Application Components
---
# I_JNTVNTROVHDBURDENRATEPCTTP

**Jntvntrovhdburdenratepcttp**

| Property | Value |
|---|---|
| App Component | `CA-JVA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `JointVenture` | ✓ | |  |  |  |  |
| `JointVentureBurdenRateType` | ✓ | |  |  |  |  |
| `JointVentureOvhdBurdenRatePct` |  | |  |  |  |  |
| `_JointVenture` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Joint Venture Payroll Burden - TP'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.usageType: { dataClass:      #MASTER,
                          serviceQuality: #C,
                          sizeCategory:   #XL }
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_JntVntrOvhdBurdenRatePctTP

  as projection on R_JntVntrOvhdBurdenRatePctTP

{
  key CompanyCode,
  key JointVenture,
  key JointVentureBurdenRateType,

      JointVentureOvhdBurdenRatePct,

      _JointVenture : redirected to parent I_JointVentureTP
}
```
