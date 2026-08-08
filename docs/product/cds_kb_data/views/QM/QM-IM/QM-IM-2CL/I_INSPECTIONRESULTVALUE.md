---
name: I_INSPECTIONRESULTVALUE
description: "Inspectionresultvalue"
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
# I_INSPECTIONRESULTVALUE

**Inspectionresultvalue**

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
| `InspResultValueInternalID` | ✓ | |  | `detailerg` |  |  |
| `InspectionResultAttribute` |  | |  | `attribut` |  |  |
| `InspResultItemInternalID` |  | |  | `stuecknr` |  |  |
| `InspectionSubsetInternalID` |  | |  | `probenr` |  |  |
| `InspectionResultMeasuredValue` |  | |  | `messwert` |  |  |
| `InspResultHasMeasuredValue` |  | |  | `cast(case qase.messwertni when '*' then 'X' else qase.messwertni end as qmesswrtni preserving type )` |  |  |
| `InspectionResultOriginalValue` |  | |  | `original_input` |  |  |
| `InspectionResultText` |  | |  | `cast( qase.pruefbemkt as vdm_qinspectionvalueresultdesc preserving type )` |  |  |
| `InspectionResultHasLongText` |  | |  | `prltextkz` |  |  |
| `Language` |  | |  | `ltextspr` |  |  |
| `InspLotSingleUnitNumber` |  | |  | `estuecknr` |  |  |
| `InspectionResultItem` |  | |  | `serialnr` |  |  |
| `InspRsltFreeDefinedTestEquip` |  | |  | `maschine` |  |  |
| `InspectionValuationResult` |  | |  | `mbewertg` |  |  |
| `CharacteristicAttributeCodeGrp` |  | |  | `gruppe1` |  |  |
| `InspectionResultCodeGroup2` |  | |  | `gruppe2` |  |  |
| `InspectionResultCodeGroup3` |  | |  | `gruppe3` |  |  |
| `InspectionResultCodeGroup4` |  | |  | `gruppe4` |  |  |
| `InspectionResultCodeGroup5` |  | |  | `gruppe5` |  |  |
| `CharacteristicAttributeCode` |  | |  | `code1` |  |  |
| `InspectionResultCode2` |  | |  | `code2` |  |  |
| `InspectionResultCode3` |  | |  | `code3` |  |  |
| `InspectionResultCode4` |  | |  | `code4` |  |  |
| `InspectionResultCode5` |  | |  | `code5` |  |  |
| `CharcAttributeCodeVers` |  | |  | `version1` |  |  |
| `InspectionResultCode2Vers` |  | |  | `version2` |  |  |
| `InspectionResultCode3Vers` |  | |  | `version3` |  |  |
| `InspectionResultCode4Vers` |  | |  | `version4` |  |  |
| `InspectionResultCode5Vers` |  | |  | `version5` |  |  |
| `CharacteristicAttributeCatalog` |  | |  | `katalgart1` |  |  |
| `InspectionResultCatalog2` |  | |  | `katalgart2` |  |  |
| `InspectionResultCatalog3` |  | |  | `katalgart3` |  |  |
| `InspectionResultCatalog4` |  | |  | `katalgart4` |  |  |
| `InspectionResultCatalog5` |  | |  | `katalgart5` |  |  |
| `Inspector` |  | |  | `pruefer` |  |  |
| `InspectionStartDate` |  | |  | `pruefdatuv` |  |  |
| `InspectionStartTime` |  | |  | `pruefzeitv` |  |  |
| `InspectionEndDate` |  | |  | `pruefdatub` |  |  |
| `InspectionEndTime` |  | |  | `pruefzeitb` |  |  |
| `InspectionNumberOfDefects` |  | |  | `anzfehler` |  |  |
| `DefectClass` |  | |  | `fehlklas` |  |  |
| `InspResultNrOfAddlDcmlsPlaces` |  | |  | `diff_dec_places` |  |  |
| `CreatedByUser` |  | |  | `ersteller` |  |  |
| `CreationDate` |  | |  | `erstelldat` |  |  |
| `LastChangedByUser` |  | |  | `aenderer` |  |  |
| `LastChangeDate` |  | |  | `aenderdat` |  |  |
| `ChangedTime` |  | |  | `zeitaend` |  |  |
| `CreationTime` |  | |  | `zeiterstl` |  |  |
| `_InspectionLot` | | ✓ | | | | |
| `_InspectionOperation` | | ✓ | | | | |
| `_InspectionCharacteristic` | | ✓ | | | | |
| `_InspSubsetCharacteristic` | | ✓ | | | | |
| `_InspResultValueLongText` | | ✓ | | | | |
| `_CharcAttributeCodeGrp` | | ✓ | | | | |
| `_CharcAttributeCode` | | ✓ | | | | |
| `_InspectionResultAttribute` | | ✓ | | | | |
| `_InspectionValuationResult` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLot` | `I_InspectionLot` | [1..1] |
| `_InspectionOperation` | `I_InspectionOperation` | [1..1] |
| `_InspectionCharacteristic` | `I_InspectionCharacteristic` | [1..1] |
| `_InspSubsetCharacteristic` | `I_InspSubsetCharacteristic` | [0..1] |
| `_InspResultValueLongText` | `I_InspResultValueLongText` | [0..*] |
| `_CharcAttributeCodeGrp` | `I_CharcAttributeCodeGrp` | [0..1] |
| `_CharcAttributeCode` | `I_CharcAttributeCode` | [0..1] |
| `_InspectionResultAttribute` | `I_InspectionResultAttribute` | [0..1] |
| `_InspectionValuationResult` | `I_InspectionValuationResult` | [0..1] |
| `_Extension` | `E_InspectionResultValue` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IINSPRESULTVALUE',
    compiler.compareFilter: true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Single Value of an Inspection Charc Rslt'
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
    representativeKey: 'InspResultValueInternalID'
}
@Metadata.ignorePropagatedAnnotations: true
define view I_InspectionResultValue
  as select from qase

  association [1..1] to I_InspectionLot             as _InspectionLot             on  $projection.InspectionLot = _InspectionLot.InspectionLot
  association [1..1] to I_InspectionOperation       as _InspectionOperation       on  $projection.InspectionLot               = _InspectionOperation.InspectionLot
                                                                                  and $projection.InspPlanOperationInternalID = _InspectionOperation.InspPlanOperationInternalID
  association [1..1] to I_InspectionCharacteristic  as _InspectionCharacteristic  on  $projection.InspectionLot               = _InspectionCharacteristic.InspectionLot
                                                                                  and $projection.InspPlanOperationInternalID = _InspectionCharacteristic.InspPlanOperationInternalID
                                                                                  and $projection.InspectionCharacteristic    = _InspectionCharacteristic.InspectionCharacteristic
  association [0..1] to I_InspSubsetCharacteristic  as _InspSubsetCharacteristic  on  $projection.InspectionLot               = _InspSubsetCharacteristic.InspectionLot
                                                                                  and $projection.InspPlanOperationInternalID = _InspSubsetCharacteristic.InspPlanOperationInternalID
                                                                                  and $projection.InspectionCharacteristic    = _InspSubsetCharacteristic.InspectionCharacteristic
                                                                                  and $projection.InspectionSubsetInternalID  = _InspSubsetCharacteristic.InspectionSubsetInternalID
  association [0..*] to I_InspResultValueLongText  as _InspResultValueLongText  on  $projection.InspectionLot                 = _InspResultValueLongText.InspectionLot
                                                                                  and $projection.InspPlanOperationInternalID = _InspResultValueLongText.InspPlanOperationInternalID
                                                                                  and $projection.InspectionCharacteristic    = _InspResultValueLongText.InspectionCharacteristic
                                                                                  and $projection.InspResultValueInternalID   = _InspResultValueLongText.InspResultValueInternalID       
                                                                                  and $projection.Language                    = _InspResultValueLongText.Language                                                               
  association [0..1] to I_CharcAttributeCodeGrp     as _CharcAttributeCodeGrp     on  $projection.CharacteristicAttributeCodeGrp = _CharcAttributeCodeGrp.CharacteristicAttributeCodeGrp
  association [0..1] to I_CharcAttributeCode        as _CharcAttributeCode        on  $projection.CharacteristicAttributeCodeGrp = _CharcAttributeCode.CharacteristicAttributeCodeGrp
                                                                                  and $projection.CharacteristicAttributeCode    = _CharcAttributeCode.CharacteristicAttributeCode
  association [0..1] to I_InspectionResultAttribute as _InspectionResultAttribute on  $projection.InspectionResultAttribute = _InspectionResultAttribute.InspectionResultAttribute
  association [0..1] to I_InspectionValuationResult as _InspectionValuationResult on  $projection.InspectionValuationResult = _InspectionValuationResult.InspectionValuationResult
  //Extension
  association [1..1] to E_InspectionResultValue     as _Extension                 on  $projection.InspectionLot               = _Extension.InspectionLot
                                                                                  and $projection.InspPlanOperationInternalID = _Extension.InspPlanOperationInternalID
                                                                                  and $projection.InspectionCharacteristic    = _Extension.InspectionCharacteristic
                                                                                  and $projection.InspResultValueInternalID   = _Extension.InspResultValueInternalID
{
      @ObjectModel.foreignKey.association: '_InspectionLot'
  key qase.prueflos                                                                                        as InspectionLot,
      @ObjectModel.foreignKey.association: '_InspectionOperation'
  key qase.vorglfnr                                                                                        as InspPlanOperationInternalID,
      @ObjectModel.foreignKey.association: '_InspectionCharacteristic'
  key qase.merknr                                                                                          as InspectionCharacteristic,
  key qase.detailerg                                                                                       as InspResultValueInternalID,
      @ObjectModel.foreignKey.association: '_InspectionResultAttribute'
      qase.attribut                                                                                        as InspectionResultAttribute,
      qase.stuecknr                                                                                        as InspResultItemInternalID,
      qase.probenr                                                                                         as InspectionSubsetInternalID,
      qase.messwert                                                                                        as InspectionResultMeasuredValue,
      cast(case qase.messwertni when '*' then 'X' else qase.messwertni end as qmesswrtni preserving type ) as InspResultHasMeasuredValue,
      qase.original_input                                                                                  as InspectionResultOriginalValue,
      cast( qase.pruefbemkt as vdm_qinspectionvalueresultdesc preserving type )                            as InspectionResultText,
      @Semantics.booleanIndicator: true
      qase.prltextkz                                                                                       as InspectionResultHasLongText,
      qase.ltextspr                                                                                        as Language,
      qase.estuecknr                                                                                       as InspLotSingleUnitNumber,
      qase.serialnr                                                                                        as InspectionResultItem,
      qase.maschine                                                                                        as InspRsltFreeDefinedTestEquip,
      @ObjectModel.foreignKey.association: '_InspectionValuationResult'
      qase.mbewertg                                                                                        as InspectionValuationResult,
      @ObjectModel.foreignKey.association: '_CharcAttributeCodeGrp'
      qase.gruppe1                                                                                         as CharacteristicAttributeCodeGrp,
      qase.gruppe2                                                                                         as InspectionResultCodeGroup2,
      qase.gruppe3                                                                                         as InspectionResultCodeGroup3,
      qase.gruppe4                                                                                         as InspectionResultCodeGroup4,
      qase.gruppe5                                                                                         as InspectionResultCodeGroup5,
      @ObjectModel.foreignKey.association: '_CharcAttributeCode'
      qase.code1                                                                                           as CharacteristicAttributeCode,
      qase.code2                                                                                           as InspectionResultCode2,
      qase.code3                                                                                           as InspectionResultCode3,
      qase.code4                                                                                           as InspectionResultCode4,
      qase.code5                                                                                           as InspectionResultCode5,
      qase.version1                                                                                        as CharcAttributeCodeVers,
      qase.version2                                                                                        as InspectionResultCode2Vers,
      qase.version3                                                                                        as InspectionResultCode3Vers,
      qase.version4                                                                                        as InspectionResultCode4Vers,
      qase.version5                                                                                        as InspectionResultCode5Vers,
      qase.katalgart1                                                                                      as CharacteristicAttributeCatalog,
      qase.katalgart2                                                                                      as InspectionResultCatalog2,
      qase.katalgart3                                                                                      as InspectionResultCatalog3,
      qase.katalgart4                                                                                      as InspectionResultCatalog4,
      qase.katalgart5                                                                                      as InspectionResultCatalog5,
      qase.pruefer                                                                                         as Inspector,
      qase.pruefdatuv                                                                                      as InspectionStartDate,
      qase.pruefzeitv                                                                                      as InspectionStartTime,
      qase.pruefdatub                                                                                      as InspectionEndDate,
      qase.pruefzeitb                                                                                      as InspectionEndTime,
      qase.anzfehler                                                                                       as InspectionNumberOfDefects,
      qase.fehlklas                                                                                        as DefectClass,
      qase.diff_dec_places                                                                                 as InspResultNrOfAddlDcmlsPlaces,
      @Semantics.user.createdBy: true
      qase.ersteller                                                                                       as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      qase.erstelldat                                                                                      as CreationDate,
      @Semantics.user.lastChangedBy: true
      qase.aenderer                                                                                        as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      qase.aenderdat                                                                                       as LastChangeDate,
      qase.zeitaend                                                                                        as ChangedTime,
      qase.zeiterstl                                                                                       as CreationTime,

      // Association
      _InspectionLot,
      _InspectionOperation,
      _InspectionCharacteristic,
      _InspSubsetCharacteristic,
      _InspResultValueLongText,
      _CharcAttributeCodeGrp,
      _CharcAttributeCode,
      _InspectionResultAttribute,
      _InspectionValuationResult
}
```
