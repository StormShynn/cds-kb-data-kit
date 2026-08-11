---
name: I_WORKASSGMTADDRESSDEX
description: "This CDS view is designed to provide detailed information about work assignment addresses, including various address components and related business partner data. It integrates data from multiple sources to offer a comprehensive view of address details associated with work assignments. This CDS view provides the data to answer the following business questions: What are the address details associated with a specific work assignment? Which business partner is linked to a particular work assignment address? What is the validity period for a given work assignment address? What are the geographical details (country, region, city, etc.) of a work assignment address? Is the business purpose for the associated business partner completed? What is the authorization group for the business partner linked to the work assignment address? Are there any blocked data or restrictions associated with the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTADDRESSDEX')/$value
semantic_en: "This CDS view is designed to provide detailed information about work assignment addresses, including various address components and related business partner data. It integrates data from multiple sources to offer a comprehensive view of address details associated with work assignments. This CDS view provides the data to answer the following business questions: What are the address details associated with a specific work assignment? Which business partner is linked to a particular work assignment address? What is the validity period for a given work assignment address? What are the geographical details (country, region, city, etc.) of a work assignment address? Is the business purpose for the associated business partner completed? What is the authorization group for the business partner linked to the work assignment address? Are there any blocked data or restrictions associated with the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_WORKASSGMTADDRESSDEX

**This CDS view is designed to provide detailed information about work assignment addresses, including various address components and related business partner data. It integrates data from multiple sources to offer a comprehensive view of address details associated with work assignments. This CDS view provides the data to answer the following business questions: What are the address details associated with a specific work assignment? Which business partner is linked to a particular work assignment address? What is the validity period for a given work assignment address? What are the geographical details (country, region, city, etc.) of a work assignment address? Is the business purpose for the associated business partner completed? What is the authorization group for the business partner linked to the work assignment address? Are there any blocked data or restrictions associated with the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTADDRESSDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignmentBusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `AddressNumber` |  | |  |  | `CHAR(10)` | Address Number |
| `WorkAssignment` |  | |  |  | `NUMC(8)` | Workforce Assignment ID |
| `WorkAssignmentExternalID` |  | |  |  | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` |  | |  |  | `CHAR(2)` | Workforce Country ISO Code |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `StartDate` |  | |  |  | `DATS(8)` | Start Date |
| `EndDate` |  | |  |  | `DATS(8)` | End Date |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SecondaryRegion` |  | |  |  | `CHAR(8)` | County code for county |
| `SecondaryRegionName` |  | |  |  | `CHAR(40)` | County |
| `TertiaryRegion` |  | |  |  | `CHAR(8)` | Township code for Township |
| `TertiaryRegionName` |  | |  |  | `CHAR(40)` | Township |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `DistrictName` |  | |  |  | `CHAR(40)` | District |
| `StreetPrefixName1` |  | |  |  | `CHAR(40)` | Street 2 |
| `StreetPrefixName2` |  | |  |  | `CHAR(40)` | Street 3 |
| `StreetName` |  | |  |  | `CHAR(60)` | Street |
| `StreetSuffixName1` |  | |  |  | `CHAR(40)` | Street 4 |
| `StreetSuffixName2` |  | |  |  | `CHAR(40)` | Street 5 |
| `HouseNumber` |  | |  |  | `CHAR(10)` | House Number |
| `HouseNumberSupplementText` |  | |  |  | `CHAR(10)` | House number supplement |
| `Floor` |  | |  |  | `CHAR(10)` | Floor in Building |
| `RoomNumber` |  | |  |  | `CHAR(10)` | Room or Apartment Number |
| `CareOfName` |  | |  |  | `CHAR(40)` | c/o name |
| `POBoxPostalCode` |  | |  |  | `CHAR(10)` | PO Box Postal Code |
| `IsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `DataControllerSet` |  | |  |  | `CHAR(1)` | BP: Data Controller Set Flag |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
