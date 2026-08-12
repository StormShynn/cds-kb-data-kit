---
name: I_BR_NFTRANSPORTEDVOLUME
description: "BR Nftransportedvolume"
app_component: FI-LOC-LO-BR
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
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - transport
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFTRANSPORTEDVOLUME

**BR Nftransportedvolume**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
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
| `BR_NotaFiscal` | ✓ | |  | `docnum` |  |  |
| `BR_NFTransptVolumesSequence` | ✓ | |  | `counter` |  |  |
| `BR_NFTransportedVolumeQtyVal` |  | |  | `cast(NFTransportedVolume.qvol as logbr_trans_vol_quan preserving type)` |  |  |
| `BR_NFTransportedVolumeType` |  | |  | `cast(NFTransportedVolume.esp as logbr_trans_vol_type preserving type)` |  |  |
| `BR_NFTransptVolumeTrademark` |  | |  | `cast(NFTransportedVolume.marca as logbr_trans_vol_trademark preserving type)` |  |  |
| `BR_NFTransportedVolumeID` |  | |  | `cast(NFTransportedVolume.nvol as logbr_trans_vol_number preserving type)` |  |  |
| `BR_NFTransptVolNetWeightUnit` |  | |  | `cast('KG' as msehi)` |  |  |
| `BR_NFTransptVolumeNetWeight` |  | |  | `cast(NFTransportedVolume.pesol as logbr_trans_vol_net preserving type)` |  |  |
| `BR_NFTransptVolGrossWgtUnit` |  | |  | `cast('KG' as msehi)` |  |  |
| `BR_NFTransptVolumeGrossWeight` |  | |  | `cast(NFTransportedVolume.pesob as logbr_trans_vol_gross preserving type)` |  |  |
| `BR_NFTransportedVolumeSeal` |  | |  | `nlacre` |  |  |
| `_BR_NFTransptVolNetWeightUnit` | | ✓ | | | | |
| `_BR_NFTransptVolGrossWgtUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFTransptVolNetWeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BR_NFTransptVolGrossWgtUnit` | `I_UnitOfMeasure` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFTRANSPVOL'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Brazil Nota Fiscal Transported Volume'
@VDM.viewType:#BASIC
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_NFTransportedVolume
  as select from j_1bnftransvol as NFTransportedVolume
  association [0..1] to I_UnitOfMeasure as _BR_NFTransptVolNetWeightUnit on $projection.BR_NFTransptVolNetWeightUnit = _BR_NFTransptVolNetWeightUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure as _BR_NFTransptVolGrossWgtUnit  on $projection.BR_NFTransptVolGrossWgtUnit = _BR_NFTransptVolGrossWgtUnit.UnitOfMeasure
  
{
  key NFTransportedVolume.docnum                                                   as BR_NotaFiscal,
  key NFTransportedVolume.counter                                                  as BR_NFTransptVolumesSequence,
      
      cast(NFTransportedVolume.qvol as logbr_trans_vol_quan preserving type)       as BR_NFTransportedVolumeQtyVal,
            
      cast(NFTransportedVolume.esp as logbr_trans_vol_type preserving type)        as BR_NFTransportedVolumeType,
      cast(NFTransportedVolume.marca as logbr_trans_vol_trademark preserving type) as BR_NFTransptVolumeTrademark,
      cast(NFTransportedVolume.nvol as logbr_trans_vol_number preserving type)     as BR_NFTransportedVolumeID,
      
      @Semantics.unitOfMeasure: true
      cast('KG' as msehi)                                                          as BR_NFTransptVolNetWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'BR_NFTransptVolNetWeightUnit'
      @DefaultAggregation: #NONE
      cast(NFTransportedVolume.pesol as logbr_trans_vol_net preserving type)       as BR_NFTransptVolumeNetWeight,
      
      @Semantics.unitOfMeasure: true
      cast('KG' as msehi)                                                          as BR_NFTransptVolGrossWgtUnit,
      @Semantics.quantity.unitOfMeasure: 'BR_NFTransptVolGrossWgtUnit'
      @DefaultAggregation: #NONE
      cast(NFTransportedVolume.pesob as logbr_trans_vol_gross preserving type)     as BR_NFTransptVolumeGrossWeight,
      
      NFTransportedVolume.nlacre                                                   as BR_NFTransportedVolumeSeal,
      
      _BR_NFTransptVolNetWeightUnit,
      _BR_NFTransptVolGrossWgtUnit
}
```
