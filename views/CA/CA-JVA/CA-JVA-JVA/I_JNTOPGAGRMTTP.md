---
name: I_JNTOPGAGRMTTP
description: Jntopgagrmttp
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
# I_JNTOPGAGRMTTP

**Jntopgagrmttp**

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
| `JntVntrContractNmbr` |  | |  |  |
| `JntVntrPayrollClearingSet` |  | |  |  |
| `JntVntrConstructionExclsnSet` |  | |  |  |
| `JntVntrCatastropheExclsnSet` |  | |  |  |
| `JntVntrConstructionOvhdRule` |  | |  |  |
| `JntVntrCatastropheOvhdRule` |  | |  |  |
| `JVAOvhdPercentProdg` |  | |  |  |
| `JVAExclsnAcctSetPercentProdg` |  | |  |  |
| `JVAOvhdPercentDev` |  | |  |  |
| `JVAExclsnAcctSetPercentDev` |  | |  |  |
| `JntVntrExplorationOvhdRule` |  | |  |  |
| `JntVntrDrillingOvhdRule` |  | |  |  |
| `JntVntrCapitalExclsnSet` |  | |  |  |
| `JntVntrOvhdOffsetCostCtr` |  | |  |  |
| `JntOpgAgrmtProdgWellThld` |  | |  |  |
| `JntVntrOvhdRecurringDoc` |  | |  |  |
| `JntVntrExpnIsEscalated` |  | |  |  |
| `JntOpgAgrmtClass` |  | |  |  |
| `JntOpgAgrmtCreatedByUser` |  | |  |  |
| `JntOpgAgrmtCreationTime` |  | |  |  |
| `JntOpgAgrmtCreationDate` |  | |  |  |
| `JntOpgAgrmtLastChangedByUser` |  | |  |  |
| `JntOpgAgrmtLastChangedTime` |  | |  |  |
| `JntOpgAgrmtLastChangedDate` |  | |  |  |
| `JntVntrPrioPerdDrillingIsCalc` |  | |  |  |
| `JntVntrWBSElmntOvhdIsCalc` |  | |  |  |
| `_JntOpgAgrmtText` | | ✓ | | |
| `_JntOpgAgrmtEquityGrp` | | ✓ | | |
| `_JntOpgAgrmtPnltyCatRcvry` | | ✓ | | |
| `_JntOpgAgrmtProjSteppedRate` | | ✓ | | |
| `_JntOpgAgrmtProdgStatAssgmt` | | ✓ | | |
| `_JntOpgAgrmtProdgStatThld` | | ✓ | | |
| `_JntOpgAgrmtDrillingRatio` | | ✓ | | |
| `_JntOpgAgrmtParentCoOvhd` | | ✓ | | |
| `_JntOpgAgrmtPayrollBurden` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Joint Operating Agreement - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: { sapObjectNodeType.name: 'JointOperatingAgreement',
                supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
                modelingPattern: #TRANSACTIONAL_INTERFACE,
                usageType: { dataClass: #MASTER,
                             serviceQuality: #C,
                             sizeCategory: #XL } }
@VDM: { viewType: #TRANSACTIONAL,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_JntOpgAgrmtTP
  provider contract transactional_interface

  as projection on R_JntOpgAgrmtTP as JntOpgAgrmt

{
  key JntOpgAgrmt.CompanyCode,
  key JntOpgAgrmt.JntOpgAgrmt,

      JntOpgAgrmt.JntVntrContractNmbr,
      JntOpgAgrmt.JntVntrPayrollClearingSet,
      JntOpgAgrmt.JntVntrConstructionExclsnSet,
      JntOpgAgrmt.JntVntrCatastropheExclsnSet,
      JntOpgAgrmt.JntVntrConstructionOvhdRule,
      JntOpgAgrmt.JntVntrCatastropheOvhdRule,
      JntOpgAgrmt.JVAOvhdPercentProdg,
      JntOpgAgrmt.JVAExclsnAcctSetPercentProdg,
      JntOpgAgrmt.JVAOvhdPercentDev,
      JntOpgAgrmt.JVAExclsnAcctSetPercentDev,
      JntOpgAgrmt.JntVntrExplorationOvhdRule,
      JntOpgAgrmt.JntVntrDrillingOvhdRule,
      JntOpgAgrmt.JntVntrCapitalExclsnSet,
      JntOpgAgrmt.JntVntrOvhdOffsetCostCtr,
      JntOpgAgrmt.JntOpgAgrmtProdgWellThld,
      JntOpgAgrmt.JntVntrOvhdRecurringDoc,
      JntOpgAgrmt.JntVntrExpnIsEscalated,
      JntOpgAgrmt.JntOpgAgrmtClass,
      JntOpgAgrmt.JntOpgAgrmtCreatedByUser,
      @EndUserText.label : 'JOA Creation Time'
      JntOpgAgrmt.JntOpgAgrmtCreationTime,
      JntOpgAgrmt.JntOpgAgrmtCreationDate,
      JntOpgAgrmt.JntOpgAgrmtLastChangedByUser,
      @EndUserText.label : 'JOA Last Changed Time'
      JntOpgAgrmt.JntOpgAgrmtLastChangedTime,
      JntOpgAgrmt.JntOpgAgrmtLastChangedDate,
      JntOpgAgrmt.JntVntrPrioPerdDrillingIsCalc,
      JntOpgAgrmt.JntVntrWBSElmntOvhdIsCalc,

      _JntOpgAgrmtText            : redirected to composition child I_JntOpgAgrmtTextTP,
      _JntOpgAgrmtEquityGrp       : redirected to composition child I_JntOpgAgrmtEquityTypeGrpTP,
      _JntOpgAgrmtPnltyCatRcvry   : redirected to composition child I_JntOpgAgrmtPnltyCatRcvryTP,
      _JntOpgAgrmtProjSteppedRate : redirected to composition child I_JntOpgAgrmtProjSteppedRateTP,
      _JntOpgAgrmtProdgStatAssgmt : redirected to composition child I_JntOpgAgrmtProdgStatAssgmtTP,
      _JntOpgAgrmtProdgStatThld   : redirected to composition child I_JntOpgAgrmtProdgStatThldTP,
      _JntOpgAgrmtDrillingRatio   : redirected to composition child I_JntOpgAgrmtDrillingRatioTP,
      _JntOpgAgrmtParentCoOvhd    : redirected to composition child I_JntOpgAgrmtParentCoOvhdTP,
      _JntOpgAgrmtPayrollBurden   : redirected to composition child I_JntOpgAgrmtPayrollBurdenTP
}
```
