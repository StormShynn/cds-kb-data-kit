---
name: I_CASHPOOLSUBACCTASSGMTTP
description: Cashpoolsubacctassgmttp
app_component: FIN-FSCM-CLM-2CL
software_component: SAPSCORE
release_state: released
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
# I_CASHPOOLSUBACCTASSGMTTP

**Cashpoolsubacctassgmttp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CashPoolAssignment` | `CashPoolAssignment` |
| `CashPoolAssignmentText` | `CashPoolAssignmentText` |
| `CashPool` | `CashPool` |
| `CashPoolAssgmtIsHeadBkAcct` | `CashPoolAssgmtIsHeadBkAcct` |
| `CashPoolAssgmtIsDeleted` | `CashPoolAssgmtIsDeleted` |
| `CashPoolAssgmtValdtyStrtDte` | `CashPoolAssgmtValdtyStrtDte` |
| `CashPoolAssgmtValdtyEndDte` | `CashPoolAssgmtValdtyEndDte` |
| `BankAccountInternalID` | `BankAccountInternalID` |
| `PaymentMethod` | `PaymentMethod` |
| `TargetBalanceAmount` | `TargetBalanceAmount` |
| `MinTransferAmount` | `MinTransferAmount` |
| `MaxTransferAmount` | `MaxTransferAmount` |
| `Note` | `Note` |
| `BankAccountCurrency` | `BankAccountCurrency` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangedByUser` | `LastChangedByUser` |
| `CreationDateTime` | `CreationDateTime` |
| `LocalLastChangeDateTime` | `LocalLastChangeDateTime` |
| `_GeneralInfo` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Cash Pool Subaccount Assignment - TP'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: { modelingPattern:  #TRANSACTIONAL_INTERFACE,
                supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
                usageType:{
                    serviceQuality: #C,
                    sizeCategory: #S,
                    dataClass: #MIXED
                  }
}
@AbapCatalog.extensibility: { 
  extensible: true,
  dataSources: [ 'CashPoolSubAcctAssgmt' ],
  elementSuffix: 'CPS',
  quota: { maximumFields: 100, maximumBytes: 10000 } 
}
@AbapCatalog.extensibility.allowNewCompositions
define view entity I_CashPoolSubAcctAssgmtTP as
  projection on R_CashPoolSubAcctAssgmtTP as CashPoolSubAcctAssgmt
  {
      key CashPoolAssignment,

      CashPoolAssignmentText,
      CashPool,
      CashPoolAssgmtIsHeadBkAcct,
      @Semantics.booleanIndicator: true
      CashPoolAssgmtIsDeleted,
      CashPoolAssgmtValdtyStrtDte,
      CashPoolAssgmtValdtyEndDte,
      BankAccountInternalID,
      PaymentMethod,

      @Semantics.amount.currencyCode: 'BankAccountCurrency'
      TargetBalanceAmount,

      @Semantics.amount.currencyCode: 'BankAccountCurrency'
      MinTransferAmount,

      @Semantics.amount.currencyCode: 'BankAccountCurrency'
      MaxTransferAmount,

      Note,
      BankAccountCurrency,

      @Semantics.user.createdBy: true
      CreatedByUser,

      @Semantics.user.lastChangedBy: true
      LastChangedByUser,

      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,

      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      LocalLastChangeDateTime,
      _GeneralInfo: redirected to parent I_CashPoolTP
  }
```
