---
name: I_WRKASSGMTPAYMENTTP_1
description: Wrkassgmtpaymenttp 1
app_component: CA-WFD-INT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-WFD
  - CA-WFD-INT
  - interface-view
  - transactional-processing
  - payment
  - component:CA-WFD-INT
  - lob:Cross-Application Components
---
# I_WRKASSGMTPAYMENTTP_1

**Wrkassgmtpaymenttp 1**

| Property | Value |
|---|---|
| App Component | `CA-WFD-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `WorkforcePersonExternalID` | `WorkforcePersonExternalID` |
| key `WorkAssignmentExternalID` | `WorkAssignmentExternalID` |
| key `Country2DigitISOCode` | `Country2DigitISOCode` |
| key `BankIdentification` | `BankIdentification` |
| `BankAccountHolderName` | `BankAccountHolderName` |
| `BankAccountName` | `BankAccountName` |
| `BankControlKey` | `BankControlKey` |
| `BankCountryKey` | `BankCountryKey` |
| `BankNumber` | `BankNumber` |
| `BankName` | `BankName` |
| `BankAccount` | `BankAccount` |
| `IBAN` | `IBAN` |
| `SWIFTCode` | `SWIFTCode` |
| `WorkAssignmentStartDate` | `WorkAssignmentStartDate` |
| `WorkAssignmentEndDate` | `WorkAssignmentEndDate` |
| `BankAccountReferenceText` | `BankAccountReferenceText` |
| `WorkerPaymentMethod` | `WorkerPaymentMethod` |
| `WrkFrcPaymentCurrency` | `WrkFrcPaymentCurrency` |
| `IsBlocked` | `IsBlocked` |
| `_WorkAssignment` | *Association* |
| `_WorkforcePerson` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Work Assignment Payment - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel:{
usageType:{
  serviceQuality: #C,
  sizeCategory: #XXL,
  dataClass: #TRANSACTIONAL
},
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
    }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

//@ObjectModel.representativeKey:  'WorkforcePersonExternalID' //'WorkAssignmentExternalID', 'Country2DigitISOCode', 'BankIdentification'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_WrkAssgmtPaymentTP_1
  as projection on R_WrkAssgmtPaymentTP_1
{
  key WorkforcePersonExternalID,
  key WorkAssignmentExternalID,
  key Country2DigitISOCode,
  key BankIdentification,
      BankAccountHolderName,
      BankAccountName,
      BankControlKey,
      BankCountryKey,
      BankNumber,
      BankName,
      BankAccount,
      IBAN,
      SWIFTCode,
      WorkAssignmentStartDate,
      WorkAssignmentEndDate,
      BankAccountReferenceText,
      WorkerPaymentMethod,
      WrkFrcPaymentCurrency,
      IsBlocked,
      
      /* Associations */
      _WorkAssignment  : redirected to parent I_WorkAssignmentTP_1,
      _WorkforcePerson : redirected to I_WorkforcePersonTP_1
}
```
