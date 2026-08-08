---
name: I_VARCNFOBJDPNSRCCDLINETP
description: "Varcnfobjdpnsrccdlinetp"
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
# I_VARCNFOBJDPNSRCCDLINETP

**Varcnfobjdpnsrccdlinetp**

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
| `ObjectDependencyCodeLineNumber` | ✓ | |  |  |  |  |
| `ObjectDependencyCodeLineText` |  | |  |  |  |  |
| `_SourceCode` | | ✓ | | | | |
| `_ObjectDependency` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'VC Dependency Source Code Line - TP'
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #D,
    sizeCategory: #L
  }
}
define view entity I_VarCnfObjDpnSrcCdLineTP
  as projection on R_VarCnfObjDpnSrcCdLineTP
{
  key ObjectDependencyName,
  key ChangeNumber,
  key ObjectDependencyCodeLineNumber,
      ObjectDependencyCodeLineText,

      /* Associations */
      _SourceCode       : redirected to parent I_VarCnfObjDpnSourceCodeTP,
      _ObjectDependency : redirected to I_VarCnfObjectDependencyTP
}
```
