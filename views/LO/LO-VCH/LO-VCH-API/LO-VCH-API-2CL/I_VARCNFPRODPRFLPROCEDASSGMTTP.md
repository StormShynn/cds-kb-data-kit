---
name: I_VARCNFPRODPRFLPROCEDASSGMTTP
description: Varcnfprodprflprocedassgmttp
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
# I_VARCNFPRODPRFLPROCEDASSGMTTP

**Varcnfprodprflprocedassgmttp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Product` | ✓ | |  |  |
| `VarConfigurationProfileName` | ✓ | |  |  |
| `ObjectDependencyName` | ✓ | |  |  |
| `ChangeNumber` | ✓ | |  |  |
| `ObjDpnProcessingSequenceValue` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `IsDeleted` |  | |  |  |
| `ObjDpnAssignmentNumber` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `_Product` | | ✓ | | |
| `_Profile` | | ✓ | | |
| `_HistoricalProfile` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Var Cnf Profile Procedure Assgmt - TP'
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
define view entity I_VarCnfProdPrflProcedAssgmtTP
    as projection on R_VarCnfProdPrflProcedAssgmtTP
{
  key Product,
  key VarConfigurationProfileName,
  key ObjectDependencyName,
  key ChangeNumber,
      ObjDpnProcessingSequenceValue,
      ValidityStartDate,
      IsDeleted,
      ObjDpnAssignmentNumber,
      ValidityEndDate,
   
   /* Associations */
   _Product,
   _Profile : redirected to parent I_VarCnfProductProfileTP,
   _HistoricalProfile : redirected to I_VarCnfHistlProductProfileTP
}
```
