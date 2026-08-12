---
name: I_CITYCODETEXT
description: "City Code Text"
app_component: AP-MD-BP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITYCODETEXT')/$value
semantic_en: "City Code Text"
semantic_vi: "City Code Text — CDS view giao diện dựa trên t005h."
keywords:
  - "city"
  - "code"
  - "text"
  - "region"
  - "country"
  - "language"
  - "name"
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - component:AP-MD-BP
  - interface-view
---
# I_CITYCODETEXT

**City Code Text**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITYCODETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Region` | ✓ | |  | `regio` | `CHAR(3)` | Region (State, Province, County) |
| `Country` | ✓ | |  | `land1` | `CHAR(3)` | Country/Region Key |
| `CityCode` | ✓ | |  | `cityc` | `CHAR(4)` | City Code |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `CityCodeName` |  | |  | `bezei` | `CHAR(20)` | Description |
| `_CityCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CityCode` | `I_CityCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Region` | `I_Region` | [1..1] |
| `_Country` | `I_Country` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITYCODETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITYCODETEXT')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CityCode'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@AbapCatalog.sqlViewName: 'ICITYCODETEXT'
@EndUserText.label: 'City Code Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true

define view I_CityCodeText
  as select from t005h
  association [0..1] to I_CityCode as _CityCode on  $projection.Country  = _CityCode.Country
                                                and $projection.Region   = _CityCode.Region
                                                and $projection.CityCode = _CityCode.CityCode
  association [0..1] to I_Language as _Language on  $projection.Language = _Language.Language
  association [1..1] to I_Region   as _Region   on  $projection.Region  = _Region.Region
                                                and $projection.Country = _Region.Country
  association [1..1] to I_Country  as _Country  on  $projection.Country = _Country.Country
{
      @ObjectModel.foreignKey.association: '_Region'
  key regio as Region,
      @ObjectModel.foreignKey.association: '_Country'
  key land1 as Country,
      @ObjectModel.foreignKey.association: '_CityCode'
  key cityc as CityCode,
       @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,
      @EndUserText.label: 'City Code Name'
      @Semantics.text
      bezei as CityCodeName,
      _CityCode,
      _Language,
      _Region,
      _Country
}
```
