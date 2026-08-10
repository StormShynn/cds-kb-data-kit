---
name: I_FUNCTIONALLOCATIONSTATUS
description: "This CDS view provides a structured representation of the status of functional locations within an organization. It aggregates data related to the lifecycle and operational status of these locations, enabling users to understand their current state and any changes that have occurred. This CDS view provides the data to answer the following business questions: What is the current status of a specific functional location? Is a functional location marked for deletion or has it been deleted? Is a functional location active or has it been deactivated? Has a functional location been newly created? What is the internal ID associated with a specific maintenance object for a functional location? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCTIONALLOCATIONSTATUS')/$value
semantic_en: "This CDS view provides a structured representation of the status of functional locations within an organization. It aggregates data related to the lifecycle and operational status of these locations, enabling users to understand their current state and any changes that have occurred. This CDS view provides the data to answer the following business questions: What is the current status of a specific functional location? Is a functional location marked for deletion or has it been deleted? Is a functional location active or has it been deactivated? Has a functional location been newly created? What is the internal ID associated with a specific maintenance object for a functional location? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - PM
  - bo:companycode
  - component:PM-EQM-EQ-2CL
  - interface-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-EQ
  - PM-EQM-EQ-2CL
  - metadata-only
---
# I_FUNCTIONALLOCATIONSTATUS

**This CDS view provides a structured representation of the status of functional locations within an organization. It aggregates data related to the lifecycle and operational status of these locations, enabling users to understand their current state and any changes that have occurred. This CDS view provides the data to answer the following business questions: What is the current status of a specific functional location? Is a functional location marked for deletion or has it been deleted? Is a functional location active or has it been deactivated? Has a functional location been newly created? What is the internal ID associated with a specific maintenance object for a functional location? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCTIONALLOCATIONSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `MaintObjectInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `FuncnlLocIsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Checkbox |
| `FuncnlLocIsDeleted` |  | |  |  | `CHAR(1)` | Checkbox |
| `FunctionalLocationIsActive` |  | |  |  | `CHAR(1)` | Checkbox |
| `FunctionalLocationIsCreated` |  | |  |  | `CHAR(1)` | Checkbox |
| `FuncnlLocIsDeactivated` |  | |  |  | `CHAR(1)` | Checkbox |
