---
name: I_PRIMARYGEOGRLLOCATION
description: "Master Data Primary Geogrl Location"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIMARYGEOGRLLOCATION')/$value
semantic_en: "Master Data Primary Geogrl Location"
semantic_vi: "Master Data Primary Geogrl Location — CDS view giao diện dựa trên oiu_cm_lxpgl."
keywords:
  - "master"
  - "data"
  - "primary"
  - "geogrl"
  - "location"
  - "country"
tags:
  - IS
  - bo:businesspartner
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - master-data
---
# I_PRIMARYGEOGRLLOCATION

**Master Data Primary Geogrl Location**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIMARYGEOGRLLOCATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `cast( land1 as land1_gp )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` | ✓ | |  | `pri_geo_loc` | `CHAR(2)` | Primary Geographical Location |
| `_Text` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PrimaryGeogrlLocationText` | [0..*] |
| `_Country` | `I_Country` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIMARYGEOGRLLOCATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIMARYGEOGRLLOCATION')/$value)*

```abap
@EndUserText.label: 'Master Data Primary Geogrl Location'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPRIMGEOGRLLOC'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'PrimaryGeogrlLocation'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'PRAPrimaryGeogrlLocation'

define view I_PrimaryGeogrlLocation
  as select from oiu_cm_lxpgl
  association [0..*] to I_PrimaryGeogrlLocationText as _Text    on  $projection.Country               = _Text.Country
                                                                and $projection.PrimaryGeogrlLocation = _Text.PrimaryGeogrlLocation
  association [0..1] to I_Country                   as _Country on  $projection.Country = _Country.Country
{
      @ObjectModel.foreignKey.association: '_Country'
  key cast( land1 as land1_gp )       as Country,
      @ObjectModel.text.association: '_Text'
  key pri_geo_loc                     as PrimaryGeogrlLocation,
      _Country,
      _Text
};
```
