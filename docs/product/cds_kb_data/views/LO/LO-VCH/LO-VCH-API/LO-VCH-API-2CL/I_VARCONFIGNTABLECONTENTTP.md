---
name: I_VARCONFIGNTABLECONTENTTP
description: "Varconfigntablecontenttp"
app_component: LO-VCH-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-VCH
  - LO-VCH-API
  - interface-view
  - transactional-processing
  - component:LO-VCH-API-2CL
  - lob:Logistics General
---
# I_VARCONFIGNTABLECONTENTTP

**Varconfigntablecontenttp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VarConfignTblName` | ✓ | |  |  |  |  |
| `VarConfignTblStatus` |  | |  |  |  |  |
| `EngineProcessingMode` |  | |  |  |  |  |
| `VarConfignTblCntntLstChgDteTme` |  | |  |  |  |  |
| `VarConfignTblCntntLastChgNo` |  | |  |  |  |  |
| `_TableLine` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Variant Configuration table content - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.sapObjectNodeType.name: 'VarConfigurationTableContent'

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M }
}
define root view entity I_VarConfignTableContentTP
  provider contract transactional_interface
  as projection on R_VarConfignTableContentTP
{
  key VarConfignTblName,
      VarConfignTblStatus,
      EngineProcessingMode,
      VarConfignTblCntntLstChgDteTme,
      VarConfignTblCntntLastChgNo,
      
      /* Associations */
      _TableLine : redirected to composition child I_VarConfignTableLineTP
}
```
