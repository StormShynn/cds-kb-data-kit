---
name: I_INCIDENTGROUPSEVERITYTEXT
description: "This CDS view provides a structured representation of incident categorization data within Incident Management. It serves as a basic interface view that exposes incident group classifications, including Incident, Near Miss, and Safety Observation groups, along with severity levels and administrative tracking information. The view enables data extraction for analytical purposes and supports transactional operations for managing how incidents are categorized and grouped for reporting and analysis. This CDS view provides the data to answer the following business questions: How are incidents classified across different categories (incident groups, near miss groups, and safety observation groups)? What is the severity distribution of incident groups, and which groups represent the highest risk levels? Which incidents are associated with specific group classifications for compliance and regulatory reporting? What is the volume and categorization of near misses and safety observations compared to actual incidents across the organization? Who created or last modified specific incident group classifications, and when were these changes made? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPSEVERITYTEXT')/$value
semantic_en: "This CDS view provides a structured representation of incident categorization data within Incident Management. It serves as a basic interface view that exposes incident group classifications, including Incident, Near Miss, and Safety Observation groups, along with severity levels and administrative tracking information. The view enables data extraction for analytical purposes and supports transactional operations for managing how incidents are categorized and grouped for reporting and analysis. This CDS view provides the data to answer the following business questions: How are incidents classified across different categories (incident groups, near miss groups, and safety observation groups)? What is the severity distribution of incident groups, and which groups represent the highest risk levels? Which incidents are associated with specific group classifications for compliance and regulatory reporting? What is the volume and categorization of near misses and safety observations compared to actual incidents across the organization? Who created or last modified specific incident group classifications, and when were these changes made? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - transaction
  - metadata-only
---
# I_INCIDENTGROUPSEVERITYTEXT

**This CDS view provides a structured representation of incident categorization data within Incident Management. It serves as a basic interface view that exposes incident group classifications, including Incident, Near Miss, and Safety Observation groups, along with severity levels and administrative tracking information. The view enables data extraction for analytical purposes and supports transactional operations for managing how incidents are categorized and grouped for reporting and analysis. This CDS view provides the data to answer the following business questions: How are incidents classified across different categories (incident groups, near miss groups, and safety observation groups)? What is the severity distribution of incident groups, and which groups represent the highest risk levels? Which incidents are associated with specific group classifications for compliance and regulatory reporting? What is the volume and categorization of near misses and safety observations compared to actual incidents across the organization? Who created or last modified specific incident group classifications, and when were these changes made? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPSEVERITYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSIncidentGroupSeverity` |  | |  |  | `CHAR(21)` | Severity Level Code |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `EHSIncidentGroupSeverityText` |  | |  |  | `CHAR(40)` | Description (Extra Short) |
