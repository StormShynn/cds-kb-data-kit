---
name: I_CITYCODE
description: "City Code"
app_component: AP-MD-BP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITYCODE')/$value
semantic_en: "City Code"
semantic_vi: "City Code — CDS view giao diện dựa trên t005g."
keywords:
  - "city"
  - "code"
  - "country"
  - "region"
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - component:AP-MD-BP
  - interface-view
---
# I_CITYCODE

**City Code**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITYCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land1` | `CHAR(3)` | Country/Region Key |
| `Region` | ✓ | |  | `regio` | `CHAR(3)` | Region (State, Province, County) |
| `CityCode` | ✓ | |  | `cityc` | `CHAR(4)` | City Code |
| `_Text` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CityCodeText` | [0..*] |
| `_Region` | `I_Region` | [1..1] |
| `_Country` | `I_Country` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITYCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITYCODE')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CityCode'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@AbapCatalog.sqlViewName: 'ICITYCODE'
@EndUserText.label: 'City Code'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_CityCode
  as select from t005g
  association [0..*] to I_CityCodeText as _Text    on  $projection.Country  = _Text.Country
                                                   and $projection.Region   = _Text.Region
                                                   and $projection.CityCode = _Text.CityCode
  association [1..1] to I_Region       as _Region  on  $projection.Region  = _Region.Region
                                                   and $projection.Country = _Region.Country
  association [1..1] to I_Country      as _Country on  $projection.Country = _Country.Country
{
      @Search.defaultSearchElement: true
      @ObjectModel.foreignKey.association: '_Country'     
  key land1 as Country,
      @Search.defaultSearchElement: true
      @ObjectModel.foreignKey.association: '_Region'
  key regio as Region,
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key cityc as CityCode,
      _Text,
      _Region,
      _Country
}
```
