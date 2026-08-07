---
name: I_BANKTP
description: "Banktp"
app_component: CA-BK-BNK-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-BK
  - CA-BK-BNK
  - interface-view
  - transactional-processing
  - bank
  - component:CA-BK-BNK-2CL
  - lob:Cross-Application Components
  - bo:Bank
---
# I_BANKTP

**Banktp**

| Property | Value |
|---|---|
| App Component | `CA-BK-BNK-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankCountry` | ✓ | |  |  |  |  |
| `BankInternalID` | ✓ | |  |  |  |  |
| `LongBankName` |  | |  |  |  |  |
| `LongBankBranch` |  | |  |  |  |  |
| `SWIFTCode` |  | |  |  |  |  |
| `BankNetworkGrouping` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `BankNumber` |  | |  |  |  |  |
| `BankCategory` |  | |  |  |  |  |
| `I_BankAddressTP` |  | |  | `Bank._BankAddress : redirected to composition child I_BankAddressTP` |  |  |

## Source Code

```abap
@ObjectModel.supportedCapabilities : [ #UI_PROVIDER_PROJECTION_SOURCE ]
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
  }
@ObjectModel:{
   usageType: {
     serviceQuality: #C,
     sizeCategory: #M,
     dataClass: #TRANSACTIONAL }
 }
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.sapObjectNodeType.name: 'Bank'
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Bank - TP'

define root view entity I_BankTP
  provider contract transactional_interface
  as projection on R_BankTP as Bank
{
  key BankCountry    as BankCountry,
  key BankInternalID as BankInternalID,

      //----Address---- Fields from BNKA or local ADRC
      LongBankName,
      LongBankBranch,

      //----Control data---- Fields from BNKA
      SWIFTCode,
      BankNetworkGrouping,
      IsMarkedForDeletion,
      BankNumber,
      BankCategory,

      // Associations
      Bank._BankAddress : redirected to composition child I_BankAddressTP
}
```
