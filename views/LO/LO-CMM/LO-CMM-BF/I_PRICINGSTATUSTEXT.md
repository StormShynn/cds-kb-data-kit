---
name: I_PRICINGSTATUSTEXT
description: Pricing Status - Text
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICINGSTATUSTEXT')/$value
semantic_en: Pricing Status - Text
tags:
  - LO
  - bo:pricingcondition
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
  - pricing
  - metadata-only
---
# I_PRICINGSTATUSTEXT

**Pricing Status - Text**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICINGSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingStatus` |  | |  |  | `CHAR(2)` | Future/Basis Price Fixation Status |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `PricingStatusName` |  | |  |  | `CHAR(50)` | Future/Basis Price Fixation Status - Long Text |
| `PricingStatusShortName` |  | |  |  | `CHAR(5)` | Future/Basis Price Fixation Status - Short Text |
