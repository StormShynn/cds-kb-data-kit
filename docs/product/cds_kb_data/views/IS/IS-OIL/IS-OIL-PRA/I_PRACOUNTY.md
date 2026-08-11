---
name: I_PRACOUNTY
description: "PRA County"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOUNTY')/$value
semantic_en: "PRA County"
semantic_vi: "PRA County — CDS view giao diện dựa trên t005e."
keywords:
  - "pra"
  - "county"
  - "country"
  - "region"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRACOUNTY

**PRA County**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOUNTY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `cast( land1 as land1_gp preserving type )` | `CHAR(3)` | Country/Region Key |
| `Region` | ✓ | |  | `regio` | `CHAR(3)` | Region (State, Province, County) |
| `County` | ✓ | |  | `counc` | `CHAR(3)` | County Code |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_Text` | `I_PRACountyText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOUNTY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOUNTY')/$value)*

```abap
@EndUserText.label: 'PRA County'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVCOUNTY'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'County'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'PRACounty'

define view I_PRACounty
  as select from t005e
  association [0..1] to I_Country       as _Country on  $projection.Country = _Country.Country
  association [0..1] to I_Region        as _Region  on  $projection.Country = _Region.Country
                                                    and $projection.Region  = _Region.Region
  association [0..*] to I_PRACountyText as _Text    on  $projection.Country = _Text.Country
                                                    and $projection.Region  = _Text.Region
                                                    and $projection.County  = _Text.County
{

      @ObjectModel.foreignKey.association: '_Country'
  key cast( land1 as land1_gp preserving type )  as Country,

      @ObjectModel.foreignKey.association: '_Region'
  key regio                                      as Region,
      @ObjectModel.text.association: '_Text'
  key counc                                      as County,
      _Country,
      _Region,
      _Text
}
```
