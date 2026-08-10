---
name: I_EHSORGUNITTEXT
description: "This CDS view provides access to organizational unit master data for Environment, Health, and Safety (EHS) management. It retrieves time-dependent organizational unit information that is valid for the current system date and language. This CDS view provides the data to answer the following business questions: Which organizational units are currently active in the system? What are the organizational unit codes for my organizational structure? How can I retrieve organizational unit codes and descriptions for reporting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSORGUNITTEXT')/$value
semantic_en: "This CDS view provides access to organizational unit master data for Environment, Health, and Safety (EHS) management. It retrieves time-dependent organizational unit information that is valid for the current system date and language. This CDS view provides the data to answer the following business questions: Which organizational units are currently active in the system? What are the organizational unit codes for my organizational structure? How can I retrieve organizational unit codes and descriptions for reporting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:businesspartner
  - component:EHS-SUS-FND
  - EHS-SUS
  - EHS-SUS-FND
  - interface-view
  - master-data
  - metadata-only
---
# I_EHSORGUNITTEXT

**This CDS view provides access to organizational unit master data for Environment, Health, and Safety (EHS) management. It retrieves time-dependent organizational unit information that is valid for the current system date and language. This CDS view provides the data to answer the following business questions: Which organizational units are currently active in the system? What are the organizational unit codes for my organizational structure? How can I retrieve organizational unit codes and descriptions for reporting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSORGUNITTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit |
| `OrganizationalUnitName` |  | |  |  | `CHAR(25)` | Short Text of Organizational Unit |
