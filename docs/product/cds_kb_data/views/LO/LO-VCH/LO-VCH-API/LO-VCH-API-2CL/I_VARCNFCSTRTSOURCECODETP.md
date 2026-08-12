---
name: I_VARCNFCSTRTSOURCECODETP
description: "Varcnfcstrtsourcecodetp"
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
# I_VARCNFCSTRTSOURCECODETP

**Varcnfcstrtsourcecodetp**

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
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `_Constraint` | | ✓ | | | | |
| `_ConstraintNet` | | ✓ | | | | |
| `_SourceCodeLine` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'VC Constraint Source Code - TP'
@AccessControl.authorizationCheck:#MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L
  }
}
define view entity I_VarCnfCstrtSourceCodeTP
  as projection on R_VarCnfCstrtSourceCodeTP
{
  key VarCnfConstraintNetName,
  key VarCnfConstraintName,
  key ChangeNumber,

      ValidityStartDate,
      ValidityEndDate,
      IsDeleted,

      /* Associations */
      _Constraint     : redirected to parent I_VarCnfConstraintTP,
      _ConstraintNet  : redirected to I_VarCnfConstraintNetTP,
      _SourceCodeLine : redirected to composition child I_VarCnfCstrtSrcCdLineTP
}
```
