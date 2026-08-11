---
name: I_MARKETIDENTIFIERCODETEXT
description: "Market Identifier Code - Text"
app_component: CA-GTF-TRB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARKETIDENTIFIERCODETEXT')/$value
semantic_en: "Market Identifier Code - Text"
semantic_vi: "Market Identifier Code - Text — CDS view giao diện dựa trên tbac_mict."
keywords:
  - "market"
  - "identifier"
  - "code"
  - "text"
  - "language"
  - "name"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-TRB
  - component:CA-GTF-TRB
  - interface-view
  - lob:cross_application components
---
# I_MARKETIDENTIFIERCODETEXT

**Market Identifier Code - Text**

| Property | Value |
|---|---|
| App Component | `CA-GTF-TRB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARKETIDENTIFIERCODETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MarketIdentifierCode` | ✓ | |  | `mic` | `CHAR(4)` | Market Identifier Code |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `MarketIdentifierCodeName` |  | |  | `text` | `CHAR(40)` | Market Identifier Code Description |
| `_Language` | | ✓ | | | | |
| `_MarketIdentifierCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_MarketIdentifierCode` | `I_MarketIdentCode` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARKETIDENTIFIERCODETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARKETIDENTIFIERCODETEXT')/$value)*

```abap
@EndUserText.label: 'Market Identifier Code - Text'
//@Analytics.dataCategory: #TEXT
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'IMICT'
@ObjectModel.representativeKey: 'MarketIdentifierCode'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT]

define view i_MarketIdentifierCodeText
   as select from tbac_mict
 
   association [0..1] to I_Language as _Language  on $projection.Language = _Language.Language
   association [1..1] to I_MarketIdentCode as _MarketIdentifierCode
        on $projection.MarketIdentifierCode = _MarketIdentifierCode.MarketIdentifierCode
{
 
    key mic as MarketIdentifierCode,
    @Semantics.language: true
    key langu as Language,
    @Semantics.text: true
        text as MarketIdentifierCodeName,
        _MarketIdentifierCode,
        _Language
  
}
```
