---
name: I_CMMDTYTYPETEXT
description: "Commodity Type - Text"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYTYPETEXT')/$value
semantic_en: "Commodity Type - Text"
semantic_vi: "Commodity Type - Text — CDS view giao diện dựa trên trcoc_cty_type_t."
keywords:
  - "commodity"
  - "type"
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
# I_CMMDTYTYPETEXT

**Commodity Type - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-RSK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CommodityType` | ✓ | |  | `commodity_type` | `CHAR(3)` | Type of Commodity |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `CommodityTypeName` |  | |  | `cty_type_text` | `CHAR(30)` | Commodity Type Text |
| `_Language` | | ✓ | | | | |
| `_Type` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Type` | `I_CmmdtyType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Commodity Type - Text'
@Analytics.dataCategory: #DIMENSION
//@Analytics.dataCategory: #TEXT
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'ICMMDTYTYPET'
@ObjectModel.representativeKey: 'CommodityType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true

define view I_CmmdtyTypeText
   as select from trcoc_cty_type_t
  
   association [0..1] to I_Language as _Language  on $projection.Language = _Language.Language
   association [1..1] to I_CmmdtyType as _Type
      on $projection.CommodityType = _Type.CommodityType

{

   key commodity_type as CommodityType,
   @Semantics.language: true
   key language as Language,
   @Semantics.text: true
       cty_type_text as CommodityTypeName,
       _Language,
       _Type
  
}
```
