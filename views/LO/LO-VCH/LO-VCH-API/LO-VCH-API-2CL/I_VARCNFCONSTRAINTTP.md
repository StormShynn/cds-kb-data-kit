---
name: I_VARCNFCONSTRAINTTP
description: "Varcnfconstrainttp"
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
# I_VARCNFCONSTRAINTTP

**Varcnfconstrainttp**

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
| `VarCnfConstraintName` | ✓ | |  |  |  |  |
| `LocalLastChangeDateTime` |  | |  |  |  |  |
| `_ConstraintNet` | | ✓ | | | | |
| `_HistoricalConstraint` | | ✓ | | | | |
| `_SourceCode` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'VC Constraint - TP'
@AccessControl.authorizationCheck:#MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M
  }
}
define view entity I_VarCnfConstraintTP
  as projection on R_VarCnfConstraintTP
{
  key VarCnfConstraintNetName,
  key VarCnfConstraintName,

      LocalLastChangeDateTime,

      /* Associations */
      _ConstraintNet        : redirected to parent I_VarCnfConstraintNetTP,
      _HistoricalConstraint : redirected to composition child I_VarCnfHistlConstraintTP,
      _SourceCode           : redirected to composition child I_VarCnfCstrtSourceCodeTP,
      _Text                 : redirected to composition child I_VarCnfConstraintTextTP
}
```
