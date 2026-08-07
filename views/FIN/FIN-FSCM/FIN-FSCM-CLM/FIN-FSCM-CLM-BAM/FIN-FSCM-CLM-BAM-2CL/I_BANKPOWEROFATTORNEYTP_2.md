---
name: I_BANKPOWEROFATTORNEYTP_2
description: Bankpowerofattorneytp 2
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
# I_BANKPOWEROFATTORNEYTP_2

**Bankpowerofattorneytp 2**

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
| `BankPowerOfAttorney` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `BkPOABankAccountAssignmentType` |  | |  |  |
| `BankPowerOfAttorneyName` |  | |  |  |
| `BankPowerOfAttorneyStatus` |  | |  |  |
| `BkPOAAuthorizationGroup` |  | |  |  |
| `PaymentApprovalRule` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LocalLastChangeDateTime` |  | |  |  |
| `BkPOARtntnPeriodStartDateTime` |  | |  |  |
| `BankPowerOfAttorneyIsBlocked` |  | |  |  |
| `BankPowerOfAttorneyType` |  | |  |  |
| `_BkPOAActivityAssignment` | | ✓ | | |
| `_BkPOAAuthzdRepresentative` | | ✓ | | |
| `_BkPOABankAccount` | | ✓ | | |
| `_BkPOABankAccountSelection` | | ✓ | | |
| `_BkPOACompanyCode` | | ✓ | | |
| `_BkPOAPredecessor` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Bank Power of Attorney - TP'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{ modelingPattern:  #TRANSACTIONAL_INTERFACE,
               supportedCapabilities: [#TRANSACTIONAL_PROVIDER,#UI_PROVIDER_PROJECTION_SOURCE],
               usageType: { serviceQuality: #B,
                            sizeCategory:   #S,
                            dataClass:      #MASTER },
               sapObjectNodeType.name: 'BankPowerOfAttorney'}
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }

@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: [ 'BankPowerOfAttorney' ],
  elementSuffix: 'PEX',
  quota: { maximumFields: 100, maximumBytes: 100000 }
}
@AbapCatalog.extensibility.allowNewCompositions
define root view entity I_BankPowerOfAttorneyTP_2
  provider contract transactional_interface
  as projection on R_BankPowerOfAttorneyTP as BankPowerOfAttorney
{
  key BankPowerOfAttorneyUUID,
      BankPowerOfAttorney,
      ValidityStartDate,
      ValidityEndDate,
      BkPOABankAccountAssignmentType,
      BankPowerOfAttorneyName,
      BankPowerOfAttorneyStatus,
      BkPOAAuthorizationGroup,
      PaymentApprovalRule,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      LocalLastChangeDateTime,
      BkPOARtntnPeriodStartDateTime,
      BankPowerOfAttorneyIsBlocked,
      BankPowerOfAttorneyType,
      /* Associations */
      _BkPOAActivityAssignment: redirected to composition child I_BkPOAActivityAssignmentTP_2,
      _BkPOAAuthzdRepresentative: redirected to composition child I_BkPOAAuthzdRprstvTP_2,
      _BkPOABankAccount: redirected to composition child I_BkPOABankAccountTP_2,
      _BkPOABankAccountSelection: redirected to composition child I_BkPOABkAccountSelectionTP_2,
      _BkPOACompanyCode: redirected to composition child I_BkPOACompanyCodeTP_2,
      @Semantics.valueRange.maximum: '1'
      _BkPOAPredecessor: redirected to composition child I_BkPOAPredecessorTP_2
      
}
```
