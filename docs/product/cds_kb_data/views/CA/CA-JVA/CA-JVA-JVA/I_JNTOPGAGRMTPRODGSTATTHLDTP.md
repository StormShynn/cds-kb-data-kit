---
name: I_JNTOPGAGRMTPRODGSTATTHLDTP
description: "Jntopgagrmtprodgstatthldtp"
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
# I_JNTOPGAGRMTPRODGSTATTHLDTP

**Jntopgagrmtprodgstatthldtp**

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
| `JntVntrProducingStstclRatioID` | ✓ | |  |  |  |  |
| `JointVentureSequenceNumber` | ✓ | |  |  |  |  |
| `JntVntrThresholdNumberOfWells` |  | |  |  |  |  |
| `JointVentureRatePerProdgWell` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_JntOpgAgrmt` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'JVA Producing Ratio Threshold - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: { supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
                modelingPattern: #TRANSACTIONAL_INTERFACE,
                usageType: { dataClass:      #MASTER,
                             serviceQuality: #C,
                             sizeCategory:   #XL } }
@VDM: { viewType: #TRANSACTIONAL,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_JntOpgAgrmtProdgStatThldTP

  as projection on R_JntOpgAgrmtProdgStatThldTP

{
  key CompanyCode,
  key JntOpgAgrmt,
  key JntVntrProducingStstclRatioID,
  key JointVentureSequenceNumber,

      JntVntrThresholdNumberOfWells,
      @Semantics.amount.currencyCode: 'Currency'
      JointVentureRatePerProdgWell,

      Currency,

      _CompanyCode,
      _Currency,

      _JntOpgAgrmt : redirected to parent I_JntOpgAgrmtTP
}
```
