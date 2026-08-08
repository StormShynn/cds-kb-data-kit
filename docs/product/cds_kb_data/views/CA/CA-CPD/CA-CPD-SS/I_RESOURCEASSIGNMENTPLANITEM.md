---
name: I_RESOURCEASSIGNMENTPLANITEM
description: "This CDS view provides the prerequisites for answering the following business questions: Which resources are staffed to a resource request? In which months are resources staffed and for how many hours? What is the delivery organization of the resource?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEASSIGNMENTPLANITEM')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Which resources are staffed to a resource request? In which months are resources staffed and for how many hours? What is the delivery organization of the resource?"
tags:
  - CA
  - bo:plant
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - delivery
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_RESOURCEASSIGNMENTPLANITEM

**This CDS view provides the prerequisites for answering the following business questions: Which resources are staffed to a resource request? In which months are resources staffed and for how many hours? What is the delivery organization of the resource?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEASSIGNMENTPLANITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanLineItemUUID` |  | |  |  | `RAW(16)` | Planning Line GUID |
| `ResourceRequestUUID` |  | |  |  | `RAW(16)` | Demand Key |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `EngagementProjectResource` |  | |  |  | `CHAR(40)` | Resource ID |
| `EmploymentInternalID` |  | |  |  | `NUMC(8)` | Object ID |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `BillingControlCategory` |  | |  |  | `CHAR(8)` | Billing Control Category |
| `DeliveryOrganization` |  | |  |  | `CHAR(5)` | Service Organization |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `PlndEffortQty` |  | |  |  | `QUAN(15)` | Total Quantity |
| `EngmntProjPlanLineType` |  | |  |  | `CHAR(1)` | Line type |
| `EngmtProjFinPlanVersion` |  | |  |  | `CHAR(28)` | Plan Version ID |
