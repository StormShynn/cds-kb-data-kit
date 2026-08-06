---
name: I_VARCNFPRODPRFLCSTRTNETASGTTP
description: Varcnfprodprflcstrtnetasgttp
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
# I_VARCNFPRODPRFLCSTRTNETASGTTP

**Varcnfprodprflcstrtnetasgttp**

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
| key `VarCnfConstraintNetName` | `VarCnfConstraintNetName` |
| key `ChangeNumber` | `ChangeNumber` |
| `ObjDpnAssignmentNumber` | `ObjDpnAssignmentNumber` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `IsDeleted` | `IsDeleted` |
| `_Product` | *Association* |
| `_Profile` | *Association* |
| `_HistoricalProfile` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Var Cnf Profile CstrtNet Assgmt - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MASTER
}

define view entity I_VarCnfProdPrflCstrtNetAsgtTP
  as projection on R_VarCnfProdPrflCstrtNetAsgtTP
{
  key Product,
  key VarConfigurationProfileName,
  key VarCnfConstraintNetName,
  key ChangeNumber,
      ObjDpnAssignmentNumber,
      ValidityStartDate,
      ValidityEndDate,
      IsDeleted,
      
   /* Associations */
   _Product,
   _Profile : redirected to parent I_VarCnfProductProfileTP,
   _HistoricalProfile : redirected to I_VarCnfHistlProductProfileTP
}
```
