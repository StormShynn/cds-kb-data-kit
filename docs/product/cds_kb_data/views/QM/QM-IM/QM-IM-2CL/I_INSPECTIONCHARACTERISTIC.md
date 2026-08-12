---
name: I_INSPECTIONCHARACTERISTIC
description: "Inspectioncharacteristic"
app_component: QM-IM-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLot` | ✓ | |  | `prueflos` |  |  |
| `InspPlanOperationInternalID` | ✓ | |  | `vorglfnr` |  |  |
| `InspectionCharacteristic` | ✓ | |  | `merknr` |  |  |
| `InspectionSpecificationText` |  | |  | `cast( qamv.kurztext as vdm_qmkkurztxt preserving type )` |  |  |
| `InspectionCharacteristicText` |  | |  | `cast( qamv.kurztext as vdm_qmkkurztxt preserving type )` |  |  |
| `InspCharcLongTextLanguage` |  | |  | `ltextspr` |  |  |
| `HasInspCharcPrtlSmpl` |  | |  | `tstichprkz` |  |  |
| `BOOCharacteristicInspRelevance` |  | |  | `char_relevance` |  |  |
| `InspCharcUnplannedProcessing` |  | |  | `aktppkt` |  |  |
| `InspSpecIsQuantitative` |  | |  | `cast(substring(qamv.steuerkz,1,1) as vdm_qkzqunmk preserving type )` |  |  |
| `InspSpecIsMeasuredValueRqd` |  | |  | `cast(substring(qamv.steuerkz,2,1) as qkzqumk preserving type )` |  |  |
| `InspSpecIsSelectedSetRequired` |  | |  | `cast(substring(qamv.steuerkz,3,1) as qkzpkat preserving type )` |  |  |
| `InspSpecIsLongTermInspection` |  | |  | `cast(substring(qamv.steuerkz,8,1) as qlzeitkz preserving type )` |  |  |
| `InspSpecRecordingType` |  | |  | `cast(substring(qamv.steuerkz,9,1) as qestukz preserving type )` |  |  |
| `InspResultIsDocumentationRqd` |  | |  | `cast(substring(qamv.steuerkz,10,1) as qdokukz preserving type )` |  |  |
| `InspSpecCharcCategory` |  | |  | `cast(substring(qamv.steuerkz,11,1) as qrzwang preserving type )` |  |  |
| `InspSpecResultCalculation` |  | |  | `cast(substring(qamv.steuerkz,15,1) as qkzformel preserving type )` |  |  |
| `InspSpecHasSamplingProcedure` |  | |  | `cast(substring(qamv.steuerkz,16,1) as qstichpr preserving type )` |  |  |
| `InspSpecIsDefectRecordingRqd` |  | |  | `cast( substring(qamv.steuerkz,19,1) as qbfhlzhl preserving type )` |  |  |
| `InspSpecIsDefectsRecgAutomatic` |  | |  | `cast( substring(qamv.steuerkz,23,1) as qfehlrec preserving type )` |  |  |
| `InspSpecIsChgDocRequired` |  | |  | `cast(substring(qamv.steuerkz,24,1) as qkzaenbel preserving type )` |  |  |
| `InspSpecHasControlChart` |  | |  | `cast(substring(qamv.steuerkz,25,1) as qspcmk preserving type )` |  |  |
| `InspCharcIsNotPlanned` |  | |  | `cast( niplanmkkz as vdm_qniplanmk preserving type )` |  |  |
| `InspectionMethod` |  | |  | `pmethode` |  |  |
| `InspectionMethodPlant` |  | |  | `cast( qamv.qmtb_werks as vdm_qmtb_werks preserving type )` |  |  |
| `InspectionMethodVersion` |  | |  | `pmtversion` |  |  |
| `InspCharcInspSpecRefType` |  | |  | `qpmk_ref` |  |  |
| `InspectionSpecificationPlant` |  | |  | `cast( qamv.qpmk_werks as vdm_qpmk_werks preserving type )` |  |  |
| `InspectionSpecification` |  | |  | `verwmerkm` |  |  |
| `InspectionSpecificationVersion` |  | |  | `mkversion` |  |  |
| `InspCharcPrtlSmpl` |  | |  | `physprobe` |  |  |
| `InspectionCharacteristicStatus` |  | |  | `satzstatus` |  |  |
| `InspSpecDecimalPlaces` |  | |  | `stellen` |  |  |
| `SamplingProcedure` |  | |  | `stichprver` |  |  |
| `InspectionSpecificationUnit` |  | |  | `masseinhsw` |  |  |
| `BOOCharcMatlToSampleUnitRate` |  | |  | `fakplanme` |  |  |
| `BOOCharcSampleToMatlUnitRate` |  | |  | `fakprobme` |  |  |
| `DefectFractionEstimationProced` |  | |  | `antverf` |  |  |
| `InspSampleValuationRule` |  | |  | `bewregel` |  |  |
| `QuantityUnit` |  | |  | `probemgeh` |  |  |
| `InspCharacteristicSampleSize` |  | |  | `sollstpumf` |  |  |
| `InspCharacteristicSampleUnit` |  | |  | `probemgeh` |  |  |
| `InspSpecSampleQuantityFactor` |  | |  | `probmgfak` |  |  |
| `InspSpecTargetValue` |  | |  | `sollwert` |  |  |
| `InspSpecHasTargetValue` |  | |  | `sollwni` |  |  |
| `InspSpecUpperLimit` |  | |  | `toleranzob` |  |  |
| `InspSpecHasUpperLimit` |  | |  | `tolobni` |  |  |
| `InspSpecLowerLimit` |  | |  | `toleranzun` |  |  |
| `InspSpecHasLowerLimit` |  | |  | `tolunni` |  |  |
| `InspSpecUpperPlausibilityLimit` |  | |  | `plausioben` |  |  |
| `InspSpecHasUprPlausibilityLmt` |  | |  | `plausiobni` |  |  |
| `InspSpecLowerPlausibilityLimit` |  | |  | `plausiunte` |  |  |
| `InspSpecHasLowrPlausibilityLmt` |  | |  | `plausiunni` |  |  |
| `InspSpecImportanceCode` |  | |  | `merkgew` |  |  |
| `InspLotTestEquipInternalID` |  | |  | `pzlfh` |  |  |
| `CharacteristicAttributeCatalog` |  | |  | `katalgart1` |  |  |
| `SelectedCodeSet` |  | |  | `auswmenge1` |  |  |
| `SelectedCodeSetPlant` |  | |  | `auswmgwrk1` |  |  |
| `InspSpecAdditionalCatalog2` |  | |  | `katalgart2` |  |  |
| `InspSpecAdditionalCatalog3` |  | |  | `katalgart3` |  |  |
| `InspSpecAdditionalCatalog4` |  | |  | `katalgart4` |  |  |
| `InspSpecAdditionalCatalog5` |  | |  | `katalgart5` |  |  |
| `InspSpecAddlSeldCodeSetPlant2` |  | |  | `auswmgwrk2` |  |  |
| `InspSpecAddlSeldCodeSetPlant3` |  | |  | `auswmgwrk3` |  |  |
| `InspSpecAddlSeldCodeSetPlant4` |  | |  | `auswmgwrk4` |  |  |
| `InspSpecAddlSeldCodeSetPlant5` |  | |  | `auswmgwrk5` |  |  |
| `InspSpecAdditionalSelectedSet2` |  | |  | `case qamv.katab2 when 'X' then qamv.auswmenge2 else '' end` |  |  |
| `InspSpecAdditionalCodeGroup2` |  | |  | `case qamv.katab2 when ' ' then qamv.auswmenge2 else '' end` |  |  |
| `InspSpecAdditionalSelectedSet3` |  | |  | `case qamv.katab3 when 'X' then qamv.auswmenge3 else '' end` |  |  |
| `InspSpecAdditionalCodeGroup3` |  | |  | `case qamv.katab3 when ' ' then qamv.auswmenge3 else '' end` |  |  |
| `InspSpecAdditionalSelectedSet4` |  | |  | `case qamv.katab4 when 'X' then qamv.auswmenge4 else '' end` |  |  |
| `InspSpecAdditionalCodeGroup4` |  | |  | `case qamv.katab4 when ' ' then qamv.auswmenge4 else '' end` |  |  |
| `InspSpecAdditionalSelectedSet5` |  | |  | `case qamv.katab5 when 'X' then qamv.auswmenge5 else '' end` |  |  |
| `InspSpecAdditionalCodeGroup5` |  | |  | `case qamv.katab5 when ' ' then qamv.auswmenge5 else '' end` |  |  |
| `InspSpecificationHasLongText` |  | |  | `cast( qamv.ltextkz as vdm_qkz preserving type )` |  |  |
| `InspectorQualification` |  | |  | `pruefquali` |  |  |
| `InspSpecHasFormula` |  | |  | `formelsl` |  |  |
| `InspSpecFormula1` |  | |  | `formel1` |  |  |
| `InspSpecFormula2` |  | |  | `formel2` |  |  |
| `InspSpecInformationField1` |  | |  | `dummy10` |  |  |
| `InspSpecInformationField2` |  | |  | `dummy20` |  |  |
| `InspSpecInformationField3` |  | |  | `dummy40` |  |  |
| `InspSpecDefectCodeGrpRjcnLower` |  | |  | `codegr9u` |  |  |
| `InspSpecDefectCodeRjcnLower` |  | |  | `code9u` |  |  |
| `InspSpecDefectCodeGrpRjcnUpper` |  | |  | `codegr9o` |  |  |
| `InspSpecDefectCodeRjcnUpper` |  | |  | `code9o` |  |  |
| `InspSpecDefectCodeGrpRejection` |  | |  | `codegrqual` |  |  |
| `InspSpecDefectCodeRejection` |  | |  | `codequal` |  |  |
| `InspectionScope` |  | |  | `pruefumf` |  |  |
| `InspCharcQuantity` |  | |  | `pruefumf` |  |  |
| `InspectionLotSampleUnit` |  | |  | `mengeneinh` |  |  |
| `InspSpecControlIndicators` |  | |  | `steuerkz` |  |  |
| `UnplndCharcInspSubsetIntID` |  | |  | `ppktungemk` |  |  |
| `InspLotDynamicRule` |  | |  | `cast( qamv.qdynregel as vdm_qdynregel preserving type )` |  |  |
| `QualityLevelInternalID` |  | |  | `zaehlerql` |  |  |
| `SamplingProcedureInspSubset` |  | |  | `kzrast` |  |  |
| `InspectionsNotSkippedDnmntr` |  | |  | `raster` |  |  |
| `QltyCtrlChartAggrgnCriterion` |  | |  | `spckrit` |  |  |
| `BOOCharcGroup` |  | |  | `chargroup` |  |  |
| `BOOCharcSourceCharc` |  | |  | `chargroup_cref` |  |  |
| `BOOCharcGroupDivision` |  | |  | `divisionint` |  |  |
| `ProductionOrderOperationActy` |  | |  | `oa_id` |  |  |
| `ProductionOrderOpActyVers` |  | |  | `oa_version_no` |  |  |
| `InspCharcConfirmationNumber` |  | |  | `rueckmelnr` |  |  |
| `BOOCharacteristicVersion` |  | |  | `zaehl` |  |  |
| `InspCharcCreationDate` |  | |  | `erstelldat` |  |  |
| `InspCharcCreatedBy` |  | |  | `ersteller` |  |  |
| `InspSpecInputProcedure` |  | |  | `inpproc` |  |  |
| `_InspectionLot` | | ✓ | | | | |
| `_InspectionOperation` | | ✓ | | | | |
| `_InspectionResult` | | ✓ | | | | |
| `_CharcAttribSelectedCodeSet` | | ✓ | | | | |
| `_InspSpecImportanceCode` | | ✓ | | | | |
| `_InspectionSpecificationUnit` | | ✓ | | | | |
| `_InspCharacteristicSampleUnit` | | ✓ | | | | |
| `_QuantityUnit` | | ✓ | | | | |
| `_InspCharacteristicStatus` | | ✓ | | | | |
| `_InspCharacteristic` | | ✓ | | | | |
| `_InspSubsetCharacteristic` | | ✓ | | | | |
| `_InspSampleResult` | | ✓ | | | | |
| `_InspectionResultValue` | | ✓ | | | | |
| `_InspSpecificationVersion` | | ✓ | | | | |
| `_InspectionSpecification` | | ✓ | | | | |
| `_InspectionSpecificationPlant` | | ✓ | | | | |
| `_InspectionMethodVersion` | | ✓ | | | | |
| `_InspectionMethodPlant` | | ✓ | | | | |
| `_InspLotDynamicRule` | | ✓ | | | | |
| `_BOOCharcInspRelevance` | | ✓ | | | | |

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
