---
name: C_QUALITYCERTIFICATEEMAIL
description: Quality Certificate Email
app_component: QM-CA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_QUALITYCERTIFICATEEMAIL')/$value
semantic_en: Quality Certificate Email
tags:
  - QM
  - bo:companycode
  - component:QM-CA-2CL
  - consumption-view
  - lob:cross_application components
  - lob:quality management
  - QM-CA
  - QM-CA-2CL
  - metadata-only
---
# C_QUALITYCERTIFICATEEMAIL

**Quality Certificate Email**

| Property | Value |
|---|---|
| App Component | `QM-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_QUALITYCERTIFICATEEMAIL')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DeliveryDocument` | `CHAR(10)` | Delivery |
| `DeliveryDocumentItem` | `NUMC(6)` | Delivery Item |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `ShippingPoint` | `CHAR(4)` | Shipping Point / Receiving Point |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `SoldToParty` | `CHAR(10)` | Sold-to Party |
| `DeliveryDocumentType` | `CHAR(4)` | Delivery Type |
| `OverallGoodsMovementStatus` | `CHAR(1)` | Goods Movement Status (All Items) |
| `OverallPickingStatus` | `CHAR(1)` | Picking Status/Putaway Status (All Items) |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `Material` | `CHAR(40)` | Material Number |
| `MaterialByCustomer` | `CHAR(35)` | Customer Material |
| `MaterialTypePrimary` | `CHAR(4)` | Material Type |
| `SDDocumentCategory` | `CHAR(4)` | SD Document Category |
| `Plant` | `CHAR(4)` | Plant |
| `DeliveryDocumentItemCategory` | `CHAR(4)` | Delivery Item Category |
