---
name: I_WORKFORCEPERSONDEX
description: You can use this CDS view to retrieve the data related to a workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business question: How can I retrieve the data related to the workforce person based on the external ID of the person? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONDEX')/$value
semantic_en: You can use this CDS view to retrieve the data related to a workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business question: How can I retrieve the data related to the workforce person based on the external ID of the person? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# I_WORKFORCEPERSONDEX

**You can use this CDS view to retrieve the data related to a workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business question: How can I retrieve the data related to the workforce person based on the external ID of the person? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `PersonExternalID` |  | |  |  | `CHAR(60)` | Identification Number |
| `BPIdentificationType` |  | |  |  | `CHAR(6)` | Identification Type |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `MiddleName` |  | |  |  | `CHAR(40)` | Middle Name or Second Forename of a Person |
| `PersonFullName` |  | |  |  | `CHAR(80)` | Full Name |
| `BirthName` |  | |  |  | `CHAR(40)` | Name at birth of business partner |
| `Initials` |  | |  |  | `CHAR(10)` | "Middle Initial" or personal initials |
| `NativePreferredLanguage` |  | |  |  | `LANG(1)` | Business Partner: Correspondence Language |
| `LastNamePrefix` |  | |  |  | `CHAR(4)` | Name Prefix (Key) |
| `BusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner GUID |
| `UserID` |  | |  |  | `CHAR(12)` | User ID |
