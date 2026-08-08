---
name: I_ENTWBSELEMENTHIERNODE
description: "This CDS view retrieves the hierarchy nodes of the WBS element hierarchy as well as information about their position within the hierarchy. It provides information about the hierarchical arrangement of WBS elements in enterprise projects and professional services projects. WBS elements of professional services projects are referred to as work packages in professional services apps. This CDS view provides the data to answer the following business questions: Which WBS elements are included as nodes in the WBS element hierarchy? What is the parent node of each WBS element in the hierarchy? What is the sequence of the WBS elements that have the same parent node? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTWBSELEMENTHIERNODE')/$value
semantic_en: "This CDS view retrieves the hierarchy nodes of the WBS element hierarchy as well as information about their position within the hierarchy. It provides information about the hierarchical arrangement of WBS elements in enterprise projects and professional services projects. WBS elements of professional services projects are referred to as work packages in professional services apps. This CDS view provides the data to answer the following business questions: Which WBS elements are included as nodes in the WBS element hierarchy? What is the parent node of each WBS element in the hierarchy? What is the sequence of the WBS elements that have the same parent node? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - PPM
  - bo:companycode
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - project
  - metadata-only
---
# I_ENTWBSELEMENTHIERNODE

**This CDS view retrieves the hierarchy nodes of the WBS element hierarchy as well as information about their position within the hierarchy. It provides information about the hierarchical arrangement of WBS elements in enterprise projects and professional services projects. WBS elements of professional services projects are referred to as work packages in professional services apps. This CDS view provides the data to answer the following business questions: Which WBS elements are included as nodes in the WBS element hierarchy? What is the parent node of each WBS element in the hierarchy? What is the sequence of the WBS elements that have the same parent node? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTWBSELEMENTHIERNODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WBSElementHierarchy` |  | |  |  | `CHAR(42)` | WBS Element Hierarchy |
| `HierarchyNodeUUID` |  | |  |  | `RAW(16)` | Hierarchy Node GUID |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | Internal WBS Element ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ParentObjectUUID` |  | |  |  | `RAW(16)` | Parent Entity Guid |
| `ProjectElementOrdinalNumber` |  | |  |  | `INT4(10)` | Sortnumber |
