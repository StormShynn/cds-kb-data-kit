---
name: I_GROUP5ASSETEVALUATIONKEYTEXT
description: "Group 5 Asset Evaluation Key - Text"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP5ASSETEVALUATIONKEYTEXT')/$value
semantic_en: "Group 5 Asset Evaluation Key - Text"
semantic_vi: "Group 5 Asset Evaluation Key - Text — CDS view giao diện dựa trên t087s."
keywords:
  - "group"
  - "asset"
  - "evaluation"
  - "key"
  - "text"
  - "group5"
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
# I_GROUP5ASSETEVALUATIONKEYTEXT

**Group 5 Asset Evaluation Key - Text**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP5ASSETEVALUATIONKEYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Group5AssetEvaluationKey` | ✓ | |  | `gdlgrp` | `CHAR(8)` | Evaluation Group 5 |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `Group5AssetEvaluationKeyName` |  | |  | `cast(t087s.gdlgrp_txt as faa_gdlgrptxt)` | `CHAR(50)` | Evaluation group:Short description 5 |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP5ASSETEVALUATIONKEYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP5ASSETEVALUATIONKEYTEXT')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IFIGR5ASTEVALKYT', preserveKey: true}
@EndUserText.label: 'Group 5 Asset Evaluation Key - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@ObjectModel: { representativeKey: 'Group5AssetEvaluationKey',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_Group5AssetEvaluationKeyText
  as select from t087s
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key t087s.gdlgrp                            as Group5AssetEvaluationKey,
      @Semantics.language
  key t087s.spras                             as Language,
      @Semantics.text: true
      cast(t087s.gdlgrp_txt as faa_gdlgrptxt) as Group5AssetEvaluationKeyName,

      _Language

}
```
