---
name: I_REINTEGOBJECTOCCUPANCY
description: "Real Estate Integ Object Occupancy"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTOCCUPANCY')/$value
semantic_en: "Real Estate Integ Object Occupancy"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
  - metadata-only
---
# I_REINTEGOBJECTOCCUPANCY

**Real Estate Integ Object Occupancy**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTOCCUPANCY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REIntegObjectStatusObject` |  | |  |  | `CHAR(22)` | Object Number |
| `REContractStatusObject` |  | |  |  | `CHAR(22)` | Object Number |
| `REIntegObjectInternalNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `REContractInternalNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `REOccupancyFromDate` |  | |  |  | `DATS(8)` | Contract Start Date |
| `REOccupancyToDate` |  | |  |  | `DATS(8)` | Contract End Date |
| `REIntegObjectValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
| `REIntegObjectValidityEndDate` |  | |  |  | `DATS(8)` | Validity End Date |
| `ContractStartDate` |  | |  |  | `DATS(8)` | Contract Start Date |
| `ContractEndDate` |  | |  |  | `DATS(8)` | Contract End Date |
| `REObjAssgmtValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
| `REObjAssgmtValidityEndDate` |  | |  |  | `DATS(8)` | Validity End Date |
| `REObjectPossessionStartDate` |  | |  |  | `DATS(8)` | Date From Which the Object Is Made Available for Use |
| `REObjectPossessionEndDate` |  | |  |  | `DATS(8)` | Date Up to Which the Object Is Used |
| `IsVacant` |  | |  |  | `CHAR(1)` | Truth Value: True/False |
| `REContractIsActive` |  | |  |  | `CHAR(1)` | Truth Value: True/False |
