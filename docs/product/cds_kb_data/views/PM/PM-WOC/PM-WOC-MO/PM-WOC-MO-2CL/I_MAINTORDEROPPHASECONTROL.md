---
name: I_MAINTORDEROPPHASECONTROL
description: "Maintorderopphasecontrol"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDEROPPHASECONTROL

**Maintorderopphasecontrol**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceOrder` | ✓ | |  |  |  |  |
| `MaintenanceOrderOperation` | ✓ | |  | `cast( MaintenanceOrderOperAndSubOper.MaintenanceOrderOperation as maintenanceorderoperation preserving type )` |  |  |
| `MaintenanceOrderSubOperation` | ✓ | |  | `cast( MaintenanceOrderOperAndSubOper.MaintenanceOrderSubOperation as maintenanceordersuboperation preserving type )` |  |  |
| `MaintenancePhaseControl` | ✓ | |  | `MaintenancePhaseControlName` |  |  |
| `MaintenancePhaseControlName` |  | |  |  |  |  |
| `StatusObject` |  | |  |  |  |  |
| `MaintUserStatusProfileCode` |  | |  |  |  |  |
| `MaintenanceUserStatusCode` |  | |  |  |  |  |
| `MaintenancePhaseControlText` |  | |  |  |  |  |
| `MaintPhseCtrlIsSetAutomly` |  | |  |  |  |  |
| `EAMOverallStatusProfile` |  | |  |  |  |  |
| `MaintPhaseControlAuthorityCode` |  | |  |  |  |  |
| `MaintProcgPhseCtrlActvtnCode` |  | |  |  |  |  |
| `EAMProcessPhaseCode` |  | |  |  |  |  |
| `EAMProcessSubPhaseCode` |  | |  |  |  |  |
| `MaintObjPhseCtrlStatusIsActive` |  | |  | `cast( StatusObjectStatus.StatusIsActive as vdm_j_statusisactive preserving type )` |  |  |
| `MaintObjPhaseControlStateCode` |  | |  | `cast( case when StatusObjectStatus.StatusIsActive = 'X' then 'X' when StatusObjectStatus.StatusIsInactive = 'X' then 'Y' else '' end as eam_bo_blkcd_status preserving type)` |  |  |
| `MaintenanceOrderType` |  | |  |  |  |  |
| `MaintenancePlanningPlant` |  | |  |  |  |  |
| `EAMBlockerCodeEntityType` |  | |  |  |  |  |
| `MaintOrdOpProcessPhaseCode` |  | | `_MaintenanceOrderOperation` | `MaintOrdOpProcessPhaseCode` |  |  |
| `MaintOrdOpProcessSubPhaseCode` |  | | `_MaintenanceOrderOperation` | `MaintOrdOpProcessSubPhaseCode` |  |  |
| `_MaintObjPhseCtrlCodeChgSet` | | ✓ | | | | |
| `_MaintObjPhseCtrlCodeChgReset` | | ✓ | | | | |
| `_MaintenanceOrderOperation` | | ✓ | | | | |
| `_MaintenanceOrder` | | ✓ | | | | |
| `_MaintPhseCtrlActivationCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintObjPhseCtrlCodeChgSet` | `I_MaintOrderOpPhseCtrlChgHist` | [0..1] |
| `_MaintObjPhseCtrlCodeChgReset` | `I_MaintOrderOpPhseCtrlChgHist` | [0..1] |
| `_MaintenanceOrderOperation` | `I_MaintOrderOperAndSubOper` | [1..1] |
| `_MaintenanceOrder` | `I_MaintenanceOrderBasic` | [1..1] |
| `_MaintPhseCtrlActivationCode` | `I_MaintPhseCtrlActivationCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMAINTOPPHSCTR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Maintenance Order Op Phase Controls'

@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #COMPOSITE

@ObjectModel.semanticKey:  [ 'MaintenanceOrder', 'MaintenanceOrderOperation', 'MaintenanceOrderSubOperation', 'MaintenancePhaseControl' ]

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL


@ObjectModel.sapObjectNodeType.name: 'MaintOrdOperationPhaseControl'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_MaintOrderOpPhaseControl
  as select from           I_MaintOrderOperAndSubOper     as MaintenanceOrderOperAndSubOper
    inner join             I_MaintenanceOrderBasic        as MaintenanceOrder             on MaintenanceOrderOperAndSubOper.MaintenanceOrder = MaintenanceOrder.MaintenanceOrder
  //    inner join             I_StatusObjectStatus           as StatusObjectStatus           on MaintenanceOrderOperAndSubOper.MaintOrderOperationInternalID = StatusObjectStatus.StatusObject
    inner join             I_MaintPhaseControlCode        as MaintObjectPhaseControl      on  MaintenanceOrder.MaintenanceOrderType            = MaintObjectPhaseControl.MaintenanceOrderType
                                                                                          and MaintObjectPhaseControl.EAMBlockerCodeEntityType = 'OVG'
  //                                                                                          and StatusObjectStatus.StatusCode                    = MaintObjectPhaseControl.MaintenanceUserStatusCode
    left outer to one join I_StatusObjectStatus           as StatusObjectStatus           on  MaintenanceOrderOperAndSubOper.MaintOrderOperationInternalID = StatusObjectStatus.StatusObject
                                                                                          and MaintObjectPhaseControl.MaintenanceUserStatusCode            = StatusObjectStatus.StatusCode
    left outer to one join I_MaintPhseCtrlActvtnProcValue as MaintPhseCtrlActvtnProcValue on  MaintPhseCtrlActvtnProcValue.MaintenanceOrderType         = MaintObjectPhaseControl.MaintenanceOrderType
                                                                                          and MaintPhseCtrlActvtnProcValue.EAMBlockerCodeEntityType     = MaintObjectPhaseControl.EAMBlockerCodeEntityType
                                                                                          and MaintPhseCtrlActvtnProcValue.EAMBlockerCode               = MaintObjectPhaseControl.MaintenancePhaseControlName
                                                                                          and MaintPhseCtrlActvtnProcValue.MaintProcgPhseCtrlActvtnCode = '02' //Filter Blocks (Endphase) only

  association [0..1] to I_MaintOrderOpPhseCtrlChgHist as _MaintObjPhseCtrlCodeChgSet   on  $projection.MaintenanceOrder                 = _MaintObjPhseCtrlCodeChgSet.MaintenanceOrder
                                                                                       and $projection.MaintenanceOrderOperation        = _MaintObjPhseCtrlCodeChgSet.MaintenanceOrderOperation
                                                                                       and $projection.MaintenanceOrderSubOperation     = _MaintObjPhseCtrlCodeChgSet.MaintenanceOrderSubOperation
                                                                                       and $projection.MaintenanceUserStatusCode        = _MaintObjPhseCtrlCodeChgSet.StatusCode
                                                                                       and _MaintObjPhseCtrlCodeChgSet.StatusIsInactive = ''

  association [0..1] to I_MaintOrderOpPhseCtrlChgHist as _MaintObjPhseCtrlCodeChgReset on  $projection.MaintenanceOrder                   = _MaintObjPhseCtrlCodeChgReset.MaintenanceOrder
                                                                                       and $projection.MaintenanceOrderOperation          = _MaintObjPhseCtrlCodeChgReset.MaintenanceOrderOperation
                                                                                       and $projection.MaintenanceOrderSubOperation       = _MaintObjPhseCtrlCodeChgReset.MaintenanceOrderSubOperation
                                                                                       and $projection.MaintenanceUserStatusCode          = _MaintObjPhseCtrlCodeChgReset.StatusCode
                                                                                       and _MaintObjPhseCtrlCodeChgReset.StatusIsInactive = 'X'

  association [1..1] to I_MaintOrderOperAndSubOper    as _MaintenanceOrderOperation    on  $projection.MaintenanceOrder             = _MaintenanceOrderOperation.MaintenanceOrder
                                                                                       and $projection.MaintenanceOrderOperation    = _MaintenanceOrderOperation.MaintenanceOrderOperation
                                                                                       and $projection.MaintenanceOrderSubOperation = _MaintenanceOrderOperation.MaintenanceOrderSubOperation
  association [1..1] to I_MaintenanceOrderBasic            as _MaintenanceOrder             on  _MaintenanceOrder.MaintenanceOrder = $projection.MaintenanceOrder
  association [0..1] to I_MaintPhseCtrlActivationCode as _MaintPhseCtrlActivationCode  on  _MaintPhseCtrlActivationCode.MaintProcgPhseCtrlActvtnCode = $projection.MaintProcgPhseCtrlActvtnCode
{

  key MaintenanceOrderOperAndSubOper.MaintenanceOrder                                                                      as MaintenanceOrder,
  key cast( MaintenanceOrderOperAndSubOper.MaintenanceOrderOperation as maintenanceorderoperation preserving type )        as MaintenanceOrderOperation,
  key cast( MaintenanceOrderOperAndSubOper.MaintenanceOrderSubOperation as maintenanceordersuboperation preserving type )  as MaintenanceOrderSubOperation,
  key MaintObjectPhaseControl.MaintenancePhaseControlName                                                                  as MaintenancePhaseControl,

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
      cast( StatusObjectStatus.StatusIsActive as vdm_j_statusisactive preserving type )                                    as MaintObjPhseCtrlStatusIsActive,

      cast( case
        when StatusObjectStatus.StatusIsActive   = 'X' then 'X'
        when StatusObjectStatus.StatusIsInactive = 'X' then 'Y'
        else ''
      end as eam_bo_blkcd_status preserving type)                                                                          as MaintObjPhaseControlStateCode,

      MaintenanceOrder.MaintenanceOrderType,
      MaintenanceOrder.MaintenancePlanningPlant,
      MaintObjectPhaseControl.EAMBlockerCodeEntityType,

      _MaintenanceOrderOperation.MaintOrdOpProcessPhaseCode,
      _MaintenanceOrderOperation.MaintOrdOpProcessSubPhaseCode,

      /* Propagated associations */
      _MaintenanceOrderOperation,
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
