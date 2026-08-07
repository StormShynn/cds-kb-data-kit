---
name: C_SUPPLIEREVALOVERALLQRY
description: Supplier Evaluation Overall
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPPLIEREVALOVERALLQRY')/$value
semantic_en: Supplier Evaluation Overall
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
# C_SUPPLIEREVALOVERALLQRY

**Supplier Evaluation Overall**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPPLIEREVALOVERALLQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `PurchasingCategory` |  | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` |  | |  |  | `CHAR(60)` | Name of Purchasing Category |
| `PurgDocMigrtnIsCmpltdForAnlyts` |  | |  |  | `CHAR(1)` | Single-Character Flag |
| `SuplrEvalCritraDelivCompleted` |  | |  |  | `CHAR(10)` | Delivery Completed |
| `SuplrEvalRelevantDocCategory` |  | |  |  | `NUMC(1)` | Supplier Evaluation Configuration for Document Category type |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `SupplierClassification` |  | |  |  | `CHAR(1)` | Supplier Evaluation Weighting and Scoring Classification |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CalculatedOperationalScore` |  | |  |  | `FLTP(16)` | Calculated Operational Score |
| `IsSupplierEvalSwitchActive` |  | |  |  | `INT1(3)` |  |
| `SuplrEvalCalculatedScoreValue` |  | |  |  | `FLTP(16)` | Questionnaire Score |
| `SupplierEvalScoreTargetValue` |  | |  |  | `INT4(10)` |  |
| `NumberOfResponses` |  | |  |  | `INT4(10)` |  |
| `OperationalSupplierEvalTotWgtg` |  | |  |  | `DEC(5)` | Weighting (In Percentage) |
| `WeightingFactor` |  | |  |  | `DEC(5)` | Weighting (In Percentage) |
| `IsCriteriaActive` |  | |  |  | `CHAR(1)` | Indicator for Active Critera |
| `SuplrEvalUsrDfndCritra1ScrVal` |  | |  |  | `DEC(10)` |  |
| `SuplrEvalUsrDfndCritra2ScrVal` |  | |  |  | `DEC(10)` |  |
| `SuplrEvalUsrDfndCritra3ScrVal` |  | |  |  | `DEC(10)` |  |
| `SuplrEvalUsrDfndCritra4ScrVal` |  | |  |  | `DEC(10)` |  |
| `SuplrEvalUsrDfndCritra5ScrVal` |  | |  |  | `DEC(10)` |  |
| `SuplrEvalUsrDfndCritra6ScrVal` |  | |  |  | `DEC(10)` |  |
| `SuplrEvalUsrCritraTotScrVal` |  | |  |  | `DEC(10)` |  |
| `SupplierEvalUsrCriteria1Wgtg` |  | |  |  | `DEC(5)` |  |
| `SupplierEvalUsrCriteria2Wgtg` |  | |  |  | `DEC(5)` |  |
| `SupplierEvalUsrCriteria3Wgtg` |  | |  |  | `DEC(5)` |  |
| `SupplierEvalUsrCriteria4Wgtg` |  | |  |  | `DEC(5)` |  |
| `SupplierEvalUsrCriteria5Wgtg` |  | |  |  | `DEC(5)` |  |
| `SuplrEvalUsrCriteria6WgtgValue` |  | |  |  | `DEC(5)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra` |  | |  |  | `DEC(10)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra1` |  | |  |  | `INT4(10)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra2` |  | |  |  | `INT4(10)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra3` |  | |  |  | `INT4(10)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra4` |  | |  |  | `INT4(10)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra5` |  | |  |  | `INT4(10)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra6` |  | |  |  | `INT4(10)` |  |
| `TotNmbrOfSuplrUsrDfndCritra` |  | |  |  | `INT4(10)` |  |
| `SuplrEvalUsrDfndCriteria1Score` |  | |  |  | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria2Score` |  | |  |  | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria3Score` |  | |  |  | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria4Score` |  | |  |  | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria5Score` |  | |  |  | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SupplierEvalUsrCriteria6Value` |  | |  |  | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCritraTotScore` |  | |  |  | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCritraTotVal` |  | |  |  | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `OperationalScoreCount` |  | |  |  | `INT4(10)` | Supplier Operational Score Count |
| `TotalSpendAmount` |  | |  |  | `CURR(21)` | Total Spend Amount in Display Currency |
| `SupplierOperationalScore` |  | |  |  | `DEC(4)` | Supplier Operational Score |
| `SupplierFeedbackScore` |  | |  |  | `FLTP(16)` | Supplier Evaluation Score |
| `SupplierEvaluationScore` |  | |  |  | `FLTP(16)` | Supplier Evaluation Score |
| `NmbrOfSuplrEvalQnaire` |  | |  |  | `INT4(10)` |  |
