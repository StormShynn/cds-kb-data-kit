---
name: I_SPONSOREDCLASSTYPETEXT
description: "Sponsored Class Type - Text"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASSTYPETEXT')/$value
semantic_en: "Sponsored Class Type - Text"
semantic_vi: "Sponsored Class Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "sponsored"
  - "class"
  - "type"
  - "text"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_SPONSOREDCLASSTYPETEXT

**Sponsored Class Type - Text**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASSTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras )` | `LANG(1)` | Language Key |
| `SponsoredClassType` | ✓ | |  | `cast ( cast ( substring( dd07t.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as gm_class_type )` | `CHAR(1)` | Sponsored Class Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SponsoredClassTypeName` |  | |  | `cast ( dd07t.ddtext as gmis_spclass_type_name preserving type )` | `CHAR(60)` | Name of Sponsored Class Type |
| `_Language` | | ✓ | | | | |
| `_SponsoredClassType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASSTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASSTYPETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMSPCLASSTYPET'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Sponsored Class Type - Text'

@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #TEXT,
     representativeKey: 'SponsoredClassType',
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     },
     supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT , #EXTRACTION_DATA_SOURCE ]     
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'SponsoredClassTypeText'

define view I_SponsoredClassTypeText
  as select from dd07t
  association        to parent I_SponsoredClassType as _SponsoredClassType on $projection.SponsoredClassType = _SponsoredClassType.SponsoredClassType
  association [0..1] to I_Language                  as _Language           on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras )                               as Language,
      @ObjectModel.foreignKey.association: '_SponsoredClassType'
      @ObjectModel.text.element: ['SponsoredClassTypeName']
  key cast ( cast ( substring( dd07t.domvalue_l, 1, 1 )
             as abap.char( 1 ) ) as gm_class_type )                   as SponsoredClassType,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                as DomainValue,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      cast ( dd07t.ddtext as gmis_spclass_type_name preserving type ) as SponsoredClassTypeName,

      _SponsoredClassType,
      _Language
}
where
      domname  = 'GM_CLASS_TYPE'
  and as4local = 'A'
```
