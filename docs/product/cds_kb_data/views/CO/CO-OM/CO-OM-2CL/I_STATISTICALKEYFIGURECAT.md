---
name: I_STATISTICALKEYFIGURECAT
description: "Statistical key figure category CDS view represents whether the value of the key figure entered in one month is either: used for the remainder of the fiscal year (Fixed value) used in one particular month and not the following ones (Total value)"
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STATISTICALKEYFIGURECAT')/$value
semantic_en: "Statistical key figure category CDS view represents whether the value of the key figure entered in one month is either: used for the remainder of the fiscal year (Fixed value) used in one particular month and not the following ones (Total value)"
semantic_vi: "Statistical Key Figure Category — CDS view giao diện dựa trên dd07l."
keywords:
  - "statistical"
  - "key"
  - "figure"
  - "category"
  - "ststc"
tags:
  - CO
  - bo:companycode
  - CO-OM
  - CO-OM-2CL
  - component:CO-OM-2CL
  - interface-view
  - lob:controlling
---
# I_STATISTICALKEYFIGURECAT

**Statistical key figure category CDS view represents whether the value of the key figure entered in one month is either: used for the remainder of the fiscal year (Fixed value) used in one particular month and not the following ones (Total value)**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STATISTICALKEYFIGURECAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StstcKeyFigCategory` | ✓ | |  | `cast( domvalue_l as grtyp )` | `CHAR(1)` | Statistical Key Figure Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_StatisticalKeyFigureCatText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STATISTICALKEYFIGURECAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STATISTICALKEYFIGURECAT')/$value)*

```abap
@EndUserText.label: 'Statistical Key Figure Category'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFISTSTKFIGCAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'StstcKeyFigCategory'
@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #META
@AbapCatalog.buffering: {type: #NONE, numberOfKeyFields: 0, status: #NOT_ALLOWED}
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.sapObjectNodeType.name: 'StatisticalKeyFigureCategory'
//@ObjectModel.sapObjectNodeType.name: 'StatisticalKeyFigure'

define view I_StatisticalKeyFigureCat
  as select from dd07l
  association [0..*] to I_StatisticalKeyFigureCatText as _Text on $projection.StstcKeyFigCategory = _Text.StstcKeyFigCategory
{
      @ObjectModel.text.association: '_Text'
  key cast( domvalue_l as grtyp ) as StstcKeyFigCategory,
      _Text
}
where
      dd07l.domname  = 'GRTYP'
  and dd07l.as4local = 'A';
```
