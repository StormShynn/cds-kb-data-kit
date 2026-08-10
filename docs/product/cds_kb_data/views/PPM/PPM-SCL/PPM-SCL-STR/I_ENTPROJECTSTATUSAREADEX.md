---
name: I_ENTPROJECTSTATUSAREADEX
description: "This CDS view enables the extraction of status area information for enterprise projects to SAP Datasphere, including comments for status areas. It enables monitoring and reporting on various aspects of project health by organizing status information into predefined areas with corresponding status values and trend directions. This CDS view provides the data to answer the following business questions: What is the current status of different areas for enterprise projects? Which comments or notes have been added to specific status areas? What is the trend direction (improving, stable, declining) for each status area? Who created or last modified the status area data, and when did these changes occur? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJECTSTATUSAREADEX')/$value
semantic_en: "This CDS view enables the extraction of status area information for enterprise projects to SAP Datasphere, including comments for status areas. It enables monitoring and reporting on various aspects of project health by organizing status information into predefined areas with corresponding status values and trend directions. This CDS view provides the data to answer the following business questions: What is the current status of different areas for enterprise projects? Which comments or notes have been added to specific status areas? What is the trend direction (improving, stable, declining) for each status area? Who created or last modified the status area data, and when did these changes occur? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_ENTPROJECTSTATUSAREADEX

**This CDS view enables the extraction of status area information for enterprise projects to SAP Datasphere, including comments for status areas. It enables monitoring and reporting on various aspects of project health by organizing status information into predefined areas with corresponding status values and trend directions. This CDS view provides the data to answer the following business questions: What is the current status of different areas for enterprise projects? Which comments or notes have been added to specific status areas? What is the trend direction (improving, stable, declining) for each status area? Who created or last modified the status area data, and when did these changes occur? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJECTSTATUSAREADEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatusAreaUUID` |  | |  |  | `RAW(16)` | Entity Guid |
| `ProjectUUID` |  | |  |  | `RAW(16)` | Entity Guid |
| `StatusArea` |  | |  |  | `CHAR(4)` | Status Area Category |
| `StatusAreaStatus` |  | |  |  | `CHAR(2)` | Status Area Status |
| `StatusTrend` |  | |  |  | `CHAR(2)` | Status Area Trend |
| `StatusAreaNote` |  | |  |  | `STRI(5000)` | Comments |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Created Object |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Timestamp of Object Creation |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Timestamp of Last Object Change |
