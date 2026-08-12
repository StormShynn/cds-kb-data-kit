---
name: I_WORKCENTERTEXTTP
description: "Work CenterTEXTTP"
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
# I_WORKCENTERTEXTTP

**Work CenterTEXTTP**

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
| `Language` | ✓ | |  |  |  |  |
| `WorkCenterText` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `WorkCenterCategoryCode` |  | |  |  |  |  |
| `WorkCenter` |  | |  |  |  |  |
| `WorkCenterLastChangeDateTime` |  | |  |  |  |  |
| `_Header` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Interface for the BO WorkCenter Desc - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.dataCategory: #TEXT
@Metadata.ignorePropagatedAnnotations: true
define view entity I_WorkCenterTextTP as projection on R_WorkCenterTextTP {
  key WorkCenterInternalID,
  key WorkCenterTypeCode,
  @Semantics.language:true
  key Language,
      @Semantics.text:true 
      WorkCenterText,
      Plant,
      WorkCenterCategoryCode,
      WorkCenter,
      WorkCenterLastChangeDateTime,
      /* Associations */
      _Header: redirected to parent I_WorkCenterTP
}
```
