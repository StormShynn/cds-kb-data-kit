---
name: I_PURCHASEORDSUPPLIERADDRTP_2
description: "Purchaseordsupplieraddrtp 2"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - interface-view
  - transactional-processing
  - supplier
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_PURCHASEORDSUPPLIERADDRTP_2

**Purchaseordsupplieraddrtp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierAddressID` | ✓ | |  |  |  |  |
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `AddressPersonID` |  | |  |  |  |  |
| `AddressRepresentationCode` |  | |  |  |  |  |
| `CorrespondenceLanguage` |  | |  |  |  |  |
| `PrfrdCommMediumType` |  | |  |  |  |  |
| `AddresseeFullName` |  | |  |  |  |  |
| `OrganizationName1` |  | |  |  |  |  |
| `OrganizationName2` |  | |  |  |  |  |
| `OrganizationName3` |  | |  |  |  |  |
| `OrganizationName4` |  | |  |  |  |  |
| `AddressSearchTerm1` |  | |  |  |  |  |
| `AddressSearchTerm2` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `DistrictName` |  | |  |  |  |  |
| `VillageName` |  | |  |  |  |  |
| `PostalCode` |  | |  |  |  |  |
| `CompanyPostalCode` |  | |  |  |  |  |
| `StreetName` |  | |  |  |  |  |
| `StreetPrefixName1` |  | |  |  |  |  |
| `StreetPrefixName2` |  | |  |  |  |  |
| `StreetSuffixName1` |  | |  |  |  |  |
| `StreetSuffixName2` |  | |  |  |  |  |
| `HouseNumber` |  | |  |  |  |  |
| `HouseNumberSupplementText` |  | |  |  |  |  |
| `Building` |  | |  |  |  |  |
| `Floor` |  | |  |  |  |  |
| `RoomNumber` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `FormOfAddress` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `TransportZone` |  | |  |  |  |  |
| `POBox` |  | |  |  |  |  |
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
| `EmailAddress` |  | |  |  |  |  |
| `RegionalStructureCheckStatus` |  | |  |  |  |  |
| `_Country` | | ✓ | | | | |
| `_CurrentDfltEmailAddress` | | ✓ | | | | |
| `_CurrentDfltFaxNumber` | | ✓ | | | | |
| `_CurrentDfltLandlinePhoneNmbr` | | ✓ | | | | |
| `_CurrentDfltMobilePhoneNumber` | | ✓ | | | | |
| `_EmailAddress` | | ✓ | | | | |
| `_FaxNumber` | | ✓ | | | | |
| `_PhoneNumber` | | ✓ | | | | |
| `_PurchaseOrderTP` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'PO Supplier Address Projection'
@AccessControl: { authorizationCheck: #PRIVILEGED_ONLY, personalData.blocking: #BLOCKED_DATA_EXCLUDED }
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
define view entity I_PurchaseOrdSupplierAddrTP_2
  as projection on R_PurchaseOrdSupplierAddressTP
{

  key SupplierAddressID,
  key PurchaseOrder,
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
      _EmailAddress,
      _FaxNumber,
      _PhoneNumber,
      //_PurchaseOrder  ,
      _PurchaseOrderTP : redirected to parent I_PurchaseOrderTP_2,
      _Region

}
```
