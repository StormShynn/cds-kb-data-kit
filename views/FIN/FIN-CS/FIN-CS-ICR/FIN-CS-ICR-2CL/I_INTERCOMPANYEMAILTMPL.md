---
name: I_INTERCOMPANYEMAILTMPL
description: "ICA Intercompany Email Template"
app_component: FIN-CS-ICR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERCOMPANYEMAILTMPL')/$value
semantic_en: "ICA Intercompany Email Template"
tags:
  - FIN
  - component:FIN-CS-ICR-2CL
  - FIN-CS
  - FIN-CS-ICR
  - FIN-CS-ICR-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_INTERCOMPANYEMAILTMPL

**ICA Intercompany Email Template**

| Property | Value |
|---|---|
| App Component | `FIN-CS-ICR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERCOMPANYEMAILTMPL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MatchingMethodID` |  | |  |  | `CHAR(5)` | Matching Method ID |
| `MatchingDocument` |  | |  |  | `NUMC(10)` | Matching Document Number |
| `MatchingDocumentItem` |  | |  |  | `INT4(10)` | Matching Document Line Item Number |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `TradingPartner` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `MatchingAssignmentNumber` |  | |  |  | `NUMC(12)` | Assignment Number |
| `MatchingMethodDesc` |  | |  |  | `CHAR(80)` | Medium Length Description |
| `MatchingRuleID` |  | |  |  | `NUMC(4)` | Matching Rule ID |
| `MatchingRuleDesc` |  | |  |  | `CHAR(80)` | Medium Length Description |
| `MatchingReasonCode` |  | |  |  | `CHAR(6)` | Reason Code |
| `MatchingReasonCodeDesc` |  | |  |  | `CHAR(80)` | Medium Length Description |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `ReconciliationCaseID` |  | |  |  | `CHAR(5)` | Reconciliation Case ID |
| `ReconciliationCaseDesc` |  | |  |  | `CHAR(80)` | Medium Length Description |
| `LoggedInUser` |  | |  |  | `CHAR(12)` | User Name in User Master Record |
| `UserDescription` |  | |  |  | `CHAR(80)` | Full Name of Person |
