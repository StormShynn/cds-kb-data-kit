---
name: I_CMMDTYCATEGORYTEXT
description: "Commodity Category - Text"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYCATEGORYTEXT')/$value
semantic_en: "Commodity Category - Text"
semantic_vi: "Commodity Category - Text — CDS view giao diện dựa trên trcots_cty_cat_t."
keywords:
  - "commodity"
  - "category"
  - "text"
  - "language"
  - "name"
tags:
  - FIN
  - component:FIN-FSCM-CMM-RSK
  - FIN-FSCM
  - FIN-FSCM-CMM
  - FIN-FSCM-CMM-RSK
  - interface-view
  - lob:finance
  - lob:sourcing & procurement
---
# I_CMMDTYCATEGORYTEXT

**Commodity Category - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-RSK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CommodityCategory` | ✓ | |  | `commodity_cat` | `CHAR(3)` | Commodity Category |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `CommodityCategoryName` |  | |  | `cty_cat_txt` | `CHAR(30)` | Commodity Category Text |
| `_Language` | | ✓ | | | | |
| `_Category` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Category` | `I_CmmdtyCategory` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYCATEGORYTEXT')/$value)*

```abap
@EndUserText.label: 'Commodity Category - Text'
@Analytics.dataCategory: #DIMENSION
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'ICMMDTYCATEGORYT'
@ObjectModel.representativeKey: 'CommodityCategory'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true

define view I_CmmdtyCategoryText
   as select from trcots_cty_cat_t
  
   association [0..1] to I_Language as _Language  on $projection.Language = _Language.Language
   association [1..1] to I_CmmdtyCategory as _Category
      on $projection.CommodityCategory = _Category.CommodityCategory

{

   key commodity_cat as CommodityCategory,
   @Semantics.language: true
   key language as Language,
   @Semantics.text: true
       cty_cat_txt as CommodityCategoryName,
       _Language,
       _Category
  
}
```
