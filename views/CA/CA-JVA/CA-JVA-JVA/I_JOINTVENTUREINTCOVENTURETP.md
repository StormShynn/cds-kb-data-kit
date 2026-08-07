---
name: I_JOINTVENTUREINTCOVENTURETP
description: Jointventureintcoventuretp
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
  - transactional-processing
  - component:CA-JVA-JVA
  - lob:Cross-Application Components
---
# I_JOINTVENTUREINTCOVENTURETP

**Jointventureintcoventuretp**

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
| `JointVentureEquityGroup` | ✓ | |  |  |  |  |
| `JntVntrIntcoCode` | ✓ | |  |  |  |  |
| `JointVentureIntcoVenture` |  | |  |  |  |  |
| `JointVentureIntcoEquityGrp` |  | |  |  |  |  |
| `_JointVentureEquityGroup` | | ✓ | | | | |
| `_JointVenture` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Joint Venture Intercompany Venture - TP'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.usageType: { dataClass:      #MASTER,
                          serviceQuality: #C,
                          sizeCategory:   #XL }
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_JointVentureIntcoVentureTP

  as projection on R_JointVentureIntcoVentureTP

{
  key CompanyCode,
  key JointVenture,
  key JointVentureEquityGroup,
  key JntVntrIntcoCode,

      JointVentureIntcoVenture,
      JointVentureIntcoEquityGrp,

      _JointVentureEquityGroup : redirected to parent I_JointVentureEquityGroupTP,
      _JointVenture            : redirected to I_JointVentureTP

}
```
