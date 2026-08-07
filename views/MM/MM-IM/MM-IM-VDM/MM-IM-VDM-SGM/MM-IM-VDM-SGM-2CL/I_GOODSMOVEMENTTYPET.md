---
name: I_GOODSMOVEMENTTYPET
description: Goods MovementTYPET
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
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
# I_GOODSMOVEMENTTYPET

**Goods MovementTYPET**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `GoodsMovementType` | ✓ | |  | `bwart` |
| `Language` | ✓ | |  | `spras` |
| `GoodsMovementTypeName` |  | |  | `btext` |
| `_GoodsMovementType` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GoodsMovementType` | `I_GoodsMovementType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Type of Goods Movement - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                dataCategory: #TEXT,
                representativeKey: 'GoodsMovementType',
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                sapObjectNodeType.name: 'GoodsMovementTypeText',
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
              }

@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics: {
              dataExtraction:
                { enabled: true }
            }
@Metadata: {
             ignorePropagatedAnnotations: true
           }

define view entity I_GoodsMovementTypeT
  as select from t156ht
  association [0..1] to I_GoodsMovementType as _GoodsMovementType on $projection.GoodsMovementType = _GoodsMovementType.GoodsMovementType
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
  key bwart as GoodsMovementType,
      @Semantics.language: true
  key spras as Language,
      @Semantics.text: true
      btext as GoodsMovementTypeName,

      _GoodsMovementType,
      _Language
}
```
