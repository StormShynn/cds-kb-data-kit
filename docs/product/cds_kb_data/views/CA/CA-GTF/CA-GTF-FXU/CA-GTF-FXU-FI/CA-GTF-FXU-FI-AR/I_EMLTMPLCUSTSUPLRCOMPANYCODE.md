---
name: I_EMLTMPLCUSTSUPLRCOMPANYCODE
description: "This CDS view provides data for email templates used to communicate with customers and suppliers. You can use this view to access customer and supplier information, such as names, addresses, contact details, and authorization groups, which can be incorporated into automated email communications. This CDS view provides the data to answer the following business questions: What are the contact details for a specific customer or supplier within a given company code? Which accounting clerk is responsible for a particular customer or supplier account? Which authorization groups are assigned to customers and suppliers for email communication purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-FXU-FI-AR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EMLTMPLCUSTSUPLRCOMPANYCODE')/$value
semantic_en: "This CDS view provides data for email templates used to communicate with customers and suppliers. You can use this view to access customer and supplier information, such as names, addresses, contact details, and authorization groups, which can be incorporated into automated email communications. This CDS view provides the data to answer the following business questions: What are the contact details for a specific customer or supplier within a given company code? Which accounting clerk is responsible for a particular customer or supplier account? Which authorization groups are assigned to customers and suppliers for email communication purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CA
  - account
  - bo:businesspartner
  - CA-GTF
  - CA-GTF-FXU
  - CA-GTF-FXU-FI
  - CA-GTF-FXU-FI-AR
  - component:CA-GTF-FXU-FI-AR
  - customer
  - interface-view
  - lob:cross_application components
  - lob:finance
  - supplier
  - metadata-only
---
# I_EMLTMPLCUSTSUPLRCOMPANYCODE

**This CDS view provides data for email templates used to communicate with customers and suppliers. You can use this view to access customer and supplier information, such as names, addresses, contact details, and authorization groups, which can be incorporated into automated email communications. This CDS view provides the data to answer the following business questions: What are the contact details for a specific customer or supplier within a given company code? Which accounting clerk is responsible for a particular customer or supplier account? Which authorization groups are assigned to customers and suppliers for email communication purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-AR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EMLTMPLCUSTSUPLRCOMPANYCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Account` |  | |  |  | `CHAR(10)` | Customer Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` |  |
| `Name` |  | |  |  | `CHAR(80)` | Name of Customer |
| `FullName` |  | |  |  | `CHAR(220)` | Customer Full Name |
| `BusinessPartnerName1` |  | |  |  | `CHAR(40)` | Name 1 |
| `BusinessPartnerName2` |  | |  |  | `CHAR(40)` | Name 2 |
| `BusinessPartnerName3` |  | |  |  | `CHAR(40)` | Name 3 |
| `BusinessPartnerName4` |  | |  |  | `CHAR(40)` | Name 4 |
| `OrganizationBPName1` |  | |  |  | `CHAR(35)` | Name |
| `OrganizationBPName2` |  | |  |  | `CHAR(35)` | Name 2 |
| `StreetName` |  | |  |  | `CHAR(35)` | Street and House Number |
| `CityName` |  | |  |  | `CHAR(35)` | City |
| `PostalCode` |  | |  |  | `CHAR(10)` | Postal Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `ReferenceAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CoCodeSpcfcAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `PersonFullName` |  | |  |  | `CHAR(80)` | Full Name of Person |
| `EmailAddress` |  | |  |  | `CHAR(241)` | Email Address |
| `PhoneNumber` |  | |  |  | `CHAR(30)` | Current Default Mobile Phone Number |
| `AccountingClerkName` |  | |  |  | `CHAR(80)` | Full Name of Person |
| `AccountingClerkEmailAddress` |  | |  |  | `CHAR(241)` | Email Address |
| `AccountingClerkPhoneNumber` |  | |  |  | `CHAR(30)` | Current Default Mobile Phone Number |
