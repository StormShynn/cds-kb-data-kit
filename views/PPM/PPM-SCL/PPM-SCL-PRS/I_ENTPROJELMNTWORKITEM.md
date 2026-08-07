---
name: I_ENTPROJELMNTWORKITEM
description: "This CDS view retrieves the work item details of the project elements of a professional services project. This CDS view provides the data to answer the following business questions: What are the work items associated with a project element in a professional services project? Which work items are in active status or in inactive status? Which work items are configured or user-defined? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PPM-SCL-PRS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJELMNTWORKITEM')/$value
semantic_en: "This CDS view retrieves the work item details of the project elements of a professional services project. This CDS view provides the data to answer the following business questions: What are the work items associated with a project element in a professional services project? Which work items are in active status or in inactive status? Which work items are configured or user-defined? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - PPM
  - bo:companycode
  - component:PPM-SCL-PRS
  - interface-view
  - PPM-SCL
  - PPM-SCL-PRS
  - project
  - metadata-only
---
# I_ENTPROJELMNTWORKITEM

**This CDS view retrieves the work item details of the project elements of a professional services project. This CDS view provides the data to answer the following business questions: What are the work items associated with a project element in a professional services project? Which work items are in active status or in inactive status? Which work items are configured or user-defined? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-PRS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJELMNTWORKITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EntProjElmntWorkItemUUID` |  | |  |  | `RAW(16)` | Entity Guid |
| `ProjectElementUUID` |  | |  |  | `RAW(16)` | Entity Guid |
| `ProjectUUID` |  | |  |  | `RAW(16)` | Entity Guid |
| `EntProjElmntWorkItem` |  | |  |  | `CHAR(10)` | Enterprise Project Element Work Item |
| `EntProjElmntWorkItemName` |  | |  |  | `CHAR(40)` | Enterprise Project Element Work Item Name |
| `EntProjElmntWorkItemIsInactive` |  | |  |  | `CHAR(1)` | Enterprise Project Element Work Item is Inactive |
| `EntProjElmntWorkItemIsCnfgrd` |  | |  |  | `CHAR(1)` | Enterprise Project Element Work Item is Configured |
| `EntProjElmntWrkItmLastUpdtSrce` |  | |  |  | `CHAR(1)` | Enterprise Project Element Work Item - Source of Update |
| `EntProjElmntWrkItmCrtedByUsr` |  | |  |  | `CHAR(12)` | Name of Person Who Created Object |
| `EntProjElmntWrkItmCrtnDteTme` |  | |  |  | `DEC(15)` | Timestamp of Object Creation |
| `EntProjElmntWrkItmLstChgByUsr` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `EntProjElmntWrkItmLstChgDteTme` |  | |  |  | `DEC(15)` | Timestamp of Last Object Change |
