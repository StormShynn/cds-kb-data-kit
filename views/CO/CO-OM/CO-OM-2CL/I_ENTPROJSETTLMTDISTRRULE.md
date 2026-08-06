---
name: I_ENTPROJSETTLMTDISTRRULE
description: Ent Project Settlement Distribution Rule
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJSETTLMTDISTRRULE')/$value
semantic_en: Ent Project Settlement Distribution Rule
tags:
  - CO
  - bo:project
  - CO-OM
  - CO-OM-2CL
  - component:CO-OM-2CL
  - interface-view
  - lob:controlling
  - project
  - metadata-only
---
# I_ENTPROJSETTLMTDISTRRULE

**Ent Project Settlement Distribution Rule**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJSETTLMTDISTRRULE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ProjectElementUUID` | `RAW(16)` | Entity Guid |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `LedgerGroup` | `CHAR(4)` | Ledger Group |
| `SettlmtDistrRuleSequence` | `NUMC(7)` | Sequence Number of Distribution Rule |
| `SettlementDistributionRuleGrp` | `NUMC(10)` | Distribution Rule Group |
| `ControllingObject` | `CHAR(22)` | Object Number |
| `ProjectUUID` | `RAW(16)` | Entity Guid |
| `SettlementType` | `CHAR(3)` | Settlement Type |
| `ValidityStartFiscalYear` | `NUMC(4)` | Valid-from Year |
| `ValidityStartFiscalPeriod` | `NUMC(3)` | Valid-from Period |
| `ValidityEndFiscalYear` | `NUMC(4)` | Valid-to Year |
| `ValidityEndFiscalPeriod` | `NUMC(3)` | Valid To |
| `SettlementPercentageRate` | `DEC(5)` | Settlement Percentage Rate |
| `SettlementEquivalenceFactor` | `DEC(10)` | Equivalence Number for Order Settlement |
| `SettlementAmount` | `CURR(23)` | Amount for Amount Rule |
| `SettlementTransaction` | `CHAR(4)` | Settlement Transaction |
| `SettlementAmountCurrency` | `CUKY(5)` | Currency for the Amount in the Amount Rule |
| `SettlementDistrAmountRuleType` | `CHAR(2)` | Amount Rule Type |
| `SettlmtDistrManipulationRule` | `CHAR(4)` | Manipulation Rule |
| `SettlmtDistrRuleSrceAssignment` | `CHAR(3)` | Source Assignment |
| `SettlmtDistributionRuleNumber` | `NUMC(7)` | Distribution Rule Number |
| `SettlmtDistrRuleIsUsedInLedger` | `CHAR(1)` | Distribution Rule was used in Ledger Settlement |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `SettlementReceiver` | `CHAR(22)` | Object Number for Settlement Receiver |
| `SettlementDefaultRule` | `CHAR(3)` | Default Rule |
| `GLAccount` | `CHAR(10)` | G/L Account Number |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `OrderID` | `CHAR(12)` | Order Number |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element |
| `MasterFixedAsset` | `CHAR(12)` | Main Asset Number |
| `FixedAsset` | `CHAR(4)` | Asset Subnumber |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `ProfitabilitySegment` | `CHAR(10)` | Profitability Segment |
| `SettlementDistrRuleRmngAmount` | `CURR(23)` | Remaining Amount for Amount Settlement w. Amount Rule Cat. |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` | `NUMC(6)` | Service Document Item ID |
| `SettlementDistributionRuleUUID` | `RAW(16)` | Unique ID of a Distribution Rule |
| `SettlmtDistrRulePassDownUUID` | `RAW(16)` | Unique ID of a Pass-Down Distribution Rule |
| `SettlmtRule1stUsgeFiscalPeriod` | `NUMC(3)` | Period of First Use |
| `SettlmtRule1stUsageFiscalYear` | `NUMC(4)` | Year First Used |
| `SettlmtRuleLastUsgeFsclPeriod` | `NUMC(3)` | Period of Last Use |
| `SettlmtRuleLastUsageFiscalYear` | `NUMC(4)` | Year Last Used |
| `SenderProfitCenter` | `CHAR(10)` | Profit Center |
| `SenderCompanyCode` | `CHAR(4)` | Company code for WBS element |
| `SenderResponsibleCostCenter` | `CHAR(10)` | Responsible Cost Center |
| `SenderPlant` | `CHAR(4)` | Plant |
| `SenderFunctionalArea` | `CHAR(16)` | Functional Area |
| `SenderProjectType` | `CHAR(2)` | Project Type |
| `SenderProjectProfileCode` | `CHAR(7)` | Project Profile |
