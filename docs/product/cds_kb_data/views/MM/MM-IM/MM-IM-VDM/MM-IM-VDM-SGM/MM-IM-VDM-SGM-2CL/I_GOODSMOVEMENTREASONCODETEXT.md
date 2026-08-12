---
name: I_GOODSMOVEMENTREASONCODETEXT
description: "Goods MovementREASONCODETEXT"
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - text-view
  - text
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
---
# I_GOODSMOVEMENTREASONCODETEXT

**Goods MovementREASONCODETEXT**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `GoodsMovementType` | ✓ | |  | `bwart` |  |  |
| `GoodsMovementReasonCode` | ✓ | |  | `grund` |  |  |
| `GoodsMovementReasonName` |  | |  | `grtxt` |  |  |
| `_Language` | | ✓ | | | | |
| `_GoodsMovementType` | | ✓ | | | | |
| `_GoodsMovementReasonCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_GoodsMovementType` | `I_GoodsMovementType` | [0..1] |
| `_GoodsMovementReasonCode` | `I_GoodsMovementReasonCode` | [0..1] |

## Source Code

```abap
@Analytics: { technicalName: 'IGdsMvtRsnCdTxt',
              dataExtraction.enabled:true }

@EndUserText.label: 'Goods Movement Reason Code - Text'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'GoodsMovementReasonCode',
                usageType: { serviceQuality: #A,
                             dataClass: #CUSTOMIZING,
                             sizeCategory: #S },
                sapObjectNodeType.name: 'GoodsMovementReasonText',
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #SEARCHABLE_ENTITY,
                                        #SQL_DATA_SOURCE] }

@Search.searchable: true

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }
@AbapCatalog.entityBuffer.definitionAllowed: true
define view entity I_GoodsMovementReasonCodeText
  as select from t157e

  association [0..1] to I_Language                as _Language                on  $projection.Language = _Language.Language
  association [0..1] to I_GoodsMovementType       as _GoodsMovementType       on  $projection.GoodsMovementType = _GoodsMovementType.GoodsMovementType

  association [0..1] to I_GoodsMovementReasonCode as _GoodsMovementReasonCode on  $projection.GoodsMovementType       = _GoodsMovementReasonCode.GoodsMovementType
                                                                              and $projection.GoodsMovementReasonCode = _GoodsMovementReasonCode.GoodsMovementReasonCode
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key t157e.spras as Language,
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      @ObjectModel.text.element: ['GoodsMovementType']
  key t157e.bwart as GoodsMovementType,
      @ObjectModel.foreignKey.association: '_GoodsMovementReasonCode'
      @ObjectModel.text.element: ['GoodsMovementReasonName']
      @UI.textArrangement: #TEXT_FIRST
  key t157e.grund as GoodsMovementReasonCode,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      @EndUserText.label: 'Goods Movement Reason Text'
      t157e.grtxt as GoodsMovementReasonName,

      //Associations
      _Language,
      _GoodsMovementType,
      _GoodsMovementReasonCode
}
```
