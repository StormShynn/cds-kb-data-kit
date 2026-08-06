---
name: I_JNTVNTRPARTEQUITYSHRTP
description: Jntvntrpartequityshrtp
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
# I_JNTVNTRPARTEQUITYSHRTP

**Jntvntrpartequityshrtp**

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
| key `JntOpgAgrmtEquityGrp` | `JntOpgAgrmtEquityGrp` |
| key `JointVenturePartner` | `JointVenturePartner` |
| `JointVenturePartnerShortText` | `JointVenturePartnerShortText` |
| `JointVenturePartnerLongText` | `JointVenturePartnerLongText` |
| `JntVntrEquityShare` | `JntVntrEquityShare` |
| `JntVntrOwnrIsSuspended` | `JntVntrOwnrIsSuspended` |
| `JntVntrOwnrSuspendedPerd` | `JntVntrOwnrSuspendedPerd` |
| `JntVntrOwnrSuspendedYr` | `JntVntrOwnrSuspendedYr` |
| `JntVntrOwnrIsNotSuspended` | `JntVntrOwnrIsNotSuspended` |
| `JntVntrOwnrNotSuspendedPerd` | `JntVntrOwnrNotSuspendedPerd` |
| `JntVntrOwnrNotSuspendedYr` | `JntVntrOwnrNotSuspendedYr` |
| `JntVntrInterestType` | `JntVntrInterestType` |
| `JntVntrDrillingRcvryPercent` | `JntVntrDrillingRcvryPercent` |
| `JntVntrOpgRcvryPercent` | `JntVntrOpgRcvryPercent` |
| `JntVntrPayIsStppd` | `JntVntrPayIsStppd` |
| `JntVntrPartWrkgIntrstPerd` | `JntVntrPartWrkgIntrstPerd` |
| `JntVntrPartWrkgIntrstYrValue` | `JntVntrPartWrkgIntrstYrValue` |
| `JntVntrCarriedIntrstGrp` | `JntVntrCarriedIntrstGrp` |
| `JntVntrNetProfitIntrstGrp` | `JntVntrNetProfitIntrstGrp` |
| `JntVntrOperatorAddressArea` | `JntVntrOperatorAddressArea` |
| `_JointVentureEquityGroup` | *Association* |
| `_JointVenture` | *Association* |
| `_JVACarriedInterest` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Joint Venture Partner Share - TP'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel: { supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
                modelingPattern: #TRANSACTIONAL_INTERFACE,
                usageType: { dataClass:      #MASTER,
                             serviceQuality: #C,
                             sizeCategory:   #XL } }
@VDM: { viewType: #TRANSACTIONAL,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_JntVntrPartEquityShrTP

  as projection on R_JntVntrPartEquityShrTP

{
  key CompanyCode,
  key JointVenture,
  key JntOpgAgrmtEquityGrp,
  key JointVenturePartner,

      JointVenturePartnerShortText,
      JointVenturePartnerLongText,
      JntVntrEquityShare,
      JntVntrOwnrIsSuspended,
      JntVntrOwnrSuspendedPerd,
      JntVntrOwnrSuspendedYr,
      JntVntrOwnrIsNotSuspended,
      JntVntrOwnrNotSuspendedPerd,
      JntVntrOwnrNotSuspendedYr,
      JntVntrInterestType,
      JntVntrDrillingRcvryPercent,
      JntVntrOpgRcvryPercent,
      JntVntrPayIsStppd,
      JntVntrPartWrkgIntrstPerd,
      JntVntrPartWrkgIntrstYrValue,
      JntVntrCarriedIntrstGrp,
      JntVntrNetProfitIntrstGrp,
      JntVntrOperatorAddressArea,

      _JointVentureEquityGroup : redirected to parent I_JointVentureEquityGroupTP,
      _JointVenture            : redirected to I_JointVentureTP,
      _JVACarriedInterest      : redirected to composition child I_JVACarriedInterestTP
}
```
