---
name: I_ASSETEVALUATIONKEYTEXT
description: "Asset Evaluation Key - Text"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETEVALUATIONKEYTEXT')/$value
semantic_en: "Asset Evaluation Key - Text"
semantic_vi: "Asset Evaluation Key - Text — CDS view giao diện dựa trên t087t."
keywords:
  - "asset"
  - "evaluation"
  - "key"
  - "text"
  - "group"
  - "language"
  - "name"
tags:
  - FI
  - component:FI-FIO-AA-ANA-2CL
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - interface-view
  - lob:finance
---
# I_ASSETEVALUATIONKEYTEXT

**Asset Evaluation Key - Text**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETEVALUATIONKEYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssetEvaluationGroup` | ✓ | |  | `ordnr` | `CHAR(1)` | Evaluation group number |
| `AssetEvaluationKey` | ✓ | |  | `ord4x` | `CHAR(4)` | Evaluation groups 1 - 4 |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `AssetEvaluationKeyName` |  | |  | `ordtx` | `CHAR(30)` | Evaluation group:Short description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETEVALUATIONKEYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETEVALUATIONKEYTEXT')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IFIASSETEVALKEYT', preserveKey: true}
@EndUserText.label: 'Asset Evaluation Key - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AssetEvaluationKey',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_AssetEvaluationKeyText
  as select from t087t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key t087t.ordnr as AssetEvaluationGroup,
  key t087t.ord4x as AssetEvaluationKey,

      @Semantics.language
  key t087t.spras as Language,

      @Semantics.text: true
      t087t.ordtx as AssetEvaluationKeyName,
      _Language

}
```
