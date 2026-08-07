---
name: I_CONTACTPERSONDEX
description: "Data Extraction for Contact Person"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTACTPERSONDEX')/$value
semantic_en: "Data Extraction for Contact Person"
tags:
  - LO
  - bo:salesorder
  - component:LO-MD-BP-2CL
  - interface-view
  - LO-MD
  - LO-MD-BP
  - LO-MD-BP-2CL
  - lob:logistics general
  - metadata-only
---
# I_CONTACTPERSONDEX

**Data Extraction for Contact Person**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTACTPERSONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContactPerson` |  | |  |  | `NUMC(10)` | Number of Contact Person |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `ContactPersonFunction` |  | |  |  | `CHAR(2)` | Contact person function |
| `ContactPersonDepartment` |  | |  |  | `CHAR(4)` | Contact person department |
| `SearchTerm` |  | |  |  | `CHAR(10)` | Sort Field |
| `PersonNumber` |  | |  |  | `CHAR(10)` | Person Number |
| `UpperCaseFirstName` |  | |  |  | `CHAR(25)` | First Name in Uppercase for Search Help |
| `UpperCaseLastName` |  | |  |  | `CHAR(25)` | Last Name in Uppercase for Search Help |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-from date - in current Release only 00010101 possible |
| `AddressRepresentationCode` |  | |  |  | `CHAR(1)` | Version ID for International Addresses |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
