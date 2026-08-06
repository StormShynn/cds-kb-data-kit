---
name: I_REOBJECTBYINTFINNUMBER
description: Real Estate Object by Internal FIN Number
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REOBJECTBYINTFINNUMBER')/$value
semantic_en: Real Estate Object by Internal FIN Number
tags:
  - RE
  - bo:companycode
  - component:RE-FX-2CL
  - interface-view
  - RE-FX
  - RE-FX-2CL
  - metadata-only
---
# I_REOBJECTBYINTFINNUMBER

**Real Estate Object by Internal FIN Number**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REOBJECTBYINTFINNUMBER')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `REInternalFinNumber` | `CHAR(8)` | Internal Key of Real Estate Object (FI) |
| `REStatusObject` | `CHAR(22)` | Object Number |
| `InternalRealEstateNumber` | `CHAR(13)` | Internal Key of Real Estate Object |
| `RealEstateObjectType` | `CHAR(2)` | Object Type |
| `REIdentificationKey` | `CHAR(45)` | ID Part Key, for example "1000/123" |
| `REIdentification` | `CHAR(50)` | Complete Object Identification, for Example BE 1000/123 |
| `REAccountingObjectName` | `CHAR(50)` | Complete Object Identification, for Example BE 1000/123 |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `RealEstateContract` | `CHAR(13)` | Real Estate Contract Number |
| `REBusinessEntity` | `CHAR(8)` | RE Business Entity |
| `RERentalObject` | `CHAR(8)` | RE Rental Object |
| `RealEstateBuilding` | `CHAR(8)` | Real Estate Building |
| `RealEstateProperty` | `CHAR(8)` | Real Estate Property |
| `REServiceChargeKey` | `CHAR(4)` | RE Service Charge Key |
| `RESettlementUnitID` | `CHAR(5)` | RE Settlement Unit |
