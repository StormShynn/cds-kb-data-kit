---
name: I_ENTERPRISEPROJECTFORUSER
description: "This CDS view retrieves the customer and internal projects where a user is assigned to a project responsibility. This view is relevant only for professional services projects. This CDS view provides the data to answer the following business questions: What are the customer or internal projects where I'm assigned to a project responsibility? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTERPRISEPROJECTFORUSER')/$value
semantic_en: "This CDS view retrieves the customer and internal projects where a user is assigned to a project responsibility. This view is relevant only for professional services projects. This CDS view provides the data to answer the following business questions: What are the customer or internal projects where I'm assigned to a project responsibility? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - PPM
  - bo:businesspartner
  - component:PPM-SCL-STR
  - customer
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - project
  - metadata-only
---
# I_ENTERPRISEPROJECTFORUSER

**This CDS view retrieves the customer and internal projects where a user is assigned to a project responsibility. This view is relevant only for professional services projects. This CDS view provides the data to answer the following business questions: What are the customer or internal projects where I'm assigned to a project responsibility? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTERPRISEPROJECTFORUSER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectUUID` |  | |  |  | `RAW(16)` | Entity Guid |
| `ProjectCategory` |  | |  |  | `CHAR(1)` | Project Category |
| `EnterpriseProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `EntProjectIsConfidential` |  | |  |  | `CHAR(1)` | Enterprise Project Is Confidential |
| `UserID` |  | |  |  | `CHAR(12)` | User ID |
| `IsMyProject` |  | |  |  | `CHAR(1)` | User Involvement in Project |
