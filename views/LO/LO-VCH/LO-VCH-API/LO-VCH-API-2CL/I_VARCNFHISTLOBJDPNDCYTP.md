---
name: I_VARCNFHISTLOBJDPNDCYTP
description: Varcnfhistlobjdpndcytp
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
# I_VARCNFHISTLOBJDPNDCYTP

**Varcnfhistlobjdpndcytp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ObjectDependencyName` | `ObjectDependencyName` |
| key `ChangeNumber` | `ChangeNumber` |
| `ObjectDependencyStatus` | `ObjectDependencyStatus` |
| `ObjectDependencyGroup` | `ObjectDependencyGroup` |
| `ObjectDependencyType` | `ObjectDependencyType` |
| `CreationDate` | `CreationDate` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `IsDeleted` | `IsDeleted` |
| `_ObjectDependency` | *Association* |
| `_HistoricalText` | *Association* |
| `_SourceCode` | *Association* |

## Source Code

```abap
@EndUserText.label: 'VC Historical Dependency - TP'
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
define view entity I_VarCnfHistlObjDpndcyTP
  as projection on R_VarCnfHistlObjDpndcyTP
{
  key ObjectDependencyName,
  key ChangeNumber,
      ObjectDependencyStatus,
      ObjectDependencyGroup,
      ObjectDependencyType,
      CreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,
      ValidityStartDate,
      ValidityEndDate,
      IsDeleted,

      /* Associations */
      _ObjectDependency : redirected to parent I_VarCnfObjectDependencyTP,
      _HistoricalText   : redirected to I_VarCnfHistlObjDpnTextTP,
      _SourceCode       : redirected to I_VarCnfObjDpnSourceCodeTP
}
```
