---
name: I_WORKASSGMTWORKORDERDEX
description: "Assignment Work Order Details"
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTWORKORDERDEX')/$value
semantic_en: "Assignment Work Order Details"
tags:
  - CA
  - bo:maintenanceorder
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - order
  - metadata-only
---
# I_WORKASSGMTWORKORDERDEX

**Assignment Work Order Details**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTWORKORDERDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RelationshipNumber` |  | |  |  | `CHAR(12)` | BP Relationship Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartner2` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `EndDate` |  | |  |  | `DATS(8)` | Validity Date (Valid To) |
| `StartDate` |  | |  |  | `DATS(8)` | Validity Date (Valid From) |
| `WorkAssignment` |  | |  |  | `NUMC(8)` | Workforce Assignment ID |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `WorkAssignmentExternalID` |  | |  |  | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` |  | |  |  | `CHAR(2)` | Workforce Country ISO Code |
| `IsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator |
