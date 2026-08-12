---
name: I_PRACOUNTYTEXT
description: "PRA County - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOUNTYTEXT')/$value
semantic_en: "PRA County - Text"
semantic_vi: "PRA County - Text — CDS view giao diện dựa trên t005f."
keywords:
  - "pra"
  - "county"
  - "text"
  - "country"
  - "region"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRACOUNTYTEXT

**PRA County - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOUNTYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `cast( land1 as land1_gp preserving type )` | `CHAR(3)` | Country/Region Key |
| `Region` | ✓ | |  | `regio` | `CHAR(3)` | Region (State, Province, County) |
| `County` | ✓ | |  | `counc` | `CHAR(3)` | County Code |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `CountyName` |  | |  | `cast( bezei as oiu_vdm_county_name )` | `CHAR(20)` | County Name |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOUNTYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOUNTYTEXT')/$value)*

```abap
@EndUserText.label: 'PRA County - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVCOUNTYT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'County'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER

// the core VDM was missing county views, so these were constructed, can replace with core views when available

define view I_PRACountyText
  as select from t005f
  association [0..1] to I_Country  as _Country  on  $projection.Country = _Country.Country
  association [0..1] to I_Region   as _Region   on  $projection.Country = _Region.Country
                                                and $projection.Region  = _Region.Region
{
      @ObjectModel.foreignKey.association: '_Country'
  key cast( land1 as land1_gp preserving type ) as Country,
      @ObjectModel.foreignKey.association: '_Region'
  key regio                                    as Region,
  key counc                                    as County,
      @Semantics.language
  key spras                                    as Language,
      @Semantics.text
      cast( bezei as oiu_vdm_county_name )     as CountyName,
      _Country,
      _Region
}
```
