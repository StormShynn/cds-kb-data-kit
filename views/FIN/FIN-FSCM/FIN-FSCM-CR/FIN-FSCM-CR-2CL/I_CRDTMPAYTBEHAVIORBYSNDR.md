---
name: I_CRDTMPAYTBEHAVIORBYSNDR
description: Credit Mgmt Payment Behavior by Sender
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMPAYTBEHAVIORBYSNDR')/$value
semantic_en: Credit Mgmt Payment Behavior by Sender
tags:
  - FIN
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - payment
  - metadata-only
---
# I_CRDTMPAYTBEHAVIORBYSNDR

**Credit Mgmt Payment Behavior by Sender**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMPAYTBEHAVIORBYSNDR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `SourceLogicalSystem` |  | |  |  | `CHAR(10)` | Logical system from which message originates |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `CrdtMDunningInfoIsErroneous` |  | |  |  | `CHAR(1)` | Dunning Data is Erroneous |
| `MaximumDunnedOpenItem` |  | |  |  | `CHAR(70)` | Open Item with Highest Dunning Level |
| `MaximumDunningLevel` |  | |  |  | `CHAR(10)` | Highest Dunning Level of Business Partner |
| `MaximumDunnedOpenItemCurrency` |  | |  |  | `CUKY(5)` | Currency of Highest Dunned Item |
| `MaximumDunnedOpenItemAmount` |  | |  |  | `CURR(15)` | Dunned Amount |
| `DunnedItemInfoTransmnDateTime` |  | |  |  | `DEC(15)` | Date and Time of Transmission of Dunning Info |
| `NumberOfOpenItemsInMaxDunLevel` |  | |  |  | `INT4(10)` | Number of Dunning Notices |
| `CrdtMOverdueItmInfoIsErroneous` |  | |  |  | `CHAR(1)` | Open Item Data is Erroneous |
| `OldestOpenItem` |  | |  |  | `CHAR(70)` | Oldest Open Item |
| `OldestOpenItemNetDueDate` |  | |  |  | `DATS(8)` | Net Due Date |
| `OldestOpnItemNrOfDaysInArrears` |  | |  |  | `DEC(3)` | Oldest Open Item: Days in Arrears |
| `OldestOpenItemAmount` |  | |  |  | `CURR(15)` | Amount of Oldest Open Item |
| `OldestOpenItemCurrency` |  | |  |  | `CUKY(5)` | Currency of Oldest Open Item |
| `OldestOpnItemInfoTransmnDteTme` |  | |  |  | `DEC(15)` | Date and Time of Transmission of Oldest Overdue Item Info |
| `CrdtMPaymentInfoIsErroneous` |  | |  |  | `CHAR(1)` | Last Payment Info is Erroneous |
| `LastPaymentItem` |  | |  |  | `CHAR(70)` | Last Payment |
| `LastPaymentDate` |  | |  |  | `DATS(8)` | Date of Last Payment |
| `LastPaymentItemAmount` |  | |  |  | `CURR(15)` | Amount of Last Payment |
| `LastPaymentCurrency` |  | |  |  | `CUKY(5)` | Currency of Last Payment |
| `LastPaymentInfoTransmnDateTime` |  | |  |  | `DEC(15)` | Date and Time of Transmission of  Last Payment Info |
| `CrdtMKeyFigureInfoIsErroneous` |  | |  |  | `CHAR(1)` | Key Figures are Erroneous |
| `SenderCurrency` |  | |  |  | `CUKY(5)` | Currency of Key Figures |
| `DaysSalesOutstanding` |  | |  |  | `DEC(6)` | Key Figure: Days Sales Outstanding |
| `TotalOutstandingAmtInSndrCrcy` |  | |  |  | `CURR(15)` | Total Outstanding Amount |
| `CrdtMKeyFigureTransmnDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `NoCshDiscAvgNrOfDaysInArrears` |  | |  |  | `DEC(3)` | Average Arrears for Payments Where No Cash Discount Taken |
| `PaytNoCshDiscTotAmtInSndrCrcy` |  | |  |  | `CURR(15)` | Gross Total of Cleared Items with Cash Discount Not Taken |
| `CshDiscClmAvgNrOfDaysInArrears` |  | |  |  | `DEC(3)` | Average Arrears with Cash Discount Payments |
| `PaytWthCshDiscTotAmtInSndrCrcy` |  | |  |  | `CURR(15)` | Gross Total of Cleared Items Without Cash Discount Loss |
| `TotLast12MnthsSlsAmtInSndrCrcy` |  | |  |  | `CURR(15)` | Sales of Last 12 Months |
| `Last12MnthsMaxSlsAmtInSndrCrcy` |  | |  |  | `CURR(15)` | Highest Monthly Sales in Last 12 Months |
