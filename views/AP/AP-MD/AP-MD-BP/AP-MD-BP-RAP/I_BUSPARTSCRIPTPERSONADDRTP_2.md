---
name: I_BUSPARTSCRIPTPERSONADDRTP_2
description: Business PartnerSCRIPTPERSONADDRTP 2
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
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTSCRIPTPERSONADDRTP_2

**Business PartnerSCRIPTPERSONADDRTP 2**

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
| key `AddressRepresentationCode` | `AddressRepresentationCode` |
| `AddrRepCodeForEditValue` | `AddrRepCodeForEditValue` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `BusinessPartnerAddressUUID` | `BusinessPartnerAddressUUID` |
| `CareOfName` | `CareOfName` |
| `AdditionalStreetSuffixName` | `AdditionalStreetSuffixName` |
| `PrfrdCommMediumType` | `PrfrdCommMediumType` |
| `POBoxLobbyName` | `POBoxLobbyName` |
| `AddressTimeZone` | `AddressTimeZone` |
| `FullName` | `FullName` |
| `CityName` | `CityName` |
| `District` | `District` |
| `DistrictName` | `DistrictName` |
| `HomeCityName` | `HomeCityName` |
| `StreetName` | `StreetName` |
| `StreetPrefixName` | `StreetPrefixName` |
| `AdditionalStreetPrefixName` | `AdditionalStreetPrefixName` |
| `StreetSuffixName` | `StreetSuffixName` |
| `HouseNumber` | `HouseNumber` |
| `HouseNumberSupplementText` | `HouseNumberSupplementText` |
| `Building` | `Building` |
| `Floor` | `Floor` |
| `RoomNumber` | `RoomNumber` |
| `County` | `County` |
| `BPCountyText` | `BPCountyText` |
| `FormattedAddress` | `FormattedAddress` |
| `FormOfAddress` | `FormOfAddress` |
| `Person` | `Person` |
| `SearchTerm1` | `SearchTerm1` |
| `SearchTerm2` | `SearchTerm2` |
| `FirstName` | `FirstName` |
| `LastName` | `LastName` |
| `BusinessPartnerBirthName` | `BusinessPartnerBirthName` |
| `MiddleName` | `MiddleName` |
| `AdditionalLastName` | `AdditionalLastName` |
| `PersonFullName` | `PersonFullName` |
| `AcademicTitle` | `AcademicTitle` |
| `AcademicTitle2` | `AcademicTitle2` |
| `LastNamePrefix` | `LastNamePrefix` |
| `LastNameSecondPrefix` | `LastNameSecondPrefix` |
| `BusinessPartnerNicknameLabel` | `BusinessPartnerNicknameLabel` |
| `Initials` | `Initials` |
| `NameCountry` | `NameCountry` |
| `NameFormat` | `NameFormat` |
| `BPFirstNameSearchHelp` | `BPFirstNameSearchHelp` |
| `BPLastNameSearchHelp` | `BPLastNameSearchHelp` |
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
| `AuthorizationGroup` | `AuthorizationGroup` |
| `IsBusinessPurposeCompleted` | `IsBusinessPurposeCompleted` |
| `BPAddressIsProtected` | `BPAddressIsProtected` |
| `_BusinessPartner` | *Association* |
| `_BusinessPartnerAddress` | *Association* |
| `_BPProtectedAddress` | *Association* |
| `_AddressRepresentation` | *Association* |
| `_FormOfAddress` | *Association* |
| `_AuthorizationGroup` | *Association* |

## Source Code

```abap
@EndUserText.label: 'BP Scripted Person address'
@AccessControl.authorizationCheck: #MANDATORY
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

define view entity I_BusPartScriptPersonAddrTP_2 
  as projection on I_BusPartScriptedPersonAddrTP
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key BusinessPartner,
      @Search.defaultSearchElement: true
  key AddressNumber,
      @ObjectModel.foreignKey.association: '_AddressRepresentation'
  key AddressRepresentationCode,
      AddrRepCodeForEditValue,
      @EndUserText.label: 'Validity Start Date'
      ValidityStartDate,
      @EndUserText.label: 'Validity End Date'
      ValidityEndDate,
      @EndUserText.label: 'Business Partner Address'
      BusinessPartnerAddressUUID,
      CareOfName,
      AdditionalStreetSuffixName,
      PrfrdCommMediumType,
      POBoxLobbyName,
      AddressTimeZone,
      FullName,
      CityName,
      @API.element: { releaseState: #DEPRECATED, successor: 'DistrictName' } 
      District,
      DistrictName,
      //      CityCode,
      HomeCityName,
      StreetName,
      StreetPrefixName,
      AdditionalStreetPrefixName,
      StreetSuffixName,
      HouseNumber,
      HouseNumberSupplementText,
      Building,
      Floor,
      RoomNumber,
      @API.element: { releaseState: #DEPRECATED, successor: 'BPCountyText' }
      County,
      BPCountyText,
      //      CountyCode,
      @EndUserText.label: 'Address'
      FormattedAddress,
      @ObjectModel.foreignKey.association: '_FormOfAddress'
      FormOfAddress,
      Person,
      SearchTerm1,
      SearchTerm2,
      FirstName,
      LastName,
      BusinessPartnerBirthName,
      MiddleName,
      AdditionalLastName,
      PersonFullName,
      AcademicTitle,
      AcademicTitle2,
      LastNamePrefix,
      LastNameSecondPrefix,
      BusinessPartnerNicknameLabel,
      Initials,
      NameCountry,      
      NameFormat,
      BPFirstNameSearchHelp,
      BPLastNameSearchHelp,
      
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

      _BusinessPartner        : redirected to I_BusinessPartnerTP_3,
      _BusinessPartnerAddress : redirected to parent I_BusinessPartnerAddressTP_3,
      _BPProtectedAddress,
      _AddressRepresentation,
      @ObjectModel.foreignKey.association: '_AuthorizationGroup'
      AuthorizationGroup,
      @Semantics.booleanIndicator
      IsBusinessPurposeCompleted,
      BPAddressIsProtected,
      
      _FormOfAddress,
      _AuthorizationGroup
      //_BPDataControllerUsage
}
```
