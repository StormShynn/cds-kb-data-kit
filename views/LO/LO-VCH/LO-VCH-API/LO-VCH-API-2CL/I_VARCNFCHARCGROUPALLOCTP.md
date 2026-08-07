---
name: I_VARCNFCHARCGROUPALLOCTP
description: Varcnfcharcgroupalloctp
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
# I_VARCNFCHARCGROUPALLOCTP

**Varcnfcharcgroupalloctp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ConfignCharacteristicGroup` | ✓ | |  |  |
| `ChangeNumber` | ✓ | |  |  |
| `CharcInternalID` | ✓ | |  |  |
| `SortingNumber` |  | |  |  |
| `Characteristic` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `_Group` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Var Confign Charc Group Allocation - TP'
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
    sizeCategory: #M
  }
}
define view entity I_VarCnfCharcGroupAllocTP
  as projection on R_VarCnfCharcGroupAllocTP_2
{
  key ConfignCharacteristicGroup,
  key ChangeNumber,
  key CharcInternalID,
      SortingNumber,
      Characteristic,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      LastChangeDateTime,

      /* Associations */
      _Group : redirected to parent I_VarCnfCharcGroupTP
}
```
