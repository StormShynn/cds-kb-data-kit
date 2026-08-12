---
name: I_CASHPOOLTP
description: "Cashpooltp"
app_component: FIN-FSCM-CLM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - transactional-processing
  - component:FIN-FSCM-CLM-2CL
  - lob:Other
---
# I_CASHPOOLTP

**Cashpooltp**

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
| `IHBBusinessPartner` |  | |  |  |  |  |
| `IHBBankKey` |  | |  |  |  |  |
| `IHBBankAreaCountry` |  | |  |  |  |  |
| `BankManagedCashPoolAuthGrp` |  | |  |  |  |  |
| `CashConcentrationGroup` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LocalLastChangeDateTime` |  | |  |  |  |  |
| `_HeaderAssignment` | | ✓ | | | | |
| `_SubAssignment` | | ✓ | | | | |
| `_Desc` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Cash Pools General Info - TP'
@ObjectModel.sapObjectNodeType.name: 'CashPool'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel:{ modelingPattern:  #TRANSACTIONAL_INTERFACE,
               supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
               usageType:{  serviceQuality: #B,
                            sizeCategory: #S,
                            dataClass: #MASTER
                          }
}
@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: [ 'CashPool' ],
  elementSuffix: 'CPL',
  quota: { maximumFields: 100, maximumBytes: 10000 }
}
@AbapCatalog.extensibility.allowNewCompositions

define root view entity I_CashPoolTP
  provider contract transactional_interface
  as projection on R_CashPoolTP as CashPool
{
  key CashPool,
      @Semantics.booleanIndicator: true
      CashPoolIsDeleted,
      CashPoolType,
      CashPoolTransfDrctn,
      CashPoolSrvcPrvdr,
      CashPoolBalCalcPrfl,
      PlanningLevel,
      IHBBusinessPartner,
      IHBBankKey,
      IHBBankAreaCountry,
      BankManagedCashPoolAuthGrp,
      CashConcentrationGroup,

      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,

      @Semantics.user.createdBy: true
      CreatedByUser,

      @Semantics.user.lastChangedBy: true
      LastChangedByUser,

      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,

      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      LocalLastChangeDateTime,
       @Semantics.valueRange.maximum: '1'
      _HeaderAssignment: redirected to composition child I_CashPoolHeaderAcctAssgmtTP,
      _SubAssignment: redirected to composition child I_CashPoolSubAcctAssgmtTP,
      _Desc: redirected to composition child I_CashPoolMDDescTP
}
```
