---
name: I_SITE
description: "Retail Site"
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITE')/$value
semantic_en: "Retail Site"
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
# I_SITE

**Retail Site**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Site` |  | |  |  | `CHAR(4)` | Plant |
| `SiteName` |  | |  |  | `CHAR(30)` | Site Name |
| `SiteCustomer` |  | |  |  | `CHAR(10)` | Customer Number of Plant |
| `SiteSupplier` |  | |  |  | `CHAR(10)` | Supplier Number of Plant |
| `AddressID` |  | |  |  | `CHAR(10)` | Address |
| `SiteCategory` |  | |  |  | `CHAR(1)` | Site Category |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `DefaultPurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Factory calendar key |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `IsMarkedForArchiving` |  | |  |  | `CHAR(1)` | Central archiving marker for master record |
| `Division` |  | |  |  | `CHAR(2)` | Division for Intercompany Billing |
