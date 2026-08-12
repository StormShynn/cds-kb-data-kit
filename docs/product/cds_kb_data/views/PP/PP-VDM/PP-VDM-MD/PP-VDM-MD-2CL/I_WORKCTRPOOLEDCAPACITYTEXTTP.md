---
name: I_WORKCTRPOOLEDCAPACITYTEXTTP
description: "Workctrpooledcapacitytexttp"
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
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WORKCTRPOOLEDCAPACITYTEXTTP

**Workctrpooledcapacitytexttp**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityInternalID` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `CapacityText` |  | |  |  |  |  |
| `CapacityLastChangeDateTime` |  | |  |  |  |  |
| `_Header` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Interface for the BO WorkCenter Pooled Capacity Desc - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.dataCategory: #TEXT
@Metadata.ignorePropagatedAnnotations: true
define view entity I_WorkCtrPooledCapacityTextTP as projection on R_WorkCtrPooledCapacityTextTP {
  key CapacityInternalID,
  @Semantics.language:true
  key Language,
      @Semantics.text:true 
      CapacityText,
      CapacityLastChangeDateTime,
      /* Associations */
      _Header : redirected to parent I_WorkCenterPooledCapacityTP
}
```
