---
name: I_EXPNSETTLMTBANKDATA
description: Expense Settlement Bank Data
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTBANKDATA')/$value
semantic_en: Expense Settlement Bank Data
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_EXPNSETTLMTBANKDATA

**Expense Settlement Bank Data**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTBANKDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExpnSettlmt` |  | |  |  | `CHAR(10)` | Document Number of Expense Settlement |
| `ExpnSettlmtAcctType` |  | |  |  | `CHAR(1)` | Account Type for Which the Bank Data Was Entered |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Document Change |
| `BankAccount` |  | |  |  | `CHAR(18)` | Bank Account Number |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `BankInternalID` |  | |  |  | `CHAR(15)` | Bank Internal Identification |
| `BankControlKey` |  | |  |  | `CHAR(2)` | Bank Control Key |
| `BankAccountReferenceText` |  | |  |  | `CHAR(20)` | Reference Details for Bank Details |
| `DataExchangeInstruction` |  | |  |  | `CHAR(2)` | Data Exchange Instruction |
| `DataExchangeInstructionKey` |  | |  |  | `CHAR(2)` | Data Exchange Instruction |
| `TaxNumber1` |  | |  |  | `CHAR(16)` | Tax Number 1 |
| `TaxNumber2` |  | |  |  | `CHAR(11)` | Tax Number 2 |
| `TaxNumber3` |  | |  |  | `CHAR(18)` | Tax Number 3 |
| `TaxNumber4` |  | |  |  | `CHAR(18)` | Tax Number 4 |
| `IsNaturalPerson` |  | |  |  | `CHAR(1)` | Business Partner Is a Natural Person Under the Tax Laws |
| `VATLiability` |  | |  |  | `CHAR(1)` | Liable for VAT |
