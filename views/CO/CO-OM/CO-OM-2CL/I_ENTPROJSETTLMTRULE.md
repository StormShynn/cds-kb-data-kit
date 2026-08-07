---
name: I_ENTPROJSETTLMTRULE
description: Enterprise Project Settlement Rule
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJSETTLMTRULE')/$value
semantic_en: Enterprise Project Settlement Rule
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
# I_ENTPROJSETTLMTRULE

**Enterprise Project Settlement Rule**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJSETTLMTRULE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectElementUUID` |  | |  |  | `RAW(16)` | Entity Guid |
| `ControllingObject` |  | |  |  | `CHAR(22)` | Object Number |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDate` |  | |  |  | `DATS(8)` | Created On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `CtrlgObjectSettlementRuleName` |  | |  |  | `CHAR(40)` | Description of Settlement Rule |
| `AllocationStructure` |  | |  |  | `CHAR(6)` | Allocation Structure for Settlement/Assessment |
| `SettlementSourceStructure` |  | |  |  | `CHAR(2)` | Source Structure |
| `ControllingSettlementProfile` |  | |  |  | `CHAR(6)` | Settlement Profile |
| `AssetValueDate` |  | |  |  | `DATS(8)` | Asset Value Date |
| `SettlmtRuleLastUsgeFsclPeriod` |  | |  |  | `NUMC(3)` | Period of Last Use |
| `SettlmtRuleLastUsageFiscalYear` |  | |  |  | `NUMC(4)` | Year Last Used |
| `SettlmtRuleProcessingSequence` |  | |  |  | `NUMC(3)` | Hierarchy Number for Settlement |
| `SettlmtWithFreeDefinedCurrency` |  | |  |  | `CHAR(1)` | Settlement of freely defined currencies & parallel ledgers |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Change Date Time |
| `ProjectUUID` |  | |  |  | `RAW(16)` | Entity Guid |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for WBS element |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for WBS element |
| `ResponsibleCostCenter` |  | |  |  | `CHAR(10)` | Responsible Cost Center |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
