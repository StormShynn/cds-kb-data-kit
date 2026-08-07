---
name: I_BKPOABKACCOUNTSELECTIONTP_2
description: Bkpoabkaccountselectiontp 2
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
  - component:FIN-FSCM-CLM-BAM-2CL
  - lob:Other
---
# I_BKPOABKACCOUNTSELECTIONTP_2

**Bkpoabkaccountselectiontp 2**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` | ✓ | |  |  |
| `BkPOABankAccountSelectionUUID` | ✓ | |  |  |
| `BkPOABkAcctSelectionField` |  | |  |  |
| `BkPOABkAcctSelectionSign` |  | |  |  |
| `BkPOABkAcctSelectionOption` |  | |  |  |
| `BkPOABkAcctSelectionLowValue` |  | |  |  |
| `BkPOABkAcctSelectionHighValue` |  | |  |  |
| `BkPOABkAcctSelectionGroup` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LocalLastChangeDateTime` |  | |  |  |
| `_BankPowerOfAttorney` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AbapCatalog.viewEnhancementCategory: [#NONE]
@EndUserText.label: 'Bank Account Selections - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{ modelingPattern:  #TRANSACTIONAL_INTERFACE,
               supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
               usageType: { serviceQuality: #B,
                            sizeCategory:   #S,
                            dataClass:      #MASTER },
               sapObjectNodeType.name: 'BkPOABankAccountSelection'}
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }

define view entity I_BkPOABkAccountSelectionTP_2
  as projection on R_BkPOABankAccountSelectionTP as BankAccountSelection
{
  key BankPowerOfAttorneyUUID,
  key BkPOABankAccountSelectionUUID,
      BkPOABkAcctSelectionField,
      BkPOABkAcctSelectionSign,
      BkPOABkAcctSelectionOption,
      BkPOABkAcctSelectionLowValue,
      BkPOABkAcctSelectionHighValue,
      BkPOABkAcctSelectionGroup,
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
