---
name: I_QUALITYLEVEL
description: "Qualitylevel"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_QUALITYLEVEL

**Qualitylevel**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |  |  |
| `Material` | ✓ | |  | `matnr` |  |  |
| `BillOfOperationsType` | ✓ | |  | `plnty` |  |  |
| `BillOfOperationsGroup` | ✓ | |  | `plnnr` |  |  |
| `BillOfOperationsVariant` | ✓ | |  | `plnal` |  |  |
| `BOOOperationInternalID` | ✓ | |  | `plnkn` |  |  |
| `Sequence` | ✓ | |  | `plnfl` |  |  |
| `QualityLevelInternalID` | ✓ | |  | `zaehlerql` |  |  |
| `Supplier` |  | |  | `lifnr` |  |  |
| `Manufacturer` |  | |  | `hersteller` |  |  |
| `Customer` |  | |  | `kunnr` |  |  |
| `InspectionLotType` |  | |  | `pruefart` |  |  |
| `InspectionOperation` |  | |  | `cast( vornr as qvornr_rap preserving type )` |  |  |
| `InspectionCharacteristic` |  | |  | `merknr` |  |  |
| `QltyLvlIndirectlyChangedBy` |  | |  | `aendlosa` |  |  |
| `QltyLvlManuallyChangedBy` |  | |  | `aendlosm` |  |  |
| `QltyLvlIndirectlyChangedOn` |  | |  | `aedatlosa` |  |  |
| `QltyLvlManuallyChangedOn` |  | |  | `aedatlosm` |  |  |
| `InspectionLot` |  | |  | `cast( prueflos as vdm_qplosql preserving type )` |  |  |
| `InspLotUsageDecisionValuation` |  | |  | `bwlos` |  |  |
| `InspLotUsgeDcsnDynValuation` |  | |  | `bwlosdyn` |  |  |
| `SamplingProcedure` |  | |  | `stichprver` |  |  |
| `InspLotDynamicRule` |  | |  | `cast( dynregel as vdm_qdynregel preserving type )` |  |  |
| `QltyLevelNextDynRuleStage` |  | |  | `prstufenae` |  |  |
| `InspLotsWithoutUsageDecision` |  | |  | `anzloseove` |  |  |
| `InspLotsSinceStageChg` |  | |  | `anzpraen` |  |  |
| `RjctdInspLotsSinceStgeChg` |  | |  | `anznioaen` |  |  |
| `InspResultDynModifValuation` |  | |  | `dbewertg` |  |  |
| `InspectionValuationResult` |  | |  | `mbewertg` |  |  |
| `QualityLevelLastOpenInspLot` |  | |  | `plosove` |  |  |
| `QualityLevelLastInspectionOn` |  | |  | `datlpruef` |  |  |
| `QltyLevelCanceledInspections` |  | |  | `anzprstop` |  |  |
| `QualityLevelDeletionOn` |  | |  | `deldatum` |  |  |
| `QualityLevelResetOn` |  | |  | `resdatum` |  |  |
| `ChangedDateTime` |  | |  | `case qdql.changeddatetime when 0 then cast( '19000101010101' as tzntstmps ) else qdql.changeddatetime end` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Manufacturer` | | ✓ | | | | |
| `_BOOCharacteristic` | | ✓ | | | | |
| `_NextInspLotDynRuleStage` | | ✓ | | | | |
| `_InspLotDynamicRule` | | ✓ | | | | |
| `_InspectionLot` | | ✓ | | | | |
| `_QualityLevelLastOpenInspLot` | | ✓ | | | | |
| `_ProductPlantQtManagement` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BOOOperationInternalID` | | ✓ | | | | |
| `_BillOfOperations` | | ✓ | | | | |
| `_BillOfOperationsOperation` | | ✓ | | | | |
| `_BillOfOperationsSequence` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Material` | `I_Material` | [1..1] |
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_Manufacturer` | `I_Supplier` | [0..1] |
| `_BOOCharacteristic` | `I_BOOCharacteristic` | [0..1] |
| `_NextInspLotDynRuleStage` | `I_InspLotDynRuleStage` | [1..1] |
| `_InspLotDynamicRule` | `I_InspLotDynamicRule` | [1..1] |
| `_InspectionLot` | `I_InspectionLot` | [1..1] |
| `_QualityLevelLastOpenInspLot` | `I_InspectionLot` | [1..1] |
| `_ProductPlantQtManagement` | `I_Productplantqtmanagement` | [1..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [0..1] |
| `_BOOOperationInternalID` | `I_BOOOperationInternalID` | [0..1] |
| `_BillOfOperations` | `I_BillOfOperations` | [0..1] |
| `_BillOfOperationsOperation` | `I_BillOfOperationsOperation` | [0..1] |
| `_BillOfOperationsSequence` | `I_BillOfOperationsSequence` | [0..1] |
| `_Extension` | `E_QualityLevel` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Quality Level'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'IQLTYLVL'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #M,
    serviceQuality: #A
}
//@ObjectModel.representativeKey: 'QualityLevelInternalID'
@ObjectModel.sapObjectNodeType.name: 'QualityLevel'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations: true
define view I_QualityLevel
  as select from qdql
  //Associations to views of other applications
  association [1..1] to I_Plant                as _Plant                   on  $projection.Plant = _Plant.Plant
  association [1..1] to I_Material             as _Material                on  $projection.Material = _Material.Material
  association [1..1] to I_BillOfOperationsType as _BillOfOperationsType    on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
  association [0..1] to I_Supplier             as _Supplier                on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_Customer             as _Customer                on  $projection.Customer = _Customer.Customer
  association [0..1] to I_Supplier             as _Manufacturer            on  $projection.Manufacturer = _Manufacturer.Supplier

  //Associations to QM Master data
  association [0..1] to I_BOOCharacteristic    as _BOOCharacteristic       on  $projection.BillOfOperationsType         = _BOOCharacteristic.BillOfOperationsType
                                                                           and $projection.BillOfOperationsGroup        = _BOOCharacteristic.BillOfOperationsGroup
                                                                           and $projection.BOOOperationInternalID       = _BOOCharacteristic.BOOOperationInternalID
                                                                           and $projection.InspectionCharacteristic     = _BOOCharacteristic.BOOCharacteristic
//                                                                           and _BOOCharacteristic.BOOCharacteristicType = ' '
  association [1..1] to I_InspLotDynRuleStage  as _NextInspLotDynRuleStage on  $projection.InspLotDynamicRule        = _NextInspLotDynRuleStage.InspLotDynamicRule
                                                                           and $projection.QltyLevelNextDynRuleStage = _NextInspLotDynRuleStage.InspLotDynRuleStage
  //Association to QM Documents
  association [1..1] to I_InspLotDynamicRule   as _InspLotDynamicRule      on  $projection.InspLotDynamicRule = _InspLotDynamicRule.InspLotDynamicRule
  association [1..1] to I_InspectionLot        as _InspectionLot           on  $projection.InspectionLot = _InspectionLot.InspectionLot
  association [1..1] to I_InspectionLot        as _QualityLevelLastOpenInspLot on $projection.QualityLevelLastOpenInspLot = _QualityLevelLastOpenInspLot.InspectionLot

  association [1..1] to I_Productplantqtmanagement as _ProductPlantQtManagement on  $projection.Material = _ProductPlantQtManagement.Product
                                                                                and $projection.Plant    = _ProductPlantQtManagement.Plant

  association [0..1] to I_BillOfOperationsGroup as _BillOfOperationsGroup on  $projection.BillOfOperationsType  = _BillOfOperationsGroup.BillOfOperationsType
                                                                          and $projection.BillOfOperationsGroup = _BillOfOperationsGroup.BillOfOperationsGroup
 
  association [0..1] to I_BOOOperationInternalID      as _BOOOperationInternalID        on  $projection.BillOfOperationsType   = _BOOOperationInternalID.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup  = _BOOOperationInternalID.BillOfOperationsGroup
                                                                                        and $projection.BOOOperationInternalID = _BOOOperationInternalID.BOOOperationInternalID
 
  association [0..1] to I_BillOfOperations as _BillOfOperations on  $projection.BillOfOperationsType   = _BillOfOperations.BillOfOperationsType
                                                                and $projection.BillOfOperationsGroup  = _BillOfOperations.BillOfOperationsGroup
                                                                and $projection.BillOfOperationsVariant  = _BillOfOperations.BillOfOperationsVariant
 
 association [0..1] to I_BillOfOperationsOperation as _BillOfOperationsOperation  on  $projection.BillOfOperationsType = _BillOfOperationsOperation.BillOfOperationsType
                                                                                  and $projection.BillOfOperationsGroup = _BillOfOperationsOperation.BillOfOperationsGroup
                                                                                  and $projection.BillOfOperationsVariant = _BillOfOperationsOperation.BillOfOperationsVariant
                                                                                  and $projection.BOOOperationInternalID = _BillOfOperationsOperation.BOOOperationInternalID
                                                                                  and $projection.Sequence = _BillOfOperationsOperation.BillOfOperationsSequence
 
 association [0..1] to I_BillOfOperationsSequence     as _BillOfOperationsSequence     on  $projection.BillOfOperationsType     = _BillOfOperationsSequence.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup    = _BillOfOperationsSequence.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperationsVariant  = _BillOfOperationsSequence.BillOfOperationsVariant
                                                                                        and $projection.Sequence = _BillOfOperationsSequence.BillOfOperationsSequence
 
 
 //Extension
  association [1..1] to E_QualityLevel         as _Extension                  on  $projection.Plant = _Extension.Plant
                                                                              and $projection.Material = _Extension.Material 
                                                                              and $projection.BillOfOperationsType = _Extension.BillOfOperationsType
                                                                              and $projection.BillOfOperationsGroup = _Extension.BillOfOperationsGroup
                                                                              and $projection.BillOfOperationsVariant = _Extension.BillOfOperationsVariant
                                                                              and $projection.BOOOperationInternalID = _Extension.BOOOperationInternalID
                                                                              and $projection.Sequence = _Extension.Sequence
                                                                              and $projection.QualityLevelInternalID = _Extension.QualityLevelInternalID
                                                                              
{
      @ObjectModel.foreignKey.association: '_Plant'
  key werks                                            as Plant,
      @ObjectModel.foreignKey.association: '_Material'
  key matnr                                            as Material,
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key plnty                                            as BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key plnnr                                            as BillOfOperationsGroup,
      @ObjectModel.foreignKey.association: '_BillOfOperations'
  key plnal                                            as BillOfOperationsVariant,
      @ObjectModel.foreignKey.association: '_BOOOperationInternalID'
  key plnkn                                            as BOOOperationInternalID,
      @ObjectModel.foreignKey.association: '_BillOfOperationsSequence'
  key plnfl                                            as Sequence,
  key zaehlerql                                        as QualityLevelInternalID,
      @ObjectModel.foreignKey.association: '_Supplier'
      lifnr                                            as Supplier,
      @ObjectModel.foreignKey.association: '_Manufacturer'
      hersteller                                       as Manufacturer,
      @ObjectModel.foreignKey.association: '_Customer'
      kunnr                                            as Customer,
      pruefart                                         as InspectionLotType,
      cast( vornr as qvornr_rap preserving type )      as InspectionOperation,
      merknr                                           as InspectionCharacteristic,
      aendlosa                                         as QltyLvlIndirectlyChangedBy,
      aendlosm                                         as QltyLvlManuallyChangedBy,
      aedatlosa                                        as QltyLvlIndirectlyChangedOn,
      aedatlosm                                        as QltyLvlManuallyChangedOn,
      @ObjectModel.foreignKey.association: '_InspectionLot'
      cast( prueflos as vdm_qplosql preserving type )  as InspectionLot,
      bwlos                                            as InspLotUsageDecisionValuation,
      bwlosdyn                                         as InspLotUsgeDcsnDynValuation,
      stichprver                                       as SamplingProcedure,
      @ObjectModel.foreignKey.association: '_InspLotDynamicRule'
      cast( dynregel as vdm_qdynregel preserving type ) as InspLotDynamicRule,
      @ObjectModel.foreignKey.association: '_NextInspLotDynRuleStage'
      prstufenae                                       as QltyLevelNextDynRuleStage,
      anzloseove                                       as InspLotsWithoutUsageDecision,
      anzpraen                                         as InspLotsSinceStageChg,
      anznioaen                                        as RjctdInspLotsSinceStgeChg,
      dbewertg                                         as InspResultDynModifValuation,
      mbewertg                                         as InspectionValuationResult,
      @ObjectModel.foreignKey.association: '_QualityLevelLastOpenInspLot'
      plosove                                          as QualityLevelLastOpenInspLot,
      datlpruef                                        as QualityLevelLastInspectionOn,
      anzprstop                                        as QltyLevelCanceledInspections,
      deldatum                                         as QualityLevelDeletionOn,
      resdatum                                         as QualityLevelResetOn,
      case qdql.changeddatetime
        when 0 then cast( '19000101010101' as tzntstmps )
        else qdql.changeddatetime end                  as ChangedDateTime,

      //Associations
      _Plant,
      _Material,
      _BillOfOperationsType,
      _BillOfOperationsGroup,
      _BillOfOperations,
      _BOOOperationInternalID,
      _BillOfOperationsSequence,
      _BillOfOperationsOperation,
      _Supplier,
      _Customer,
      _BOOCharacteristic,
      _NextInspLotDynRuleStage,
      _InspLotDynamicRule,
      _InspectionLot,
      _Manufacturer,
      _QualityLevelLastOpenInspLot,
      _ProductPlantQtManagement

}
```
