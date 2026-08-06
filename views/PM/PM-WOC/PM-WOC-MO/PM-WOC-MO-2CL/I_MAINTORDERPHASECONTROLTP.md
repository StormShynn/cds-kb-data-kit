---
name: I_MAINTORDERPHASECONTROLTP
description: Maintorderphasecontroltp
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
  - transactional-processing
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDERPHASECONTROLTP

**Maintorderphasecontroltp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaintenanceOrder` | `MaintenanceOrder` |
| key `MaintenancePhaseControl` | `MaintenancePhaseControl` |
| `MaintenancePhaseControlName` | `MaintenancePhaseControlName` |
| `MaintenancePhaseControlText` | `MaintenancePhaseControlText` |
| `MaintPhseCtrlIsSetAutomly` | `MaintPhseCtrlIsSetAutomly` |
| `MaintPhaseControlAuthorityCode` | `MaintPhaseControlAuthorityCode` |
| `MaintProcgPhseCtrlActvtnCode` | `MaintProcgPhseCtrlActvtnCode` |
| `EAMProcessPhaseCode` | `EAMProcessPhaseCode` |
| `EAMProcessSubPhaseCode` | `EAMProcessSubPhaseCode` |
| `MaintObjPhseCtrlStatusIsActive` | `MaintObjPhseCtrlStatusIsActive` |
| `StatusObject` | `StatusObject` |
| `_MaintenanceOrder` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Phase Control - TP'
@AccessControl: { authorizationCheck: #MANDATORY, personalData.blocking: #BLOCKED_DATA_EXCLUDED }
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED }
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_MaintOrderPhaseControlTP
  as projection on R_MaintOrderPhaseControlTP
{
  key MaintenanceOrder,
  key MaintenancePhaseControl,

      MaintenancePhaseControlName,
      MaintenancePhaseControlText,
      MaintPhseCtrlIsSetAutomly,
      MaintPhaseControlAuthorityCode,
      MaintProcgPhseCtrlActvtnCode,
      EAMProcessPhaseCode,
      EAMProcessSubPhaseCode,
      @Semantics.booleanIndicator:true
      MaintObjPhseCtrlStatusIsActive,
      StatusObject,

      _MaintenanceOrder : redirected to parent I_MaintenanceOrderTP
}
```
