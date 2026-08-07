---
name: I_EHSLOCATIONREVISIONBASIC
description: This CDS view allows customer extensions to access location revision data. It can be used in key user extensions as an association target or for selection of location data. This CDS view provides the data to answer the following business questions: How can I use location revisions in my key user extensions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISIONBASIC')/$value
semantic_en: This CDS view allows customer extensions to access location revision data. It can be used in key user extensions as an association target or for selection of location data. This CDS view provides the data to answer the following business questions: How can I use location revisions in my key user extensions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - EHS
  - bo:businesspartner
  - component:EHS-SUS-FND-EHS
  - customer
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - metadata-only
---
# I_EHSLOCATIONREVISIONBASIC

**This CDS view allows customer extensions to access location revision data. It can be used in key user extensions as an association target or for selection of location data. This CDS view provides the data to answer the following business questions: How can I use location revisions in my key user extensions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISIONBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationRevisionUUID` |  | |  |  | `RAW(16)` | EHS Location - Revision UUID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Change By |
| `RevisionDescription` |  | |  |  | `CHAR(80)` | Revision Description |
| `RevisionStartDate` |  | |  |  | `DATS(8)` | Revision Start Date |
| `RevisionEndDate` |  | |  |  | `DATS(8)` | Revision End Date |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `EHSFunctionalLocation` |  | |  |  | `CHAR(40)` | Functional Location ID |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit ID |
| `EHSLocationAuthorizationGroup` |  | |  |  | `CHAR(21)` | Location Authorization Group |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `PostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `StreetName` |  | |  |  | `CHAR(60)` | Street Address |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `EHSLocationPhone` |  | |  |  | `CHAR(30)` | Telephone Number |
| `Longitude` |  | |  |  | `DEC(15)` | Geographic Longitude |
| `Latitude` |  | |  |  | `DEC(15)` | Geographic Latitude |
| `LongitudeUnit` |  | |  |  | `UNIT(3)` | Longitude Unit |
| `LatitudeUnit` |  | |  |  | `UNIT(3)` | Latitude Unit |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
