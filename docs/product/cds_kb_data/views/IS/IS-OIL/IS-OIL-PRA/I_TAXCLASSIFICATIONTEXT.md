---
name: I_TAXCLASSIFICATIONTEXT
description: "Tax Classification - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXCLASSIFICATIONTEXT')/$value
semantic_en: "Tax Classification - Text"
semantic_vi: "Tax Classification - Text — CDS view giao diện dựa trên oiu_cm_taxcls_tx."
keywords:
  - "tax"
  - "classification"
  - "text"
  - "country"
  - "primary"
  - "geogrl"
  - "location"
  - "language"
  - "name"
tags:
  - IS
  - bo:companycode
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_TAXCLASSIFICATIONTEXT

**Tax Classification - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXCLASSIFICATIONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `cast( country as land1_gp preserving type )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` | ✓ | |  | `pri_geo_loc` | `CHAR(2)` | Primary Geographical Location |
| `TaxClassification` | ✓ | |  | `tax_cls` | `CHAR(4)` | Tax Class |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `TaxClassificationName` |  | |  | `tax_cls_de` | `CHAR(50)` | Tax Class Name |
| `_Country` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXCLASSIFICATIONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXCLASSIFICATIONTEXT')/$value)*

```abap
@EndUserText.label: 'Tax Classification - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXCLASST'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'TaxClassification'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER

define view I_TaxClassificationText
  as select from oiu_cm_taxcls_tx
  association [0..1] to I_Country               as _Country               on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation as _PrimaryGeogrlLocation on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                          and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
{
      @ObjectModel.foreignKey.association: '_Country'
  key cast( country as land1_gp preserving type ) as Country,
      @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
  key pri_geo_loc                                 as PrimaryGeogrlLocation,
  key tax_cls                                     as TaxClassification,
      @Semantics.language
  key spras                                       as Language,
      @Semantics.text
      tax_cls_de                                  as TaxClassificationName,
      _Country,
      _PrimaryGeogrlLocation
}
```
