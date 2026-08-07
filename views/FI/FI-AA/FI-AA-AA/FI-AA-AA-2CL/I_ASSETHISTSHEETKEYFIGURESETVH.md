---
name: I_ASSETHISTSHEETKEYFIGURESETVH
description: "Asset History Sheet Key Figure Group"
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETHISTSHEETKEYFIGURESETVH')/$value
semantic_en: "Asset History Sheet Key Figure Group"
semantic_vi: "Asset History Sheet Key Figure Group — CDS view giao diện dựa trên I_AssetKeyFigureSet."
keywords:
  - "asset"
  - "history"
  - "sheet"
  - "key"
  - "figure"
  - "group"
  - "accounting"
tags:
  - FI
  - bo:companycode
  - component:FI-AA-AA-2CL
  - FI-AA
  - FI-AA-AA
  - FI-AA-AA-2CL
  - interface-view
  - lob:finance
---
# I_ASSETHISTSHEETKEYFIGURESETVH

**Asset History Sheet Key Figure Group**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETHISTSHEETKEYFIGURESETVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssetAccountingKeyFigureSet` | ✓ | |  |  | `CHAR(10)` | Key Figure Group |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AssetKeyFigureSetText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETHISTSHEETKEYFIGURESETVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETHISTSHEETKEYFIGURESETVH')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IFIASTHISTKFGVH', preserveKey: true}
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Asset History Sheet Key Figure Group'
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                dataCategory: #VALUE_HELP,
                modelingPattern: #VALUE_HELP_PROVIDER,
                supportedCapabilities: [#VALUE_HELP_PROVIDER] }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view I_AssetHistSheetKeyFigureSetVH
  as select from I_AssetKeyFigureSet

  association [0..*] to I_AssetKeyFigureSetText as _Text on $projection.AssetAccountingKeyFigureSet = _Text.AssetAccountingKeyFigureSet

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key AssetAccountingKeyFigureSet,

      _Text
}
where
  AssetAcctgKeyFigSetAnlytlCntxt = '01'
```
