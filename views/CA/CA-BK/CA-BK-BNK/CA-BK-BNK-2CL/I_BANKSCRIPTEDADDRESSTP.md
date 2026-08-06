---
name: I_BANKSCRIPTEDADDRESSTP
description: Bankscriptedaddresstp
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

| Field | Data Source |
|---|---|
| key `BankCountry` | `BankCountry` |
| key `BankInternalID` | `BankInternalID` |
| key `AddressRepresentationCode` | `AddressRepresentationCode` |
| `LongBankName` | `LongBankName` |
| `LongBankBranch` | `LongBankBranch` |
| `StreetName` | `StreetName` |
| `HouseNumber` | `HouseNumber` |
| `HouseNumberSupplementText` | `HouseNumberSupplementText` |
| `CityName` | `CityName` |
| `PostalCode` | `PostalCode` |
| `Country` | `Country` |
| `Region` | `Region` |
| `CorrespondenceLanguage` | `CorrespondenceLanguage` |
| `DistrictName` | `DistrictName` |
| `VillageName` | `VillageName` |
| `CompanyPostalCode` | `CompanyPostalCode` |
| `StreetAddrNonDeliverableReason` | `StreetAddrNonDeliverableReason` |
| `StreetPrefixName1` | `StreetPrefixName1` |
| `StreetPrefixName2` | `StreetPrefixName2` |
| `StreetSuffixName1` | `StreetSuffixName1` |
| `StreetSuffixName2` | `StreetSuffixName2` |
| `Building` | `Building` |
| `Floor` | `Floor` |
| `RoomNumber` | `RoomNumber` |
| `FormOfAddress` | `FormOfAddress` |
| `TaxJurisdiction` | `TaxJurisdiction` |
| `TransportZone` | `TransportZone` |
| `POBox` | `POBox` |
| `POBoxAddrNonDeliverableReason` | `POBoxAddrNonDeliverableReason` |
| `POBoxIsWithoutNumber` | `POBoxIsWithoutNumber` |
| `POBoxPostalCode` | `POBoxPostalCode` |
| `POBoxLobbyName` | `POBoxLobbyName` |
| `POBoxDeviatingCityName` | `POBoxDeviatingCityName` |
| `POBoxDeviatingRegion` | `POBoxDeviatingRegion` |
| `POBoxDeviatingCountry` | `POBoxDeviatingCountry` |
| `CareOfName` | `CareOfName` |
| `DeliveryServiceTypeCode` | `DeliveryServiceTypeCode` |
| `DeliveryServiceNumber` | `DeliveryServiceNumber` |
| `AddressTimeZone` | `AddressTimeZone` |
| `SecondaryRegionName` | `SecondaryRegionName` |
| `TertiaryRegionName` | `TertiaryRegionName` |
| `AddressSearchTerm1` | `AddressSearchTerm1` |
| `AddressSearchTerm2` | `AddressSearchTerm2` |
| `I_BankAddressTP` | `BankScriptedAddress._BankAddress : redirected to parent I_BankAddressTP` |
| `I_BankTP` | `BankScriptedAddress._Bank : redirected to I_BankTP` |

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
