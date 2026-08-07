---
name: I_REINTEGRATIONOBJECTBASICDATA
description: Real Estate Integration Object
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGRATIONOBJECTBASICDATA')/$value
semantic_en: Real Estate Integration Object
tags:
  - RE
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
  - metadata-only
---
# I_REINTEGRATIONOBJECTBASICDATA

**Real Estate Integration Object**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGRATIONOBJECTBASICDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `RealEstateExternalID` |  | |  |  | `CHAR(45)` | External Identification |
| `REStatusObject` |  | |  |  | `CHAR(22)` | Object Number |
| `REIntegrationObjectNumber` |  | |  |  | `CHAR(20)` | Real Estate Object Number |
| `REIntegrationObjectType` |  | |  |  | `CHAR(4)` | Object Type |
| `REIntegObjectCtrlgObjectType` |  | |  |  | `CHAR(1)` | Controlling Object Type |
| `REIntegrationObjectName` |  | |  |  | `CHAR(30)` | Object Name (Short) |
| `REIntegObjectLongName` |  | |  |  | `CHAR(250)` | Object Name (Long) |
| `REIntegObjSpaceGroupType` |  | |  |  | `CHAR(4)` | Group Type |
| `RESpaceGroupUsageType` |  | |  |  | `CHAR(4)` | Group Usage Type |
| `RESpaceGrpEnableUseType` |  | |  |  | `CHAR(4)` | Usage Enablement Type |
| `REInternalNumberForUseEnable` |  | |  |  | `CHAR(13)` | Internal Object Number (Enable Use) |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `REParentIntegObjectType` |  | |  |  | `CHAR(4)` | Parent Object Type |
| `REParentIntegObjectExternalID` |  | |  |  | `CHAR(45)` | Parent External Identification |
| `REAreaUnit` |  | |  |  | `UNIT(3)` | Area Unit |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Entered By |
| `CreationDate` |  | |  |  | `DATS(8)` | First Entered On |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Creation |
| `RESourceOfCreation` |  | |  |  | `CHAR(10)` | Source of Initial Entry |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Employee ID |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Edited On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Last Edited At |
| `RESourceOfChange` |  | |  |  | `CHAR(10)` | Editing Source |
| `Responsible` |  | |  |  | `CHAR(12)` | Person Responsible |
| `REAuthorizationGroup` |  | |  |  | `CHAR(40)` | Authorization Group |
