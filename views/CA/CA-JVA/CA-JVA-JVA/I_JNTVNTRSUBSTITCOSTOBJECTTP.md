---
name: I_JNTVNTRSUBSTITCOSTOBJECTTP
description: Jntvntrsubstitcostobjecttp
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
# I_JNTVNTRSUBSTITCOSTOBJECTTP

**Jntvntrsubstitcostobjecttp**

| Property | Value |
|---|---|
| App Component | `CA-JVA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `CompanyCode` |
| key `JointVenture` | `JointVenture` |
| key `JointVentureEquityGroup` | `JointVentureEquityGroup` |
| key `JointVentureRecoveryCode` | `JointVentureRecoveryCode` |
| `JntVntrSubstituteCostCtr` | `JntVntrSubstituteCostCtr` |
| `JntVntrSubstituteWBSElmntIntID` | `JntVntrSubstituteWBSElmntIntID` |
| `JointVentureSubstituteOrder` | `JointVentureSubstituteOrder` |
| `_JointVentureEquityGroup` | *Association* |
| `_JointVenture` | *Association* |

## Source Code

```abap
@EndUserText.label: 'JVA Substitute Cost Object - TP'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.usageType: { dataClass:      #MASTER,
                          serviceQuality: #C,
                          sizeCategory:   #XL }
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_JntVntrSubstitCostObjectTP

  as projection on R_JntVntrSubstitCostObjectTP

{
  key CompanyCode,
  key JointVenture,
  key JointVentureEquityGroup,
  key JointVentureRecoveryCode,

      JntVntrSubstituteCostCtr,
      JntVntrSubstituteWBSElmntIntID,
      JointVentureSubstituteOrder,

      _JointVentureEquityGroup : redirected to parent I_JointVentureEquityGroupTP,
      _JointVenture            : redirected to I_JointVentureTP

}
```
