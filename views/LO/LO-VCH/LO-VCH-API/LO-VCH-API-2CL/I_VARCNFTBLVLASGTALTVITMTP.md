---
name: I_VARCNFTBLVLASGTALTVITMTP
description: Varcnftblvlasgtaltvitmtp
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
# I_VARCNFTBLVLASGTALTVITMTP

**Varcnftblvlasgtaltvitmtp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `VarConfignTblName` | `VarConfignTblName` |
| key `VarConfignTblValAssgmtAltvID` | `VarConfignTblValAssgmtAltvID` |
| key `Characteristic` | `Characteristic` |
| `CharcInternalID` | `CharcInternalID` |
| `_Column` | *Association* |
| `_Table` | *Association* |
| `_ValueAssignmentAlternative` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Var Tab Val Assignment Alt Item - TP'
@AccessControl.authorizationCheck: #CHECK

@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L
  }
}
define view entity I_VarCnfTblVlAsgtAltvItmTP
  as projection on R_VarCnfTblVlAsgtAltvItmTP
{
  key VarConfignTblName,
  key VarConfignTblValAssgmtAltvID,
  key Characteristic,
      CharcInternalID,
      
      /* Associations */
      _Column: redirected to I_VarConfignTableColumnTP,
      _Table: redirected to I_VarConfignTableTP,
      _ValueAssignmentAlternative: redirected to parent I_VarCnfTblValAssgmtAltvTP
}
```
