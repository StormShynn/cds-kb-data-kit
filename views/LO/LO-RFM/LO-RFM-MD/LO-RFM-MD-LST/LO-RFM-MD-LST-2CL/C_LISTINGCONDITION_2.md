---
name: C_LISTINGCONDITION_2
description: Retail Listing Condition
app_component: LO-RFM-MD-LST-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTINGCONDITION_2')/$value
semantic_en: Retail Listing Condition
tags:
  - LO
  - component:LO-RFM-MD-LST-2CL
  - consumption-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-LST
  - LO-RFM-MD-LST-2CL
  - lob:logistics general
  - metadata-only
---
# C_LISTINGCONDITION_2

**Retail Listing Condition**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-LST-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTINGCONDITION_2')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SiteCustomer` | `CHAR(10)` | Customer Number of Site |
| `Product` | `CHAR(40)` | Product |
| `ListingConditionEndDate` | `DATS(8)` | Valid To |
| `SequenceNumber` | `NUMC(3)` | Sequence Number |
| `ListingConditionStartDate` | `DATS(8)` | Valid From |
| `LastChangeDate` | `DATS(8)` | Changed On |
| `ListingSource` | `CHAR(1)` | Listing Source (Transaction / Function Environment) |
| `ProductOfSuprordLstgCondition` | `CHAR(40)` | Structured Material |
