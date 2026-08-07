---
name: I_SITESUPPLYINGSITE
description: "Supplying Site Assignment to Site"
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITESUPPLYINGSITE')/$value
semantic_en: "Supplying Site Assignment to Site"
tags:
  - LO
  - bo:plant
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - metadata-only
---
# I_SITESUPPLYINGSITE

**Supplying Site Assignment to Site**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITESUPPLYINGSITE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteCustomer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid to date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-from date |
| `SupplyingSite` |  | |  |  | `CHAR(4)` | Supplying Site (Source of Supply) |
| `MerchandiseCategory` |  | |  |  | `CHAR(9)` | Material Group |
| `SupplyingSitePriority` |  | |  |  | `NUMC(2)` | Supplying Site Priority |
