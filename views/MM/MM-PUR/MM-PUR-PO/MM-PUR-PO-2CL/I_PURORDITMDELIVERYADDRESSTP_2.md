---
name: I_PURORDITMDELIVERYADDRESSTP_2
description: Purorditmdeliveryaddresstp 2
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - interface-view
  - transactional-processing
  - delivery
  - address
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_PURORDITMDELIVERYADDRESSTP_2

**Purorditmdeliveryaddresstp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchaseOrder` | `PurchaseOrder` |
| key `PurchaseOrderItem` | `PurchaseOrderItem` |
| key `DeliveryAddressID` | `DeliveryAddressID` |
| `AddressID` | `AddressID` |
| `AddressPersonID` | `AddressPersonID` |
| `AddressRepresentationCode` | `AddressRepresentationCode` |
| `CorrespondenceLanguage` | `CorrespondenceLanguage` |
| `PrfrdCommMediumType` | `PrfrdCommMediumType` |
| `AddresseeFullName` | `AddresseeFullName` |
| `OrganizationName1` | `OrganizationName1` |
| `OrganizationName2` | `OrganizationName2` |
| `OrganizationName3` | `OrganizationName3` |
| `OrganizationName4` | `OrganizationName4` |
| `AddressSearchTerm1` | `AddressSearchTerm1` |
| `AddressSearchTerm2` | `AddressSearchTerm2` |
| `CityName` | `CityName` |
| `DistrictName` | `DistrictName` |
| `VillageName` | `VillageName` |
| `PostalCode` | `PostalCode` |
| `CompanyPostalCode` | `CompanyPostalCode` |
| `StreetName` | `StreetName` |
| `StreetPrefixName1` | `StreetPrefixName1` |
| `StreetPrefixName2` | `StreetPrefixName2` |
| `StreetSuffixName1` | `StreetSuffixName1` |
| `StreetSuffixName2` | `StreetSuffixName2` |
| `HouseNumber` | `HouseNumber` |
| `HouseNumberSupplementText` | `HouseNumberSupplementText` |
| `Building` | `Building` |
| `Floor` | `Floor` |
| `RoomNumber` | `RoomNumber` |
| `Country` | `Country` |
| `Region` | `Region` |
| `FormOfAddress` | `FormOfAddress` |
| `TaxJurisdiction` | `TaxJurisdiction` |
| `TransportZone` | `TransportZone` |
| `POBox` | `POBox` |
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
| `EmailAddress` | `EmailAddress` |
| `RegionalStructureCheckStatus` | `RegionalStructureCheckStatus` |
| `_Country` | *Association* |
| `_CurrentDfltEmailAddress` | *Association* |
| `_CurrentDfltFaxNumber` | *Association* |
| `_CurrentDfltLandlinePhoneNmbr` | *Association* |
| `_CurrentDfltMobilePhoneNumber` | *Association* |
| `_DeliveryAddress` | *Association* |
| `_EmailAddress` | *Association* |
| `_FaxNumber` | *Association* |
| `_PhoneNumber` | *Association* |
| `_PurchaseOrder` | *Association* |
| `_PurchaseOrderItem` | *Association* |
| `_Region` | *Association* |

## Source Code

```abap
@EndUserText.label: 'PO Item Delivery Address Projection'
@AccessControl: { authorizationCheck: #PRIVILEGED_ONLY, personalData.blocking: #BLOCKED_DATA_EXCLUDED, privilegedAssociations: ['_DeliveryAddress'] }
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
define view entity I_PurOrdItmDeliveryAddressTP_2
  as projection on R_PurOrdItemDeliveryAddressTP
{

  key PurchaseOrder,
  key PurchaseOrderItem,
  key DeliveryAddressID,
      AddressID,
      AddressPersonID,
      AddressRepresentationCode,
      CorrespondenceLanguage,
      PrfrdCommMediumType,
      AddresseeFullName,
      OrganizationName1,
      OrganizationName2,
      OrganizationName3,
      OrganizationName4,
      AddressSearchTerm1,
      AddressSearchTerm2,
      CityName,
      DistrictName,
      VillageName,
      PostalCode,
      CompanyPostalCode,
      StreetName,
      StreetPrefixName1,
      StreetPrefixName2,
      StreetSuffixName1,
      StreetSuffixName2,
      HouseNumber,
      HouseNumberSupplementText,
      Building,
      Floor,
      RoomNumber,
      Country,
      Region,
      FormOfAddress,
      TaxJurisdiction,
      TransportZone,
      POBox,
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
      EmailAddress,
      RegionalStructureCheckStatus,
      
      /* Associations */
      _Country,
      _CurrentDfltEmailAddress,
      _CurrentDfltFaxNumber,
      _CurrentDfltLandlinePhoneNmbr,
      _CurrentDfltMobilePhoneNumber,
      _DeliveryAddress,
      _EmailAddress,
      _FaxNumber,
      _PhoneNumber,
      _PurchaseOrder     : redirected to I_PurchaseOrderTP_2,
      _PurchaseOrderItem : redirected to parent I_PurchaseOrderItemTP_2,
      _Region

}
```
