---
name: I_ASSETKEYFIGURE
description: "This CDS view provides the prerequisites for answering the following business question: How many asset accounting key figures are defined?"
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: How many asset accounting key figures are defined?"
semantic_vi: "Asset Key Figure — CDS view giao diện dựa trên faac_kfc."
keywords:
  - "asset"
  - "key"
  - "figure"
  - "accounting"
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
# I_ASSETKEYFIGURE

**This CDS view provides the prerequisites for answering the following business question: How many asset accounting key figures are defined?**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssetAccountingKeyFigure` | ✓ | |  | `key_figure_code` | `CHAR(10)` | Key Figure for Asset Accounting |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AssetKeyFigureText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURE')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IASSETKEYFIGURE', preserveKey: true}
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Asset Key Figure'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AssetAccountingKeyFigure',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #M,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_AssetKeyFigure
  as select from faac_kfc

  association [0..*] to I_AssetKeyFigureText as _Text on $projection.AssetAccountingKeyFigure = _Text.AssetAccountingKeyFigure

{
      @ObjectModel.text.association: '_Text'
  key faac_kfc.key_figure_code as AssetAccountingKeyFigure,

      _Text

}
```
