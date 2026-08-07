---
name: I_LOANCONTRACTLDOCHDRDATA
description: "Actual Document Header for Loan Contract"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTLDOCHDRDATA')/$value
semantic_en: "Actual Document Header for Loan Contract"
tags:
  - FS
  - component:FS-CML
  - contract
  - document
  - FS-CML
  - interface-view
  - metadata-only
---
# I_LOANCONTRACTLDOCHDRDATA

**Actual Document Header for Loan Contract**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTLDOCHDRDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PostedDocumentID` |  | |  |  | `CHAR(10)` | Document Number of Document Header (Loan) |
| `LoanContractID` |  | |  |  | `CHAR(13)` | Contract Number |
| `LoanClassfctnNmbr` |  | |  |  | `CHAR(13)` | Classification Number for Finance Projects |
| `LoanLifeCycleStatus` |  | |  |  | `NUMC(2)` | Status of data record |
| `LoanAcctAssgmtRef` |  | |  |  | `CHAR(8)` | Account Assignment Reference in Financial Assets Management |
| `CshFlwItmGLAccount` |  | |  |  | `CHAR(10)` | General Ledger Account |
| `LoanBusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CashFlowItemPostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `CashFlowItemReversalStatus` |  | |  |  | `CHAR(1)` | Reversal indicator |
| `ReverseDocument` |  | |  |  | `CHAR(10)` | Reverse Document Number |
| `WvrWriteoffDocument` |  | |  |  | `CHAR(10)` | Doc.no. of debit pos. doc.header (only for inc.pmnt records) |
| `CshFlwItmTransfToFinAcctgDte` |  | |  |  | `DATS(8)` | Date of transferal to FiAc |
| `CashFlowItemEnteredBy` |  | |  |  | `CHAR(12)` | Entered By |
| `CashFlowItemEnteredDate` |  | |  |  | `DATS(8)` | First Entered On |
| `CashFlowItemEnteredTime` |  | |  |  | `TIMS(6)` | Time of Creation |
| `CashFlowItemEnteredSource` |  | |  |  | `CHAR(10)` | Source of Initial Entry |
| `CshFlwItmBusTransNmbr` |  | |  |  | `CHAR(10)` | Daybook no. |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
