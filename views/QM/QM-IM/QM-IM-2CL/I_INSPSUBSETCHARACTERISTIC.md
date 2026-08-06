---
name: I_INSPSUBSETCHARACTERISTIC
description: Inspsubsetcharacteristic
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
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
# I_INSPSUBSETCHARACTERISTIC

**Inspsubsetcharacteristic**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InspectionLot` | `prueflos` |
| key `InspPlanOperationInternalID` | `vorglfnr` |
| key `InspectionCharacteristic` | `merknr` |
| key `InspectionSubsetInternalID` | `probenr` |
| `InspectionCharacteristicStatus` | `qasv.satzstatus` |
| `QualityControlChart` | `qasv.qrknr` |
| `InspSampleAcceptanceNumber` | `qasv.annahmez` |
| `InspSampleRejectionNumber` | `qasv.rueckwez` |
| `InspSampleHasAcceptanceFactor` | `qasv.kfaktorni` |
| `InspSampleAcceptanceFactor` | `qasv.kfaktor` |
| `DefectFractionEstimationProced` | `qasv.antverf` |
| `InspSampleValuationRule` | `qasv.bewregel` |
| `BOOCharcMatlToSampleUnitRate` | `qasv.fakplanme` |
| `BOOCharcSampleToMatlUnitRate` | `qasv.fakprobme` |
| `InspectionSampleSize` | `qasv.stiproumf` |
| `InspCharacteristicSampleUnit` | `qasv.probemgeh` |
| `InspSpecSampleQuantityFactor` | `qasv.probmgfak` |
| `InspectionSampleQuantity` | `qasv.pruefumf` |
| `InspectionLotSampleUnit` | `qasv.mengeneinh` |
| `InspLotDynRuleStage` | `qasv.prstufe` |
| `InspectionSeverity` | `qasv.prschaerfe` |
| `InspSubsetCharcCreationDate` | `qasv.erstelldat` |
| `_InspectionLot` | *Association* |
| `_InspectionOperation` | *Association* |
| `_InspectionSubset` | *Association* |
| `_InspectionCharacteristic` | *Association* |
| `_InspSubsetResult` | *Association* |
| `_InspectionResultValue` | *Association* |
| `_InspCharacteristicStatus` | *Association* |
| `_InspectionSeverity` | *Association* |
| `_InspCharcSampleUnit` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLot` | `I_InspectionLot` | [1..1] |
| `_InspectionOperation` | `I_InspectionOperation` | [1..1] |
| `_InspectionSubset` | `I_InspectionSubset` | [1..1] |
| `_InspectionCharacteristic` | `I_InspectionCharacteristic` | [1..1] |
| `_InspSubsetResult` | `I_InspSubsetResult` | [0..1] |
| `_InspectionResultValue` | `I_InspectionResultValue` | [0..*] |
| `_InspCharacteristicStatus` | `I_InspectionResultStatus` | [0..1] |
| `_InspectionSeverity` | `I_InspectionSeverity` | [0..1] |
| `_InspCharcSampleUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Extension` | `E_InspSubsetCharacteristic` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPSUBSETCHAR'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Inspection Charc for an Inspection Point'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel: {
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #B
    },
    representativeKey: 'InspectionSubsetInternalID'
}
@Metadata.ignorePropagatedAnnotations: true

define view I_InspSubsetCharacteristic
  as select from qasv
  association [1..1] to I_InspectionLot            as _InspectionLot            on  $projection.InspectionLot = _InspectionLot.InspectionLot
  association [1..1] to I_InspectionOperation      as _InspectionOperation      on  $projection.InspectionLot               = _InspectionOperation.InspectionLot
                                                                                and $projection.InspPlanOperationInternalID = _InspectionOperation.InspPlanOperationInternalID
  association [1..1] to I_InspectionSubset         as _InspectionSubset         on  $projection.InspectionLot               = _InspectionSubset.InspectionLot
                                                                                and $projection.InspPlanOperationInternalID = _InspectionSubset.InspPlanOperationInternalID
                                                                                and $projection.InspectionSubsetInternalID  = _InspectionSubset.InspectionSubsetInternalID
  association [1..1] to I_InspectionCharacteristic as _InspectionCharacteristic on  $projection.InspectionLot               = _InspectionCharacteristic.InspectionLot
                                                                                and $projection.InspPlanOperationInternalID = _InspectionCharacteristic.InspPlanOperationInternalID
                                                                                and $projection.InspectionCharacteristic    = _InspectionCharacteristic.InspectionCharacteristic
  association [0..1] to I_InspSubsetResult         as _InspSubsetResult         on  $projection.InspectionLot               = _InspSubsetResult.InspectionLot
                                                                                and $projection.InspPlanOperationInternalID = _InspSubsetResult.InspPlanOperationInternalID
                                                                                and $projection.InspectionSubsetInternalID  = _InspSubsetResult.InspectionSubsetInternalID
                                                                                and $projection.InspectionCharacteristic    = _InspSubsetResult.InspectionCharacteristic
  association [0..*] to I_InspectionResultValue    as _InspectionResultValue    on  $projection.InspectionLot               = _InspectionResultValue.InspectionLot
                                                                                and $projection.InspPlanOperationInternalID = _InspectionResultValue.InspPlanOperationInternalID
                                                                                and $projection.InspectionSubsetInternalID  = _InspectionResultValue.InspectionSubsetInternalID
                                                                                and $projection.InspectionCharacteristic    = _InspectionResultValue.InspectionCharacteristic
  association [0..1] to I_InspectionResultStatus   as _InspCharacteristicStatus on  $projection.InspectionCharacteristicStatus = _InspCharacteristicStatus.InspectionResultStatus
  association [0..1] to I_InspectionSeverity       as _InspectionSeverity       on  $projection.InspectionSeverity = _InspectionSeverity.InspectionSeverity
  association [0..1] to I_UnitOfMeasure            as _InspCharcSampleUnit      on  $projection.InspCharacteristicSampleUnit = _InspCharcSampleUnit.UnitOfMeasure
  //Extension
  association [1..1] to E_InspSubsetCharacteristic as _Extension                on  $projection.InspectionLot               = _Extension.InspectionLot
                                                                                and $projection.InspPlanOperationInternalID = _Extension.InspPlanOperationInternalID
                                                                                and $projection.InspectionCharacteristic    = _Extension.InspectionCharacteristic
                                                                                and $projection.InspectionSubsetInternalID  = _Extension.InspectionSubsetInternalID
{
      @ObjectModel.foreignKey.association: '_InspectionLot'
  key prueflos        as InspectionLot,
      @ObjectModel.foreignKey.association: '_InspectionOperation'
  key vorglfnr        as InspPlanOperationInternalID,
      @ObjectModel.foreignKey.association: '_InspectionCharacteristic'
  key merknr          as InspectionCharacteristic,
  key probenr         as InspectionSubsetInternalID,
      qasv.satzstatus as InspectionCharacteristicStatus,
      qasv.qrknr      as QualityControlChart,
      qasv.annahmez   as InspSampleAcceptanceNumber,
      qasv.rueckwez   as InspSampleRejectionNumber,
      @Semantics.booleanIndicator
      qasv.kfaktorni  as InspSampleHasAcceptanceFactor,
      qasv.kfaktor    as InspSampleAcceptanceFactor,
      qasv.antverf    as DefectFractionEstimationProced,
      qasv.bewregel   as InspSampleValuationRule,
      qasv.fakplanme  as BOOCharcMatlToSampleUnitRate,
      qasv.fakprobme  as BOOCharcSampleToMatlUnitRate,
      qasv.stiproumf  as InspectionSampleSize,
      @ObjectModel.foreignKey.association: '_InspCharcSampleUnit'
      @Semantics.unitOfMeasure: true
      qasv.probemgeh  as InspCharacteristicSampleUnit,
      qasv.probmgfak  as InspSpecSampleQuantityFactor,
      @Semantics.quantity.unitOfMeasure: 'InspCharacteristicSampleUnit'      
      qasv.pruefumf   as InspectionSampleQuantity,
      @Semantics.unitOfMeasure: true
      qasv.mengeneinh as InspectionLotSampleUnit,
      qasv.prstufe    as InspLotDynRuleStage,
      qasv.prschaerfe as InspectionSeverity,
      @Semantics.systemDate.createdAt: true
      qasv.erstelldat as InspSubsetCharcCreationDate,

      // Associations
      _InspectionLot,
      _InspectionOperation,
      _InspectionSubset,
      _InspectionCharacteristic,
      _InspSubsetResult,
      _InspectionResultValue,
      _InspCharacteristicStatus,
      _InspCharcSampleUnit,
      _InspectionSeverity
}
```
