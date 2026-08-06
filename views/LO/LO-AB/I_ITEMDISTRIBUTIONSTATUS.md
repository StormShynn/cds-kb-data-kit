---
name: I_ITEMDISTRIBUTIONSTATUS
description: This CDS view is used to select the Item Distribution Status. The following values have been maintained: ‘’ Distribution Is Not Active 1 Relevant for Distribution 2 Not Relevant for Distribution 3 Distribution Incomplete 4 Distribution Carried Out 9 Item is Distribution Item This CDS view provides the prerequisites for answering the following business questions: What is the item distribution status?
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMDISTRIBUTIONSTATUS')/$value
semantic_en: This CDS view is used to select the Item Distribution Status. The following values have been maintained: ‘’ Distribution Is Not Active 1 Relevant for Distribution 2 Not Relevant for Distribution 3 Distribution Incomplete 4 Distribution Carried Out 9 Item is Distribution Item This CDS view provides the prerequisites for answering the following business questions: What is the item distribution status?
tags:
  - LO
  - bo:plant
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_ITEMDISTRIBUTIONSTATUS

**This CDS view is used to select the Item Distribution Status. The following values have been maintained: ‘’ Distribution Is Not Active 1 Relevant for Distribution 2 Not Relevant for Distribution 3 Distribution Incomplete 4 Distribution Carried Out 9 Item is Distribution Item This CDS view provides the prerequisites for answering the following business questions: What is the item distribution status?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMDISTRIBUTIONSTATUS')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ItemDistributionStatus` | `CHAR(1)` | Distribution Status of Settlement Item |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
