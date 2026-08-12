---
name: I_GROUP4ASSETEVALUATIONKEY
description: "Group 4 Asset Evaluation Key"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
