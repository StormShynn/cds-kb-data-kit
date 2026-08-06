---
name: I_INSPECTIONCHARACTERISTIC
description: Inspectioncharacteristic
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
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONCHARACTERISTIC

**Inspectioncharacteristic**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InspectionLot` | `qamv.prueflos` |
| key `InspPlanOperationInternalID` | `qamv.vorglfnr` |
| key `InspectionCharacteristic` | `qamv.merknr` |
| `InspectionSpecificationText` | `cast( qamv.kurztext as vdm_qmkkurztxt preserving type )` |
| `InspectionCharacteristicText` | `cast( qamv.kurztext as vdm_qmkkurztxt preserving type )` |
| `InspCharcLongTextLanguage` | `qamv.ltextspr` |
| `HasInspCharcPrtlSmpl` | `qamv.tstichprkz` |
| `BOOCharacteristicInspRelevance` | `qamv.char_relevance` |
| `InspCharcUnplannedProcessing` | `qamv.aktppkt` |
| `InspSpecIsQuantitative` | `cast(substring(qamv.steuerkz,1,1) as vdm_qkzqunmk preserving type )` |
| `InspSpecIsMeasuredValueRqd` | `cast(substring(qamv.steuerkz,2,1) as qkzqumk preserving type )` |
| `InspSpecIsSelectedSetRequired` | `cast(substring(qamv.steuerkz,3,1) as qkzpkat preserving type )` |
| `InspSpecIsLongTermInspection` | `cast(substring(qamv.steuerkz,8,1) as qlzeitkz preserving type )` |
| `InspSpecRecordingType` | `cast(substring(qamv.steuerkz,9,1) as qestukz preserving type )` |
| `InspResultIsDocumentationRqd` | `cast(substring(qamv.steuerkz,10,1) as qdokukz preserving type )` |
| `InspSpecCharcCategory` | `cast(substring(qamv.steuerkz,11,1) as qrzwang preserving type )` |
| `InspSpecResultCalculation` | `cast(substring(qamv.steuerkz,15,1) as qkzformel preserving type )` |
| `InspSpecHasSamplingProcedure` | `cast(substring(qamv.steuerkz,16,1) as qstichpr preserving type )` |
| `InspSpecIsDefectRecordingRqd` | `cast( substring(qamv.steuerkz,19,1) as qbfhlzhl preserving type )` |
| `InspSpecIsDefectsRecgAutomatic` | `cast( substring(qamv.steuerkz,23,1) as qfehlrec preserving type )` |
| `InspSpecIsChgDocRequired` | `cast(substring(qamv.steuerkz,24,1) as qkzaenbel preserving type )` |
| `InspSpecHasControlChart` | `cast(substring(qamv.steuerkz,25,1) as qspcmk preserving type )` |
| `InspCharcIsNotPlanned` | `cast( niplanmkkz as vdm_qniplanmk preserving type )` |
| `InspectionMethod` | `qamv.pmethode` |
| `InspectionMethodPlant` | `cast( qamv.qmtb_werks as vdm_qmtb_werks preserving type )` |
| `InspectionMethodVersion` | `qamv.pmtversion` |
| `InspCharcInspSpecRefType` | `qamv.qpmk_ref` |
| `InspectionSpecificationPlant` | `cast( qamv.qpmk_werks as vdm_qpmk_werks preserving type )` |
| `InspectionSpecification` | `qamv.verwmerkm` |
| `InspectionSpecificationVersion` | `qamv.mkversion` |
| `InspCharcPrtlSmpl` | `qamv.physprobe` |
| `InspectionCharacteristicStatus` | `qamv.satzstatus` |
| `InspSpecDecimalPlaces` | `qamv.stellen` |
| `SamplingProcedure` | `qamv.stichprver` |
| `InspectionSpecificationUnit` | `qamv.masseinhsw` |
| `BOOCharcMatlToSampleUnitRate` | `qamv.fakplanme` |
| `BOOCharcSampleToMatlUnitRate` | `qamv.fakprobme` |
| `DefectFractionEstimationProced` | `qamv.antverf` |
| `InspSampleValuationRule` | `qamv.bewregel` |
| `QuantityUnit` | `qamv.probemgeh` |
| `InspCharacteristicSampleSize` | `qamv.sollstpumf` |
| `InspCharacteristicSampleUnit` | `qamv.probemgeh` |
| `InspSpecSampleQuantityFactor` | `qamv.probmgfak` |
| `InspSpecTargetValue` | `qamv.sollwert` |
| `InspSpecHasTargetValue` | `qamv.sollwni` |
| `InspSpecUpperLimit` | `qamv.toleranzob` |
| `InspSpecHasUpperLimit` | `qamv.tolobni` |
| `InspSpecLowerLimit` | `qamv.toleranzun` |
| `InspSpecHasLowerLimit` | `qamv.tolunni` |
| `InspSpecUpperPlausibilityLimit` | `qamv.plausioben` |
| `InspSpecHasUprPlausibilityLmt` | `qamv.plausiobni` |
| `InspSpecLowerPlausibilityLimit` | `qamv.plausiunte` |
| `InspSpecHasLowrPlausibilityLmt` | `qamv.plausiunni` |
| `InspSpecImportanceCode` | `qamv.merkgew` |
| `InspLotTestEquipInternalID` | `qamv.pzlfh` |
| `CharacteristicAttributeCatalog` | `qamv.katalgart1` |
| `SelectedCodeSet` | `qamv.auswmenge1` |
| `SelectedCodeSetPlant` | `qamv.auswmgwrk1` |
| `InspSpecAdditionalCatalog2` | `qamv.katalgart2` |
| `InspSpecAdditionalCatalog3` | `qamv.katalgart3` |
| `InspSpecAdditionalCatalog4` | `qamv.katalgart4` |
| `InspSpecAdditionalCatalog5` | `qamv.katalgart5` |
| `InspSpecAddlSeldCodeSetPlant2` | `qamv.auswmgwrk2` |
| `InspSpecAddlSeldCodeSetPlant3` | `qamv.auswmgwrk3` |
| `InspSpecAddlSeldCodeSetPlant4` | `qamv.auswmgwrk4` |
| `InspSpecAddlSeldCodeSetPlant5` | `qamv.auswmgwrk5` |
| `InspSpecAdditionalSelectedSet2` | `case qamv.katab2 when 'X' then qamv.auswmenge2 else '' end` |
| `InspSpecAdditionalCodeGroup2` | `case qamv.katab2 when ' ' then qamv.auswmenge2 else '' end` |
| `InspSpecAdditionalSelectedSet3` | `case qamv.katab3 when 'X' then qamv.auswmenge3 else '' end` |
| `InspSpecAdditionalCodeGroup3` | `case qamv.katab3 when ' ' then qamv.auswmenge3 else '' end` |
| `InspSpecAdditionalSelectedSet4` | `case qamv.katab4 when 'X' then qamv.auswmenge4 else '' end` |
| `InspSpecAdditionalCodeGroup4` | `case qamv.katab4 when ' ' then qamv.auswmenge4 else '' end` |
| `InspSpecAdditionalSelectedSet5` | `case qamv.katab5 when 'X' then qamv.auswmenge5 else '' end` |
| `InspSpecAdditionalCodeGroup5` | `case qamv.katab5 when ' ' then qamv.auswmenge5 else '' end` |
| `InspSpecificationHasLongText` | `cast( qamv.ltextkz as vdm_qkz preserving type )` |
| `InspectorQualification` | `qamv.pruefquali` |
| `InspSpecHasFormula` | `qamv.formelsl` |
| `InspSpecFormula1` | `qamv.formel1` |
| `InspSpecFormula2` | `qamv.formel2` |
| `InspSpecInformationField1` | `qamv.dummy10` |
| `InspSpecInformationField2` | `qamv.dummy20` |
| `InspSpecInformationField3` | `qamv.dummy40` |
| `InspSpecDefectCodeGrpRjcnLower` | `qamv.codegr9u` |
| `InspSpecDefectCodeRjcnLower` | `qamv.code9u` |
| `InspSpecDefectCodeGrpRjcnUpper` | `qamv.codegr9o` |
| `InspSpecDefectCodeRjcnUpper` | `qamv.code9o` |
| `InspSpecDefectCodeGrpRejection` | `qamv.codegrqual` |
| `InspSpecDefectCodeRejection` | `qamv.codequal` |
| `InspectionScope` | `qamv.pruefumf` |
| `InspCharcQuantity` | `qamv.pruefumf` |
| `InspectionLotSampleUnit` | `qamv.mengeneinh` |
| `InspSpecControlIndicators` | `qamv.steuerkz` |
| `UnplndCharcInspSubsetIntID` | `qamv.ppktungemk` |
| `InspLotDynamicRule` | `cast( qamv.qdynregel as vdm_qdynregel preserving type )` |
| `QualityLevelInternalID` | `qamv.zaehlerql` |
| `SamplingProcedureInspSubset` | `qamv.kzrast` |
| `InspectionsNotSkippedDnmntr` | `qamv.raster` |
| `QltyCtrlChartAggrgnCriterion` | `qamv.spckrit` |
| `BOOCharcGroup` | `qamv.chargroup` |
| `BOOCharcSourceCharc` | `qamv.chargroup_cref` |
| `BOOCharcGroupDivision` | `qamv.divisionint` |
| `ProductionOrderOperationActy` | `qamv.oa_id` |
| `ProductionOrderOpActyVers` | `qamv.oa_version_no` |
| `InspCharcConfirmationNumber` | `qamv.rueckmelnr` |
| `BOOCharacteristicVersion` | `qamv.zaehl` |
| `InspCharcCreationDate` | `qamv.erstelldat` |
| `InspCharcCreatedBy` | `qamv.ersteller` |
| `InspSpecInputProcedure` | `qamv.inpproc` |
| `_InspectionLot` | *Association* |
| `_InspectionOperation` | *Association* |
| `_InspectionResult` | *Association* |
| `_CharcAttribSelectedCodeSet` | *Association* |
| `_InspSpecImportanceCode` | *Association* |
| `_InspectionSpecificationUnit` | *Association* |
| `_InspCharacteristicSampleUnit` | *Association* |
| `_QuantityUnit` | *Association* |
| `_InspCharacteristicStatus` | *Association* |
| `_InspCharacteristic` | *Association* |
| `_InspSubsetCharacteristic` | *Association* |
| `_InspSampleResult` | *Association* |
| `_InspectionResultValue` | *Association* |
| `_InspSpecificationVersion` | *Association* |
| `_InspectionSpecification` | *Association* |
| `_InspectionSpecificationPlant` | *Association* |
| `_InspectionMethodVersion` | *Association* |
| `_InspectionMethodPlant` | *Association* |
| `_InspLotDynamicRule` | *Association* |
| `_BOOCharcInspRelevance` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLot` | `I_InspectionLot` | [1..1] |
| `_InspectionOperation` | `I_InspectionOperation` | [1..1] |
| `_InspectionResult` | `I_InspectionResult` | [0..1] |
| `_CharcAttribSelectedCodeSet` | `I_CharcAttribSelectedCodeSet` | [0..1] |
| `_InspSpecImportanceCode` | `I_InspSpecImportanceCode` | [0..1] |
| `_InspectionSpecificationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_InspCharacteristicSampleUnit` | `I_UnitOfMeasure` | [0..1] |
| `_QuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_InspCharacteristicStatus` | `I_InspectionResultStatus` | [0..1] |
| `_InspCharacteristic` | `I_InspSubsetCharacteristic` | [0..1] |
| `_InspSubsetCharacteristic` | `I_InspSubsetCharacteristic` | [0..*] |
| `_InspSampleResult` | `I_InspSubsetResult` | [0..*] |
| `_InspectionResultValue` | `I_InspectionResultValue` | [0..*] |
| `_InspSpecificationVersion` | `I_InspSpecificationVersion` | [0..1] |
| `_InspectionSpecification` | `I_InspectionSpecification` | [0..1] |
| `_InspectionSpecificationPlant` | `I_Plant` | [0..1] |
| `_InspectionMethodVersion` | `I_InspectionMethodVersion` | [0..1] |
| `_InspectionMethodPlant` | `I_Plant` | [0..1] |
| `_InspLotDynamicRule` | `I_InspLotDynamicRule` | [0..1] |
| `_BOOCharcInspRelevance` | `I_BOOCharcInspRelevance` | [0..1] |
| `_Extension` | `E_InspectionCharacteristic` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPCHAR'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_INSPECTIONSPECIFICATION']
@EndUserText.label: 'Characteristic in Inspection Lot'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel: {
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #M,
        serviceQuality: #B
    },
    representativeKey: 'InspectionCharacteristic'
}
@Metadata.ignorePropagatedAnnotations: true

define view I_InspectionCharacteristic
  as select from qamv
  association [1..1] to I_InspectionLot              as _InspectionLot                on  $projection.InspectionLot = _InspectionLot.InspectionLot
  association [1..1] to I_InspectionOperation        as _InspectionOperation          on  $projection.InspectionLot               = _InspectionOperation.InspectionLot
                                                                                      and $projection.InspPlanOperationInternalID = _InspectionOperation.InspPlanOperationInternalID
  association [0..1] to I_InspectionResult           as _InspectionResult             on  $projection.InspectionLot               = _InspectionResult.InspectionLot
                                                                                      and $projection.InspPlanOperationInternalID = _InspectionResult.InspPlanOperationInternalID
                                                                                      and $projection.InspectionCharacteristic    = _InspectionResult.InspectionCharacteristic
  association [0..1] to I_CharcAttribSelectedCodeSet as _CharcAttribSelectedCodeSet   on  $projection.SelectedCodeSet      = _CharcAttribSelectedCodeSet.SelectedCodeSet
                                                                                      and $projection.SelectedCodeSetPlant = _CharcAttribSelectedCodeSet.SelectedCodeSetPlant
  association [0..1] to I_InspSpecImportanceCode     as _InspSpecImportanceCode       on  $projection.InspSpecImportanceCode = _InspSpecImportanceCode.InspSpecImportanceCode
  association [0..1] to I_UnitOfMeasure              as _InspectionSpecificationUnit  on  $projection.InspectionSpecificationUnit = _InspectionSpecificationUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure              as _InspCharacteristicSampleUnit on  $projection.InspCharacteristicSampleUnit = _InspCharacteristicSampleUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure              as _QuantityUnit                 on  $projection.QuantityUnit = _QuantityUnit.UnitOfMeasure
  association [0..1] to I_InspectionResultStatus     as _InspCharacteristicStatus     on  $projection.InspectionCharacteristicStatus = _InspCharacteristicStatus.InspectionResultStatus
  //Sample characteristics as further specification eg. for control chart
  association [0..1] to I_InspSubsetCharacteristic   as _InspCharacteristic           on  $projection.InspectionLot                      = _InspCharacteristic.InspectionLot
                                                                                      and $projection.InspPlanOperationInternalID        = _InspCharacteristic.InspPlanOperationInternalID
                                                                                      and $projection.InspectionCharacteristic           = _InspCharacteristic.InspectionCharacteristic
                                                                                      and _InspCharacteristic.InspectionSubsetInternalID = '000000'
  //Sample characteristics if inspection points are involved
  association [0..*] to I_InspSubsetCharacteristic   as _InspSubsetCharacteristic     on  $projection.InspectionLot               = _InspSubsetCharacteristic.InspectionLot
                                                                                      and $projection.InspPlanOperationInternalID = _InspSubsetCharacteristic.InspPlanOperationInternalID
                                                                                      and $projection.InspectionCharacteristic    = _InspSubsetCharacteristic.InspectionCharacteristic

  //Sample result only if independent multiple sample result are used
  association [0..*] to I_InspSubsetResult           as _InspSampleResult             on  $projection.InspectionLot               = _InspSampleResult.InspectionLot
                                                                                      and $projection.InspPlanOperationInternalID = _InspSampleResult.InspPlanOperationInternalID
                                                                                      and $projection.InspectionCharacteristic    = _InspSampleResult.InspectionCharacteristic
                                                                                      and $projection.HasInspCharcPrtlSmpl        = 'X'
  //Single result only if no inspection points are involved
  association [0..*] to I_InspectionResultValue      as _InspectionResultValue        on  $projection.InspectionLot                        = _InspectionResultValue.InspectionLot
                                                                                      and $projection.InspPlanOperationInternalID          = _InspectionResultValue.InspPlanOperationInternalID
                                                                                      and $projection.InspectionCharacteristic             = _InspectionResultValue.InspectionCharacteristic
                                                                                      and (
                                                                                         _InspectionResultValue.InspectionSubsetInternalID = '000000'
                                                                                         or $projection.HasInspCharcPrtlSmpl               = 'X'
                                                                                       )
  // Inspection specification - Master inspection characteristic
  association [0..1] to I_InspSpecificationVersion   as _InspSpecificationVersion     on  $projection.InspectionSpecification        = _InspSpecificationVersion.InspectionSpecification
                                                                                      and $projection.InspectionSpecificationPlant   = _InspSpecificationVersion.InspectionSpecificationPlant
                                                                                      and $projection.InspectionSpecificationVersion = _InspSpecificationVersion.InspectionSpecificationVersion

  association [0..1] to I_InspectionSpecification    as _InspectionSpecification      on  $projection.InspectionSpecification      = _InspectionSpecification.InspectionSpecification
                                                                                      and $projection.InspectionSpecificationPlant = _InspectionSpecification.InspectionSpecificationPlant

  association [0..1] to I_Plant                      as _InspectionSpecificationPlant on  $projection.InspectionSpecificationPlant = _InspectionSpecificationPlant.Plant

  // Inspection method
  association [0..1] to I_InspectionMethodVersion    as _InspectionMethodVersion      on  $projection.InspectionMethod        = _InspectionMethodVersion.InspectionMethod
                                                                                      and $projection.InspectionMethodPlant   = _InspectionMethodVersion.InspectionMethodPlant
                                                                                      and $projection.InspectionMethodVersion = _InspectionMethodVersion.InspectionMethodVersion

  association [0..1] to I_Plant                      as _InspectionMethodPlant        on  $projection.InspectionMethodPlant = _InspectionMethodPlant.Plant
  association [0..1] to I_InspLotDynamicRule         as _InspLotDynamicRule           on  $projection.InspLotDynamicRule = _InspLotDynamicRule.InspLotDynamicRule
  association [0..1] to I_BOOCharcInspRelevance      as _BOOCharcInspRelevance        on  $projection.BOOCharacteristicInspRelevance = _BOOCharcInspRelevance.BOOCharacteristicInspRelevance

  //Extension
  association [1..1] to E_InspectionCharacteristic   as _Extension                    on  $projection.InspectionLot               = _Extension.InspectionLot
                                                                                      and $projection.InspPlanOperationInternalID = _Extension.InspPlanOperationInternalID
                                                                                      and $projection.InspectionCharacteristic    = _Extension.InspectionCharacteristic
{
      @ObjectModel.foreignKey.association: '_InspectionLot'
  key qamv.prueflos                                                       as InspectionLot,
      @ObjectModel.foreignKey.association: '_InspectionOperation'
  key qamv.vorglfnr                                                       as InspPlanOperationInternalID,
  key qamv.merknr                                                         as InspectionCharacteristic,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'InspectionCharacteristicText'
      cast( qamv.kurztext as vdm_qmkkurztxt preserving type )             as InspectionSpecificationText,
      cast( qamv.kurztext as vdm_qmkkurztxt preserving type )             as InspectionCharacteristicText,
      qamv.ltextspr                                                       as InspCharcLongTextLanguage,
      qamv.tstichprkz                                                     as HasInspCharcPrtlSmpl,
      qamv.char_relevance                                                 as BOOCharacteristicInspRelevance,
      qamv.aktppkt                                                        as InspCharcUnplannedProcessing,
      //Control indicator, see DDIC structure QMKST
      cast(substring(qamv.steuerkz,1,1) as vdm_qkzqunmk preserving type ) as InspSpecIsQuantitative, //Quantitative-Qualitativ
      cast(substring(qamv.steuerkz,2,1) as qkzqumk preserving type )      as InspSpecIsMeasuredValueRqd,
      cast(substring(qamv.steuerkz,3,1) as qkzpkat preserving type )      as InspSpecIsSelectedSetRequired, //Codegroups required
      cast(substring(qamv.steuerkz,8,1) as qlzeitkz preserving type )     as InspSpecIsLongTermInspection,
      cast(substring(qamv.steuerkz,9,1) as qestukz preserving type )      as InspSpecRecordingType, // RecordingType: Summary,Single
      cast(substring(qamv.steuerkz,10,1) as qdokukz preserving type )     as InspResultIsDocumentationRqd, // Documentation Required for Inspection Result
      cast(substring(qamv.steuerkz,11,1) as qrzwang preserving type )     as InspSpecCharcCategory,
      cast(substring(qamv.steuerkz,15,1) as qkzformel preserving type )   as InspSpecResultCalculation,
      cast(substring(qamv.steuerkz,16,1) as qstichpr preserving type )    as InspSpecHasSamplingProcedure,
      @Semantics.booleanIndicator: true
      cast( substring(qamv.steuerkz,19,1) as qbfhlzhl preserving type )   as InspSpecIsDefectRecordingRqd, // Defects Recording required
      @Semantics.booleanIndicator: true
      cast( substring(qamv.steuerkz,23,1) as qfehlrec preserving type )   as InspSpecIsDefectsRecgAutomatic, // Defects Recording Automatically Called Up
      @Semantics.booleanIndicator
      cast(substring(qamv.steuerkz,24,1) as qkzaenbel preserving type )   as InspSpecIsChgDocRequired,
      cast(substring(qamv.steuerkz,25,1) as qspcmk preserving type )      as InspSpecHasControlChart,
      cast( niplanmkkz as vdm_qniplanmk preserving type )                 as InspCharcIsNotPlanned,
      qamv.pmethode                                                       as InspectionMethod,
      @ObjectModel.foreignKey.association: '_InspectionMethodPlant'
      cast( qamv.qmtb_werks as vdm_qmtb_werks preserving type )           as InspectionMethodPlant,
      qamv.pmtversion                                                     as InspectionMethodVersion,
      qamv.qpmk_ref                                                       as InspCharcInspSpecRefType,
      @ObjectModel.foreignKey.association: '_InspectionSpecificationPlant'
      cast( qamv.qpmk_werks as vdm_qpmk_werks preserving type )           as InspectionSpecificationPlant,
      @ObjectModel.foreignKey.association: '_InspectionSpecification'
      qamv.verwmerkm                                                      as InspectionSpecification,
      @ObjectModel.foreignKey.association: '_InspSpecificationVersion'
      qamv.mkversion                                                      as InspectionSpecificationVersion,
      qamv.physprobe                                                      as InspCharcPrtlSmpl,
      qamv.satzstatus                                                     as InspectionCharacteristicStatus,
      qamv.stellen                                                        as InspSpecDecimalPlaces,
      qamv.stichprver                                                     as SamplingProcedure,
      @ObjectModel.foreignKey.association: '_InspectionSpecificationUnit'
      @Semantics.unitOfMeasure: true
      qamv.masseinhsw                                                     as InspectionSpecificationUnit,
      qamv.fakplanme                                                      as BOOCharcMatlToSampleUnitRate,
      qamv.fakprobme                                                      as BOOCharcSampleToMatlUnitRate,
      qamv.antverf                                                        as DefectFractionEstimationProced,
      qamv.bewregel                                                       as InspSampleValuationRule,
      @ObjectModel.foreignKey.association: '_QuantityUnit'
      @Semantics.unitOfMeasure: true
      qamv.probemgeh                                                      as QuantityUnit,
      qamv.sollstpumf                                                     as InspCharacteristicSampleSize,
      @ObjectModel.foreignKey.association: '_InspCharacteristicSampleUnit'
      @Semantics.unitOfMeasure: true
      qamv.probemgeh                                                      as InspCharacteristicSampleUnit,
      qamv.probmgfak                                                      as InspSpecSampleQuantityFactor,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      qamv.sollwert                                                       as InspSpecTargetValue,
      qamv.sollwni                                                        as InspSpecHasTargetValue,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      qamv.toleranzob                                                     as InspSpecUpperLimit,
      qamv.tolobni                                                        as InspSpecHasUpperLimit,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      qamv.toleranzun                                                     as InspSpecLowerLimit,
      qamv.tolunni                                                        as InspSpecHasLowerLimit,
      // Plausibility
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      qamv.plausioben                                                     as InspSpecUpperPlausibilityLimit,
      @Semantics.booleanIndicator: true
      qamv.plausiobni                                                     as InspSpecHasUprPlausibilityLmt,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      qamv.plausiunte                                                     as InspSpecLowerPlausibilityLimit,
      @Semantics.booleanIndicator: true
      qamv.plausiunni                                                     as InspSpecHasLowrPlausibilityLmt,

      @ObjectModel.foreignKey.association: '_InspSpecImportanceCode'
      qamv.merkgew                                                        as InspSpecImportanceCode,
      qamv.pzlfh                                                          as InspLotTestEquipInternalID,
      qamv.katalgart1                                                     as CharacteristicAttributeCatalog,
      qamv.auswmenge1                                                     as SelectedCodeSet,
      qamv.auswmgwrk1                                                     as SelectedCodeSetPlant,
      qamv.katalgart2                                                     as InspSpecAdditionalCatalog2,
      qamv.katalgart3                                                     as InspSpecAdditionalCatalog3,
      qamv.katalgart4                                                     as InspSpecAdditionalCatalog4,
      qamv.katalgart5                                                     as InspSpecAdditionalCatalog5,
      qamv.auswmgwrk2                                                     as InspSpecAddlSeldCodeSetPlant2,
      qamv.auswmgwrk3                                                     as InspSpecAddlSeldCodeSetPlant3,
      qamv.auswmgwrk4                                                     as InspSpecAddlSeldCodeSetPlant4,
      qamv.auswmgwrk5                                                     as InspSpecAddlSeldCodeSetPlant5,

      case qamv.katab2
        when 'X' then qamv.auswmenge2 else ''
      end                                                                 as InspSpecAdditionalSelectedSet2,
      case qamv.katab2
        when ' ' then qamv.auswmenge2 else ''
      end                                                                 as InspSpecAdditionalCodeGroup2,
      case qamv.katab3
        when 'X' then qamv.auswmenge3 else ''
      end                                                                 as InspSpecAdditionalSelectedSet3,
      case qamv.katab3
        when ' ' then qamv.auswmenge3 else ''
      end                                                                 as InspSpecAdditionalCodeGroup3,
      case qamv.katab4
        when 'X' then qamv.auswmenge4 else ''
      end                                                                 as InspSpecAdditionalSelectedSet4,
      case qamv.katab4
        when ' ' then qamv.auswmenge4 else ''
      end                                                                 as InspSpecAdditionalCodeGroup4,
      case qamv.katab5
        when 'X' then qamv.auswmenge5 else ''
      end                                                                 as InspSpecAdditionalSelectedSet5,
      case qamv.katab5
        when ' ' then qamv.auswmenge5 else ''
      end                                                                 as InspSpecAdditionalCodeGroup5,
      cast( qamv.ltextkz as vdm_qkz preserving type )                     as InspSpecificationHasLongText,
      qamv.pruefquali                                                     as InspectorQualification,
      @Semantics.booleanIndicator: true
      qamv.formelsl                                                       as InspSpecHasFormula,
      qamv.formel1                                                        as InspSpecFormula1,
      qamv.formel2                                                        as InspSpecFormula2,
      qamv.dummy10                                                        as InspSpecInformationField1,
      qamv.dummy20                                                        as InspSpecInformationField2,
      qamv.dummy40                                                        as InspSpecInformationField3,
      qamv.codegr9u                                                       as InspSpecDefectCodeGrpRjcnLower,
      qamv.code9u                                                         as InspSpecDefectCodeRjcnLower,
      qamv.codegr9o                                                       as InspSpecDefectCodeGrpRjcnUpper,
      qamv.code9o                                                         as InspSpecDefectCodeRjcnUpper,
      qamv.codegrqual                                                     as InspSpecDefectCodeGrpRejection,
      qamv.codequal                                                       as InspSpecDefectCodeRejection,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'InspCharcQuantity'
      qamv.pruefumf                                                       as InspectionScope, // wrong GFN --> deprecated! Replaced by InspCharcQuantity
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      qamv.pruefumf                                                       as InspCharcQuantity,
      qamv.mengeneinh                                                     as InspectionLotSampleUnit,
      qamv.steuerkz                                                       as InspSpecControlIndicators,
      qamv.ppktungemk                                                     as UnplndCharcInspSubsetIntID, // only filled if unplanned characteristic was created for a spcific Subset
      cast( qamv.qdynregel as vdm_qdynregel preserving type )             as InspLotDynamicRule,
      qamv.zaehlerql                                                      as QualityLevelInternalID,
      qamv.kzrast                                                         as SamplingProcedureInspSubset,
      qamv.raster                                                         as InspectionsNotSkippedDnmntr,
      qamv.spckrit                                                        as QltyCtrlChartAggrgnCriterion,
      qamv.chargroup                                                      as BOOCharcGroup,
      qamv.chargroup_cref                                                 as BOOCharcSourceCharc,
      qamv.divisionint                                                    as BOOCharcGroupDivision,
      qamv.oa_id                                                          as ProductionOrderOperationActy,
      qamv.oa_version_no                                                  as ProductionOrderOpActyVers,
      qamv.rueckmelnr                                                     as InspCharcConfirmationNumber,
      qamv.zaehl                                                          as BOOCharacteristicVersion,
      @Semantics.systemDate.createdAt: true
      qamv.erstelldat                                                     as InspCharcCreationDate,
      @Semantics.user.createdBy: true
      qamv.ersteller                                                      as InspCharcCreatedBy,
      qamv.inpproc                                                        as InspSpecInputProcedure,
      // Association
      _InspectionLot,
      _InspectionOperation,
      _InspectionResult,
      _InspectionResultValue,
      _InspSampleResult,
      _InspSubsetCharacteristic,
      _InspCharacteristic,
      _InspectionMethodVersion,
      _InspectionMethodPlant,
      _InspSpecificationVersion,
      _InspectionSpecification,
      _InspectionSpecificationPlant,
      _CharcAttribSelectedCodeSet,
      _InspectionSpecificationUnit,
      _InspCharacteristicSampleUnit,
      _InspSpecImportanceCode,
      _InspCharacteristicStatus,
      _QuantityUnit,
      _BOOCharcInspRelevance,      
      _InspLotDynamicRule
}
```
