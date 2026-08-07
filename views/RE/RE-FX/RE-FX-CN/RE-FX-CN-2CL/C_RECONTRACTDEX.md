---
name: C_RECONTRACTDEX
description: Extraction for REContract
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECONTRACTDEX')/$value
semantic_en: Extraction for REContract
keywords:
  - Extraction for REContract
tags:
  - RE
  - component:RE-FX-CN-2CL
  - consumption-view
  - contract
  - RE-FX
  - RE-FX-CN
  - RE-FX-CN-2CL
  - metadata-only
---
# C_RECONTRACTDEX

**Extraction for REContract**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECONTRACTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `REStatusObject` |  | |  |  | `CHAR(22)` | Object Number |
| `REStatusObject` |  | |  |  | `CHAR(22)` | Object Number |
| `REInternalFinNumber` |  | |  |  | `CHAR(8)` | Internal Key of Real Estate Object (FI) |
| `REInternalFinNumber` |  | |  |  | `CHAR(8)` | Internal Key of Real Estate Object (FI) |
| `RECreationType` |  | |  |  | `CHAR(1)` | How the Object Was Created |
| `RECreationType` |  | |  |  | `CHAR(1)` | How the Object Was Created |
| `REAuthorizationGroup` |  | |  |  | `CHAR(40)` | Authorization Group |
| `REAuthorizationGroup` |  | |  |  | `CHAR(40)` | Authorization Group |
| `REContractType` |  | |  |  | `CHAR(4)` | Contract Type |
| `REContractType` |  | |  |  | `CHAR(4)` | Contract Type |
| `ContractStartDate` |  | |  |  | `DATS(8)` | Contract Start Date |
| `ContractStartDate` |  | |  |  | `DATS(8)` | Contract Start Date |
| `ContractEndDate` |  | |  |  | `DATS(8)` | Contract End Date |
| `ContractEndDate` |  | |  |  | `DATS(8)` | Contract End Date |
| `REContractName` |  | |  |  | `CHAR(80)` | Contract Name |
| `REContractName` |  | |  |  | `CHAR(80)` | Contract Name |
| `REContractActivateDate` |  | |  |  | `DATS(8)` | Active From |
| `REContractActivateDate` |  | |  |  | `DATS(8)` | Active From |
| `RETenancyLaw` |  | |  |  | `CHAR(5)` | Tenancy Law |
| `RETenancyLaw` |  | |  |  | `CHAR(5)` | Tenancy Law |
| `REContractNumberOld` |  | |  |  | `CHAR(20)` | Number of Old Contract |
| `REContractNumberOld` |  | |  |  | `CHAR(20)` | Number of Old Contract |
| `REMainContractCompanyCode` |  | |  |  | `CHAR(4)` | Company code of main contract |
| `REMainContractCompanyCode` |  | |  |  | `CHAR(4)` | Company code of main contract |
| `REMainContract` |  | |  |  | `CHAR(13)` | Number of Real Estate Main Contract |
| `REMainContract` |  | |  |  | `CHAR(13)` | Number of Real Estate Main Contract |
| `REContractCurrency` |  | |  |  | `CUKY(5)` | Currency for Contract |
| `REContractCurrency` |  | |  |  | `CUKY(5)` | Currency for Contract |
| `RECashFlowPostingFromDate` |  | |  |  | `DATS(8)` | First Posting From |
| `RECashFlowPostingFromDate` |  | |  |  | `DATS(8)` | First Posting From |
| `REBusinessEntity` |  | |  |  | `CHAR(8)` | RE Business Entity |
| `REBusinessEntity` |  | |  |  | `CHAR(8)` | RE Business Entity |
| `REObjectAvailableFromDate` |  | |  |  | `DATS(8)` | Transfer of Possession Start Date |
| `REObjectAvailableFromDate` |  | |  |  | `DATS(8)` | Transfer of Possession Start Date |
| `REObjectAvailableToDate` |  | |  |  | `DATS(8)` | Transfer of Possession End Date |
| `REObjectAvailableToDate` |  | |  |  | `DATS(8)` | Transfer of Possession End Date |
| `REHasMultipleAssignments` |  | |  |  | `CHAR(1)` | Multiple Assignment of Object to Group Allowed |
| `REHasMultipleAssignments` |  | |  |  | `CHAR(1)` | Multiple Assignment of Object to Group Allowed |
| `RealEstateObjectType` |  | |  |  | `CHAR(2)` | Object Type |
| `RealEstateObjectType` |  | |  |  | `CHAR(2)` | Object Type |
| `REIdentificationKey` |  | |  |  | `CHAR(45)` | ID Part Key, for example "1000/123" |
| `REIdentificationKey` |  | |  |  | `CHAR(45)` | ID Part Key, for example "1000/123" |
