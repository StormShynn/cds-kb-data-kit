---
name: I_SPONSOREDPROGRAM
description: "Sponsored Program"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDPROGRAM')/$value
semantic_en: "Sponsored Program"
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
# I_SPONSOREDPROGRAM

**Sponsored Program**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDPROGRAM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `GteeMBdgtTransfObjIsVldtd` |  | |  |  | `CHAR(1)` | Indicator:  Validate Budget Transfer Object |
| `GteeMBdgtAndPostObjIsVldtd` |  | |  |  | `CHAR(1)` | Indicator:  Validate Allowed Budget and Posting objects |
| `GranteeMgmtLegislativeDistrict` |  | |  |  | `CHAR(6)` | Legislative District Code |
| `SponsoredProgramAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Record Created by |
| `CreationDate` |  | |  |  | `DATS(8)` | Created on |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Modified by |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date last modified |
