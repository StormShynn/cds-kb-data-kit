---
name: I_JNTOPGAGRMTPARTSHRTP
description: Jntopgagrmtpartshrtp
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
# I_JNTOPGAGRMTPARTSHRTP

**Jntopgagrmtpartshrtp**

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
| `JntOpgAgrmt` | ✓ | |  |  |
| `JntOpgAgrmtEquityGrp` | ✓ | |  |  |
| `JointVenturePartner` | ✓ | |  |  |
| `JntVntrEquityShare` |  | |  |  |
| `JntVntrOwnrIsSuspended` |  | |  |  |
| `JntVntrOwnrSuspendedPerd` |  | |  |  |
| `JntVntrOwnrSuspendedYr` |  | |  |  |
| `JntVntrOwnrIsNotSuspended` |  | |  |  |
| `JntVntrOwnrNotSuspendedPerd` |  | |  |  |
| `JntVntrOwnrNotSuspendedYr` |  | |  |  |
| `JntVntrPayIsStppd` |  | |  |  |
| `JntVntrOperatorAddressArea` |  | |  |  |
| `_JntOpgAgrmtEquityGrp` | | ✓ | | |
| `_JntOpgAgrmt` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Partner Share - TP'
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

define view entity I_JntOpgAgrmtPartShrTP
  as projection on R_JntOpgAgrmtPartShrTP as JntOpgAgrmtPartShr
{
  key JntOpgAgrmtPartShr.CompanyCode,
  key JntOpgAgrmtPartShr.JntOpgAgrmt,
  key JntOpgAgrmtPartShr.JntOpgAgrmtEquityGrp,
  key JntOpgAgrmtPartShr.JointVenturePartner,
      JntOpgAgrmtPartShr.JntVntrEquityShare,
      JntOpgAgrmtPartShr.JntVntrOwnrIsSuspended,
      JntOpgAgrmtPartShr.JntVntrOwnrSuspendedPerd,
      JntOpgAgrmtPartShr.JntVntrOwnrSuspendedYr,
      JntOpgAgrmtPartShr.JntVntrOwnrIsNotSuspended,
      JntOpgAgrmtPartShr.JntVntrOwnrNotSuspendedPerd,
      JntOpgAgrmtPartShr.JntVntrOwnrNotSuspendedYr,
      JntOpgAgrmtPartShr.JntVntrPayIsStppd,
      JntOpgAgrmtPartShr.JntVntrOperatorAddressArea,

      _JntOpgAgrmtEquityGrp : redirected to parent I_JntOpgAgrmtEquityTypeGrpTP,
      _JntOpgAgrmt          : redirected to I_JntOpgAgrmtTP
}
```
