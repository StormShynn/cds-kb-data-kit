---
name: I_BANKADDRESSTP
description: "Bankaddresstp"
semantic_vi: "View I_BANKADDRESSTP CDS hiển thị dữ liệu địa chỉ ngân hàng, được sử dụng để lưu trữ và quản lý địa chỉ ngân hàng cho các giao dịch ngân hàng khác nhau."
keywords:
  - "bank address"
  - "địa chỉ ngân hàng"
  - "banking transaction"
  - "giao dịch ngân hàng"
  - "sap cds view"
  - "view i_bankaddresstp"
  - "address data"
  - "data địa chỉ"
  - "banking data"
  - "data ngân hàng"
semantic_en: "The I_BANKADDRESSTP CDS view exposes bank address data, which is used to store and manage bank addresses for various banking transactions."
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
# I_BANKADDRESSTP

**Bankaddresstp**

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
| `AddressRepresentationCode` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `AddressSearchTerm1` |  | |  |  |  |  |
| `AddressSearchTerm2` |  | |  |  |  |  |
| `InternationalPhoneNumber` |  | |  |  |  |  |
| `InternationalMobilePhoneNumber` |  | |  |  |  |  |
| `InternationalFaxNumber` |  | |  |  |  |  |
| `EmailAddress` |  | |  |  |  |  |
| `I_BankTP` |  | |  | `BankAddress._Bank : redirected to parent I_BankTP` |  |  |
| `I_BankScriptedAddressTP` |  | |  | `BankAddress._BankScriptVariant : redirected to composition child I_BankScriptedAddressTP` |  |  |
| `_Region` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_FormOfAddress` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Bank Address - TP'
@VDM: {
  viewType: #TRANSACTIONAL
}
@ObjectModel:{
   usageType: {
     serviceQuality: #C,
     sizeCategory: #L,
     dataClass: #TRANSACTIONAL }
 }
@Metadata.ignorePropagatedAnnotations: true 
define view entity I_BankAddressTP
  as projection on R_BankAddressTP as BankAddress
{
  key BankCountry,
  key BankInternalID,

      //LongBankName,              //char80 ... it is exposed via case condition in I_BankTP
      //LongBankBranch,            //char80
      StreetName,
      HouseNumber,
      HouseNumberSupplementText,
      CityName,
      PostalCode,
      @ObjectModel.foreignKey.association: '_Country'
      Country,
      @ObjectModel.foreignKey.association: '_Region'
      Region,
      @Semantics.language: true
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
      @ObjectModel.foreignKey.association: '_FormOfAddress'
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

      AddressRepresentationCode,
      AddressID,
      AddressSearchTerm1,
      AddressSearchTerm2,
      
      
// Comunication data
      //Telephone
      InternationalPhoneNumber,
     
      //Mobile Phone
      InternationalMobilePhoneNumber,
      
      //Fax
      InternationalFaxNumber,
      
      //E-mail
      EmailAddress,

      // Associations
      BankAddress._Bank              : redirected to parent I_BankTP,
      BankAddress._BankScriptVariant : redirected to composition child I_BankScriptedAddressTP,

      _Region,
      _Country,
      _FormOfAddress
}
```
