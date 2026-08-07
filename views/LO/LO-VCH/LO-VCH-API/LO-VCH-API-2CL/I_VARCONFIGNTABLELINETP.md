---
name: I_VARCONFIGNTABLELINETP
description: Varconfigntablelinetp
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
# I_VARCONFIGNTABLELINETP

**Varconfigntablelinetp**

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
| `VarConfignTblLineNumber` | ✓ | |  |  |  |  |
| `ChangeNumber` | ✓ | |  |  |  |  |
| `VarConfignTblTmpLinePosition` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `_Table` | | ✓ | | | | |
| `_Value` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Variant Configuration Table Line - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S }
}
define view entity I_VarConfignTableLineTP
  as projection on R_VarConfignTableLineTP
{
  key VarConfignTblName,
  key VarConfignTblLineNumber,
  key ChangeNumber,
      VarConfignTblTmpLinePosition,
      IsDeleted,
      ValidityStartDate,
      ValidityEndDate,

      /* Associations */
      _Table : redirected to parent I_VarConfignTableContentTP,
      _Value : redirected to composition child I_VarConfignTableValueTP
}
```
