---
name: I_MAINTENANCEORDERPHASECONTROL
description: Maintenance OrderPHASECONTROL
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - maintenance-order
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
  - bo:MaintenanceOrder
---
# I_MAINTENANCEORDERPHASECONTROL

**Maintenance OrderPHASECONTROL**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaintenanceOrder` | `MaintenanceOrder.MaintenanceOrder` |
| key `MaintenancePhaseControl` | `MaintObjectPhaseControl.MaintenancePhaseControlName` |
| `MaintenancePhaseControlName` | `MaintObjectPhaseControl.MaintenancePhaseControlName` |
| `StatusObject` | `StatusObjectStatus.StatusObject` |
| `MaintUserStatusProfileCode` | `MaintObjectPhaseControl.MaintUserStatusProfileCode` |
| `MaintenanceUserStatusCode` | `MaintObjectPhaseControl.MaintenanceUserStatusCode` |
| `MaintenancePhaseControlText` | `MaintObjectPhaseControl.MaintenancePhaseControlText` |
| `MaintPhseCtrlIsSetAutomly` | `MaintObjectPhaseControl.MaintPhseCtrlIsSetAutomly` |
| `EAMOverallStatusProfile` | `MaintObjectPhaseControl.EAMOverallStatusProfile` |
| `MaintPhaseControlAuthorityCode` | `MaintObjectPhaseControl.MaintPhaseControlAuthorityCode` |
| `MaintProcgPhseCtrlActvtnCode` | `MaintPhseCtrlActvtnProcValue.MaintProcgPhseCtrlActvtnCode` |
| `EAMProcessPhaseCode` | `MaintPhseCtrlActvtnProcValue.EAMProcessPhaseCode` |
| `EAMProcessSubPhaseCode` | `MaintPhseCtrlActvtnProcValue.EAMProcessSubPhaseCode` |
| `MaintObjPhseCtrlStatusIsActive` | `cast ( StatusObjectStatus.StatusIsActive as vdm_j_statusisactive preserving type )` |
| `MaintObjPhaseControlStateCode` | `cast( case when StatusObjectStatus.StatusIsActive = 'X' then 'X' when StatusObjectStatus.StatusIsInactive = 'X' then 'Y' else '' end as eam_bo_blkcd_status preserving type)` |
| `MaintenanceOrderType` | `MaintenanceOrder.MaintenanceOrderType` |
| `MaintenancePlanningPlant` | `MaintenanceOrder.MaintenancePlanningPlant` |
| `EAMBlockerCodeEntityType` | `MaintObjectPhaseControl.EAMBlockerCodeEntityType` |
| `MaintOrdProcessPhaseCode` | `_MaintenanceOrder.MaintOrdProcessPhaseCode` |
| `MaintOrdProcessSubPhaseCode` | `_MaintenanceOrder.MaintOrdProcessSubPhaseCode` |
| `_MaintObjPhseCtrlCodeChgSet` | *Association* |
| `_MaintObjPhseCtrlCodeChgReset` | *Association* |
| `_MaintenanceOrder` | *Association* |
| `_MaintPhseCtrlActivationCode` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintObjPhseCtrlCodeChgSet` | `I_MaintOrderPhseCtrlChgHist` | [0..1] |
| `_MaintObjPhseCtrlCodeChgReset` | `I_MaintOrderPhseCtrlChgHist` | [0..1] |
| `_MaintenanceOrder` | `I_MaintenanceOrderBasic` | [1..1] |
| `_MaintPhseCtrlActivationCode` | `I_MaintPhseCtrlActivationCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMAINTORDPHSECTR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Maintenance Order Phase Controls'

@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #COMPOSITE

@ObjectModel.semanticKey:  [ 'MaintenanceOrder', 'MaintenancePhaseControl' ]

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL

@ObjectModel.sapObjectNodeType.name: 'MaintenanceOrderPhaseControl'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_MaintenanceOrderPhaseControl
  as select from           I_MaintenanceOrder             as MaintenanceOrder

  //inner join             I_StatusObjectStatus           as StatusObjectStatus           on MaintenanceOrder.MaintenanceOrderInternalID = StatusObjectStatus.StatusObject
    inner join             I_MaintPhaseControlCode        as MaintObjectPhaseControl      on  MaintenanceOrder.MaintenanceOrderType            = MaintObjectPhaseControl.MaintenanceOrderType
                                                                                          and MaintObjectPhaseControl.EAMBlockerCodeEntityType = 'ORI'
  //                                                                                      and StatusObjectStatus.StatusCode                    = MaintObjectPhaseControl.MaintenanceUserStatusCode
    left outer to one join I_StatusObjectStatus           as StatusObjectStatus           on  MaintenanceOrder.MaintenanceOrderInternalID       = StatusObjectStatus.StatusObject
                                                                                          and MaintObjectPhaseControl.MaintenanceUserStatusCode = StatusObjectStatus.StatusCode

    left outer to one join I_MaintPhseCtrlActvtnProcValue as MaintPhseCtrlActvtnProcValue on  MaintPhseCtrlActvtnProcValue.MaintenanceOrderType         = MaintObjectPhaseControl.MaintenanceOrderType
                                                                                          and MaintPhseCtrlActvtnProcValue.EAMBlockerCodeEntityType     = MaintObjectPhaseControl.EAMBlockerCodeEntityType
                                                                                          and MaintPhseCtrlActvtnProcValue.EAMBlockerCode               = MaintObjectPhaseControl.MaintenancePhaseControlName
                                                                                          and MaintPhseCtrlActvtnProcValue.MaintProcgPhseCtrlActvtnCode = '02' //Filter Blocks (Endphase) only

  association [0..1] to I_MaintOrderPhseCtrlChgHist   as _MaintObjPhseCtrlCodeChgSet   on  $projection.MaintenanceOrder                 = _MaintObjPhseCtrlCodeChgSet.MaintenanceOrder
                                                                                       and $projection.MaintenanceUserStatusCode        = _MaintObjPhseCtrlCodeChgSet.StatusCode
                                                                                       and _MaintObjPhseCtrlCodeChgSet.StatusIsInactive = ''

  association [0..1] to I_MaintOrderPhseCtrlChgHist   as _MaintObjPhseCtrlCodeChgReset on  $projection.MaintenanceOrder                   = _MaintObjPhseCtrlCodeChgReset.MaintenanceOrder
                                                                                       and $projection.MaintenanceUserStatusCode          = _MaintObjPhseCtrlCodeChgReset.StatusCode
                                                                                       and _MaintObjPhseCtrlCodeChgReset.StatusIsInactive = 'X'

  association [1..1] to I_MaintenanceOrderBasic            as _MaintenanceOrder             on  $projection.MaintenanceOrder = _MaintenanceOrder.MaintenanceOrder
  association [0..1] to I_MaintPhseCtrlActivationCode as _MaintPhseCtrlActivationCode  on  _MaintPhseCtrlActivationCode.MaintProcgPhseCtrlActvtnCode = $projection.MaintProcgPhseCtrlActvtnCode
{

  key MaintenanceOrder.MaintenanceOrder                                                  as MaintenanceOrder,
  key MaintObjectPhaseControl.MaintenancePhaseControlName                                as MaintenancePhaseControl,

      MaintObjectPhaseControl.MaintenancePhaseControlName, //for the future, it will be language-dependent

      StatusObjectStatus.StatusObject,
      MaintObjectPhaseControl.MaintUserStatusProfileCode,
      MaintObjectPhaseControl.MaintenanceUserStatusCode,

      MaintObjectPhaseControl.MaintenancePhaseControlText, //for the future, it will be language-dependent
      MaintObjectPhaseControl.MaintPhseCtrlIsSetAutomly,

      MaintObjectPhaseControl.EAMOverallStatusProfile,
      MaintObjectPhaseControl.MaintPhaseControlAuthorityCode,

      MaintPhseCtrlActvtnProcValue.MaintProcgPhseCtrlActvtnCode,
      MaintPhseCtrlActvtnProcValue.EAMProcessPhaseCode,
      MaintPhseCtrlActvtnProcValue.EAMProcessSubPhaseCode,
      @Semantics.booleanIndicator:true
      cast ( StatusObjectStatus.StatusIsActive as vdm_j_statusisactive preserving type ) as MaintObjPhseCtrlStatusIsActive,

      cast( case
        when StatusObjectStatus.StatusIsActive   = 'X' then 'X'
        when StatusObjectStatus.StatusIsInactive = 'X' then 'Y'
        else ''
      end as eam_bo_blkcd_status preserving type)                                        as MaintObjPhaseControlStateCode,

      MaintenanceOrder.MaintenanceOrderType,
      MaintenanceOrder.MaintenancePlanningPlant,
      MaintObjectPhaseControl.EAMBlockerCodeEntityType,

      _MaintenanceOrder.MaintOrdProcessPhaseCode,
      _MaintenanceOrder.MaintOrdProcessSubPhaseCode,

      /* Propagated associations */
      _MaintenanceOrder,
      _MaintObjPhseCtrlCodeChgSet,
      _MaintObjPhseCtrlCodeChgReset,
      MaintPhseCtrlActvtnProcValue._ProcessingPhase,
      MaintPhseCtrlActvtnProcValue._ProcessingSubPhase,
      StatusObjectStatus._StatusObject,
      MaintObjectPhaseControl._StatusCode,
      MaintObjectPhaseControl._StatusProfile,
      _MaintPhseCtrlActivationCode

}
```
