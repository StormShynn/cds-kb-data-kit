---
name: I_BUSVOLFLDCOMBNSETTYPEASSGMT
description: Business Volume Field Combination Set Type Assignment
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNSETTYPEASSGMT')/$value
semantic_en: Business Volume Field Combination Set Type Assignment
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - metadata-only
---
# I_BUSVOLFLDCOMBNSETTYPEASSGMT

**Business Volume Field Combination Set Type Assignment**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNSETTYPEASSGMT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BusVolFldCombnSet` | `CHAR(4)` | Set of Field Combinations |
| `BusVolFieldCombnType` | `CHAR(4)` | Field Combination for Business Volume Selection |
| `BusVolFldCombnGroup` | `CHAR(2)` | Field Combination Group for Business Volume Selection |
| `BusVolFldCombnAllwdSign` | `CHAR(1)` | Including / Excluding Control for BV Selection Criteria |
| `BusVolFldCombnValdtyIsAllwd` | `CHAR(1)` | Business Volume Base with Validity |
| `BusVolFldCombnMinNrOfEntries` | `DEC(3)` | Minimum Number of Entries for Field Combination |
| `BusVolFldCombnMaxNrOfEntries` | `DEC(3)` | Maximum Number of Entries for Field Combination |
