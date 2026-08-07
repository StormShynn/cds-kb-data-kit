---
name: I_DELIVERYNETWORK
description: Master Data for Delivery Network
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DELIVERYNETWORK')/$value
semantic_en: Master Data for Delivery Network
tags:
  - IS
  - bo:businesspartner
  - component:IS-OIL-PRA
  - delivery
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - master-data
  - metadata-only
---
# I_DELIVERYNETWORK

**Master Data for Delivery Network**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DELIVERYNETWORK')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryNetwork` |  | |  |  | `CHAR(20)` | Delivery network number |
| `DeliveryNetworkName` |  | |  |  | `CHAR(35)` | Delivery network description |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
| `SecondaryGeogrlLocation` |  | |  |  | `CHAR(3)` | Secondary geographic location |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `DeliveryNetworkType` |  | |  |  | `CHAR(1)` | Delivery network type code |
| `DeliveryNetworkHier` |  | |  |  | `CHAR(15)` | Delivery Network Hierarchy Group |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
