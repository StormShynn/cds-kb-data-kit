---
name: I_INSPECTIONSUBSET
description: Inspectionsubset
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
# I_INSPECTIONSUBSET

**Inspectionsubset**

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
| `InspectionSubsetInternalID` | ✓ | |  | `probenr` |  |  |
| `InspPlanOperationInternalID` | ✓ | |  | `vorglfnr` |  |  |
| `InspectionSubsetSortKey` |  | |  | `ppsortkey` |  |  |
| `MaterialSample` |  | |  | `phynr` |  |  |
| `InspSbstMatlSmplProperty` |  | |  | `phynrakt` |  |  |
| `Equipment` |  | |  | `equnr` |  |  |
| `InspSbstEquipProperty` |  | |  | `equnrakt` |  |  |
| `FunctionalLocation` |  | |  | `tplnr` |  |  |
| `InspSbstFuncnlLocProperty` |  | |  | `tplnrakt` |  |  |
| `ShopFloorItem` |  | |  | `sfi_id` |  |  |
| `InspSbstShopFloorItemProperty` |  | |  | `sfi_akt` |  |  |
| `InspSubsetUsageDecisionCatalog` |  | |  | `vkatart` |  |  |
| `SelectedCodeSetPlant` |  | |  | `vwerks` |  |  |
| `SelectedCodeSet` |  | |  | `vauswahlmg` |  |  |
| `InspSubsetUsageDcsnCodeGroup` |  | |  | `vcodegrp` |  |  |
| `InspSubsetUsageDcsnCode` |  | |  | `vcode` |  |  |
| `InspSubsetUsageDcsnValuation` |  | |  | `vbewertung` |  |  |
| `InspectionSubsetTime` |  | |  | `cast( usert1 as vdm_qusrtims preserving type )` |  |  |
| `InspSbstTimeFldProperty` |  | |  | `usert1akt` |  |  |
| `InspectionSubsetDate` |  | |  | `cast( userd1 as vdm_qusrdats preserving type )` |  |  |
| `InspSbstDateFldProperty` |  | |  | `userd1akt` |  |  |
| `InspectionSubsetTimeZone` |  | |  | `usrtimezone` |  |  |
| `InspSubsetLongNumericKey` |  | |  | `cast( usern1 as vdm_qusrnumc10 preserving type )` |  |  |
| `InspSbstLongNmbrFldProperty` |  | |  | `usern1akt` |  |  |
| `InspSubsetShortNumericKey` |  | |  | `cast( usern2 as vdm_qusrnumc3 preserving type )` |  |  |
| `InspSbstShrtNmbrFldProperty` |  | |  | `usern2akt` |  |  |
| `InspectionSubsetLongCharKey` |  | |  | `cast( userc1 as vdm_qusrchar18 preserving type )` |  |  |
| `InspSbstLongTxtFldProperty` |  | |  | `userc1akt` |  |  |
| `InspectionSubsetShortCharKey` |  | |  | `cast( userc2 as vdm_qusrchar10 preserving type )` |  |  |
| `InspSbstShrtTxtFldProperty` |  | |  | `userc2akt` |  |  |
| `InspectionPartialLot` |  | |  | `teillos` |  |  |
| `InspectionSubsetYieldQty` |  | |  | `menge` |  |  |
| `InspectionSubsetScrapQty` |  | |  | `menge_a` |  |  |
| `InspectionSubsetReworkQty` |  | |  | `menge_n` |  |  |
| `InspectionSubsetQtyUnit` |  | |  | `mengeneinh` |  |  |
| `Inspector` |  | |  | `pruefer` |  |  |
| `CreatedByUser` |  | |  | `ersteller` |  |  |
| `CreationDate` |  | |  | `ersteldat` |  |  |
| `CreationTime` |  | |  | `cast( erstelzeit as vdm_qzeiterstl preserving type )` |  |  |
| `LastChangedByUser` |  | |  | `aenderer` |  |  |
| `LastChangeDate` |  | |  | `aenderdat` |  |  |
| `LastChangeTime` |  | |  | `cast( aenderzeit as vdm_qzeitaend preserving type )` |  |  |
| `ChangedDateTime` |  | |  | `case qapp.changeddatetime when 0 then cast( '19000101010101' as tzntstmps ) else qapp.changeddatetime end` |  |  |
| `_UsageDecisionCodeGroup` | | ✓ | | | | |
| `_UsageDecisionCode` | | ✓ | | | | |
| `_InspSubsetUsageDcsnValn` | | ✓ | | | | |
| `_InspSubsetUsageDcsnValnTxt` | | ✓ | | | | |
| `_InspectionLot` | | ✓ | | | | |
| `_InspectionOperation` | | ✓ | | | | |
| `_InspectionSubsetInternalID` | | ✓ | | | | |
| `_MaterialSample` | | ✓ | | | | |
| `_InspectionPartialLot` | | ✓ | | | | |
| `_SelectedCodeSetPlant` | | ✓ | | | | |
| `_SelectedCodeSet` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_ShopFloorItem` | | ✓ | | | | |
| `_Unit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UsageDecisionCodeGroup` | `I_UsageDecisionCodeGroup` | [0..1] |
| `_UsageDecisionCode` | `I_UsageDecisionCode` | [0..1] |
| `_InspSubsetUsageDcsnValn` | `I_InspLotUsgeDcsnValn` | [0..1] |
| `_InspSubsetUsageDcsnValnTxt` | `I_InspLotUsgeDcsnValnTxt` | [0..*] |
| `_InspectionLot` | `I_InspectionLot` | [1..1] |
| `_InspectionOperation` | `I_InspectionOperation` | [1..1] |
| `_InspectionSubsetInternalID` | `I_InspSubsetCharacteristic` | [0..*] |
| `_MaterialSample` | `I_MaterialSample` | [0..1] |
| `_InspectionPartialLot` | `I_InspectionPartialLot` | [0..1] |
| `_SelectedCodeSetPlant` | `I_Plant` | [0..1] |
| `_SelectedCodeSet` | `I_InspUsgeDcsnSelectedSet` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_FunctionalLocation` | `I_FunctionalLocation` | [0..1] |
| `_ShopFloorItem` | `I_ShopFloorItem` | [0..1] |
| `_Unit` | `I_UnitOfMeasure` | [0..1] |
| `_Extension` | `E_InspectionSubset` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IINSPSUBSET',
    preserveKey: true,
    compiler.compareFilter: true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Inspection Point of Inspection Operation'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel: {
    usageType: { serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL },
    representativeKey: 'InspectionSubsetInternalID'
}
@Metadata.ignorePropagatedAnnotations: true

define view I_InspectionSubset
  as select from qapp

  //Association to customizing
  association [0..1] to I_UsageDecisionCodeGroup   as _UsageDecisionCodeGroup     on  $projection.InspSubsetUsageDcsnCodeGroup = _UsageDecisionCodeGroup.UsageDecisionCodeGroup
  association [0..1] to I_UsageDecisionCode        as _UsageDecisionCode          on  $projection.InspSubsetUsageDcsnCodeGroup = _UsageDecisionCode.UsageDecisionCodeGroup
                                                                                  and $projection.InspSubsetUsageDcsnCode      = _UsageDecisionCode.UsageDecisionCode
  association [0..1] to I_InspLotUsgeDcsnValn      as _InspSubsetUsageDcsnValn    on  $projection.InspSubsetUsageDcsnValuation = _InspSubsetUsageDcsnValn.InspLotUsageDecisionValuation
  association [0..*] to I_InspLotUsgeDcsnValnTxt   as _InspSubsetUsageDcsnValnTxt on  $projection.InspSubsetUsageDcsnValuation = _InspSubsetUsageDcsnValnTxt.InspLotUsageDecisionValuation

  //Association to other QM nodes
  association [1..1] to I_InspectionLot            as _InspectionLot              on  $projection.InspectionLot = _InspectionLot.InspectionLot
  association [1..1] to I_InspectionOperation      as _InspectionOperation        on  $projection.InspectionLot               = _InspectionOperation.InspectionLot
                                                                                  and $projection.InspPlanOperationInternalID = _InspectionOperation.InspPlanOperationInternalID
  association [0..*] to I_InspSubsetCharacteristic as _InspectionSubsetInternalID on  $projection.InspectionLot               = _InspectionSubsetInternalID.InspectionLot
                                                                                  and $projection.InspPlanOperationInternalID = _InspectionSubsetInternalID.InspPlanOperationInternalID
                                                                                  and $projection.InspectionSubsetInternalID  = _InspectionSubsetInternalID.InspectionSubsetInternalID
  association [0..1] to I_MaterialSample           as _MaterialSample             on  $projection.MaterialSample = _MaterialSample.MaterialSample
  association [0..1] to I_InspectionPartialLot     as _InspectionPartialLot       on  $projection.InspectionPartialLot = _InspectionPartialLot.InspectionPartialLot
                                                                                  and $projection.InspectionLot        = _InspectionPartialLot.InspectionLot
  association [0..1] to I_Plant                    as _SelectedCodeSetPlant       on  $projection.SelectedCodeSetPlant = _SelectedCodeSetPlant.Plant
  association [0..1] to I_InspUsgeDcsnSelectedSet  as _SelectedCodeSet            on  $projection.SelectedCodeSetPlant = _SelectedCodeSet.SelectedCodeSetPlant
                                                                                  and $projection.SelectedCodeSet      = _SelectedCodeSet.SelectedCodeSet

  //Associations to views of other applications
  association [0..1] to I_Equipment                as _Equipment                  on  $projection.Equipment = _Equipment.Equipment
  association [0..1] to I_FunctionalLocation       as _FunctionalLocation         on  $projection.FunctionalLocation = _FunctionalLocation.FunctionalLocation
  association [0..1] to I_ShopFloorItem            as _ShopFloorItem              on  $projection.ShopFloorItem = _ShopFloorItem.ShopFloorItem
  association [0..1] to I_UnitOfMeasure            as _Unit                       on  $projection.InspectionSubsetQtyUnit = _Unit.UnitOfMeasure

  //Extension
  association [1..1] to E_InspectionSubset         as _Extension //Ignore "_Extension is not used because of Guideline !
                                                                                  on  $projection.InspectionLot               = _Extension.InspectionLot
                                                                                  and $projection.InspPlanOperationInternalID = _Extension.InspPlanOperationInternalID
                                                                                  and $projection.InspectionSubsetInternalID  = _Extension.InspectionSubsetInternalID
{
      @ObjectModel.foreignKey.association: '_InspectionLot'
  key prueflos                                             as InspectionLot,
  key probenr                                              as InspectionSubsetInternalID,
      @ObjectModel.foreignKey.association: '_InspectionOperation'
  key vorglfnr                                             as InspPlanOperationInternalID,
      ppsortkey                                            as InspectionSubsetSortKey,
      @ObjectModel.foreignKey.association: '_MaterialSample'
      phynr                                                as MaterialSample,
      phynrakt                                             as InspSbstMatlSmplProperty,
      @ObjectModel.foreignKey.association: '_Equipment'
      equnr                                                as Equipment,
      equnrakt                                             as InspSbstEquipProperty,
      @ObjectModel.foreignKey.association: '_FunctionalLocation'
      tplnr                                                as FunctionalLocation,
      tplnrakt                                             as InspSbstFuncnlLocProperty,
      @ObjectModel.foreignKey.association: '_ShopFloorItem'
      sfi_id                                               as ShopFloorItem,
      sfi_akt                                              as InspSbstShopFloorItemProperty,
      vkatart                                              as InspSubsetUsageDecisionCatalog,
      @ObjectModel.foreignKey.association: '_SelectedCodeSetPlant'
      vwerks                                               as SelectedCodeSetPlant,
      @ObjectModel.foreignKey.association: '_SelectedCodeSet'
      vauswahlmg                                           as SelectedCodeSet,
      @ObjectModel.foreignKey.association: '_UsageDecisionCodeGroup'
      vcodegrp                                             as InspSubsetUsageDcsnCodeGroup,
      vcode                                                as InspSubsetUsageDcsnCode,
      @ObjectModel.foreignKey.association: '_InspSubsetUsageDcsnValn'
      vbewertung                                           as InspSubsetUsageDcsnValuation,
      cast( usert1 as vdm_qusrtims   preserving type )     as InspectionSubsetTime,
      usert1akt                                            as InspSbstTimeFldProperty,
      cast( userd1 as vdm_qusrdats   preserving type )     as InspectionSubsetDate,
      userd1akt                                            as InspSbstDateFldProperty,
      usrtimezone                                          as InspectionSubsetTimeZone,
      cast( usern1 as vdm_qusrnumc10 preserving type )     as InspSubsetLongNumericKey,
      usern1akt                                            as InspSbstLongNmbrFldProperty,
      cast( usern2 as vdm_qusrnumc3  preserving type )     as InspSubsetShortNumericKey,
      usern2akt                                            as InspSbstShrtNmbrFldProperty,
      cast( userc1 as vdm_qusrchar18 preserving type )     as InspectionSubsetLongCharKey,
      userc1akt                                            as InspSbstLongTxtFldProperty,
      cast( userc2 as vdm_qusrchar10 preserving type )     as InspectionSubsetShortCharKey,
      userc2akt                                            as InspSbstShrtTxtFldProperty,

      @ObjectModel.foreignKey.association: '_InspectionPartialLot'
      teillos                                              as InspectionPartialLot,
      @DefaultAggregation:#NONE
      @Semantics.quantity.unitOfMeasure: 'InspectionSubsetQtyUnit'
      menge                                                as InspectionSubsetYieldQty,
      @DefaultAggregation:#NONE
      @Semantics.quantity.unitOfMeasure: 'InspectionSubsetQtyUnit'
      menge_a                                              as InspectionSubsetScrapQty,
      @DefaultAggregation:#NONE
      @Semantics.quantity.unitOfMeasure: 'InspectionSubsetQtyUnit'
      menge_n                                              as InspectionSubsetReworkQty,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_Unit'
      mengeneinh                                           as InspectionSubsetQtyUnit,

      //    vetext as InspectionSubset,       QALT.vetext
      pruefer                                              as Inspector,

      @Semantics.user.createdBy: true
      ersteller                                            as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      ersteldat                                            as CreationDate,
      cast( erstelzeit as vdm_qzeiterstl preserving type ) as CreationTime,
      @Semantics.user.lastChangedBy: true
      aenderer                                             as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      aenderdat                                            as LastChangeDate,
      cast( aenderzeit as vdm_qzeitaend preserving type )  as LastChangeTime,
      case qapp.changeddatetime
        when 0 then cast( '19000101010101' as tzntstmps )
        else qapp.changeddatetime                      end as ChangedDateTime,

      // Associations
      _InspectionLot,
      _InspectionOperation,
      _InspectionSubsetInternalID,
      _InspectionPartialLot,
      _UsageDecisionCodeGroup,
      _UsageDecisionCode,
      _InspSubsetUsageDcsnValn,
      _InspSubsetUsageDcsnValnTxt,
      _MaterialSample,
      _FunctionalLocation,
      _ShopFloorItem,
      _SelectedCodeSetPlant,
      _SelectedCodeSet,
      _Equipment,
      _Unit
}
```
