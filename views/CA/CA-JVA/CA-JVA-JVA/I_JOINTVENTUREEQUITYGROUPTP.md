---
name: I_JOINTVENTUREEQUITYGROUPTP
description: Jointventureequitygrouptp
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
# I_JOINTVENTUREEQUITYGROUPTP

**Jointventureequitygrouptp**

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
| `JntOpgAgrmtEquityGrpText` | `JntOpgAgrmtEquityGrpText` |
| `JntVntrOperatedShare` | `JntVntrOperatedShare` |
| `JntVntrNonOperatedShare` | `JntVntrNonOperatedShare` |
| `JntVntrEquityGrpIsSuspended` | `JntVntrEquityGrpIsSuspended` |
| `JntVntrEquityGrpSuspendedPerd` | `JntVntrEquityGrpSuspendedPerd` |
| `JntVntrEquityGrpSuspendedYr` | `JntVntrEquityGrpSuspendedYr` |
| `JntVntrEquityGrpIsNotSuspended` | `JntVntrEquityGrpIsNotSuspended` |
| `JntVntrGrpNotSuspendedPerd` | `JntVntrGrpNotSuspendedPerd` |
| `JntVntrGrpNotSuspendedYr` | `JntVntrGrpNotSuspendedYr` |
| `JntVntrNetProfitIntrstGrp` | `JntVntrNetProfitIntrstGrp` |
| `_JointVenture` | *Association* |
| `_JntVntrPartOwnrEquityShr` | *Association* |
| `_JntVntrFundCrcyByEquityGrp` | *Association* |
| `_JntVntrSubstitCostObject` | *Association* |
| `_JointVentureIntcoVenture` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Joint Venture Equity Group - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.usageType: { dataClass:      #MASTER,
                          serviceQuality: #C,
                          sizeCategory:   #XL }
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_JointVentureEquityGroupTP

  as projection on R_JointVentureEquityGroupTP

{
  key CompanyCode,
  key JointVenture,
  key JntOpgAgrmtEquityGrp,

      @EndUserText.label: 'Equity Group Description'
      JntOpgAgrmtEquityGrpText,
      JntVntrOperatedShare,
      JntVntrNonOperatedShare,
      JntVntrEquityGrpIsSuspended,
      JntVntrEquityGrpSuspendedPerd,
      JntVntrEquityGrpSuspendedYr,
      JntVntrEquityGrpIsNotSuspended,
      JntVntrGrpNotSuspendedPerd,
      JntVntrGrpNotSuspendedYr,
      JntVntrNetProfitIntrstGrp,

      _JointVenture               : redirected to parent I_JointVentureTP,
      _JntVntrPartOwnrEquityShr   : redirected to composition child I_JntVntrPartEquityShrTP,
      _JntVntrFundCrcyByEquityGrp : redirected to composition child I_JntVntrFundCrcyByEquityGrpTP,
      _JntVntrSubstitCostObject   : redirected to composition child I_JntVntrSubstitCostObjectTP,
      _JointVentureIntcoVenture   : redirected to composition child I_JointVentureIntcoVentureTP
}
```
