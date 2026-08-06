---
name: I_JNTOPGAGRMTEQUITYTYPEGRPTP
description: Jntopgagrmtequitytypegrptp
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
# I_JNTOPGAGRMTEQUITYTYPEGRPTP

**Jntopgagrmtequitytypegrptp**

| Property | Value |
|---|---|
| App Component | `CA-JVA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `JntOpgAgrmtEquityGrp.CompanyCode` |
| key `JntOpgAgrmt` | `JntOpgAgrmtEquityGrp.JntOpgAgrmt` |
| key `JntOpgAgrmtEquityGrp` | `JntOpgAgrmtEquityGrp.JntOpgAgrmtEquityGrp` |
| `JntOpgAgrmtEquityGrpText` | `JntOpgAgrmtEquityGrp.JntOpgAgrmtEquityGrpText` |
| `JntVntrOperatedShare` | `JntOpgAgrmtEquityGrp.JntVntrOperatedShare` |
| `JntVntrNonOperatedShare` | `JntOpgAgrmtEquityGrp.JntVntrNonOperatedShare` |
| `JntVntrEquityGrpIsSuspended` | `JntOpgAgrmtEquityGrp.JntVntrEquityGrpIsSuspended` |
| `JntVntrEquityGrpSuspendedPerd` | `JntOpgAgrmtEquityGrp.JntVntrEquityGrpSuspendedPerd` |
| `JntVntrEquityGrpSuspendedYr` | `JntOpgAgrmtEquityGrp.JntVntrEquityGrpSuspendedYr` |
| `JntVntrEquityGrpIsNotSuspended` | `JntOpgAgrmtEquityGrp.JntVntrEquityGrpIsNotSuspended` |
| `JntVntrGrpNotSuspendedPerd` | `JntOpgAgrmtEquityGrp.JntVntrGrpNotSuspendedPerd` |
| `JntVntrGrpNotSuspendedYr` | `JntOpgAgrmtEquityGrp.JntVntrGrpNotSuspendedYr` |
| `JntVntrNetProfitIntrstGrp` | `JntOpgAgrmtEquityGrp.JntVntrNetProfitIntrstGrp` |
| `JointVentureType` | `JntOpgAgrmtEquityGrp.JointVentureType` |
| `_JntOpgAgrmt` | *Association* |
| `_JntOpgAgrmtPartShr` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Equity Group - TP'
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

define view entity I_JntOpgAgrmtEquityTypeGrpTP
  as projection on R_JntOpgAgrmtEquityTypeGrpTP as JntOpgAgrmtEquityGrp
{

  key JntOpgAgrmtEquityGrp.CompanyCode,
  key JntOpgAgrmtEquityGrp.JntOpgAgrmt,
  key JntOpgAgrmtEquityGrp.JntOpgAgrmtEquityGrp,
      JntOpgAgrmtEquityGrp.JntOpgAgrmtEquityGrpText,
      JntOpgAgrmtEquityGrp.JntVntrOperatedShare,
      JntOpgAgrmtEquityGrp.JntVntrNonOperatedShare,
      JntOpgAgrmtEquityGrp.JntVntrEquityGrpIsSuspended,
      JntOpgAgrmtEquityGrp.JntVntrEquityGrpSuspendedPerd,
      JntOpgAgrmtEquityGrp.JntVntrEquityGrpSuspendedYr,
      JntOpgAgrmtEquityGrp.JntVntrEquityGrpIsNotSuspended,
      JntOpgAgrmtEquityGrp.JntVntrGrpNotSuspendedPerd,
      JntOpgAgrmtEquityGrp.JntVntrGrpNotSuspendedYr,
      JntOpgAgrmtEquityGrp.JntVntrNetProfitIntrstGrp,
      JntOpgAgrmtEquityGrp.JointVentureType,

      _JntOpgAgrmt        : redirected to parent I_JntOpgAgrmtTP,
      _JntOpgAgrmtPartShr : redirected to composition child I_JntOpgAgrmtPartShrTP

}
```
