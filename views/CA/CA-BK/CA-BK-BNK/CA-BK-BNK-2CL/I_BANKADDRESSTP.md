---
name: I_BANKADDRESSTP
description: Bankaddresstp
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
# I_BANKADDRESSTP

**Bankaddresstp**

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
| `AddressRepresentationCode` | `AddressRepresentationCode` |
| `AddressID` | `AddressID` |
| `AddressSearchTerm1` | `AddressSearchTerm1` |
| `AddressSearchTerm2` | `AddressSearchTerm2` |
| `InternationalPhoneNumber` | `InternationalPhoneNumber` |
| `InternationalMobilePhoneNumber` | `InternationalMobilePhoneNumber` |
| `InternationalFaxNumber` | `InternationalFaxNumber` |
| `EmailAddress` | `EmailAddress` |
| `I_BankTP` | `BankAddress._Bank : redirected to parent I_BankTP` |
| `I_BankScriptedAddressTP` | `BankAddress._BankScriptVariant : redirected to composition child I_BankScriptedAddressTP` |
| `_Region` | *Association* |
| `_Country` | *Association* |
| `_FormOfAddress` | *Association* |

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
