---
name: C_PROMISETOPAYOVERVIEW
description: This CDS view provides details of promises to pay in SAP Dispute Management. This CDS view provides the data to answer the following business questions: When is the promise to pay due? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROMISETOPAYOVERVIEW')/$value
semantic_en: This CDS view provides details of promises to pay in SAP Dispute Management. This CDS view provides the data to answer the following business questions: When is the promise to pay due? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FI
  - bo:companycode
  - component:FI-AR-IS-2CL
  - consumption-view
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - lob:finance
  - metadata-only
---
# C_PROMISETOPAYOVERVIEW

**This CDS view provides details of promises to pay in SAP Dispute Management. This CDS view provides the data to answer the following business questions: When is the promise to pay due? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROMISETOPAYOVERVIEW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Standard Currency in Client |
| `DueDate` |  | |  |  | `DATS(8)` | Date for Which Payment Is Promised |
| `Status` |  | |  |  | `CHAR(1)` | State of Promise to Pay |
| `CaseSystemStatus` |  | |  |  | `CHAR(3)` | Case: System Status |
| `CaseSystemStatusName` |  | |  |  | `CHAR(40)` | Case: System Status Description |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `RegionName` |  | |  |  | `CHAR(20)` | Description |
| `CollectionSpecialistUserName` |  | |  |  | `CHAR(12)` | Collection Specialist |
| `CollectionSpecialistName` |  | |  |  | `CHAR(80)` | Full Name of Person |
| `CollectionSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `CollectionSegmentName` |  | |  |  | `CHAR(50)` | Name of Collection Segment |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` |  |
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
