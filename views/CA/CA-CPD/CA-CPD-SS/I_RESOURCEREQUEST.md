---
name: I_RESOURCEREQUEST
description: This CDS view provides the prerequisites for answering the following business questions: How many resource requests exist for a project or a work package? For what duration are resources required? What is the status of the resource request regarding staffing?
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUEST')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: How many resource requests exist for a project or a work package? For what duration are resources required? What is the status of the resource request regarding staffing?
tags:
  - CA
  - bo:companycode
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - project
  - metadata-only
---
# I_RESOURCEREQUEST

**This CDS view provides the prerequisites for answering the following business questions: How many resource requests exist for a project or a work package? For what duration are resources required? What is the status of the resource request regarding staffing?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUEST')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ResourceRequestUUID` | `RAW(16)` | Demand Key |
| `EngagementProject` | `CHAR(40)` | Commercial Project ID |
| `WorkPackage` | `CHAR(50)` | Plan Item |
| `ResourceRequestStatus` | `CHAR(1)` | Assignment Status for a Resource Demand |
| `StartDate` | `DATS(8)` | Field of type DATS |
| `EndDate` | `DATS(8)` | Field of type DATS |
| `CreatedByUser` | `CHAR(12)` | Created By |
| `CreationDateTime` | `DEC(15)` | Created On |
| `LastChangedByUser` | `CHAR(12)` | Changed By |
| `LastChangeDateTime` | `DEC(15)` | Commercial Project Last Changed On |
