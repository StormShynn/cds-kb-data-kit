---
name: I_SUPPLIERTAXGROUPING
description: Supplier Tax Grouping
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERTAXGROUPING')/$value
semantic_en: Supplier Tax Grouping
tags:
  - LO
  - component:LO-MD-BP-2CL
  - interface-view
  - LO-MD
  - LO-MD-BP
  - LO-MD-BP-2CL
  - lob:logistics general
  - supplier
  - metadata-only
---
# I_SUPPLIERTAXGROUPING

**Supplier Tax Grouping**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERTAXGROUPING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `TaxGroupingCode` |  | |  |  | `CHAR(3)` | Category Indicator for Tax Codes |
| `CollectionAuthStartDate` |  | |  |  | `DATS(8)` | Starting Date of Collection Authorization |
| `CollectionAuthEndDate` |  | |  |  | `DATS(8)` | End Date for Collection Authorization |
