---
name: I_JVACARRIEDINTERESTTP
description: Jvacarriedinteresttp
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
# I_JVACARRIEDINTERESTTP

**Jvacarriedinteresttp**

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
| key `JointVentureCarriedPartner` | `JointVentureCarriedPartner` |
| key `JointVentureCarryingPartner` | `JointVentureCarryingPartner` |
| `JVACarriedSharePercent` | `JVACarriedSharePercent` |
| `_CompanyCode` | *Association* |
| `_JointVentureMasterFld` | *Association* |
| `_JntVntrEquityGrp` | *Association* |
| `_JVACarriedPartner` | *Association* |
| `_JVACarryOwner` | *Association* |
| `_JointVenturePartnerShare` | *Association* |
| `_JointVentureEquityGroup` | *Association* |
| `_JointVenture` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Joint Venture Carried Interest - TP'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel: { supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
                modelingPattern: #TRANSACTIONAL_INTERFACE,
                usageType: { dataClass:      #MASTER,
                             serviceQuality: #B,
                             sizeCategory:   #XL } }
@VDM: { viewType: #TRANSACTIONAL,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_JVACarriedInterestTP

  as projection on R_JVACarriedInterestTP

{
  key CompanyCode,
  key JointVenture,
  key JointVentureEquityGroup,
  key JointVentureCarriedPartner,
  key JointVentureCarryingPartner,

      JVACarriedSharePercent,

      _CompanyCode,
      _JointVentureMasterFld,
      _JntVntrEquityGrp,
      _JVACarriedPartner,
      _JVACarryOwner,

      _JointVenturePartnerShare : redirected to parent I_JntVntrPartEquityShrTP,
      _JointVentureEquityGroup  : redirected to I_JointVentureEquityGroupTP,
      _JointVenture             : redirected to I_JointVentureTP
}

where
      CompanyCode                is not initial
  and JointVenture               is not initial
  and JointVentureEquityGroup    is not initial
  and JointVentureCarriedPartner is not initial;
```
