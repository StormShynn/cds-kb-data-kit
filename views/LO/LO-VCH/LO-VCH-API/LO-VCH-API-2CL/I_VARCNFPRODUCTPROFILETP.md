---
name: I_VARCNFPRODUCTPROFILETP
description: Varcnfproductprofiletp
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
  - product
  - component:LO-VCH-API-2CL
  - lob:Logistics General
---
# I_VARCNFPRODUCTPROFILETP

**Varcnfproductprofiletp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  |  |  |
| `VarConfigurationProfileName` | ✓ | |  |  |  |  |
| `_HistoricalProfile` | | ✓ | | | | |
| `_ProcedureAssignment` | | ✓ | | | | |
| `_ConstraintNetAssignment` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Variant Configuration Profile - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'VariantConfigurationProfile'

@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #L,
  dataClass: #MASTER
}
define root view entity I_VarCnfProductProfileTP 
  provider contract transactional_interface
  as projection on R_VarCnfProductProfileTP 
{
  key Product,
  key VarConfigurationProfileName,
  
  /* Associations */
  _HistoricalProfile : redirected to composition child I_VarCnfHistlProductProfileTP,
  _ProcedureAssignment : redirected to composition child I_VarCnfProdPrflProcedAssgmtTP,
  _ConstraintNetAssignment: redirected to composition child I_VarCnfProdPrflCstrtNetAsgtTP,
  _Product
}
```
