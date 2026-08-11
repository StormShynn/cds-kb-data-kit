---
name: I_WORKFORCEPERSONSKILLTAGDEX
description: "This CDS view is designed to provide a comprehensive overview of skill tags associated with workforce personnel. It offers insights into the skills and competencies of employees within an organization. This CDS view provides the data to answer the following business questions: What are the skill tags associated with each workforce person in the organization? How can we identify the central person and their corresponding skill tags for workforce management purposes? Which business partners are linked to specific workforce personnel based on their skill tags? How can we track changes in skill tags over time for workforce personnel using change data capture? What is the relationship between workforce personnel and their external identifiers in the context of skill tags? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONSKILLTAGDEX')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of skill tags associated with workforce personnel. It offers insights into the skills and competencies of employees within an organization. This CDS view provides the data to answer the following business questions: What are the skill tags associated with each workforce person in the organization? How can we identify the central person and their corresponding skill tags for workforce management purposes? Which business partners are linked to specific workforce personnel based on their skill tags? How can we track changes in skill tags over time for workforce personnel using change data capture? What is the relationship between workforce personnel and their external identifiers in the context of skill tags? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CA
  - bo:companycode
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_WORKFORCEPERSONSKILLTAGDEX

**This CDS view is designed to provide a comprehensive overview of skill tags associated with workforce personnel. It offers insights into the skills and competencies of employees within an organization. This CDS view provides the data to answer the following business questions: What are the skill tags associated with each workforce person in the organization? How can we identify the central person and their corresponding skill tags for workforce management purposes? Which business partners are linked to specific workforce personnel based on their skill tags? How can we track changes in skill tags over time for workforce personnel using change data capture? What is the relationship between workforce personnel and their external identifiers in the context of skill tags? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONSKILLTAGDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPerson` |  | |  |  | `NUMC(8)` | Central Person Workforce Assignment ID |
| `WorkforcePersonSkillTagID` |  | |  |  | `RAW(16)` | GUID in 'RAW' format |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
