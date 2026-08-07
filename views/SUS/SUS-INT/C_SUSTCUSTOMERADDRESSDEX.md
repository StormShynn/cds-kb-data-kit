---
name: C_SUSTCUSTOMERADDRESSDEX
description: This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the extraction of customer address data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: SUS-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTCUSTOMERADDRESSDEX')/$value
semantic_en: This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the extraction of customer address data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - SUS
  - bo:businesspartner
  - component:SUS-INT
  - consumption-view
  - customer
  - product
  - SUS-INT
  - metadata-only
---
# C_SUSTCUSTOMERADDRESSDEX

**This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the extraction of customer address data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTCUSTOMERADDRESSDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `AddressID` |  | |  |  | `CHAR(10)` | Address |
| `DeletionIndicator` |  | |  |  | `CHAR(1)` | Central Deletion Flag for Master Record |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner GUID |
| `BusinessPartnerCategory` |  | |  |  | `CHAR(1)` | Business Partner Category |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `BusinessPartner2` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Validity Date (Valid From) |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Validity Date (Valid To) |
| `AddressObjectType` |  | |  |  | `CHAR(1)` | Address type (1=Organization, 2=Person, 3=Contact person) |
| `AddresseeFullName` |  | |  |  | `CHAR(80)` | Full Name of Person |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `StreetName` |  | |  |  | `CHAR(60)` | Street |
| `HouseNumber` |  | |  |  | `CHAR(10)` | House Number |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `PostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `InternationalPhoneNumber` |  | |  |  | `CHAR(30)` | Complete Number: Dialing Code+Number+Extension |
| `InternationalFaxNumber` |  | |  |  | `CHAR(30)` | Complete Number: Dialing Code+Number+Extension |
| `EmailAddress` |  | |  |  | `CHAR(241)` | Email Address |
