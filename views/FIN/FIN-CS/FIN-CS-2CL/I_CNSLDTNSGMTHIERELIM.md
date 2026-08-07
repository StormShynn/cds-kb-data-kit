---
name: I_CNSLDTNSGMTHIERELIM
description: Hierarchy Elimination for Segment
app_component: FIN-CS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSGMTHIERELIM')/$value
semantic_en: Hierarchy Elimination for Segment
tags:
  - FIN
  - component:FIN-CS-2CL
  - FIN-CS
  - FIN-CS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CNSLDTNSGMTHIERELIM

**Hierarchy Elimination for Segment**

| Property | Value |
|---|---|
| App Component | `FIN-CS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSGMTHIERELIM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationSegmentHierarchy` |  | |  |  | `CHAR(40)` | Segment Hierarchy |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `ConsolidationSegmentForElim` |  | |  |  | `CHAR(25)` | Consolidation Elimination Member |
