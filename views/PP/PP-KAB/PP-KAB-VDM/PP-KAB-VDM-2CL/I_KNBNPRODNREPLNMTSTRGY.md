---
name: I_KNBNPRODNREPLNMTSTRGY
description: Knbnprodnreplnmtstrgy
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KNBNPRODNREPLNMTSTRGY

**Knbnprodnreplnmtstrgy**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |
| `InHouseProductionReplnmtStrgy` | ✓ | |  | `pkste` |
| `KnbnCtrlCycInhProdnCtrlType` |  | |  | `pksae` |
| `OrderType` |  | |  | `auart` |
| `SignalLockingTimeInMinutes` |  | |  | `aussp` |
| `GoodsReceiptMovementType` |  | |  | `bwawe` |
| `KnbnInhProdnIsCrossPlant` |  | |  | `pkwzw` |
| `PostCnsmpnToCostCtrInhProdn` |  | |  | `cnscc` |
| `PostCnsmpnToCostCtrMvtType` |  | |  | `bwacc` |
| `KnbnReducingPlndOrdsForRptvMfg` |  | |  | `redst` |
| `KnbnReducnPeriodForPlndOrders` |  | |  | `redhz` |
| `KnbnPlndOrdCreationAfterCancel` |  | |  | `plgen` |
| `KanbanReuseStrgyForPlndOrds` |  | |  | `reusest` |
| `KanbanReuseHorizonForPlndOrds` |  | |  | `reusehz` |
| `UsageOfPackingInstructions` |  | |  | `vpack` |
| `KanbanCtrlCycPrintFormTemplate` |  | |  | `cc_print_form` |
| `KanbanCtnPrintFormTemplate` |  | |  | `kbform` |
| `CapIsConsdrdInCtrlCycCalc` |  | |  | `act_capa` |
| `KnbnSDSchedgAgrmtDelivCrtnType` |  | |  | `sddkz` |
| `_Text` | | ✓ | | |
| `_Plant` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_KnbnProdnReplnmtStrgyTxt` | [0..*] |
| `_Plant` | `I_Plant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKNBNPRODSTRAT'
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Control Cycle In-House Prod Strat'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL

@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'InHouseProductionReplnmtStrgy'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'InHouseProductionReplnmtStrgy'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true

@Metadata.ignorePropagatedAnnotations: true

@AbapCatalog.compiler.compareFilter: true
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions:true
define view I_KnbnProdnReplnmtStrgy
  as select from tpk01

  association [0..*] to I_KnbnProdnReplnmtStrgyTxt as _Text  on  $projection.InHouseProductionReplnmtStrgy = _Text.InHouseProductionReplnmtStrgy
                                                             and $projection.Plant                         = _Text.Plant
  association [0..1] to I_Plant                    as _Plant on  $projection.Plant = _Plant.Plant

{
      @ObjectModel.foreignKey.association: '_Plant'
  key werks         as Plant,
      @ObjectModel.text.association: '_Text'
  key pkste         as InHouseProductionReplnmtStrgy,
      pksae         as KnbnCtrlCycInhProdnCtrlType,
      auart         as OrderType,
      aussp         as SignalLockingTimeInMinutes,
      bwawe         as GoodsReceiptMovementType,
      pkwzw         as KnbnInhProdnIsCrossPlant,
      cnscc         as PostCnsmpnToCostCtrInhProdn,
      bwacc         as PostCnsmpnToCostCtrMvtType,
      redst         as KnbnReducingPlndOrdsForRptvMfg,
      redhz         as KnbnReducnPeriodForPlndOrders,
      plgen         as KnbnPlndOrdCreationAfterCancel,
      reusest       as KanbanReuseStrgyForPlndOrds,
      reusehz       as KanbanReuseHorizonForPlndOrds,
      vpack         as UsageOfPackingInstructions,
      cc_print_form as KanbanCtrlCycPrintFormTemplate,
      kbform        as KanbanCtnPrintFormTemplate,
      act_capa      as CapIsConsdrdInCtrlCycCalc,
      sddkz         as KnbnSDSchedgAgrmtDelivCrtnType,
      
      _Text,
      _Plant
}
```
