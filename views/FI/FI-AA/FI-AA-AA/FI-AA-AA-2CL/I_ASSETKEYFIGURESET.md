---
name: I_ASSETKEYFIGURESET
description: "This CDS view provides the prerequisites for answering the following business question: How many asset accounting key figure groups are defined?"
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURESET')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: How many asset accounting key figure groups are defined?"
semantic_vi: "Asset Key Figure Set — CDS view giao diện dựa trên faac_kfcset."
keywords:
  - "asset"
  - "key"
  - "figure"
  - "set"
  - "accounting"
  - "acctg"
  - "anlytl"
  - "cntxt"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-AA-AA-2CL
  - FI-AA
  - FI-AA-AA
  - FI-AA-AA-2CL
  - interface-view
  - lob:finance
---
# I_ASSETKEYFIGURESET

**This CDS view provides the prerequisites for answering the following business question: How many asset accounting key figure groups are defined?**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURESET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssetAccountingKeyFigureSet` | ✓ | |  | `key_figure_set` | `CHAR(10)` | Key Figure Group |
| `AssetAcctgKeyFigSetAnlytlCntxt` |  | |  | `context` | `CHAR(2)` | Application Context of Key Figure Variant |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AssetKeyFigureSetText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURESET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURESET')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IASSETKEYFIGUSET', preserveKey: true}
@Analytics: {dataCategory: #DIMENSION }
@EndUserText.label: 'Asset Key Figure Set'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AssetAccountingKeyFigureSet',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view I_AssetKeyFigureSet
  as select from faac_kfcset

  association [0..*] to I_AssetKeyFigureSetText as _Text on $projection.AssetAccountingKeyFigureSet = _Text.AssetAccountingKeyFigureSet

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key key_figure_set as AssetAccountingKeyFigureSet,

      context        as AssetAcctgKeyFigSetAnlytlCntxt,

      _Text
}
```
