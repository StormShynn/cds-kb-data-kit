---
name: I_GROUP2ASSETEVALUATIONKEY
description: "Group 2 Asset Evaluation Key"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP2ASSETEVALUATIONKEY')/$value
semantic_en: "Group 2 Asset Evaluation Key"
semantic_vi: "Group 2 Asset Evaluation Key — CDS view giao diện dựa trên t087."
keywords:
  - "group"
  - "asset"
  - "evaluation"
  - "key"
  - "group2"
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
# I_GROUP2ASSETEVALUATIONKEY

**Group 2 Asset Evaluation Key**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP2ASSETEVALUATIONKEY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Group2AssetEvaluationKey` | ✓ | |  | `ord4x` | `CHAR(4)` | Evaluation groups 1 - 4 |
| `_Text` | | ✓ | | | | |
| `_Group2AssetEvaluationKeyText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AssetEvaluationKeyText` | [0..*] |
| `_Group2AssetEvaluationKeyText` | `I_Group2AssetEvaluationKeyText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP2ASSETEVALUATIONKEY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUP2ASSETEVALUATIONKEY')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IFIASSETEVALKEY2', preserveKey: true, compiler.compareFilter:true}
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Group 2 Asset Evaluation Key'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'Group2AssetEvaluationKey',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_Group2AssetEvaluationKey
  as select from t087
  association [0..*] to I_AssetEvaluationKeyText       as _Text                         on  $projection.Group2AssetEvaluationKey = _Text.AssetEvaluationKey
                                                                                        and _Text.AssetEvaluationGroup           = '2'
  association [0..*] to I_Group2AssetEvaluationKeyText as _Group2AssetEvaluationKeyText on  $projection.Group2AssetEvaluationKey = _Group2AssetEvaluationKeyText.Group2AssetEvaluationKey
{
      @ObjectModel.text.association: '_Group2AssetEvaluationKeyText'
  key t087.ord4x as Group2AssetEvaluationKey,

      @Consumption.hidden
      _Text,
      _Group2AssetEvaluationKeyText
}
where
  t087.ordnr = '2'
```
