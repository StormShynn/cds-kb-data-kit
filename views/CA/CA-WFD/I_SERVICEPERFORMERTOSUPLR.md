---
name: I_SERVICEPERFORMERTOSUPLR
description: This view provides the prerequisites for answering the following business questions: Which is the supplier organization of service performer?
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICEPERFORMERTOSUPLR')/$value
semantic_en: This view provides the prerequisites for answering the following business questions: Which is the supplier organization of service performer?
tags:
  - CA
  - bo:plant
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
  - supplier
  - metadata-only
---
# I_SERVICEPERFORMERTOSUPLR

**This view provides the prerequisites for answering the following business questions: Which is the supplier organization of service performer?**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICEPERFORMERTOSUPLR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerSupplier` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `Person` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `EndDate` |  | |  |  | `DATS(8)` | Validity Date (Valid To) |
| `StartDate` |  | |  |  | `DATS(8)` | Validity Date (Valid From) |
| `RelationshipCategory` |  | |  |  | `CHAR(6)` | Business Partner Relationship Category |
| `DataControllerSet` |  | |  |  | `CHAR(1)` | BP: Data Controller Set Flag |
