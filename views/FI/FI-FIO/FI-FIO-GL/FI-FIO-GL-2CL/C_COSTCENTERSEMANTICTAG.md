---
name: C_COSTCENTERSEMANTICTAG
description: Cost Center with Semantic Tag Query
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCENTERSEMANTICTAG')/$value
semantic_en: Cost Center with Semantic Tag Query
tags:
  - FI
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - metadata-only
---
# C_COSTCENTERSEMANTICTAG

**Cost Center with Semantic Tag Query**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCENTERSEMANTICTAG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit Credit Code |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `ActualValue` |  | |  |  | `INT1(3)` |  |
| `PlanValue` |  | |  |  | `INT1(3)` |  |
| `CommitmentValue` |  | |  |  | `INT1(3)` |  |
| `PlanActualCommitmentDeltaValue` |  | |  |  | `INT1(3)` |  |
| `ServiceCostInGlobalCrcy` |  | |  |  | `CURR(23)` | Service Cost in Global Currency |
| `AdministrationCostInGlobalCrcy` |  | |  |  | `CURR(23)` | Administration Cost in Global Currnecy |
| `TravelCostInGlobalCrcy` |  | |  |  | `CURR(23)` | Travel Cost Amount in Global Currency |
| `PersonnelCostInGlobalCrcy` |  | |  |  | `CURR(23)` | Personnel Cost Amount in Global Currency |
| `MaterialCostInGlobalCrcy` |  | |  |  | `CURR(23)` | Material Cost Amount in Global Currency |
| `MaintenanceCostInGlobCrcy` |  | |  |  | `CURR(23)` | Maintenance Cost Amount in Global Currency |
| `DepreciationCostInGlobCrcy` |  | |  |  | `CURR(23)` | Depreciation Cost Amount in Global Currency |
| `OverheadCostInGlobalCrcy` |  | |  |  | `CURR(23)` | Overhead Cost in Global Currency |
| `AllocationCostInGlobalCrcy` |  | |  |  | `CURR(23)` | Allocation Cost in Global Currency |
| `TrainingCostInGlobalCrcy` |  | |  |  | `CURR(23)` | Training Cost in Global Currency |
| `SettlementCostInGlobalCrcy` |  | |  |  | `CURR(23)` | Settlement Cost in Global Currency |
| `MiscellaneousCostInGlobalCrcy` |  | |  |  | `CURR(23)` | Miscellaneous Cost in Global Currency |
| `UtilityCostInGlobalCrcy` |  | |  |  | `CURR(23)` | Utility Cost in Global Currency |
| `ServiceCostInCoCodeCrcy` |  | |  |  | `CURR(23)` | Service Cost in CoCode Currency |
| `AdministrationCostInCoCodeCrcy` |  | |  |  | `CURR(23)` | Administration Cost in CoCode Currnecy |
| `UtilityCostInCoCodeCrcy` |  | |  |  | `CURR(23)` | Travel Cost Amount in Company Code Currency |
| `TravelCostInCoCodeCrcy` |  | |  |  | `CURR(23)` | Travel Cost Amount in Company Code Currency |
| `PersonnelCostInCoCodeCrcy` |  | |  |  | `CURR(23)` | Personnel Cost Amount in Company Code Currency |
| `MaterialCostInCoCodeCrcy` |  | |  |  | `CURR(23)` | Material Cost Amount in Company Code Currency |
| `MaintenanceCostInCoCodeCrcy` |  | |  |  | `CURR(23)` | Maintenance Cost Amount in Company Code Currency |
| `DepreciationCostInCoCodeCrcy` |  | |  |  | `CURR(23)` | Depreciation Cost Amount in Company Code Currency |
| `OverheadCostInCoCodeCrcy` |  | |  |  | `CURR(23)` | Overhead Cost in Company Code Currency |
| `AllocationCostInCoCodeCrcy` |  | |  |  | `CURR(23)` | Allocation Cost in Company Code Currency |
| `TrainingCostInCoCodeCrcy` |  | |  |  | `CURR(23)` | Training Cost in Company Code Currency |
| `SettlementCostInCoCodeCrcy` |  | |  |  | `CURR(23)` | Settlement Cost in Company Code Currency |
| `MiscellaneousCostInCoCodeCrcy` |  | |  |  | `CURR(23)` | Miscellaneous Cost in Company Code Currency |
| `ServiceCostInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Service Cost in FreeDfnd Currency1 |
| `AdminCostInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Administration Cost in CoCode Currnecy |
| `UtilityCostInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Travel Cost Amount in Free Defined Currency1 |
| `TravelCostInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Travel Cost Amount in Free Defined Currency1 |
| `PersonnelCostInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Personnel Cost Amount in Free Defined Currency1 |
| `MaterialCostInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Material Cost Amount in Free Defined Currency1 |
| `MaintenanceCostInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Maintenance Cost Free Defined Currency1 |
| `DeprCostInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Depreciation Cost Amount in Free Defined Currency1 |
| `OverheadCostInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Overhead Cost in Free Defined Currency1 |
| `AllocationCostInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Allocation Cost in Free Defined Currency1 |
| `TrainingCostInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Training Cost in Free Defiend Currency1 |
| `SettlementCostInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Settlement Cost in Free Defined Currency1 |
| `MiscCostInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Miscellaneous Cost in Free Defined Currency1 |
