---
name: I_GOODSMOVEMENTREASONCODE
description: "Goods MovementREASONCODE"
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
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
---
# I_GOODSMOVEMENTREASONCODE

**Goods MovementREASONCODE**

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
| `GoodsMovementType` | ✓ | |  | `bwart` |  |  |
| `GoodsMovementReasonCode` | ✓ | |  | `grund` |  |  |
| `_GoodsMovementType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GoodsMovementType` | `I_GoodsMovementType` | [0..1] |
| `_Text` | `I_GoodsMovementReasonCodeText` | [0..*] |

## Source Code

```abap
@Analytics: { technicalName: 'IGdsMvtRsnCd',
              dataExtraction.enabled:true,
              dataCategory: #DIMENSION,
              internalName:#LOCAL }

@EndUserText.label: 'Goods Movement Reason Code'

@Consumption.ranked: true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'GoodsMovementReasonCode',
                usageType: { serviceQuality: #A,
                             dataClass: #CUSTOMIZING,
                             sizeCategory: #S },
                supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY,
                                        #SQL_DATA_SOURCE],
                sapObjectNodeType.name: 'GoodsMovementReason' }

@Search.searchable: true

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }
@AbapCatalog.entityBuffer.definitionAllowed: true
define view entity I_GoodsMovementReasonCode
  as select from t157d

  association [0..1] to I_GoodsMovementType           as _GoodsMovementType on  $projection.GoodsMovementType = _GoodsMovementType.GoodsMovementType

  association [0..*] to I_GoodsMovementReasonCodeText as _Text              on  $projection.GoodsMovementType       = _Text.GoodsMovementType
                                                                            and $projection.GoodsMovementReasonCode = _Text.GoodsMovementReasonCode
{
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
  key bwart as GoodsMovementType,
      @ObjectModel.text.association: '_Text'
  key grund as GoodsMovementReasonCode,

      //Associations
      _GoodsMovementType,
      _Text
}
```
