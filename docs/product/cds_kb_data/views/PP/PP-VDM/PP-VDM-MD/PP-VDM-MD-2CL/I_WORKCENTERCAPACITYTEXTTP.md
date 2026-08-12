---
name: I_WORKCENTERCAPACITYTEXTTP
description: "Work CenterCAPACITYTEXTTP"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - transactional-processing
  - work-center
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WORKCENTERCAPACITYTEXTTP

**Work CenterCAPACITYTEXTTP**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterInternalID` | ✓ | |  |  |  |  |
| `WorkCenterTypeCode` | ✓ | |  |  |  |  |
| `CapacityCategoryAllocation` | ✓ | |  |  |  |  |
| `CapacityInternalID` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `CapacityText` |  | |  |  |  |  |
| `CapacityLastChangeDateTime` |  | |  |  |  |  |
| `_CapHeader` | | ✓ | | | | |
| `_Header` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Interface for the BO WorkCenterCapacity Desc - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.dataCategory: #TEXT
@Metadata.ignorePropagatedAnnotations: true
define view entity I_WorkCenterCapacityTextTP as projection on R_WorkCenterCapacityTextTP {
  key WorkCenterInternalID,
  key WorkCenterTypeCode,
  key CapacityCategoryAllocation,
  key CapacityInternalID,
  @Semantics.language:true
  key Language,
      @Semantics.text:true 
      CapacityText,
      CapacityLastChangeDateTime,
  _CapHeader: redirected to parent I_WorkCenterCapacityTP,
  _Header: redirected to I_WorkCenterTP
}
```
