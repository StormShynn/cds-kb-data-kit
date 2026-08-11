---
name: I_CMMDTYTEXT
description: "Commodity - Text"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYTEXT')/$value
semantic_en: "Commodity - Text"
semantic_vi: "Commodity - Text — CDS view giao diện dựa trên tbac_physcommt."
keywords:
  - "commodity"
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
# I_CMMDTYTEXT

**Commodity - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-RSK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Commodity` | ✓ | |  | `commodity` | `CHAR(18)` | Commodity |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CommodityName` |  | |  | `text` | `CHAR(40)` | Commodity Description |
| `_Language` | | ✓ | | | | |
| `_Commodity` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Commodity` | `I_Cmmdty` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYTEXT')/$value)*

```abap
@EndUserText.label: 'Commodity - Text'
//@Analytics.dataCategory: #DIMENSION
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'ICMMDTYT'
@ObjectModel.representativeKey: 'Commodity'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities:  [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true

define view I_CmmdtyText
   as select from tbac_physcommt
  
   association [0..1] to I_Language as _Language  on $projection.Language = _Language.Language
   association [1..1] to I_Cmmdty as _Commodity
      on $projection.Commodity = _Commodity.Commodity

{

   key commodity as Commodity,
   @Semantics.language: true
   key langu as Language,
   @Semantics.text: true
       text as CommodityName,
       _Language,
       _Commodity
  
}
```
