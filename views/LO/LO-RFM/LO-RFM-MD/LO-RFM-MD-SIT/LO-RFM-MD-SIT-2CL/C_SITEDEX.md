---
name: C_SITEDEX
description: "This CDS view helps to retrieve a subset of retail site data, in particular, the site's name and its address data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SITEDEX')/$value
semantic_en: "This CDS view helps to retrieve a subset of retail site data, in particular, the site's name and its address data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Site Address Data — CDS view tiêu dùng (master data) dựa trên I_Site."
keywords:
  - "site"
  - "address"
  - "data"
  - "name"
  - "street"
  - "house"
  - "number"
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
  - bo:plant
---
# C_SITEDEX

**This CDS view helps to retrieve a subset of retail site data, in particular, the site's name and its address data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SITEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Site` | ✓ | |  |  | `CHAR(4)` | Plant |
| `SiteName` |  | |  |  | `CHAR(30)` | Site Name |
| `AddressID` |  | |  |  | `CHAR(10)` | Address |
| `StreetName` |  | | `_Address` | `StreetName` | `CHAR(60)` | Street |
| `HouseNumber` |  | | `_Address` | `HouseNumber` | `CHAR(10)` | House Number |
| `PostalCode` |  | | `_Address` | `PostalCode` | `CHAR(10)` | City Postal Code |
| `CityName` |  | | `_Address` | `CityName` | `CHAR(40)` | City |
| `Region` |  | | `_Address` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `County` |  | | `_Address` | `County` | `CHAR(40)` | County |
| `Country` |  | | `_Address` | `Country` | `CHAR(3)` | Country/Region Key |
| `_Address` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SITEDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SITEDEX')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CSITEDEX'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking
@EndUserText.label: 'Site Address Data'
@VDM.viewType: #CONSUMPTION
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics: {
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  dataExtraction.delta.changeDataCapture.mapping: [
    {
      table: 'T001W', role: #MAIN,
      tableElement: ['WERKS'],
      viewElement: ['Site']
    },
    {
      table: 'ADRC',
      filter: [{operator: #EQ,  tableElement: 'date_from', value: '00010101'},
               {operator: #EQ,  tableElement: 'nation', value: ' '} ],
      role: #LEFT_OUTER_TO_ONE_JOIN,
      tableElement: ['ADDRNUMBER'],
      viewElement: ['AddressID']
    }
    ]
}

@ObjectModel: {
    usageType: {
        serviceQuality: #A,
        sizeCategory: #M,        
        dataClass: #MASTER
   },
   sapObjectNodeType: {                
                     name: 'RetailSite'  
                   },               
   supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
}

define view C_SiteDEX
  as select from I_Site
{
  key Site,
      SiteName,
      @Consumption.hidden: true
      AddressID,
      _Address.StreetName,
      _Address.HouseNumber,
      _Address.PostalCode,
      _Address.CityName,
      _Address.Region,
      _Address.County,
      _Address.Country,
      _Address
}
```
