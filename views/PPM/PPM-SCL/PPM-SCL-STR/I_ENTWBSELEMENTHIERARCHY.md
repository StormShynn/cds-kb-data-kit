---
name: I_ENTWBSELEMENTHIERARCHY
description: This CDS view retrieves the header information of the WBS element hierarchy for enterprise projects and professional services projects. This CDS view provides the data to answer the following business questions: What is the name and validity of the WBS element hierarchy for enterprise projects and professional services projects? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTWBSELEMENTHIERARCHY')/$value
semantic_en: This CDS view retrieves the header information of the WBS element hierarchy for enterprise projects and professional services projects. This CDS view provides the data to answer the following business questions: What is the name and validity of the WBS element hierarchy for enterprise projects and professional services projects? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# I_ENTWBSELEMENTHIERARCHY

**This CDS view retrieves the header information of the WBS element hierarchy for enterprise projects and professional services projects. This CDS view provides the data to answer the following business questions: What is the name and validity of the WBS element hierarchy for enterprise projects and professional services projects? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTWBSELEMENTHIERARCHY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `WBSElementHierarchy` | `CHAR(42)` |  WBS Element Hierarchy |
| `ValidityEndDate` | `DATS(8)` | Valid To Date |
| `ValidityStartDate` | `DATS(8)` | Valid-From Date |
| `LastChangedByUser` | `CHAR(12)` | Last Changed By |
