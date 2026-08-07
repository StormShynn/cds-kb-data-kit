---
name: I_VARCNFCONSTRAINTTEXTTP
description: Varcnfconstrainttexttp
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
# I_VARCNFCONSTRAINTTEXTTP

**Varcnfconstrainttexttp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `VarCnfConstraintNetName` | ✓ | |  |  |
| `VarCnfConstraintName` | ✓ | |  |  |
| `LanguageCode` | ✓ | |  |  |
| `_Constraint` | | ✓ | | |
| `_ConstraintNet` | | ✓ | | |
| `_HistoricalText` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'VC Constraint - Text TP'
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
  },
  dataCategory: #TEXT
}
define view entity I_VarCnfConstraintTextTP
  as projection on R_VarCnfConstraintTextTP
{
      @Semantics.text: true
  key VarCnfConstraintNetName,
      @Semantics.text: true
  key VarCnfConstraintName,
      @Semantics.language: true
  key LanguageCode,

      /* Associations */
      _Constraint     : redirected to parent I_VarCnfConstraintTP,
      _ConstraintNet  : redirected to I_VarCnfConstraintNetTP,
      _HistoricalText : redirected to composition child I_VarCnfHistlCstrtTextTP
}
```
