---
name: I_SECONDARYGEOGRLLOCATION
description: "Secondary Geographical Location"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDARYGEOGRLLOCATION')/$value
semantic_en: "Secondary Geographical Location"
semantic_vi: "Secondary Geographical Location — CDS view giao diện dựa trên oiu_cm_lxsgl."
keywords:
  - "secondary"
  - "geographical"
  - "location"
  - "country"
  - "primary"
  - "geogrl"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_SECONDARYGEOGRLLOCATION

**Secondary Geographical Location**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDARYGEOGRLLOCATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `cast( land1 as land1_gp )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` | ✓ | |  | `pri_geo_loc` | `CHAR(2)` | Primary Geographical Location |
| `SecondaryGeogrlLocation` | ✓ | |  | `sec_geo_loc` | `CHAR(3)` | Secondary geographic location |
| `_Country` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_Text` | `I_SecondaryGeogrlLocationT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDARYGEOGRLLOCATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDARYGEOGRLLOCATION')/$value)*

```abap
@EndUserText.label: 'Secondary Geographical Location'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVSECGEOGRLLOC'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'SecondaryGeogrlLocation'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'PRASecondaryGeogrlLocation'

define view I_SecondaryGeogrlLocation
  as select from oiu_cm_lxsgl
  association [0..1] to I_Country                  as _Country               on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation    as _PrimaryGeogrlLocation on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                             and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..*] to I_SecondaryGeogrlLocationT as _Text                  on  $projection.Country                 = _Text.Country
                                                                             and $projection.PrimaryGeogrlLocation   = _Text.PrimaryGeogrlLocation
                                                                             and $projection.SecondaryGeogrlLocation = _Text.SecondaryGeogrlLocation
{
      @ObjectModel.foreignKey.association: '_Country'
  key cast( land1 as land1_gp )       as Country,
      @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
  key pri_geo_loc                     as PrimaryGeogrlLocation,
      @ObjectModel.text.association: '_Text'
  key sec_geo_loc                     as SecondaryGeogrlLocation,
      _Country,
      _PrimaryGeogrlLocation,
      _Text
};
```
