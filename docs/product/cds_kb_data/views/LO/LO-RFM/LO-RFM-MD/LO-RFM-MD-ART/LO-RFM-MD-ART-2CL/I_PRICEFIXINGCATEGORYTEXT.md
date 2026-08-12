---
name: I_PRICEFIXINGCATEGORYTEXT
description: "Price Fixing Category - Text"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICEFIXINGCATEGORYTEXT')/$value
semantic_en: "Price Fixing Category - Text"
semantic_vi: "Price Fixing Category - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "price"
  - "fixing"
  - "category"
  - "text"
  - "language"
  - "desc"
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-ART-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-ART
  - LO-RFM-MD-ART-2CL
  - lob:logistics general
---
# I_PRICEFIXINGCATEGORYTEXT

**Price Fixing Category - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICEFIXINGCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `PriceFixingCategory` | ✓ | |  | `cast( dd07t.domvalue_l as pricefixingcategory )` | `CHAR(1)` | Indicator for price fixing |
| `PriceFixingCategoryDesc` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_PriceFixingCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICEFIXINGCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICEFIXINGCATEGORYTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPRICEFIXINGCATT'
@EndUserText.label: 'Price Fixing Category - Text'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
    supportedCapabilities: #VALUE_HELP_PROVIDER,
    dataCategory: #TEXT,
    representativeKey: 'PriceFixingCategory',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #META
}
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view I_PriceFixingCategoryText
  as select from dd07t
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
  association to parent I_PriceFixingCategory as _PriceFixingCategory on $projection.PriceFixingCategory = _PriceFixingCategory.PriceFixingCategory
{     
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,     
      @ObjectModel.foreignKey.association: '_PriceFixingCategory'
      @ObjectModel.text.element: ['PriceFixingCategoryDesc']
  key cast( dd07t.domvalue_l as pricefixingcategory ) as PriceFixingCategory,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      ddtext     as PriceFixingCategoryDesc,

      _PriceFixingCategory,
      _Language

}
where
      domname  = 'PBIND'
  and as4local = 'A'
  and as4vers  = '0000';
```
