---
name: I_GROUP1ASSETEVALUATIONKEYTEXT
description: "Group 1 Asset Evaluation Key - Text"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP1ASSETEVALUATIONKEYTEXT')/$value
semantic_en: "Group 1 Asset Evaluation Key - Text"
semantic_vi: "Group 1 Asset Evaluation Key - Text — CDS view giao diện dựa trên t087t."
keywords:
  - "group"
  - "asset"
  - "evaluation"
  - "key"
  - "text"
  - "group1"
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
# I_GROUP1ASSETEVALUATIONKEYTEXT

**Group 1 Asset Evaluation Key - Text**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP1ASSETEVALUATIONKEYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Group1AssetEvaluationKey` | ✓ | |  | `ord4x` | `CHAR(4)` | Evaluation groups 1 - 4 |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `AssetEvaluationKeyName` |  | |  | `ordtx` | `CHAR(30)` | Evaluation group:Short description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP1ASSETEVALUATIONKEYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP1ASSETEVALUATIONKEYTEXT')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IFIGR1ASTEVALKYT', preserveKey: true, compiler.compareFilter:true}
@EndUserText.label: 'Group 1 Asset Evaluation Key - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'Group1AssetEvaluationKey',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_Group1AssetEvaluationKeyText
  as select from t087t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key t087t.ord4x as Group1AssetEvaluationKey,

      @Semantics.language
  key t087t.spras as Language,

      @Semantics.text: true
      t087t.ordtx as AssetEvaluationKeyName,
      _Language
}
where
  t087t.ordnr = '1'
```
