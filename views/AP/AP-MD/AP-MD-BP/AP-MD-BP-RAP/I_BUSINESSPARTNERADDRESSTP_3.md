---
name: I_BUSINESSPARTNERADDRESSTP_3
description: Business PartnerADDRESSTP 3
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - transactional-processing
  - business-partner
  - address
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERADDRESSTP_3

**Business PartnerADDRESSTP 3**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessPartner` | `BusinessPartner` |
| key `AddressNumber` | `AddressNumber` |
| `AddressIDForEdit` | `AddressIDForEdit` |
| `BusinessPartnerAddressUUID` | `BusinessPartnerAddressUUID` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `CareOfName` | `CareOfName` |
| `StreetPrefixName` | `StreetPrefixName` |
| `AdditionalStreetPrefixName` | `AdditionalStreetPrefixName` |
| `HouseNumber` | `HouseNumber` |
| `StreetName` | `StreetName` |
| `HouseNumberSupplementText` | `HouseNumberSupplementText` |
| `StreetSuffixName` | `StreetSuffixName` |
| `AdditionalStreetSuffixName` | `AdditionalStreetSuffixName` |
| `HomeCityName` | `HomeCityName` |
| `District` | `District` |
| `DistrictName` | `DistrictName` |
| `PostalCode` | `PostalCode` |
| `CityName` | `CityName` |
| `Country` | `Country` |
| `Region` | `Region` |
| `AddressTimeZone` | `AddressTimeZone` |
| `TransportZone` | `TransportZone` |
| `TaxJurisdiction` | `TaxJurisdiction` |
| `CompanyPostalCode` | `CompanyPostalCode` |
| `DeliveryServiceTypeCode` | `DeliveryServiceTypeCode` |
| `DeliveryServiceNumber` | `DeliveryServiceNumber` |
| `POBox` | `POBox` |
| `POBoxIsWithoutNumber` | `POBoxIsWithoutNumber` |
| `POBoxPostalCode` | `POBoxPostalCode` |
| `POBoxLobbyName` | `POBoxLobbyName` |
| `POBoxDeviatingCityName` | `POBoxDeviatingCityName` |
| `POBoxDeviatingRegion` | `POBoxDeviatingRegion` |
| `POBoxDeviatingCountry` | `POBoxDeviatingCountry` |
| `CorrespondenceLanguage` | `CorrespondenceLanguage` |
| `PrfrdCommMediumType` | `PrfrdCommMediumType` |
| `AddressLine1Text` | `AddressLine1Text` |
| `FormattedAddress` | `FormattedAddress` |
| `CompleteAddress` | `CompleteAddress` |
| `BPAddressIsProtected` | `BPAddressIsProtected` |
| `StandardUsage` | `StandardUsage` |
| `AddressNonDeliverableReason` | `AddressNonDeliverableReason` |
| `PostBoxNonDeliverableReason` | `PostBoxNonDeliverableReason` |
| `Building` | `Building` |
| `Floor` | `Floor` |
| `RoomNumber` | `RoomNumber` |
| `County` | `County` |
| `BPCountyText` | `BPCountyText` |
| `DataControllerSet` | `DataControllerSet` |
| `DataController1` | `DataController1` |
| `DataController2` | `DataController2` |
| `DataController3` | `DataController3` |
| `DataController4` | `DataController4` |
| `DataController5` | `DataController5` |
| `DataController6` | `DataController6` |
| `DataController7` | `DataController7` |
| `DataController8` | `DataController8` |
| `DataController9` | `DataController9` |
| `DataController10` | `DataController10` |
| `_BPProtectedAddress` | *Association* |
| `_BusinessPartner` | *Association* |
| `_BusinessPartnerAddressUsage` | *Association* |
| `_BusinessPartnerPhoneNumber` | *Association* |
| `_BusPartMobileNumber` | *Association* |
| `_BusPartFaxNumber` | *Association* |
| `_BusinessPartnerEmailAddress` | *Association* |
| `_BusPartWebsiteURL` | *Association* |
| `_BusPartScriptedOrgAddress` | *Association* |
| `_BusPartScriptedPersonAddress` | *Association* |
| `_BusPartScriptedGroupAddress` | *Association* |
| `_StandardPhoneNumber` | *Association* |
| `_StandardMobileNumber` | *Association* |
| `_StandardFaxNumber` | *Association* |
| `_StandardEmailAddress` | *Association* |
| `_StandardWebsiteURL` | *Association* |
| `_CountryText` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Business Partner Address'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    usageType.serviceQuality: #D,
    usageType.sizeCategory : #XXL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_BusinessPartnerAddressTP_3
  as projection on I_BusinessPartnerAddressTP_2 
  {
   @Search.defaultSearchElement: true
   key BusinessPartner,
   @Search.defaultSearchElement: true
   @Search.fuzzinessThreshold: 0.8
   @Search.ranking: #HIGH 
   key AddressNumber,
   @ObjectModel.editableFieldFor: 'AddressNumber'
   AddressIDForEdit,
   BusinessPartnerAddressUUID,
   @EndUserText.label: 'ValidityStartDate'
   @Semantics.businessDate.from: true
   ValidityStartDate,
   @EndUserText.label: 'ValidityEndDate'
   @Semantics.businessDate.to: true
   ValidityEndDate,
   CareOfName,
   StreetPrefixName,
   AdditionalStreetPrefixName,
   HouseNumber,
   StreetName,
   HouseNumberSupplementText,
   StreetSuffixName,
   AdditionalStreetSuffixName,
   HomeCityName,
   @API.element: { releaseState: #DEPRECATED, successor: 'DistrictName' }
   District,
   DistrictName,
   PostalCode,
   CityName,
   Country,
   Region,
   AddressTimeZone,
   TransportZone,
   TaxJurisdiction,
   CompanyPostalCode,
   DeliveryServiceTypeCode,
   DeliveryServiceNumber,
   POBox,
   POBoxIsWithoutNumber,
   POBoxPostalCode,
   POBoxLobbyName,
   POBoxDeviatingCityName,
   POBoxDeviatingRegion,
   POBoxDeviatingCountry,
   CorrespondenceLanguage,
   PrfrdCommMediumType,
   @EndUserText.label: 'AddressLine1Text'
   AddressLine1Text,
   @EndUserText.label: 'FormattedAddress'
   FormattedAddress,
   @EndUserText.label: 'CompleteAddress'
   CompleteAddress,
   BPAddressIsProtected, 
   StandardUsage,
   AddressNonDeliverableReason,
   PostBoxNonDeliverableReason,
   Building,
   Floor,
   RoomNumber,
   @API.element: { releaseState: #DEPRECATED, successor: 'BPCountyText' }
   County, 
   BPCountyText,
   
   ////////////// Start of Datacontroller 10+1 fields -  Not to be consumed by any other views//////////
          @UI.hidden:true
          @Consumption.hidden:true
          DataControllerSet,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController1,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController2,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController3,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController4,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController5,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController6,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController7,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController8,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController9,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController10,

          ////////////// End of Datacontroller 10+1 fields//////////
   
   /* Associations */
   _BPProtectedAddress,
   _BusinessPartner : redirected to parent I_BusinessPartnerTP_3,
   _BusinessPartnerAddressUsage : redirected to composition child I_BusinessPartnerAddrUsageTP_3,
   _BusinessPartnerPhoneNumber : redirected to composition child I_BusPartTelephoneNumberTP_3,
   _BusPartMobileNumber : redirected to composition child I_BusPartMobilePhoneNumberTP_3, 
   _BusPartFaxNumber : redirected to composition child I_BusPartFaxNumberTP_3,
   _BusinessPartnerEmailAddress : redirected to composition child I_BusPartEmailAddressTP_3,
   _BusPartWebsiteURL : redirected to composition child I_BusPartWebsiteTP_3,
   _BusPartScriptedOrgAddress : redirected to composition child I_BusPartScriptedOrgAddrTP_2,
   _BusPartScriptedPersonAddress : redirected to composition child I_BusPartScriptPersonAddrTP_2,
   _BusPartScriptedGroupAddress : redirected to composition child I_BusPartScriptGroupAddrTP_2,
   _StandardPhoneNumber : redirected to I_BusPartTelephoneNumberTP_3, 
   _StandardMobileNumber : redirected to I_BusPartMobilePhoneNumberTP_3, 
   _StandardFaxNumber : redirected to I_BusPartFaxNumberTP_3, 
   _StandardEmailAddress : redirected to I_BusPartEmailAddressTP_3, 
   _StandardWebsiteURL : redirected to I_BusPartWebsiteTP_3, 
   _CountryText
//   _BPDataControllerUsage
}
```
