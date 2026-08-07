---
name: I_INSPECTIONRESULT
description: "Inspectionresult"
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
# I_INSPECTIONRESULT

**Inspectionresult**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLot` | ✓ | |  | `prueflos` |  |  |
| `InspPlanOperationInternalID` | ✓ | |  | `vorglfnr` |  |  |
| `InspectionCharacteristic` | ✓ | |  | `merknr` |  |  |
| `Inspector` |  | |  | `pruefer` |  |  |
| `InspectionResultStatus` |  | |  | `satzstatus` |  |  |
| `InspResultIsCompletionForced` |  | |  | `case qamr.kzbewertg when '+' then cast('X' as vdm_inspres_completion_forced preserving type ) when '.' then cast('X' as vdm_inspres_completion_forced preserving type ) when '/' then cast('X' as vdm_inspres_completion_forced preserving type ) else cast('' as vdm_inspres_completion_forced preserving type ) end` |  |  |
| `InspectionResultAttribute` |  | |  | `attribut` |  |  |
| `InspectionResultOrigin` |  | |  | `qergdath` |  |  |
| `InspectionValuationResult` |  | |  | `mbewertg` |  |  |
| `InspResultDynModifValuation` |  | |  | `dbewertg` |  |  |
| `InspectionResultMeanValue` |  | |  | `mittelwert` |  |  |
| `InspectionResultHasMeanValue` |  | |  | `cast(case qamr.mittelwni when '*' then 'X' else qamr.mittelwni end as qninitial preserving type )` |  |  |
| `InspectionResultMaximumValue` |  | |  | `maxwert` |  |  |
| `InspResultHasMaximumValue` |  | |  | `cast(case qamr.maxwertni when '*' then 'X' else qamr.maxwertni end as qninitial preserving type )` |  |  |
| `InspectionResultMinimumValue` |  | |  | `minwert` |  |  |
| `InspResultHasMinimumValue` |  | |  | `cast(case qamr.minwertni when '*' then 'X' else qamr.minwertni end as qninitial preserving type )` |  |  |
| `InspectionResultOriginalValue` |  | |  | `original_input` |  |  |
| `InspResultValidValuesNumber` |  | |  | `anzwertg` |  |  |
| `InspResultNmbrOfRecordedRslts` |  | |  | `iststpumf` |  |  |
| `InspectionResultText` |  | |  | `cast( qamr.pruefbemkt as vdm_qinspectionresultdesc preserving type )` |  |  |
| `InspectionResultHasLongText` |  | |  | `prltextkz` |  |  |
| `Language` |  | |  | `ltextspr` |  |  |
| `CharacteristicAttributeCodeGrp` |  | |  | `gruppe1` |  |  |
| `CharacteristicAttributeCode` |  | |  | `code1` |  |  |
| `CharcAttributeCodeVers` |  | |  | `version1` |  |  |
| `InspRsltFreeDefinedTestEquip` |  | |  | `maschine` |  |  |
| `InspRsltBelowToleranceValsNmbr` |  | |  | `anzwertu` |  |  |
| `InspRsltAboveToleranceValsNmbr` |  | |  | `anzwerto` |  |  |
| `InspRsltNonconformingValsNmbr` |  | |  | `anzfehleh` |  |  |
| `InspectionNumberOfDefects` |  | |  | `anzfehler` |  |  |
| `InspRsltAboveToleranceFraction` |  | |  | `anteilo` |  |  |
| `InspRsltBelowToleranceFraction` |  | |  | `anteilu` |  |  |
| `InspResultVariance` |  | |  | `varianz` |  |  |
| `InspResultHasVariance` |  | |  | `cast(case qamr.varianzni when '*' then 'X' else qamr.varianzni end as vdm_varianzni preserving type)` |  |  |
| `CharacteristicAttributeCatalog` |  | |  | `katalgart1` |  |  |
| `InspectionResultCatalog2` |  | |  | `katalgart2` |  |  |
| `InspectionResultCatalog3` |  | |  | `katalgart3` |  |  |
| `InspectionResultCatalog4` |  | |  | `katalgart4` |  |  |
| `InspectionResultCatalog5` |  | |  | `katalgart5` |  |  |
| `InspectionResultCode2` |  | |  | `code2` |  |  |
| `InspectionResultCode3` |  | |  | `code3` |  |  |
| `InspectionResultCode4` |  | |  | `code4` |  |  |
| `InspectionResultCode5` |  | |  | `code5` |  |  |
| `InspectionResultCode2Vers` |  | |  | `version2` |  |  |
| `InspectionResultCode3Vers` |  | |  | `version3` |  |  |
| `InspectionResultCode4Vers` |  | |  | `version4` |  |  |
| `InspectionResultCode5Vers` |  | |  | `version5` |  |  |
| `InspectionResultCodeGroup2` |  | |  | `gruppe2` |  |  |
| `InspectionResultCodeGroup3` |  | |  | `gruppe3` |  |  |
| `InspectionResultCodeGroup4` |  | |  | `gruppe4` |  |  |
| `InspectionResultCodeGroup5` |  | |  | `gruppe5` |  |  |
| `DefectClass` |  | |  | `fehlklas` |  |  |
| `InspectionPartialSampleSize` |  | |  | `iststpanz` |  |  |
| `InspectionStartDate` |  | |  | `pruefdatuv` |  |  |
| `InspectionStartTime` |  | |  | `pruefzeitv` |  |  |
| `InspectionEndDate` |  | |  | `cast( qamr.pruefdatub as vdm_qpruefdatb preserving type )` |  |  |
| `InspectionEndTime` |  | |  | `pruefzeitb` |  |  |
| `CreatedByUser` |  | |  | `ersteller` |  |  |
| `CreationDate` |  | |  | `erstelldat` |  |  |
| `LastChangedByUser` |  | |  | `aenderer` |  |  |
| `LastChangeDate` |  | |  | `aenderdat` |  |  |
| `ChangedDateTime` |  | |  | `case qamr.changeddatetime when 0 then cast( '19000101010101' as tzntstmps ) else qamr.changeddatetime end` |  |  |
| `ChangedTime` |  | |  | `zeitaend` |  |  |
| `CreationTime` |  | |  | `zeiterstl` |  |  |
| `InspResultNrOfAddlDcmlsPlaces` |  | |  | `diff_dec_places` |  |  |
| `InspSpecIsChgDocRequired` |  | |  | `aendbeleg` |  |  |
| `_InspectionLot` | | ✓ | | | | |
| `_InspectionOperation` | | ✓ | | | | |
| `_InspectionCharacteristic` | | ✓ | | | | |
| `_CharcAttributeCodeGrp` | | ✓ | | | | |
| `_CharcAttributeCode` | | ✓ | | | | |
| `_InspectionResultStatus` | | ✓ | | | | |
| `_InspectionResultAttribute` | | ✓ | | | | |
| `_InspectionResultOrigin` | | ✓ | | | | |
| `_InspectionValuationResult` | | ✓ | | | | |
| `_InspResultDynModifValuation` | | ✓ | | | | |
| `_InspResultLongText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLot` | `I_InspectionLot` | [1..1] |
| `_InspectionOperation` | `I_InspectionOperation` | [1..1] |
| `_InspectionCharacteristic` | `I_InspectionCharacteristic` | [1..1] |
| `_CharcAttributeCodeGrp` | `I_CharcAttributeCodeGrp` | [0..1] |
| `_CharcAttributeCode` | `I_CharcAttributeCode` | [0..1] |
| `_InspectionResultStatus` | `I_InspectionResultStatus` | [0..1] |
| `_InspectionResultAttribute` | `I_InspectionResultAttribute` | [0..1] |
| `_InspectionResultOrigin` | `I_InspectionResultOrigin` | [0..1] |
| `_InspectionValuationResult` | `I_InspectionValuationResult` | [0..1] |
| `_InspResultDynModifValuation` | `I_InspectionValuationResult` | [0..1] |
| `_InspResultLongText` | `I_InspResultLongText` | [0..*] |
| `_Extension` | `E_InspectionResult` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPRESULT'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Summarized Insp Result for an Insp Charc'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #L,
    serviceQuality: #B
}
@ObjectModel.representativeKey: 'InspectionCharacteristic'
@Metadata.ignorePropagatedAnnotations: true
define view I_InspectionResult
  as select from qamr
  association [1..1] to I_InspectionLot             as _InspectionLot               on  $projection.InspectionLot                  = _InspectionLot.InspectionLot
  association [1..1] to I_InspectionOperation       as _InspectionOperation         on  $projection.InspectionLot                  = _InspectionOperation.InspectionLot
                                                                                    and $projection.InspPlanOperationInternalID    = _InspectionOperation.InspPlanOperationInternalID
  association [1..1] to I_InspectionCharacteristic  as _InspectionCharacteristic    on  $projection.InspectionLot                  = _InspectionCharacteristic.InspectionLot
                                                                                    and $projection.InspPlanOperationInternalID    = _InspectionCharacteristic.InspPlanOperationInternalID
                                                                                    and $projection.InspectionCharacteristic       = _InspectionCharacteristic.InspectionCharacteristic
  association [0..1] to I_CharcAttributeCodeGrp     as _CharcAttributeCodeGrp       on  $projection.CharacteristicAttributeCodeGrp = _CharcAttributeCodeGrp.CharacteristicAttributeCodeGrp
  association [0..1] to I_CharcAttributeCode        as _CharcAttributeCode          on  $projection.CharacteristicAttributeCodeGrp = _CharcAttributeCode.CharacteristicAttributeCodeGrp
                                                                                    and $projection.CharacteristicAttributeCode    = _CharcAttributeCode.CharacteristicAttributeCode
  association [0..1] to I_InspectionResultStatus    as _InspectionResultStatus      on  $projection.InspectionResultStatus         = _InspectionResultStatus.InspectionResultStatus
  association [0..1] to I_InspectionResultAttribute as _InspectionResultAttribute   on  $projection.InspectionResultAttribute      = _InspectionResultAttribute.InspectionResultAttribute
  association [0..1] to I_InspectionResultOrigin    as _InspectionResultOrigin      on  $projection.InspectionResultOrigin         = _InspectionResultOrigin.InspectionResultOrigin
  association [0..1] to I_InspectionValuationResult as _InspectionValuationResult   on  $projection.InspectionValuationResult      = _InspectionValuationResult.InspectionValuationResult
  association [0..1] to I_InspectionValuationResult as _InspResultDynModifValuation on  $projection.InspResultDynModifValuation    = _InspResultDynModifValuation.InspectionValuationResult  
  association [0..*] to I_InspResultLongText        as _InspResultLongText          on  $projection.InspectionLot                  = _InspResultLongText.InspectionLot
                                                                                    and $projection.InspPlanOperationInternalID    = _InspResultLongText.InspPlanOperationInternalID
                                                                                    and $projection.InspectionCharacteristic       = _InspResultLongText.InspectionCharacteristic

  //Extension
  association [1..1] to E_InspectionResult          as _Extension //Ignore "_Extension is not used because of Guideline !
                                                                                    on  $projection.InspectionLot                  = _Extension.InspectionLot
                                                                                    and $projection.InspPlanOperationInternalID    = _Extension.InspPlanOperationInternalID
                                                                                    and $projection.InspectionCharacteristic       = _Extension.InspectionCharacteristic
{
      //--[ GENERATED:012:GlBfhyFV7jY4iHvp9{5ddW
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_InspectionLotStdVH',
                     element: 'InspectionLot' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_InspectionLot'
  key qamr.prueflos                                                                                        as InspectionLot,
      //--[ GENERATED:012:GlBfhyFV7jY4iHvp9{5ddW
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_InspectionOperationStdVH',
                     element: 'InspPlanOperationInternalID' },
          additionalBinding: [{ localElement: 'InspectionLot',
                                element: 'InspectionLot' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_InspectionOperation'
  key qamr.vorglfnr                                                                                        as InspPlanOperationInternalID,
      @ObjectModel.foreignKey.association: '_InspectionCharacteristic'
  key qamr.merknr                                                                                          as InspectionCharacteristic,
      qamr.pruefer                                                                                         as Inspector,
      @ObjectModel.foreignKey.association: '_InspectionResultStatus'
      qamr.satzstatus                                                                                      as InspectionResultStatus,
      case qamr.kzbewertg when '+' then cast('X' as vdm_inspres_completion_forced preserving type ) 
                          when '.' then cast('X' as vdm_inspres_completion_forced preserving type ) 
                          when '/' then cast('X' as vdm_inspres_completion_forced preserving type )
                          else cast('' as vdm_inspres_completion_forced preserving type ) 
                          end                                                                              as InspResultIsCompletionForced, 
      @ObjectModel.foreignKey.association: '_InspectionResultAttribute'
      qamr.attribut                                                                                        as InspectionResultAttribute,     // Attribute at header leve - Single/Summary
      @ObjectModel.foreignKey.association: '_InspectionResultOrigin'
      qamr.qergdath                                                                                        as InspectionResultOrigin,
      @ObjectModel.foreignKey.association: '_InspectionValuationResult'
      qamr.mbewertg                                                                                        as InspectionValuationResult,     //Valuation displayed at char header level
      @ObjectModel.foreignKey.association: '_InspResultDynModifValuation'      
      qamr.dbewertg                                                                                        as InspResultDynModifValuation,            
      qamr.mittelwert                                                                                      as InspectionResultMeanValue,     //Mean value, single/Summary at  header level
      cast(case qamr.mittelwni when '*' then 'X' else qamr.mittelwni end as qninitial preserving type )    as InspectionResultHasMeanValue,
      qamr.maxwert                                                                                         as InspectionResultMaximumValue,  //Maximum value, single/Summary at  header level
      cast(case qamr.maxwertni when '*' then 'X' else qamr.maxwertni end as qninitial preserving type )    as InspResultHasMaximumValue,
      qamr.minwert                                                                                         as InspectionResultMinimumValue,  //Minimum value, single/Summary at  header level
      cast(case qamr.minwertni when '*' then 'X' else qamr.minwertni end as qninitial preserving type )    as InspResultHasMinimumValue,
      qamr.original_input                                                                                  as InspectionResultOriginalValue, //Original value for result record type summary
      qamr.anzwertg                                                                                        as InspResultValidValuesNumber,
      qamr.iststpumf                                                                                       as InspResultNmbrOfRecordedRslts,
      cast( qamr.pruefbemkt as vdm_qinspectionresultdesc preserving type )                                 as InspectionResultText,
      qamr.prltextkz                                                                                       as InspectionResultHasLongText,
      qamr.ltextspr                                                                                        as Language,
      //--[ GENERATED:012:GlBfhyFV7jY4iHvp9{5ddW
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CharcAttributeCodeGrpStdVH',
                     element: 'CharacteristicAttributeCodeGrp' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CharcAttributeCodeGrp'
      qamr.gruppe1                                                                                         as CharacteristicAttributeCodeGrp,
      //--[ GENERATED:012:GlBfhyFV7jY4iHvp9{5ddW
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CharcAttributeCodeStdVH',
                     element: 'CharacteristicAttributeCode' },
          additionalBinding: [{ localElement: 'CharacteristicAttributeCodeGrp',
                                element: 'CharacteristicAttributeCodeGrp' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CharcAttributeCode'
      qamr.code1                                                                                           as CharacteristicAttributeCode,
      qamr.version1                                                                                        as CharcAttributeCodeVers,
      qamr.maschine                                                                                        as InspRsltFreeDefinedTestEquip,
      qamr.anzwertu                                                                                        as InspRsltBelowToleranceValsNmbr,
      qamr.anzwerto                                                                                        as InspRsltAboveToleranceValsNmbr,
      qamr.anzfehleh                                                                                       as InspRsltNonconformingValsNmbr,
      qamr.anzfehler                                                                                       as InspectionNumberOfDefects,
      qamr.anteilo                                                                                         as InspRsltAboveToleranceFraction,
      qamr.anteilu                                                                                         as InspRsltBelowToleranceFraction,
      qamr.varianz                                                                                         as InspResultVariance,
      cast(case qamr.varianzni when '*' then 'X' else qamr.varianzni end as vdm_varianzni preserving type) as InspResultHasVariance,
      qamr.katalgart1                                                                                      as CharacteristicAttributeCatalog,
      qamr.katalgart2                                                                                      as InspectionResultCatalog2,
      qamr.katalgart3                                                                                      as InspectionResultCatalog3,
      qamr.katalgart4                                                                                      as InspectionResultCatalog4,
      qamr.katalgart5                                                                                      as InspectionResultCatalog5,
      qamr.code2                                                                                           as InspectionResultCode2,
      qamr.code3                                                                                           as InspectionResultCode3,
      qamr.code4                                                                                           as InspectionResultCode4,
      qamr.code5                                                                                           as InspectionResultCode5,
      qamr.version2                                                                                        as InspectionResultCode2Vers,
      qamr.version3                                                                                        as InspectionResultCode3Vers,
      qamr.version4                                                                                        as InspectionResultCode4Vers,
      qamr.version5                                                                                        as InspectionResultCode5Vers,
      qamr.gruppe2                                                                                         as InspectionResultCodeGroup2,
      qamr.gruppe3                                                                                         as InspectionResultCodeGroup3,
      qamr.gruppe4                                                                                         as InspectionResultCodeGroup4,
      qamr.gruppe5                                                                                         as InspectionResultCodeGroup5,
      qamr.fehlklas                                                                                        as DefectClass,
      qamr.iststpanz                                                                                       as InspectionPartialSampleSize,
      qamr.pruefdatuv                                                                                      as InspectionStartDate,
      qamr.pruefzeitv                                                                                      as InspectionStartTime,
      cast( qamr.pruefdatub as vdm_qpruefdatb preserving type )                                            as InspectionEndDate,
      qamr.pruefzeitb                                                                                      as InspectionEndTime,

      @Semantics.user.createdBy: true
      qamr.ersteller                                                                                       as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      qamr.erstelldat                                                                                      as CreationDate,
      @Semantics.user.lastChangedBy: true
      qamr.aenderer                                                                                        as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      qamr.aenderdat                                                                                       as LastChangeDate,
      case qamr.changeddatetime
        when 0 then cast( '19000101010101' as tzntstmps )
        else qamr.changeddatetime                          end                                             as ChangedDateTime,
      qamr.zeitaend                                                                                        as ChangedTime,
      qamr.zeiterstl                                                                                       as CreationTime,
      qamr.diff_dec_places                                                                                 as InspResultNrOfAddlDcmlsPlaces,
      @Semantics.booleanIndicator
      qamr.aendbeleg                                                                                       as InspSpecIsChgDocRequired,
      // Associations
      _InspectionLot,
      _InspectionOperation,
      _InspectionCharacteristic,
      _CharcAttributeCodeGrp,
      _CharcAttributeCode,
      _InspectionResultStatus,
      _InspectionResultAttribute,
      _InspectionResultOrigin,
      _InspectionValuationResult,
      _InspResultDynModifValuation,      
      _InspResultLongText
}
```
