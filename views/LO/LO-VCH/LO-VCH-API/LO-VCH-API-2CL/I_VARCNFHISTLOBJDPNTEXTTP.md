---
name: I_VARCNFHISTLOBJDPNTEXTTP
description: Varcnfhistlobjdpntexttp
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
# I_VARCNFHISTLOBJDPNTEXTTP

**Varcnfhistlobjdpntexttp**

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
| key `LanguageCode` | `LanguageCode` |
| key `ChangeNumber` | `ChangeNumber` |
| `ObjectDependencyDescription` | `ObjectDependencyDescription` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `IsDeleted` | `IsDeleted` |
| `_ObjectDependency` | *Association* |
| `_Text` | *Association* |

## Source Code

```abap
@EndUserText.label: 'VC Historical Dependency - Text TP'
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
  },
  dataCategory: #TEXT
}
define view entity I_VarCnfHistlObjDpnTextTP
  as projection on R_VarCnfHistlObjDpnTextTP
{
  key ObjectDependencyName,
      @Semantics.language: true
  key LanguageCode,
  key ChangeNumber,
      @Semantics.text: true
      ObjectDependencyDescription,
      ValidityStartDate,
      ValidityEndDate,
      IsDeleted,

      /* Associations */
      _ObjectDependency : redirected to I_VarCnfObjectDependencyTP,
      _Text             : redirected to parent I_VarCnfObjDpndcyTextTP
}
```
