---
name: I_MAINTORDERSETTLMTDISTRRULETP
description: Maintordersettlmtdistrruletp
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - transactional-processing
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDERSETTLMTDISTRRULETP

**Maintordersettlmtdistrruletp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaintenanceOrder` | `MaintenanceOrder` |
| key `Ledger` | `Ledger` |
| key `LedgerGroup` | `LedgerGroup` |
| key `SettlementDistributionRuleGrp` | `SettlementDistributionRuleGrp` |
| key `SettlmtDistrRuleSequence` | `SettlmtDistrRuleSequence` |
| `ControllingObject` | `ControllingObject` |
| `SettlementType` | `SettlementType` |
| `DistributionSourceAssignment` | `DistributionSourceAssignment` |
| `AccountAssignmentType` | `AccountAssignmentType` |
| `SettlementPercentageRate` | `SettlementPercentageRate` |
| `SettlementEquivalenceFactor` | `SettlementEquivalenceFactor` |
| `SettlementAmount` | `SettlementAmount` |
| `SettlementAmountCurrency` | `SettlementAmountCurrency` |
| `ControllingArea` | `ControllingArea` |
| `BusinessArea` | `BusinessArea` |
| `CompanyCode` | `CompanyCode` |
| `GLAccount` | `GLAccount` |
| `ProfitCenter` | `ProfitCenter` |
| `CostCenter` | `CostCenter` |
| `OrderID` | `OrderID` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `MasterFixedAsset` | `MasterFixedAsset` |
| `FixedAsset` | `FixedAsset` |
| `NetworkNumberForAcctAssgmt` | `NetworkNumberForAcctAssgmt` |
| `SalesOrder` | `SalesOrder` |
| `SalesOrderItem` | `SalesOrderItem` |
| `CostObject` | `CostObject` |
| `BusinessProcess` | `BusinessProcess` |
| `AltvSettlmtDistrRuleSequence` | `AltvSettlmtDistrRuleSequence` |
| `ValidityStartFiscalPeriod` | `ValidityStartFiscalPeriod` |
| `ValidityStartFiscalYear` | `ValidityStartFiscalYear` |
| `ValidityEndFiscalPeriod` | `ValidityEndFiscalPeriod` |
| `ValidityEndFiscalYear` | `ValidityEndFiscalYear` |
| `SettlmtRule1stUsgeFiscalPeriod` | `SettlmtRule1stUsgeFiscalPeriod` |
| `SettlmtRule1stUsageFiscalYear` | `SettlmtRule1stUsageFiscalYear` |
| `SettlmtRuleLastUsgeFsclPeriod` | `SettlmtRuleLastUsgeFsclPeriod` |
| `SettlmtRuleLastUsageFiscalYear` | `SettlmtRuleLastUsageFiscalYear` |
| `SettlmtDistrRuleIsUsedInLedger` | `SettlmtDistrRuleIsUsedInLedger` |
| `_MaintenanceOrder` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Settlement Rule - TP'
@AccessControl: { authorizationCheck: #MANDATORY, personalData.blocking: #BLOCKED_DATA_EXCLUDED }
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@VDM.viewType: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #XL, dataClass: #TRANSACTIONAL}

define view entity I_MaintOrderSettlmtDistrRuleTP
  as projection on R_MaintOrdSettlmtDistrRuleTP_2
{

  key       MaintenanceOrder,
  key       Ledger,
  key       LedgerGroup,
  key       SettlementDistributionRuleGrp,
  key       SettlmtDistrRuleSequence,

            ControllingObject,

            SettlementType,

            DistributionSourceAssignment,

            AccountAssignmentType,

            SettlementPercentageRate,
            SettlementEquivalenceFactor,
            @Semantics.amount.currencyCode: 'SettlementAmountCurrency'
            SettlementAmount,

            SettlementAmountCurrency,
            ControllingArea,

            BusinessArea,
            CompanyCode,
            GLAccount,
            ProfitCenter,
            CostCenter,
            OrderID,
            WBSElementInternalID,
            MasterFixedAsset,
            FixedAsset,
            NetworkNumberForAcctAssgmt,

            SalesOrder,
            SalesOrderItem,
            CostObject,
            BusinessProcess,

            AltvSettlmtDistrRuleSequence,

            ValidityStartFiscalPeriod,
            ValidityStartFiscalYear,
            ValidityEndFiscalPeriod,
            ValidityEndFiscalYear,

            SettlmtRule1stUsgeFiscalPeriod,
            SettlmtRule1stUsageFiscalYear,
            SettlmtRuleLastUsgeFsclPeriod,
            SettlmtRuleLastUsageFiscalYear,

            SettlmtDistrRuleIsUsedInLedger,

            _MaintenanceOrder : redirected to parent I_MaintenanceOrderTP

}
```
