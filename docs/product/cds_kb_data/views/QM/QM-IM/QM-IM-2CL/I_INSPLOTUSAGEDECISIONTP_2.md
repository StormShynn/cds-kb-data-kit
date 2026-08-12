---
name: I_INSPLOTUSAGEDECISIONTP_2
description: "Insplotusagedecisiontp 2"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - transactional-processing
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPLOTUSAGEDECISIONTP_2

**Insplotusagedecisiontp 2**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLot` | ✓ | |  |  |  |  |
| `InspectionLotQualityScore` |  | |  |  |  |  |
| `InspLotUsageDecisionCatalog` |  | |  |  |  |  |
| `SelectedCodeSetPlant` |  | |  |  |  |  |
| `InspLotUsgeDcsnSelectedSet` |  | |  |  |  |  |
| `InspLotUsageDecisionCodeGroup` |  | |  |  |  |  |
| `InspectionLotUsageDecisionCode` |  | |  |  |  |  |
| `InspLotUsgeDcsnDynValuation` |  | |  |  |  |  |
| `InspLotUsageDecisionValuation` |  | |  |  |  |  |
| `InspLotUsgeDcsnFollowUpAction` |  | |  |  |  |  |
| `InspectionLotUsageDecidedBy` |  | |  |  |  |  |
| `InspectionLotUsageDecidedOn` |  | |  |  |  |  |
| `InspLotUsageDecisionTime` |  | |  |  |  |  |
| `InspLotUsageDecisionChangedBy` |  | |  |  |  |  |
| `InspLotUsageDecisionChangedOn` |  | |  |  |  |  |
| `InspLotUsgeDcsnChangedTime` |  | |  |  |  |  |
| `InspLotUsgeDcsnHasLongText` |  | |  |  |  |  |
| `_InspectionLot` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Usage Decision for Inspection Lot - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #L,
    serviceQuality: #B
  }
}
define view entity I_InspLotUsageDecisionTP_2
  as projection on R_InspectionLotUsageDecisionTP as InspectionLotUsageDecision
{
  key InspectionLot,
  InspectionLotQualityScore,
  InspLotUsageDecisionCatalog,
  SelectedCodeSetPlant,
  InspLotUsgeDcsnSelectedSet,
  InspLotUsageDecisionCodeGroup,
  InspectionLotUsageDecisionCode,
  InspLotUsgeDcsnDynValuation,
  InspLotUsageDecisionValuation,
  InspLotUsgeDcsnFollowUpAction,
  InspectionLotUsageDecidedBy,
  InspectionLotUsageDecidedOn,
  InspLotUsageDecisionTime,
  InspLotUsageDecisionChangedBy,
  InspLotUsageDecisionChangedOn,
  InspLotUsgeDcsnChangedTime,
  InspLotUsgeDcsnHasLongText,
  
  /* Associations */
  _InspectionLot: redirected to parent I_InspectionLotTP_2
 
}
```
