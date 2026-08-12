---
name: C_SUSTPLANTADDRESSDEX
description: "This CDS view is used by Product Footprint Management for the data extraction of the relevant plant address. This view provides the necessary address detail data based on the plant."
app_component: SUS-INT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTPLANTADDRESSDEX')/$value
semantic_en: "This CDS view is used by Product Footprint Management for the data extraction of the relevant plant address. This view provides the necessary address detail data based on the plant."
semantic_vi: "Plant Address data extractor — CDS view tiêu dùng dựa trên I_Plant."
keywords:
  - "plant"
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
  - plan
  - product
  - SUS-INT
  - bo:salesorganization
---
# C_SUSTPLANTADDRESSDEX

**This CDS view is used by Product Footprint Management for the data extraction of the relevant plant address. This view provides the necessary address detail data based on the plant.**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTPLANTADDRESSDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | | `_Plant` | `Plant` | `CHAR(4)` | Plant |
| `AddressID` |  | | `_Plant` | `AddressID` | `CHAR(10)` | Address |
| `Country` |  | | `_StandardOrganizationAddress` | `Country` | `CHAR(3)` | Country/Region Key |
| `Region` |  | | `_StandardOrganizationAddress` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `CityName` |  | | `_StandardOrganizationAddress` | `CityName` | `CHAR(40)` | City |
| `PostalCode` |  | | `_StandardOrganizationAddress` | `PostalCode` | `CHAR(10)` | City Postal Code |
| `StreetName` |  | | `_StandardOrganizationAddress` | `StreetName` | `CHAR(60)` | Street |
| `HouseNumber` |  | | `_StandardOrganizationAddress` | `HouseNumber` | `CHAR(10)` | House Number |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTPLANTADDRESSDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTPLANTADDRESSDEX')/$value)*

```abap
@EndUserText.label: 'Plant Address data extractor'
@AbapCatalog: {
    sqlViewName: 'CSUSTPLNTADRSDEX',
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
      sapObjectNodeType.name: 'Plant',
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

define view C_SustPlantAddressDEX
  as select from I_Plant  as _Plant
{
  key _Plant.Plant,
      _Plant.AddressID,
      _StandardOrganizationAddress.Country,
      _StandardOrganizationAddress.Region,
      _StandardOrganizationAddress.CityName,
      _StandardOrganizationAddress.PostalCode,
      _StandardOrganizationAddress.StreetName,
      _StandardOrganizationAddress.HouseNumber
} where _Plant.AddressID <> ''
```
