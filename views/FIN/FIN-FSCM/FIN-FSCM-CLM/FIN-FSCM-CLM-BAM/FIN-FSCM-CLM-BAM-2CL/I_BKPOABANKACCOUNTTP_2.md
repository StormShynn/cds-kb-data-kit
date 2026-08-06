---
name: I_BKPOABANKACCOUNTTP_2
description: Bkpoabankaccounttp 2
app_component: FIN-FSCM-CLM-BAM-2CL
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
  - bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - lob:Other
  - bo:Bank
---
# I_BKPOABANKACCOUNTTP_2

**Bkpoabankaccounttp 2**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BankPowerOfAttorneyUUID` | `BankPowerOfAttorneyUUID` |
| key `BkPOABankAccountUUID` | `BkPOABankAccountUUID` |
| `BankAccountInternalID` | `BankAccountInternalID` |
| `BkPOABkAcctAssignmentDateTime` | `BkPOABkAcctAssignmentDateTime` |
| `BkPOABkAcctRemovalDateTime` | `BkPOABkAcctRemovalDateTime` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LocalLastChangeDateTime` | `LocalLastChangeDateTime` |
| `_BankPowerOfAttorney` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Bank Account of POA - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{ modelingPattern:  #TRANSACTIONAL_INTERFACE,
               supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
               usageType: { serviceQuality: #C,
                            sizeCategory: #M,
                            dataClass: #MASTER },
               sapObjectNodeType.name: 'BankPowerOfAttorneyBankAccount'}
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }

@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: [ 'BankAccount' ],
  elementSuffix: 'BPT',
  quota: { maximumFields: 100, maximumBytes: 100000 }
}
@AbapCatalog.extensibility.allowNewCompositions
define view entity I_BkPOABankAccountTP_2
  as projection on R_BkPOABankAccountTP as BankAccount
{
  key BankPowerOfAttorneyUUID,
  key BkPOABankAccountUUID,
      BankAccountInternalID,
      BkPOABkAcctAssignmentDateTime,
      BkPOABkAcctRemovalDateTime,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      LocalLastChangeDateTime,
      /* Associations */
      _BankPowerOfAttorney: redirected to parent I_BankPowerOfAttorneyTP_2
}
```
