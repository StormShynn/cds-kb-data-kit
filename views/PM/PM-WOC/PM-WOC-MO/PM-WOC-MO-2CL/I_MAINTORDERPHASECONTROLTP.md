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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceOrder` | ✓ | |  |  |  |  |
| `MaintenancePhaseControl` | ✓ | |  |  |  |  |
| `MaintenancePhaseControlName` |  | |  |  |  |  |
| `MaintenancePhaseControlText` |  | |  |  |  |  |
| `MaintPhseCtrlIsSetAutomly` |  | |  |  |  |  |
| `MaintPhaseControlAuthorityCode` |  | |  |  |  |  |
| `MaintProcgPhseCtrlActvtnCode` |  | |  |  |  |  |
| `EAMProcessPhaseCode` |  | |  |  |  |  |
| `EAMProcessSubPhaseCode` |  | |  |  |  |  |
| `MaintObjPhseCtrlStatusIsActive` |  | |  |  |  |  |
| `StatusObject` |  | |  |  |  |  |
| `_MaintenanceOrder` | | ✓ | | | | |

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
