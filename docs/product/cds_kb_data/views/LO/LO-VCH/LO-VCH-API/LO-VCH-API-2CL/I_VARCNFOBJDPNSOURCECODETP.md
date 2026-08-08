---
name: I_VARCNFOBJDPNSOURCECODETP
description: "Varcnfobjdpnsourcecodetp"
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
# I_VARCNFOBJDPNSOURCECODETP

**Varcnfobjdpnsourcecodetp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectDependencyName` | ✓ | |  |  |  |  |
| `ChangeNumber` | ✓ | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `_ObjectDependency` | | ✓ | | | | |
| `_SourceCodeLine` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'VC Dependency Source Code - TP'
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
define view entity I_VarCnfObjDpnSourceCodeTP
  as projection on R_VarCnfObjDpnSourceCodeTP
{

  key ObjectDependencyName,
  key ChangeNumber,
      ValidityStartDate,
      ValidityEndDate,
      IsDeleted,

      /* Associations */
      _ObjectDependency : redirected to parent I_VarCnfObjectDependencyTP,
      _SourceCodeLine   : redirected to composition child I_VarCnfObjDpnSrcCdLineTP
}
```
