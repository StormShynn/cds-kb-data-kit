---
name: I_CASHPOOLHEADERACCTASSGMTTP
description: Cashpoolheaderacctassgmttp
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
  - header-level
  - component:FIN-FSCM-CLM-2CL
  - lob:Other
---
# I_CASHPOOLHEADERACCTASSGMTTP

**Cashpoolheaderacctassgmttp**

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
| `CreatedByUser` | `CreatedByUser` |
| `LastChangedByUser` | `LastChangedByUser` |
| `CreationDateTime` | `CreationDateTime` |
| `LocalLastChangeDateTime` | `LocalLastChangeDateTime` |
| `_GeneralInfo` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Cash Pool Header Account Assignment - TP'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: { modelingPattern: #TRANSACTIONAL_INTERFACE,
               supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
               usageType:{ serviceQuality: #C,
                            sizeCategory: #S,
                            dataClass: #MASTER
                          }
}
@AbapCatalog.extensibility: { 
  extensible: true,
  dataSources: [ 'CashPoolHeaderAcctAssgm' ],
  elementSuffix: 'CPH',
  quota: { maximumFields: 100, maximumBytes: 10000 } 
}
@AbapCatalog.extensibility.allowNewCompositions
define view entity I_CashPoolHeaderAcctAssgmtTP as
  projection on R_CashPoolHeaderAcctAssgmtTP as CashPoolHeaderAcctAssgm
  {
    key CashPoolAssignment,

      CashPoolAssignmentText,
      CashPool,
      @Semantics.booleanIndicator: true
      CashPoolAssgmtIsHeadBkAcct,
      @Semantics.booleanIndicator: true
      CashPoolAssgmtIsDeleted,
      CashPoolAssgmtValdtyStrtDte,
      CashPoolAssgmtValdtyEndDte,
      BankAccountInternalID,
      PaymentMethod,

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
