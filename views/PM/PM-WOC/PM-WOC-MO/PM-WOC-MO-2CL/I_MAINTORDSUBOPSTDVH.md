---
name: I_MAINTORDSUBOPSTDVH
description: This CDS view provides value help for MaintenanceOrderSubOperation. This view should be used for value help purposes only. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDSUBOPSTDVH')/$value
semantic_en: This CDS view provides value help for MaintenanceOrderSubOperation. This view should be used for value help purposes only. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
  - metadata-only
---
# I_MAINTORDSUBOPSTDVH

**This CDS view provides value help for MaintenanceOrderSubOperation. This view should be used for value help purposes only. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDSUBOPSTDVH')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MaintenanceOrder` | `CHAR(12)` | Order Number |
| `MaintenanceOrderOperation` | `CHAR(4)` | Activity Number |
| `MaintenanceOrderSubOperation` | `CHAR(4)` | Activity Number |
| `MaintenanceOrderType` | `CHAR(4)` | Order Type |
| `MaintenancePlanningPlant` | `CHAR(4)` | Maintenance Planning Plant |
| `MaintenancePlannerGroup` | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `MaintObjectLocAcctAssgmtNmbr` | `CHAR(12)` | Location and account assignment for technical object |
| `FunctionalLocation` | `CHAR(30)` | Functional Location |
| `Equipment` | `CHAR(18)` | Equipment Number |
| `OperationPersonResponsible` | `NUMC(8)` | Personnel number |
