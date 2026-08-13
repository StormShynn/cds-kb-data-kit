---
name: I_BANKSCRIPTEDADDRESSTP
description: "Bankscriptedaddresstp"
semantic_vi: "CDS view I_BANKSCRIPTEDADDRESSTP hiển thị dữ liệu địa chỉ ngân hàng, thường được sử dụng trong xử lý giao dịch cho ngân hàng."
keywords:
  - "bank"
  - "address"
  - "transactional processing"
  - "banking"
  - "ca-bk-bnk-2cl"
  - "cross-application components"
  - "bank script"
  - "address representation"
  - "bank country"
  - "bank internal id"
semantic_en: "The I_BANKSCRIPTEDADDRESSTP CDS view exposes bank address data, which is typically used in transactional processing for banks."
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
  - address
  - component:CA-BK-BNK-2CL
  - lob:Cross-Application Components
  - bo:Bank
---
# I_BANKSCRIPTEDADDRESSTP

**Bankscriptedaddresstp**

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
| `AddressRepresentationCode` | ✓ | |  |  |  |  |
| `LongBankName` |  | |  |  |  |  |
| `LongBankBranch` |  | |  |  |  |  |
| `StreetName` |  | |  |  |  |  |
| `HouseNumber` |  | |  |  |  |  |
| `HouseNumberSupplementText` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `PostalCode` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `CorrespondenceLanguage` |  | |  |  |  |  |
| `DistrictName` |  | |  |  |  |  |
| `VillageName` |  | |  |  |  |  |
| `CompanyPostalCode` |  | |  |  |  |  |
| `StreetAddrNonDeliverableReason` |  | |  |  |  |  |
| `StreetPrefixName1` |  | |  |  |  |  |
| `StreetPrefixName2` |  | |  |  |  |  |
| `StreetSuffixName1` |  | |  |  |  |  |
| `StreetSuffixName2` |  | |  |  |  |  |
| `Building` |  | |  |  |  |  |
| `Floor` |  | |  |  |  |  |
| `RoomNumber` |  | |  |  |  |  |
| `FormOfAddress` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `TransportZone` |  | |  |  |  |  |
| `POBox` |  | |  |  |  |  |
| `POBoxAddrNonDeliverableReason` |  | |  |  |  |  |
| `POBoxIsWithoutNumber` |  | |  |  |  |  |
| `POBoxPostalCode` |  | |  |  |  |  |
| `POBoxLobbyName` |  | |  |  |  |  |
| `POBoxDeviatingCityName` |  | |  |  |  |  |
| `POBoxDeviatingRegion` |  | |  |  |  |  |
| `POBoxDeviatingCountry` |  | |  |  |  |  |
| `CareOfName` |  | |  |  |  |  |
| `DeliveryServiceTypeCode` |  | |  |  |  |  |
| `DeliveryServiceNumber` |  | |  |  |  |  |
| `AddressTimeZone` |  | |  |  |  |  |
| `SecondaryRegionName` |  | |  |  |  |  |
| `TertiaryRegionName` |  | |  |  |  |  |
| `AddressSearchTerm1` |  | |  |  |  |  |
| `AddressSearchTerm2` |  | |  |  |  |  |
| `I_BankAddressTP` |  | |  | `BankScriptedAddress._BankAddress : redirected to parent I_BankAddressTP` |  |  |
| `I_BankTP` |  | |  | `BankScriptedAddress._Bank : redirected to I_BankTP` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Bank International Address Versions - TP'
@ObjectModel:{
   usageType: {
     serviceQuality: #C,
     sizeCategory: #L,
     dataClass: #TRANSACTIONAL } }
@VDM.viewType: #TRANSACTIONAL      
@Metadata.ignorePropagatedAnnotations: true
define view entity I_BankScriptedAddressTP 
as projection on R_BankScriptedAddressTP as BankScriptedAddress {
  key BankCountry,
  key BankInternalID,
  key AddressRepresentationCode, //adrc-nation <> '' 
      LongBankName,              //char80  ... must be exposed. Contains scripted value for I_BankTP.LongBankName  
      LongBankBranch,            //char80
      StreetName,
      HouseNumber,
      HouseNumberSupplementText,
      CityName,
      PostalCode,

      Country,

      Region,

      CorrespondenceLanguage,

      DistrictName,
      VillageName,
      CompanyPostalCode,
      StreetAddrNonDeliverableReason,
      StreetPrefixName1,
      StreetPrefixName2,
      StreetSuffixName1,
      StreetSuffixName2,
      Building,
      Floor,
      RoomNumber,

      FormOfAddress,
      TaxJurisdiction,
      TransportZone,
      POBox,
      POBoxAddrNonDeliverableReason,
      POBoxIsWithoutNumber,
      POBoxPostalCode,
      POBoxLobbyName,
      POBoxDeviatingCityName,
      POBoxDeviatingRegion,
      POBoxDeviatingCountry,
      CareOfName,
      DeliveryServiceTypeCode,
      DeliveryServiceNumber,
      AddressTimeZone,
      SecondaryRegionName,
      TertiaryRegionName,
      
      AddressSearchTerm1,
      AddressSearchTerm2,
      
      // Associations
      BankScriptedAddress._BankAddress : redirected to parent I_BankAddressTP,
      BankScriptedAddress._Bank        : redirected to I_BankTP
}
```
