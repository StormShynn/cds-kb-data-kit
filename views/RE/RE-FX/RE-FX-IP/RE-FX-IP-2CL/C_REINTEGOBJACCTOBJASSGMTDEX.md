---
name: C_REINTEGOBJACCTOBJASSGMTDEX
description: Extractor for REIntegObjectAcctObjAssgmt
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REINTEGOBJACCTOBJASSGMTDEX')/$value
semantic_en: Extractor for REIntegObjectAcctObjAssgmt
tags:
  - RE
  - component:RE-FX-IP-2CL
  - consumption-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
  - metadata-only
---
# C_REINTEGOBJACCTOBJASSGMTDEX

**Extractor for REIntegObjectAcctObjAssgmt**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REINTEGOBJACCTOBJASSGMTDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `InternalRealEstateNumber` | `CHAR(13)` | Internal Key of Real Estate Object |
| `REAccountingObject` | `CHAR(22)` | Object Number |
| `ValidityEndDate` | `DATS(8)` | Validity End Date |
| `ValidityStartDate` | `DATS(8)` | Validity Start Date |
| `REStatusObjectSource` | `CHAR(22)` | Object Number |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `REAccountingObjectType` | `CHAR(2)` | Object Type |
| `REOnlyInfoAssgmt` | `CHAR(1)` | Informational Assignment |
| `REIsLeadingObject` | `CHAR(1)` | Leading object Indicator |
| `REIntegObjSpaceGroupType` | `CHAR(4)` | Group Type |
| `REParentIntegObjectType` | `CHAR(4)` | Parent Object Type |
| `REParentIntegObjectExternalID` | `CHAR(45)` | Parent External Identification |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `InternalOrder` | `CHAR(12)` | Internal Order |
| `OrderType` | `CHAR(4)` | Order Type |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
