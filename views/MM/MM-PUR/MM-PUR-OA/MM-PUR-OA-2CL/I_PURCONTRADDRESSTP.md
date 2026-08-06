---
name: I_PURCONTRADDRESSTP
description: Purcontraddresstp
app_component: MM-PUR-OA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - transactional-processing
  - address
  - component:MM-PUR-OA-2CL
  - lob:Sourcing & Procurement
---
# I_PURCONTRADDRESSTP

**Purcontraddresstp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchaseContract` | `PurchaseContract` |
| key `PurchaseContractItem` | `PurchaseContractItem` |
| `AddressID` | `AddressID` |
| `Plant` | `Plant` |
| `CareOfName` | `CareOfName` |
| `AdditionalStreetSuffixName` | `AdditionalStreetSuffixName` |
| `CorrespondenceLanguage` | `CorrespondenceLanguage` |
| `PrfrdCommMediumType` | `PrfrdCommMediumType` |
| `POBox` | `POBox` |
| `POBoxIsWithoutNumber` | `POBoxIsWithoutNumber` |
| `POBoxPostalCode` | `POBoxPostalCode` |
| `POBoxLobbyName` | `POBoxLobbyName` |
| `POBoxDeviatingCityName` | `POBoxDeviatingCityName` |
| `POBoxDeviatingRegion` | `POBoxDeviatingRegion` |
| `POBoxDeviatingCountry` | `POBoxDeviatingCountry` |
| `DeliveryServiceTypeCode` | `DeliveryServiceTypeCode` |
| `DeliveryServiceNumber` | `DeliveryServiceNumber` |
| `AddressTimeZone` | `AddressTimeZone` |
| `FullName` | `FullName` |
| `CityName` | `CityName` |
| `DistrictName` | `DistrictName` |
| `ProcmtHubCityCode` | `ProcmtHubCityCode` |
| `HomeCityName` | `HomeCityName` |
| `PostalCode` | `PostalCode` |
| `CompanyPostalCode` | `CompanyPostalCode` |
| `StreetName` | `StreetName` |
| `StreetPrefixName` | `StreetPrefixName` |
| `AdditionalStreetPrefixName` | `AdditionalStreetPrefixName` |
| `StreetSuffixName` | `StreetSuffixName` |
| `HouseNumber` | `HouseNumber` |
| `HouseNumberSupplementText` | `HouseNumberSupplementText` |
| `Building` | `Building` |
| `Floor` | `Floor` |
| `RoomNumber` | `RoomNumber` |
| `Country` | `Country` |
| `Region` | `Region` |
| `PurContrCountyText` | `PurContrCountyText` |
| `FormOfAddress` | `FormOfAddress` |
| `ConsigneeName3` | `ConsigneeName3` |
| `ConsigneeName4` | `ConsigneeName4` |
| `TaxJurisdiction` | `TaxJurisdiction` |
| `TransportZone` | `TransportZone` |
| `PhoneNumber` | `PhoneNumber` |
| `MobilePhoneNumber` | `MobilePhoneNumber` |
| `AddressFaxNumber` | `AddressFaxNumber` |
| `EmailAddress` | `EmailAddress` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_PurchaseContractItem` | *Association* |
| `_PurContract` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Purchase Contract Address - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.semanticKey:  [ 'PurchaseContract','PurchaseContractItem' ]

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_PurContrAddressTP
  as projection on R_PurContrAddressTP
{
  key PurchaseContract,
  key PurchaseContractItem,
      AddressID,
      Plant,
      CareOfName,
      AdditionalStreetSuffixName,
      CorrespondenceLanguage,
      PrfrdCommMediumType,
      POBox,
      POBoxIsWithoutNumber,
      POBoxPostalCode,
      POBoxLobbyName,
      POBoxDeviatingCityName,
      POBoxDeviatingRegion,
      POBoxDeviatingCountry,
      DeliveryServiceTypeCode,
      DeliveryServiceNumber,
      AddressTimeZone,
      FullName,
      CityName,
      DistrictName,
      ProcmtHubCityCode,
      HomeCityName,
      PostalCode,
      CompanyPostalCode,
      StreetName,
      StreetPrefixName,
      AdditionalStreetPrefixName,
      StreetSuffixName,
      HouseNumber,
      HouseNumberSupplementText,
      Building,
      Floor,
      RoomNumber,
      Country,
      Region,
      PurContrCountyText,
      FormOfAddress,
      ConsigneeName3,
      ConsigneeName4,
      TaxJurisdiction,
      TransportZone,
      PhoneNumber,
      MobilePhoneNumber,
      AddressFaxNumber,
      EmailAddress,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      /* Associations */
      _PurchaseContractItem : redirected to parent I_PurchaseContractItemTP,
      _PurContract          : redirected to I_PurchaseContractTP
}
```
