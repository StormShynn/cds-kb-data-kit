---
name: I_VARCNFOBJECTDEPENDENCYTP
description: Varcnfobjectdependencytp
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
# I_VARCNFOBJECTDEPENDENCYTP

**Varcnfobjectdependencytp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ObjectDependencyName` | ✓ | |  |  |
| `ObjectDependencyIsLocal` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `_HistoricalObjectDependency` | | ✓ | | |
| `_Text` | | ✓ | | |
| `_SourceCode` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'VC Object Dependency - TP'
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  sapObjectNodeType.name: 'VarConfignObjectDependency',
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  }
}

define root view entity I_VarCnfObjectDependencyTP
  provider contract transactional_interface
  as projection on R_VarCnfObjectDependencyTP
{
  key ObjectDependencyName,
      ObjectDependencyIsLocal,
      LastChangeDateTime,

      /* Associations */
      _HistoricalObjectDependency : redirected to composition child I_VarCnfHistlObjDpndcyTP,
      _Text                       : redirected to composition child I_VarCnfObjDpndcyTextTP,
      _SourceCode                 : redirected to composition child I_VarCnfObjDpnSourceCodeTP
}
```
