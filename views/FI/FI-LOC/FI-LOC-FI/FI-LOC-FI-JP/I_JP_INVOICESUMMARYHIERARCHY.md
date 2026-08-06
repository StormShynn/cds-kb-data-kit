---
name: I_JP_INVOICESUMMARYHIERARCHY
description: Japan Invoice Summary Customer Hierarchy
app_component: FI-LOC-FI-JP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_INVOICESUMMARYHIERARCHY')/$value
semantic_en: Japan Invoice Summary Customer Hierarchy
tags:
  - FI
  - bo:billingdocument
  - component:FI-LOC-FI-JP
  - customer
  - FI-LOC
  - FI-LOC-FI
  - FI-LOC-FI-JP
  - interface-view
  - invoice
  - lob:finance
  - lob:logistics general
  - metadata-only
---
# I_JP_INVOICESUMMARYHIERARCHY

**Japan Invoice Summary Customer Hierarchy**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-JP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_INVOICESUMMARYHIERARCHY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Customer` | `CHAR(10)` | Customer Number |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `InvcSmmryRole` | `CHAR(1)` | Invoice Summary Role |
| `InvcSmmryRecipient` | `CHAR(10)` | Invoice Summary Recipient |
| `InvcSmmryPayer` | `CHAR(10)` | Invoice Summary Payer |
| `InvcSmmryPyrInvcNumberRange` | `CHAR(2)` | Number range number for Payer Invoice |
| `InvcSmmryMnthlyInvcNmbrRange` | `CHAR(2)` | Number range number for Monthly Invoice |
| `InvcSmmryHasTaxCalcdInHeader` | `CHAR(1)` | Calculate Tax at MI Header Level |
| `InvcSmmryHldayDueDateRcalc` | `CHAR(1)` | Consider JP Holidays In Due Date Calculation |
| `InvcSmmryBkChargeIsPaidByPayee` | `CHAR(1)` | Bank Charges Paid By Payee |
| `InvcSmmryBankChargePatternID` | `CHAR(2)` | Bank Charge Pattern ID |
| `InvcSmmryBankCountry` | `CHAR(3)` | Bank Country/Region Key |
| `InvcSmmryBank` | `CHAR(15)` | Bank Keys |
| `InvcSmmryVirtualAcctNo` | `CHAR(10)` | Virtual Account Number |
| `InvcSmmryPaytTermProposalRule` | `CHAR(1)` | Proposal of Payment Term |
| `VirtualAcctNmbrIsAutomlyAssgd` | `CHAR(1)` | Relevant for Special Cases |
| `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |
