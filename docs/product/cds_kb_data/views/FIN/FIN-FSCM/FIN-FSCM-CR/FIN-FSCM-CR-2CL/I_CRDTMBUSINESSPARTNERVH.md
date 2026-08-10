---
name: I_CRDTMBUSINESSPARTNERVH
description: "This CDS view is designed to provide a value help for business partners in the context of credit management. It serves as a composite view that aggregates and presents relevant information about business partners, including their names, addresses, and associated search terms. The view is optimized for searchability and includes various search criteria to facilitate finding specific business partners based on different attributes. This CDS view provides the data to answer the following business questions: How can I find and select business partners for credit management purposes? What are the names and details of business partners involved in credit management? How can I search for business partners using specific attributes such as first name, last name, organization name, country, or search terms? How can I ensure that blocked business partners are excluded from the data due to data privacy concerns? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMBUSINESSPARTNERVH')/$value
semantic_en: "This CDS view is designed to provide a value help for business partners in the context of credit management. It serves as a composite view that aggregates and presents relevant information about business partners, including their names, addresses, and associated search terms. The view is optimized for searchability and includes various search criteria to facilitate finding specific business partners based on different attributes. This CDS view provides the data to answer the following business questions: How can I find and select business partners for credit management purposes? What are the names and details of business partners involved in credit management? How can I search for business partners using specific attributes such as first name, last name, organization name, country, or search terms? How can I ensure that blocked business partners are excluded from the data due to data privacy concerns? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CRDTMBUSINESSPARTNERVH

**This CDS view is designed to provide a value help for business partners in the context of credit management. It serves as a composite view that aggregates and presents relevant information about business partners, including their names, addresses, and associated search terms. The view is optimized for searchability and includes various search criteria to facilitate finding specific business partners based on different attributes. This CDS view provides the data to answer the following business questions: How can I find and select business partners for credit management purposes? What are the names and details of business partners involved in credit management? How can I search for business partners using specific attributes such as first name, last name, organization name, country, or search terms? How can I ensure that blocked business partners are excluded from the data due to data privacy concerns? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMBUSINESSPARTNERVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` |  | |  |  | `CHAR(81)` |  |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `OrganizationBPName1` |  | |  |  | `CHAR(40)` | Name 1 of organization |
| `OrganizationBPName2` |  | |  |  | `CHAR(40)` | Name 2 of organization |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region of a Business Partner |
| `SearchTerm1` |  | |  |  | `CHAR(20)` | Search Term 1 for Business Partner |
