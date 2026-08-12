---
name: I_GOODSMOVEMENTREASONCODE
description: "Goods MovementREASONCODE"
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
