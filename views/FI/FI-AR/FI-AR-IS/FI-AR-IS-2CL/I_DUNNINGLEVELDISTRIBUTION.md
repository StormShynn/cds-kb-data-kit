---
name: I_DUNNINGLEVELDISTRIBUTION
description: "This CDS view provides you with an overview of the dunning level distribution for accounts receivables. The search result aggregates the amount for each dunning level and account (company code and customer). This CDS view provides you with information that you need to answer the following business questions: How high is the overall open amount that is subject to dunning? Which customers have overdue amounts that were already dunned? Which customers have been dunned multiple times? Is there a risk that there will be doubtful debts?"
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGLEVELDISTRIBUTION')/$value
semantic_en: "This CDS view provides you with an overview of the dunning level distribution for accounts receivables. The search result aggregates the amount for each dunning level and account (company code and customer). This CDS view provides you with information that you need to answer the following business questions: How high is the overall open amount that is subject to dunning? Which customers have overdue amounts that were already dunned? Which customers have been dunned multiple times? Is there a risk that there will be doubtful debts?"
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_DUNNINGLEVELDISTRIBUTION

**This CDS view provides you with an overview of the dunning level distribution for accounts receivables. The search result aggregates the amount for each dunning level and account (company code and customer). This CDS view provides you with information that you need to answer the following business questions: How high is the overall open amount that is subject to dunning? Which customers have overdue amounts that were already dunned? Which customers have been dunned multiple times? Is there a risk that there will be doubtful debts?**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGLEVELDISTRIBUTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Customer |
| `DunningLevel` |  | |  |  | `NUMC(1)` | Dunning Level |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ReconciliationAccount` |  | |  |  | `CHAR(10)` | Reconciliation Account in General Ledger |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Customer Basic Authorization Group |
| `CustomerFinsAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `DunningLevel1AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 1 in Display Currency |
| `DunningLevel2AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 2 in Display Currency |
| `DunningLevel3AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 3 in Display Currency |
| `DunningLevel4AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 4 in Display Currency |
| `DunningLevel5AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 5 in Display Currency |
| `DunningLevel6AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 6 in Display Currency |
| `DunningLevel7AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 7 in Display Currency |
| `DunningLevel8AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 8 in Display Currency |
| `DunningLevel9AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 9 in Display Currency |
| `DunningLevelRngeAmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Level Range Amount in Display Currency |
