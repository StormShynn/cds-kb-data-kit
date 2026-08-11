---
name: I_GROUP3ASSETEVALUATIONKEY
description: "Group 3 Asset Evaluation Key"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP3ASSETEVALUATIONKEY')/$value
semantic_en: "Group 3 Asset Evaluation Key"
semantic_vi: "Group 3 Asset Evaluation Key — CDS view giao diện dựa trên t087."
keywords:
  - "group"
  - "asset"
  - "evaluation"
  - "key"
  - "group3"
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
# I_GROUP3ASSETEVALUATIONKEY

**Group 3 Asset Evaluation Key**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP3ASSETEVALUATIONKEY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Group3AssetEvaluationKey` | ✓ | |  | `ord4x` | `CHAR(4)` | Evaluation groups 1 - 4 |
| `_Text` | | ✓ | | | | |
| `_Group3AssetEvaluationKeyText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AssetEvaluationKeyText` | [0..*] |
| `_Group3AssetEvaluationKeyText` | `I_Group3AssetEvaluationKeyText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP3ASSETEVALUATIONKEY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP3ASSETEVALUATIONKEY')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IFIASSETEVALKEY3', preserveKey: true, compiler.compareFilter:true}
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Group 3 Asset Evaluation Key'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'Group3AssetEvaluationKey',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_Group3AssetEvaluationKey
  as select from t087
  association [0..*] to I_AssetEvaluationKeyText       as _Text                         on  $projection.Group3AssetEvaluationKey = _Text.AssetEvaluationKey
                                                                                        and _Text.AssetEvaluationGroup           = '3'
  association [0..*] to I_Group3AssetEvaluationKeyText as _Group3AssetEvaluationKeyText on  $projection.Group3AssetEvaluationKey = _Group3AssetEvaluationKeyText.Group3AssetEvaluationKey
{
      @ObjectModel.text.association: '_Group3AssetEvaluationKeyText'
  key t087.ord4x as Group3AssetEvaluationKey,

      @Consumption.hidden
      _Text,
      _Group3AssetEvaluationKeyText
}
where
  t087.ordnr = '3'
```
