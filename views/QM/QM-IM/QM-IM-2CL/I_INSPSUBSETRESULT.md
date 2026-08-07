---
name: I_INSPSUBSETRESULT
description: Inspsubsetresult
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
# I_INSPSUBSETRESULT

**Inspsubsetresult**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InspectionLot` | ✓ | |  | `prueflos` |
| `InspPlanOperationInternalID` | ✓ | |  | `vorglfnr` |
| `InspectionCharacteristic` | ✓ | |  | `merknr` |
| `InspectionSubsetInternalID` | ✓ | |  | `probenr` |
| `Inspector` |  | |  | `pruefer` |
| `InspectionResultStatus` |  | |  | `satzstatus` |
| `InspectionResultOrigin` |  | |  | `qergdath` |
| `InspectionStartDate` |  | |  | `pruefdatuv` |
| `InspectionStartTime` |  | |  | `pruefzeitv` |
| `InspectionEndDate` |  | |  | `pruefdatub` |
| `InspectionEndTime` |  | |  | `pruefzeitb` |
| `InspectionResultAttribute` |  | |  | `attribut` |
| `InspectionValuationResult` |  | |  | `mbewertg` |
| `InspResultDynModifValuation` |  | |  | `dbewertg` |
| `InspectionResultMeanValue` |  | |  | `mittelwert` |
| `InspectionResultHasMeanValue` |  | |  | `cast(case qasr.mittelwni when '*' then 'X' else qasr.mittelwni end as qninitial preserving type )` |
| `InspectionResultMaximumValue` |  | |  | `maxwert` |
| `InspResultHasMaximumValue` |  | |  | `cast(case qasr.maxwertni when '*' then 'X' else qasr.maxwertni end as qninitial preserving type )` |
| `InspectionResultMinimumValue` |  | |  | `minwert` |
| `InspResultHasMinimumValue` |  | |  | `cast(case qasr.minwertni when '*' then 'X' else qasr.minwertni end as qninitial preserving type )` |
| `InspectionResultOriginalValue` |  | |  | `original_input` |
| `InspResultValidValuesNumber` |  | |  | `anzwertg` |
| `InspectionResultText` |  | |  | `cast( qasr.pruefbemkt as vdm_qinspectionsamplresultdesc preserving type )` |
| `InspectionResultHasLongText` |  | |  | `prltextkz` |
| `Language` |  | |  | `ltextspr` |
| `InspRsltFreeDefinedTestEquip` |  | |  | `maschine` |
| `InspRsltBelowToleranceValsNmbr` |  | |  | `anzwertu` |
| `InspRsltAboveToleranceValsNmbr` |  | |  | `anzwerto` |
| `InspResultNmbrOfRecordedRslts` |  | |  | `iststpumf` |
| `InspRsltNonconformingValsNmbr` |  | |  | `anzfehleh` |
| `InspectionNumberOfDefects` |  | |  | `anzfehler` |
| `InspRsltAboveToleranceFraction` |  | |  | `anteilo` |
| `InspRsltBelowToleranceFraction` |  | |  | `anteilu` |
| `InspResultVariance` |  | |  | `varianz` |
| `InspResultHasVariance` |  | |  | `cast(case qasr.varianzni when '*' then 'X' else qasr.varianzni end as vdm_varianzni preserving type )` |
| `CharcAttributeCodeVers` |  | |  | `version1` |
| `InspectionResultCode2Vers` |  | |  | `version2` |
| `InspectionResultCode3Vers` |  | |  | `version3` |
| `InspectionResultCode4Vers` |  | |  | `version4` |
| `InspectionResultCode5Vers` |  | |  | `version5` |
| `CharacteristicAttributeCodeGrp` |  | |  | `gruppe1` |
| `InspectionResultCodeGroup2` |  | |  | `gruppe2` |
| `InspectionResultCodeGroup3` |  | |  | `gruppe3` |
| `InspectionResultCodeGroup4` |  | |  | `gruppe4` |
| `InspectionResultCodeGroup5` |  | |  | `gruppe5` |
| `CharacteristicAttributeCode` |  | |  | `code1` |
| `InspectionResultCode2` |  | |  | `code2` |
| `InspectionResultCode3` |  | |  | `code3` |
| `InspectionResultCode4` |  | |  | `code4` |
| `InspectionResultCode5` |  | |  | `code5` |
| `CharacteristicAttributeCatalog` |  | |  | `katalgart1` |
| `InspectionResultCatalog2` |  | |  | `katalgart2` |
| `InspectionResultCatalog3` |  | |  | `katalgart3` |
| `InspectionResultCatalog4` |  | |  | `katalgart4` |
| `InspectionResultCatalog5` |  | |  | `katalgart5` |
| `DefectClass` |  | |  | `fehlklas` |
| `CreatedByUser` |  | |  | `ersteller` |
| `CreationDate` |  | |  | `erstelldat` |
| `LastChangedByUser` |  | |  | `aenderer` |
| `LastChangeDate` |  | |  | `aenderdat` |
| `ChangedDateTime` |  | |  | `case qasr.changeddatetime when 0 then cast( '19000101010101' as tzntstmps ) else qasr.changeddatetime end` |
| `ChangedTime` |  | |  | `zeitaend` |
| `CreationTime` |  | |  | `zeiterstl` |
| `InspResultNrOfAddlDcmlsPlaces` |  | |  | `diff_dec_places` |
| `InspSpecIsChgDocRequired` |  | |  | `aendbeleg` |
| `_InspectionLot` | | ✓ | | |
| `_InspectionOperation` | | ✓ | | |
| `_InspectionCharacteristic` | | ✓ | | |
| `_InspectionSubsetInternalID` | | ✓ | | |
| `_CharcAttributeCode` | | ✓ | | |
| `_InspectionResultStatus` | | ✓ | | |
| `_InspectionResultAttribute` | | ✓ | | |
| `_InspectionResultOrigin` | | ✓ | | |
| `_InspectionValuationResult` | | ✓ | | |
| `_InspResultDynModifValuation` | | ✓ | | |
| `_InspectionValuationRsltTxt` | | ✓ | | |
| `_InspSubsetResultLongText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLot` | `I_InspectionLot` | [1..1] |
| `_InspectionOperation` | `I_InspectionOperation` | [1..1] |
| `_InspectionCharacteristic` | `I_InspectionCharacteristic` | [1..1] |
| `_InspectionSubsetInternalID` | `I_InspSubsetCharacteristic` | [1..1] |
| `_CharcAttributeCode` | `I_CharcAttributeCode` | [0..1] |
| `_InspectionResultStatus` | `I_InspectionResultStatus` | [0..1] |
| `_InspectionResultAttribute` | `I_InspectionResultAttribute` | [0..1] |
| `_InspectionResultOrigin` | `I_InspectionResultOrigin` | [0..1] |
| `_InspectionValuationResult` | `I_InspectionValuationResult` | [0..1] |
| `_InspResultDynModifValuation` | `I_InspectionValuationResult` | [0..1] |
| `_InspectionValuationRsltTxt` | `I_InspectionValuationRsltText` | [0..*] |
| `_InspSubsetResultLongText` | `I_InspSubsetResultLongText` | [0..*] |
| `_Extension` | `E_Inspsubsetresult` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPSUBSETRSLT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Insp Result for an Inspection Point'
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
define view I_InspSubsetResult
  as select from qasr
  association [1..1] to I_InspectionLot               as _InspectionLot                 on  $projection.InspectionLot                  = _InspectionLot.InspectionLot
  association [1..1] to I_InspectionOperation         as _InspectionOperation           on  $projection.InspectionLot                  = _InspectionOperation.InspectionLot
                                                                                        and $projection.InspPlanOperationInternalID    = _InspectionOperation.InspPlanOperationInternalID
  association [1..1] to I_InspectionCharacteristic    as _InspectionCharacteristic      on  $projection.InspectionLot                  = _InspectionCharacteristic.InspectionLot
                                                                                        and $projection.InspPlanOperationInternalID    = _InspectionCharacteristic.InspPlanOperationInternalID
                                                                                        and $projection.InspectionCharacteristic       = _InspectionCharacteristic.InspectionCharacteristic
  association [1..1] to I_InspSubsetCharacteristic    as _InspectionSubsetInternalID    on  $projection.InspectionLot                  = _InspectionSubsetInternalID.InspectionLot
                                                                                        and $projection.InspPlanOperationInternalID    = _InspectionSubsetInternalID.InspPlanOperationInternalID
                                                                                        and $projection.InspectionSubsetInternalID     = _InspectionSubsetInternalID.InspectionSubsetInternalID
                                                                                        and $projection.InspectionCharacteristic       = _InspectionSubsetInternalID.InspectionCharacteristic
  association [0..1] to I_CharcAttributeCode          as _CharcAttributeCode            on  $projection.CharacteristicAttributeCodeGrp = _CharcAttributeCode.CharacteristicAttributeCodeGrp
                                                                                        and $projection.CharacteristicAttributeCode    = _CharcAttributeCode.CharacteristicAttributeCode
  association [0..1] to I_InspectionResultStatus      as _InspectionResultStatus        on  $projection.InspectionResultStatus         = _InspectionResultStatus.InspectionResultStatus
  association [0..1] to I_InspectionResultAttribute   as _InspectionResultAttribute     on  $projection.InspectionResultAttribute      = _InspectionResultAttribute.InspectionResultAttribute
  association [0..1] to I_InspectionResultOrigin      as _InspectionResultOrigin        on  $projection.InspectionResultOrigin         = _InspectionResultOrigin.InspectionResultOrigin
  association [0..1] to I_InspectionValuationResult   as _InspectionValuationResult     on  $projection.InspectionValuationResult      = _InspectionValuationResult.InspectionValuationResult
  association [0..1] to I_InspectionValuationResult   as _InspResultDynModifValuation   on  $projection.InspResultDynModifValuation    = _InspResultDynModifValuation.InspectionValuationResult  
  association [0..*] to I_InspectionValuationRsltText as _InspectionValuationRsltTxt    on  $projection.InspectionValuationResult      = _InspectionValuationRsltTxt.InspectionValuationResult
  association [0..*] to I_InspSubsetResultLongText    as _InspSubsetResultLongText      on  $projection.InspectionLot                  = _InspSubsetResultLongText.InspectionLot
                                                                                        and $projection.InspPlanOperationInternalID    = _InspSubsetResultLongText.InspPlanOperationInternalID
                                                                                        and $projection.InspectionCharacteristic       = _InspSubsetResultLongText.InspectionCharacteristic
                                                                                        and $projection.InspectionSubsetInternalID     = _InspSubsetResultLongText.InspectionSubsetInternalID

  //Extension
  association [1..1] to E_Inspsubsetresult            as _Extension //Ignore "_Extension is not used because of Guideline !
                                                                                        on  $projection.InspectionLot               = _Extension.InspectionLot
                                                                                        and $projection.InspPlanOperationInternalID = _Extension.InspPlanOperationInternalID
                                                                                        and $projection.InspectionCharacteristic    = _Extension.InspectionCharacteristic
                                                                                        and $projection.InspectionSubsetInternalID  = _Extension.InspectionSubsetInternalID
{
      @ObjectModel.foreignKey.association: '_InspectionLot'
  key qasr.prueflos                                                                                         as InspectionLot,
      @ObjectModel.foreignKey.association: '_InspectionOperation'
  key qasr.vorglfnr                                                                                         as InspPlanOperationInternalID,
      @ObjectModel.foreignKey.association: '_InspectionCharacteristic'
  key qasr.merknr                                                                                           as InspectionCharacteristic,
      @ObjectModel.foreignKey.association: '_InspectionSubsetInternalID'
  key qasr.probenr                                                                                          as InspectionSubsetInternalID,
      qasr.pruefer                                                                                          as Inspector,
      qasr.satzstatus                                                                                       as InspectionResultStatus,
      qasr.qergdath                                                                                         as InspectionResultOrigin,
      qasr.pruefdatuv                                                                                       as InspectionStartDate,
      qasr.pruefzeitv                                                                                       as InspectionStartTime,
      qasr.pruefdatub                                                                                       as InspectionEndDate,
      qasr.pruefzeitb                                                                                       as InspectionEndTime,
      qasr.attribut                                                                                         as InspectionResultAttribute,
      @ObjectModel.foreignKey.association: '_InspectionValuationResult'
      qasr.mbewertg                                                                                         as InspectionValuationResult,
      @ObjectModel.foreignKey.association: '_InspResultDynModifValuation'      
      qasr.dbewertg                                                                                         as InspResultDynModifValuation,      
      qasr.mittelwert                                                                                       as InspectionResultMeanValue,
      cast(case qasr.mittelwni when '*' then 'X' else qasr.mittelwni end as qninitial preserving type )     as InspectionResultHasMeanValue,
      qasr.maxwert                                                                                          as InspectionResultMaximumValue, //Maximum value, single/Summary at  header level
      cast(case qasr.maxwertni when '*' then 'X' else qasr.maxwertni end as qninitial preserving type )     as InspResultHasMaximumValue,
      qasr.minwert                                                                                          as InspectionResultMinimumValue, //Minimum value, single/Summary at  header level
      cast(case qasr.minwertni when '*' then 'X' else qasr.minwertni end as qninitial preserving type )     as InspResultHasMinimumValue,
      qasr.original_input                                                                                   as InspectionResultOriginalValue,
      qasr.anzwertg                                                                                         as InspResultValidValuesNumber,
      cast( qasr.pruefbemkt as vdm_qinspectionsamplresultdesc preserving type )                             as InspectionResultText,
      qasr.prltextkz                                                                                        as InspectionResultHasLongText,
      qasr.ltextspr                                                                                         as Language,
      qasr.maschine                                                                                         as InspRsltFreeDefinedTestEquip,
      qasr.anzwertu                                                                                         as InspRsltBelowToleranceValsNmbr,
      qasr.anzwerto                                                                                         as InspRsltAboveToleranceValsNmbr,
      qasr.iststpumf                                                                                        as InspResultNmbrOfRecordedRslts,
      qasr.anzfehleh                                                                                        as InspRsltNonconformingValsNmbr,
      qasr.anzfehler                                                                                        as InspectionNumberOfDefects,
      qasr.anteilo                                                                                          as InspRsltAboveToleranceFraction,
      qasr.anteilu                                                                                          as InspRsltBelowToleranceFraction,      
      qasr.varianz                                                                                          as InspResultVariance,
      cast(case qasr.varianzni when '*' then 'X' else qasr.varianzni end as vdm_varianzni preserving type ) as InspResultHasVariance,
      qasr.version1                                                                                         as CharcAttributeCodeVers,
      qasr.version2                                                                                         as InspectionResultCode2Vers,
      qasr.version3                                                                                         as InspectionResultCode3Vers,
      qasr.version4                                                                                         as InspectionResultCode4Vers,
      qasr.version5                                                                                         as InspectionResultCode5Vers,
      qasr.gruppe1                                                                                          as CharacteristicAttributeCodeGrp,
      qasr.gruppe2                                                                                          as InspectionResultCodeGroup2,
      qasr.gruppe3                                                                                          as InspectionResultCodeGroup3,
      qasr.gruppe4                                                                                          as InspectionResultCodeGroup4,
      qasr.gruppe5                                                                                          as InspectionResultCodeGroup5,
      qasr.code1                                                                                            as CharacteristicAttributeCode,
      qasr.code2                                                                                            as InspectionResultCode2,
      qasr.code3                                                                                            as InspectionResultCode3,
      qasr.code4                                                                                            as InspectionResultCode4,
      qasr.code5                                                                                            as InspectionResultCode5,
      qasr.katalgart1                                                                                       as CharacteristicAttributeCatalog,
      qasr.katalgart2                                                                                       as InspectionResultCatalog2,
      qasr.katalgart3                                                                                       as InspectionResultCatalog3,
      qasr.katalgart4                                                                                       as InspectionResultCatalog4,
      qasr.katalgart5                                                                                       as InspectionResultCatalog5,
      qasr.fehlklas                                                                                         as DefectClass,
      @Semantics.user.createdBy: true
      qasr.ersteller                                                                                        as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      qasr.erstelldat                                                                                       as CreationDate,
      @Semantics.user.lastChangedBy: true
      qasr.aenderer                                                                                         as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      qasr.aenderdat                                                                                        as LastChangeDate,
      case qasr.changeddatetime
        when 0 then cast( '19000101010101' as tzntstmps )
        else qasr.changeddatetime end                                                                       as ChangedDateTime,
      qasr.zeitaend                                                                                         as ChangedTime,
      qasr.zeiterstl                                                                                        as CreationTime,
      qasr.diff_dec_places                                                                                  as InspResultNrOfAddlDcmlsPlaces,
      @Semantics.booleanIndicator
      qasr.aendbeleg                                                                                        as InspSpecIsChgDocRequired,

      // Associations
      _InspectionLot,
      _InspectionOperation,
      _InspectionCharacteristic,
      _InspectionSubsetInternalID,
      _CharcAttributeCode,
      _InspectionResultStatus,
      _InspectionResultAttribute,
      _InspectionResultOrigin,
      _InspectionValuationResult,
      _InspResultDynModifValuation,
      _InspectionValuationRsltTxt,
      _InspSubsetResultLongText

}
```
