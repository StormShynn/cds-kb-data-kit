---
name: I_WORKFORCEPERSONDEX_1
description: "This CDS view is designed to provide a comprehensive overview of workforce personnel by integrating business partner data with identification details. It serves as a composite view that extracts and consolidates essential information about individuals within an organization, focusing on their identification and personal attributes. This CDS view provides the data to answer the following business questions: Who are the workforce personnel within the organization, and what are their identification numbers? What are the full names and birth names of the workforce personnel? What are the preferred languages for correspondence for each workforce person? Is the business purpose for each workforce person completed? How can workforce personnel be associated with their respective work assignments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONDEX_1')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of workforce personnel by integrating business partner data with identification details. It serves as a composite view that extracts and consolidates essential information about individuals within an organization, focusing on their identification and personal attributes. This CDS view provides the data to answer the following business questions: Who are the workforce personnel within the organization, and what are their identification numbers? What are the full names and birth names of the workforce personnel? What are the preferred languages for correspondence for each workforce person? Is the business purpose for each workforce person completed? How can workforce personnel be associated with their respective work assignments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_WORKFORCEPERSONDEX_1

**This CDS view is designed to provide a comprehensive overview of workforce personnel by integrating business partner data with identification details. It serves as a composite view that extracts and consolidates essential information about individuals within an organization, focusing on their identification and personal attributes. This CDS view provides the data to answer the following business questions: Who are the workforce personnel within the organization, and what are their identification numbers? What are the full names and birth names of the workforce personnel? What are the preferred languages for correspondence for each workforce person? Is the business purpose for each workforce person completed? How can workforce personnel be associated with their respective work assignments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONDEX_1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `MiddleName` |  | |  |  | `CHAR(40)` | Middle Name or Second Forename of a Person |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `FullName` |  | |  |  | `CHAR(80)` | Full Name |
| `BirthName` |  | |  |  | `CHAR(40)` | Name at birth of business partner |
| `Initials` |  | |  |  | `CHAR(10)` | "Middle Initial" or personal initials |
| `NativePreferredLanguage` |  | |  |  | `LANG(1)` | Business Partner: Correspondence Language |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `DataControllerSet` |  | |  |  | `CHAR(1)` | BP: Data Controller Set Flag |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
