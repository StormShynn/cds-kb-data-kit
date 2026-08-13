---
name: I_BANKTP
description: "Banktp"
semantic_vi: "View I_BANKTP hiển thị thông tin ngân hàng, bao gồm quốc gia, ID nội bộ, tên và mã SWIFT, có thể được sử dụng để xác định và xác minh ngân hàng cho các giao dịch hoặc mục đích kinh doanh khác."
keywords:
  - "bank"
  - "ngân hàng"
  - "bank information"
  - "thông tin ngân hàng"
  - "transaction"
  - "giao dịch"
  - "bank identification"
  - "xác định ngân hàng"
  - "bank verification"
  - "xác minh ngân hàng"
  - "sap cds view"
  - "view i_banktp"
semantic_en: "The I_BANKTP view exposes bank information, including country, internal ID, name, and SWIFT code, which can be used to identify and verify banks for transactions or other business purposes."
app_component: CA-BK-BNK-2CL
software_component: SAP_BASIS
release_state: released
atc_state: released
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
