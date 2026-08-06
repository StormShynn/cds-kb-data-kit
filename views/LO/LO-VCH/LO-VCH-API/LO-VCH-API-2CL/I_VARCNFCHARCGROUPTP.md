---
name: I_VARCNFCHARCGROUPTP
description: Varcnfcharcgrouptp
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
# I_VARCNFCHARCGROUPTP

**Varcnfcharcgrouptp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConfignCharacteristicGroup` | `ConfignCharacteristicGroup` |
| key `ChangeNumber` | `ChangeNumber` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_CharcAllocation` | *Association* |
| `_Text` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Var Confign Characteristic Group - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType.name: 'VarConfignCharacteristicGroup',
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S
  }
}
define root view entity I_VarCnfCharcGroupTP
  provider contract transactional_interface
  as projection on R_VarCnfCharcGroupTP_2
{
  key ConfignCharacteristicGroup,
  key ChangeNumber,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      LastChangeDateTime,

      /* Associations */
      _CharcAllocation : redirected to composition child I_VarCnfCharcGroupAllocTP,
      _Text            : redirected to composition child I_VarCnfCharcGroupTextTP
}
```
