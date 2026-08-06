---
name: I_RIGHTSOBJECTMASTERDATA
description: Rights Object Details
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RIGHTSOBJECTMASTERDATA')/$value
semantic_en: Rights Object Details
tags:
  - FS
  - bo:salesorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_RIGHTSOBJECTMASTERDATA

**Rights Object Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RIGHTSOBJECTMASTERDATA')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `RightsObjectUUID` | `RAW(16)` | Rights GUID |
| `RightsObjectCategory` | `CHAR(6)` | Object Category |
| `RightsObjectType` | `CHAR(6)` | Right Type |
| `RightsObjectID` | `CHAR(40)` | Rights ID |
| `RightsObjectDescription` | `CHAR(30)` | Additional description of the right |
| `RightsObjectValidityStartDate` | `DATS(8)` | Start date of the right |
| `RightsObjectValidityEndDate` | `DATS(8)` | Validity End Date of the Right or Patent |
| `RightsObjectClassification` | `CHAR(6)` | Classification |
| `RightsObjectNotarizationDate` | `DATS(8)` | Notarization Date |
| `RightsObjectRegistrationDate` | `DATS(8)` | Date of Patent Registration |
| `RightsObjectPatentNumber` | `CHAR(40)` | Patent Number |
| `RightsObjPatentRegistryNumber` | `CHAR(20)` | No. of the Register in the Patent Office |
| `RightsObjectPatentOffice` | `CHAR(30)` | Patent Office |
| `RightsObjectAdditionalProperty` | `CHAR(6)` | Additional Property Rights that are Available |
| `RightsObjectPatentParentUUID` | `RAW(16)` | Links to Parent Patent - GUID of the Parent |
| `ClaimsObjectDueDate` | `DATS(8)` | Due date of a claim |
| `ClaimsObjectCompositionDesc` | `CHAR(30)` | Composition of the claim |
| `ClaimsObjectSavingsSumPercent` | `DEC(10)` | Savings sum in Percentage (In building savings contracts) |
| `ClaimsObjectDoubtfulDebtAmount` | `CURR(17)` | Provision doubtful debt amount |
| `ClaimsObjectDoubtfulDebtCrcy` | `CUKY(5)` | Currency of Provision of doubfull debt |
| `ClaimsObjectAddressID` | `CHAR(10)` |  Address of the object (for build.sav.contr./rental claim) |
| `ClaimsObjectAccountNumber` | `CHAR(35)` | Account number |
| `ClaimsObjectBankCountryKey` | `CHAR(3)` | Key of Bank Country/Region |
| `ClaimsObjectBankKey` | `CHAR(15)` | Bank Key |
| `CollateralAdminOrgUnit` | `CHAR(12)` | Administration Organizational Unit |
| `RightsObjectEnteredDateTime` | `DEC(15)` | Creation Timestamp |
| `RightsObjLastChangedDateTime` | `DEC(15)` | Change Timestamp |
