---
name: I_PRIMARYGEOGRLLOCATIONTEXT
description: "Primary Geographical Location Name - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIMARYGEOGRLLOCATIONTEXT')/$value
semantic_en: "Primary Geographical Location Name - Text"
semantic_vi: "Primary Geographical Location Name - Text — CDS view giao diện dựa trên oiu_cm_lxpgl_tx."
keywords:
  - "primary"
  - "geographical"
  - "location"
  - "name"
  - "text"
  - "country"
  - "geogrl"
  - "language"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRIMARYGEOGRLLOCATIONTEXT

**Primary Geographical Location Name - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIMARYGEOGRLLOCATIONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `cast( land1 as land1_gp )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` | ✓ | |  | `pri_geo_loc` | `CHAR(2)` | Primary Geographical Location |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `PrimaryGeogrlLocationName` |  | |  | `pri_geo_desc` | `CHAR(30)` | Primary geographical location description |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIMARYGEOGRLLOCATIONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRIMARYGEOGRLLOCATIONTEXT')/$value)*

```abap
@EndUserText.label: 'Primary Geographical Location Name - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPGEOGRLLOCTXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'PrimaryGeogrlLocation'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER


define view I_PrimaryGeogrlLocationText
  as select from oiu_cm_lxpgl_tx
  association [0..1] to I_Country  as _Country  on $projection.Country = _Country.Country
{
      @ObjectModel.foreignKey.association: '_Country'
  key cast( land1 as land1_gp )        as Country,
  key pri_geo_loc                      as PrimaryGeogrlLocation,
      @Semantics.language
  key spras                            as Language,
      @Semantics.text
      pri_geo_desc                     as PrimaryGeogrlLocationName,
      _Country
};
```
