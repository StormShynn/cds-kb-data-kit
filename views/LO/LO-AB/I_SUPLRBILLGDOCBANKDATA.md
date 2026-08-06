---
name: I_SUPLRBILLGDOCBANKDATA
description: Supplier Billing Document Bank Data
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCBANKDATA')/$value
semantic_en: Supplier Billing Document Bank Data
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
  - metadata-only
---
# I_SUPLRBILLGDOCBANKDATA

**Supplier Billing Document Bank Data**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCBANKDATA')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SuplrBillgDoc` | `CHAR(10)` | Supplier Billing Document Number |
| `SuplrBillgDocAcctType` | `CHAR(1)` | Account Type for Which the Bank Data Was Entered |
| `CreationTime` | `TIMS(6)` | Time of Document Creation |
| `CreationDate` | `DATS(8)` | Date of Document Creation |
| `CreatedByUser` | `CHAR(12)` | Name of User who Created the Document |
| `LastChangeDate` | `DATS(8)` | Date of Last Document Change |
| `BankAccount` | `CHAR(18)` | Bank Account Number |
| `BankCountry` | `CHAR(3)` | Bank Country/Region Key |
| `BankInternalID` | `CHAR(15)` | Bank Internal Identification |
| `BankControlKey` | `CHAR(2)` | Bank Control Key |
| `BankAccountReferenceText` | `CHAR(20)` | Reference Details for Bank Details |
| `DataExchangeInstruction` | `CHAR(2)` | Data Exchange Instruction |
| `DataExchangeInstructionKey` | `CHAR(2)` | Data Exchange Instruction |
| `TaxNumber1` | `CHAR(16)` | Tax Number 1 |
| `TaxNumber2` | `CHAR(11)` | Tax Number 2 |
| `TaxNumber3` | `CHAR(18)` | Tax Number 3 |
| `TaxNumber4` | `CHAR(18)` | Tax Number 4 |
| `IsNaturalPerson` | `CHAR(1)` | Business Partner Is a Natural Person Under the Tax Laws |
| `VATLiability` | `CHAR(1)` | Liable for VAT |
