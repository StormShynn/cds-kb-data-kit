---
name: I_GOODSMOVEMENTTYPE
description: Goods MovementTYPE
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
# I_GOODSMOVEMENTTYPE

**Goods MovementTYPE**

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
| `IsReversalMovementType` |  | |  | `xstbw` |  |  |
| `DebitCreditCode` |  | |  | `shkzg` |  |  |
| `ResvnAcctAssgmtCategory` |  | |  | `rstyp` |  |  |
| `BasicMovementTypeReference` |  | |  | `bustr` |  |  |
| `SourceGoodsMovementType` |  | |  | `mvt_source` |  |  |
| `_Text` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_ResvnAcctAssgmtCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_GoodsMovementTypeT` | [0..*] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_ResvnAcctAssgmtCategory` | `I_ResvnAcctAssgmtCategory` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Goods Movement Type'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                representativeKey: 'GoodsMovementType',
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
                sapObjectNodeType.name: 'GoodsMovementType'
              }
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics: {
              dataCategory: #DIMENSION,
              dataExtraction:
                { enabled: true },
              technicalName: 'IGDSMVTTYPE'
            }
@Metadata: {
             ignorePropagatedAnnotations: true
           }

define view entity I_GoodsMovementType
  as select from t156
  association [0..*] to I_GoodsMovementTypeT      as _Text                    on $projection.GoodsMovementType = _Text.GoodsMovementType
  association [0..1] to I_DebitCreditCode         as _DebitCreditCode         on $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode
  association [0..1] to I_ResvnAcctAssgmtCategory as _ResvnAcctAssgmtCategory on $projection.ResvnAcctAssgmtCategory = _ResvnAcctAssgmtCategory.ResvnAcctAssgmtCategory
{
      @ObjectModel.text.association: '_Text'
  key bwart      as GoodsMovementType,
      xstbw      as IsReversalMovementType,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      shkzg      as DebitCreditCode,
      @ObjectModel.foreignKey.association: '_ResvnAcctAssgmtCategory'
      rstyp      as ResvnAcctAssgmtCategory,
      bustr      as BasicMovementTypeReference,
      mvt_source as SourceGoodsMovementType,

      _Text,
      _DebitCreditCode,
      _ResvnAcctAssgmtCategory
}
```
