---
name: I_BUSSOLNORDITMPARTNERADDRTP
description: Bussolnorditmpartneraddrtp
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - partner
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSSOLNORDITMPARTNERADDRTP

**Bussolnorditmpartneraddrtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessSolutionOrder` | `BusinessSolutionOrder` |
| key `BusinessSolutionOrderItem` | `BusinessSolutionOrderItem` |
| key `CustMgmtPartnerFunction` | `CustMgmtPartnerFunction` |
| key `CustMgmtBusinessPartner` | `CustMgmtBusinessPartner` |
| `AddressID` | `AddressID` |
| `AddressPersonID` | `AddressPersonID` |
| `AddressObjectType` | `AddressObjectType` |
| `AddresseeFullName` | `AddresseeFullName` |
| `CityName` | `CityName` |
| `CorrespondenceLanguage` | `CorrespondenceLanguage` |
| `Country` | `Country` |
| `DistrictName` | `DistrictName` |
| `EmailAddress` | `EmailAddress` |
| `FaxAreaCodeSubscriberNumber` | `FaxAreaCodeSubscriberNumber` |
| `FaxExtensionNumber` | `FaxExtensionNumber` |
| `FaxNumberCountry` | `FaxNumberCountry` |
| `FormOfAddress` | `FormOfAddress` |
| `HouseNumber` | `HouseNumber` |
| `MobileNumber` | `MobileNumber` |
| `MobilePhoneCountry` | `MobilePhoneCountry` |
| `OrganizationName1` | `OrganizationName1` |
| `OrganizationName2` | `OrganizationName2` |
| `OrganizationName3` | `OrganizationName3` |
| `OrganizationName4` | `OrganizationName4` |
| `PersonFamilyName` | `PersonFamilyName` |
| `PersonGivenName` | `PersonGivenName` |
| `PhoneExtensionNumber` | `PhoneExtensionNumber` |
| `PhoneNumber` | `PhoneNumber` |
| `PhoneNumberCountry` | `PhoneNumberCountry` |
| `POBox` | `POBox` |
| `POBoxPostalCode` | `POBoxPostalCode` |
| `PostalCode` | `PostalCode` |
| `Region` | `Region` |
| `StreetName` | `StreetName` |
| `StreetPrefixName1` | `StreetPrefixName1` |
| `StreetPrefixName2` | `StreetPrefixName2` |
| `StreetSuffixName1` | `StreetSuffixName1` |
| `StreetSuffixName2` | `StreetSuffixName2` |
| `TaxJurisdiction` | `TaxJurisdiction` |
| `TransportZone` | `TransportZone` |
| `_BusinessSolutionOrderTP` | *Association* |
| `_BusSolnOrdItmPartnerTP` | *Association* |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel.usageType: {
  dataClass:      #TRANSACTIONAL,
  serviceQuality: #C,
  sizeCategory:   #L
}

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@EndUserText.label: 'Solution Order Item Partner Address - TP'

define view entity I_BusSolnOrdItmPartnerAddrTP
  as projection on R_BusSolnOrdItmPartnerAddrTP
{
  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key CustMgmtPartnerFunction,
  key CustMgmtBusinessPartner,
      AddressID,
      AddressPersonID,
      AddressObjectType,
      AddresseeFullName,
      CityName,
      CorrespondenceLanguage,
      Country,
      DistrictName,
      EmailAddress,
      FaxAreaCodeSubscriberNumber,
      FaxExtensionNumber,
      FaxNumberCountry,
      FormOfAddress,
      HouseNumber,
      MobileNumber,
      MobilePhoneCountry,
      OrganizationName1,
      OrganizationName2,
      OrganizationName3,
      OrganizationName4,
      PersonFamilyName,
      PersonGivenName,
      PhoneExtensionNumber,
      PhoneNumber,
      PhoneNumberCountry,
      POBox,
      POBoxPostalCode,
      PostalCode,
      Region,
      StreetName,
      StreetPrefixName1,
      StreetPrefixName2,
      StreetSuffixName1,
      StreetSuffixName2,
      TaxJurisdiction,
      TransportZone,

      /* associations */
      _BusinessSolutionOrderTP : redirected to I_BusinessSolutionOrderTP,
      _BusSolnOrdItmPartnerTP  : redirected to parent I_BusSolnOrdItmPartnerTP
}
```
