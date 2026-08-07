---
name: I_INSPLOTUSAGEDECISION
description: Insplotusagedecision
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
# I_INSPLOTUSAGEDECISION

**Insplotusagedecision**

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
| `InspLotUsageDecisionLevel` |  | |  | `kzart` |  |  |
| `InspLotUsageDecisionInternalID` |  | |  | `zaehler` |  |  |
| `InspectionLotQualityScore` |  | |  | `qkennzahl` |  |  |
| `InspLotUsageDecisionCatalog` |  | |  | `vkatart` |  |  |
| `SelectedCodeSetPlant` |  | |  | `vwerks` |  |  |
| `InspLotUsgeDcsnSelectedSet` |  | |  | `vauswahlmg` |  |  |
| `InspLotUsageDecisionCodeGroup` |  | |  | `cast( qave.vcodegrp as vdm_qvgruppe preserving type )` |  |  |
| `InspectionLotUsageDecisionCode` |  | |  | `vcode` |  |  |
| `InspLotUsgeDcsnDynValuation` |  | |  | `dbewertung` |  |  |
| `InspLotUsageDecisionValuation` |  | |  | `vbewertung` |  |  |
| `InspLotUsgeDcsnFollowUpAction` |  | |  | `vfolgeakti` |  |  |
| `InspectionLotUsageDecidedBy` |  | |  | `cast( qave.vname as vdm_qvname preserving type )` |  |  |
| `InspectionLotUsageDecidedOn` |  | |  | `cast( qave.vdatum as vdm_qvedatum preserving type )` |  |  |
| `InspLotUsageDecisionTime` |  | |  | `cast( qave.vezeiterf as vdm_qvezeiterf preserving type )` |  |  |
| `InspLotUsageDecisionChangedBy` |  | |  | `cast( qave.vaename as vdm_qvaename preserving type )` |  |  |
| `InspLotUsageDecisionChangedOn` |  | |  | `cast( qave.vaedatum as vdm_qvaedatum preserving type )` |  |  |
| `InspLotUsgeDcsnChangedTime` |  | |  | `cast( qave.vezeitaen as vdm_qvezeitaen preserving type )` |  |  |
| `InspLotUsgeDcsnHasLongText` |  | |  | `cast( qave.ltextkz as vdm_qltextave preserving type )` |  |  |
| `_InspectionLot` | | ✓ | | | | |
| `_InspLotUsgeDcsnLongText` | | ✓ | | | | |
| `_InspLotUsgeDcsnSelectedSet` | | ✓ | | | | |
| `_UsageDcsnSelectedCodeSet` | | ✓ | | | | |
| `_UsageDecisionCodeGroup` | | ✓ | | | | |
| `_UsageDecisionCode` | | ✓ | | | | |
| `_InspectionLotUsageDecidedBy` | | ✓ | | | | |
| `_InspLotUsageDecisionChangedBy` | | ✓ | | | | |
| `_UsgeDecidedByUserContactCard` | | ✓ | | | | |
| `_UsgeDcsnChgdByUserContactCard` | | ✓ | | | | |
| `_SelectedCodeSetPlant` | | ✓ | | | | |
| `_InspLotUsgeDcsnHasLongText` | | ✓ | | | | |
| `_UsageDecisionValuation` | | ✓ | | | | |
| `_UsgeDcsnValuationText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLot` | `I_InspectionLot` | [1..1] |
| `_InspLotUsgeDcsnLongText` | `I_InspLotUsgeDcsnLongText` | [1..*] |
| `_InspLotUsgeDcsnSelectedSet` | `I_InspectionSelectedSet` | [1..1] |
| `_UsageDcsnSelectedCodeSet` | `I_UsageDcsnSelectedCodeSet` | [1..1] |
| `_UsageDecisionCodeGroup` | `I_UsageDecisionCodeGroup` | [1..1] |
| `_UsageDecisionCode` | `I_UsageDecisionCode` | [1..1] |
| `_InspectionLotUsageDecidedBy` | `I_User` | [0..1] |
| `_InspLotUsageDecisionChangedBy` | `I_User` | [0..1] |
| `_UsgeDecidedByUserContactCard` | `I_UserContactCard` | [0..1] |
| `_UsgeDcsnChgdByUserContactCard` | `I_UserContactCard` | [0..1] |
| `_SelectedCodeSetPlant` | `I_Plant` | [0..1] |
| `_InspLotUsgeDcsnHasLongText` | `I_Indicator` | [0..1] |
| `_UsageDecisionValuation` | `I_InspLotUsgeDcsnValn` | [0..1] |
| `_UsgeDcsnValuationText` | `I_InspLotUsgeDcsnValnTxt` | [0..*] |
| `_Extension` | `E_InspLotUsageDecision` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPLOTUSGDCSN'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_INSPLOTUSAGEDECISIONCHANGEDBY','_INSPECTIONLOTUSAGEDECIDEDBY']
@EndUserText.label: 'Usage Decision for Inspection Lot'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #L,
    serviceQuality: #B
}
@Metadata.ignorePropagatedAnnotations: true
define view I_InspLotUsageDecision
  as select from qave

  //Association to other QM nodes
  association [1..1] to I_InspectionLot            as _InspectionLot                 on  $projection.InspectionLot = _InspectionLot.InspectionLot
  association [1..*] to I_InspLotUsgeDcsnLongText  as _InspLotUsgeDcsnLongText       on  $projection.InspectionLot = _InspLotUsgeDcsnLongText.InspectionLot
  //Association to customizing
  association [1..1] to I_InspectionSelectedSet    as _InspLotUsgeDcsnSelectedSet // DEPRECATED; do not use any longer, use _UsageDcsn_SelectedCodeSet instead
                                                                                     on  _InspLotUsgeDcsnSelectedSet.SelectedCodeSetPlant = $projection.SelectedCodeSetPlant
                                                                                     and _InspLotUsgeDcsnSelectedSet.InspectionCatalog    = '3' // Do not model associations with static value!
                                                                                     and _InspLotUsgeDcsnSelectedSet.SelectedCodeSet      = $projection.InspLotUsgeDcsnSelectedSet

  association [1..1] to I_UsageDcsnSelectedCodeSet as _UsageDcsnSelectedCodeSet      on  $projection.SelectedCodeSetPlant       = _UsageDcsnSelectedCodeSet.SelectedCodeSetPlant
                                                                                     and $projection.InspLotUsgeDcsnSelectedSet = _UsageDcsnSelectedCodeSet.SelectedCodeSet

  association [1..1] to I_UsageDecisionCodeGroup   as _UsageDecisionCodeGroup        on  $projection.InspLotUsageDecisionCodeGroup = _UsageDecisionCodeGroup.UsageDecisionCodeGroup
  association [1..1] to I_UsageDecisionCode        as _UsageDecisionCode             on  $projection.InspLotUsageDecisionCodeGroup  = _UsageDecisionCode.UsageDecisionCodeGroup
                                                                                     and $projection.InspectionLotUsageDecisionCode = _UsageDecisionCode.UsageDecisionCode

  //Assocation to foundation views
  association [0..1] to I_User                     as _InspectionLotUsageDecidedBy   on  $projection.InspectionLotUsageDecidedBy = _InspectionLotUsageDecidedBy.UserID
  association [0..1] to I_User                     as _InspLotUsageDecisionChangedBy on  $projection.InspLotUsageDecisionChangedBy = _InspLotUsageDecisionChangedBy.UserID
  association [0..1] to I_UserContactCard          as _UsgeDecidedByUserContactCard  on  $projection.InspectionLotUsageDecidedBy = _UsgeDecidedByUserContactCard.ContactCardID
  association [0..1] to I_UserContactCard          as _UsgeDcsnChgdByUserContactCard on  $projection.InspLotUsageDecisionChangedBy = _UsgeDcsnChgdByUserContactCard.ContactCardID
  association [0..1] to I_Plant                    as _SelectedCodeSetPlant          on  $projection.SelectedCodeSetPlant = _SelectedCodeSetPlant.Plant
  association [0..1] to I_Indicator                as _InspLotUsgeDcsnHasLongText    on  $projection.InspLotUsgeDcsnHasLongText = _InspLotUsgeDcsnHasLongText.IndicatorValue

  //Association to domain values
  association [0..1] to I_InspLotUsgeDcsnValn      as _UsageDecisionValuation        on  $projection.InspLotUsageDecisionValuation = _UsageDecisionValuation.InspLotUsageDecisionValuation
  association [0..*] to I_InspLotUsgeDcsnValnTxt   as _UsgeDcsnValuationText         on  $projection.InspLotUsageDecisionValuation = _UsgeDcsnValuationText.QltyTechKeyWithPreservingType

  //Extension
  association [1..1] to E_InspLotUsageDecision     as _Extension                     on  $projection.InspectionLot = _Extension.InspectionLot
{
      //--[ GENERATED:012:GFBfhyK17kY4ia4JWX{K9W
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_InspectionLotStdVH',
                     element: 'InspectionLot' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_InspectionLot'
  key qave.prueflos                                            as InspectionLot,
      qave.kzart                                               as InspLotUsageDecisionLevel,
      qave.zaehler                                             as InspLotUsageDecisionInternalID,
      qave.qkennzahl                                           as InspectionLotQualityScore,
      qave.vkatart                                             as InspLotUsageDecisionCatalog,
      @ObjectModel.foreignKey.association: '_SelectedCodeSetPlant'
      qave.vwerks                                              as SelectedCodeSetPlant,
      @ObjectModel.foreignKey.association: '_UsageDcsnSelectedCodeSet'
      qave.vauswahlmg                                          as InspLotUsgeDcsnSelectedSet,
      //--[ GENERATED:012:GFBfhyK17kY4ia4JWX{K9W
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_UsageDecisionCodeGroupStdVH',
                     element: 'UsageDecisionCodeGroup' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_UsageDecisionCodeGroup'
      cast( qave.vcodegrp as vdm_qvgruppe preserving type )    as InspLotUsageDecisionCodeGroup,
      //--[ GENERATED:012:GFBfhyK17kY4ia4JWX{K9W
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_UsageDecisionCodeStdVH',
                     element: 'UsageDecisionCode' },
          additionalBinding: [{ localElement: 'InspLotUsageDecisionCodeGroup',
                                element: 'UsageDecisionCodeGroup' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_UsageDecisionCode'
      qave.vcode                                               as InspectionLotUsageDecisionCode,
      qave.dbewertung                                          as InspLotUsgeDcsnDynValuation,
      @ObjectModel.foreignKey.association: '_UsageDecisionValuation'
      qave.vbewertung                                          as InspLotUsageDecisionValuation,
      qave.vfolgeakti                                          as InspLotUsgeDcsnFollowUpAction,
      cast( qave.vname as vdm_qvname preserving type )         as InspectionLotUsageDecidedBy,
      cast( qave.vdatum as vdm_qvedatum preserving type )      as InspectionLotUsageDecidedOn,
      cast( qave.vezeiterf as vdm_qvezeiterf preserving type ) as InspLotUsageDecisionTime,
      cast( qave.vaename as vdm_qvaename preserving type )     as InspLotUsageDecisionChangedBy,
      cast( qave.vaedatum as vdm_qvaedatum preserving type )   as InspLotUsageDecisionChangedOn,
      cast( qave.vezeitaen as vdm_qvezeitaen preserving type ) as InspLotUsgeDcsnChangedTime,
      @ObjectModel.foreignKey.association: '_InspLotUsgeDcsnHasLongText'
      cast( qave.ltextkz as vdm_qltextave preserving type )    as InspLotUsgeDcsnHasLongText,

      // Associations
      _InspectionLot,
      _InspLotUsgeDcsnLongText,
      _UsageDecisionCodeGroup,
      _UsageDecisionCode,
      _InspectionLotUsageDecidedBy,
      _InspLotUsageDecisionChangedBy,
      _UsgeDecidedByUserContactCard,
      _UsgeDcsnChgdByUserContactCard,
      _UsageDecisionValuation,
      _UsgeDcsnValuationText,
      _SelectedCodeSetPlant,
      //      @API.element: { releaseState: #DEPRECATED, successor: '_UsageDcsnSelectedCodeSet' }
      _InspLotUsgeDcsnSelectedSet, // DEPRECATED; do not use any longer, use _UsageDcsn_SelectedCodeSet instead
      _UsageDcsnSelectedCodeSet,
      _InspLotUsgeDcsnHasLongText

}
where
      kzart   = 'L'
  and zaehler is initial
```
