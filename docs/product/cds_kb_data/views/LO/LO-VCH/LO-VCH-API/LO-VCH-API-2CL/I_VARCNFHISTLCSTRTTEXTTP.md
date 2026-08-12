---
name: I_VARCNFHISTLCSTRTTEXTTP
description: "Varcnfhistlcstrttexttp"
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
  - text
  - component:LO-VCH-API-2CL
  - lob:Logistics General
---
# I_VARCNFHISTLCSTRTTEXTTP

**Varcnfhistlcstrttexttp**

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
| `LanguageCode` | ✓ | |  |  |  |  |
| `ChangeNumber` | ✓ | |  |  |  |  |
| `VarCnfConstraintDescription` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |
| `_ConstraintNet` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'VC Historical Constraint - Text TP'
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
define view entity I_VarCnfHistlCstrtTextTP
  as projection on R_VarCnfHistlCstrtTextTP
{
  key VarCnfConstraintNetName,
  key VarCnfConstraintName,
      @Semantics.language: true
  key LanguageCode,
  key ChangeNumber,

      @Semantics.text: true
      VarCnfConstraintDescription,
      ValidityStartDate,
      ValidityEndDate,
      IsDeleted,

      /* Associations */
      _Text          : redirected to parent I_VarCnfConstraintTextTP,
      _ConstraintNet : redirected to I_VarCnfConstraintNetTP
}
```
