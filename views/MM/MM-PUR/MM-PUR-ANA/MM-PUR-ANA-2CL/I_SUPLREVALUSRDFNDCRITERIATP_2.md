---
name: I_SUPLREVALUSRDFNDCRITERIATP_2
description: "Suplrevalusrdfndcriteriatp 2"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - transactional-processing
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLREVALUSRDFNDCRITERIATP_2

**Suplrevalusrdfndcriteriatp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalUsrDfndCritraUUID` | ✓ | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `PurchasingCategory` |  | |  |  |  |  |
| `SuplrEvalUserDefinedCriteria` |  | |  |  |  |  |
| `SuplrEvalUserDfndCriteriaDesc` |  | |  |  |  |  |
| `SuplrEvalUsrCritraValidFrmDte` |  | |  |  |  |  |
| `SuplrEvalUsrCritraValidToDte` |  | |  |  |  |  |
| `SuplrEvalUsrDfndCritraRptdDte` |  | |  |  |  |  |
| `SuplrEvalUsrDfndCritraCrtedBy` |  | |  |  |  |  |
| `SuplrEvalUserDfndCritraCrtnDte` |  | |  |  |  |  |
| `SuplrEvalUsrDfndCritraChgdBy` |  | |  |  |  |  |
| `SuplrEvalUserDfndCritraChgDate` |  | |  |  |  |  |
| `TotNmbrOfSuplrUsrDfndCritra` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `SuplrEvalUsrCritraCommentText` |  | |  |  |  |  |
| `SupplierAccountGroup` |  | |  |  |  |  |
| `SuplrEvalUsrCritraChgDteTme` |  | |  |  |  |  |
| `_CreatedBy` | | ✓ | | | | |
| `_LastChangedBy` | | ✓ | | | | |
| `_MatGroup` | | ✓ | | | | |
| `_StatusVH` | | ✓ | | | | |
| `_SuplrEvalUserDfndCriteria` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Manage User Defined Criteria'
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

//@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel: {
       representativeKey: 'SuplrEvalUsrDfndCritraUUID' ,
      semanticKey: [  'Supplier', 'MaterialGroup', 'PurchasingCategory', 'SuplrEvalUserDefinedCriteria', 'SuplrEvalUsrCritraValidFrmDte'  ], 
      usageType.dataClass: #TRANSACTIONAL,
      usageType.serviceQuality: #A,
      usageType.sizeCategory:  #M
} 
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name:'SuplrEvalUserDefinedCriterion'
define root view entity I_SuplrEvalUsrDfndCriteriaTP_2
provider contract transactional_interface
  as projection on R_SuplrEvalUsrDfndCriteriaTP as _UserDefinedCriteria
{
 
 key SuplrEvalUsrDfndCritraUUID,
 Supplier,
 MaterialGroup,
 PurchasingCategory,
 SuplrEvalUserDefinedCriteria,
 SuplrEvalUserDfndCriteriaDesc,
 SuplrEvalUsrCritraValidFrmDte,
 SuplrEvalUsrCritraValidToDte,
 SuplrEvalUsrDfndCritraRptdDte,
 SuplrEvalUsrDfndCritraCrtedBy,
 SuplrEvalUserDfndCritraCrtnDte,
 SuplrEvalUsrDfndCritraChgdBy,
 SuplrEvalUserDfndCritraChgDate,
 TotNmbrOfSuplrUsrDfndCritra,
 @Semantics.booleanIndicator: true
 IsDeleted,
 SuplrEvalUsrCritraCommentText,
 SupplierAccountGroup,
 SuplrEvalUsrCritraChgDteTme,
 /* Associations */
 _CreatedBy,
 _LastChangedBy,
 _MatGroup, 
 _StatusVH,
 _SuplrEvalUserDfndCriteria,
 _Supplier
 
 }
```
