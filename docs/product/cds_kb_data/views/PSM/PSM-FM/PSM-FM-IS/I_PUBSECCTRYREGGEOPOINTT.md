---
name: I_PUBSECCTRYREGGEOPOINTT
description: "Country Region Geo point - Text"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRYREGGEOPOINTT')/$value
semantic_en: "Country Region Geo point - Text"
semantic_vi: "Country Region Geo point - Text — CDS view giao diện dựa trên t005u."
keywords:
  - "country"
  - "region"
  - "geo"
  - "point"
  - "text"
  - "language"
  - "name"
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
---
# I_PUBSECCTRYREGGEOPOINTT

**Country Region Geo point - Text**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRYREGGEOPOINTT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CountryRegion` | ✓ | |  | `concat(t005u.land1 , t005u.bland)` | `CHAR(6)` |  |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `RegionName` |  | |  | `bezei` | `CHAR(20)` | Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRYREGGEOPOINTT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRYREGGEOPOINTT')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CountryRegion'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@AbapCatalog.sqlViewName: 'ICNTRYREGTEXT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Country Region Geo point - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable:                true

define view I_PubSecCtryRegGeoPointT
  as select from t005u
  association [0..1] to I_Language as _Language on  $projection.Language = _Language.Language
{
  @EndUserText.label: 'Country Region'
  key concat(t005u.land1 , t005u.bland) as CountryRegion,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key t005u.spras as Language,
      @Semantics.text
      @Search.defaultSearchElement: true
      t005u.bezei as RegionName,
      _Language

}
```
