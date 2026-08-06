---
name: I_PROMISETOPAYOVERVIEW
description: Promise To Pay Overview - Cube
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROMISETOPAYOVERVIEW')/$value
semantic_en: Promise To Pay Overview - Cube
tags:
  - FIN
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - metadata-only
---
# I_PROMISETOPAYOVERVIEW

**Promise To Pay Overview - Cube**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROMISETOPAYOVERVIEW')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DisputeCaseUUID` | `CHAR(32)` | Technical Case Key (Case GUID) |
| `CustomerContactUUID` | `CHAR(32)` | Customer Contact Key |
| `GroupCurrency` | `CUKY(5)` | Standard Currency in Client |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Customer` | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `DueDate` | `DATS(8)` | Date for Which Payment Is Promised |
| `CreationDate` | `DATS(8)` | Date on Which Promise to Pay Was Given |
| `Status` | `CHAR(1)` | State of Promise to Pay |
| `CaseSystemStatus` | `CHAR(3)` | Case: System Status |
| `CustomerCountry` | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` | `CHAR(3)` | Region (State, Province, County) |
| `CollectionSpecialistUserName` | `CHAR(12)` | Collection Specialist |
| `CollectionSegment` | `CHAR(10)` | Collection Segment |
| `CustomerBasicAuthorizationGrp` | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `ExchangeRateType` | `CHAR(4)` | Exchange Rate Type |
| `PromisedAmount` | `CURR(15)` | Amount Promised for Payment |
| `PaidAmount` | `CURR(15)` | Amount Paid |
| `PromiseToPayDueDays` | `INT4(10)` | Promise To Pay Due Days |
| `PromiseToPayDueIntervalInDays` | `INT2(5)` | Promise To Pay Due Period in Days |
| `NetDueInterval1InDays` | `INT2(5)` | Net Due Interval 1 in Days |
| `NetDueInterval2InDays` | `INT2(5)` | Net Due Interval 2 in Days |
| `NetDueInterval3InDays` | `INT2(5)` | Net Due Interval 3 in Days |
| `OpenAmountInDisplayCrcy` | `CURR(23)` | Open Promised Amount |
| `BrokenAmountInDisplayCrcy` | `CURR(23)` | Broken Amount |
| `PromiseToPayDueIntervalText` | `CHAR(18)` | Promise To Pay Due Period in Days |
| `DueIntvl1OpenAmtInDspCrcy` | `CURR(23)` | Payment Promises in 1st Period |
| `DueIntvl2OpenAmtInDspCrcy` | `CURR(23)` | Payment Promises in 2st Period |
| `DueIntvl3OpenAmtInDspCrcy` | `CURR(23)` | Payment Promises in 3rd Period |
| `DueIntvl4OpenAmtInDspCrcy` | `CURR(23)` | Payment Promises in 4th Period |
