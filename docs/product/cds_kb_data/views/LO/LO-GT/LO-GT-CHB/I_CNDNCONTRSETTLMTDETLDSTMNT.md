---
name: I_CNDNCONTRSETTLMTDETLDSTMNT
description: "Cndncontrsettlmtdetldstmnt"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-GT
  - LO-GT-CHB
  - interface-view
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CNDNCONTRSETTLMTDETLDSTMNT

**Cndncontrsettlmtdetldstmnt**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionContract` | ✓ | |  |  |  |  |
| `SettlmtDoc` | ✓ | |  |  |  |  |
| `SettlmtDocItem` | ✓ | |  |  |  |  |
| `SetldBusVolDocCategory` | ✓ | |  |  |  |  |
| `SetldBusVolDocKey1` | ✓ | |  |  |  |  |
| `SetldBusVolDocKey2` | ✓ | |  |  |  |  |
| `SetldBusVolDocKey3` | ✓ | |  |  |  |  |
| `SetldBusVolDocItem` | ✓ | |  |  |  |  |
| `BusVolSelDteForSettlmt` |  | |  |  |  |  |
| `SettledBusVolQty` |  | |  |  |  |  |
| `SettledBusVolQtyUnit` |  | |  |  |  |  |
| `SettledBusVolAmount1` |  | |  |  |  |  |
| `SettledBusVolAmount2` |  | |  |  |  |  |
| `SettledBusVolAmount3` |  | |  |  |  |  |
| `SettledBusVolAmount4` |  | |  |  |  |  |
| `SettledBusVolNetWeight` |  | |  |  |  |  |
| `SettledBusVolGrossWeight` |  | |  |  |  |  |
| `SettledBusVolWeightUnit` |  | |  |  |  |  |
| `SettledBusVolVolume` |  | |  |  |  |  |
| `SettledBusVolVolumeUnit` |  | |  |  |  |  |
| `SettledBusVolPointsQty` |  | |  |  |  |  |
| `SettledBusVolPointsQtyUnit` |  | |  |  |  |  |
| `SettlmtDocType` |  | |  |  |  |  |
| `BusVolDocCurrency` |  | |  |  |  |  |
| `_SettlmtDoc` | | ✓ | | | | |
| `_SettlmtDocItem` | | ✓ | | | | |
| `_ConditionContract` | | ✓ | | | | |
| `_SetldBusVolDocCategory` | | ✓ | | | | |
| `_SettledBusVolQtyUnit` | | ✓ | | | | |
| `_SettledBusVolWeightUnit` | | ✓ | | | | |
| `_SettledBusVolVolumeUnit` | | ✓ | | | | |
| `_SettledBusVolPointsQtyUnit` | | ✓ | | | | |
| `_BusVolDocCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtDoc` | `I_SettlmtDoc` | [0..1] |
| `_SettlmtDocItem` | `I_SettlmtDocItem` | [0..1] |
| `_ConditionContract` | `I_ConditionContract` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Cndn Contr Settlmt Detailed Statement'
@AccessControl: { 
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   modelingPattern: #NONE,
   supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XXL
   }
}
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: false
}

define view entity I_CndnContrSettlmtDetldStmnt
  as select from R_CndnContrSettlmtDetldStmnt

  association [0..1] to I_SettlmtDoc        as _SettlmtDoc        on  $projection.SettlmtDoc = _SettlmtDoc.SettlmtDoc
  association [0..1] to I_SettlmtDocItem    as _SettlmtDocItem    on  $projection.SettlmtDoc     = _SettlmtDocItem.SettlmtDoc
                                                                  and $projection.SettlmtDocItem = _SettlmtDocItem.SettlmtDocItem
  association [0..1] to I_ConditionContract as _ConditionContract on  $projection.ConditionContract = _ConditionContract.ConditionContract
{
      @ObjectModel.foreignKey.association: '_ConditionContract'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ConditionContractStdVH', element: 'ConditionContract' } }]
      }
  key ConditionContract,
      @ObjectModel.foreignKey.association: '_SettlmtDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocStdVH', element: 'SettlmtDoc' } }]
      }
  key SettlmtDoc,
      @ObjectModel.foreignKey.association: '_SettlmtDocItem'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocItemStdVH', element: 'SettlmtDocItem' } }]
      }
  key SettlmtDocItem,
      @ObjectModel.foreignKey.association: '_SetldBusVolDocCategory'
  key SetldBusVolDocCategory,
  key SetldBusVolDocKey1,
  key SetldBusVolDocKey2,
  key SetldBusVolDocKey3,
  key SetldBusVolDocItem,
      BusVolSelDteForSettlmt,
      @Semantics.quantity.unitOfMeasure: 'SettledBusVolQtyUnit'
      SettledBusVolQty,
      @ObjectModel.foreignKey.association: '_SettledBusVolQtyUnit'
      SettledBusVolQtyUnit,
      @Semantics.amount.currencyCode: 'BusVolDocCurrency'
      SettledBusVolAmount1,
      @Semantics.amount.currencyCode: 'BusVolDocCurrency'
      SettledBusVolAmount2,
      @Semantics.amount.currencyCode: 'BusVolDocCurrency'
      SettledBusVolAmount3,
      @Semantics.amount.currencyCode: 'BusVolDocCurrency'
      SettledBusVolAmount4,
      @Semantics.quantity.unitOfMeasure: 'SettledBusVolWeightUnit'
      SettledBusVolNetWeight,
      @Semantics.quantity.unitOfMeasure: 'SettledBusVolWeightUnit'
      SettledBusVolGrossWeight,
      @ObjectModel.foreignKey.association: '_SettledBusVolWeightUnit'
      SettledBusVolWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'SettledBusVolVolumeUnit'
      SettledBusVolVolume,
      @ObjectModel.foreignKey.association: '_SettledBusVolVolumeUnit'
      SettledBusVolVolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'SettledBusVolPointsQtyUnit'
      SettledBusVolPointsQty,
      @ObjectModel.foreignKey.association: '_SettledBusVolPointsQtyUnit'
      SettledBusVolPointsQtyUnit,
      SettlmtDocType,
      @ObjectModel.foreignKey.association: '_BusVolDocCurrency'
      BusVolDocCurrency,

      /* Associations */
      _SettlmtDoc,
      _SettlmtDocItem,
      _ConditionContract,
      _SetldBusVolDocCategory,
      _SettledBusVolQtyUnit,
      _SettledBusVolWeightUnit,
      _SettledBusVolVolumeUnit,
      _SettledBusVolPointsQtyUnit,
      _BusVolDocCurrency

}
```
