---
name: C_CREDITACCTWITHTODOQUERY_2
description: Credit Account With ToDo V2 Query
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCTWITHTODOQUERY_2')/$value
semantic_en: Credit Account With ToDo V2 Query
tags:
  - FIN
  - account
  - component:FIN-FSCM-CR-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - lob:finance
  - metadata-only
---
# C_CREDITACCTWITHTODOQUERY_2

**Credit Account With ToDo V2 Query**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCTWITHTODOQUERY_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CreditAnalyst` |  | |  |  | `CHAR(10)` | Credit Analyst |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `CustomerCreditExposureAmount` |  | |  |  | `CURR(23)` | Credit Exposure Amount |
| `CustomerCreditLimitAmount` |  | |  |  | `CURR(23)` | Customer's Credit Limit |
| `CreditAccountResubmissionDate` |  | |  |  | `DATS(8)` | Resubmission Date |
| `BusinessPartnerIsCritical` |  | |  |  | `CHAR(1)` | Special Attention Required |
| `CreditLimitIsZero` |  | |  |  | `CHAR(1)` | Credit Limit is Zero |
| `CreditAccountBlockReason` |  | |  |  | `CHAR(2)` | Credit Account Blocking Reason |
| `NumberOfCreditDecisionDocs` |  | |  |  | `INT4(10)` | Number of Documented Credit Decisions |
| `NumberOfCreditLimitRequests` |  | |  |  | `INT4(10)` | Number of Credit Limit Requests |
| `NumberOfResubmissions` |  | |  |  | `INT4(10)` | Number of Resubmisisons |
| `BPHasCreditDecisionDocument` |  | |  |  | `CHAR(1)` | Documented Credit Decision exists |
| `BPHasCreditLimitRequest` |  | |  |  | `CHAR(1)` | Credit Limit Request exists |
| `BPHasResubmission` |  | |  |  | `CHAR(1)` | Resubmission exists |
| `CreditLimitUtilizationPct` |  | |  |  | `DEC(10)` | Credit Limit Change (in Percent) |
