---
name: I_CRDTMPAYTBEHAVIORKEYFIGS
description: "Payment Behavior Newest Key Figures"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMPAYTBEHAVIORKEYFIGS')/$value
semantic_en: "Payment Behavior Newest Key Figures"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - payment
  - metadata-only
---
# I_CRDTMPAYTBEHAVIORKEYFIGS

**Payment Behavior Newest Key Figures**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMPAYTBEHAVIORKEYFIGS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `CrdtMKeyFigureInfoIsErroneous` |  | |  |  | `CHAR(1)` | Key Figures are Erroneous |
| `DaysSalesOutstanding` |  | |  |  | `DEC(6)` | Key Figure: Days Sales Outstanding |
| `TotalOutstandingAmtInSndrCrcy` |  | |  |  | `CURR(15)` | Total Outstanding Amount |
| `SenderCurrency` |  | |  |  | `CUKY(5)` | Currency of Key Figures |
| `CrdtMKeyFigureTransmnDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `NoCshDiscAvgNrOfDaysInArrears` |  | |  |  | `DEC(3)` | Average Arrears for Payments Where No Cash Discount Taken |
| `PaytNoCshDiscTotAmtInSndrCrcy` |  | |  |  | `CURR(15)` | Gross Total of Cleared Items with Cash Discount Not Taken |
| `CshDiscClmAvgNrOfDaysInArrears` |  | |  |  | `DEC(3)` | Average Arrears with Cash Discount Payments |
| `PaytWthCshDiscTotAmtInSndrCrcy` |  | |  |  | `CURR(15)` | Gross Total of Cleared Items Without Cash Discount Loss |
| `TotLast12MnthsSlsAmtInSndrCrcy` |  | |  |  | `CURR(15)` | Sales of Last 12 Months |
| `Last12MnthsMaxSlsAmtInSndrCrcy` |  | |  |  | `CURR(15)` | Highest Monthly Sales in Last 12 Months |
