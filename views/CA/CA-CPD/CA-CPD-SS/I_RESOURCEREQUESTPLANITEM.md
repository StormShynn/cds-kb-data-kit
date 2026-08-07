---
name: I_RESOURCEREQUESTPLANITEM
description: "This CDS view provides the prerequisites for answering the following business questions: What kind of resource requests are planned in a customer or internal project? What are the different roles requested to execute a customer or internal project? How many hours have been requested for a role, and in which months? What is the planned cost of a request? What is the expected revenue for a resource request?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUESTPLANITEM')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What kind of resource requests are planned in a customer or internal project? What are the different roles requested to execute a customer or internal project? How many hours have been requested for a role, and in which months? What is the planned cost of a request? What is the expected revenue for a resource request?"
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - lob:cross_application components
  - plan
  - project
  - metadata-only
---
# I_RESOURCEREQUESTPLANITEM

**This CDS view provides the prerequisites for answering the following business questions: What kind of resource requests are planned in a customer or internal project? What are the different roles requested to execute a customer or internal project? How many hours have been requested for a role, and in which months? What is the planned cost of a request? What is the expected revenue for a resource request?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUESTPLANITEM')/$value) |

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
| `Currency` |  | |  |  | `CUKY(5)` | Plan Currency |
| `PlndCostAmt` |  | |  |  | `CURR(17)` | Amount |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `PlndEffortQty` |  | |  |  | `QUAN(15)` | Total Quantity |
| `PlndRevnAmt` |  | |  |  | `CURR(17)` | Amount |
