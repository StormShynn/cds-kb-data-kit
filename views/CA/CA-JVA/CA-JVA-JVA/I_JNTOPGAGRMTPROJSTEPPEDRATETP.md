---
name: I_JNTOPGAGRMTPROJSTEPPEDRATETP
description: Jntopgagrmtprojsteppedratetp
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
# I_JNTOPGAGRMTPROJSTEPPEDRATETP

**Jntopgagrmtprojsteppedratetp**

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
| `JntOpgAgrmt` | ✓ | |  |  |  |  |
| `JointVentureSequenceNumber` | ✓ | |  |  |  |  |
| `JointVentureWBSElementExtID` | ✓ | |  |  |  |  |
| `JntVntrProjLvlSteppedRateOvhd` | ✓ | |  |  |  |  |
| `JointVentureOvrrdeExclusionSet` |  | |  |  |  |  |
| `JntVntrStepRateOvhdOvrrdePct` |  | |  |  |  |  |
| `JntVntrOvrrdeStepRateOvhdRule` |  | |  |  |  |  |
| `JntVntrWBSElementIsExcluded` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_JntVntrSteppedRateOvhdType` | | ✓ | | | | |
| `_JntVntrSteppedRateOvhdRule` | | ✓ | | | | |
| `_JntOpgAgrmt` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'JVA General Overhead Stepped Rate - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: { supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
                modelingPattern: #TRANSACTIONAL_INTERFACE,
                usageType: { dataClass:      #MASTER,
                             serviceQuality: #C,
                             sizeCategory:   #XL } }
@VDM: { viewType: #TRANSACTIONAL,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_JntOpgAgrmtProjSteppedRateTP

  as projection on R_JntOpgAgrmtProjSteppedRateTP

{
  key CompanyCode,
  key JntOpgAgrmt,
  key JointVentureSequenceNumber,
  key JointVentureWBSElementExtID,
  key JntVntrProjLvlSteppedRateOvhd,

      JointVentureOvrrdeExclusionSet,
      JntVntrStepRateOvhdOvrrdePct,
      JntVntrOvrrdeStepRateOvhdRule,
      JntVntrWBSElementIsExcluded,

      _CompanyCode,
      _JntVntrSteppedRateOvhdType,
      _JntVntrSteppedRateOvhdRule,

      _JntOpgAgrmt : redirected to parent I_JntOpgAgrmtTP
}
```
