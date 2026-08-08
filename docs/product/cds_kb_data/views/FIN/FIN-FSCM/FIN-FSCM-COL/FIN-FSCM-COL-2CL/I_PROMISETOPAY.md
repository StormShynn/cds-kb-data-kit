---
name: I_PROMISETOPAY
description: "Promise To Pay Attributes"
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROMISETOPAY')/$value
semantic_en: "Promise To Pay Attributes"
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
# I_PROMISETOPAY

**Promise To Pay Attributes**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROMISETOPAY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` |  | |  |  | `CHAR(32)` | FSCM-DM: GUID (Internal Key of Dispute Case) |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `LinkedInvoiceKey` |  | |  |  | `CHAR(70)` | Object key |
| `PromisedAmount` |  | |  |  | `CURR(15)` | Amount Promised for Payment |
| `PaidAmount` |  | |  |  | `CURR(15)` | Amount Paid |
| `Currency` |  | |  |  | `CUKY(5)` | Currency of Promise to Pay |
| `DueDate` |  | |  |  | `DATS(8)` | Date for Which Payment Is Promised |
| `CreationDate` |  | |  |  | `DATS(8)` | Date on Which Promise to Pay Was Given |
| `Status` |  | |  |  | `CHAR(1)` | State of Promise to Pay |
| `LastPaymentDate` |  | |  |  | `DATS(8)` | Date of Last Payment |
| `PromiseToPayLevel` |  | |  |  | `INT1(3)` | Level of Promise to Pay |
| `PromiseToPayGivenByPersonName` |  | |  |  | `CHAR(40)` | Clerk That Gave the Promise to Pay |
| `NumberOfInstallments` |  | |  |  | `INT4(10)` | Number of Installments in the Promise to Pay in Installments |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `GlobalCurrencyExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
