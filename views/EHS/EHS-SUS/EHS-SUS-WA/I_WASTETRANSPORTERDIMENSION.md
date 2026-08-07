---
name: I_WASTETRANSPORTERDIMENSION
description: "Waste Transporter Dimension"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSPORTERDIMENSION')/$value
semantic_en: "Waste Transporter Dimension"
tags:
  - EHS
  - bo:purchaseorder
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
  - metadata-only
---
# I_WASTETRANSPORTERDIMENSION

**Waste Transporter Dimension**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSPORTERDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `EnvrmtWastePartnerType` |  | |  |  | `CHAR(2)` | Waste Partner Type |
| `EnvrmtWastePartnerName` |  | |  |  | `CHAR(81)` |  |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
