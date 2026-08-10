---
name: I_EHSLOCATION
description: "This CDS view retrieves details about the current (most recent) location revision. This CDS view provides the data to answer the following business questions: What's the status of my current location revision? What about the location type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATION')/$value
semantic_en: "This CDS view retrieves details about the current (most recent) location revision. This CDS view provides the data to answer the following business questions: What's the status of my current location revision? What about the location type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - metadata-only
---
# I_EHSLOCATION

**This CDS view retrieves details about the current (most recent) location revision. This CDS view provides the data to answer the following business questions: What's the status of my current location revision? What about the location type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `RevisionEndDate` |  | |  |  | `DATS(8)` | Revision End Date |
| `RevisionStartDate` |  | |  |  | `DATS(8)` | Revision Start Date |
| `EHSLocationRevisionUUID` |  | |  |  | `RAW(16)` | EHS Location - Revision UUID |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Change By |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `EHSLocationPhone` |  | |  |  | `CHAR(30)` | Telephone Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit ID |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `EHSLocationAuthorizationGroup` |  | |  |  | `CHAR(21)` | Location Authorization Group |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `StreetName` |  | |  |  | `CHAR(60)` | Street Address |
| `HouseNumber` |  | |  |  | `CHAR(10)` | House Number |
| `PostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `OriginalLanguage` |  | |  |  | `LANG(1)` | Language |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment |
| `FunctionalLocation` |  | |  |  | `CHAR(40)` | Functional Location ID |
| `Latitude` |  | |  |  | `DEC(15)` | Geographic Latitude |
| `Longitude` |  | |  |  | `DEC(15)` | Geographic Longitude |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
