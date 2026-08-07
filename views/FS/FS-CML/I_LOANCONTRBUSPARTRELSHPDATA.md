---
name: I_LOANCONTRBUSPARTRELSHPDATA
description: Business Partner relationship data for Loan Contract
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRBUSPARTRELSHPDATA')/$value
semantic_en: Business Partner relationship data for Loan Contract
tags:
  - FS
  - component:FS-CML
  - contract
  - FS-CML
  - interface-view
  - metadata-only
---
# I_LOANCONTRBUSPARTRELSHPDATA

**Business Partner relationship data for Loan Contract**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRBUSPARTRELSHPDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanBPObjectCode` |  | |  |  | `CHAR(2)` | Key for number range object |
| `LoanBPObjectInternalKey` |  | |  |  | `CHAR(13)` | Internal key for object for business partner table |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerRole` |  | |  |  | `CHAR(6)` | BP Role |
| `LoanBPObjectGenerationDate` |  | |  |  | `DATS(8)` | Flow data key: System date |
| `LoanBusPartRelshpStrtDte` |  | |  |  | `DATS(8)` | Date of start of relationship |
| `LoanBusPartRelshpEndDte` |  | |  |  | `DATS(8)` | Date of end of relationship |
| `LoanCorrespncRoleType` |  | |  |  | `CHAR(4)` | CML Correspondence Role Type of Recipient |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `BPBankAccountInternalID` |  | |  |  | `CHAR(4)` | Partner bank type |
| `BPPaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `LoanBPDunLetterType` |  | |  |  | `CHAR(1)` | Type of Dunning Letter |
| `LoanBPIsPostDunCharge` |  | |  |  | `CHAR(1)` | Post Dunning Charges and Interest to This Partner |
