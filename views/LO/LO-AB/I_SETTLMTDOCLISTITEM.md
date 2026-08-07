---
name: I_SETTLMTDOCLISTITEM
description: Settlement Document List Item
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEM')/$value
semantic_en: Settlement Document List Item
keywords:
  - Settlement Document List Item
tags:
  - LO
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETTLMTDOCLISTITEM

**Settlement Document List Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocList` |  | |  |  | `CHAR(10)` | Document Number of Settlement Document List |
| `SettlmtDocListItem` |  | |  |  | `NUMC(6)` | Item in List |
| `SettlmtDocListCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `SettlmtDocListItemNetAmount` |  | |  |  | `CURR(15)` | Net Amount of a List Item |
| `SettlmtDocListItemTaxAmount` |  | |  |  | `CURR(13)` | Tax Amount in Document Currency |
| `NonDeductibleInputTaxAmount` |  | |  |  | `CURR(13)` | Non-Deductible Input Tax for Item |
| `SettlmtRemunerationNetAmt` |  | |  |  | `CURR(13)` | Value of the Settlement Document List Conditions |
| `SettlmtRemunerationTaxAmt` |  | |  |  | `CURR(13)` | Tax of Settlement Document List Conditions |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `BillToParty` |  | |  |  | `CHAR(10)` | Customer in Settlement Management |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtDocListCat` |  | |  |  | `CHAR(1)` | Category of List Document |
| `SettlmtDocListItemCat` |  | |  |  | `CHAR(1)` | Category of List Document Item |
| `RefSuplrBillgDoc` |  | |  |  | `CHAR(10)` | Reference Supplier Billing Document Number |
| `RefSettlmtDoc` |  | |  |  | `CHAR(10)` | Ref Settlement Document |
| `RefCustSettlmtList` |  | |  |  | `CHAR(10)` | Reference Customer Settlement List |
| `RefSuplrSettlmtList` |  | |  |  | `CHAR(10)` | Reference Supplier Settlement List |
| `RefSettlmtDocList` |  | |  |  | `CHAR(10)` | Reference Settlement Document List |
| `RefCustSettlmt` |  | |  |  | `CHAR(10)` | Ref Customer Settlement |
| `RefExpnSettlmt` |  | |  |  | `CHAR(10)` | Reference Expense Settlement |
| `RefSuplrSettlmt` |  | |  |  | `CHAR(10)` | Reference Supplier Settlement |
| `SettlmtExtBillgDoc` |  | |  |  | `CHAR(10)` | External Billing Document in Settlement Management |
| `SettlmtExtAcctgDocCompanyCode` |  | |  |  | `CHAR(4)` | Company Code of External Accounting Doc in Settlmt Mgmt |
| `SettlmtExtAcctgDoc` |  | |  |  | `CHAR(10)` | External Accounting Document in Settlement Management |
| `SettlmtExtAcctgDocFiscalYear` |  | |  |  | `NUMC(4)` | Year of External Accounting Document |
| `SettlmtExtAcctgDocItem` |  | |  |  | `NUMC(3)` | External Accounting Document Item in Settlement Management |
| `SettlmtDocListItemIsCancelled` |  | |  |  | `CHAR(1)` | List Item is Reversed |
| `PrcDetnIsIncmplt` |  | |  |  | `CHAR(1)` | Indicator that Pricing Determination for Item is Incomplete |
