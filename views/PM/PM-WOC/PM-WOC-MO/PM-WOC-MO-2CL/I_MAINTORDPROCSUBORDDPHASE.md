---
name: I_MAINTORDPROCSUBORDDPHASE
description: This CDS view serves as a value help provider for maintenance order processing sub-phases. The values are as follows: Process Sub-phase Sub-phase Description 0005 Submitted (Request) 0010 Accepted (Request) 0015 Rejected (Request) 0020 Action Required (Request) 0025 Resubmitted (Request) 0030 Order Assigned (Request) 0035 In Planning (Order) 0040 Submitted for Approval (Order) 0045 Approved (Order) 0050 Rejected (Order) 0055 In Preparation (Order) 0060 Ready to Schedule (Order) 0065 Ready for Execution (Order) 0070 Main Work Started (Order) 0075 Main Work Completed (Order) 0080 Work Done (Order) 0085 Technically Complete (Order) 0090 Completed (Request) 0092 Work Not Performed (Order) 0095 Closed (Order) 0100 Deletion Flag (Request) 0105 Deletion Flag (Order) 0110 In Planning 0115 In Preparation 0120 Ready to Schedule 0125 Ready for Execution 0130 Work in Execution 0135 Work Paused 0140 Work Finished 0145 Technically Complete 0150 Closed This CDS view provides the data to answer the following business questions: What are the available sub-phases within each maintenance order processing phase for tracking detailed work progress? Which processing sub-phases are applicable for specific maintenance order entity types in the system? What is the hierarchical relationship between maintenance processing phases and their corresponding sub-phases? Which sub-phases are available for selection when updating the status of maintenance orders beyond the initial processing stages? What are the valid sub-phase codes and their descriptions that can be assigned to maintenance orders during different stages of work execution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDPROCSUBORDDPHASE')/$value
semantic_en: This CDS view serves as a value help provider for maintenance order processing sub-phases. The values are as follows: Process Sub-phase Sub-phase Description 0005 Submitted (Request) 0010 Accepted (Request) 0015 Rejected (Request) 0020 Action Required (Request) 0025 Resubmitted (Request) 0030 Order Assigned (Request) 0035 In Planning (Order) 0040 Submitted for Approval (Order) 0045 Approved (Order) 0050 Rejected (Order) 0055 In Preparation (Order) 0060 Ready to Schedule (Order) 0065 Ready for Execution (Order) 0070 Main Work Started (Order) 0075 Main Work Completed (Order) 0080 Work Done (Order) 0085 Technically Complete (Order) 0090 Completed (Request) 0092 Work Not Performed (Order) 0095 Closed (Order) 0100 Deletion Flag (Request) 0105 Deletion Flag (Order) 0110 In Planning 0115 In Preparation 0120 Ready to Schedule 0125 Ready for Execution 0130 Work in Execution 0135 Work Paused 0140 Work Finished 0145 Technically Complete 0150 Closed This CDS view provides the data to answer the following business questions: What are the available sub-phases within each maintenance order processing phase for tracking detailed work progress? Which processing sub-phases are applicable for specific maintenance order entity types in the system? What is the hierarchical relationship between maintenance processing phases and their corresponding sub-phases? Which sub-phases are available for selection when updating the status of maintenance orders beyond the initial processing stages? What are the valid sub-phase codes and their descriptions that can be assigned to maintenance orders during different stages of work execution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - order
  - plan
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
  - metadata-only
---
# I_MAINTORDPROCSUBORDDPHASE

**This CDS view serves as a value help provider for maintenance order processing sub-phases. The values are as follows: Process Sub-phase Sub-phase Description 0005 Submitted (Request) 0010 Accepted (Request) 0015 Rejected (Request) 0020 Action Required (Request) 0025 Resubmitted (Request) 0030 Order Assigned (Request) 0035 In Planning (Order) 0040 Submitted for Approval (Order) 0045 Approved (Order) 0050 Rejected (Order) 0055 In Preparation (Order) 0060 Ready to Schedule (Order) 0065 Ready for Execution (Order) 0070 Main Work Started (Order) 0075 Main Work Completed (Order) 0080 Work Done (Order) 0085 Technically Complete (Order) 0090 Completed (Request) 0092 Work Not Performed (Order) 0095 Closed (Order) 0100 Deletion Flag (Request) 0105 Deletion Flag (Order) 0110 In Planning 0115 In Preparation 0120 Ready to Schedule 0125 Ready for Execution 0130 Work in Execution 0135 Work Paused 0140 Work Finished 0145 Technically Complete 0150 Closed This CDS view provides the data to answer the following business questions: What are the available sub-phases within each maintenance order processing phase for tracking detailed work progress? Which processing sub-phases are applicable for specific maintenance order entity types in the system? What is the hierarchical relationship between maintenance processing phases and their corresponding sub-phases? Which sub-phases are available for selection when updating the status of maintenance orders beyond the initial processing stages? What are the valid sub-phase codes and their descriptions that can be assigned to maintenance orders during different stages of work execution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDPROCSUBORDDPHASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceProcessingPhase` |  | |  |  | `CHAR(1)` | Maintenance Processing Phase |
| `MaintOrdProcessSubPhaseCode` |  | |  |  | `CHAR(4)` | Process Subphase |
| `EAMOverallStatusEntity` |  | |  |  | `CHAR(3)` | Entity Type |
