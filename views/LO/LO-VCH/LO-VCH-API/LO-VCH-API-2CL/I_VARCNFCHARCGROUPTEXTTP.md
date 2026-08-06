---
name: I_VARCNFCHARCGROUPTEXTTP
description: Varcnfcharcgrouptexttp
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
  - text
  - component:LO-VCH-API-2CL
  - lob:Logistics General
---
# I_VARCNFCHARCGROUPTEXTTP

**Varcnfcharcgrouptexttp**

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
| key `Language` | `Language` |
| `ConfignCharacteristicGroupDesc` | `ConfignCharacteristicGroupDesc` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_Group` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Var Confign Charc Group Descr - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S
  },
  dataCategory: #TEXT
}
define view entity I_VarCnfCharcGroupTextTP
  as projection on R_VarCnfCharcGroupTextTP_2
{
  key ConfignCharacteristicGroup,
  key ChangeNumber,
      @Semantics.language: true
  key Language,
      @Semantics.text: true
      ConfignCharacteristicGroupDesc,

      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      LastChangeDateTime,

      /* Associations */
      _Group : redirected to parent I_VarCnfCharcGroupTP
}
```
