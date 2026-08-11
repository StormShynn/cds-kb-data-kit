---
name: I_GROUP4ASSETEVALUATIONKEY
description: "Group 4 Asset Evaluation Key"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP4ASSETEVALUATIONKEY')/$value
semantic_en: "Group 4 Asset Evaluation Key"
semantic_vi: "Group 4 Asset Evaluation Key — CDS view giao diện dựa trên t087."
keywords:
  - "group"
  - "asset"
  - "evaluation"
  - "key"
  - "group4"
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
# I_GROUP4ASSETEVALUATIONKEY

**Group 4 Asset Evaluation Key**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP4ASSETEVALUATIONKEY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Group4AssetEvaluationKey` | ✓ | |  | `ord4x` | `CHAR(4)` | Evaluation groups 1 - 4 |
| `_Text` | | ✓ | | | | |
| `_Group4AssetEvaluationKeyText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AssetEvaluationKeyText` | [0..*] |
| `_Group4AssetEvaluationKeyText` | `I_Group4AssetEvaluationKeyText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP4ASSETEVALUATIONKEY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP4ASSETEVALUATIONKEY')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IFIASSETEVALKEY4', preserveKey: true, compiler.compareFilter:true}
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Group 4 Asset Evaluation Key'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'Group4AssetEvaluationKey',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_Group4AssetEvaluationKey
  as select from t087
  association [0..*] to I_AssetEvaluationKeyText       as _Text                         on  $projection.Group4AssetEvaluationKey = _Text.AssetEvaluationKey
                                                                                        and _Text.AssetEvaluationGroup           = '4'
  association [0..*] to I_Group4AssetEvaluationKeyText as _Group4AssetEvaluationKeyText on  $projection.Group4AssetEvaluationKey = _Group4AssetEvaluationKeyText.Group4AssetEvaluationKey
{
      @ObjectModel.text.association: '_Group4AssetEvaluationKeyText'
  key t087.ord4x as Group4AssetEvaluationKey,

      @Consumption.hidden
      _Text,
      _Group4AssetEvaluationKeyText
}
where
  t087.ordnr = '4'
```
