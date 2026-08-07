---
name: I_MAINTTASKLISTGROUPCOUNTER
description: "Maintenance Task ListGROUPCOUNTER"
app_component: PM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - interface-view
  - component:PM-2CL
  - lob:Plant Maintenance
---
# I_MAINTTASKLISTGROUPCOUNTER

**Maintenance Task ListGROUPCOUNTER**

| Property | Value |
|---|---|
| App Component | `PM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  | `plnty` |  |  |
| `BillOfOperationsGroup` | ✓ | |  | `plnnr` |  |  |
| `BillOfOperationsVariant` | ✓ | |  | `plnal` |  |  |
| `BillOfOperationsVersionType` |  | |  | `subtype` |  |  |
| `BillOfOperationsSubtype` |  | |  | `subtype` |  |  |
| `LastUsageDate` |  | |  | `abdat` |  |  |
| `NumberOfUsages` |  | |  | `abanz` |  |  |
| `HasChangeNumber` |  | |  | `flg_ecm` |  |  |
| `HasParameterEffectivity` |  | |  | `flg_ecm_par` |  |  |
| `LastChangeDate` |  | |  | `aedat` |  |  |
| `LastChangeTime` |  | |  | `aeuzeit` |  |  |
| `LastChangedByUser` |  | |  | `cast(plkz.aenam as vdm_lastchangedbyuserid preserving type)` |  |  |
| `RoutingIsReworkRouting` |  | |  | `rework` |  |  |
| `ProdnProcgIsFlexible` |  | |  | `relaxed` |  |  |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BillOfOperationsVersionType` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsGroup_2` | | ✓ | | | | |
| `_BillOfOperationsChangeState` | | ✓ | | | | |
| `_BillOfOperationsSequence` | | ✓ | | | | |
| `_BOOMaterialAssignment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperationsType` | `I_MaintenanceTaskListType` | [1..1] |
| `_BillOfOperationsVersionType` | `I_BillOfOperationsVersionType` | [0..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [1..1] |
| `_BillOfOperationsGroup_2` | `I_MaintenanceTaskListGroup` | [1..1] |
| `_BillOfOperationsChangeState` | `I_BillOfOperationsChangeState` | [1..*] |
| `_BillOfOperationsSequence` | `I_BillOfOperationsSequence` | [1..*] |
| `_BOOMaterialAssignment` | `I_BOOMaterialAssignment` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMNTTASKGRPCTR'
@ObjectModel.compositionRoot: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'BillOfOperationsVariant'
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER }
@AbapCatalog.preserveKey:true 
@EndUserText.label: 'Maintenance Task List Group Counter'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:             #CDS_MODELING_DATA_SOURCE
@ObjectModel.supportedCapabilities:     [ #CDS_MODELING_DATA_SOURCE ]


define view I_MaintTaskListGroupCounter
  as select from plkz

  association [1..1] to I_MaintenanceTaskListType     as _BillOfOperationsType        on  $projection.BillOfOperationsType        = _BillOfOperationsType.TaskListType
  association [0..1] to I_BillOfOperationsVersionType as _BillOfOperationsVersionType on  $projection.BillOfOperationsVersionType = _BillOfOperationsVersionType.BillOfOperationsVersionType  
  association [1..1] to I_BillOfOperationsGroup       as _BillOfOperationsGroup       on  $projection.BillOfOperationsType  = _BillOfOperationsGroup.BillOfOperationsType
                                                                                      and $projection.BillOfOperationsGroup = _BillOfOperationsGroup.BillOfOperationsGroup
  association [1..1] to I_MaintenanceTaskListGroup    as _BillOfOperationsGroup_2     on  $projection.BillOfOperationsType  = _BillOfOperationsGroup_2.BillOfOperationsType
                                                                                      and $projection.BillOfOperationsGroup = _BillOfOperationsGroup_2.BillOfOperationsGroup
  -- to child: Change State of Root
  association [1..*] to I_BillOfOperationsChangeState as _BillOfOperationsChangeState on  $projection.BillOfOperationsType    = _BillOfOperationsChangeState.BillOfOperationsType
                                                                                      and $projection.BillOfOperationsGroup   = _BillOfOperationsChangeState.BillOfOperationsGroup
                                                                                      and $projection.BillOfOperationsVariant = _BillOfOperationsChangeState.BillOfOperationsVariant
  -- to child: Sequences
  association [1..*] to I_BillOfOperationsSequence    as _BillOfOperationsSequence    on  $projection.BillOfOperationsType    = _BillOfOperationsSequence.BillOfOperationsType
                                                                                      and $projection.BillOfOperationsGroup   = _BillOfOperationsSequence.BillOfOperationsGroup
                                                                                      and $projection.BillOfOperationsVariant = _BillOfOperationsSequence.BillOfOperationsVariant

  -- to child: Material to BOO assignment
  association [1..*] to I_BOOMaterialAssignment       as _BOOMaterialAssignment       on  $projection.BillOfOperationsType    = _BOOMaterialAssignment.BillOfOperationsType
                                                                                      and $projection.BillOfOperationsGroup   = _BOOMaterialAssignment.BillOfOperationsGroup
                                                                                      and $projection.BillOfOperationsVariant = _BOOMaterialAssignment.BillOfOperationsVariant
{
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key plkz.plnty                                                   as   BillOfOperationsType,

      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup_2'
  key plkz.plnnr                                                   as   BillOfOperationsGroup,
  key plkz.plnal                                                   as   BillOfOperationsVariant,

      @ObjectModel.foreignKey.association: '_BillOfOperationsVersionType'
      plkz.subtype                                                 as   BillOfOperationsVersionType,
      
      plkz.subtype                                                 as   BillOfOperationsSubtype, //kept for compatibility reasons

      plkz.abdat                                                   as   LastUsageDate,
      plkz.abanz                                                   as   NumberOfUsages,

      plkz.flg_ecm                                                 as   HasChangeNumber,
      plkz.flg_ecm_par                                             as   HasParameterEffectivity,

      -- Administrative Data
      @Semantics.systemDate.lastChangedAt: true
      plkz.aedat                                                   as   LastChangeDate,
      plkz.aeuzeit                                                 as   LastChangeTime,
      @Semantics.user.lastChangedBy: true
      cast(plkz.aenam as vdm_lastchangedbyuserid preserving type)  as   LastChangedByUser,
      
      plkz.rework                                                  as   RoutingIsReworkRouting,
      plkz.relaxed                                                 as   ProdnProcgIsFlexible,

      // **************************** Associations *****************************

      _BOOMaterialAssignment,
      _BillOfOperationsChangeState,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_BillOfOperationsGroup_2'
      _BillOfOperationsGroup,
      _BillOfOperationsGroup_2, 
      _BillOfOperationsSequence,
      _BillOfOperationsType,
      _BillOfOperationsVersionType
}
   where plnty    = 'A'
   or    plnty    = 'E'
   or    plnty    = 'T'
;
```
