---
name: I_VARCNFCSTRTSRCCDLINETP
description: "Varcnfcstrtsrccdlinetp"
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
# I_VARCNFCSTRTSRCCDLINETP

**Varcnfcstrtsrccdlinetp**

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
| `ChangeNumber` | ✓ | |  |  |  |  |
| `VarCnfConstraintCodeLineNumber` | ✓ | |  |  |  |  |
| `VarCnfConstraintCodeLineText` |  | |  |  |  |  |
| `_SourceCode` | | ✓ | | | | |
| `_ConstraintNet` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'VC Constraint Source Code Line - TP'
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
    sizeCategory: #L
  }
}
define view entity I_VarCnfCstrtSrcCdLineTP
  as projection on R_VarCnfCstrtSrcCdLineTP
{
  key VarCnfConstraintNetName,
  key VarCnfConstraintName,
  key ChangeNumber,
  key VarCnfConstraintCodeLineNumber,

      VarCnfConstraintCodeLineText,

      /* Associations */
      _SourceCode    : redirected to parent I_VarCnfCstrtSourceCodeTP,
      _ConstraintNet : redirected to I_VarCnfConstraintNetTP
}
```
