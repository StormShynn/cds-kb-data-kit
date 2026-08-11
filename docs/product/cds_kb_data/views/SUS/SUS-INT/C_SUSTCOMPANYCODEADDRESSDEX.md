---
name: C_SUSTCOMPANYCODEADDRESSDEX
description: "This CDS view is used by Product Footprint Management for the data extraction of a relevant company code address. This view provides the necessary address detail data based on the company code."
app_component: SUS-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTCOMPANYCODEADDRESSDEX')/$value
semantic_en: "This CDS view is used by Product Footprint Management for the data extraction of a relevant company code address. This view provides the necessary address detail data based on the company code."
semantic_vi: "Company Code Address data extractor — CDS view tiêu dùng dựa trên I_CompanyCode."
keywords:
  - "company"
  - "code"
  - "address"
  - "data"
  - "extractor"
  - "country"
  - "region"
  - "city"
  - "name"
tags:
  - SUS
  - bo:material
  - component:SUS-INT
  - consumption-view
  - product
  - SUS-INT
  - bo:salesorganization
---
# C_SUSTCOMPANYCODEADDRESSDEX

**This CDS view is used by Product Footprint Management for the data extraction of a relevant company code address. This view provides the necessary address detail data based on the company code.**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTCOMPANYCODEADDRESSDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | | `_CompanyCode` | `CompanyCode` | `CHAR(4)` | Company Code |
| `AddressID` |  | | `_CompanyCode` | `AddressID` | `CHAR(10)` | Address |
| `Country` |  | | `_OrgAddressDefaultRprstn` | `Country` | `CHAR(3)` | Country/Region Key |
| `Region` |  | | `_OrgAddressDefaultRprstn` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `CityName` |  | | `_OrgAddressDefaultRprstn` | `CityName` | `CHAR(40)` | City |
| `PostalCode` |  | | `_OrgAddressDefaultRprstn` | `PostalCode` | `CHAR(10)` | City Postal Code |
| `StreetName` |  | | `_OrgAddressDefaultRprstn` | `StreetName` | `CHAR(60)` | Street |
| `HouseNumber` |  | | `_OrgAddressDefaultRprstn` | `HouseNumber` | `CHAR(10)` | House Number |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTCOMPANYCODEADDRESSDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTCOMPANYCODEADDRESSDEX')/$value)*

```abap
@EndUserText.label: 'Company Code Address data extractor'
@AbapCatalog: {
    sqlViewName: 'CSUSTCCADRSDEX',
    compiler.compareFilter: true
}
@AccessControl: {
     authorizationCheck: #PRIVILEGED_ONLY,
     personalData.blocking: #NOT_REQUIRED
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
      usageType: {
         sizeCategory: #XL,
         serviceQuality: #C,
         dataClass:#CUSTOMIZING
      },
      sapObjectNodeType.name: 'CompanyCode',
      supportedCapabilities: [#EXTRACTION_DATA_SOURCE],
      modelingPattern: #NONE
}
@VDM: {
      viewType: #CONSUMPTION,
      lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
        dataCategory: #FACT,
        internalName: #LOCAL,
        dataExtraction.enabled: true
}
@Metadata: {
        ignorePropagatedAnnotations: true
}

define view C_SustCompanyCodeAddressDEX
  as select from I_CompanyCode as _CompanyCode
{
  key _CompanyCode.CompanyCode,
      _CompanyCode.AddressID,
      _OrgAddressDefaultRprstn.Country,
      _OrgAddressDefaultRprstn.Region,
      _OrgAddressDefaultRprstn.CityName,
      _OrgAddressDefaultRprstn.PostalCode,
      _OrgAddressDefaultRprstn.StreetName,
      _OrgAddressDefaultRprstn.HouseNumber
}where _CompanyCode.AddressID <> ''
```
