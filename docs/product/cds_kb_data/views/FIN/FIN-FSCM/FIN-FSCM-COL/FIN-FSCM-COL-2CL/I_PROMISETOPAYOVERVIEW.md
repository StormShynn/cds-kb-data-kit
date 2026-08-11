---
name: I_PROMISETOPAYOVERVIEW
description: "This CDS view provides an overview of promises to pay, allowing you to analyze payment commitments made by customers in SAP Collections Management. It helps in tracking the status and details of these promises, facilitating better financial planning and collection strategies. It aggregates and presents data related to customer payment promises, including amounts promised, paid, and outstanding, along with associated metadata such as customer details, company codes, and currency information. How many promises to pay are currently open and what is their total value? What is the distribution of promised payments across different time intervals? Which customers have the highest promised amounts? What is the total amount promised by customers in a specific currency and exchange rate type? How much of the promised amount has been paid by customers? What is the outstanding amount that is yet to be paid by customers? What are the due intervals for promised payments, and how do they impact the open amounts? Which customers have outstanding promises to pay, and what are their associated company codes and account groups? What is the status of dispute cases related to promise-to-pay agreements? How are promised payments distributed across different collection segments and regions? What is the role of collection specialists in managing promise-to-pay agreements? How do different due intervals affect the open amounts in the display currency?"
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROMISETOPAYOVERVIEW')/$value
semantic_en: "This CDS view provides an overview of promises to pay, allowing you to analyze payment commitments made by customers in SAP Collections Management. It helps in tracking the status and details of these promises, facilitating better financial planning and collection strategies. It aggregates and presents data related to customer payment promises, including amounts promised, paid, and outstanding, along with associated metadata such as customer details, company codes, and currency information. How many promises to pay are currently open and what is their total value? What is the distribution of promised payments across different time intervals? Which customers have the highest promised amounts? What is the total amount promised by customers in a specific currency and exchange rate type? How much of the promised amount has been paid by customers? What is the outstanding amount that is yet to be paid by customers? What are the due intervals for promised payments, and how do they impact the open amounts? Which customers have outstanding promises to pay, and what are their associated company codes and account groups? What is the status of dispute cases related to promise-to-pay agreements? How are promised payments distributed across different collection segments and regions? What is the role of collection specialists in managing promise-to-pay agreements? How do different due intervals affect the open amounts in the display currency?"
tags:
  - FIN
  - account
  - bo:businesspartner
  - component:FIN-FSCM-COL-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - payment
  - plan
  - metadata-only
---
# I_PROMISETOPAYOVERVIEW

**This CDS view provides an overview of promises to pay, allowing you to analyze payment commitments made by customers in SAP Collections Management. It helps in tracking the status and details of these promises, facilitating better financial planning and collection strategies. It aggregates and presents data related to customer payment promises, including amounts promised, paid, and outstanding, along with associated metadata such as customer details, company codes, and currency information. How many promises to pay are currently open and what is their total value? What is the distribution of promised payments across different time intervals? Which customers have the highest promised amounts? What is the total amount promised by customers in a specific currency and exchange rate type? How much of the promised amount has been paid by customers? What is the outstanding amount that is yet to be paid by customers? What are the due intervals for promised payments, and how do they impact the open amounts? Which customers have outstanding promises to pay, and what are their associated company codes and account groups? What is the status of dispute cases related to promise-to-pay agreements? How are promised payments distributed across different collection segments and regions? What is the role of collection specialists in managing promise-to-pay agreements? How do different due intervals affect the open amounts in the display currency?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROMISETOPAYOVERVIEW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` |  | |  |  | `CHAR(32)` | Technical Case Key (Case GUID) |
| `CustomerContactUUID` |  | |  |  | `CHAR(32)` | Customer Contact Key |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Standard Currency in Client |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `DueDate` |  | |  |  | `DATS(8)` | Date for Which Payment Is Promised |
| `CreationDate` |  | |  |  | `DATS(8)` | Date on Which Promise to Pay Was Given |
| `Status` |  | |  |  | `CHAR(1)` | State of Promise to Pay |
| `CaseSystemStatus` |  | |  |  | `CHAR(3)` | Case: System Status |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CollectionSpecialistUserName` |  | |  |  | `CHAR(12)` | Collection Specialist |
| `CollectionSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `PromisedAmount` |  | |  |  | `CURR(15)` | Amount Promised for Payment |
| `PaidAmount` |  | |  |  | `CURR(15)` | Amount Paid |
| `PromiseToPayDueDays` |  | |  |  | `INT4(10)` | Promise To Pay Due Days |
| `PromiseToPayDueIntervalInDays` |  | |  |  | `INT2(5)` | Promise To Pay Due Period in Days |
| `NetDueInterval1InDays` |  | |  |  | `INT2(5)` | Net Due Interval 1 in Days |
| `NetDueInterval2InDays` |  | |  |  | `INT2(5)` | Net Due Interval 2 in Days |
| `NetDueInterval3InDays` |  | |  |  | `INT2(5)` | Net Due Interval 3 in Days |
| `OpenAmountInDisplayCrcy` |  | |  |  | `CURR(23)` | Open Promised Amount |
| `BrokenAmountInDisplayCrcy` |  | |  |  | `CURR(23)` | Broken Amount |
| `PromiseToPayDueIntervalText` |  | |  |  | `CHAR(18)` | Promise To Pay Due Period in Days |
| `DueIntvl1OpenAmtInDspCrcy` |  | |  |  | `CURR(23)` | Payment Promises in 1st Period |
| `DueIntvl2OpenAmtInDspCrcy` |  | |  |  | `CURR(23)` | Payment Promises in 2st Period |
| `DueIntvl3OpenAmtInDspCrcy` |  | |  |  | `CURR(23)` | Payment Promises in 3rd Period |
| `DueIntvl4OpenAmtInDspCrcy` |  | |  |  | `CURR(23)` | Payment Promises in 4th Period |
