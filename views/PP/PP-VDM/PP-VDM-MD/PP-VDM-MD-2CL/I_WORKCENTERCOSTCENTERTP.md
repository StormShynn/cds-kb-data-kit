---
name: I_WORKCENTERCOSTCENTERTP
description: Work CenterCost CenterTP
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - transactional-processing
  - cost-center
  - work-center
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
  - bo:CostCenter
---
# I_WORKCENTERCOSTCENTERTP

**Work CenterCost CenterTP**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `WorkCenterInternalID` | ✓ | |  |  |
| `WorkCenterTypeCode` | ✓ | |  |  |
| `CostCenterAllocation` | ✓ | |  |  |
| `ValidityEndDate` | ✓ | |  |  |
| `ValidityStartDate` |  | |  |  |
| `WorkCenter` |  | |  |  |
| `Plant` |  | |  |  |
| `WorkCenterCategoryCode` |  | |  |  |
| `ControllingArea` |  | |  |  |
| `CostCenter` |  | |  |  |
| `CostCtrActivityType` |  | |  |  |
| `CostCtrActivityTypeQtyUnit` |  | |  |  |
| `BusinessProcess` |  | |  |  |
| `ActivityDescOriginType` |  | |  |  |
| `CostCenterActivityAltvDescID` |  | |  |  |
| `CostCenterActivityTypeFormula` |  | |  |  |
| `CostCtrActyTypeIsReferenced` |  | |  |  |
| `CostCtrActyTypeIncntvWageCode` |  | |  |  |
| `CostCtrActyTypeRecdTypeGrpCode` |  | |  |  |
| `_Header` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Interface for the BO WorkCenter Cost Center - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
define view entity I_WorkCenterCostCenterTP as projection on R_WorkCenterCostCenterTP {
  key WorkCenterInternalID,
  key WorkCenterTypeCode,
  key CostCenterAllocation,
  key ValidityEndDate,
      ValidityStartDate,
      WorkCenter,
      Plant,
      WorkCenterCategoryCode,
      ControllingArea,
      CostCenter,
      CostCtrActivityType,
      CostCtrActivityTypeQtyUnit,
      BusinessProcess,
      ActivityDescOriginType,
      CostCenterActivityAltvDescID,
      CostCenterActivityTypeFormula,
      CostCtrActyTypeIsReferenced,
      CostCtrActyTypeIncntvWageCode,
      CostCtrActyTypeRecdTypeGrpCode,
      _Header: redirected to parent I_WorkCenterTP
}
```
