---
name: I_CNSLDTNACTVRPTGRULECONDITION
description: Consolidation Reporting Rule Condition
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNACTVRPTGRULECONDITION')/$value
semantic_en: Consolidation Reporting Rule Condition
tags:
  - FIN
  - bo:purchaseorder
  - component:FIN-CS-EA-2CL
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CNSLDTNACTVRPTGRULECONDITION

**Consolidation Reporting Rule Condition**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNACTVRPTGRULECONDITION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `ConsolidationReportingItemHier` |  | |  |  | `CHAR(10)` | Reporting Item Hierarchy |
| `ConsolidationReportingRuleID` |  | |  |  | `CHAR(3)` | Reporting Rule |
| `CnsldtnRptgRuleActivationMode` |  | |  |  | `CHAR(1)` | Reporting Rule Activation Mode |
| `CnsldtnRptgRuleStaticModeDate` |  | |  |  | `DATS(8)` | Reporting Rule Static Mode Date |
| `ConsolidationReportingItem` |  | |  |  | `CHAR(10)` | Reporting Item |
| `FinancialSelection` |  | |  |  | `CHAR(32)` | Selection |
| `ConsolidationCharacteristic` |  | |  |  | `CHAR(30)` | Characteristic |
| `CnsldtnActiveRptgRuleSequence` |  | |  |  | `NUMC(9)` | Active Reporting Rule Sequence |
| `CnsldtnFSItemAttributeVersion` |  | |  |  | `CHAR(3)` | FS Item Attributes Version |
| `CnsldtnUnitAttributeVersion` |  | |  |  | `CHAR(3)` | Consolidation Unit Attributes |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `CnsldtnCharacteristicValue` |  | |  |  | `CHAR(100)` | Characteristic Value |
| `SignIsInverted` |  | |  |  | `CHAR(1)` | Sign is Inverted |
| `CnsldtnCharcGlobalFieldName` |  | |  |  | `CHAR(30)` | Characteristic Global Field Name |
