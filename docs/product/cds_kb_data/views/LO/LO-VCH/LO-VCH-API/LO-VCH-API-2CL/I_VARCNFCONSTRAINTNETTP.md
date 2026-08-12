---
name: I_VARCNFCONSTRAINTNETTP
description: "Varcnfconstraintnettp"
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
# I_VARCNFCONSTRAINTNETTP

**Varcnfconstraintnettp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VarCnfConstraintNetName` | ✓ | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Constraint` | | ✓ | | | | |
| `_HistoricalConstraintNet` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'VC Constraint Net - TP'
@AccessControl.authorizationCheck:#MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  sapObjectNodeType.name: 'VarConfignConstraintNet',
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M
  }
}
define root view entity I_VarCnfConstraintNetTP
  provider contract transactional_interface
  as projection on R_VarCnfConstraintNetTP
{
  key VarCnfConstraintNetName,

      @Semantics.systemTime.lastChangedAt: true
      LastChangeDateTime,

      /* Associations */
      _Constraint              : redirected to composition child I_VarCnfConstraintTP,
      _HistoricalConstraintNet : redirected to composition child I_VarCnfHistlConstraintNetTP,
      _Text                    : redirected to composition child I_VarCnfConstraintNetTextTP
}
```
