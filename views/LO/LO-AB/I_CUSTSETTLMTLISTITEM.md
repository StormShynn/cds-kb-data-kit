---
name: I_CUSTSETTLMTLISTITEM
description: "Customer Settlement List Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTITEM')/$value
semantic_en: "Customer Settlement List Item"
keywords:
  - "Customer Settlement List Item"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_CUSTSETTLMTLISTITEM

**Customer Settlement List Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmtList` |  | |  |  | `CHAR(10)` | Settlement Document: Customer Settlement List |
| `CustSettlmtListItem` |  | |  |  | `NUMC(6)` | Item in List |
| `RefSettlmtDoc` |  | |  |  | `CHAR(10)` | Settlement Document Number |
| `CustSettlmtListCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtDocListItemNetAmount` |  | |  |  | `CURR(15)` | Net Amount of a List Item |
| `SettlmtDocListItemTaxAmount` |  | |  |  | `CURR(13)` | Tax Amount in Document Currency |
| `NonDeductibleInputTaxAmount` |  | |  |  | `CURR(13)` | Non-Deductible Input Tax for Item |
| `SettlmtRemunerationNetAmt` |  | |  |  | `CURR(13)` | Value of the Settlement Document List Conditions |
| `SettlmtRemunerationTaxAmt` |  | |  |  | `CURR(13)` | Tax of Settlement Document List Conditions |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `BillToParty` |  | |  |  | `CHAR(10)` | Customer in Settlement Management |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `CustSettlmtListItmIsCancld` |  | |  |  | `CHAR(1)` | List Item is Reversed |
| `PrcDetnIsIncmplt` |  | |  |  | `CHAR(1)` | Indicator that Pricing Determination for Item is Incomplete |
