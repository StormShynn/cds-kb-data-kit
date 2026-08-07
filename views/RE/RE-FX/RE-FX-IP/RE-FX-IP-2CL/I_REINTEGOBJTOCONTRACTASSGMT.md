---
name: I_REINTEGOBJTOCONTRACTASSGMT
description: Integration Object Contract Assignment
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJTOCONTRACTASSGMT')/$value
semantic_en: Integration Object Contract Assignment
tags:
  - RE
  - component:RE-FX-IP-2CL
  - contract
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
  - metadata-only
---
# I_REINTEGOBJTOCONTRACTASSGMT

**Integration Object Contract Assignment**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJTOCONTRACTASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REStatusObjectSource` |  | |  |  | `CHAR(22)` | Object Number |
| `REObjectAssignmentType` |  | |  |  | `CHAR(2)` | Type of Object Assignment |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `ValidityStartEndDateValue` |  | |  |  | `CHAR(16)` | Date from to (RAP Key) |
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Contract Start Date |
| `REStatusObjectTarget` |  | |  |  | `CHAR(22)` | Object Number |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Contract End Date |
| `REOnlyInfoAssgmt` |  | |  |  | `CHAR(1)` | Informational Assignment |
| `REStatusObjectSourceIsArchived` |  | |  |  | `CHAR(1)` | Source Object Was Archived |
| `REGenerationType` |  | |  |  | `CHAR(1)` | Generation Type Functional Location |
| `REIsMainAsset` |  | |  |  | `CHAR(1)` | Asset Is Leading Asset |
| `REAssignmentHasMultiple` |  | |  |  | `CHAR(1)` | Generated Entry for Multiple Assignment |
| `REObjectPossessionStartDate` |  | |  |  | `DATS(8)` | Date From Which the Object Is Made Available for Use |
| `REObjectPossessionEndDate` |  | |  |  | `DATS(8)` | Date Up to Which the Object Is Used |
