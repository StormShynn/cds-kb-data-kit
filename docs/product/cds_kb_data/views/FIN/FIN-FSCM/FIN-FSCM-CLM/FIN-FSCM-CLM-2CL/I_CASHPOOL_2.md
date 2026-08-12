---
name: I_CASHPOOL_2
description: "Cashpool 2"
app_component: FIN-FSCM-CLM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - component:FIN-FSCM-CLM-2CL
  - lob:Other
---
# I_CASHPOOL_2

**Cashpool 2**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CashPool` | ✓ | |  |  |  |  |
| `CashPoolIsDeleted` |  | |  |  |  |  |
| `CashPoolType` |  | |  |  |  |  |
| `CashPoolTransfDrctn` |  | |  |  |  |  |
| `CashPoolSrvcPrvdr` |  | |  |  |  |  |
| `CashPoolBalCalcPrfl` |  | |  |  |  |  |
| `PlanningLevel` |  | |  |  |  |  |
| `BankManagedCashPoolAuthGrp` |  | |  |  |  |  |
| `CashPoolLastChangeDateTime` |  | |  |  |  |  |
| `CashPoolCreatedByUser` |  | |  |  |  |  |
| `CashPoolLastChangedByUser` |  | |  |  |  |  |
| `CashPoolCreationDateTime` |  | |  |  |  |  |
| `IHBBusinessPartner` |  | |  |  |  |  |
| `IHBBankKey` |  | |  |  |  |  |
| `IHBBankAreaCountry` |  | |  |  |  |  |
| `CashConcentrationGroup` |  | |  |  |  |  |
| `LocalLastChangeDateTime` |  | |  |  |  |  |
| `_DrctnText` | | ✓ | | | | |
| `_SrvcPrvdrText` | | ✓ | | | | |
| `_IsDeletedText` | | ✓ | | | | |
| `_TypeText` | | ✓ | | | | |
| `_BalCalcProfText` | | ✓ | | | | |
| `_PlanLevelText` | | ✓ | | | | |
| `_AuthGrpText` | | ✓ | | | | |
| `_IHBBankAreaOwner` | | ✓ | | | | |
| `_CashConcentrationGrpText` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICSHPL2'
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@Analytics: {
dataCategory: #DIMENSION
}
@Metadata.allowExtensions:true
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.internalName:#LOCAL 
@EndUserText.label: 'Manage Cash Pools'
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.representativeKey: 'CashPool'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ]  
define view I_CashPool_2
  as select from    I_CashPoolBasic     as cashpool
{
  key CashPool,
      CashPoolIsDeleted,
      CashPoolType,
      CashPoolTransfDrctn,
      CashPoolSrvcPrvdr,
      CashPoolBalCalcPrfl,
      PlanningLevel,
      BankManagedCashPoolAuthGrp,  
      CashPoolLastChangeDateTime,       
      CashPoolCreatedByUser, 
      CashPoolLastChangedByUser, 
      CashPoolCreationDateTime,
      IHBBusinessPartner, 
      IHBBankKey, 
      IHBBankAreaCountry, 
      CashConcentrationGroup,
      LocalLastChangeDateTime,      
      
      _DrctnText,
      _SrvcPrvdrText,
      _IsDeletedText,
      _TypeText,
      _BalCalcProfText,
      _PlanLevelText,
      _AuthGrpText,
      _IHBBankAreaOwner,
      _CashConcentrationGrpText      
} where ( CashPoolSrvcPrvdr = 'T' or CashPoolSrvcPrvdr = 'I' or CashPoolSrvcPrvdr = 'C' )
    and CashPoolIsDeleted <> 'Y';
```
