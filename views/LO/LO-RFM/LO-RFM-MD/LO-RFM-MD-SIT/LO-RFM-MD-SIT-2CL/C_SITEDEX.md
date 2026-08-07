---
name: C_SITEDEX
description: This CDS view helps to retrieve a subset of retail site data, in particular, the site's name and its address data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SITEDEX')/$value
semantic_en: This CDS view helps to retrieve a subset of retail site data, in particular, the site's name and its address data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-SIT-2CL
  - consumption-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - metadata-only
---
# C_SITEDEX

**This CDS view helps to retrieve a subset of retail site data, in particular, the site's name and its address data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SITEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Site` |  | |  |  | `CHAR(4)` | Plant |
| `SiteName` |  | |  |  | `CHAR(30)` | Site Name |
| `AddressID` |  | |  |  | `CHAR(10)` | Address |
| `StreetName` |  | |  |  | `CHAR(60)` | Street |
| `HouseNumber` |  | |  |  | `CHAR(10)` | House Number |
| `PostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `County` |  | |  |  | `CHAR(40)` | County |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
