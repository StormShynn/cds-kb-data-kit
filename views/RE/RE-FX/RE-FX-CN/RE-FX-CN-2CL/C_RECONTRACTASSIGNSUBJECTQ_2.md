---
name: C_RECONTRACTASSIGNSUBJECTQ_2
description: RE Contract Subject Assignments
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECONTRACTASSIGNSUBJECTQ_2')/$value
semantic_en: RE Contract Subject Assignments
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
# C_RECONTRACTASSIGNSUBJECTQ_2

**RE Contract Subject Assignments**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECONTRACTASSIGNSUBJECTQ_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `ObjectInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `Responsible` |  | |  |  | `CHAR(12)` | Person Responsible |
| `ResponsibleUserFullName` |  | |  |  | `CHAR(80)` | User Description |
| `REContractName` |  | |  |  | `CHAR(80)` | Contract Name |
| `ContractStartDate` |  | |  |  | `DATS(8)` | Contract Start Date |
| `ContractEndDate` |  | |  |  | `DATS(8)` | Contract End Date |
| `REContractFirstEndDate` |  | |  |  | `DATS(8)` | Date of First Contract End |
| `REContractNumberOld` |  | |  |  | `CHAR(20)` | Number of Old Contract |
| `REAuthorizationGroup` |  | |  |  | `CHAR(40)` | Authorization Group |
| `ValuationRelevance` |  | |  |  | `CHAR(10)` | Valuation Relevance |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `REContractType` |  | |  |  | `CHAR(4)` | Contract Type |
| `REContractTypeName` |  | |  |  | `CHAR(30)` | Contract Type Name |
| `ObjectValidFrom` |  | |  |  | `DATS(8)` | Validity Start Date |
| `ObjectValidTo` |  | |  |  | `DATS(8)` | Validity End Date |
| `REContractSubjectNumber` |  | |  |  | `NUMC(4)` | Contract Object Number |
| `REContractSubjectDescription` |  | |  |  | `CHAR(60)` | Name of Contract Object |
| `REContractSubjectClass` |  | |  |  | `CHAR(4)` | Contract Object Class |
| `REContractSubjectClassName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `REContractSubjectType` |  | |  |  | `CHAR(6)` | Type of Contract Object |
| `REContractSubjectTypeName` |  | |  |  | `CHAR(60)` | Description of Contract Object Type |
| `REAccountingObject` |  | |  |  | `CHAR(22)` | Object Number Account Assignment |
| `REAccountingObjectType` |  | |  |  | `CHAR(2)` | Object Type |
| `REAccountingObjectName` |  | |  |  | `CHAR(50)` | Complete Object Identification, for Example BE 1000/123 |
| `NumberOfREContracts` |  | |  |  | `INT4(10)` |  |
