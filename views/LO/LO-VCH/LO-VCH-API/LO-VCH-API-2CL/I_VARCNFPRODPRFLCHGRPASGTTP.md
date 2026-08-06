---
name: I_VARCNFPRODPRFLCHGRPASGTTP
description: Varcnfprodprflchgrpasgttp
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
# I_VARCNFPRODPRFLCHGRPASGTTP

**Varcnfprodprflchgrpasgttp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Product` | `Product` |
| key `VarConfigurationProfileName` | `VarConfigurationProfileName` |
| key `ChangeNumber` | `ChangeNumber` |
| key `ConfignCharacteristicGroup` | `ConfignCharacteristicGroup` |
| `VarCnfChGrpAsgtSrtgOrderValue` | `VarCnfChGrpAsgtSrtgOrderValue` |
| `_HistoricalProfile` | *Association* |
| `_Profile` | *Association* |
| `_Product` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Var Cnf Profile Charc Group Assgmt - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #L,
  dataClass: #MASTER
}

define view entity I_VarCnfProdPrflChGrpAsgtTP 
    as projection on R_VarCnfProdPrflChGrpAsgtTP
    
{
  key Product,
  key VarConfigurationProfileName,
  key ChangeNumber,
  key ConfignCharacteristicGroup,

  VarCnfChGrpAsgtSrtgOrderValue,
  
  /* Associations */
  _HistoricalProfile : redirected to parent I_VarCnfHistlProductProfileTP,
  _Profile           : redirected to I_VarCnfProductProfileTP,
  _Product
}
```
