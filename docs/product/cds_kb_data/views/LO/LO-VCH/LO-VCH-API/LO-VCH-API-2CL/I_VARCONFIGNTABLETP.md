---
name: I_VARCONFIGNTABLETP
description: "Varconfigntabletp"
app_component: LO-VCH-API-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# I_VARCONFIGNTABLETP

**Varconfigntabletp**

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
| `VarConfignTblGroup` |  | |  |  |  |  |
| `VarConfignTblCustomStorageName` |  | |  |  |  |  |
| `VarConfignTblCstmStorIsActive` |  | |  |  |  |  |
| `VarConfignTblIsDecisionTable` |  | |  |  |  |  |
| `EngineProcessingMode` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `VarCnfTblCstmStorLnkLstChgDate` |  | |  |  |  |  |
| `VarCnfTblCstmStorLnkLstChgTime` |  | |  |  |  |  |
| `VarCnfTblCstmStorLnkLastChgdBy` |  | |  |  |  |  |
| `VarConfignTblLstChgDateTime` |  | |  |  |  |  |
| `_Column` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_ValueAssignmentAlternative` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Variant Table - TP'
@AccessControl.authorizationCheck: #CHECK

@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  sapObjectNodeType.name: 'VariantConfigurationTable',
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  }
}
define root view entity I_VarConfignTableTP
  provider contract transactional_interface
  as projection on R_VarConfignTableTP
{
  key VarConfignTblName,
      VarConfignTblStatus,
      VarConfignTblGroup,
      VarConfignTblCustomStorageName,
      VarConfignTblCstmStorIsActive,
      VarConfignTblIsDecisionTable,
      EngineProcessingMode,
      CreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,
      VarCnfTblCstmStorLnkLstChgDate,
      VarCnfTblCstmStorLnkLstChgTime,
      VarCnfTblCstmStorLnkLastChgdBy,
      VarConfignTblLstChgDateTime,
      
      /* Associations */
      _Column: redirected to composition child I_VarConfignTableColumnTP,
      _Text: redirected to composition child I_VarConfignTableTextTP,
      @Semantics.valueRange.maximum: '1'
      _ValueAssignmentAlternative: redirected to composition child I_VarCnfTblValAssgmtAltvTP
}
```
