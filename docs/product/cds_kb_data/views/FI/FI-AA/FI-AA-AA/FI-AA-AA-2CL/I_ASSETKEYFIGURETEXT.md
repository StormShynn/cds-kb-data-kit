---
name: I_ASSETKEYFIGURETEXT
description: "This CDS view provides the prerequisites for answering the following business question: How many asset accounting key figures are defined?"
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURETEXT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: How many asset accounting key figures are defined?"
semantic_vi: "Asset Key Figure - Text — CDS view giao diện dựa trên faac_kfct."
keywords:
  - "asset"
  - "key"
  - "figure"
  - "text"
  - "language"
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
# I_ASSETKEYFIGURETEXT

**This CDS view provides the prerequisites for answering the following business question: How many asset accounting key figures are defined?**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `AssetAccountingKeyFigure` | ✓ | |  | `key_figure_code` | `CHAR(10)` | Key Figure for Asset Accounting |
| `AssetAccountingKeyFigureText` |  | |  | `cast ( faac_kfct.description as fis_ltext_kfct preserving type )` | `CHAR(70)` | Key Figure Code Name |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURETEXT')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IASSETKEYFIGURET', preserveKey: true}
@EndUserText.label: 'Asset Key Figure - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AssetAccountingKeyFigure',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #M,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_AssetKeyFigureText
  as select from faac_kfct
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language
  key faac_kfct.langu                                                  as Language,
  key faac_kfct.key_figure_code                                        as AssetAccountingKeyFigure,

      @Semantics.text: true
      cast ( faac_kfct.description as fis_ltext_kfct preserving type ) as AssetAccountingKeyFigureText,

      _Language
}
```
