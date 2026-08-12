---
name: I_SECONDARYGEOGRLLOCATIONT
description: "Secondary Geographical Location Name - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDARYGEOGRLLOCATIONT')/$value
semantic_en: "Secondary Geographical Location Name - Text"
semantic_vi: "Secondary Geographical Location Name - Text — CDS view giao diện dựa trên oiu_cm_lxsgl_tx."
keywords:
  - "secondary"
  - "geographical"
  - "location"
  - "name"
  - "text"
  - "country"
  - "primary"
  - "geogrl"
  - "language"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_SECONDARYGEOGRLLOCATIONT

**Secondary Geographical Location Name - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDARYGEOGRLLOCATIONT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `cast( land1 as land1_gp )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` | ✓ | |  | `pri_geo_loc` | `CHAR(2)` | Primary Geographical Location |
| `SecondaryGeogrlLocation` | ✓ | |  | `sec_geo_loc` | `CHAR(3)` | Secondary geographic location |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `SecondaryGeogrlLocationName` |  | |  | `sec_geo_desc` | `CHAR(30)` | Secondary Geographical Location Description |
| `_Country` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDARYGEOGRLLOCATIONT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDARYGEOGRLLOCATIONT')/$value)*

```abap
@EndUserText.label: 'Secondary Geographical Location Name - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVSGEOGRLLOCTXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'SecondaryGeogrlLocation'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER

define view I_SecondaryGeogrlLocationT
  as select from oiu_cm_lxsgl_tx
  association [0..1] to I_Country               as _Country               on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation as _PrimaryGeogrlLocation on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                          and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
{
      @ObjectModel.foreignKey.association: '_Country'
  key cast( land1 as land1_gp )        as Country,
      @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
  key pri_geo_loc                      as PrimaryGeogrlLocation,
  key sec_geo_loc                      as SecondaryGeogrlLocation,
      @Semantics.language
  key spras                            as Language,
      @Semantics.text
      sec_geo_desc                     as SecondaryGeogrlLocationName,
      _Country,
      _PrimaryGeogrlLocation
};
```
