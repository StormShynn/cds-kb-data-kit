---
name: C_SUPLREVALBYQNAIREQRY
description: Supplier Evaluation by Questionnaire Query
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQNAIREQRY')/$value
semantic_en: Supplier Evaluation by Questionnaire Query
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - supplier
  - metadata-only
---
# C_SUPLREVALBYQNAIREQRY

**Supplier Evaluation by Questionnaire Query**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQNAIREQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalScorecardUUID` |  | |  |  | `RAW(16)` | Evaluation Scorecard UUID |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SupplierEvalScorecard` |  | |  |  | `CHAR(20)` | Evaluation Scorecard |
| `SuplrEvalScorecardName` |  | |  |  | `CHAR(60)` | Name of a Supplier Evaluation Scorecard |
| `SuplrEvalStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `SuplrEvalEndDate` |  | |  |  | `DATS(8)` | End Date |
| `PurchasingCategory` |  | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` |  | |  |  | `CHAR(60)` | Name of Purchasing Category |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `NumberOfResponses` |  | |  |  | `INT4(10)` | Number of Responses |
| `SuplrEvalCalculatedScoreValue` |  | |  |  | `FLTP(16)` | Questionnaire Score |
| `NmbrOfSuplrEvalQnaire` |  | |  |  | `INT4(10)` |  |
| `SupplierEvalScoreTargetValue` |  | |  |  | `INT4(10)` | Target Score |
| `AnswerScoreValue` |  | |  |  | `INT1(3)` | Minimum Target Score |
| `SuplrEvalQnaireScoreValue` |  | |  |  | `FLTP(16)` | Questionnaire Score |
| `TargetScoreValue` |  | |  |  | `INT4(10)` | Target Score |
| `MinimalScoreValue` |  | |  |  | `INT1(3)` | Minimum Score Accepted |
