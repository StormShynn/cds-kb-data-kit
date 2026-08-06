---
name: I_SPONSOREDCLASS
description: Sponsored Class
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASS')/$value
semantic_en: Sponsored Class
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
  - metadata-only
---
# I_SPONSOREDCLASS

**Sponsored Class**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASS')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `SponsoredClassType` | `CHAR(1)` | Sponsored Class Type |
| `SponsoredClassIsBillable` | `CHAR(1)` | Billable |
| `GteeMBdgtTransfObjIsVldtd` | `CHAR(1)` | Indicator:  Validate Budget Transfer Object |
| `GteeMBdgtAndPostObjIsVldtd` | `CHAR(1)` | Indicator:  Validate Allowed Budget and Posting objects |
| `SponsoredClassAuthznGrp` | `CHAR(10)` | Grants Management: Authorization Groups |
| `CreatedByUser` | `CHAR(12)` | Record Created by |
| `CreationDate` | `DATS(8)` | Created on |
| `LastChangedByUser` | `CHAR(12)` | Last Modified by |
| `LastChangeDate` | `DATS(8)` | Date last modified |
