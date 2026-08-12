---
name: I_SPONSOREDCLASSTEXT
description: "Sponsored Class - Text"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASSTEXT')/$value
semantic_en: "Sponsored Class - Text"
semantic_vi: "Sponsored Class - Text — CDS view giao diện dựa trên gmspclasstexts."
keywords:
  - "sponsored"
  - "class"
  - "text"
  - "language"
  - "description"
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
# I_SPONSOREDCLASSTEXT

**Sponsored Class - Text**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SponsoredClass` | ✓ | |  | `sponsored_class` | `CHAR(20)` | Sponsored Class |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `SponsoredClassDescription` |  | |  | `description` | `CHAR(30)` | Sponsored Class Description |
| `SponsoredClassName` |  | |  | `sponsoredclassname` | `CHAR(20)` | Sponsored Class Name |
| `_SponsoredClass` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SponsoredClass` | `I_SponsoredClass` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASSTEXT')/$value)*

```abap
@EndUserText.label: 'Sponsored Class - Text'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'SponsoredClass'
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #L
}
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]
@Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.sqlViewName: 'IGMSPCLASST'
@AbapCatalog.preserveKey:true
@ObjectModel.sapObjectNodeType.name: 'SponsoredClassText'
define view I_SponsoredClassText
  as select from gmspclasstexts
  association [1..1] to I_SponsoredClass as _SponsoredClass on $projection.SponsoredClass = _SponsoredClass.SponsoredClass
  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language
{
  key sponsored_class    as SponsoredClass,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language           as Language,
      @Semantics.text: true
      description        as SponsoredClassDescription,
      @Semantics.text: true
      sponsoredclassname as SponsoredClassName,

      _SponsoredClass,
      _Language
}
```
