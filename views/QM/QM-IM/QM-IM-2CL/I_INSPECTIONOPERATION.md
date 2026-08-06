---
name: I_INSPECTIONOPERATION
description: Inspectionoperation
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
# I_INSPECTIONOPERATION

**Inspectionoperation**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InspectionLot` | `qaop.prueflos` |
| key `InspPlanOperationInternalID` | `qaop.vorglfnr` |
| `OrderInternalBillOfOperations` | `qaop.aufpl` |
| `OrderOperationInternalID` | `afvc.aplzl` |
| `InspectionOperation` | `afvc.vornr` |
| `InspectionOperationPlant` | `afvc.werks` |
| `BillOfOperationsType` | `afvc.plnty` |
| `BillOfOperationsGroup` | `afvc.plnnr` |
| `BillOfOperationsVariant` | `afvc.plnal` |
| `BOOOperationInternalID` | `afvc.plnkn` |
| `BillOfOperationsVersion` | `afvc.tl_versn` |
| `WorkCenterInternalID` | `afvc.arbid` |
| `StatusObject` | `afvc.objnr` |
| `OperationControlProfile` | `afvc.steus` |
| `OperationConfirmation` | `afvc.rueck` |
| `InspectionSubSystem` | `afvc.subsys` |
| `OperationText` | `afvc.ltxa1` |
| `InspSbstIsTimeRelated` | `afvc.qkzprzeit` |
| `InspSbstHasNoTimeOrQuantity` | `afvc.qkzprfrei` |
| `Sequence` | `afvc.aplfl` |
| `InspSbstCompletionConfirmation` | `afvc.qppktabs` |
| `_InspectionLot` | *Association* |
| `_InspectionCharacteristic` | *Association* |
| `_InspectionSubset` | *Association* |
| `_WorkCenter` | *Association* |
| `_Plant` | *Association* |
| `_BillOfOperationsType` | *Association* |
| `_InspectionOperationStatus` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLot` | `I_InspectionLot` | [1..1] |
| `_InspectionCharacteristic` | `I_InspectionCharacteristic` | [0..*] |
| `_InspectionSubset` | `I_InspectionSubset` | [0..*] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [1..1] |
| `_InspectionOperationStatus` | `I_InspectionOperationStatus` | [0..1] |
| `_Extension` | `E_InspectionOperation` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPOPERATION'
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations:  [ '_InspectionCharacteristic' ]
@EndUserText.label: 'Inspection Operation'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel: {
    usageType: { dataClass: #TRANSACTIONAL, sizeCategory: #L, serviceQuality: #A },
    representativeKey: 'InspPlanOperationInternalID'
}
@Metadata.ignorePropagatedAnnotations: true
define view I_InspectionOperation
  as select from qaop
    inner join   afvc on  qaop.aufpl = afvc.aufpl
                      and qaop.aplzl = afvc.aplzl
  //Association to other QM nodes
  association [1..1] to I_InspectionLot             as _InspectionLot             on  $projection.InspectionLot = _InspectionLot.InspectionLot
  association [0..*] to I_InspectionCharacteristic  as _InspectionCharacteristic  on  $projection.InspectionLot               = _InspectionCharacteristic.InspectionLot
                                                                                  and $projection.InspPlanOperationInternalID = _InspectionCharacteristic.InspPlanOperationInternalID
  association [0..*] to I_InspectionSubset          as _InspectionSubset          on  $projection.InspectionLot               = _InspectionSubset.InspectionLot
                                                                                  and $projection.InspPlanOperationInternalID = _InspectionSubset.InspPlanOperationInternalID

  //Associations to views of other applications
  association [0..1] to I_WorkCenter                as _WorkCenter                on  $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
                                                                                  and _WorkCenter.WorkCenterTypeCode   = 'A'
  association [1..1] to I_Plant                     as _Plant                     on  $projection.InspectionOperationPlant = _Plant.Plant
  association [1..1] to I_BillOfOperationsType      as _BillOfOperationsType      on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
  association [0..1] to I_InspectionOperationStatus as _InspectionOperationStatus on  $projection.OrderInternalBillOfOperations = _InspectionOperationStatus.OrderInternalBillOfOperations
                                                                                  and $projection.InspPlanOperationInternalID   = _InspectionOperationStatus.InspPlanOperationInternalID

  //Extension
  association [1..1] to E_InspectionOperation       as _Extension                 on  $projection.InspectionLot               = _Extension.InspectionLot
                                                                                  and $projection.InspPlanOperationInternalID = _Extension.InspPlanOperationInternalID
{
      @ObjectModel.foreignKey.association: '_InspectionLot'
  key qaop.prueflos                                  as InspectionLot,
  key qaop.vorglfnr                                  as InspPlanOperationInternalID,
      qaop.aufpl                                     as OrderInternalBillOfOperations,
      afvc.aplzl                                     as OrderOperationInternalID,
      @ObjectModel.text.element: ['OperationText']
      afvc.vornr                                     as InspectionOperation,
      @ObjectModel.foreignKey.association: '_Plant'
      afvc.werks                                     as InspectionOperationPlant,
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      afvc.plnty                                     as BillOfOperationsType,
      afvc.plnnr                                     as BillOfOperationsGroup,
      afvc.plnal                                     as BillOfOperationsVariant,
      afvc.plnkn                                     as BOOOperationInternalID,
      afvc.tl_versn                                  as BillOfOperationsVersion,
      
      @ObjectModel.foreignKey.association: '_Workcenter'
      afvc.arbid                                     as WorkCenterInternalID,
      afvc.objnr                                     as StatusObject,
      afvc.steus                                     as OperationControlProfile,
      afvc.rueck                                     as OperationConfirmation,
      afvc.subsys                                    as InspectionSubSystem,

      afvc.ltxa1                                     as OperationText,
      afvc.qkzprzeit                                 as InspSbstIsTimeRelated,
      afvc.qkzprfrei                                 as InspSbstHasNoTimeOrQuantity,
      afvc.aplfl                                     as Sequence,      
      afvc.qppktabs                                  as InspSbstCompletionConfirmation,
      //t430.mrkkz as InspOpHasCharacteristics,

      // Associations
      _WorkCenter,
      _InspectionLot,
      _InspectionCharacteristic,
      _InspectionSubset,
      _InspectionOperationStatus,
      _Plant,
      _BillOfOperationsType
}
```
