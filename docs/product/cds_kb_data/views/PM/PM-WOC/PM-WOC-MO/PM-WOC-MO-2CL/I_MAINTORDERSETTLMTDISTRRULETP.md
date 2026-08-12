---
name: I_MAINTORDERSETTLMTDISTRRULETP
description: "Maintordersettlmtdistrruletp"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceOrder` | ✓ | |  |  |  |  |
| `Ledger` | ✓ | |  |  |  |  |
| `LedgerGroup` | ✓ | |  |  |  |  |
| `SettlementDistributionRuleGrp` | ✓ | |  |  |  |  |
| `SettlmtDistrRuleSequence` | ✓ | |  |  |  |  |
| `ControllingObject` |  | |  |  |  |  |
| `SettlementType` |  | |  |  |  |  |
| `DistributionSourceAssignment` |  | |  |  |  |  |
| `AccountAssignmentType` |  | |  |  |  |  |
| `SettlementPercentageRate` |  | |  |  |  |  |
| `SettlementEquivalenceFactor` |  | |  |  |  |  |
| `SettlementAmount` |  | |  |  |  |  |
| `SettlementAmountCurrency` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `MasterFixedAsset` |  | |  |  |  |  |
| `FixedAsset` |  | |  |  |  |  |
| `NetworkNumberForAcctAssgmt` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `CostObject` |  | |  |  |  |  |
| `BusinessProcess` |  | |  |  |  |  |
| `AltvSettlmtDistrRuleSequence` |  | |  |  |  |  |
| `ValidityStartFiscalPeriod` |  | |  |  |  |  |
| `ValidityStartFiscalYear` |  | |  |  |  |  |
| `ValidityEndFiscalPeriod` |  | |  |  |  |  |
| `ValidityEndFiscalYear` |  | |  |  |  |  |
| `SettlmtRule1stUsgeFiscalPeriod` |  | |  |  |  |  |
| `SettlmtRule1stUsageFiscalYear` |  | |  |  |  |  |
| `SettlmtRuleLastUsgeFsclPeriod` |  | |  |  |  |  |
| `SettlmtRuleLastUsageFiscalYear` |  | |  |  |  |  |
| `SettlmtDistrRuleIsUsedInLedger` |  | |  |  |  |  |
| `_MaintenanceOrder` | | ✓ | | | | |

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
