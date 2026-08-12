---
name: I_PURCHASEREQNDELIVADDRTP
description: "Purchase RequisitionNDELIVADDRTP"
app_component: MM-PUR-REQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-REQ
  - interface-view
  - transactional-processing
  - purchase-requisition
  - component:MM-PUR-REQ-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASEREQNDELIVADDRTP

**Purchase RequisitionNDELIVADDRTP**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseRequisition` | ✓ | |  |  |  |  |
| `PurchaseRequisitionItem` | ✓ | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `PurchasingDeliveryAddressType` |  | |  |  |  |  |
| `ManualDeliveryAddressID` |  | |  |  |  |  |
| `ItemDeliveryAddressID` |  | |  |  |  |  |
| `CareOfName` |  | |  |  |  |  |
| `AdditionalStreetSuffixName` |  | |  |  |  |  |
| `CorrespondenceLanguage` |  | |  |  |  |  |
| `PrfrdCommMediumType` |  | |  |  |  |  |
| `POBox` |  | |  |  |  |  |
| `POBoxIsWithoutNumber` |  | |  |  |  |  |
| `POBoxPostalCode` |  | |  |  |  |  |
| `POBoxLobbyName` |  | |  |  |  |  |
| `POBoxDeviatingCityName` |  | |  |  |  |  |
| `POBoxDeviatingRegion` |  | |  |  |  |  |
| `POBoxDeviatingCountry` |  | |  |  |  |  |
| `DeliveryServiceTypeCode` |  | |  |  |  |  |
| `DeliveryServiceNumber` |  | |  |  |  |  |
| `AddressTimeZone` |  | |  |  |  |  |
| `FullName` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `District` |  | |  |  |  |  |
| `CityCode` |  | |  |  |  |  |
| `HomeCityName` |  | |  |  |  |  |
| `PostalCode` |  | |  |  |  |  |
| `CompanyPostalCode` |  | |  |  |  |  |
| `StreetName` |  | |  |  |  |  |
| `StreetPrefixName` |  | |  |  |  |  |
| `AdditionalStreetPrefixName` |  | |  |  |  |  |
| `StreetSuffixName` |  | |  |  |  |  |
| `HouseNumber` |  | |  |  |  |  |
| `HouseNumberSupplementText` |  | |  |  |  |  |
| `Building` |  | |  |  |  |  |
| `Floor` |  | |  |  |  |  |
| `RoomNumber` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `County` |  | |  |  |  |  |
| `FormOfAddress` |  | |  |  |  |  |
| `BusinessPartnerName1` |  | |  |  |  |  |
| `BusinessPartnerName2` |  | |  |  |  |  |
| `PhoneNumber` |  | |  |  |  |  |
| `FaxNumber` |  | |  |  |  |  |
| `SearchTerm1` |  | |  |  |  |  |
| `BusinessPartnerName3` |  | |  |  |  |  |
| `BusinessPartnerName4` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `TransportZone` |  | |  |  |  |  |
| `PurchaseRequisitionType` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_PurchaseRequisitionItem` | | ✓ | | | | |
| `_PurReqn` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Purchase Reqn Delivery Address - TP'

@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

//@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel: {
    usageType: {
        sizeCategory: #XL,
        serviceQuality: #C,
        dataClass:#TRANSACTIONAL
    }
  }

@ObjectModel.semanticKey: ['PurchaseRequisition', 'PurchaseRequisitionItem']

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

define view entity I_PurchaseReqnDelivAddrTP 
  as projection on R_PurchaseReqnDelivAddressTP
{
  key PurchaseRequisition,
  key PurchaseRequisitionItem,
      AddressID,
      Plant,
      PurchasingDeliveryAddressType,
      ManualDeliveryAddressID,
      ItemDeliveryAddressID,
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
      District,
      CityCode,
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
      County,
      FormOfAddress,
      BusinessPartnerName1,
      BusinessPartnerName2,
      PhoneNumber,
      FaxNumber,
      SearchTerm1,
      BusinessPartnerName3,
      BusinessPartnerName4,
      TaxJurisdiction,
      TransportZone,
      PurchaseRequisitionType,
      PurchasingOrganization,
      PurchasingGroup,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      
      /* Associations */
      _PurchaseRequisitionItem : redirected to parent I_PurchaseReqnItemTP,
      _PurReqn                 : redirected to I_PurchaseRequisitionTP
}
```
