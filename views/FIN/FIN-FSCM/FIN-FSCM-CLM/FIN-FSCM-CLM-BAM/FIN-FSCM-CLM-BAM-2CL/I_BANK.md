---
name: I_BANK
description: "This CDS view allows you to read information about bank master data from your SAP S/4HANA system. This CDS view provides the prerequisites for answering the following business question: What is the name of the bank with its specific bank internal ID, bank number, or bank identifier code?"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANK')/$value
semantic_en: "This CDS view allows you to read information about bank master data from your SAP S/4HANA system. This CDS view provides the prerequisites for answering the following business question: What is the name of the bank with its specific bank internal ID, bank number, or bank identifier code?"
tags:
  - FIN
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
  - master-data
  - metadata-only
---
# I_BANK

**This CDS view allows you to read information about bank master data from your SAP S/4HANA system. This CDS view provides the prerequisites for answering the following business question: What is the name of the bank with its specific bank internal ID, bank number, or bank identifier code?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANK')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `BankInternalID` |  | |  |  | `CHAR(15)` | Bank Keys |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Accounting Clerk Responsible for Adding the Object |
| `BankName` |  | |  |  | `CHAR(60)` | Name of Financial Institution |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `StreetName` |  | |  |  | `CHAR(35)` | Street and House Number |
| `ShortStreetName` |  | |  |  | `CHAR(35)` | Street and House Number |
| `CityName` |  | |  |  | `CHAR(35)` | City |
| `ShortCityName` |  | |  |  | `CHAR(35)` | City |
| `SWIFTCode` |  | |  |  | `CHAR(11)` | SWIFT/BIC for International Payments |
| `BankGroup` |  | |  |  | `CHAR(2)` | Bank group (bank network) |
| `BankNetworkGrouping` |  | |  |  | `CHAR(2)` | Bank group (bank network) |
| `IsPostBankAccount` |  | |  |  | `CHAR(1)` | Post Office Bank Current Account |
| `IsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Number |
| `PostOfficeBankAccount` |  | |  |  | `CHAR(16)` | Post office bank current account number |
| `Branch` |  | |  |  | `CHAR(40)` | Bank Branch |
| `BankBranch` |  | |  |  | `CHAR(40)` | Bank Branch |
| `CheckDigitCalculationMethod` |  | |  |  | `CHAR(4)` | Check digit calculation method |
| `BankDataFileFormat` |  | |  |  | `CHAR(3)` | Format of File with Bank Data |
| `AddressID` |  | |  |  | `CHAR(10)` | Address Number |
