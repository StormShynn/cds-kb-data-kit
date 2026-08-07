---
name: I_RECONTRACTVALID
description: Valid Real Estate Contracts
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTVALID')/$value
semantic_en: Valid Real Estate Contracts
tags:
  - RE
  - component:RE-FX-CN-2CL
  - contract
  - interface-view
  - RE-FX
  - RE-FX-CN
  - RE-FX-CN-2CL
  - metadata-only
---
# I_RECONTRACTVALID

**Valid Real Estate Contracts**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTVALID')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `ObjectInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Entered By |
| `CreatedByUserDescription` |  | |  |  | `CHAR(80)` | User Description |
| `CreationDate` |  | |  |  | `DATS(8)` | First Entered On |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Creation |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Edited On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Last Edited At |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Employee ID |
| `LastChangedByUserDescription` |  | |  |  | `CHAR(80)` | User Description |
| `Responsible` |  | |  |  | `CHAR(12)` | Person Responsible |
| `ResponsibleUserFullName` |  | |  |  | `CHAR(80)` | User Description |
| `REContractName` |  | |  |  | `CHAR(80)` | Contract Name |
| `ContractStartDate` |  | |  |  | `DATS(8)` | Contract Start Date |
| `ContractEndDate` |  | |  |  | `DATS(8)` | Contract End Date |
| `REContractFirstEndDate` |  | |  |  | `DATS(8)` | Date of First Contract End |
| `REContractNumberOld` |  | |  |  | `CHAR(20)` | Number of Old Contract |
| `REMainContractCompanyCode` |  | |  |  | `CHAR(4)` | Company code of main contract |
| `REMainContract` |  | |  |  | `CHAR(13)` | Number of Real Estate Main Contract |
| `REAuthorizationGroup` |  | |  |  | `CHAR(40)` | Authorization Group |
| `ValuationRelevance` |  | |  |  | `CHAR(10)` | Valuation Relevance |
| `ValuationRelevanceDesc` |  | |  |  | `CHAR(60)` | Description for Valuation Relevance |
| `REIdentificationType` |  | |  |  | `CHAR(2)` |  |
| `REIdentificationKey` |  | |  |  | `CHAR(45)` | ID Part Key, for example "1000/123" |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `REContractType` |  | |  |  | `CHAR(4)` | Contract Type |
| `REContractTypeName` |  | |  |  | `CHAR(30)` | Contract Type Name |
| `REContractSystStatus` |  | |  |  | `SSTR(224)` | Concatenated Contract System Status |
| `REContractUserStatus` |  | |  |  | `SSTR(224)` | Concatenated Contract User Status |
| `REContractStatus` |  | |  |  | `SSTR(449)` |  |
| `IsActive` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `NumberOfREContracts` |  | |  |  | `INT4(10)` |  |
