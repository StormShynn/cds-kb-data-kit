---
name: I_VARCNFTBLVALASSGMTALTVTP
description: Varcnftblvalassgmtaltvtp
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
# I_VARCNFTBLVALASSGMTALTVTP

**Varcnftblvalassgmtaltvtp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `VarConfignTblName` | ✓ | |  |  |
| `VarConfignTblValAssgmtAltvID` | ✓ | |  |  |
| `_Item` | | ✓ | | |
| `_Table` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Var Tab Val Assignment Alt - TP'
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
define view entity I_VarCnfTblValAssgmtAltvTP
  as projection on R_VarCnfTblValAssgmtAltvTP
{
  key VarConfignTblName,
  key VarConfignTblValAssgmtAltvID,
      /* Associations */
      _Item: redirected to composition child I_VarCnfTblVlAsgtAltvItmTP,
      _Table : redirected to parent I_VarConfignTableTP
}
```
