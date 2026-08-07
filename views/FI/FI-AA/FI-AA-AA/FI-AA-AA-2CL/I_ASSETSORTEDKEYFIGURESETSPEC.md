---
name: I_ASSETSORTEDKEYFIGURESETSPEC
description: "This CDS view provides the prerequisites for answering the following business question: In which sorting sequence are the key figures of my key figure groups for Asset Balances and Asset History Sheet defined?"
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETSORTEDKEYFIGURESETSPEC')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: In which sorting sequence are the key figures of my key figure groups for Asset Balances and Asset History Sheet defined?"
semantic_vi: "Sorted Fixed Asset Key Figure Set Specification — CDS view giao diện dựa trên I_AssetKeyFigureSetSpec."
keywords:
  - "sorted"
  - "fixed"
  - "asset"
  - "key"
  - "figure"
  - "set"
  - "specification"
  - "accounting"
  - "acctg"
  - "sort"
  - "sqnc"
  - "zero"
  - "amount"
  - "hidden"
tags:
  - FI
  - bo:companycode
  - component:FI-AA-AA-2CL
  - FI-AA
  - FI-AA-AA
  - FI-AA-AA-2CL
  - interface-view
  - lob:finance
  - bo:asset
---
# I_ASSETSORTEDKEYFIGURESETSPEC

**This CDS view provides the prerequisites for answering the following business question: In which sorting sequence are the key figures of my key figure groups for Asset Balances and Asset History Sheet defined?**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETSORTEDKEYFIGURESETSPEC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssetAccountingKeyFigureSet` | ✓ | |  |  | `CHAR(10)` | Key Figure Group |
| `AssetAccountingSortedKeyFigure` | ✓ | |  |  | `CHAR(17)` | Key Figure Box Number for Asset Accounting |
| `AssetAccountingKeyFigure` |  | |  |  | `CHAR(10)` | Key Figure for Asset Accounting |
| `AssetAcctgKeyFigureSortSqnc` |  | |  |  | `NUMC(6)` | Sort sequence of Asset Acc. Key Figure Codes in a group |
| `ZeroBalAmountKeyFigureIsHidden` |  | |  |  | `CHAR(1)` | Indicator: Key Figure is hidden when Balance Amount is zero |
| `_AssetKeyFigureSet` | | ✓ | | | | |
| `_AssetKeyFigure` | | ✓ | | | | |
| `_AssetKeyFigureHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AssetKeyFigureSet` | `I_AssetKeyFigureSet` | [0..1] |
| `_AssetKeyFigure` | `I_AssetKeyFigure` | [0..1] |
| `_AssetKeyFigureHierarchyNode` | `I_AssetKeyFigureHierarchyNode` | [0..*] |
| `_Text` | `I_AssetKeyFigureSetSpecText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETSORTEDKEYFIGURESETSPEC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETSORTEDKEYFIGURESETSPEC')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IASTSRTKEYFSTSPC', preserveKey: true}
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Sorted Fixed Asset Key Figure Set Specification'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AssetAccountingSortedKeyFigure',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view I_AssetSortedKeyFigureSetSpec
  as select from I_AssetKeyFigureSetSpec
    inner join   I_AssetKeyFigureSet on I_AssetKeyFigureSetSpec.AssetAccountingKeyFigureSet = I_AssetKeyFigureSet.AssetAccountingKeyFigureSet

  association [0..1] to I_AssetKeyFigureSet           as _AssetKeyFigureSet           on  $projection.AssetAccountingKeyFigureSet = _AssetKeyFigureSet.AssetAccountingKeyFigureSet
  association [0..1] to I_AssetKeyFigure              as _AssetKeyFigure              on  $projection.AssetAccountingKeyFigure = _AssetKeyFigure.AssetAccountingKeyFigure
  association [0..*] to I_AssetKeyFigureHierarchyNode as _AssetKeyFigureHierarchyNode on  $projection.AssetAccountingKeyFigureSet    = _AssetKeyFigureHierarchyNode.AssetAccountingKeyFigureSet
                                                                                      and $projection.AssetAccountingSortedKeyFigure = _AssetKeyFigureHierarchyNode.AssetAccountingSortedKeyFigure
  association [0..*] to I_AssetKeyFigureSetSpecText   as _Text                        on  $projection.AssetAccountingKeyFigureSet = _Text.AssetAccountingKeyFigureSet
                                                                                      and $projection.AssetAccountingKeyFigure    = _Text.AssetAccountingKeyFigure
{
      @ObjectModel.foreignKey.association: '_AssetKeyFigureSet'
  key I_AssetKeyFigureSetSpec.AssetAccountingKeyFigureSet,
      @ObjectModel.hierarchy.association: '_AssetKeyFigureHierarchyNode'
      @ObjectModel.text.element: 'AssetAccountingKeyFigureText'
  key AssetAccountingSortedKeyFigure,
      @ObjectModel.foreignKey.association: '_AssetKeyFigure'
      AssetAccountingKeyFigure,
      AssetAcctgKeyFigureSortSqnc,
      ZeroBalAmountKeyFigureIsHidden,
      @Semantics.text: true
      _Text[1:Language = $session.system_language].AssetAccountingKeyFigureText,

      _AssetKeyFigureSet,
      _AssetKeyFigure,
      _AssetKeyFigureHierarchyNode
}
where
        I_AssetKeyFigureSet.AssetAcctgKeyFigSetAnlytlCntxt  =  '01' //Asset History Sheet
  or    I_AssetKeyFigureSet.AssetAcctgKeyFigSetAnlytlCntxt  =  '02' //Asset Balances
  or(
        I_AssetKeyFigureSet.AssetAcctgKeyFigSetAnlytlCntxt  =  '05' //Globalization
    and I_AssetKeyFigureSetSpec.AssetAcctgKeyFigureSortSqnc <> '000000'
  )
```
