---
name: I_CONTRACCTPRTNBUSINESSLOCKTP
description: Contracctprtnbusinesslocktp
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - transactional-processing
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CONTRACCTPRTNBUSINESSLOCKTP

**Contracctprtnbusinesslocktp**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ContractAccount` | `ContractAccount` |
| key `BusinessPartner` | `BusinessPartner` |
| key `CABusinessProcess` | `CABusinessProcess` |
| key `CABusinessLockReason` | `CABusinessLockReason` |
| key `CABusinessLockValidFrom` | `CABusinessLockValidFrom` |
| key `CABusinessLockValidTo` | `CABusinessLockValidTo` |
| `CABusinessLockText` | `CABusinessLockText` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangeTime` | `LastChangeTime` |
| `CABusinessProcessForEdit` | `CABusinessProcessForEdit` |
| `CABusinessLockReasonForEdit` | `CABusinessLockReasonForEdit` |
| `CABusinessLockValidFromForEdit` | `CABusinessLockValidFromForEdit` |
| `CABusinessLockValidToForEdit` | `CABusinessLockValidToForEdit` |
| `_BusinessPartner` | *Association* |
| `_CABusinessLockReason` | *Association* |
| `_CABusinessProcess` | *Association* |
| `_ContractAccount` | *Association* |
| `_ContractAccountPartner` | *Association* |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #REQUIRED,
                                  blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted'] } }

@EndUserText.label: 'Contr Acct Partner Business Lock - TP'

@ObjectModel: { modelingPattern: #TRANSACTIONAL_INTERFACE,
                sapObjectNodeType.name: 'ContrAcctPartnerBusinessLock',
                supportedCapabilities:  [#TRANSACTIONAL_PROVIDER],
                usageType: { dataClass: #MASTER,
                             serviceQuality: #C,
                             sizeCategory: #L } }

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ContrAcctPrtnBusinessLockTP 
  as projection on R_ContrAcctPrtnBusinessLockTP
{
  key ContractAccount,
  key BusinessPartner,
  key CABusinessProcess,
  key CABusinessLockReason,
  key CABusinessLockValidFrom,
  key CABusinessLockValidTo,
  CABusinessLockText,
  LastChangedByUser,
  LastChangeDate,
  LastChangeTime,
  
  @ObjectModel.editableFieldFor: 'CABusinessProcess'
  CABusinessProcessForEdit,
  @ObjectModel.editableFieldFor: 'CABusinessLockReason'
  CABusinessLockReasonForEdit,
  @ObjectModel.editableFieldFor: 'CABusinessLockValidFrom'
  CABusinessLockValidFromForEdit,
  @ObjectModel.editableFieldFor: 'CABusinessLockValidTo'
  CABusinessLockValidToForEdit,
  
  /* Associations */
  _BusinessPartner,
  _CABusinessLockReason,
  _CABusinessProcess,
  _ContractAccount: redirected to I_ContractAccountTP,
  _ContractAccountPartner: redirected to parent I_ContractAccountPartnerTP
}
```
